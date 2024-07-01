var W = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var r = (n, t, e) => (W(n, t, "read from private field"), e ? e.call(n) : t.get(n)), m = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, v = (n, t, e, a) => (W(n, t, "write to private field"), a ? a.call(n, e) : t.set(n, e), e);
function ne(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var re = { exports: {} };
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function a() {
  }
  Object.create && (a.prototype = /* @__PURE__ */ Object.create(null), new a().__proto__ || (e = !1));
  function l(o, i, c) {
    this.fn = o, this.context = i, this.once = c || !1;
  }
  function g(o, i, c, h, b) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var y = new l(c, h || o, b), d = e ? e + i : i;
    return o._events[d] ? o._events[d].fn ? o._events[d] = [o._events[d], y] : o._events[d].push(y) : (o._events[d] = y, o._eventsCount++), o;
  }
  function p(o, i) {
    --o._eventsCount === 0 ? o._events = new a() : delete o._events[i];
  }
  function s() {
    this._events = new a(), this._eventsCount = 0;
  }
  s.prototype.eventNames = function() {
    var i = [], c, h;
    if (this._eventsCount === 0)
      return i;
    for (h in c = this._events)
      t.call(c, h) && i.push(e ? h.slice(1) : h);
    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(c)) : i;
  }, s.prototype.listeners = function(i) {
    var c = e ? e + i : i, h = this._events[c];
    if (!h)
      return [];
    if (h.fn)
      return [h.fn];
    for (var b = 0, y = h.length, d = new Array(y); b < y; b++)
      d[b] = h[b].fn;
    return d;
  }, s.prototype.listenerCount = function(i) {
    var c = e ? e + i : i, h = this._events[c];
    return h ? h.fn ? 1 : h.length : 0;
  }, s.prototype.emit = function(i, c, h, b, y, d) {
    var _ = e ? e + i : i;
    if (!this._events[_])
      return !1;
    var u = this._events[_], L = arguments.length, S, w;
    if (u.fn) {
      switch (u.once && this.removeListener(i, u.fn, void 0, !0), L) {
        case 1:
          return u.fn.call(u.context), !0;
        case 2:
          return u.fn.call(u.context, c), !0;
        case 3:
          return u.fn.call(u.context, c, h), !0;
        case 4:
          return u.fn.call(u.context, c, h, b), !0;
        case 5:
          return u.fn.call(u.context, c, h, b, y), !0;
        case 6:
          return u.fn.call(u.context, c, h, b, y, d), !0;
      }
      for (w = 1, S = new Array(L - 1); w < L; w++)
        S[w - 1] = arguments[w];
      u.fn.apply(u.context, S);
    } else {
      var oe = u.length, N;
      for (w = 0; w < oe; w++)
        switch (u[w].once && this.removeListener(i, u[w].fn, void 0, !0), L) {
          case 1:
            u[w].fn.call(u[w].context);
            break;
          case 2:
            u[w].fn.call(u[w].context, c);
            break;
          case 3:
            u[w].fn.call(u[w].context, c, h);
            break;
          case 4:
            u[w].fn.call(u[w].context, c, h, b);
            break;
          default:
            if (!S)
              for (N = 1, S = new Array(L - 1); N < L; N++)
                S[N - 1] = arguments[N];
            u[w].fn.apply(u[w].context, S);
        }
    }
    return !0;
  }, s.prototype.on = function(i, c, h) {
    return g(this, i, c, h, !1);
  }, s.prototype.once = function(i, c, h) {
    return g(this, i, c, h, !0);
  }, s.prototype.removeListener = function(i, c, h, b) {
    var y = e ? e + i : i;
    if (!this._events[y])
      return this;
    if (!c)
      return p(this, y), this;
    var d = this._events[y];
    if (d.fn)
      d.fn === c && (!b || d.once) && (!h || d.context === h) && p(this, y);
    else {
      for (var _ = 0, u = [], L = d.length; _ < L; _++)
        (d[_].fn !== c || b && !d[_].once || h && d[_].context !== h) && u.push(d[_]);
      u.length ? this._events[y] = u.length === 1 ? u[0] : u : p(this, y);
    }
    return this;
  }, s.prototype.removeAllListeners = function(i) {
    var c;
    return i ? (c = e ? e + i : i, this._events[c] && p(this, c)) : (this._events = new a(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = e, s.EventEmitter = s, n.exports = s;
})(re);
var ie = re.exports;
const le = /* @__PURE__ */ ne(ie);
var ae = function(t) {
  return ce(t) && !he(t);
};
function ce(n) {
  return !!n && typeof n == "object";
}
function he(n) {
  var t = Object.prototype.toString.call(n);
  return t === "[object RegExp]" || t === "[object Date]" || de(n);
}
var ue = typeof Symbol == "function" && Symbol.for, fe = ue ? Symbol.for("react.element") : 60103;
function de(n) {
  return n.$$typeof === fe;
}
function pe(n) {
  return Array.isArray(n) ? [] : {};
}
function R(n, t) {
  return t.clone !== !1 && t.isMergeableObject(n) ? U(pe(n), n, t) : n;
}
function we(n, t, e) {
  return n.concat(t).map(function(a) {
    return R(a, e);
  });
}
function me(n, t) {
  if (!t.customMerge)
    return U;
  var e = t.customMerge(n);
  return typeof e == "function" ? e : U;
}
function be(n) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n).filter(function(t) {
    return Object.propertyIsEnumerable.call(n, t);
  }) : [];
}
function X(n) {
  return Object.keys(n).concat(be(n));
}
function se(n, t) {
  try {
    return t in n;
  } catch {
    return !1;
  }
}
function ge(n, t) {
  return se(n, t) && !(Object.hasOwnProperty.call(n, t) && Object.propertyIsEnumerable.call(n, t));
}
function ye(n, t, e) {
  var a = {};
  return e.isMergeableObject(n) && X(n).forEach(function(l) {
    a[l] = R(n[l], e);
  }), X(t).forEach(function(l) {
    ge(n, l) || (se(n, l) && e.isMergeableObject(t[l]) ? a[l] = me(l, e)(n[l], t[l], e) : a[l] = R(t[l], e));
  }), a;
}
function U(n, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || we, e.isMergeableObject = e.isMergeableObject || ae, e.cloneUnlessOtherwiseSpecified = R;
  var a = Array.isArray(t), l = Array.isArray(n), g = a === l;
  return g ? a ? e.arrayMerge(n, t, e) : ye(n, t, e) : R(t, e);
}
U.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(a, l) {
    return U(a, l, e);
  }, {});
};
var ve = U, Oe = ve;
const Ae = /* @__PURE__ */ ne(Oe);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Z(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Ee(n) {
  var t, e;
  return Z(n) === !1 ? !1 : (t = n.constructor, t === void 0 ? !0 : (e = t.prototype, !(Z(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
function Q(n) {
  return n instanceof Element ? n : document.querySelector(n);
}
async function V(n) {
  return await new Promise((t) => setTimeout(t, n));
}
const Ce = '[data-elem="drawer.panel"]', F = "data-drawers-group", _e = [
  "a[href]",
  "area[href]",
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  "select:not([disabled]):not([aria-hidden])",
  "textarea:not([disabled]):not([aria-hidden])",
  "button:not([disabled]):not([aria-hidden])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  '[tabindex]:not([tabindex^="-"])'
], ee = {
  modal: !0,
  focusOnChild: !0,
  closeOnEsc: !0,
  closeOnOutsideClick: !0,
  closeOnUnderlayClick: !0,
  onCloseConfirm: () => !0,
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
  lockPageScroll: !0
};
function te(n) {
  return Ae.all(n, {
    isMergeableObject: Ee
  });
}
var A, O, P, B;
class Y {
  constructor({ target: t, type: e, owner: a }) {
    m(this, A, void 0);
    m(this, O, void 0);
    m(this, P, void 0);
    m(this, B, !1);
    const l = Q(t);
    if (!l)
      throw new Error("Trigger element cannot be found");
    if (!a)
      throw new Error("Owning drawer instance hasn't been provided");
    v(this, A, l), v(this, O, a), v(this, P, e), this.init();
  }
  // Accessors
  get isActive() {
    return r(this, B);
  }
  get owner() {
    return r(this, O);
  }
  // Methods
  init() {
    r(this, A).addEventListener("click", (t) => this.clickHandler(t)), r(this, O).on("open", () => this.setActive(!0)), r(this, O).on("close", () => this.setActive(!1));
  }
  clickHandler(t) {
    t.__drawerTrigger = this, r(this, P) === "open" ? r(this, O).isOpen || r(this, O).open(r(this, A)) : r(this, P) === "close" ? r(this, O).isOpen && r(this, O).close(r(this, A)) : r(this, O).isOpen ? r(this, O).close(r(this, A)) : r(this, O).open(r(this, A));
  }
  setActive(t) {
    v(this, B, t), t ? r(this, A).classList.add("drawer-trigger_active") : r(this, A).classList.remove("drawer-trigger_active");
  }
}
A = new WeakMap(), O = new WeakMap(), P = new WeakMap(), B = new WeakMap();
var f, K, j, H, T;
class Le extends le {
  constructor({ target: e, options: a }) {
    super();
    m(this, f, void 0);
    m(this, K, void 0);
    m(this, j, void 0);
    m(this, H, void 0);
    m(this, T, void 0);
    this.handleDocumentClick = async (s) => {
      var c;
      if (((c = s.__drawerTrigger) == null ? void 0 : c.owner) === this)
        return;
      const o = s.target;
      if (s.composedPath(), this.dom.panel.contains(o))
        return;
      const i = o == null ? void 0 : o.closest("[data-drawer]");
      i ? i.getAttribute("data-drawer") === r(this, T) ? this.handleUnderlayClick(s) : this.handleOtherDrawerClick(s) : this.handleOutsideClick(s);
    }, this.handleKeydown = (s) => {
      r(this, f).closeOnEsc && s.key === "Escape" && this.close();
    };
    const l = te(a ? [ee, a] : [ee]), g = Q(e);
    if (g === null)
      throw new Error("Drawer's root cannot be found");
    v(this, T, g.getAttribute("data-drawer"));
    const p = g.querySelector(Ce);
    if (p === null)
      throw new Error(`Drawer's panel cannot be found. Alias: ${r(this, T)}`);
    this.dom = {
      root: g,
      panel: p
    }, this.setOptions(l), this.dom.panel.setAttribute("tabindex", "-1"), this.dom.root.classList.add("drawer_initialized");
  }
  addEventListeners() {
    this.dom.root.addEventListener("keydown", this.handleKeydown), document.addEventListener("click", this.handleDocumentClick);
  }
  removeEventListeners() {
    this.dom.root.removeEventListener("keydown", this.handleKeydown), document.removeEventListener("click", this.handleDocumentClick);
  }
  // Accessors
  get isOpen() {
    return r(this, j);
  }
  get isModal() {
    return r(this, f).modal;
  }
  set isModal(e) {
    this.dom.root.classList[e ? "add" : "remove"]("drawer_modal");
  }
  get willLockScroll() {
    return r(this, f).lockPageScroll;
  }
  set zIndex(e) {
    this.dom.root.style.setProperty("--z-index", String(e)), v(this, K, e);
  }
  get zIndex() {
    return r(this, K);
  }
  // Methods
  async open(e) {
    await V(0), !r(this, j) && (this.emit("beforeOpen", { drawer: this, trigger: e }), v(this, j, !0), this.dom.root.classList.add(r(this, f).openingClass), this.emit("open", { drawer: this, trigger: e }), typeof r(this, f).openAnimationDuration == "number" && await V(r(this, f).openAnimationDuration), this.dom.root.classList.remove(r(this, f).openingClass), this.dom.root.classList.add(r(this, f).openClass), this.emit("openAnimationEnd", { drawer: this, trigger: e }), this.focus(), this.addEventListeners());
  }
  async close(e) {
    r(this, f).onCloseConfirm && !r(this, f).onCloseConfirm(this, e) || (this.emit("beforeClose", { drawer: this, trigger: e }), this.removeEventListeners(), v(this, j, !1), this.dom.root.classList.remove(r(this, f).openClass), this.dom.root.classList.add(r(this, f).closingClass), this.emit("close", { drawer: this, trigger: e }), typeof r(this, f).closeAnimationDuration == "number" && await V(r(this, f).closeAnimationDuration), this.dom.root.classList.remove(r(this, f).closingClass), this.emit("closeAnimationEnd", { drawer: this, trigger: e }));
  }
  handleOtherDrawerClick(e) {
  }
  handleOutsideClick(e) {
    r(this, f).closeOnOutsideClick && (typeof r(this, f).closeOnOutsideClick == "object" && r(this, f).closeOnOutsideClick.hasOwnProperty("checkTarget") ? r(this, f).closeOnOutsideClick.checkTarget(e.target) && this.close() : this.close());
  }
  handleUnderlayClick(e) {
    r(this, f).closeOnOutsideClick && this.close();
  }
  focus() {
    r(this, f).focusOnChild && this.focusChild() || this.focusSelf();
  }
  focusSelf() {
    this.dom.panel.focus();
  }
  focusChild() {
    const e = this.dom.panel.querySelector(_e.join(","));
    return e ? (e.focus(), !0) : !1;
  }
  setOptions(e) {
    var a;
    e.hasOwnProperty("modal") && ((a = r(this, f)) == null ? void 0 : a.modal) !== e.modal && (this.isModal = e.modal), v(this, f, r(this, f) ? te([r(this, f), e]) : e);
  }
  assignGroup(e) {
    v(this, H, e);
  }
}
f = new WeakMap(), K = new WeakMap(), j = new WeakMap(), H = new WeakMap(), T = new WeakMap();
var M;
class ke {
  constructor() {
    m(this, M, /* @__PURE__ */ new Map());
  }
  lock(t, e) {
    r(this, M).has(t) || r(this, M).set(t, /* @__PURE__ */ new Set());
    const a = r(this, M).get(t);
    a.size === 0 && t.classList.add("scroll-lock-by-drawer"), a.add(e);
  }
  unlock(t, e) {
    const a = r(this, M).get(t);
    a == null || a.delete(e), (!a || a.size === 0) && t.classList.remove("scroll-lock-by-drawer");
  }
}
M = new WeakMap();
var x, E, C, D, k;
const $ = class $ {
  constructor(t) {
    m(this, x, void 0);
    m(this, E, void 0);
    m(this, C, void 0);
    m(this, D, void 0);
    m(this, k, void 0);
    v(this, E, []), v(this, C, []), v(this, k, /* @__PURE__ */ new Map()), this.onBeforeOpen = ({ drawer: l, trigger: g }) => {
      l.isModal ? (r(this, k).set(l, r(this, E).length), r(this, E).push(l), l.zIndex = r(this, C).length + r(this, E).length) : (r(this, k).set(l, r(this, C).length), r(this, C).push(l), l.zIndex = r(this, C).length, r(this, E).length > 0 && r(this, E).forEach((p, s) => p.zIndex = r(this, C).length + s + 1)), l.willLockScroll && this.lockScroll(l);
    }, this.onCloseAnimationEnd = ({ drawer: l, trigger: g }) => {
      const p = l.isModal ? r(this, E) : r(this, C);
      for (delete p[r(this, k).get(l)]; p.length && !p.at(-1); )
        p.pop();
      r(this, k).delete(l), this.unlockScroll(l);
    };
    const e = Q(t);
    if (e === null)
      throw new Error("Drawer's group root cannot be found");
    v(this, x, e);
    const a = r(this, x).closest("[data-scrollable], html") || r(this, x).matches("[data-scrollable], html") && r(this, x);
    if (a === null)
      throw new Error("Scrollable container for group root cannot be found");
    v(this, D, a);
  }
  add(t) {
    t.on("beforeOpen", this.onBeforeOpen), t.on("closeAnimationEnd", this.onCloseAnimationEnd), t.assignGroup(this);
  }
  lockScroll(t) {
    $.scrollLock.lock(r(this, D), t);
  }
  unlockScroll(t) {
    $.scrollLock.unlock(r(this, D), t);
  }
};
x = new WeakMap(), E = new WeakMap(), C = new WeakMap(), D = new WeakMap(), k = new WeakMap(), $.scrollLock = new ke();
let G = $;
var I, z;
const q = class q {
  constructor() {
    m(this, I, /* @__PURE__ */ new Map());
    m(this, z, /* @__PURE__ */ new Map());
    if (q.instance)
      return q.instance;
    q.instance = this;
  }
  init(t) {
    document.querySelectorAll(`[${F}]`).forEach((s) => {
      const o = s.getAttribute(F);
      typeof o == "string" && r(this, z).set(o, new G(s));
    }), r(this, z).set("default", new G(document.documentElement)), document.querySelectorAll("[data-drawer]").forEach((s) => {
      var b;
      const o = s.getAttribute("data-drawer");
      if (typeof o != "string")
        return;
      const i = new Le({ target: s, options: t });
      r(this, I).set(o, i);
      const c = s.closest(`[${F}]`), h = c ? c.getAttribute(F) : "default";
      if (typeof h != "string")
        throw new Error("Group doesn't have alias set correctly");
      (b = r(this, z).get(h)) == null || b.add(i);
    }), document.querySelectorAll("[data-drawer-open], [data-drawer-close], [data-drawer-toggle]").forEach((s) => {
      if (s.hasAttribute("data-drawer-open")) {
        const o = s.getAttribute("data-drawer-open");
        g(s, o);
        const i = this.get(o);
        p(s, i, o), new Y({ target: s, type: "open", owner: i });
      } else if (s.hasAttribute("data-drawer-close")) {
        const o = s.getAttribute("data-drawer-close");
        g(s, o);
        const i = this.get(o);
        p(s, i, o), new Y({ target: s, type: "close", owner: i });
      } else {
        const o = s.getAttribute("data-drawer-toggle");
        g(s, o);
        const i = this.get(o);
        p(s, i, o), new Y({ target: s, type: "toggle", owner: i });
      }
    });
    function g(s, o) {
      if (!o)
        throw new Error(`Drawer alias should be specified in the trigger attribute. Trigger elem: ${s}`);
    }
    function p(s, o, i) {
      if (!o)
        throw new Error(`Drawer hadn't been found for the trigger elem: ${s}. Alias: ${i}`);
    }
  }
  open(t, { trigger: e, options: a } = {}) {
    var l;
    (l = this.get(t)) == null || l.open(e);
  }
  close(t, { trigger: e, options: a } = {}) {
    var l;
    (l = this.get(t)) == null || l.close(e);
  }
  get(t) {
    return typeof t == "string" && r(this, I).get(t) || null;
  }
  on(t, e, a) {
    var l;
    if (t)
      (l = this.get(t)) == null || l.on(e, a);
    else
      for (const [g, p] of r(this, I))
        p.on(e, a);
  }
};
I = new WeakMap(), z = new WeakMap();
let J = q;
typeof window < "u" && (window.hasOwnProperty("app") || (window.app = {}), window.app.drawers = new J());
export {
  Le as Drawer,
  G as DrawersGroup,
  Y as Trigger,
  J as default
};
