var Z = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var r = (n, t, e) => (Z(n, t, "read from private field"), e ? e.call(n) : t.get(n)), A = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, O = (n, t, e, o) => (Z(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
function oe(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ie = { exports: {} };
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function o() {
  }
  Object.create && (o.prototype = /* @__PURE__ */ Object.create(null), new o().__proto__ || (e = !1));
  function l(i, a, c) {
    this.fn = i, this.context = a, this.once = c || !1;
  }
  function g(i, a, c, h, y) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var v = new l(c, h || i, y), p = e ? e + a : a;
    return i._events[p] ? i._events[p].fn ? i._events[p] = [i._events[p], v] : i._events[p].push(v) : (i._events[p] = v, i._eventsCount++), i;
  }
  function w(i, a) {
    --i._eventsCount === 0 ? i._events = new o() : delete i._events[a];
  }
  function s() {
    this._events = new o(), this._eventsCount = 0;
  }
  s.prototype.eventNames = function() {
    var a = [], c, h;
    if (this._eventsCount === 0)
      return a;
    for (h in c = this._events)
      t.call(c, h) && a.push(e ? h.slice(1) : h);
    return Object.getOwnPropertySymbols ? a.concat(Object.getOwnPropertySymbols(c)) : a;
  }, s.prototype.listeners = function(a) {
    var c = e ? e + a : a, h = this._events[c];
    if (!h)
      return [];
    if (h.fn)
      return [h.fn];
    for (var y = 0, v = h.length, p = new Array(v); y < v; y++)
      p[y] = h[y].fn;
    return p;
  }, s.prototype.listenerCount = function(a) {
    var c = e ? e + a : a, h = this._events[c];
    return h ? h.fn ? 1 : h.length : 0;
  }, s.prototype.emit = function(a, c, h, y, v, p) {
    var C = e ? e + a : a;
    if (!this._events[C])
      return !1;
    var u = this._events[C], E = arguments.length, S, m;
    if (u.fn) {
      switch (u.once && this.removeListener(a, u.fn, void 0, !0), E) {
        case 1:
          return u.fn.call(u.context), !0;
        case 2:
          return u.fn.call(u.context, c), !0;
        case 3:
          return u.fn.call(u.context, c, h), !0;
        case 4:
          return u.fn.call(u.context, c, h, y), !0;
        case 5:
          return u.fn.call(u.context, c, h, y, v), !0;
        case 6:
          return u.fn.call(u.context, c, h, y, v, p), !0;
      }
      for (m = 1, S = new Array(E - 1); m < E; m++)
        S[m - 1] = arguments[m];
      u.fn.apply(u.context, S);
    } else {
      var he = u.length, G;
      for (m = 0; m < he; m++)
        switch (u[m].once && this.removeListener(a, u[m].fn, void 0, !0), E) {
          case 1:
            u[m].fn.call(u[m].context);
            break;
          case 2:
            u[m].fn.call(u[m].context, c);
            break;
          case 3:
            u[m].fn.call(u[m].context, c, h);
            break;
          case 4:
            u[m].fn.call(u[m].context, c, h, y);
            break;
          default:
            if (!S)
              for (G = 1, S = new Array(E - 1); G < E; G++)
                S[G - 1] = arguments[G];
            u[m].fn.apply(u[m].context, S);
        }
    }
    return !0;
  }, s.prototype.on = function(a, c, h) {
    return g(this, a, c, h, !1);
  }, s.prototype.once = function(a, c, h) {
    return g(this, a, c, h, !0);
  }, s.prototype.removeListener = function(a, c, h, y) {
    var v = e ? e + a : a;
    if (!this._events[v])
      return this;
    if (!c)
      return w(this, v), this;
    var p = this._events[v];
    if (p.fn)
      p.fn === c && (!y || p.once) && (!h || p.context === h) && w(this, v);
    else {
      for (var C = 0, u = [], E = p.length; C < E; C++)
        (p[C].fn !== c || y && !p[C].once || h && p[C].context !== h) && u.push(p[C]);
      u.length ? this._events[v] = u.length === 1 ? u[0] : u : w(this, v);
    }
    return this;
  }, s.prototype.removeAllListeners = function(a) {
    var c;
    return a ? (c = e ? e + a : a, this._events[c] && w(this, c)) : (this._events = new o(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = e, s.EventEmitter = s, n.exports = s;
})(ie);
var ue = ie.exports;
const de = /* @__PURE__ */ oe(ue);
var fe = function(t) {
  return pe(t) && !we(t);
};
function pe(n) {
  return !!n && typeof n == "object";
}
function we(n) {
  var t = Object.prototype.toString.call(n);
  return t === "[object RegExp]" || t === "[object Date]" || ge(n);
}
var me = typeof Symbol == "function" && Symbol.for, ye = me ? Symbol.for("react.element") : 60103;
function ge(n) {
  return n.$$typeof === ye;
}
function ve(n) {
  return Array.isArray(n) ? [] : {};
}
function q(n, t) {
  return t.clone !== !1 && t.isMergeableObject(n) ? z(ve(n), n, t) : n;
}
function be(n, t, e) {
  return n.concat(t).map(function(o) {
    return q(o, e);
  });
}
function Oe(n, t) {
  if (!t.customMerge)
    return z;
  var e = t.customMerge(n);
  return typeof e == "function" ? e : z;
}
function Ae(n) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n).filter(function(t) {
    return Object.propertyIsEnumerable.call(n, t);
  }) : [];
}
function ee(n) {
  return Object.keys(n).concat(Ae(n));
}
function ae(n, t) {
  try {
    return t in n;
  } catch {
    return !1;
  }
}
function _e(n, t) {
  return ae(n, t) && !(Object.hasOwnProperty.call(n, t) && Object.propertyIsEnumerable.call(n, t));
}
function Ce(n, t, e) {
  var o = {};
  return e.isMergeableObject(n) && ee(n).forEach(function(l) {
    o[l] = q(n[l], e);
  }), ee(t).forEach(function(l) {
    _e(n, l) || (ae(n, l) && e.isMergeableObject(t[l]) ? o[l] = Oe(l, e)(n[l], t[l], e) : o[l] = q(t[l], e));
  }), o;
}
function z(n, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || be, e.isMergeableObject = e.isMergeableObject || fe, e.cloneUnlessOtherwiseSpecified = q;
  var o = Array.isArray(t), l = Array.isArray(n), g = o === l;
  return g ? o ? e.arrayMerge(n, t, e) : Ce(n, t, e) : q(t, e);
}
z.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(o, l) {
    return z(o, l, e);
  }, {});
};
var Ee = z, ke = Ee;
const Le = /* @__PURE__ */ oe(ke);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function te(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Se(n) {
  var t, e;
  return te(n) === !1 ? !1 : (t = n.constructor, t === void 0 ? !0 : (e = t.prototype, !(te(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
function X(n) {
  return n instanceof Element ? n : document.querySelector(n);
}
async function V(n) {
  return await new Promise((t) => setTimeout(t, n));
}
var le = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, f = (n, t, e) => (le(n, t, "read from private field"), e ? e.call(n) : t.get(n)), M = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ne = (n, t, e, o) => (le(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e), T, k, L, N, P, W, $;
const Me = '[data-elem="drawer.panel"]', K = "data-drawers-group", De = [
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
], J = {
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
  lockPageScroll: !0,
  lockScroll: {
    unlockDelay: 300
  }
};
function re(n) {
  return Le.all(n, {
    isMergeableObject: Se
  });
}
var _, b, I, R;
class Y {
  constructor({ target: t, type: e, owner: o }) {
    A(this, _, void 0);
    A(this, b, void 0);
    A(this, I, void 0);
    A(this, R, !1);
    const l = X(t);
    if (!l)
      throw new Error("Trigger element cannot be found");
    if (!o)
      throw new Error("Owning drawer instance hasn't been provided");
    O(this, _, l), O(this, b, o), O(this, I, e), this.init();
  }
  // Accessors
  get isActive() {
    return r(this, R);
  }
  get owner() {
    return r(this, b);
  }
  // Methods
  init() {
    r(this, _).addEventListener("click", (t) => this.clickHandler(t)), r(this, b).on("open", () => this.setActive(!0)), r(this, b).on("close", () => this.setActive(!1));
  }
  clickHandler(t) {
    t.__drawerTrigger = this, r(this, I) === "open" ? r(this, b).isOpen || r(this, b).open(r(this, _)) : r(this, I) === "close" ? r(this, b).isOpen && r(this, b).close(r(this, _)) : r(this, b).isOpen ? r(this, b).close(r(this, _)) : r(this, b).open(r(this, _));
  }
  setActive(t) {
    O(this, R, t), t ? r(this, _).classList.add("drawer-trigger_active") : r(this, _).classList.remove("drawer-trigger_active");
  }
}
_ = new WeakMap(), b = new WeakMap(), I = new WeakMap(), R = new WeakMap();
var d, B, D, H, U;
class xe extends de {
  constructor({ target: e, options: o }) {
    super();
    A(this, d, void 0);
    A(this, B, void 0);
    A(this, D, void 0);
    A(this, H, void 0);
    A(this, U, void 0);
    this.handleDocumentClick = async (s) => {
      var c;
      if (((c = s.__drawerTrigger) == null ? void 0 : c.owner) === this)
        return;
      const i = s.target;
      if (s.composedPath(), this.dom.panel.contains(i))
        return;
      const a = i == null ? void 0 : i.closest("[data-drawer]");
      a ? a.getAttribute("data-drawer") === r(this, U) ? this.handleUnderlayClick(s) : this.handleOtherDrawerClick(s) : this.handleOutsideClick(s);
    }, this.handleKeydown = (s) => {
      r(this, d).closeOnEsc && s.key === "Escape" && this.close();
    };
    const l = re(o ? [J, o] : [J]), g = X(e);
    if (g === null)
      throw new Error("Drawer's root cannot be found");
    O(this, U, g.getAttribute("data-drawer"));
    const w = g.querySelector(Me);
    if (w === null)
      throw new Error(`Drawer's panel cannot be found. Alias: ${r(this, U)}`);
    this.dom = {
      root: g,
      panel: w
    }, this.setOptions(l), this.dom.panel.setAttribute("tabindex", "-1"), this.dom.root.classList.add("drawer_initialized");
  }
  addEventListeners() {
    this.dom.root.addEventListener("keydown", this.handleKeydown), document.addEventListener("click", this.handleDocumentClick);
  }
  removeEventListeners() {
    this.dom.root.removeEventListener("keydown", this.handleKeydown), document.removeEventListener("click", this.handleDocumentClick);
  }
  get scrollUnlockDelay() {
    var e;
    return ((e = r(this, d).lockScroll) == null ? void 0 : e.unlockDelay) || 0;
  }
  // Accessors
  get isOpen() {
    return r(this, D);
  }
  get isModal() {
    return r(this, d).modal;
  }
  set isModal(e) {
    this.dom.root.classList[e ? "add" : "remove"]("drawer_modal");
  }
  get willLockScroll() {
    return r(this, d).lockPageScroll;
  }
  set zIndex(e) {
    this.dom.root.style.setProperty("--z-index", String(e)), O(this, B, e);
  }
  get zIndex() {
    return r(this, B);
  }
  // Methods
  async open(e) {
    await V(0), !r(this, D) && (this.emit("beforeOpen", { drawer: this, trigger: e }), O(this, D, !0), this.dom.root.classList.add(r(this, d).openingClass), this.emit("open", { drawer: this, trigger: e }), typeof r(this, d).openAnimationDuration == "number" && await V(r(this, d).openAnimationDuration), this.dom.root.classList.remove(r(this, d).openingClass), this.dom.root.classList.add(r(this, d).openClass), this.emit("openAnimationEnd", { drawer: this, trigger: e }), this.focus(), this.addEventListeners());
  }
  async close(e) {
    r(this, d).onCloseConfirm && !r(this, d).onCloseConfirm(this, e) || (this.emit("beforeClose", { drawer: this, trigger: e }), this.removeEventListeners(), O(this, D, !1), this.dom.root.classList.remove(r(this, d).openClass), this.dom.root.classList.add(r(this, d).closingClass), this.emit("close", { drawer: this, trigger: e }), typeof r(this, d).closeAnimationDuration == "number" && await V(r(this, d).closeAnimationDuration), this.dom.root.classList.remove(r(this, d).closingClass), this.emit("closeAnimationEnd", { drawer: this, trigger: e }));
  }
  handleOtherDrawerClick(e) {
  }
  handleOutsideClick(e) {
    r(this, d).closeOnOutsideClick && (typeof r(this, d).closeOnOutsideClick == "object" && r(this, d).closeOnOutsideClick.hasOwnProperty("checkTarget") ? r(this, d).closeOnOutsideClick.checkTarget(e.target) && this.close() : this.close());
  }
  handleUnderlayClick(e) {
    r(this, d).closeOnOutsideClick && this.close();
  }
  focus() {
    r(this, d).focusOnChild && this.focusChild() || this.focusSelf();
  }
  focusSelf() {
    this.dom.panel.focus();
  }
  focusChild() {
    const e = this.dom.panel.querySelector(De.join(","));
    return e ? (e.focus(), !0) : !1;
  }
  setOptions(e) {
    var o;
    e.hasOwnProperty("modal") && ((o = r(this, d)) == null ? void 0 : o.modal) !== e.modal && (this.isModal = e.modal), O(this, d, r(this, d) ? re([r(this, d), e]) : e);
  }
  assignGroup(e) {
    O(this, H, e);
  }
}
d = new WeakMap(), B = new WeakMap(), D = new WeakMap(), H = new WeakMap(), U = new WeakMap();
var x, j;
class je {
  constructor() {
    A(this, x, null);
    A(this, j, /* @__PURE__ */ new Map());
  }
  lock(t, e) {
    r(this, x) !== null && (clearTimeout(r(this, x)), O(this, x, null)), r(this, j).has(t) || r(this, j).set(t, /* @__PURE__ */ new Set());
    const o = r(this, j).get(t);
    o.size === 0 && t.classList.add("scroll-lock-by-drawer"), o.add(e);
  }
  unlock(t, e) {
    const o = r(this, j).get(t);
    o == null || o.delete(e), (!o || o.size === 0) && O(this, x, setTimeout(() => t.classList.remove("scroll-lock-by-drawer"), e.scrollUnlockDelay));
  }
}
x = new WeakMap(), j = new WeakMap();
const ce = class Q {
  constructor(t) {
    M(this, T, void 0), M(this, k, []), M(this, L, []), M(this, N, void 0), M(this, P, /* @__PURE__ */ new Map()), this.onBeforeOpen = ({ drawer: l, trigger: g }) => {
      l.isModal ? (f(this, P).set(l, f(this, k).length), f(this, k).push(l), l.zIndex = f(this, L).length + f(this, k).length) : (f(this, P).set(l, f(this, L).length), f(this, L).push(l), l.zIndex = f(this, L).length, f(this, k).length > 0 && f(this, k).forEach((w, s) => w.zIndex = f(this, L).length + s + 1)), l.willLockScroll && this.lockScroll(l);
    }, this.onCloseAnimationEnd = ({ drawer: l, trigger: g }) => {
      const w = l.isModal ? f(this, k) : f(this, L);
      for (delete w[f(this, P).get(l)]; w.length && !w.at(-1); )
        w.pop();
      f(this, P).delete(l), this.unlockScroll(l);
    };
    const e = X(t);
    if (e === null)
      throw new Error("Drawer's group root cannot be found");
    ne(this, T, e);
    const o = f(this, T).closest("[data-scrollable], html") || f(this, T).matches("[data-scrollable], html") && f(this, T);
    if (o === null)
      throw new Error("Scrollable container for group root cannot be found");
    ne(this, N, o);
  }
  add(t) {
    t.on("beforeOpen", this.onBeforeOpen), t.on("closeAnimationEnd", this.onCloseAnimationEnd), t.assignGroup(this);
  }
  lockScroll(t) {
    Q.scrollLock.lock(f(this, N), t);
  }
  unlockScroll(t) {
    Q.scrollLock.unlock(f(this, N), t);
  }
};
T = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
L = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
ce.scrollLock = new je();
let se = ce;
const Te = class F {
  constructor() {
    if (M(this, W, /* @__PURE__ */ new Map()), M(this, $, /* @__PURE__ */ new Map()), F.instance)
      return F.instance;
    F.instance = this;
  }
  init(t = J) {
    document.querySelectorAll(`[${K}]`).forEach((s) => {
      const i = s.getAttribute(K);
      typeof i == "string" && f(this, $).set(i, new se(s));
    }), f(this, $).set("default", new se(document.documentElement)), document.querySelectorAll("[data-drawer]").forEach((s) => {
      var y;
      const i = s.getAttribute("data-drawer");
      if (typeof i != "string")
        return;
      const a = new xe({ target: s, options: { ...t, modal: s.matches("[data-modal]") ? s.matches(':not([data-modal="false"]') : t.modal } });
      f(this, W).set(i, a);
      const c = s.closest(`[${K}]`), h = c ? c.getAttribute(K) : "default";
      if (typeof h != "string")
        throw new Error("Group doesn't have alias set correctly");
      (y = f(this, $).get(h)) == null || y.add(a);
    }), document.querySelectorAll("[data-drawer-open], [data-drawer-close], [data-drawer-toggle]").forEach((s) => {
      if (s.hasAttribute("data-drawer-open")) {
        const i = s.getAttribute("data-drawer-open");
        g(s, i);
        const a = this.get(i);
        w(s, a, i), new Y({ target: s, type: "open", owner: a });
      } else if (s.hasAttribute("data-drawer-close")) {
        const i = s.getAttribute("data-drawer-close");
        g(s, i);
        const a = this.get(i);
        w(s, a, i), new Y({ target: s, type: "close", owner: a });
      } else {
        const i = s.getAttribute("data-drawer-toggle");
        g(s, i);
        const a = this.get(i);
        w(s, a, i), new Y({ target: s, type: "toggle", owner: a });
      }
    });
    function g(s, i) {
      if (!i)
        throw new Error(`Drawer alias should be specified in the trigger attribute. Trigger elem: ${s}`);
    }
    function w(s, i, a) {
      if (!i)
        throw new Error(`Drawer hasn't been found for the trigger elem: ${s}. Alias: ${a}`);
    }
  }
  open(t, { trigger: e, options: o } = {}) {
    var l;
    (l = this.get(t)) == null || l.open(e);
  }
  close(t, { trigger: e, options: o } = {}) {
    var l;
    (l = this.get(t)) == null || l.close(e);
  }
  get(t) {
    return typeof t == "string" && f(this, W).get(t) || null;
  }
  on(t, e, o) {
    var l;
    if (t)
      (l = this.get(t)) == null || l.on(e, o);
    else
      for (const [g, w] of f(this, W))
        w.on(e, o);
  }
};
W = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
let Pe = Te;
typeof window < "u" && (window.hasOwnProperty("app") || (window.app = {}), window.app.drawers = new Pe());
export {
  xe as Drawer,
  se as DrawersGroup,
  Y as Trigger,
  Pe as default
};
