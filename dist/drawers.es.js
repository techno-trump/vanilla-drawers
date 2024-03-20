var J = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var r = (n, t, e) => (J(n, t, "read from private field"), e ? e.call(n) : t.get(n)), y = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, b = (n, t, e, l) => (J(n, t, "write to private field"), l ? l.call(n, e) : t.set(n, e), e);
function te(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ne = { exports: {} };
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function l() {
  }
  Object.create && (l.prototype = /* @__PURE__ */ Object.create(null), new l().__proto__ || (e = !1));
  function s(h, i, o) {
    this.fn = h, this.context = i, this.once = o || !1;
  }
  function f(h, i, o, c, O) {
    if (typeof o != "function")
      throw new TypeError("The listener must be a function");
    var g = new s(o, c || h, O), w = e ? e + i : i;
    return h._events[w] ? h._events[w].fn ? h._events[w] = [h._events[w], g] : h._events[w].push(g) : (h._events[w] = g, h._eventsCount++), h;
  }
  function d(h, i) {
    --h._eventsCount === 0 ? h._events = new l() : delete h._events[i];
  }
  function u() {
    this._events = new l(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var i = [], o, c;
    if (this._eventsCount === 0)
      return i;
    for (c in o = this._events)
      t.call(o, c) && i.push(e ? c.slice(1) : c);
    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(o)) : i;
  }, u.prototype.listeners = function(i) {
    var o = e ? e + i : i, c = this._events[o];
    if (!c)
      return [];
    if (c.fn)
      return [c.fn];
    for (var O = 0, g = c.length, w = new Array(g); O < g; O++)
      w[O] = c[O].fn;
    return w;
  }, u.prototype.listenerCount = function(i) {
    var o = e ? e + i : i, c = this._events[o];
    return c ? c.fn ? 1 : c.length : 0;
  }, u.prototype.emit = function(i, o, c, O, g, w) {
    var _ = e ? e + i : i;
    if (!this._events[_])
      return !1;
    var a = this._events[_], S = arguments.length, k, m;
    if (a.fn) {
      switch (a.once && this.removeListener(i, a.fn, void 0, !0), S) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, o), !0;
        case 3:
          return a.fn.call(a.context, o, c), !0;
        case 4:
          return a.fn.call(a.context, o, c, O), !0;
        case 5:
          return a.fn.call(a.context, o, c, O, g), !0;
        case 6:
          return a.fn.call(a.context, o, c, O, g, w), !0;
      }
      for (m = 1, k = new Array(S - 1); m < S; m++)
        k[m - 1] = arguments[m];
      a.fn.apply(a.context, k);
    } else {
      var se = a.length, N;
      for (m = 0; m < se; m++)
        switch (a[m].once && this.removeListener(i, a[m].fn, void 0, !0), S) {
          case 1:
            a[m].fn.call(a[m].context);
            break;
          case 2:
            a[m].fn.call(a[m].context, o);
            break;
          case 3:
            a[m].fn.call(a[m].context, o, c);
            break;
          case 4:
            a[m].fn.call(a[m].context, o, c, O);
            break;
          default:
            if (!k)
              for (N = 1, k = new Array(S - 1); N < S; N++)
                k[N - 1] = arguments[N];
            a[m].fn.apply(a[m].context, k);
        }
    }
    return !0;
  }, u.prototype.on = function(i, o, c) {
    return f(this, i, o, c, !1);
  }, u.prototype.once = function(i, o, c) {
    return f(this, i, o, c, !0);
  }, u.prototype.removeListener = function(i, o, c, O) {
    var g = e ? e + i : i;
    if (!this._events[g])
      return this;
    if (!o)
      return d(this, g), this;
    var w = this._events[g];
    if (w.fn)
      w.fn === o && (!O || w.once) && (!c || w.context === c) && d(this, g);
    else {
      for (var _ = 0, a = [], S = w.length; _ < S; _++)
        (w[_].fn !== o || O && !w[_].once || c && w[_].context !== c) && a.push(w[_]);
      a.length ? this._events[g] = a.length === 1 ? a[0] : a : d(this, g);
    }
    return this;
  }, u.prototype.removeAllListeners = function(i) {
    var o;
    return i ? (o = e ? e + i : i, this._events[o] && d(this, o)) : (this._events = new l(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = e, u.EventEmitter = u, n.exports = u;
})(ne);
var ie = ne.exports;
const oe = /* @__PURE__ */ te(ie);
var le = function(t) {
  return ae(t) && !ce(t);
};
function ae(n) {
  return !!n && typeof n == "object";
}
function ce(n) {
  var t = Object.prototype.toString.call(n);
  return t === "[object RegExp]" || t === "[object Date]" || fe(n);
}
var he = typeof Symbol == "function" && Symbol.for, ue = he ? Symbol.for("react.element") : 60103;
function fe(n) {
  return n.$$typeof === ue;
}
function de(n) {
  return Array.isArray(n) ? [] : {};
}
function R(n, t) {
  return t.clone !== !1 && t.isMergeableObject(n) ? U(de(n), n, t) : n;
}
function pe(n, t, e) {
  return n.concat(t).map(function(l) {
    return R(l, e);
  });
}
function we(n, t) {
  if (!t.customMerge)
    return U;
  var e = t.customMerge(n);
  return typeof e == "function" ? e : U;
}
function me(n) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n).filter(function(t) {
    return Object.propertyIsEnumerable.call(n, t);
  }) : [];
}
function Q(n) {
  return Object.keys(n).concat(me(n));
}
function re(n, t) {
  try {
    return t in n;
  } catch {
    return !1;
  }
}
function ye(n, t) {
  return re(n, t) && !(Object.hasOwnProperty.call(n, t) && Object.propertyIsEnumerable.call(n, t));
}
function be(n, t, e) {
  var l = {};
  return e.isMergeableObject(n) && Q(n).forEach(function(s) {
    l[s] = R(n[s], e);
  }), Q(t).forEach(function(s) {
    ye(n, s) || (re(n, s) && e.isMergeableObject(t[s]) ? l[s] = we(s, e)(n[s], t[s], e) : l[s] = R(t[s], e));
  }), l;
}
function U(n, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || pe, e.isMergeableObject = e.isMergeableObject || le, e.cloneUnlessOtherwiseSpecified = R;
  var l = Array.isArray(t), s = Array.isArray(n), f = l === s;
  return f ? l ? e.arrayMerge(n, t, e) : be(n, t, e) : R(t, e);
}
U.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(l, s) {
    return U(l, s, e);
  }, {});
};
var ge = U, Oe = ge;
const ve = /* @__PURE__ */ te(Oe);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function W(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Ee(n) {
  var t, e;
  return W(n) === !1 ? !1 : (t = n.constructor, t === void 0 ? !0 : (e = t.prototype, !(W(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
function Y(n) {
  return n instanceof Element ? n : document.querySelector(n);
}
async function F(n) {
  return await new Promise((t) => setTimeout(t, n));
}
const Ae = '[data-elem="drawer.panel"]', $ = "data-drawers-group", Ce = [
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
], X = {
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
  openAnimationDuration: 0,
  closeAnimationDuration: 0,
  lockPageScroll: !0
};
function Z(n) {
  return ve.all(n, {
    isMergeableObject: Ee
  });
}
var E, v, P, B;
class H {
  constructor({ target: t, type: e, owner: l }) {
    y(this, E, void 0);
    y(this, v, void 0);
    y(this, P, void 0);
    y(this, B, !1);
    const s = Y(t);
    if (!s)
      throw new Error("Trigger element cannot be found");
    b(this, E, s), b(this, v, l), b(this, P, e), this.init();
  }
  // Accessors
  get isActive() {
    return r(this, B);
  }
  get owner() {
    return r(this, v);
  }
  // Methods
  init() {
    r(this, E).addEventListener("click", (t) => this.clickHandler(t)), r(this, v).on("open", () => this.setActive(!0)), r(this, v).on("close", () => this.setActive(!1));
  }
  clickHandler(t) {
    t.__drawerTrigger = this, r(this, P) === "open" ? r(this, v).isOpen || r(this, v).open(r(this, E)) : r(this, P) === "close" ? r(this, v).isOpen && r(this, v).close(r(this, E)) : r(this, v).isOpen ? r(this, v).close(r(this, E)) : r(this, v).open(r(this, E));
  }
  setActive(t) {
    b(this, B, t), t ? r(this, E).classList.add("drawer-trigger_active") : r(this, E).classList.remove("drawer-trigger_active");
  }
}
E = new WeakMap(), v = new WeakMap(), P = new WeakMap(), B = new WeakMap();
var p, G, M, K, T;
class _e extends oe {
  constructor({ target: e, options: l }) {
    super();
    y(this, p, void 0);
    y(this, G, void 0);
    y(this, M, void 0);
    y(this, K, void 0);
    y(this, T, void 0);
    this.handleDocumentClick = async (u) => {
      var o;
      if (((o = u.__drawerTrigger) == null ? void 0 : o.owner) === this)
        return;
      const h = u.target;
      if (u.composedPath(), this.dom.panel.contains(h))
        return;
      const i = h == null ? void 0 : h.closest("[data-drawer]");
      i ? i.getAttribute("data-drawer") === r(this, T) ? this.handleUnderlayClick(u) : this.handleOtherDrawerClick(u) : this.handleOutsideClick(u);
    }, this.handleKeydown = (u) => {
      r(this, p).closeOnEsc && u.key === "Escape" && this.close();
    };
    const s = Z(l ? [X, l] : [X]), f = Y(e);
    if (f === null)
      throw new Error("Drawer's root cannot be found");
    b(this, T, f.getAttribute("data-drawer"));
    const d = f.querySelector(Ae);
    if (d === null)
      throw new Error(`Drawer's panel cannot be found. Alias: ${r(this, T)}`);
    this.dom = {
      root: f,
      panel: d
    }, this.setOptions(s), this.dom.panel.setAttribute("tabindex", "-1"), this.dom.root.classList.add("drawer_initialized");
  }
  addEventListeners() {
    this.dom.root.addEventListener("keydown", this.handleKeydown), document.addEventListener("click", this.handleDocumentClick);
  }
  removeEventListeners() {
    this.dom.root.removeEventListener("keydown", this.handleKeydown), document.removeEventListener("click", this.handleDocumentClick);
  }
  // Accessors
  get isOpen() {
    return r(this, M);
  }
  get isModal() {
    return r(this, p).modal;
  }
  set isModal(e) {
    this.dom.root.classList[e ? "add" : "remove"]("drawer_modal");
  }
  get willLockScroll() {
    return r(this, p).lockPageScroll;
  }
  set zIndex(e) {
    this.dom.root.style.setProperty("--z-index", String(e)), b(this, G, e);
  }
  get zIndex() {
    return r(this, G);
  }
  // Methods
  async open(e) {
    await F(0), !r(this, M) && (this.emit("beforeOpen", { drawer: this, trigger: e }), b(this, M, !0), this.dom.root.classList.add(r(this, p).openClass), this.emit("open", { drawer: this, trigger: e }), typeof r(this, p).openAnimationDuration == "number" && await F(r(this, p).openAnimationDuration), this.emit("openAnimationEnd", { drawer: this, trigger: e }), this.focus(), this.addEventListeners());
  }
  async close(e) {
    r(this, p).onCloseConfirm && !r(this, p).onCloseConfirm(this, e) || (this.emit("beforeClose", { drawer: this, trigger: e }), this.removeEventListeners(), b(this, M, !1), this.dom.root.classList.remove(r(this, p).openClass), this.emit("close", { drawer: this, trigger: e }), typeof r(this, p).closeAnimationDuration == "number" && await F(r(this, p).closeAnimationDuration), this.emit("closeAnimationEnd", { drawer: this, trigger: e }));
  }
  handleOtherDrawerClick(e) {
  }
  handleOutsideClick(e) {
    r(this, p).closeOnOutsideClick && (typeof r(this, p).closeOnOutsideClick == "object" && r(this, p).closeOnOutsideClick.hasOwnProperty("checkTarget") ? r(this, p).closeOnOutsideClick.checkTarget(e.target) && this.close() : this.close());
  }
  handleUnderlayClick(e) {
    r(this, p).closeOnOutsideClick && this.close();
  }
  focus() {
    r(this, p).focusOnChild && this.focusChild() || this.focusSelf();
  }
  focusSelf() {
    this.dom.panel.focus();
  }
  focusChild() {
    const e = this.dom.panel.querySelector(Ce.join(","));
    return e ? (e.focus(), !0) : !1;
  }
  setOptions(e) {
    var l;
    e.hasOwnProperty("modal") && ((l = r(this, p)) == null ? void 0 : l.modal) !== e.modal && (this.isModal = e.modal), b(this, p, r(this, p) ? Z([r(this, p), e]) : e);
  }
  assignGroup(e) {
    b(this, K, e);
  }
}
p = new WeakMap(), G = new WeakMap(), M = new WeakMap(), K = new WeakMap(), T = new WeakMap();
var x, A, C, D, L, j;
class ee {
  constructor(t) {
    y(this, x, void 0);
    y(this, A, void 0);
    y(this, C, void 0);
    y(this, D, void 0);
    y(this, L, void 0);
    y(this, j, void 0);
    b(this, A, []), b(this, C, []), b(this, L, /* @__PURE__ */ new Set()), b(this, j, /* @__PURE__ */ new Map()), this.onBeforeOpen = ({ drawer: s, trigger: f }) => {
      s.isModal ? (r(this, j).set(s, r(this, A).length), r(this, A).push(s), s.zIndex = r(this, C).length + r(this, A).length) : (r(this, j).set(s, r(this, C).length), r(this, C).push(s), s.zIndex = r(this, C).length, r(this, A).length > 0 && r(this, A).forEach((d, u) => d.zIndex = r(this, C).length + u + 1)), s.willLockScroll && this.lockScroll(s);
    }, this.onCloseAnimationEnd = ({ drawer: s, trigger: f }) => {
      const d = s.isModal ? r(this, A) : r(this, C);
      for (delete d[r(this, j).get(s)]; d.length && !d.at(-1); )
        d.pop();
      r(this, j).delete(s), this.unlockScroll(s);
    };
    const e = Y(t);
    if (e === null)
      throw new Error("Drawer's group root cannot be found");
    b(this, x, e);
    const l = r(this, x).closest("[data-scrollable], html") || r(this, x).matches("[data-scrollable], html") && r(this, x);
    if (l === null)
      throw new Error("Scrollable container for group root cannot be found");
    b(this, D, l);
  }
  add(t) {
    t.on("beforeOpen", this.onBeforeOpen), t.on("closeAnimationEnd", this.onCloseAnimationEnd), t.assignGroup(this);
  }
  lockScroll(t) {
    r(this, L).size === 0 && r(this, D).classList.add("scroll-lock-by-drawer"), r(this, L).add(t);
  }
  unlockScroll(t) {
    r(this, L).delete(t), r(this, L).size === 0 && r(this, D).classList.remove("scroll-lock-by-drawer");
  }
}
x = new WeakMap(), A = new WeakMap(), C = new WeakMap(), D = new WeakMap(), L = new WeakMap(), j = new WeakMap();
var I, z;
const q = class q {
  constructor() {
    y(this, I, /* @__PURE__ */ new Map());
    y(this, z, /* @__PURE__ */ new Map());
    if (q.instance)
      return q.instance;
    q.instance = this;
  }
  init(t) {
    document.querySelectorAll(`[${$}]`).forEach((f) => {
      const d = f.getAttribute($);
      typeof d == "string" && r(this, z).set(d, new ee(f));
    }), r(this, z).set("default", new ee(document.documentElement)), document.querySelectorAll("[data-drawer]").forEach((f) => {
      var o;
      const d = f.getAttribute("data-drawer");
      if (typeof d != "string")
        return;
      const u = new _e({ target: f, options: t });
      r(this, I).set(d, u);
      const h = f.closest(`[${$}]`), i = h ? h.getAttribute($) : "default";
      if (typeof i != "string")
        throw new Error("Group doesn't have alias set correctly");
      (o = r(this, z).get(i)) == null || o.add(u);
    }), document.querySelectorAll("[data-drawer-open], [data-drawer-close], [data-drawer-toggle]").forEach((f) => {
      if (f.hasAttribute("data-drawer-open")) {
        const d = f.getAttribute("data-drawer-open");
        new H({ target: f, type: "open", owner: this.get(d) });
      } else if (f.hasAttribute("data-drawer-close")) {
        const d = f.getAttribute("data-drawer-close");
        new H({ target: f, type: "close", owner: this.get(d) });
      } else {
        const d = f.getAttribute("data-drawer-toggle");
        new H({ target: f, type: "toggle", owner: this.get(d) });
      }
    });
  }
  open(t, { trigger: e, options: l } = {}) {
    var s;
    (s = this.get(t)) == null || s.open(e);
  }
  close(t, { trigger: e, options: l } = {}) {
    var s;
    (s = this.get(t)) == null || s.close(e);
  }
  get(t) {
    return typeof t == "string" && r(this, I).get(t) || null;
  }
  on(t, e, l) {
    var s;
    if (t)
      (s = this.get(t)) == null || s.on(e, l);
    else
      for (const [f, d] of r(this, I))
        d.on(e, l);
  }
};
I = new WeakMap(), z = new WeakMap();
let V = q;
typeof window < "u" && (window.hasOwnProperty("app") || (window.app = {}), window.app.drawers = new V());
export {
  _e as Drawer,
  ee as DrawersGroup,
  H as Trigger,
  V as default
};
