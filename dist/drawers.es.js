var W = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var s = (n, t, e) => (W(n, t, "read from private field"), e ? e.call(n) : t.get(n)), g = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, b = (n, t, e, o) => (W(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
function ne(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var se = { exports: {} };
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function o() {
  }
  Object.create && (o.prototype = /* @__PURE__ */ Object.create(null), new o().__proto__ || (e = !1));
  function r(h, i, l) {
    this.fn = h, this.context = i, this.once = l || !1;
  }
  function f(h, i, l, c, v) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var y = new r(l, c || h, v), m = e ? e + i : i;
    return h._events[m] ? h._events[m].fn ? h._events[m] = [h._events[m], y] : h._events[m].push(y) : (h._events[m] = y, h._eventsCount++), h;
  }
  function d(h, i) {
    --h._eventsCount === 0 ? h._events = new o() : delete h._events[i];
  }
  function u() {
    this._events = new o(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var i = [], l, c;
    if (this._eventsCount === 0)
      return i;
    for (c in l = this._events)
      t.call(l, c) && i.push(e ? c.slice(1) : c);
    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(l)) : i;
  }, u.prototype.listeners = function(i) {
    var l = e ? e + i : i, c = this._events[l];
    if (!c)
      return [];
    if (c.fn)
      return [c.fn];
    for (var v = 0, y = c.length, m = new Array(y); v < y; v++)
      m[v] = c[v].fn;
    return m;
  }, u.prototype.listenerCount = function(i) {
    var l = e ? e + i : i, c = this._events[l];
    return c ? c.fn ? 1 : c.length : 0;
  }, u.prototype.emit = function(i, l, c, v, y, m) {
    var _ = e ? e + i : i;
    if (!this._events[_])
      return !1;
    var a = this._events[_], L = arguments.length, S, w;
    if (a.fn) {
      switch (a.once && this.removeListener(i, a.fn, void 0, !0), L) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, l), !0;
        case 3:
          return a.fn.call(a.context, l, c), !0;
        case 4:
          return a.fn.call(a.context, l, c, v), !0;
        case 5:
          return a.fn.call(a.context, l, c, v, y), !0;
        case 6:
          return a.fn.call(a.context, l, c, v, y, m), !0;
      }
      for (w = 1, S = new Array(L - 1); w < L; w++)
        S[w - 1] = arguments[w];
      a.fn.apply(a.context, S);
    } else {
      var oe = a.length, N;
      for (w = 0; w < oe; w++)
        switch (a[w].once && this.removeListener(i, a[w].fn, void 0, !0), L) {
          case 1:
            a[w].fn.call(a[w].context);
            break;
          case 2:
            a[w].fn.call(a[w].context, l);
            break;
          case 3:
            a[w].fn.call(a[w].context, l, c);
            break;
          case 4:
            a[w].fn.call(a[w].context, l, c, v);
            break;
          default:
            if (!S)
              for (N = 1, S = new Array(L - 1); N < L; N++)
                S[N - 1] = arguments[N];
            a[w].fn.apply(a[w].context, S);
        }
    }
    return !0;
  }, u.prototype.on = function(i, l, c) {
    return f(this, i, l, c, !1);
  }, u.prototype.once = function(i, l, c) {
    return f(this, i, l, c, !0);
  }, u.prototype.removeListener = function(i, l, c, v) {
    var y = e ? e + i : i;
    if (!this._events[y])
      return this;
    if (!l)
      return d(this, y), this;
    var m = this._events[y];
    if (m.fn)
      m.fn === l && (!v || m.once) && (!c || m.context === c) && d(this, y);
    else {
      for (var _ = 0, a = [], L = m.length; _ < L; _++)
        (m[_].fn !== l || v && !m[_].once || c && m[_].context !== c) && a.push(m[_]);
      a.length ? this._events[y] = a.length === 1 ? a[0] : a : d(this, y);
    }
    return this;
  }, u.prototype.removeAllListeners = function(i) {
    var l;
    return i ? (l = e ? e + i : i, this._events[l] && d(this, l)) : (this._events = new o(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = e, u.EventEmitter = u, n.exports = u;
})(se);
var ie = se.exports;
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
function B(n, t) {
  return t.clone !== !1 && t.isMergeableObject(n) ? U(pe(n), n, t) : n;
}
function me(n, t, e) {
  return n.concat(t).map(function(o) {
    return B(o, e);
  });
}
function we(n, t) {
  if (!t.customMerge)
    return U;
  var e = t.customMerge(n);
  return typeof e == "function" ? e : U;
}
function ge(n) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n).filter(function(t) {
    return Object.propertyIsEnumerable.call(n, t);
  }) : [];
}
function X(n) {
  return Object.keys(n).concat(ge(n));
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
  var o = {};
  return e.isMergeableObject(n) && X(n).forEach(function(r) {
    o[r] = B(n[r], e);
  }), X(t).forEach(function(r) {
    ye(n, r) || (re(n, r) && e.isMergeableObject(t[r]) ? o[r] = we(r, e)(n[r], t[r], e) : o[r] = B(t[r], e));
  }), o;
}
function U(n, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || me, e.isMergeableObject = e.isMergeableObject || ae, e.cloneUnlessOtherwiseSpecified = B;
  var o = Array.isArray(t), r = Array.isArray(n), f = o === r;
  return f ? o ? e.arrayMerge(n, t, e) : be(n, t, e) : B(t, e);
}
U.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(o, r) {
    return U(o, r, e);
  }, {});
};
var ve = U, Oe = ve;
const Ee = /* @__PURE__ */ ne(Oe);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Z(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Ae(n) {
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
  return Ee.all(n, {
    isMergeableObject: Ae
  });
}
var E, O, P, $;
class Y {
  constructor({ target: t, type: e, owner: o }) {
    g(this, E, void 0);
    g(this, O, void 0);
    g(this, P, void 0);
    g(this, $, !1);
    const r = Q(t);
    if (!r)
      throw new Error("Trigger element cannot be found");
    b(this, E, r), b(this, O, o), b(this, P, e), this.init();
  }
  // Accessors
  get isActive() {
    return s(this, $);
  }
  get owner() {
    return s(this, O);
  }
  // Methods
  init() {
    s(this, E).addEventListener("click", (t) => this.clickHandler(t)), s(this, O).on("open", () => this.setActive(!0)), s(this, O).on("close", () => this.setActive(!1));
  }
  clickHandler(t) {
    t.__drawerTrigger = this, s(this, P) === "open" ? s(this, O).isOpen || s(this, O).open(s(this, E)) : s(this, P) === "close" ? s(this, O).isOpen && s(this, O).close(s(this, E)) : s(this, O).isOpen ? s(this, O).close(s(this, E)) : s(this, O).open(s(this, E));
  }
  setActive(t) {
    b(this, $, t), t ? s(this, E).classList.add("drawer-trigger_active") : s(this, E).classList.remove("drawer-trigger_active");
  }
}
E = new WeakMap(), O = new WeakMap(), P = new WeakMap(), $ = new WeakMap();
var p, K, j, H, T;
class Le extends le {
  constructor({ target: e, options: o }) {
    super();
    g(this, p, void 0);
    g(this, K, void 0);
    g(this, j, void 0);
    g(this, H, void 0);
    g(this, T, void 0);
    this.handleDocumentClick = async (u) => {
      var l;
      if (((l = u.__drawerTrigger) == null ? void 0 : l.owner) === this)
        return;
      const h = u.target;
      if (u.composedPath(), this.dom.panel.contains(h))
        return;
      const i = h == null ? void 0 : h.closest("[data-drawer]");
      i ? i.getAttribute("data-drawer") === s(this, T) ? this.handleUnderlayClick(u) : this.handleOtherDrawerClick(u) : this.handleOutsideClick(u);
    }, this.handleKeydown = (u) => {
      s(this, p).closeOnEsc && u.key === "Escape" && this.close();
    };
    const r = te(o ? [ee, o] : [ee]), f = Q(e);
    if (f === null)
      throw new Error("Drawer's root cannot be found");
    b(this, T, f.getAttribute("data-drawer"));
    const d = f.querySelector(Ce);
    if (d === null)
      throw new Error(`Drawer's panel cannot be found. Alias: ${s(this, T)}`);
    this.dom = {
      root: f,
      panel: d
    }, this.setOptions(r), this.dom.panel.setAttribute("tabindex", "-1"), this.dom.root.classList.add("drawer_initialized");
  }
  addEventListeners() {
    this.dom.root.addEventListener("keydown", this.handleKeydown), document.addEventListener("click", this.handleDocumentClick);
  }
  removeEventListeners() {
    this.dom.root.removeEventListener("keydown", this.handleKeydown), document.removeEventListener("click", this.handleDocumentClick);
  }
  // Accessors
  get isOpen() {
    return s(this, j);
  }
  get isModal() {
    return s(this, p).modal;
  }
  set isModal(e) {
    this.dom.root.classList[e ? "add" : "remove"]("drawer_modal");
  }
  get willLockScroll() {
    return s(this, p).lockPageScroll;
  }
  set zIndex(e) {
    this.dom.root.style.setProperty("--z-index", String(e)), b(this, K, e);
  }
  get zIndex() {
    return s(this, K);
  }
  // Methods
  async open(e) {
    await V(0), !s(this, j) && (this.emit("beforeOpen", { drawer: this, trigger: e }), b(this, j, !0), this.dom.root.classList.add(s(this, p).openingClass), this.emit("open", { drawer: this, trigger: e }), typeof s(this, p).openAnimationDuration == "number" && await V(s(this, p).openAnimationDuration), this.dom.root.classList.remove(s(this, p).openingClass), this.dom.root.classList.add(s(this, p).openClass), this.emit("openAnimationEnd", { drawer: this, trigger: e }), this.focus(), this.addEventListeners());
  }
  async close(e) {
    s(this, p).onCloseConfirm && !s(this, p).onCloseConfirm(this, e) || (this.emit("beforeClose", { drawer: this, trigger: e }), this.removeEventListeners(), b(this, j, !1), this.dom.root.classList.remove(s(this, p).openClass), this.dom.root.classList.add(s(this, p).closingClass), this.emit("close", { drawer: this, trigger: e }), typeof s(this, p).closeAnimationDuration == "number" && await V(s(this, p).closeAnimationDuration), this.dom.root.classList.remove(s(this, p).closingClass), this.emit("closeAnimationEnd", { drawer: this, trigger: e }));
  }
  handleOtherDrawerClick(e) {
  }
  handleOutsideClick(e) {
    s(this, p).closeOnOutsideClick && (typeof s(this, p).closeOnOutsideClick == "object" && s(this, p).closeOnOutsideClick.hasOwnProperty("checkTarget") ? s(this, p).closeOnOutsideClick.checkTarget(e.target) && this.close() : this.close());
  }
  handleUnderlayClick(e) {
    s(this, p).closeOnOutsideClick && this.close();
  }
  focus() {
    s(this, p).focusOnChild && this.focusChild() || this.focusSelf();
  }
  focusSelf() {
    this.dom.panel.focus();
  }
  focusChild() {
    const e = this.dom.panel.querySelector(_e.join(","));
    return e ? (e.focus(), !0) : !1;
  }
  setOptions(e) {
    var o;
    e.hasOwnProperty("modal") && ((o = s(this, p)) == null ? void 0 : o.modal) !== e.modal && (this.isModal = e.modal), b(this, p, s(this, p) ? te([s(this, p), e]) : e);
  }
  assignGroup(e) {
    b(this, H, e);
  }
}
p = new WeakMap(), K = new WeakMap(), j = new WeakMap(), H = new WeakMap(), T = new WeakMap();
var M;
class ke {
  constructor() {
    g(this, M, /* @__PURE__ */ new Map());
  }
  lock(t, e) {
    s(this, M).has(t) || s(this, M).set(t, /* @__PURE__ */ new Set());
    const o = s(this, M).get(t);
    o.size === 0 && t.classList.add("scroll-lock-by-drawer"), o.add(e);
  }
  unlock(t, e) {
    const o = s(this, M).get(t);
    o == null || o.delete(e), (!o || o.size === 0) && t.classList.remove("scroll-lock-by-drawer");
  }
}
M = new WeakMap();
var x, A, C, D, k;
const q = class q {
  constructor(t) {
    g(this, x, void 0);
    g(this, A, void 0);
    g(this, C, void 0);
    g(this, D, void 0);
    g(this, k, void 0);
    b(this, A, []), b(this, C, []), b(this, k, /* @__PURE__ */ new Map()), this.onBeforeOpen = ({ drawer: r, trigger: f }) => {
      r.isModal ? (s(this, k).set(r, s(this, A).length), s(this, A).push(r), r.zIndex = s(this, C).length + s(this, A).length) : (s(this, k).set(r, s(this, C).length), s(this, C).push(r), r.zIndex = s(this, C).length, s(this, A).length > 0 && s(this, A).forEach((d, u) => d.zIndex = s(this, C).length + u + 1)), r.willLockScroll && this.lockScroll(r);
    }, this.onCloseAnimationEnd = ({ drawer: r, trigger: f }) => {
      const d = r.isModal ? s(this, A) : s(this, C);
      for (delete d[s(this, k).get(r)]; d.length && !d.at(-1); )
        d.pop();
      s(this, k).delete(r), this.unlockScroll(r);
    };
    const e = Q(t);
    if (e === null)
      throw new Error("Drawer's group root cannot be found");
    b(this, x, e);
    const o = s(this, x).closest("[data-scrollable], html") || s(this, x).matches("[data-scrollable], html") && s(this, x);
    if (o === null)
      throw new Error("Scrollable container for group root cannot be found");
    b(this, D, o);
  }
  add(t) {
    t.on("beforeOpen", this.onBeforeOpen), t.on("closeAnimationEnd", this.onCloseAnimationEnd), t.assignGroup(this);
  }
  lockScroll(t) {
    q.scrollLock.lock(s(this, D), t);
  }
  unlockScroll(t) {
    q.scrollLock.unlock(s(this, D), t);
  }
};
x = new WeakMap(), A = new WeakMap(), C = new WeakMap(), D = new WeakMap(), k = new WeakMap(), q.scrollLock = new ke();
let G = q;
var I, z;
const R = class R {
  constructor() {
    g(this, I, /* @__PURE__ */ new Map());
    g(this, z, /* @__PURE__ */ new Map());
    if (R.instance)
      return R.instance;
    R.instance = this;
  }
  init(t) {
    document.querySelectorAll(`[${F}]`).forEach((f) => {
      const d = f.getAttribute(F);
      typeof d == "string" && s(this, z).set(d, new G(f));
    }), s(this, z).set("default", new G(document.documentElement)), document.querySelectorAll("[data-drawer]").forEach((f) => {
      var l;
      const d = f.getAttribute("data-drawer");
      if (typeof d != "string")
        return;
      const u = new Le({ target: f, options: t });
      s(this, I).set(d, u);
      const h = f.closest(`[${F}]`), i = h ? h.getAttribute(F) : "default";
      if (typeof i != "string")
        throw new Error("Group doesn't have alias set correctly");
      (l = s(this, z).get(i)) == null || l.add(u);
    }), document.querySelectorAll("[data-drawer-open], [data-drawer-close], [data-drawer-toggle]").forEach((f) => {
      if (f.hasAttribute("data-drawer-open")) {
        const d = f.getAttribute("data-drawer-open");
        new Y({ target: f, type: "open", owner: this.get(d) });
      } else if (f.hasAttribute("data-drawer-close")) {
        const d = f.getAttribute("data-drawer-close");
        new Y({ target: f, type: "close", owner: this.get(d) });
      } else {
        const d = f.getAttribute("data-drawer-toggle");
        new Y({ target: f, type: "toggle", owner: this.get(d) });
      }
    });
  }
  open(t, { trigger: e, options: o } = {}) {
    var r;
    (r = this.get(t)) == null || r.open(e);
  }
  close(t, { trigger: e, options: o } = {}) {
    var r;
    (r = this.get(t)) == null || r.close(e);
  }
  get(t) {
    return typeof t == "string" && s(this, I).get(t) || null;
  }
  on(t, e, o) {
    var r;
    if (t)
      (r = this.get(t)) == null || r.on(e, o);
    else
      for (const [f, d] of s(this, I))
        d.on(e, o);
  }
};
I = new WeakMap(), z = new WeakMap();
let J = R;
typeof window < "u" && (window.hasOwnProperty("app") || (window.app = {}), window.app.drawers = new J());
export {
  Le as Drawer,
  G as DrawersGroup,
  Y as Trigger,
  J as default
};
