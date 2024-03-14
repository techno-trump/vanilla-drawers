var Q = (r, n, e) => {
  if (!n.has(r))
    throw TypeError("Cannot " + e);
};
var t = (r, n, e) => (Q(r, n, "read from private field"), e ? e.call(r) : n.get(r)), m = (r, n, e) => {
  if (n.has(r))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(r) : n.set(r, e);
}, b = (r, n, e, l) => (Q(r, n, "write to private field"), l ? l.call(r, e) : n.set(r, e), e);
function ne(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var re = { exports: {} };
(function(r) {
  var n = Object.prototype.hasOwnProperty, e = "~";
  function l() {
  }
  Object.create && (l.prototype = /* @__PURE__ */ Object.create(null), new l().__proto__ || (e = !1));
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
      n.call(o, c) && i.push(e ? c.slice(1) : c);
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
    var a = this._events[j], S = arguments.length, k, y;
    if (a.fn) {
      switch (a.once && this.removeListener(i, a.fn, void 0, !0), S) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, o), !0;
        case 3:
          return a.fn.call(a.context, o, c), !0;
        case 4:
          return a.fn.call(a.context, o, c, v), !0;
        case 5:
          return a.fn.call(a.context, o, c, v, g), !0;
        case 6:
          return a.fn.call(a.context, o, c, v, g, w), !0;
      }
      for (y = 1, k = new Array(S - 1); y < S; y++)
        k[y - 1] = arguments[y];
      a.fn.apply(a.context, k);
    } else {
      var ie = a.length, N;
      for (y = 0; y < ie; y++)
        switch (a[y].once && this.removeListener(i, a[y].fn, void 0, !0), S) {
          case 1:
            a[y].fn.call(a[y].context);
            break;
          case 2:
            a[y].fn.call(a[y].context, o);
            break;
          case 3:
            a[y].fn.call(a[y].context, o, c);
            break;
          case 4:
            a[y].fn.call(a[y].context, o, c, v);
            break;
          default:
            if (!k)
              for (N = 1, k = new Array(S - 1); N < S; N++)
                k[N - 1] = arguments[N];
            a[y].fn.apply(a[y].context, k);
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
      for (var j = 0, a = [], S = w.length; j < S; j++)
        (w[j].fn !== o || v && !w[j].once || c && w[j].context !== c) && a.push(w[j]);
      a.length ? this._events[g] = a.length === 1 ? a[0] : a : d(this, g);
    }
    return this;
  }, u.prototype.removeAllListeners = function(i) {
    var o;
    return i ? (o = e ? e + i : i, this._events[o] && d(this, o)) : (this._events = new l(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = e, u.EventEmitter = u, r.exports = u;
})(re);
var oe = re.exports;
const ae = /* @__PURE__ */ ne(oe);
var le = function(n) {
  return ce(n) && !he(n);
};
function ce(r) {
  return !!r && typeof r == "object";
}
function he(r) {
  var n = Object.prototype.toString.call(r);
  return n === "[object RegExp]" || n === "[object Date]" || de(r);
}
var ue = typeof Symbol == "function" && Symbol.for, fe = ue ? Symbol.for("react.element") : 60103;
function de(r) {
  return r.$$typeof === fe;
}
function pe(r) {
  return Array.isArray(r) ? [] : {};
}
function R(r, n) {
  return n.clone !== !1 && n.isMergeableObject(r) ? U(pe(r), r, n) : r;
}
function we(r, n, e) {
  return r.concat(n).map(function(l) {
    return R(l, e);
  });
}
function ye(r, n) {
  if (!n.customMerge)
    return U;
  var e = n.customMerge(r);
  return typeof e == "function" ? e : U;
}
function me(r) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(r).filter(function(n) {
    return Object.propertyIsEnumerable.call(r, n);
  }) : [];
}
function W(r) {
  return Object.keys(r).concat(me(r));
}
function se(r, n) {
  try {
    return n in r;
  } catch {
    return !1;
  }
}
function be(r, n) {
  return se(r, n) && !(Object.hasOwnProperty.call(r, n) && Object.propertyIsEnumerable.call(r, n));
}
function ge(r, n, e) {
  var l = {};
  return e.isMergeableObject(r) && W(r).forEach(function(s) {
    l[s] = R(r[s], e);
  }), W(n).forEach(function(s) {
    be(r, s) || (se(r, s) && e.isMergeableObject(n[s]) ? l[s] = ye(s, e)(r[s], n[s], e) : l[s] = R(n[s], e));
  }), l;
}
function U(r, n, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || we, e.isMergeableObject = e.isMergeableObject || le, e.cloneUnlessOtherwiseSpecified = R;
  var l = Array.isArray(n), s = Array.isArray(r), f = l === s;
  return f ? l ? e.arrayMerge(r, n, e) : ge(r, n, e) : R(n, e);
}
U.all = function(n, e) {
  if (!Array.isArray(n))
    throw new Error("first argument should be an array");
  return n.reduce(function(l, s) {
    return U(l, s, e);
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
function X(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function Ae(r) {
  var n, e;
  return X(r) === !1 ? !1 : (n = r.constructor, n === void 0 ? !0 : (e = n.prototype, !(X(e) === !1 || e.hasOwnProperty("isPrototypeOf") === !1)));
}
function J(r) {
  return r instanceof Element ? r : document.querySelector(r);
}
async function H(r) {
  return await new Promise((n) => setTimeout(n, r));
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
var A, E, T, B;
class V {
  constructor({ target: n, type: e, owner: l }) {
    m(this, A, void 0);
    m(this, E, void 0);
    m(this, T, void 0);
    m(this, B, !1);
    const s = J(n);
    if (!s)
      throw new Error("Trigger element cannot be found");
    b(this, A, s), b(this, E, l), b(this, T, e), this.init();
  }
  // Accessors
  get isActive() {
    return t(this, B);
  }
  get owner() {
    return t(this, E);
  }
  // Methods
  init() {
    t(this, A).addEventListener("click", (n) => this.clickHandler(n)), t(this, E).on("open", () => this.setActive(!0)), t(this, E).on("close", () => this.setActive(!1));
  }
  clickHandler(n) {
    n.__drawerTrigger = this, t(this, T) === "open" ? t(this, E).isOpen || t(this, E).open(t(this, A)) : t(this, T) === "close" ? t(this, E).isOpen && t(this, E).close(t(this, A)) : t(this, E).isOpen ? t(this, E).close(t(this, A)) : t(this, E).open(t(this, A));
  }
  setActive(n) {
    b(this, B, n), n ? t(this, A).classList.add("drawer-trigger_active") : t(this, A).classList.remove("drawer-trigger_active");
  }
}
A = new WeakMap(), E = new WeakMap(), T = new WeakMap(), B = new WeakMap();
var p, G, O, x, F, D;
class je extends ae {
  constructor({ target: e, options: l }) {
    super();
    m(this, p, void 0);
    m(this, G, void 0);
    m(this, O, void 0);
    m(this, x, void 0);
    m(this, F, void 0);
    m(this, D, void 0);
    this.handleDocumentClick = async (u) => {
      var o;
      if (((o = u.__drawerTrigger) == null ? void 0 : o.owner) === this)
        return;
      const h = u.target;
      if (u.composedPath(), t(this, O).panel.contains(h))
        return;
      const i = h == null ? void 0 : h.closest("[data-drawer]");
      i ? i.getAttribute("data-drawer") === t(this, D) ? this.handleUnderlayClick(u) : this.handleOtherDrawerClick(u) : this.handleOutsideClick(u);
    }, this.handleKeydown = (u) => {
      t(this, p).closeOnEsc && u.key === "Escape" && this.close();
    };
    const s = ee(l ? [Z, l] : [Z]), f = J(e);
    if (f === null)
      throw new Error("Drawer's root cannot be found");
    b(this, D, f.getAttribute("data-drawer"));
    const d = f.querySelector(Ce);
    if (d === null)
      throw new Error(`Drawer's panel cannot be found. Alias: ${t(this, D)}`);
    b(this, O, {
      root: f,
      panel: d
    }), this.setOptions(s), t(this, O).panel.setAttribute("tabindex", "-1"), t(this, O).root.classList.add("drawer_initialized");
  }
  addEventListeners() {
    t(this, O).root.addEventListener("keydown", this.handleKeydown), document.addEventListener("click", this.handleDocumentClick);
  }
  removeEventListeners() {
    t(this, O).root.removeEventListener("keydown", this.handleKeydown), document.removeEventListener("click", this.handleDocumentClick);
  }
  // Accessors
  get isOpen() {
    return t(this, x);
  }
  get isModal() {
    return t(this, p).modal;
  }
  set isModal(e) {
    t(this, O).root.classList[e ? "add" : "remove"]("drawer_modal");
  }
  set zIndex(e) {
    t(this, O).root.style.setProperty("--z-index", String(e)), b(this, G, e);
  }
  get zIndex() {
    return t(this, G);
  }
  // Methods
  async open(e) {
    await H(0), !t(this, x) && (this.emit("beforeOpen", { drawer: this, trigger: e }), b(this, x, !0), t(this, O).root.classList.add(t(this, p).openClass), this.emit("open", { drawer: this, trigger: e }), typeof t(this, p).openAnimationDuration == "number" && H(t(this, p).openAnimationDuration), this.emit("openAnimationEnd", { drawer: this, trigger: e }), this.focus(), this.addEventListeners());
  }
  async close(e) {
    t(this, p).onCloseConfirm && !t(this, p).onCloseConfirm(this, e) || (this.emit("beforeClose", { drawer: this, trigger: e }), this.removeEventListeners(), b(this, x, !1), t(this, O).root.classList.remove(t(this, p).openClass), this.emit("close", { drawer: this, trigger: e }), typeof t(this, p).closeAnimationDuration == "number" && H(t(this, p).closeAnimationDuration), this.emit("closeAnimationEnd", { drawer: this, trigger: e }));
  }
  handleOtherDrawerClick(e) {
  }
  handleOutsideClick(e) {
    t(this, p).closeOnOutsideClick && (typeof t(this, p).closeOnOutsideClick == "object" && t(this, p).closeOnOutsideClick.hasOwnProperty("checkTarget") ? t(this, p).closeOnOutsideClick.checkTarget(e.target) && this.close() : this.close());
  }
  handleUnderlayClick(e) {
    t(this, p).closeOnOutsideClick && this.close();
  }
  focus() {
    t(this, p).focusOnChild && this.focusChild() || this.focusSelf();
  }
  focusSelf() {
    t(this, O).panel.focus();
  }
  focusChild() {
    const e = t(this, O).panel.querySelector(_e.join(","));
    return e ? (e.focus(), !0) : !1;
  }
  setOptions(e) {
    var l;
    e.hasOwnProperty("modal") && ((l = t(this, p)) == null ? void 0 : l.modal) !== e.modal && (this.isModal = e.modal), b(this, p, t(this, p) ? ee([t(this, p), e]) : e);
  }
  assignGroup(e) {
    b(this, F, e);
  }
}
p = new WeakMap(), G = new WeakMap(), O = new WeakMap(), x = new WeakMap(), F = new WeakMap(), D = new WeakMap();
var P, C, _, I, L, M;
class te {
  constructor(n) {
    m(this, P, void 0);
    m(this, C, void 0);
    m(this, _, void 0);
    m(this, I, void 0);
    m(this, L, void 0);
    m(this, M, void 0);
    b(this, C, []), b(this, _, []), b(this, L, /* @__PURE__ */ new Set()), b(this, M, /* @__PURE__ */ new Map()), this.onBeforeOpen = ({ drawer: s, trigger: f }) => {
      s.isModal ? (t(this, M).set(s, t(this, C).length), t(this, C).push(s), s.zIndex = t(this, _).length + t(this, C).length) : (t(this, M).set(s, t(this, _).length), t(this, _).push(s), s.zIndex = t(this, _).length, t(this, C).length > 0 && t(this, C).forEach((d, u) => d.zIndex = t(this, _).length + u + 1)), this.lockScroll(s);
    }, this.onCloseAnimationEnd = ({ drawer: s, trigger: f }) => {
      const d = s.isModal ? t(this, C) : t(this, _);
      for (delete d[t(this, M).get(s)]; d.length && !d.at(-1); )
        d.pop();
      t(this, M).delete(s), this.unlockScroll(s);
    };
    const e = J(n);
    if (e === null)
      throw new Error("Drawer's group root cannot be found");
    b(this, P, e);
    const l = t(this, P).closest("[data-scrollable], html") || t(this, P).matches("[data-scrollable], html") && t(this, P);
    if (l === null)
      throw new Error("Scrollable container for group root cannot be found");
    b(this, I, l);
  }
  add(n) {
    n.on("beforeOpen", this.onBeforeOpen), n.on("closeAnimationEnd", this.onCloseAnimationEnd), n.assignGroup(this);
  }
  lockScroll(n) {
    t(this, L).size === 0 && t(this, I).classList.add("scroll-lock-by-drawer"), t(this, L).add(n);
  }
  unlockScroll(n) {
    t(this, L).delete(n), t(this, L).size === 0 && t(this, I).classList.remove("scroll-lock-by-drawer");
  }
}
P = new WeakMap(), C = new WeakMap(), _ = new WeakMap(), I = new WeakMap(), L = new WeakMap(), M = new WeakMap();
var $, z;
const q = class q {
  constructor() {
    m(this, $, /* @__PURE__ */ new Map());
    m(this, z, /* @__PURE__ */ new Map());
    if (q.instance)
      return q.instance;
    q.instance = this;
  }
  init(n) {
    document.querySelectorAll(`[${K}]`).forEach((f) => {
      const d = f.getAttribute(K);
      typeof d == "string" && t(this, z).set(d, new te(f));
    }), t(this, z).set("default", new te(document.documentElement)), document.querySelectorAll("[data-drawer]").forEach((f) => {
      var o;
      const d = f.getAttribute("data-drawer");
      if (typeof d != "string")
        return;
      const u = new je({ target: f, options: n });
      t(this, $).set(d, u);
      const h = f.closest(`[${K}]`), i = h ? h.getAttribute(K) : "default";
      if (typeof i != "string")
        throw new Error("Group doesn't have alias set correctly");
      (o = t(this, z).get(i)) == null || o.add(u);
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
  open(n, { trigger: e, options: l } = {}) {
    var s;
    (s = this.get(n)) == null || s.open(e);
  }
  close(n, { trigger: e, options: l } = {}) {
    var s;
    (s = this.get(n)) == null || s.close(e);
  }
  get(n) {
    return typeof n == "string" && t(this, $).get(n) || null;
  }
};
$ = new WeakMap(), z = new WeakMap();
let Y = q;
typeof window < "u" && (window.hasOwnProperty("app") || (window.app = {}), window.app.drawers = new Y());
export {
  je as Drawer,
  te as DrawersGroup,
  V as Trigger,
  Y as default
};
