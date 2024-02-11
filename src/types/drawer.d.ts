import { Drawer } from "..";

export type TDrawerOptions = {
	modal: boolean;
	focusOnChild: boolean;
	closeOnEsc: boolean;
	closeOnOutsideClick: {
		checkTarget: (target: EventTarget) => boolean;
	} | boolean,
	closeOnUnderlayClick: boolean,
	staticZIndex?: number;
	onCloseConfirm?: ((drawer: Drawer, trigger?: Element) => boolean) | null;
	onBeforeClose?: ((drawer: Drawer, trigger?: Element) => void) | null;
	onClose?: ((drawer: Drawer) => void) | null;
	onCloseAnimationEnd?: ((drawer: Drawer) => void) | null;
	onBeforeOpen?: ((drawer: Drawer) => void) | null;
	onOpen?: ((drawer: Drawer) => void) | null;
	onOpenAnimationEnd?: ((drawer: Drawer) => void) | null;
	openClass: string;
	openAnimationDuration: number;
	closeAnimationDuration: number;
	lockPageScroll: boolean;
};
export type TCompositeOptions = {
	initialZIndex: number;
	staticZIndex: boolean;
	modal: boolean,
};
export type TDrawerDom = {
	root: HTMLElement;
	panel: HTMLElement;
};