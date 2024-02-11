var J = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var n = (r, t, e) => (J(r, t, "read from private field"), e ? e.call(r) : t.get(r)), b = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, m = (r, t, e, a) => (J(r, t, "write to private field"), a ? a.call(r, e) : t.set(r, e), e);
function te(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ne = { exports: {} };
(function(r) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function a() {
  }
  Object.create && (a.prototype = /* @__PURE__ */ Object.create(null), new a().__proto__ || (e = !1));
  function s(h, i, o) {
    this.fn = h, this.context = i, this.once = o || !1;
  }
  function f(h, i, o, c, v) {
    if (typeof o != "function")
      throw new TypeError("The listener must be a function");
    var g = new s(o, c || h, v), w = e ? e + i : i;
    return h._events[w] ? h._events[w].fn ? h._events[w] = [h._events[w], g] : h._events[w].push(g) : (h._events[w] = g, h._eventsCount++), h;
  }
  function d(h, i) {
    --h._eventsCount === 0 ? h._events = new a() : delete h._events[i];
  }
  function u() {
    this._events = new a(), this._eventsCount = 0;
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
    for (var v = 0, g = c.length, w = new Array(g); v < g; v++)
      w[v] = c[v].fn;
    return w;
  }, u.prototype.listenerCount = function(i) {
    var o = e ? e + i : i, c = this._events[o];
    return c ? c.fn ? 1 : c.length : 0;
  }, u.prototype.emit = function(i, o, c, v, g, w) {
    var j = e ? e + i : i;
    if (!this._events[j])
      return !1;
    var l = this._events[j], S = arguments.length, M, y;
    if (l.fn) {
      switch (l.once && this.removeListener(i, l.fn, void 0, !0), S) {
        case 1:
          return l.fn.call(l.context), !0;
        case 2:
          return l.fn.call(l.context, o), !0;
        case 3:
          return l.fn.call(l.context, o, c), !0;
        case 4:
          return l.fn.call(l.context, o, c, v), !0;
        case 5:
          return l.fn.call(l.context, o, c, v, g), !0;
        case 6:
          return l.fn.call(l.context, o, c, v, g, w), !0;
      }
      for (y = 1, M = new Array(S - 1); y < S; y++)
        M[y - 1] = arguments[y];
      l.fn.apply(l.context, M);
    } else {
      var se = l.length, I;
      for (y = 0; y < se; y++)
        switch (l[y].once && this.removeListener(i, l[y].fn, void 0, !0), S) {
          case 1:
            l[y].fn.call(l[y].context);
            break;
          case 2:
            l[y].fn.call(l[y].context, o);
            break;
          case 3:
            l[y].fn.call(l[y].context, o, c);
            break;
          case 4:
            l[y].fn.call(l[y].context, o, c, v);
            break;
          default:
            if (!M)
              for (I = 1, M = new Array(S - 1); I < S; I++)
                M[I - 1] = arguments[I];
            l[y].fn.apply(l[y].context, M);
        }
    }
    return !0;
  }, u.prototype.on = function(i, o, c) {
    return f(this, i, o, c, !1);
  }, u.prototype.once = function(i, o, c) {
    return f(this, i, o, c, !0);
  }, u.prototype.removeListener = function(i, o, c, v) {
    var g = e ? e + i : i;
    if (!this._events[g])
      return this;
    if (!o)
      return d(this, g), this;
    var w = this._events[g];
    if (w.fn)
      w.fn === o && (!v || w.once) && (!c || w.context === c) && d(this, g);
    else {
      for (var j = 0, l = [], S = w.length; j < S; j++)
        (w[j].fn !== o || v && !w[j].once || c && w[j].context !== c) && l.push(w[j]);
      l.length ? this._events[g] = l.length === 1 ? l[0] : l : d(this, g);
    }
    return this;
  }, u.prototype.removeAllListeners = function(i) {
    var o;
    return i ? (o = e ? e + i : i, this._events[o] && d(this, o)) : (this._events = new a(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = e, u.EventEmitter = u, r.exports = u;
})(ne);
var ie = ne.exports;
const oe = /* @__PURE__ */ te(ie);
var le = function(t) {
  return ae(t) && !ce(t);
};
function ae(r) {
  return !!r && typeof r == "object";
}
function ce(r) {
  var t = Object.prototype.toString.call(r);
  return t === "[object RegExp]" || t === "[object Date]" || fe(r);
}
var he = typeof Symbol == "function" && Symbol.for, ue = he ? Symbol.for("react.element") : 60103;
function fe(r) {
  return r.$$typeof === ue;
}
function de(r) {
  return Array.isArray(r) ? [] : {};
}
function U(r, t) {
  return t.clone !== !1 && t.isMergeableObject(r) ? D(de(r), r, t) : r;
}
function pe(r, t, e) {
  return r.concat(t).map(function(a) {
    return U(a, e);
  });
}
function we(r, t) {
  if (!t.customMerge)
    return D;
  var e = t.customMerge(r);
  return typeof e == "function" ? e : D;
}
function ye(r) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r).filter(function(t) {
    return Object.propertyIsEnumerable.call(r, t);
  }) : [];
}
function Q(r) {
  return Object.keys(r).concat(ye(r));
}
function re(r, t) {
  try {
    return t in r;
  } catch {
    return !1;
  }
}
function be(r, t) {
  return re(r, t) && !(Object.hasOwnProperty.call(r, t) && Object.propertyIsEnumerable.call(r, t));
}
function me(r, t, e) {
  var a = {};
  return e.isMergeableObject(r) && Q(r).forEach(function(s) {
    a[s] = U(r[s], e);
  }), Q(t).forEach(function(s) {
    be(r, s) || (re(r, s) && e.isMergeableObject(t[s]) ? a[s] = we(s, e)(r[s], t[s], e) : a[s] = U(t[s], e));
  }), a;
}
function D(r, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || pe, e.isMergeableObject = e.isMergeableObject || le, e.cloneUnlessOtherwiseSpecified = U;
  var a = Array.isArray(t), s = Array.isArray(r), f = a === s;
  return f ? a ? e.arrayMerge(r, t, e) : me(r, t, e) : U(t, e);
}
D.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(a, s) {
    return D(a, s, e);
  }, {});
};
var ge = D, Oe = ge;
const ve = /* @__PURE__ */ te(Oe);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function W(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function Ae(r) {
  var t, e;
  return W(r) === !1 ? !1 : (t = r.constructor, t === void 0 ? !0 : (e = t.prototype, !(W(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
function Y(r) {
  return r instanceof Element ? r : document.querySelector(r);
}
async function X(r) {
  return await new Promise((t) => setTimeout(t, r));
}
const Ee = '[data-elem="drawer.panel"]', $ = "data-drawers-group", Ce = [
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
], Z = {
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
function ee(r) {
  return ve.all(r, {
    isMergeableObject: Ae
  });
}
var E, A, P, N;
class H {
  constructor({ target: t, type: e, owner: a }) {
    b(this, E, void 0);
    b(this, A, void 0);
    b(this, P, void 0);
    b(this, N, !1);
    const s = Y(t);
    if (!s)
      throw new Error("Trigger element cannot be found");
    m(this, E, s), m(this, A, a), m(this, P, e), this.init();
  }
  // Accessors
  get isActive() {
    return n(this, N);
  }
  get owner() {
    return n(this, A);
  }
  // Methods
  init() {
    n(this, E).addEventListener("click", (t) => this.clickHandler(t)), n(this, A).on("open", () => this.setActive(!0)), n(this, A).on("close", () => this.setActive(!1));
  }
  clickHandler(t) {
    t.__drawerTrigger = this, n(this, P) === "open" ? n(this, A).isOpen || n(this, A).open(n(this, E)) : n(this, P) === "close" ? n(this, A).isOpen && n(this, A).close(n(this, E)) : n(this, A).isOpen ? n(this, A).close(n(this, E)) : n(this, A).open(n(this, E));
  }
  setActive(t) {
    m(this, N, t), t ? n(this, E).classList.add("drawer-trigger_active") : n(this, E).classList.remove("drawer-trigger_active");
  }
}
E = new WeakMap(), A = new WeakMap(), P = new WeakMap(), N = new WeakMap();
var p, q, O, x, F, R;
class _e extends oe {
  constructor({ target: e, options: a }) {
    super();
    b(this, p, void 0);
    b(this, q, void 0);
    b(this, O, void 0);
    b(this, x, void 0);
    b(this, F, void 0);
    b(this, R, void 0);
    this.handleDocumentClick = async (u) => {
      var o;
      if (((o = u.__drawerTrigger) == null ? void 0 : o.owner) === this)
        return;
      const h = u.target;
      if (u.composedPath(), n(this, O).panel.contains(h))
        return;
      const i = h == null ? void 0 : h.closest("[data-drawer]");
      i ? i.getAttribute("data-drawer") === n(this, R) ? this.handleUnderlayClick(u) : this.handleOtherDrawerClick(u) : this.handleOutsideClick(u);
    }, this.handleKeydown = (u) => {
      n(this, p).closeOnEsc && u.key === "Escape" && this.close();
    };
    const s = ee(a ? [Z, a] : [Z]), f = Y(e);
    if (f === null)
      throw new Error("Drawer's root cannot be found");
    const d = f.querySelector(Ee);
    if (d === null)
      throw new Error("Drawer's panel cannot be found");
    m(this, O, {
      root: f,
      panel: d
    }), m(this, R, f.getAttribute("data-drawer")), this.setOptions(s), n(this, O).panel.setAttribute("tabindex", "-1"), n(this, O).root.classList.add("drawer_initialized");
  }
  addEventListeners() {
    n(this, O).root.addEventListener("keydown", this.handleKeydown), document.addEventListener("click", this.handleDocumentClick);
  }
  removeEventListeners() {
    n(this, O).root.removeEventListener("keydown", this.handleKeydown), document.removeEventListener("click", this.handleDocumentClick);
  }
  // Accessors
  get isOpen() {
    return n(this, x);
  }
  get isModal() {
    return n(this, p).modal;
  }
  set isModal(e) {
    n(this, O).root.classList[e ? "add" : "remove"]("drawer_modal");
  }
  set zIndex(e) {
    n(this, O).root.style.setProperty("--z-index", String(e)), m(this, q, e);
  }
  get zIndex() {
    return n(this, q);
  }
  // Methods
  async open(e) {
    n(this, x) || (this.emit("beforeOpen", { drawer: this, trigger: e }), m(this, x, !0), n(this, O).root.classList.add(n(this, p).openClass), this.emit("open", { drawer: this, trigger: e }), typeof n(this, p).openAnimationDuration == "number" && X(n(this, p).openAnimationDuration), this.emit("openAnimationEnd", { drawer: this, trigger: e }), this.focus(), this.addEventListeners());
  }
  async close(e) {
    n(this, p).onCloseConfirm && !n(this, p).onCloseConfirm(this, e) || (this.emit("beforeClose", { drawer: this, trigger: e }), this.removeEventListeners(), m(this, x, !1), n(this, O).root.classList.remove(n(this, p).openClass), this.emit("close", { drawer: this, trigger: e }), typeof n(this, p).closeAnimationDuration == "number" && X(n(this, p).closeAnimationDuration), this.emit("closeAnimationEnd", { drawer: this, trigger: e }));
  }
  handleOtherDrawerClick(e) {
  }
  handleOutsideClick(e) {
    console.log(this, "handleOutsideClick"), n(this, p).closeOnOutsideClick && (typeof n(this, p).closeOnOutsideClick == "object" && n(this, p).closeOnOutsideClick.hasOwnProperty("checkTarget") ? n(this, p).closeOnOutsideClick.checkTarget(e.target) && this.close() : this.close());
  }
  handleUnderlayClick(e) {
    n(this, p).closeOnOutsideClick && this.close();
  }
  focus() {
    n(this, p).focusOnChild && this.focusChild() || this.focusSelf();
  }
  focusSelf() {
    n(this, O).panel.focus();
  }
  focusChild() {
    const e = n(this, O).panel.querySelector(Ce.join(","));
    return e ? (e.focus(), !0) : !1;
  }
  setOptions(e) {
    var a;
    e.hasOwnProperty("modal") && ((a = n(this, p)) == null ? void 0 : a.modal) !== e.modal && (this.isModal = e.modal), m(this, p, n(this, p) ? ee([n(this, p), e]) : e);
  }
  assignGroup(e) {
    m(this, F, e);
  }
}
p = new WeakMap(), q = new WeakMap(), O = new WeakMap(), x = new WeakMap(), F = new WeakMap(), R = new WeakMap();
var B, C, _, T, L, k;
class je {
  constructor(t) {
    b(this, B, void 0);
    b(this, C, void 0);
    b(this, _, void 0);
    b(this, T, void 0);
    b(this, L, void 0);
    b(this, k, void 0);
    m(this, C, []), m(this, _, []), m(this, L, /* @__PURE__ */ new Set()), m(this, k, /* @__PURE__ */ new Map()), this.onBeforeOpen = ({ drawer: s, trigger: f }) => {
      s.isModal ? (n(this, k).set(s, n(this, C).length), n(this, C).push(s), s.zIndex = n(this, _).length + n(this, C).length) : (n(this, k).set(s, n(this, _).length), n(this, _).push(s), s.zIndex = n(this, _).length, n(this, C).length > 0 && n(this, C).forEach((d, u) => d.zIndex = n(this, _).length + u + 1)), this.lockScroll(s);
    }, this.onCloseAnimationEnd = ({ drawer: s, trigger: f }) => {
      const d = s.isModal ? n(this, C) : n(this, _);
      for (delete d[n(this, k).get(s)]; d.length && !d.at(-1); )
        d.pop();
      n(this, k).delete(s), this.unlockScroll(s);
    };
    const e = Y(t);
    if (e === null)
      throw new Error("Drawer's group root cannot be found");
    m(this, B, e);
    const a = n(this, B).closest("[data-scrollable], html");
    if (a === null)
      throw new Error("Scrollable container for group root cannot be found");
    m(this, T, a);
  }
  add(t) {
    t.on("beforeOpen", this.onBeforeOpen), t.on("closeAnimationEnd", this.onCloseAnimationEnd), t.assignGroup(this);
  }
  lockScroll(t) {
    n(this, L).size === 0 && n(this, T).classList.add("scroll-lock-by-drawer"), n(this, L).add(t);
  }
  unlockScroll(t) {
    n(this, L).delete(t), n(this, L).size === 0 && n(this, T).classList.remove("scroll-lock-by-drawer");
  }
}
B = new WeakMap(), C = new WeakMap(), _ = new WeakMap(), T = new WeakMap(), L = new WeakMap(), k = new WeakMap();
var G, K;
const z = class z {
  constructor() {
    b(this, G, /* @__PURE__ */ new Map());
    b(this, K, /* @__PURE__ */ new Map());
    if (z.instance)
      return z.instance;
    z.instance = this;
  }
  init(t) {
    document.querySelectorAll(`[${$}]`).forEach((f) => {
      const d = f.getAttribute($);
      typeof d == "string" && n(this, K).set(d, new je(f));
    }), document.querySelectorAll("[data-drawer]").forEach((f) => {
      var o;
      const d = f.getAttribute("data-drawer");
      if (typeof d != "string")
        return;
      const u = new _e({ target: f, options: t });
      n(this, G).set(d, u);
      const h = f.closest(`[${$}]`), i = h == null ? void 0 : h.getAttribute($);
      if (typeof i != "string")
        throw new Error("Group doesn't have alias set correctly");
      (o = n(this, K).get(i)) == null || o.add(u);
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
  open(t, { trigger: e, options: a } = {}) {
    var s;
    (s = this.get(t)) == null || s.open(e);
  }
  close(t, { trigger: e, options: a } = {}) {
    var s;
    (s = this.get(t)) == null || s.close(e);
  }
  get(t) {
    return typeof t == "string" && n(this, G).get(t) || null;
  }
};
G = new WeakMap(), K = new WeakMap();
let V = z;
typeof window < "u" && (window.hasOwnProperty("app") || (window.app = {}), window.app.drawers = new V());
export {
  _e as Drawer,
  je as DrawersGroup,
  H as Trigger,
  V as default
};
