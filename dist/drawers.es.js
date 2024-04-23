var W = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var r = (n, t, e) => (W(n, t, "read from private field"), e ? e.call(n) : t.get(n)), y = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, b = (n, t, e, o) => (W(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
function ne(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var re = { exports: {} };
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function o() {
  }
  Object.create && (o.prototype = /* @__PURE__ */ Object.create(null), new o().__proto__ || (e = !1));
  function s(h, i, l) {
    this.fn = h, this.context = i, this.once = l || !1;
  }
  function f(h, i, l, c, O) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var g = new s(l, c || h, O), w = e ? e + i : i;
    return h._events[w] ? h._events[w].fn ? h._events[w] = [h._events[w], g] : h._events[w].push(g) : (h._events[w] = g, h._eventsCount++), h;
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
    for (var O = 0, g = c.length, w = new Array(g); O < g; O++)
      w[O] = c[O].fn;
    return w;
  }, u.prototype.listenerCount = function(i) {
    var l = e ? e + i : i, c = this._events[l];
    return c ? c.fn ? 1 : c.length : 0;
  }, u.prototype.emit = function(i, l, c, O, g, w) {
    var _ = e ? e + i : i;
    if (!this._events[_])
      return !1;
    var a = this._events[_], k = arguments.length, S, m;
    if (a.fn) {
      switch (a.once && this.removeListener(i, a.fn, void 0, !0), k) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, l), !0;
        case 3:
          return a.fn.call(a.context, l, c), !0;
        case 4:
          return a.fn.call(a.context, l, c, O), !0;
        case 5:
          return a.fn.call(a.context, l, c, O, g), !0;
        case 6:
          return a.fn.call(a.context, l, c, O, g, w), !0;
      }
      for (m = 1, S = new Array(k - 1); m < k; m++)
        S[m - 1] = arguments[m];
      a.fn.apply(a.context, S);
    } else {
      var oe = a.length, N;
      for (m = 0; m < oe; m++)
        switch (a[m].once && this.removeListener(i, a[m].fn, void 0, !0), k) {
          case 1:
            a[m].fn.call(a[m].context);
            break;
          case 2:
            a[m].fn.call(a[m].context, l);
            break;
          case 3:
            a[m].fn.call(a[m].context, l, c);
            break;
          case 4:
            a[m].fn.call(a[m].context, l, c, O);
            break;
          default:
            if (!S)
              for (N = 1, S = new Array(k - 1); N < k; N++)
                S[N - 1] = arguments[N];
            a[m].fn.apply(a[m].context, S);
        }
    }
    return !0;
  }, u.prototype.on = function(i, l, c) {
    return f(this, i, l, c, !1);
  }, u.prototype.once = function(i, l, c) {
    return f(this, i, l, c, !0);
  }, u.prototype.removeListener = function(i, l, c, O) {
    var g = e ? e + i : i;
    if (!this._events[g])
      return this;
    if (!l)
      return d(this, g), this;
    var w = this._events[g];
    if (w.fn)
      w.fn === l && (!O || w.once) && (!c || w.context === c) && d(this, g);
    else {
      for (var _ = 0, a = [], k = w.length; _ < k; _++)
        (w[_].fn !== l || O && !w[_].once || c && w[_].context !== c) && a.push(w[_]);
      a.length ? this._events[g] = a.length === 1 ? a[0] : a : d(this, g);
    }
    return this;
  }, u.prototype.removeAllListeners = function(i) {
    var l;
    return i ? (l = e ? e + i : i, this._events[l] && d(this, l)) : (this._events = new o(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = e, u.EventEmitter = u, n.exports = u;
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
function B(n, t) {
  return t.clone !== !1 && t.isMergeableObject(n) ? U(pe(n), n, t) : n;
}
function we(n, t, e) {
  return n.concat(t).map(function(o) {
    return B(o, e);
  });
}
function me(n, t) {
  if (!t.customMerge)
    return U;
  var e = t.customMerge(n);
  return typeof e == "function" ? e : U;
}
function ye(n) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n).filter(function(t) {
    return Object.propertyIsEnumerable.call(n, t);
  }) : [];
}
function X(n) {
  return Object.keys(n).concat(ye(n));
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
function be(n, t, e) {
  var o = {};
  return e.isMergeableObject(n) && X(n).forEach(function(s) {
    o[s] = B(n[s], e);
  }), X(t).forEach(function(s) {
    ge(n, s) || (se(n, s) && e.isMergeableObject(t[s]) ? o[s] = me(s, e)(n[s], t[s], e) : o[s] = B(t[s], e));
  }), o;
}
function U(n, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || we, e.isMergeableObject = e.isMergeableObject || ae, e.cloneUnlessOtherwiseSpecified = B;
  var o = Array.isArray(t), s = Array.isArray(n), f = o === s;
  return f ? o ? e.arrayMerge(n, t, e) : be(n, t, e) : B(t, e);
}
U.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(o, s) {
    return U(o, s, e);
  }, {});
};
var Oe = U, ve = Oe;
const Ee = /* @__PURE__ */ ne(ve);
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
  openAnimationDuration: 0,
  closeAnimationDuration: 0,
  lockPageScroll: !0
};
function te(n) {
  return Ee.all(n, {
    isMergeableObject: Ae
  });
}
var E, v, P, $;
class Y {
  constructor({ target: t, type: e, owner: o }) {
    y(this, E, void 0);
    y(this, v, void 0);
    y(this, P, void 0);
    y(this, $, !1);
    const s = Q(t);
    if (!s)
      throw new Error("Trigger element cannot be found");
    b(this, E, s), b(this, v, o), b(this, P, e), this.init();
  }
  // Accessors
  get isActive() {
    return r(this, $);
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
    b(this, $, t), t ? r(this, E).classList.add("drawer-trigger_active") : r(this, E).classList.remove("drawer-trigger_active");
  }
}
E = new WeakMap(), v = new WeakMap(), P = new WeakMap(), $ = new WeakMap();
var p, K, j, H, T;
class ke extends le {
  constructor({ target: e, options: o }) {
    super();
    y(this, p, void 0);
    y(this, K, void 0);
    y(this, j, void 0);
    y(this, H, void 0);
    y(this, T, void 0);
    this.handleDocumentClick = async (u) => {
      var l;
      if (((l = u.__drawerTrigger) == null ? void 0 : l.owner) === this)
        return;
      const h = u.target;
      if (u.composedPath(), this.dom.panel.contains(h))
        return;
      const i = h == null ? void 0 : h.closest("[data-drawer]");
      i ? i.getAttribute("data-drawer") === r(this, T) ? this.handleUnderlayClick(u) : this.handleOtherDrawerClick(u) : this.handleOutsideClick(u);
    }, this.handleKeydown = (u) => {
      r(this, p).closeOnEsc && u.key === "Escape" && this.close();
    };
    const s = te(o ? [ee, o] : [ee]), f = Q(e);
    if (f === null)
      throw new Error("Drawer's root cannot be found");
    b(this, T, f.getAttribute("data-drawer"));
    const d = f.querySelector(Ce);
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
    return r(this, j);
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
    this.dom.root.style.setProperty("--z-index", String(e)), b(this, K, e);
  }
  get zIndex() {
    return r(this, K);
  }
  // Methods
  async open(e) {
    await V(0), !r(this, j) && (this.emit("beforeOpen", { drawer: this, trigger: e }), b(this, j, !0), this.dom.root.classList.add(r(this, p).openClass), this.emit("open", { drawer: this, trigger: e }), typeof r(this, p).openAnimationDuration == "number" && await V(r(this, p).openAnimationDuration), this.emit("openAnimationEnd", { drawer: this, trigger: e }), this.focus(), this.addEventListeners());
  }
  async close(e) {
    r(this, p).onCloseConfirm && !r(this, p).onCloseConfirm(this, e) || (this.emit("beforeClose", { drawer: this, trigger: e }), this.removeEventListeners(), b(this, j, !1), this.dom.root.classList.remove(r(this, p).openClass), this.emit("close", { drawer: this, trigger: e }), typeof r(this, p).closeAnimationDuration == "number" && await V(r(this, p).closeAnimationDuration), this.emit("closeAnimationEnd", { drawer: this, trigger: e }));
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
    const e = this.dom.panel.querySelector(_e.join(","));
    return e ? (e.focus(), !0) : !1;
  }
  setOptions(e) {
    var o;
    e.hasOwnProperty("modal") && ((o = r(this, p)) == null ? void 0 : o.modal) !== e.modal && (this.isModal = e.modal), b(this, p, r(this, p) ? te([r(this, p), e]) : e);
  }
  assignGroup(e) {
    b(this, H, e);
  }
}
p = new WeakMap(), K = new WeakMap(), j = new WeakMap(), H = new WeakMap(), T = new WeakMap();
var M;
class Le {
  constructor() {
    y(this, M, /* @__PURE__ */ new Map());
  }
  lock(t, e) {
    r(this, M).has(t) || r(this, M).set(t, /* @__PURE__ */ new Set());
    const o = r(this, M).get(t);
    o.size === 0 && t.classList.add("scroll-lock-by-drawer"), o.add(e);
  }
  unlock(t, e) {
    const o = r(this, M).get(t);
    o == null || o.delete(e), (!o || o.size === 0) && t.classList.remove("scroll-lock-by-drawer");
  }
}
M = new WeakMap();
var x, A, C, D, L;
const q = class q {
  constructor(t) {
    y(this, x, void 0);
    y(this, A, void 0);
    y(this, C, void 0);
    y(this, D, void 0);
    y(this, L, void 0);
    b(this, A, []), b(this, C, []), b(this, L, /* @__PURE__ */ new Map()), this.onBeforeOpen = ({ drawer: s, trigger: f }) => {
      s.isModal ? (r(this, L).set(s, r(this, A).length), r(this, A).push(s), s.zIndex = r(this, C).length + r(this, A).length) : (r(this, L).set(s, r(this, C).length), r(this, C).push(s), s.zIndex = r(this, C).length, r(this, A).length > 0 && r(this, A).forEach((d, u) => d.zIndex = r(this, C).length + u + 1)), s.willLockScroll && this.lockScroll(s);
    }, this.onCloseAnimationEnd = ({ drawer: s, trigger: f }) => {
      const d = s.isModal ? r(this, A) : r(this, C);
      for (delete d[r(this, L).get(s)]; d.length && !d.at(-1); )
        d.pop();
      r(this, L).delete(s), this.unlockScroll(s);
    };
    const e = Q(t);
    if (e === null)
      throw new Error("Drawer's group root cannot be found");
    b(this, x, e);
    const o = r(this, x).closest("[data-scrollable], html") || r(this, x).matches("[data-scrollable], html") && r(this, x);
    if (o === null)
      throw new Error("Scrollable container for group root cannot be found");
    b(this, D, o);
  }
  add(t) {
    t.on("beforeOpen", this.onBeforeOpen), t.on("closeAnimationEnd", this.onCloseAnimationEnd), t.assignGroup(this);
  }
  lockScroll(t) {
    q.scrollLock.lock(r(this, D), t);
  }
  unlockScroll(t) {
    q.scrollLock.unlock(r(this, D), t);
  }
};
x = new WeakMap(), A = new WeakMap(), C = new WeakMap(), D = new WeakMap(), L = new WeakMap(), q.scrollLock = new Le();
let G = q;
var I, z;
const R = class R {
  constructor() {
    y(this, I, /* @__PURE__ */ new Map());
    y(this, z, /* @__PURE__ */ new Map());
    if (R.instance)
      return R.instance;
    R.instance = this;
  }
  init(t) {
    document.querySelectorAll(`[${F}]`).forEach((f) => {
      const d = f.getAttribute(F);
      typeof d == "string" && r(this, z).set(d, new G(f));
    }), r(this, z).set("default", new G(document.documentElement)), document.querySelectorAll("[data-drawer]").forEach((f) => {
      var l;
      const d = f.getAttribute("data-drawer");
      if (typeof d != "string")
        return;
      const u = new ke({ target: f, options: t });
      r(this, I).set(d, u);
      const h = f.closest(`[${F}]`), i = h ? h.getAttribute(F) : "default";
      if (typeof i != "string")
        throw new Error("Group doesn't have alias set correctly");
      (l = r(this, z).get(i)) == null || l.add(u);
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
    var s;
    (s = this.get(t)) == null || s.open(e);
  }
  close(t, { trigger: e, options: o } = {}) {
    var s;
    (s = this.get(t)) == null || s.close(e);
  }
  get(t) {
    return typeof t == "string" && r(this, I).get(t) || null;
  }
  on(t, e, o) {
    var s;
    if (t)
      (s = this.get(t)) == null || s.on(e, o);
    else
      for (const [f, d] of r(this, I))
        d.on(e, o);
  }
};
I = new WeakMap(), z = new WeakMap();
let J = R;
typeof window < "u" && (window.hasOwnProperty("app") || (window.app = {}), window.app.drawers = new J());
export {
  ke as Drawer,
  G as DrawersGroup,
  Y as Trigger,
  J as default
};
