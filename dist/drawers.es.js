var Q = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var n = (r, t, e) => (Q(r, t, "read from private field"), e ? e.call(r) : t.get(r)), m = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, b = (r, t, e, a) => (Q(r, t, "write to private field"), a ? a.call(r, e) : t.set(r, e), e);
function ne(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var re = { exports: {} };
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
    var l = this._events[j], S = arguments.length, k, y;
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
      for (y = 1, k = new Array(S - 1); y < S; y++)
        k[y - 1] = arguments[y];
      l.fn.apply(l.context, k);
    } else {
      var ie = l.length, q;
      for (y = 0; y < ie; y++)
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
            if (!k)
              for (q = 1, k = new Array(S - 1); q < S; q++)
                k[q - 1] = arguments[q];
            l[y].fn.apply(l[y].context, k);
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
})(re);
var oe = re.exports;
const ae = /* @__PURE__ */ ne(oe);
var le = function(t) {
  return ce(t) && !he(t);
};
function ce(r) {
  return !!r && typeof r == "object";
}
function he(r) {
  var t = Object.prototype.toString.call(r);
  return t === "[object RegExp]" || t === "[object Date]" || de(r);
}
var ue = typeof Symbol == "function" && Symbol.for, fe = ue ? Symbol.for("react.element") : 60103;
function de(r) {
  return r.$$typeof === fe;
}
function pe(r) {
  return Array.isArray(r) ? [] : {};
}
function B(r, t) {
  return t.clone !== !1 && t.isMergeableObject(r) ? N(pe(r), r, t) : r;
}
function we(r, t, e) {
  return r.concat(t).map(function(a) {
    return B(a, e);
  });
}
function ye(r, t) {
  if (!t.customMerge)
    return N;
  var e = t.customMerge(r);
  return typeof e == "function" ? e : N;
}
function me(r) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r).filter(function(t) {
    return Object.propertyIsEnumerable.call(r, t);
  }) : [];
}
function W(r) {
  return Object.keys(r).concat(me(r));
}
function se(r, t) {
  try {
    return t in r;
  } catch {
    return !1;
  }
}
function be(r, t) {
  return se(r, t) && !(Object.hasOwnProperty.call(r, t) && Object.propertyIsEnumerable.call(r, t));
}
function ge(r, t, e) {
  var a = {};
  return e.isMergeableObject(r) && W(r).forEach(function(s) {
    a[s] = B(r[s], e);
  }), W(t).forEach(function(s) {
    be(r, s) || (se(r, s) && e.isMergeableObject(t[s]) ? a[s] = ye(s, e)(r[s], t[s], e) : a[s] = B(t[s], e));
  }), a;
}
function N(r, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || we, e.isMergeableObject = e.isMergeableObject || le, e.cloneUnlessOtherwiseSpecified = B;
  var a = Array.isArray(t), s = Array.isArray(r), f = a === s;
  return f ? a ? e.arrayMerge(r, t, e) : ge(r, t, e) : B(t, e);
}
N.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(a, s) {
    return N(a, s, e);
  }, {});
};
var Oe = N, ve = Oe;
const Ee = /* @__PURE__ */ ne(ve);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function X(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function Ae(r) {
  var t, e;
  return X(r) === !1 ? !1 : (t = r.constructor, t === void 0 ? !0 : (e = t.prototype, !(X(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
function J(r) {
  return r instanceof Element ? r : document.querySelector(r);
}
async function H(r) {
  return await new Promise((t) => setTimeout(t, r));
}
const Ce = '[data-elem="drawer.panel"]', K = "data-drawers-group", _e = [
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
  return Ee.all(r, {
    isMergeableObject: Ae
  });
}
var A, E, T, G;
class V {
  constructor({ target: t, type: e, owner: a }) {
    m(this, A, void 0);
    m(this, E, void 0);
    m(this, T, void 0);
    m(this, G, !1);
    const s = J(t);
    if (!s)
      throw new Error("Trigger element cannot be found");
    b(this, A, s), b(this, E, a), b(this, T, e), this.init();
  }
  // Accessors
  get isActive() {
    return n(this, G);
  }
  get owner() {
    return n(this, E);
  }
  // Methods
  init() {
    n(this, A).addEventListener("click", (t) => this.clickHandler(t)), n(this, E).on("open", () => this.setActive(!0)), n(this, E).on("close", () => this.setActive(!1));
  }
  clickHandler(t) {
    t.__drawerTrigger = this, n(this, T) === "open" ? n(this, E).isOpen || n(this, E).open(n(this, A)) : n(this, T) === "close" ? n(this, E).isOpen && n(this, E).close(n(this, A)) : n(this, E).isOpen ? n(this, E).close(n(this, A)) : n(this, E).open(n(this, A));
  }
  setActive(t) {
    b(this, G, t), t ? n(this, A).classList.add("drawer-trigger_active") : n(this, A).classList.remove("drawer-trigger_active");
  }
}
A = new WeakMap(), E = new WeakMap(), T = new WeakMap(), G = new WeakMap();
var p, $, O, x, F, D;
class je extends ae {
  constructor({ target: e, options: a }) {
    super();
    m(this, p, void 0);
    m(this, $, void 0);
    m(this, O, void 0);
    m(this, x, void 0);
    m(this, F, void 0);
    m(this, D, void 0);
    this.handleDocumentClick = async (u) => {
      var o;
      if (((o = u.__drawerTrigger) == null ? void 0 : o.owner) === this)
        return;
      const h = u.target;
      if (u.composedPath(), n(this, O).panel.contains(h))
        return;
      const i = h == null ? void 0 : h.closest("[data-drawer]");
      i ? i.getAttribute("data-drawer") === n(this, D) ? this.handleUnderlayClick(u) : this.handleOtherDrawerClick(u) : this.handleOutsideClick(u);
    }, this.handleKeydown = (u) => {
      n(this, p).closeOnEsc && u.key === "Escape" && this.close();
    };
    const s = ee(a ? [Z, a] : [Z]), f = J(e);
    if (f === null)
      throw new Error("Drawer's root cannot be found");
    b(this, D, f.getAttribute("data-drawer"));
    const d = f.querySelector(Ce);
    if (d === null)
      throw new Error(`Drawer's panel cannot be found. Alias: ${n(this, D)}`);
    b(this, O, {
      root: f,
      panel: d
    }), this.setOptions(s), n(this, O).panel.setAttribute("tabindex", "-1"), n(this, O).root.classList.add("drawer_initialized");
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
    n(this, O).root.style.setProperty("--z-index", String(e)), b(this, $, e);
  }
  get zIndex() {
    return n(this, $);
  }
  // Methods
  async open(e) {
    await H(0), !n(this, x) && (this.emit("beforeOpen", { drawer: this, trigger: e }), b(this, x, !0), n(this, O).root.classList.add(n(this, p).openClass), this.emit("open", { drawer: this, trigger: e }), typeof n(this, p).openAnimationDuration == "number" && H(n(this, p).openAnimationDuration), this.emit("openAnimationEnd", { drawer: this, trigger: e }), this.focus(), this.addEventListeners());
  }
  async close(e) {
    n(this, p).onCloseConfirm && !n(this, p).onCloseConfirm(this, e) || (this.emit("beforeClose", { drawer: this, trigger: e }), this.removeEventListeners(), b(this, x, !1), n(this, O).root.classList.remove(n(this, p).openClass), this.emit("close", { drawer: this, trigger: e }), typeof n(this, p).closeAnimationDuration == "number" && H(n(this, p).closeAnimationDuration), this.emit("closeAnimationEnd", { drawer: this, trigger: e }));
  }
  handleOtherDrawerClick(e) {
  }
  handleOutsideClick(e) {
    n(this, p).closeOnOutsideClick && (typeof n(this, p).closeOnOutsideClick == "object" && n(this, p).closeOnOutsideClick.hasOwnProperty("checkTarget") ? n(this, p).closeOnOutsideClick.checkTarget(e.target) && this.close() : this.close());
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
    const e = n(this, O).panel.querySelector(_e.join(","));
    return e ? (e.focus(), !0) : !1;
  }
  setOptions(e) {
    var a;
    e.hasOwnProperty("modal") && ((a = n(this, p)) == null ? void 0 : a.modal) !== e.modal && (this.isModal = e.modal), b(this, p, n(this, p) ? ee([n(this, p), e]) : e);
  }
  assignGroup(e) {
    b(this, F, e);
  }
}
p = new WeakMap(), $ = new WeakMap(), O = new WeakMap(), x = new WeakMap(), F = new WeakMap(), D = new WeakMap();
var P, C, _, I, L, M;
class te {
  constructor(t) {
    m(this, P, void 0);
    m(this, C, void 0);
    m(this, _, void 0);
    m(this, I, void 0);
    m(this, L, void 0);
    m(this, M, void 0);
    b(this, C, []), b(this, _, []), b(this, L, /* @__PURE__ */ new Set()), b(this, M, /* @__PURE__ */ new Map()), this.onBeforeOpen = ({ drawer: s, trigger: f }) => {
      s.isModal ? (n(this, M).set(s, n(this, C).length), n(this, C).push(s), s.zIndex = n(this, _).length + n(this, C).length) : (n(this, M).set(s, n(this, _).length), n(this, _).push(s), s.zIndex = n(this, _).length, n(this, C).length > 0 && n(this, C).forEach((d, u) => d.zIndex = n(this, _).length + u + 1)), this.lockScroll(s);
    }, this.onCloseAnimationEnd = ({ drawer: s, trigger: f }) => {
      const d = s.isModal ? n(this, C) : n(this, _);
      for (delete d[n(this, M).get(s)]; d.length && !d.at(-1); )
        d.pop();
      n(this, M).delete(s), this.unlockScroll(s);
    };
    const e = J(t);
    if (e === null)
      throw new Error("Drawer's group root cannot be found");
    b(this, P, e);
    const a = n(this, P).closest("[data-scrollable], html") || n(this, P).matches("[data-scrollable], html") && n(this, P);
    if (a === null)
      throw new Error("Scrollable container for group root cannot be found");
    b(this, I, a);
  }
  add(t) {
    t.on("beforeOpen", this.onBeforeOpen), t.on("closeAnimationEnd", this.onCloseAnimationEnd), t.assignGroup(this);
  }
  lockScroll(t) {
    n(this, L).size === 0 && n(this, I).classList.add("scroll-lock-by-drawer"), n(this, L).add(t);
  }
  unlockScroll(t) {
    n(this, L).delete(t), n(this, L).size === 0 && n(this, I).classList.remove("scroll-lock-by-drawer");
  }
}
P = new WeakMap(), C = new WeakMap(), _ = new WeakMap(), I = new WeakMap(), L = new WeakMap(), M = new WeakMap();
var z, U;
const R = class R {
  constructor() {
    m(this, z, /* @__PURE__ */ new Map());
    m(this, U, /* @__PURE__ */ new Map());
    if (R.instance)
      return R.instance;
    R.instance = this;
  }
  init(t) {
    document.querySelectorAll(`[${K}]`).forEach((f) => {
      const d = f.getAttribute(K);
      typeof d == "string" && n(this, U).set(d, new te(f));
    }), n(this, U).set("default", new te(document.documentElement)), document.querySelectorAll("[data-drawer]").forEach((f) => {
      var o;
      const d = f.getAttribute("data-drawer");
      if (typeof d != "string")
        return;
      const u = new je({ target: f, options: t });
      n(this, z).set(d, u);
      const h = f.closest(`[${K}]`), i = h ? h.getAttribute(K) : "default";
      if (typeof i != "string")
        throw new Error("Group doesn't have alias set correctly");
      (o = n(this, U).get(i)) == null || o.add(u);
    }), document.querySelectorAll("[data-drawer-open], [data-drawer-close], [data-drawer-toggle]").forEach((f) => {
      if (f.hasAttribute("data-drawer-open")) {
        const d = f.getAttribute("data-drawer-open");
        new V({ target: f, type: "open", owner: this.get(d) });
      } else if (f.hasAttribute("data-drawer-close")) {
        const d = f.getAttribute("data-drawer-close");
        new V({ target: f, type: "close", owner: this.get(d) });
      } else {
        const d = f.getAttribute("data-drawer-toggle");
        new V({ target: f, type: "toggle", owner: this.get(d) });
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
    return typeof t == "string" && n(this, z).get(t) || null;
  }
  on(t, e, a) {
    var s;
    t ? (s = this.get(t)) == null || s.on(e, a) : Object.keys(n(this, z)).forEach((f) => {
      var d;
      return (d = this.get(f)) == null ? void 0 : d.on(e, a);
    });
  }
};
z = new WeakMap(), U = new WeakMap();
let Y = R;
typeof window < "u" && (window.hasOwnProperty("app") || (window.app = {}), window.app.drawers = new Y());
export {
  je as Drawer,
  te as DrawersGroup,
  V as Trigger,
  Y as default
};
