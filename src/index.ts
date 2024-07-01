import "./index.css";
import EventEmmiter from "eventemitter3";
import merge from "deepmerge";
import { isPlainObject } from "is-plain-object";
import { TTarget } from "./types/shared";
import { TDrawerDom, TDrawerOptions } from "./types/drawer";
import { TTriggerType } from "./types/trigger";
import { delay, getTargetElem } from "./utils";

const PANEL_SELECTOR = `[data-elem="drawer.panel"]`;
const GROUP_ATTR = `data-drawers-group`;

const FOCUSABLE_ELEMENTS = [
	'a[href]',
	'area[href]',
	'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
	'select:not([disabled]):not([aria-hidden])',
	'textarea:not([disabled]):not([aria-hidden])',
	'button:not([disabled]):not([aria-hidden])',
	'iframe',
	'object',
	'embed',
	'[contenteditable]',
	'[tabindex]:not([tabindex^="-"])'
]

const defaultOptions: TDrawerOptions = {
	modal: true,
	focusOnChild: true,
	closeOnEsc: true,
	closeOnOutsideClick: true,
	closeOnUnderlayClick: true,
	onCloseConfirm: () => true,
	onBeforeClose: null,
	onClose: null,
	onCloseAnimationEnd: null,
	onBeforeOpen: null,
	onOpen: null,
	onOpenAnimationEnd: null,
	openClass: "drawer_open",
	closingClass: "drawer_closing",
	openingClass: "drawer_opening",
	openAnimationDuration: 0,
	closeAnimationDuration: 0,
	lockPageScroll: true,
};
function mergeOptions(optionsSet: TDrawerOptions[]) {
		return merge.all(optionsSet, {
			isMergeableObject: isPlainObject
		}) as TDrawerOptions;
}
export class Trigger {
	#root: Element;
	#owner: Drawer;
	#type: TTriggerType;
	#active: boolean = false;
	constructor({ target, type, owner }: { target: TTarget, type: TTriggerType, owner: Drawer }) {
		const root = getTargetElem(target);
		if (!root) throw new Error("Trigger element cannot be found");
		if (!owner) throw new Error("Owning drawer instance hasn't been provided");
		this.#root = root;
		this.#owner = owner;
		this.#type = type;
		this.init();
	}
	// Accessors
	get isActive() {
		return this.#active;
	}
	get owner() {
		return this.#owner;
	}
	// Methods
	init() {
		this.#root.addEventListener("click", (e) => this.clickHandler(e as PointerEvent));
		this.#owner.on("open", () => this.setActive(true));
		this.#owner.on("close", () => this.setActive(false));
	}
	clickHandler(event: PointerEvent) {
		event.__drawerTrigger = this;
		if (this.#type === "open") {
			if (!this.#owner.isOpen) this.#owner.open(this.#root);
		} else if (this.#type === "close") {
			if (this.#owner.isOpen) this.#owner.close(this.#root);
		} else {
			this.#owner.isOpen ? this.#owner.close(this.#root) : this.#owner.open(this.#root);
		}
	}
	setActive(next: boolean) {
		this.#active = next;
		next ?
		this.#root.classList.add("drawer-trigger_active") :
		this.#root.classList.remove("drawer-trigger_active");
	}
}
export class Drawer extends EventEmmiter {
	#vars: TDrawerOptions;
	#zIndex: number;
	dom: TDrawerDom;
	#open: boolean;
	#group: DrawersGroup;
	#alias: string;
	constructor({ target, options }: { target: TTarget, options?: TDrawerOptions }) {
		super();
		const nextOptions = mergeOptions(options ? [defaultOptions, options] : [defaultOptions]);
		const root = getTargetElem(target) as HTMLElement;
		if (root === null) throw new Error("Drawer's root cannot be found");
		this.#alias = root.getAttribute("data-drawer")!;
		const panel = root.querySelector(PANEL_SELECTOR) as HTMLElement;
		if (panel === null) throw new Error(`Drawer's panel cannot be found. Alias: ${this.#alias}`);
		this.dom = {
			root,
			panel,
		};
		this.setOptions(nextOptions);
		this.dom.panel.setAttribute("tabindex", "-1");
		this.dom.root.classList.add("drawer_initialized");
	}
	addEventListeners() {
		this.dom.root.addEventListener("keydown", this.handleKeydown);
		document.addEventListener("click", this.handleDocumentClick);
	}
	removeEventListeners() {
		this.dom.root.removeEventListener("keydown", this.handleKeydown);
		document.removeEventListener("click", this.handleDocumentClick);
	}
	// Accessors
	get isOpen() {
		return this.#open;
	}
	get isModal() {
		return this.#vars.modal;
	}
	set isModal(next) {
		this.dom.root.classList[next ? "add" : "remove" ]("drawer_modal");
	}
	get willLockScroll() {
		return this.#vars.lockPageScroll;
	}
	set zIndex(next) {
		this.dom.root.style.setProperty("--z-index", String(next));
		this.#zIndex = next;
	}
	get zIndex() {
		return this.#zIndex;
	}
	// Methods
	async open(trigger?: Element) {
		await delay(0);
		if (this.#open) return;
		this.emit("beforeOpen", { drawer: this, trigger });
		this.#open = true;
		this.dom.root.classList.add(this.#vars.openingClass);
		this.emit("open", { drawer: this, trigger });
		if (typeof this.#vars.openAnimationDuration === "number") await delay(this.#vars.openAnimationDuration);
		this.dom.root.classList.remove(this.#vars.openingClass);
		this.dom.root.classList.add(this.#vars.openClass);
		this.emit("openAnimationEnd", { drawer: this, trigger });
		this.focus();
		this.addEventListeners();
	}
	async close(trigger?: Element) {
		if (this.#vars.onCloseConfirm && !this.#vars.onCloseConfirm(this, trigger)) return;
		this.emit("beforeClose", { drawer: this, trigger });
		this.removeEventListeners();
		this.#open = false;
		this.dom.root.classList.remove(this.#vars.openClass);
		this.dom.root.classList.add(this.#vars.closingClass);
		this.emit("close", { drawer: this, trigger });
		if (typeof this.#vars.closeAnimationDuration === "number") await delay(this.#vars.closeAnimationDuration);
		this.dom.root.classList.remove(this.#vars.closingClass);
		this.emit("closeAnimationEnd", { drawer: this, trigger });
	}
	handleDocumentClick = async (event: MouseEvent) => {
		// Если клик был по триггеру связанному с этим дровером
		if (event.__drawerTrigger?.owner === this) return;
		const target = event.target as HTMLElement;
		const composed = event.composedPath();
		// Клик был внутри тела дровера
		if (this.dom.panel.contains(target)) return;
		const root = target?.closest("[data-drawer]");
		if (root) { // Underlay click
			const alias = root.getAttribute("data-drawer");
			if (alias === this.#alias) { // Reletaed to this drawer
				this.handleUnderlayClick(event);
			} else {
				this.handleOtherDrawerClick(event);
			}
		} else { // Outside click
			this.handleOutsideClick(event);
		}
	};
	handleOtherDrawerClick(event: MouseEvent) {
		
	}
	handleKeydown = (event: KeyboardEvent) => {
		if (this.#vars.closeOnEsc && event.key === "Escape") this.close();
	}
	handleOutsideClick(event: MouseEvent) {
		// if (event.target === this.initiator) return;
		// Нужно подумать еще, как обработать двойной вызов закрытия,
		// В случае когда внешний клик был сделан по тригеру, т.е. тригер инициирует закрытие
		// И факт внешнего клика
		if (this.#vars.closeOnOutsideClick) {
			if (typeof this.#vars.closeOnOutsideClick === "object" &&
				this.#vars.closeOnOutsideClick.hasOwnProperty("checkTarget")) {
					if (this.#vars.closeOnOutsideClick.checkTarget(event.target!)) this.close();
				} else this.close();
		}
	}
	handleUnderlayClick(event: MouseEvent) {
		if (this.#vars.closeOnOutsideClick) this.close();
	}
	focus() {
		if (this.#vars.focusOnChild && this.focusChild()) return;
		this.focusSelf();
	}
	focusSelf() {
		this.dom.panel.focus();
	}
	focusChild() {
		const focusableChild = this.dom.panel.querySelector(FOCUSABLE_ELEMENTS.join(",")) as HTMLElement;
		if (!focusableChild) return false;
		return focusableChild.focus(), true;
	}
	setOptions(nextOptions: TDrawerOptions) {
		if (nextOptions.hasOwnProperty("modal") && this.#vars?.modal !== nextOptions.modal) {
			this.isModal = nextOptions.modal;
		}
		this.#vars = this.#vars ? mergeOptions([this.#vars, nextOptions]) : nextOptions;
	}
	assignGroup(group: DrawersGroup) {
		this.#group = group;
	}
}
class ScrollLock {
	#holders: Map<HTMLElement, Set<Drawer>> = new Map();
	constructor() {}
	lock(container: HTMLElement, drawer: Drawer) {
		if (!this.#holders.has(container)) {
			this.#holders.set(container, new Set());
		}
		const holders = this.#holders.get(container)!;
		if (holders.size === 0) container.classList.add("scroll-lock-by-drawer");
		holders.add(drawer);
	}
	unlock(container: HTMLElement, drawer: Drawer) {
		const holders = this.#holders.get(container);
		holders?.delete(drawer);
		if (!holders || holders.size === 0) container.classList.remove("scroll-lock-by-drawer");
	}
}
export class DrawersGroup {
	static scrollLock = new ScrollLock();
	#root: HTMLElement;
	#openModals: Drawer[] = [];
	#openNonModals: Drawer[] = [];
	#scrollContainer: HTMLElement;
	#openDrawersIndex: Map<Drawer, number> = new Map();
	constructor(target: TTarget) {
		const root = getTargetElem(target) as HTMLElement;
		if (root === null) throw new Error("Drawer's group root cannot be found");
		this.#root = root;
		const scrollContainer = this.#root.closest(`[data-scrollable], html`) as HTMLElement || this.#root.matches(`[data-scrollable], html`) && this.#root;
		if (scrollContainer === null) throw new Error("Scrollable container for group root cannot be found");
		this.#scrollContainer = scrollContainer;
	}
	add(target: Drawer) {
		target.on("beforeOpen", this.onBeforeOpen);
		target.on("closeAnimationEnd", this.onCloseAnimationEnd);
		target.assignGroup(this);
	}
	onBeforeOpen = ({ drawer, trigger }) => {
		// Calc zIndex
		// По хорошему, в этой же группе не должны открываться немодальные окна после модальных
		// По этому, будем считать zIndex сплошняком просто прибавляя к крайнему еденицу
		// а если в друг произойдет открытие немодального окна, то пересчитаем индексы всех модальных окон в группе
		if (drawer.isModal) {
			this.#openDrawersIndex.set(drawer, this.#openModals.length);
			this.#openModals.push(drawer);
			drawer.zIndex = this.#openNonModals.length + this.#openModals.length;
		} else {
			this.#openDrawersIndex.set(drawer, this.#openNonModals.length);
			this.#openNonModals.push(drawer);
			drawer.zIndex = this.#openNonModals.length;
			if (this.#openModals.length > 0) {
				this.#openModals.forEach((drawer, idx) => drawer.zIndex = this.#openNonModals.length + idx + 1);
			}
		}
		if (drawer.willLockScroll) this.lockScroll(drawer);	
	}
	onCloseAnimationEnd = ({ drawer, trigger }) => {
		const stack = drawer.isModal ? this.#openModals : this.#openNonModals;
		delete stack[this.#openDrawersIndex.get(drawer)!];
		while(stack.length && !stack.at(-1)) stack.pop();
		this.#openDrawersIndex.delete(drawer);
		this.unlockScroll(drawer);
	}
	lockScroll(drawer: Drawer) {
		DrawersGroup.scrollLock.lock(this.#scrollContainer, drawer);
	}
	unlockScroll(drawer: Drawer) {
		DrawersGroup.scrollLock.unlock(this.#scrollContainer, drawer);
	}
}
export default class DrawersComposite {
	static instance: DrawersComposite;
	#drawersIndex: Map<string, Drawer> = new Map();
	#groupsIndex: Map<string, DrawersGroup> = new Map();
	constructor() {
		if (DrawersComposite.instance) return DrawersComposite.instance;
		DrawersComposite.instance = this;
	}
	init(options?: TDrawerOptions) {
		const groupElems = document.querySelectorAll(`[${GROUP_ATTR}]`);
		groupElems.forEach(groupElem => {
			const groupAlias = groupElem.getAttribute(GROUP_ATTR);
			if (typeof groupAlias !== "string") return;
			this.#groupsIndex.set(groupAlias, new DrawersGroup(groupElem));
		});
		this.#groupsIndex.set("default", new DrawersGroup(document.documentElement));
		const drawerElems = document.querySelectorAll(`[data-drawer]`);
		drawerElems.forEach(drawerElem => {
			const drawerAlias = drawerElem.getAttribute("data-drawer");
			if (typeof drawerAlias !== "string") return;
			const drawer = new Drawer({ target: drawerElem, options });
			this.#drawersIndex.set(drawerAlias, drawer);

			const groupElem = drawerElem.closest(`[${GROUP_ATTR}]`);
			const groupAlias = groupElem ? groupElem.getAttribute(GROUP_ATTR) : "default";
			if (typeof groupAlias !== "string") throw new Error("Group doesn't have alias set correctly");
			this.#groupsIndex.get(groupAlias)?.add(drawer);
		});
		const triggerElems = document.querySelectorAll(`[data-drawer-open], [data-drawer-close], [data-drawer-toggle]`);
		triggerElems.forEach(triggerElem => {
			if (triggerElem.hasAttribute("data-drawer-open")) {
				const drawerAlias = triggerElem.getAttribute("data-drawer-open");
				checkAlias(triggerElem, drawerAlias);
				const drawer = this.get(drawerAlias);
				checkDrawer(triggerElem, drawer, drawerAlias);
				new Trigger({ target: triggerElem, type: "open", owner: drawer! });
			} else if (triggerElem.hasAttribute("data-drawer-close")) {
				const drawerAlias = triggerElem.getAttribute("data-drawer-close");
				checkAlias(triggerElem, drawerAlias);
				const drawer = this.get(drawerAlias);
				checkDrawer(triggerElem, drawer, drawerAlias);
				new Trigger({ target: triggerElem, type: "close", owner: drawer! });
			} else {
				const drawerAlias = triggerElem.getAttribute("data-drawer-toggle");
				checkAlias(triggerElem, drawerAlias);
				const drawer = this.get(drawerAlias);
				checkDrawer(triggerElem, drawer, drawerAlias);
				new Trigger({ target: triggerElem, type: "toggle", owner: drawer! });
			}
		});
		function checkAlias(triggerElem: Element, alias?: string | null) {
			if (!alias) throw new Error(`Drawer alias should be specified in the trigger attribute. Trigger elem: ${triggerElem}`);
		}
		function checkDrawer(triggerElem: Element, drawer?: Drawer | null, alias?: string | null) {
			if (!drawer) throw new Error(`Drawer hadn't been found for the trigger elem: ${triggerElem}. Alias: ${alias}`);
		}
	}
	open(alias: string, { trigger, options }: { trigger?: HTMLElement, options?: TDrawerOptions } = {}) {
		this.get(alias)?.open(trigger);
	}
	close(alias: string, { trigger, options }: { trigger?: HTMLElement, options?: TDrawerOptions } = {}) {
		this.get(alias)?.close(trigger);
	}
	get(alias?: string | null) {
		return typeof alias === "string" && this.#drawersIndex.get(alias) || null;
	}
	on(alias: string, type: string, callback: () => void) {
		if (alias) {
			this.get(alias)?.on(type, callback);
		} else {
			for (const [alias, drawer] of this.#drawersIndex) {
				drawer.on(type, callback);
			}
		}
	}
}

if (typeof window !== 'undefined') {
	if (!window.hasOwnProperty("app")) window.app = {};
  window.app.drawers = new DrawersComposite();
}