/*!
  Mix.js - v0.0.1
  2016-04-05
  
  Copyright (c) 2016 Kevin Ennis <kevincennis>
*/


!function(a, b) {
    !function(a, b) {
        function c(a) {
            var b = a.length,
                c = fa.type(a);
            return fa.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }
        function d(a) {
            var b = oa[a] = {};
            return fa.each(a.match(ha) || [], function(a, c) {
                b[c] = !0
            }), b
        }
        function e() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = fa.expando + Math.random()
        }
        function f(a, c, d) {
            var e;
            if (d === b && 1 === a.nodeType)
                if (e = "data-" + c.replace(sa, "-$1").toLowerCase(), d = a.getAttribute(e), "string" == typeof d) {
                    try {
                        d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : ra.test(d) ? JSON.parse(d) : d
                    } catch (f) {}
                    pa.set(a, c, d)
                } else
                    d = b;
            return d
        }
        function g() {
            return !0
        }
        function h() {
            return !1
        }
        function i() {
            try {
                return T.activeElement
            } catch (a) {}
        }
        function j(a, b) {
            for (; (a = a[b]) && 1 !== a.nodeType;)
                ;
            return a
        }
        function k(a, b, c) {
            if (fa.isFunction(b))
                return fa.grep(a, function(a, d) {
                    return !!b.call(a, d, a) !== c
                });
            if (b.nodeType)
                return fa.grep(a, function(a) {
                    return a === b !== c
                });
            if ("string" == typeof b) {
                if (Ca.test(b))
                    return fa.filter(b, a, c);
                b = fa.filter(b, a)
            }
            return fa.grep(a, function(a) {
                return ba.call(b, a) >= 0 !== c
            })
        }
        function l(a, b) {
            return fa.nodeName(a, "table") && fa.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }
        function m(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }
        function n(a) {
            var b = Na.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }
        function o(a, b) {
            for (var c = a.length, d = 0; c > d; d++)
                qa.set(a[d], "globalEval", !b || qa.get(b[d], "globalEval"))
        }
        function p(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j;
            if (1 === b.nodeType) {
                if (qa.hasData(a) && (f = qa.access(a), g = qa.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++)
                            fa.event.add(b, e, j[e][c])
                }
                pa.hasData(a) && (h = pa.access(a), i = fa.extend({}, h), pa.set(b, i))
            }
        }
        function q(a, c) {
            var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
            return c === b || c && fa.nodeName(a, c) ? fa.merge([a], d) : d
        }
        function r(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && Ka.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
        function s(a, b) {
            if (b in a)
                return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _a.length; e--;)
                if (b = _a[e] + c, b in a)
                    return b;
            return d
        }
        function t(a, b) {
            return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
        }
        function u(b) {
            return a.getComputedStyle(b, null)
        }
        function v(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
                d = a[g], d.style && (f[g] = qa.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qa.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), (c && "none" !== c || !e) && qa.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
            for (g = 0; h > g; g++)
                d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }
        function w(a, b, c) {
            var d = Ua.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }
        function x(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
                "margin" === c && (g += fa.css(a, c + $a[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + $a[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + $a[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + $a[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + $a[f] + "Width", !0, e)));
            return g
        }
        function y(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = u(a),
                g = fa.support.boxSizing && "border-box" === fa.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = Qa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Va.test(e))
                    return e;
                d = g && (fa.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }
        function z(a) {
            var b = T,
                c = Xa[a];
            return c || (c = A(a, b), "none" !== c && c || (Ra = (Ra || fa("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Ra[0].contentWindow || Ra[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = A(a, b), Ra.detach()), Xa[a] = c), c
        }
        function A(a, b) {
            var c = fa(b.createElement(a)).appendTo(b.body),
                d = fa.css(c[0], "display");
            return c.remove(), d
        }
        function B(a, b, c, d) {
            var e;
            if (fa.isArray(b))
                fa.each(b, function(b, e) {
                    c || bb.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                });
            else if (c || "object" !== fa.type(b))
                d(a, b);
            else
                for (e in b)
                    B(a + "[" + e + "]", b[e], c, d)
        }
        function C(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d,
                    e = 0,
                    f = b.toLowerCase().match(ha) || [];
                if (fa.isFunction(c))
                    for (; d = f[e++];)
                        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }
        function D(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, fa.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === sb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }
        function E(a, c) {
            var d,
                e,
                f = fa.ajaxSettings.flatOptions || {};
            for (d in c)
                c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
            return e && fa.extend(!0, a, e), a
        }
        function F(a, c, d) {
            for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0];)
                j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
            if (e)
                for (f in i)
                    if (i[f] && i[f].test(e)) {
                        j.unshift(f);
                        break
                    }
            if (j[0] in d)
                g = j[0];
            else {
                for (f in d) {
                    if (!j[0] || a.converters[f + " " + j[0]]) {
                        g = f;
                        break
                    }
                    h || (h = f)
                }
                g = g || h
            }
            return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
        }
        function G(a, b, c, d) {
            var e,
                f,
                g,
                h,
                i,
                j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters)
                    j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f)
                        f = i;
                    else if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g)
                            for (e in j)
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                        if (g !== !0)
                            if (g && a["throws"])
                                b = g(b);
                            else
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                    }
            return {
                state: "success",
                data: b
            }
        }
        function H() {
            return setTimeout(function() {
                Bb = b
            }), Bb = fa.now()
        }
        function I(a, b, c) {
            for (var d, e = (Hb[b] || []).concat(Hb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a))
                    return d
        }
        function J(a, b, c) {
            var d,
                e,
                f = 0,
                g = Gb.length,
                h = fa.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e)
                        return !1;
                    for (var b = Bb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                        j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: fa.extend({}, b),
                    opts: fa.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Bb || H(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e)
                            return this;
                        for (e = !0; d > c; c++)
                            j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (K(k, j.opts.specialEasing); g > f; f++)
                if (d = Gb[f].call(j, a, k, j.opts))
                    return d;
            return fa.map(k, I, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        function K(a, b) {
            var c,
                d,
                e,
                f,
                g;
            for (c in a)
                if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f)
                        c in a || (a[c] = f[c], b[c] = e)
                } else
                    b[d] = e
        }
        function L(a, c, d) {
            var e,
                f,
                g,
                h,
                i,
                j,
                k = this,
                l = {},
                m = a.style,
                n = a.nodeType && t(a),
                o = qa.get(a, "fxshow");
            d.queue || (i = fa._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function() {
                i.unqueued || j()
            }), i.unqueued++, k.always(function() {
                k.always(function() {
                    i.unqueued--, fa.queue(a, "fx").length || i.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === fa.css(a, "display") && "none" === fa.css(a, "float") && (m.display = "inline-block")), d.overflow && (m.overflow = "hidden", k.always(function() {
                m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2]
            }));
            for (e in c)
                if (f = c[e], Db.exec(f)) {
                    if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                        if ("show" !== f || !o || o[e] === b)
                            continue;
                        n = !0
                    }
                    l[e] = o && o[e] || fa.style(a, e)
                }
            if (!fa.isEmptyObject(l)) {
                o ? "hidden" in o && (n = o.hidden) : o = qa.access(a, "fxshow", {}), g && (o.hidden = !n), n ? fa(a).show() : k.done(function() {
                    fa(a).hide()
                }), k.done(function() {
                    var b;
                    qa.remove(a, "fxshow");
                    for (b in l)
                        fa.style(a, b, l[b])
                });
                for (e in l)
                    h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, h.start = "width" === e || "height" === e ? 1 : 0))
            }
        }
        function M(a, b, c, d, e) {
            return new M.prototype.init(a, b, c, d, e)
        }
        function N(a, b) {
            var c,
                d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b)
                c = $a[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }
        function O(a) {
            return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var P,
            Q,
            R = typeof b,
            S = a.location,
            T = a.document,
            U = T.documentElement,
            V = a.jQuery,
            W = a.$,
            X = {},
            Y = [],
            Z = "2.0.3",
            $ = Y.concat,
            _ = Y.push,
            aa = Y.slice,
            ba = Y.indexOf,
            ca = X.toString,
            da = X.hasOwnProperty,
            ea = Z.trim,
            fa = function(a, b) {
                return new fa.fn.init(a, b, P)
            },
            ga = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ha = /\S+/g,
            ia = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ja = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ka = /^-ms-/,
            la = /-([\da-z])/gi,
            ma = function(a, b) {
                return b.toUpperCase()
            },
            na = function() {
                T.removeEventListener("DOMContentLoaded", na, !1), a.removeEventListener("load", na, !1), fa.ready()
            };
        fa.fn = fa.prototype = {
            jquery: Z,
            constructor: fa,
            init: function(a, c, d) {
                var e,
                    f;
                if (!a)
                    return this;
                if ("string" == typeof a) {
                    if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ia.exec(a), !e || !e[1] && c)
                        return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                    if (e[1]) {
                        if (c = c instanceof fa ? c[0] : c, fa.merge(this, fa.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), ja.test(e[1]) && fa.isPlainObject(c))
                            for (e in c)
                                fa.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                        return this
                    }
                    return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = T, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return aa.call(this)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a) {
                var b = fa.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return fa.each(this, a, b)
            },
            ready: function(a) {
                return fa.ready.promise().done(a), this
            },
            slice: function() {
                return this.pushStack(aa.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            map: function(a) {
                return this.pushStack(fa.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: _,
            sort: [].sort,
            splice: [].splice
        }, fa.fn.init.prototype = fa.fn, fa.extend = fa.fn.extend = function() {
            var a,
                c,
                d,
                e,
                f,
                g,
                h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fa.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
                if (null != (a = arguments[i]))
                    for (c in a)
                        d = h[c], e = a[c], h !== e && (k && e && (fa.isPlainObject(e) || (f = fa.isArray(e))) ? (f ? (f = !1, g = d && fa.isArray(d) ? d : []) : g = d && fa.isPlainObject(d) ? d : {}, h[c] = fa.extend(k, g, e)) : e !== b && (h[c] = e));
            return h
        }, fa.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            noConflict: function(b) {
                return a.$ === fa && (a.$ = W), b && a.jQuery === fa && (a.jQuery = V), fa
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? fa.readyWait++ : fa.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (Q.resolveWith(T, [fa]), fa.fn.trigger && fa(T).trigger("ready").off("ready")))
            },
            isFunction: function(a) {
                return "function" === fa.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? X[ca.call(a)] || "object" : typeof a
            },
            isPlainObject: function(a) {
                if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a))
                    return !1;
                try {
                    if (a.constructor && !da.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (b) {
                    return !1
                }
                return !0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a)
                    return !1;
                return !0
            },
            error: function(a) {
                throw new Error(a)
            },
            parseHTML: function(a, b, c) {
                if (!a || "string" != typeof a)
                    return null;
                "boolean" == typeof b && (c = b, b = !1), b = b || T;
                var d = ja.exec(a),
                    e = !c && [];
                return d ? [b.createElement(d[1])] : (d = fa.buildFragment([a], b, e), e && fa(e).remove(), fa.merge([], d.childNodes))
            },
            parseJSON: JSON.parse,
            parseXML: function(a) {
                var c,
                    d;
                if (!a || "string" != typeof a)
                    return null;
                try {
                    d = new DOMParser, c = d.parseFromString(a, "text/xml")
                } catch (e) {
                    c = b
                }
                return c && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + a), c
            },
            noop: function() {},
            globalEval: function(a) {
                var b,
                    c = eval;
                a = fa.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(ka, "ms-").replace(la, ma)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e,
                    f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++)
                            ;
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1)
                                break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1)
                            break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : ea.call(a)
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : _.call(d, a)), d
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : ba.call(b, a, c)
            },
            merge: function(a, c) {
                var d = c.length,
                    e = a.length,
                    f = 0;
                if ("number" == typeof d)
                    for (; d > f; f++)
                        a[e++] = c[f];
                else
                    for (; c[f] !== b;)
                        a[e++] = c[f++];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                var d,
                    e = [],
                    f = 0,
                    g = a.length;
                for (c = !!c; g > f; f++)
                    d = !!b(a[f], f), c !== d && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e,
                    f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++)
                        e = b(a[f], f, d), null != e && (i[i.length] = e);
                else
                    for (f in a)
                        e = b(a[f], f, d), null != e && (i[i.length] = e);
                return $.apply([], i)
            },
            guid: 1,
            proxy: function(a, c) {
                var d,
                    e,
                    f;
                return "string" == typeof c && (d = a[c], c = a, a = d), fa.isFunction(a) ? (e = aa.call(arguments, 2), f = function() {
                    return a.apply(c || this, e.concat(aa.call(arguments)))
                }, f.guid = a.guid = a.guid || fa.guid++, f) : b
            },
            access: function(a, c, d, e, f, g, h) {
                var i = 0,
                    j = a.length,
                    k = null == d;
                if ("object" === fa.type(d)) {
                    f = !0;
                    for (i in d)
                        fa.access(a, c, i, d[i], !0, g, h)
                } else if (e !== b && (f = !0, fa.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                    return k.call(fa(a), c)
                })), c))
                    for (; j > i; i++)
                        c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
                return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
            },
            now: Date.now,
            swap: function(a, b, c, d) {
                var e,
                    f,
                    g = {};
                for (f in b)
                    g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b)
                    a.style[f] = g[f];
                return e
            }
        }), fa.ready.promise = function(b) {
            return Q || (Q = fa.Deferred(), "complete" === T.readyState ? setTimeout(fa.ready) : (T.addEventListener("DOMContentLoaded", na, !1), a.addEventListener("load", na, !1))), Q.promise(b)
        }, fa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            X["[object " + b + "]"] = b.toLowerCase()
        }), P = fa(T), function(a, b) {
            function c(a, b, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    o,
                    p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a)
                    return c;
                if (1 !== (h = b.nodeType) && 9 !== h)
                    return [];
                if (I && !d) {
                    if (e = ta.exec(a))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode)
                                    return c;
                                if (f.id === g)
                                    return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                                return c.push(f), c
                        } else {
                            if (e[2])
                                return aa.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName)
                                return aa.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (x.qsa && (!J || !J.test(a))) {
                        if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wa, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;)
                                j[i] = l + n(j[i]);
                            o = na.test(a) && b.parentNode || b, p = j.join(",")
                        }
                        if (p)
                            try {
                                return aa.apply(c, o.querySelectorAll(p)), c
                            } catch (q) {} finally {
                                k || b.removeAttribute("id")
                            }
                    }
                }
                return v(a.replace(ka, "$1"), b, c, d)
            }
            function d() {
                function a(c, d) {
                    return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d
                }
                var b = [];
                return a
            }
            function e(a) {
                return a[N] = !0, a
            }
            function f(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }
            function g(a, b) {
                for (var c = a.split("|"), d = a.length; d--;)
                    z.attrHandle[c[d]] = b
            }
            function h(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
                if (d)
                    return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b)
                            return -1;
                return a ? 1 : -1
            }
            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }
            function j(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }
            function k(a) {
                return e(function(b) {
                    return b = +b, e(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;)
                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }
            function l() {}
            function m(a, b) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = S[a + " "];
                if (k)
                    return b ? 0 : k.slice(0);
                for (h = a, i = [], j = z.preFilter; h;) {
                    d && !(e = la.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ma.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ka, " ")
                    }), h = h.slice(d.length));
                    for (g in z.filter)
                        !(e = ra[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                            value: d,
                            type: g,
                            matches: e
                        }), h = h.slice(d.length));
                    if (!d)
                        break
                }
                return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
            }
            function n(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++)
                    d += a[b].value;
                return d
            }
            function o(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e)
                            return a(b, c, f)
                } : function(b, c, g) {
                    var h,
                        i,
                        j,
                        k = P + " " + f;
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g))
                                return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e)
                                if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                    if ((h = i[1]) === !0 || h === y)
                                        return h === !0
                                } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0)
                                    return !0
                }
            }
            function p(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d))
                            return !1;
                    return !0
                } : a[0]
            }
            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                    (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }
            function r(a, b, c, d, f, g) {
                return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                    var j,
                        k,
                        l,
                        m = [],
                        n = [],
                        o = g.length,
                        p = e || u(b || "*", h.nodeType ? [h] : h, []),
                        r = !a || !e && b ? p : q(p, m, a, h, i),
                        s = c ? f || (e ? a : o || d) ? [] : g : r;
                    if (c && c(r, s, h, i), d)
                        for (j = q(s, n), d(j, [], h, i), k = j.length; k--;)
                            (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                    if (e) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = s.length; k--;)
                                    (l = s[k]) && j.push(r[k] = l);
                                f(null, s = [], j, i)
                            }
                            for (k = s.length; k--;)
                                (l = s[k]) && (j = f ? ca.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                        }
                    } else
                        s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : aa.apply(g, s)
                })
            }
            function s(a) {
                for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                        return a === b
                    }, g, !0), j = o(function(a) {
                        return ca.call(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }]; e > h; h++)
                    if (c = z.relative[a[h].type])
                        k = [o(p(k), c)];
                    else {
                        if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !z.relative[a[d].type]; d++)
                                ;
                            return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ka, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                        }
                        k.push(c)
                    }
                return p(k)
            }
            function t(a, b) {
                var d = 0,
                    f = b.length > 0,
                    g = a.length > 0,
                    h = function(e, h, i, j, k) {
                        var l,
                            m,
                            n,
                            o = [],
                            p = 0,
                            r = "0",
                            s = e && [],
                            t = null != k,
                            u = D,
                            v = e || g && z.find.TAG("*", k && h.parentNode || h),
                            w = P += null == u ? 1 : Math.random() || .1;
                        for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                            if (g && l) {
                                for (m = 0; n = a[m++];)
                                    if (n(l, h, i)) {
                                        j.push(l);
                                        break
                                    }
                                t && (P = w, y = ++d)
                            }
                            f && ((l = !n && l) && p--, e && s.push(l))
                        }
                        if (p += r, f && r !== p) {
                            for (m = 0; n = b[m++];)
                                n(s, o, h, i);
                            if (e) {
                                if (p > 0)
                                    for (; r--;)
                                        s[r] || o[r] || (o[r] = $.call(j));
                                o = q(o)
                            }
                            aa.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                        }
                        return t && (P = w, D = u), s
                    };
                return f ? e(h) : h
            }
            function u(a, b, d) {
                for (var e = 0, f = b.length; f > e; e++)
                    c(a, b[e], d);
                return d
            }
            function v(a, b, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i,
                    j = m(a);
                if (!d && 1 === j.length) {
                    if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                        if (b = (z.find.ID(g.matches[0].replace(xa, ya), b) || [])[0], !b)
                            return c;
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = ra.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]);)
                        if ((i = z.find[h]) && (d = i(g.matches[0].replace(xa, ya), na.test(f[0].type) && b.parentNode || b))) {
                            if (f.splice(e, 1), a = d.length && n(f), !a)
                                return aa.apply(c, d), c;
                            break
                        }
                }
                return C(a, j)(d, b, !I, c, na.test(a)), c
            }
            var w,
                x,
                y,
                z,
                A,
                B,
                C,
                D,
                E,
                F,
                G,
                H,
                I,
                J,
                K,
                L,
                M,
                N = "sizzle" + -new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = d(),
                S = d(),
                T = d(),
                U = !1,
                V = function(a, b) {
                    return a === b ? (U = !0, 0) : 0
                },
                W = typeof b,
                X = 1 << 31,
                Y = {}.hasOwnProperty,
                Z = [],
                $ = Z.pop,
                _ = Z.push,
                aa = Z.push,
                ba = Z.slice,
                ca = Z.indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] === a)
                            return b;
                    return -1
                },
                da = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ea = "[\\x20\\t\\r\\n\\f]",
                ga = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ha = ga.replace("w", "w#"),
                ia = "\\[" + ea + "*(" + ga + ")" + ea + "*(?:([*^$|!~]?=)" + ea + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ha + ")|)|)" + ea + "*\\]",
                ja = ":(" + ga + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ia.replace(3, 8) + ")*)|.*)\\)|)",
                ka = new RegExp("^" + ea + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ea + "+$", "g"),
                la = new RegExp("^" + ea + "*," + ea + "*"),
                ma = new RegExp("^" + ea + "*([>+~]|" + ea + ")" + ea + "*"),
                na = new RegExp(ea + "*[+~]"),
                oa = new RegExp("=" + ea + "*([^\\]'\"]*)" + ea + "*\\]", "g"),
                pa = new RegExp(ja),
                qa = new RegExp("^" + ha + "$"),
                ra = {
                    ID: new RegExp("^#(" + ga + ")"),
                    CLASS: new RegExp("^\\.(" + ga + ")"),
                    TAG: new RegExp("^(" + ga.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ia),
                    PSEUDO: new RegExp("^" + ja),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ea + "*(even|odd|(([+-]|)(\\d*)n|)" + ea + "*(?:([+-]|)" + ea + "*(\\d+)|))" + ea + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + da + ")$", "i"),
                    needsContext: new RegExp("^" + ea + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ea + "*((?:-\\d)?\\d*)" + ea + "*\\)|)(?=[^-]|$)", "i")
                },
                sa = /^[^{]+\{\s*\[native \w/,
                ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ua = /^(?:input|select|textarea|button)$/i,
                va = /^h\d$/i,
                wa = /'|\\/g,
                xa = new RegExp("\\\\([\\da-f]{1,6}" + ea + "?|(" + ea + ")|.)", "ig"),
                ya = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                };
            try {
                aa.apply(Z = ba.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
            } catch (za) {
                aa = {
                    apply: Z.length ? function(a, b) {
                        _.apply(a, ba.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];)
                            ;
                        a.length = c - 1
                    }
                }
            }
            B = c.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, x = c.support = {}, F = c.setDocument = function(a) {
                var b = a ? a.ownerDocument || a : O,
                    c = b.defaultView;
                return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() {
                    F()
                }), x.attributes = f(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), x.getElementsByTagName = f(function(a) {
                    return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length
                }), x.getElementsByClassName = f(function(a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), x.getById = f(function(a) {
                    return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length
                }), x.getById ? (z.find.ID = function(a, b) {
                    if (typeof b.getElementById !== W && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, z.filter.ID = function(a) {
                    var b = a.replace(xa, ya);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete z.find.ID, z.filter.ID = function(a) {
                    var b = a.replace(xa, ya);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), z.find.TAG = x.getElementsByTagName ? function(a, b) {
                    return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0
                } : function(a, b) {
                    var c,
                        d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];)
                            1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, z.find.CLASS = x.getElementsByClassName && function(a, b) {
                    return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (x.qsa = sa.test(b.querySelectorAll)) && (f(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + ea + "*(?:value|" + da + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
                }), f(function(a) {
                    var c = b.createElement("input");
                    c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + ea + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (x.matchesSelector = sa.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                    x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ja)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), M = sa.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a)
                                return !0;
                    return !1
                }, V = H.compareDocumentPosition ? function(a, c) {
                    if (a === c)
                        return U = !0, 0;
                    var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                    return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? ca.call(E, a) - ca.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : function(a, c) {
                    var d,
                        e = 0,
                        f = a.parentNode,
                        g = c.parentNode,
                        i = [a],
                        j = [c];
                    if (a === c)
                        return U = !0, 0;
                    if (!f || !g)
                        return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? ca.call(E, a) - ca.call(E, c) : 0;
                    if (f === g)
                        return h(a, c);
                    for (d = a; d = d.parentNode;)
                        i.unshift(d);
                    for (d = c; d = d.parentNode;)
                        j.unshift(d);
                    for (; i[e] === j[e];)
                        e++;
                    return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, b) : G
            }, c.matches = function(a, b) {
                return c(a, null, null, b)
            }, c.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== G && F(a), b = b.replace(oa, "='$1']"), x.matchesSelector && I && (!K || !K.test(b)) && (!J || !J.test(b)))
                    try {
                        var d = L.call(a, b);
                        if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                            return d
                    } catch (e) {}
                return c(b, G, null, [a]).length > 0
            }, c.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, c.attr = function(a, c) {
                (a.ownerDocument || a) !== G && F(a);
                var d = z.attrHandle[c.toLowerCase()],
                    e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
                return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
            }, c.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, c.uniqueSort = function(a) {
                var b,
                    c = [],
                    d = 0,
                    e = 0;
                if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                    for (; b = a[e++];)
                        b === a[e] && (d = c.push(e));
                    for (; d--;)
                        a.splice(c[d], 1)
                }
                return a
            }, A = c.getText = function(a) {
                var b,
                    c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent)
                            return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)
                            c += A(a)
                    } else if (3 === e || 4 === e)
                        return a.nodeValue
                } else
                    for (; b = a[d]; d++)
                        c += A(b);
                return c
            }, z = c.selectors = {
                cacheLength: 50,
                createPseudo: e,
                match: ra,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(xa, ya), a[3] = (a[4] || a[5] || "").replace(xa, ya), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var c,
                            d = !a[5] && a[2];
                        return ra.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pa.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(xa, ya).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + ea + ")" + a + "(" + ea + "|$)")) && R(a, function(a) {
                                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(a, b, d) {
                        return function(e) {
                            var f = c.attr(e, a);
                            return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j,
                                k,
                                l,
                                m,
                                n,
                                o,
                                p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                                return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                    m = j[1];
                                else
                                    for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b));)
                                        ;
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var d,
                            f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                        return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                            for (var d, e = f(a, b), g = e.length; g--;)
                                d = ca.call(a, e[g]), a[d] = !(c[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, d)
                        }) : f
                    }
                },
                pseudos: {
                    not: e(function(a) {
                        var b = [],
                            c = [],
                            d = C(a.replace(ka, "$1"));
                        return d[N] ? e(function(a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)
                                (f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop()
                        }
                    }),
                    has: e(function(a) {
                        return function(b) {
                            return c(a, b).length > 0
                        }
                    }),
                    contains: e(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || A(b)).indexOf(a) > -1
                        }
                    }),
                    lang: e(function(a) {
                        return qa.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xa, ya).toLowerCase(), function(b) {
                            var c;
                            do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType)
                                return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !z.pseudos.empty(a)
                    },
                    header: function(a) {
                        return va.test(a.nodeName)
                    },
                    input: function(a) {
                        return ua.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                    },
                    first: k(function() {
                        return [0]
                    }),
                    last: k(function(a, b) {
                        return [b - 1]
                    }),
                    eq: k(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: k(function(a, b) {
                        for (var c = 0; b > c; c += 2)
                            a.push(c);
                        return a
                    }),
                    odd: k(function(a, b) {
                        for (var c = 1; b > c; c += 2)
                            a.push(c);
                        return a
                    }),
                    lt: k(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;)
                            a.push(d);
                        return a
                    }),
                    gt: k(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;)
                            a.push(d);
                        return a
                    })
                }
            }, z.pseudos.nth = z.pseudos.eq;
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                z.pseudos[w] = i(w);
            for (w in {
                submit: !0,
                reset: !0
            })
                z.pseudos[w] = j(w);
            l.prototype = z.filters = z.pseudos, z.setFilters = new l, C = c.compile = function(a, b) {
                var c,
                    d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = m(a)), c = b.length; c--;)
                        f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d))
                }
                return f
            }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), x.sortDetached = f(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), f(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || g("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), x.attributes && f(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || g("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), f(function(a) {
                return null == a.getAttribute("disabled")
            }) || g(da, function(a, b, c) {
                var d;
                return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null
            }), fa.find = c, fa.expr = c.selectors, fa.expr[":"] = fa.expr.pseudos, fa.unique = c.uniqueSort, fa.text = c.getText, fa.isXMLDoc = c.isXML, fa.contains = c.contains
        }(a);
        var oa = {};
        fa.Callbacks = function(a) {
            a = "string" == typeof a ? oa[a] || d(a) : fa.extend({}, a);
            var c,
                e,
                f,
                g,
                h,
                i,
                j = [],
                k = !a.once && [],
                l = function(b) {
                    for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
                        if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                            c = !1;
                            break
                        }
                    f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
                },
                m = {
                    add: function() {
                        if (j) {
                            var b = j.length;
                            !function d(b) {
                                fa.each(b, function(b, c) {
                                    var e = fa.type(c);
                                    "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                                })
                            }(arguments), f ? h = j.length : c && (g = b, l(c))
                        }
                        return this
                    },
                    remove: function() {
                        return j && fa.each(arguments, function(a, b) {
                            for (var c; (c = fa.inArray(b, j, c)) > -1;)
                                j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                        }), this
                    },
                    has: function(a) {
                        return a ? fa.inArray(a, j) > -1 : !(!j || !j.length)
                    },
                    empty: function() {
                        return j = [], h = 0, this
                    },
                    disable: function() {
                        return j = k = c = b, this
                    },
                    disabled: function() {
                        return !j
                    },
                    lock: function() {
                        return k = b, c || m.disable(), this
                    },
                    locked: function() {
                        return !k
                    },
                    fireWith: function(a, b) {
                        return !j || e && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], f ? k.push(b) : l(b)), this
                    },
                    fire: function() {
                        return m.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!e
                    }
                };
            return m
        }, fa.extend({
            Deferred: function(a) {
                var b = [["resolve", "done", fa.Callbacks("once memory"), "resolved"], ["reject", "fail", fa.Callbacks("once memory"), "rejected"], ["notify", "progress", fa.Callbacks("memory")]],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return fa.Deferred(function(c) {
                                fa.each(b, function(b, f) {
                                    var g = f[0],
                                        h = fa.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = h && h.apply(this, arguments);
                                        a && fa.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? fa.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, fa.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b,
                    c,
                    d,
                    e = 0,
                    f = aa.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : fa.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? aa.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
                        f[e] && fa.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        }), fa.support = function(b) {
            var c = T.createElement("input"),
                d = T.createDocumentFragment(),
                e = T.createElement("div"),
                f = T.createElement("select"),
                g = f.appendChild(T.createElement("option"));
            return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, fa(function() {
                var c,
                    d,
                    f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                    g = T.getElementsByTagName("body")[0];
                g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", fa.swap(g, null != g.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    b.boxSizing = 4 === e.offsetWidth
                }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), g.removeChild(c))
            }), b) : b
        }({});
        var pa,
            qa,
            ra = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            sa = /([A-Z])/g;
        e.uid = 1, e.accepts = function(a) {
            return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
        }, e.prototype = {
            key: function(a) {
                if (!e.accepts(a))
                    return 0;
                var b = {},
                    c = a[this.expando];
                if (!c) {
                    c = e.uid++;
                    try {
                        b[this.expando] = {
                            value: c
                        }, Object.defineProperties(a, b)
                    } catch (d) {
                        b[this.expando] = c, fa.extend(a, b)
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c
            },
            set: function(a, b, c) {
                var d,
                    e = this.key(a),
                    f = this.cache[e];
                if ("string" == typeof b)
                    f[b] = c;
                else if (fa.isEmptyObject(f))
                    fa.extend(this.cache[e], b);
                else
                    for (d in b)
                        f[d] = b[d];
                return f
            },
            get: function(a, c) {
                var d = this.cache[this.key(a)];
                return c === b ? d : d[c]
            },
            access: function(a, c, d) {
                var e;
                return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, fa.camelCase(c))) : (this.set(a, c, d), d !== b ? d : c)
            },
            remove: function(a, c) {
                var d,
                    e,
                    f,
                    g = this.key(a),
                    h = this.cache[g];
                if (c === b)
                    this.cache[g] = {};
                else {
                    fa.isArray(c) ? e = c.concat(c.map(fa.camelCase)) : (f = fa.camelCase(c), c in h ? e = [c, f] : (e = f, e = e in h ? [e] : e.match(ha) || [])), d = e.length;
                    for (; d--;)
                        delete h[e[d]]
                }
            },
            hasData: function(a) {
                return !fa.isEmptyObject(this.cache[a[this.expando]] || {})
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]]
            }
        }, pa = new e, qa = new e, fa.extend({
            acceptData: e.accepts,
            hasData: function(a) {
                return pa.hasData(a) || qa.hasData(a)
            },
            data: function(a, b, c) {
                return pa.access(a, b, c)
            },
            removeData: function(a, b) {
                pa.remove(a, b)
            },
            _data: function(a, b, c) {
                return qa.access(a, b, c)
            },
            _removeData: function(a, b) {
                qa.remove(a, b)
            }
        }), fa.fn.extend({
            data: function(a, c) {
                var d,
                    e,
                    g = this[0],
                    h = 0,
                    i = null;
                if (a === b) {
                    if (this.length && (i = pa.get(g), 1 === g.nodeType && !qa.get(g, "hasDataAttrs"))) {
                        for (d = g.attributes; h < d.length; h++)
                            e = d[h].name, 0 === e.indexOf("data-") && (e = fa.camelCase(e.slice(5)), f(g, e, i[e]));
                        qa.set(g, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof a ? this.each(function() {
                    pa.set(this, a)
                }) : fa.access(this, function(c) {
                    var d,
                        e = fa.camelCase(a);
                    if (g && c === b) {
                        if (d = pa.get(g, a), d !== b)
                            return d;
                        if (d = pa.get(g, e), d !== b)
                            return d;
                        if (d = f(g, e, b), d !== b)
                            return d
                    } else
                        this.each(function() {
                            var d = pa.get(this, e);
                            pa.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pa.set(this, a, c)
                        })
                }, null, c, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    pa.remove(this, a)
                })
            }
        }), fa.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = qa.get(a, b), c && (!d || fa.isArray(c) ? d = qa.access(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = fa.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = fa._queueHooks(a, b),
                    g = function() {
                        fa.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return qa.get(a, c) || qa.access(a, c, {
                        empty: fa.Callbacks("once memory").add(function() {
                            qa.remove(a, [b + "queue", c])
                        })
                    })
            }
        }), fa.fn.extend({
            queue: function(a, c) {
                var d = 2;
                return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? fa.queue(this[0], a) : c === b ? this : this.each(function() {
                    var b = fa.queue(this, a, c);
                    fa._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fa.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    fa.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                return a = fa.fx ? fa.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                var d,
                    e = 1,
                    f = fa.Deferred(),
                    g = this,
                    h = this.length,
                    i = function() {
                        --e || f.resolveWith(g, [g])
                    };
                for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;)
                    d = qa.get(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
                return i(), f.promise(c)
            }
        });
        var ta,
            ua,
            va = /[\t\r\n\f]/g,
            wa = /\r/g,
            xa = /^(?:input|select|textarea|button)$/i;
        fa.fn.extend({
            attr: function(a, b) {
                return fa.access(this, fa.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    fa.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return fa.access(this, fa.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[fa.propFix[a] || a]
                })
            },
            addClass: function(a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = 0,
                    h = this.length,
                    i = "string" == typeof a && a;
                if (fa.isFunction(a))
                    return this.each(function(b) {
                        fa(this).addClass(a.call(this, b, this.className))
                    });
                if (i)
                    for (b = (a || "").match(ha) || []; h > g; g++)
                        if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(va, " ") : " ")) {
                            for (f = 0; e = b[f++];)
                                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            c.className = fa.trim(d)
                        }
                return this
            },
            removeClass: function(a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = 0,
                    h = this.length,
                    i = 0 === arguments.length || "string" == typeof a && a;
                if (fa.isFunction(a))
                    return this.each(function(b) {
                        fa(this).removeClass(a.call(this, b, this.className))
                    });
                if (i)
                    for (b = (a || "").match(ha) || []; h > g; g++)
                        if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(va, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;)
                                    d = d.replace(" " + e + " ", " ");
                            c.className = a ? fa.trim(d) : ""
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function(c) {
                    fa(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c)
                        for (var b, d = 0, e = fa(this), f = a.match(ha) || []; b = f[d++];)
                            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else
                        c !== R && "boolean" !== c || (this.className && qa.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : qa.get(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(va, " ").indexOf(b) >= 0)
                        return !0;
                return !1
            },
            val: function(a) {
                var c,
                    d,
                    e,
                    f = this[0];
                {
                    if (arguments.length)
                        return e = fa.isFunction(a), this.each(function(d) {
                            var f;
                            1 === this.nodeType && (f = e ? a.call(this, d, fa(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fa.isArray(f) && (f = fa.map(f, function(a) {
                                return null == a ? "" : a + ""
                            })), c = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                        });
                    if (f)
                        return c = fa.valHooks[f.type] || fa.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wa, "") : null == d ? "" : d)
                }
            }
        }), fa.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], (c.selected || i === e) && (fa.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
                                if (b = fa(c).val(), f)
                                    return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;)
                            d = e[g], (d.selected = fa.inArray(fa(d).val(), f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            },
            attr: function(a, c, d) {
                var e,
                    f,
                    g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)
                    return typeof a.getAttribute === R ? fa.prop(a, c, d) : (1 === g && fa.isXMLDoc(a) || (c = c.toLowerCase(), e = fa.attrHooks[c] || (fa.expr.match.bool.test(c) ? ua : ta)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = fa.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : void fa.removeAttr(a, c))
            },
            removeAttr: function(a, b) {
                var c,
                    d,
                    e = 0,
                    f = b && b.match(ha);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];)
                        d = fa.propFix[c] || c, fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!fa.support.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, c, d) {
                var e,
                    f,
                    g,
                    h = a.nodeType;
                if (a && 3 !== h && 8 !== h && 2 !== h)
                    return g = 1 !== h || !fa.isXMLDoc(a), g && (c = fa.propFix[c] || c, f = fa.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        return a.hasAttribute("tabindex") || xa.test(a.nodeName) || a.href ? a.tabIndex : -1
                    }
                }
            }
        }), ua = {
            set: function(a, b, c) {
                return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function(a, c) {
            var d = fa.expr.attrHandle[c] || fa.find.attr;
            fa.expr.attrHandle[c] = function(a, c, e) {
                var f = fa.expr.attrHandle[c],
                    g = e ? b : (fa.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
                return fa.expr.attrHandle[c] = f, g
            }
        }), fa.support.optSelected || (fa.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            }
        }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            fa.propFix[this.toLowerCase()] = this
        }), fa.each(["radio", "checkbox"], function() {
            fa.valHooks[this] = {
                set: function(a, b) {
                    return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) >= 0 : void 0
                }
            }, fa.support.checkOn || (fa.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var ya = /^key/,
            za = /^(?:mouse|contextmenu)|click/,
            Aa = /^(?:focusinfocus|focusoutblur)$/,
            Ba = /^([^.]*)(?:\.(.+)|)$/;
        fa.event = {
            global: {},
            add: function(a, c, d, e, f) {
                var g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r = qa.get(a);
                if (r) {
                    for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fa.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
                        return typeof fa === R || a && fa.event.triggered === a.type ? b : fa.event.dispatch.apply(h.elem, arguments)
                    }, h.elem = a), c = (c || "").match(ha) || [""], k = c.length; k--;)
                        i = Ba.exec(c[k]) || [], o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fa.event.special[o] || {}, o = (f ? m.delegateType : m.bindType) || o, m = fa.event.special[o] || {}, l = fa.extend({
                            type: o,
                            origType: q,
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: f,
                            needsContext: f && fa.expr.match.needsContext.test(f),
                            namespace: p.join(".")
                        }, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), fa.event.global[o] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q = qa.hasData(a) && qa.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(ha) || [""], j = b.length; j--;)
                        if (h = Ba.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;)
                                k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i)
                                fa.event.remove(a, n + b[j], c, d, !0);
                    fa.isEmptyObject(i) && (delete q.handle, qa.remove(a, "events"))
                }
            },
            trigger: function(c, d, e, f) {
                var g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n = [e || T],
                    o = da.call(c, "type") ? c.type : c,
                    p = da.call(c, "namespace") ? c.namespace.split(".") : [];
                if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Aa.test(o + fa.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, c = c[fa.expando] ? c : new fa.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : fa.makeArray(d, [c]), m = fa.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                    if (!f && !m.noBubble && !fa.isWindow(e)) {
                        for (j = m.delegateType || o, Aa.test(j + o) || (h = h.parentNode); h; h = h.parentNode)
                            n.push(h), i = h;
                        i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a)
                    }
                    for (g = 0; (h = n[g++]) && !c.isPropagationStopped();)
                        c.type = g > 1 ? j : m.bindType || o, l = (qa.get(h, "events") || {})[c.type] && qa.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && fa.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                    return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fa.acceptData(e) || k && fa.isFunction(e[o]) && !fa.isWindow(e) && (i = e[k], i && (e[k] = null), fa.event.triggered = o, e[o](), fa.event.triggered = b, i && (e[k] = i)), c.result
                }
            },
            dispatch: function(a) {
                a = fa.event.fix(a);
                var c,
                    d,
                    e,
                    f,
                    g,
                    h = [],
                    i = aa.call(arguments),
                    j = (qa.get(this, "events") || {})[a.type] || [],
                    k = fa.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    for (h = fa.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = f.elem, d = 0; (g = f.handlers[d++]) && !a.isImmediatePropagationStopped();)
                            a.namespace_re && !a.namespace_re.test(g.namespace) || (a.handleObj = g, a.data = g.data, e = ((fa.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, c) {
                var d,
                    e,
                    f,
                    g,
                    h = [],
                    i = c.delegateCount,
                    j = a.target;
                if (i && j.nodeType && (!a.button || "click" !== a.type))
                    for (; j !== this; j = j.parentNode || this)
                        if (j.disabled !== !0 || "click" !== a.type) {
                            for (e = [], d = 0; i > d; d++)
                                g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fa(f, this).index(j) >= 0 : fa.find(f, this, null, [j]).length), e[f] && e.push(g);
                            e.length && h.push({
                                elem: j,
                                handlers: e
                            })
                        }
                return i < c.length && h.push({
                    elem: this,
                    handlers: c.slice(i)
                }), h
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d,
                        e,
                        f,
                        g = c.button;
                    return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[fa.expando])
                    return a;
                var b,
                    c,
                    d,
                    e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = za.test(e) ? this.mouseHooks : ya.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;)
                    c = d[b], a[c] = f[c];
                return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== i() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === i() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return fa.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        a.result !== b && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = fa.extend(new fa.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? fa.event.trigger(e, null, b) : fa.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, fa.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }, fa.Event = function(a, b) {
            return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void (this[fa.expando] = !0)) : new fa.Event(a, b)
        }, fa.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = g, this.stopPropagation()
            }
        }, fa.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            fa.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c,
                        d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || fa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), fa.support.focusinBubbles || fa.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                d = function(a) {
                    fa.event.simulate(b, a.target, fa.event.fix(a), !0)
                };
            fa.event.special[b] = {
                setup: function() {
                    0 === c++ && T.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --c && T.removeEventListener(a, d, !0)
                }
            }
        }), fa.fn.extend({
            on: function(a, c, d, e, f) {
                var g,
                    i;
                if ("object" == typeof a) {
                    "string" != typeof c && (d = d || c, c = b);
                    for (i in a)
                        this.on(i, c, d, a[i], f);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1)
                    e = h;
                else if (!e)
                    return this;
                return 1 === f && (g = e, e = function(a) {
                    return fa().off(a), g.apply(this, arguments)
                }, e.guid = g.guid || (g.guid = fa.guid++)), this.each(function() {
                    fa.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e,
                    f;
                if (a && a.preventDefault && a.handleObj)
                    return e = a.handleObj, fa(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if ("object" == typeof a) {
                    for (f in a)
                        this.off(f, c, a[f]);
                    return this
                }
                return c !== !1 && "function" != typeof c || (d = c, c = b), d === !1 && (d = h), this.each(function() {
                    fa.event.remove(this, a, d, c)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    fa.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? fa.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Ca = /^.[^:#\[\.,]*$/,
            Da = /^(?:parents|prev(?:Until|All))/,
            Ea = fa.expr.match.needsContext,
            Fa = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        fa.fn.extend({
            find: function(a) {
                var b,
                    c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a)
                    return this.pushStack(fa(a).filter(function() {
                        for (b = 0; e > b; b++)
                            if (fa.contains(d[b], this))
                                return !0
                    }));
                for (b = 0; e > b; b++)
                    fa.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? fa.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            has: function(a) {
                var b = fa(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (fa.contains(this, b[a]))
                            return !0
                })
            },
            not: function(a) {
                return this.pushStack(k(this, a || [], !0))
            },
            filter: function(a) {
                return this.pushStack(k(this, a || [], !1))
            },
            is: function(a) {
                return !!k(this, "string" == typeof a && Ea.test(a) ? fa(a) : a || [], !1).length
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = Ea.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                            c = f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? fa.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? ba.call(fa(a), this[0]) : ba.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                var c = "string" == typeof a ? fa(a, b) : fa.makeArray(a && a.nodeType ? [a] : a),
                    d = fa.merge(this.get(), c);
                return this.pushStack(fa.unique(d))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), fa.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return fa.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return fa.dir(a, "parentNode", c)
            },
            next: function(a) {
                return j(a, "nextSibling")
            },
            prev: function(a) {
                return j(a, "previousSibling")
            },
            nextAll: function(a) {
                return fa.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return fa.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return fa.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return fa.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return fa.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return fa.sibling(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || fa.merge([], a.childNodes)
            }
        }, function(a, b) {
            fa.fn[a] = function(c, d) {
                var e = fa.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (Fa[a] || fa.unique(e), Da.test(a) && e.reverse()), this.pushStack(e)
            }
        }), fa.extend({
            filter: function(a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function(a) {
                    return 1 === a.nodeType
                }))
            },
            dir: function(a, c, d) {
                for (var e = [], f = d !== b; (a = a[c]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (f && fa(a).is(d))
                            break;
                        e.push(a)
                    }
                return e
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling)
                    1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
        var Ga = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ha = /<([\w:]+)/,
            Ia = /<|&#?\w+;/,
            Ja = /<(?:script|style|link)/i,
            Ka = /^(?:checkbox|radio)$/i,
            La = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ma = /^$|\/(?:java|ecma)script/i,
            Na = /^true\/(.*)/,
            Oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Pa = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Pa.optgroup = Pa.option, Pa.tbody = Pa.tfoot = Pa.colgroup = Pa.caption = Pa.thead, Pa.th = Pa.td, fa.fn.extend({
            text: function(a) {
                return fa.access(this, function(a) {
                    return a === b ? fa.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = l(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = l(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? fa.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                    b || 1 !== c.nodeType || fa.cleanData(q(c)), c.parentNode && (b && fa.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++)
                    1 === a.nodeType && (fa.cleanData(q(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return fa.clone(this, a, b)
                })
            },
            html: function(a) {
                return fa.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b && 1 === c.nodeType)
                        return c.innerHTML;
                    if ("string" == typeof a && !Ja.test(a) && !Pa[(Ha.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Ga, "<$1></$2>");
                        try {
                            for (; e > d; d++)
                                c = this[d] || {}, 1 === c.nodeType && (fa.cleanData(q(c, !1)), c.innerHTML = a);
                            c = 0
                        } catch (f) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = fa.map(this, function(a) {
                        return [a.nextSibling, a.parentNode]
                    }),
                    b = 0;
                return this.domManip(arguments, function(c) {
                    var d = a[b++],
                        e = a[b++];
                    e && (d && d.parentNode !== e && (d = this.nextSibling), fa(this).remove(), e.insertBefore(c, d))
                }, !0), b ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b, c) {
                a = $.apply([], a);
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j = 0,
                    k = this.length,
                    l = this,
                    o = k - 1,
                    p = a[0],
                    r = fa.isFunction(p);
                if (r || !(1 >= k || "string" != typeof p || fa.support.checkClone) && La.test(p))
                    return this.each(function(d) {
                        var e = l.eq(d);
                        r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c)
                    });
                if (k && (d = fa.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
                    for (f = fa.map(q(d, "script"), m), g = f.length; k > j; j++)
                        h = d, j !== o && (h = fa.clone(h, !0, !0), g && fa.merge(f, q(h, "script"))), b.call(this[j], h, j);
                    if (g)
                        for (i = f[f.length - 1].ownerDocument, fa.map(f, n), j = 0; g > j; j++)
                            h = f[j], Ma.test(h.type || "") && !qa.access(h, "globalEval") && fa.contains(i, h) && (h.src ? fa._evalUrl(h.src) : fa.globalEval(h.textContent.replace(Oa, "")))
                }
                return this
            }
        }), fa.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            fa.fn[a] = function(a) {
                for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++)
                    c = g === f ? this : this.clone(!0), fa(e[g])[b](c), _.apply(d, c.get());
                return this.pushStack(d)
            }
        }), fa.extend({
            clone: function(a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = a.cloneNode(!0),
                    i = fa.contains(a.ownerDocument, a);
                if (!(fa.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))
                    for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++)
                        r(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++)
                            p(f[d], g[d]);
                    else
                        p(a, h);
                return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++)
                    if (e = a[k], e || 0 === e)
                        if ("object" === fa.type(e))
                            fa.merge(n, e.nodeType ? [e] : e);
                        else if (Ia.test(e)) {
                            for (f = f || m.appendChild(b.createElement("div")), g = (Ha.exec(e) || ["", ""])[1].toLowerCase(), h = Pa[g] || Pa._default, f.innerHTML = h[1] + e.replace(Ga, "<$1></$2>") + h[2], j = h[0]; j--;)
                                f = f.lastChild;
                            fa.merge(n, f.childNodes), f = m.firstChild, f.textContent = ""
                        } else
                            n.push(b.createTextNode(e));
                for (m.textContent = "", k = 0; e = n[k++];)
                    if ((!d || -1 === fa.inArray(e, d)) && (i = fa.contains(e.ownerDocument, e), f = q(m.appendChild(e), "script"), i && o(f), c))
                        for (j = 0; e = f[j++];)
                            Ma.test(e.type || "") && c.push(e);
                return m
            },
            cleanData: function(a) {
                for (var c, d, f, g, h, i, j = fa.event.special, k = 0; (d = a[k]) !== b; k++) {
                    if (e.accepts(d) && (h = d[qa.expando], h && (c = qa.cache[h]))) {
                        if (f = Object.keys(c.events || {}), f.length)
                            for (i = 0; (g = f[i]) !== b; i++)
                                j[g] ? fa.event.remove(d, g) : fa.removeEvent(d, g, c.handle);
                        qa.cache[h] && delete qa.cache[h]
                    }
                    delete pa.cache[d[pa.expando]]
                }
            },
            _evalUrl: function(a) {
                return fa.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), fa.fn.extend({
            wrapAll: function(a) {
                var b;
                return fa.isFunction(a) ? this.each(function(b) {
                    fa(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;)
                        a = a.firstElementChild;
                    return a
                }).append(this)), this)
            },
            wrapInner: function(a) {
                return fa.isFunction(a) ? this.each(function(b) {
                    fa(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = fa(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = fa.isFunction(a);
                return this.each(function(c) {
                    fa(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var Qa,
            Ra,
            Sa = /^(none|table(?!-c[ea]).+)/,
            Ta = /^margin/,
            Ua = new RegExp("^(" + ga + ")(.*)$", "i"),
            Va = new RegExp("^(" + ga + ")(?!px)[a-z%]+$", "i"),
            Wa = new RegExp("^([+-])=(" + ga + ")", "i"),
            Xa = {
                BODY: "block"
            },
            Ya = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Za = {
                letterSpacing: 0,
                fontWeight: 400
            },
            $a = ["Top", "Right", "Bottom", "Left"],
            _a = ["Webkit", "O", "Moz", "ms"];
        fa.fn.extend({
            css: function(a, c) {
                return fa.access(this, function(a, c, d) {
                    var e,
                        f,
                        g = {},
                        h = 0;
                    if (fa.isArray(c)) {
                        for (e = u(a), f = c.length; f > h; h++)
                            g[c[h]] = fa.css(a, c[h], !1, e);
                        return g
                    }
                    return d !== b ? fa.style(a, c, d) : fa.css(a, c)
                }, a, c, arguments.length > 1)
            },
            show: function() {
                return v(this, !0)
            },
            hide: function() {
                return v(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    t(this) ? fa(this).show() : fa(this).hide()
                })
            }
        }), fa.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Qa(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, c, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f,
                        g,
                        h,
                        i = fa.camelCase(c),
                        j = a.style;
                    return c = fa.cssProps[i] || (fa.cssProps[i] = s(j, i)), h = fa.cssHooks[c] || fa.cssHooks[i], d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, "string" === g && (f = Wa.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fa.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fa.cssNumber[i] || (d += "px"), fa.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0)
                }
            },
            css: function(a, c, d, e) {
                var f,
                    g,
                    h,
                    i = fa.camelCase(c);
                return c = fa.cssProps[i] || (fa.cssProps[i] = s(a.style, i)), h = fa.cssHooks[c] || fa.cssHooks[i], h && "get" in h && (f = h.get(a, !0, d)), f === b && (f = Qa(a, c, e)), "normal" === f && c in Za && (f = Za[c]), "" === d || d ? (g = parseFloat(f), d === !0 || fa.isNumeric(g) ? g || 0 : f) : f
            }
        }), Qa = function(a, c, d) {
            var e,
                f,
                g,
                h = d || u(a),
                i = h ? h.getPropertyValue(c) || h[c] : b,
                j = a.style;
            return h && ("" !== i || fa.contains(a.ownerDocument, a) || (i = fa.style(a, c)), Va.test(i) && Ta.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
        }, fa.each(["height", "width"], function(a, b) {
            fa.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? 0 === a.offsetWidth && Sa.test(fa.css(a, "display")) ? fa.swap(a, Ya, function() {
                        return y(a, b, d)
                    }) : y(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && u(a);
                    return w(a, c, d ? x(a, b, d, fa.support.boxSizing && "border-box" === fa.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), fa(function() {
            fa.support.reliableMarginRight || (fa.cssHooks.marginRight = {
                get: function(a, b) {
                    return b ? fa.swap(a, {
                        display: "inline-block"
                    }, Qa, [a, "marginRight"]) : void 0
                }
            }), !fa.support.pixelPosition && fa.fn.position && fa.each(["top", "left"], function(a, b) {
                fa.cssHooks[b] = {
                    get: function(a, c) {
                        return c ? (c = Qa(a, b), Va.test(c) ? fa(a).position()[b] + "px" : c) : void 0
                    }
                }
            })
        }), fa.expr && fa.expr.filters && (fa.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0
        }, fa.expr.filters.visible = function(a) {
            return !fa.expr.filters.hidden(a)
        }), fa.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            fa.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                        e[a + $a[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Ta.test(a) || (fa.cssHooks[a + b].set = w)
        });
        var ab = /%20/g,
            bb = /\[\]$/,
            cb = /\r?\n/g,
            db = /^(?:submit|button|image|reset|file)$/i,
            eb = /^(?:input|select|textarea|keygen)/i;
        fa.fn.extend({
            serialize: function() {
                return fa.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = fa.prop(this, "elements");
                    return a ? fa.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !fa(this).is(":disabled") && eb.test(this.nodeName) && !db.test(a) && (this.checked || !Ka.test(a))
                }).map(function(a, b) {
                    var c = fa(this).val();
                    return null == c ? null : fa.isArray(c) ? fa.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(cb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(cb, "\r\n")
                    }
                }).get()
            }
        }), fa.param = function(a, c) {
            var d,
                e = [],
                f = function(a, b) {
                    b = fa.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (c === b && (c = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a))
                fa.each(a, function() {
                    f(this.name, this.value)
                });
            else
                for (d in a)
                    B(d, a[d], c, f);
            return e.join("&").replace(ab, "+")
        }, fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            fa.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), fa.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var fb,
            gb,
            hb = fa.now(),
            ib = /\?/,
            jb = /#.*$/,
            kb = /([?&])_=[^&]*/,
            lb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            nb = /^(?:GET|HEAD)$/,
            ob = /^\/\//,
            pb = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            qb = fa.fn.load,
            rb = {},
            sb = {},
            tb = "*/".concat("*");
        try {
            gb = S.href
        } catch (ub) {
            gb = T.createElement("a"), gb.href = "", gb = gb.href
        }
        fb = pb.exec(gb.toLowerCase()) || [], fa.fn.load = function(a, c, d) {
            if ("string" != typeof a && qb)
                return qb.apply(this, arguments);
            var e,
                f,
                g,
                h = this,
                i = a.indexOf(" ");
            return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fa.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fa.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: c
            }).done(function(a) {
                g = arguments, h.html(e ? fa("<div>").append(fa.parseHTML(a)).find(e) : a)
            }).complete(d && function(a, b) {
                h.each(d, g || [a.responseText, b, a])
            }), this
        }, fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            fa.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), fa.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: gb,
                type: "GET",
                isLocal: mb.test(fb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": tb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": fa.parseJSON,
                    "text xml": fa.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? E(E(a, fa.ajaxSettings), b) : E(fa.ajaxSettings, a)
            },
            ajaxPrefilter: C(rb),
            ajaxTransport: C(sb),
            ajax: function(a, c) {
                function d(a, c, d, h) {
                    var j,
                        l,
                        s,
                        t,
                        v,
                        x = c;
                    2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, !a && x || (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (c = a, a = b), c = c || {};
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m = fa.ajaxSetup({}, c),
                    n = m.context || m,
                    o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
                    p = fa.Deferred(),
                    q = fa.Callbacks("once memory"),
                    r = m.statusCode || {},
                    s = {},
                    t = {},
                    u = 0,
                    v = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === u) {
                                if (!h)
                                    for (h = {}; b = lb.exec(g);)
                                        h[b[1].toLowerCase()] = b[2];
                                b = h[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === u ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return u || (a = t[c] = t[c] || a, s[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return u || (m.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > u)
                                    for (b in a)
                                        r[b] = [r[b], a[b]];
                                else
                                    w.always(a[w.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || v;
                            return e && e.abort(b), d(0, b), this
                        }
                    };
                if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gb) + "").replace(jb, "").replace(ob, fb[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(ha) || [""], null == m.crossDomain && (j = pb.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fb[1] && j[2] === fb[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fb[3] || ("http:" === fb[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), D(rb, m, c, w), 2 === u)
                    return w;
                k = m.global, k && 0 === fa.active++ && fa.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !nb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (ib.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = kb.test(f) ? f.replace(kb, "$1_=" + hb++) : f + (ib.test(f) ? "&" : "?") + "_=" + hb++)), m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);
                for (l in m.headers)
                    w.setRequestHeader(l, m.headers[l]);
                if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u))
                    return w.abort();
                v = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    w[l](m[l]);
                if (e = D(sb, m, c, w)) {
                    w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                        w.abort("timeout")
                    }, m.timeout));
                    try {
                        u = 1, e.send(s, d)
                    } catch (x) {
                        if (!(2 > u))
                            throw x;
                        d(-1, x)
                    }
                } else
                    d(-1, "No Transport");
                return w
            },
            getJSON: function(a, b, c) {
                return fa.get(a, b, c, "json")
            },
            getScript: function(a, c) {
                return fa.get(a, b, c, "script")
            }
        }), fa.each(["get", "post"], function(a, c) {
            fa[c] = function(a, d, e, f) {
                return fa.isFunction(d) && (f = f || e, e = d, d = b), fa.ajax({
                    url: a,
                    type: c,
                    dataType: f,
                    data: d,
                    success: e
                })
            }
        }), fa.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return fa.globalEval(a), a
                }
            }
        }), fa.ajaxPrefilter("script", function(a) {
            a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), fa.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b,
                    c;
                return {
                    send: function(d, e) {
                        b = fa("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), T.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var vb = [],
            wb = /(=)\?(?=&|$)|\?\?/;
        fa.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = vb.pop() || fa.expando + "_" + hb++;
                return this[a] = !0, a
            }
        }), fa.ajaxPrefilter("json jsonp", function(c, d, e) {
            var f,
                g,
                h,
                i = c.jsonp !== !1 && (wb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wb.test(c.data) && "data");
            return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fa.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(wb, "$1" + f) : c.jsonp !== !1 && (c.url += (ib.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
                return h || fa.error(f + " was not called"), h[0]
            }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
                h = arguments
            }, e.always(function() {
                a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, vb.push(f)), h && fa.isFunction(g) && g(h[0]), h = g = b
            }), "script") : void 0
        }), fa.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (a) {}
        };
        var xb = fa.ajaxSettings.xhr(),
            yb = {
                0: 200,
                1223: 204
            },
            zb = 0,
            Ab = {};
        a.ActiveXObject && fa(a).on("unload", function() {
            for (var a in Ab)
                Ab[a]();
            Ab = b
        }), fa.support.cors = !!xb && "withCredentials" in xb, fa.support.ajax = xb = !!xb, fa.ajaxTransport(function(a) {
            var c;
            return fa.support.cors || xb && !a.crossDomain ? {
                send: function(d, e) {
                    var f,
                        g,
                        h = a.xhr();
                    if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (f in a.xhrFields)
                            h[f] = a.xhrFields[f];
                    a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d)
                        h.setRequestHeader(f, d[f]);
                    c = function(a) {
                        return function() {
                            c && (delete Ab[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yb[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {
                                text: h.responseText
                            } : b, h.getAllResponseHeaders()))
                        }
                    }, h.onload = c(), h.onerror = c("error"), c = Ab[g = zb++] = c("abort"), h.send(a.hasContent && a.data || null)
                },
                abort: function() {
                    c && c()
                }
            } : void 0
        });
        var Bb,
            Cb,
            Db = /^(?:toggle|show|hide)$/,
            Eb = new RegExp("^(?:([+-])=|)(" + ga + ")([a-z%]*)$", "i"),
            Fb = /queueHooks$/,
            Gb = [L],
            Hb = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = Eb.exec(b),
                        f = e && e[3] || (fa.cssNumber[a] ? "" : "px"),
                        g = (fa.cssNumber[a] || "px" !== f && +d) && Eb.exec(fa.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, fa.style(c.elem, a, g + f);
                        while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        fa.Animation = fa.extend(J, {
            tweener: function(a, b) {
                fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++)
                    c = a[d], Hb[c] = Hb[c] || [], Hb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? Gb.unshift(a) : Gb.push(a)
            }
        }), fa.Tween = M, M.prototype = {
            constructor: M,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = M.propHooks[this.prop];
                return a && a.get ? a.get(this) : M.propHooks._default.get(this)
            },
            run: function(a) {
                var b,
                    c = M.propHooks[this.prop];
                return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fa.cssProps[a.prop]] || fa.cssHooks[a.prop]) ? fa.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, fa.each(["toggle", "show", "hide"], function(a, b) {
            var c = fa.fn[b];
            fa.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
            }
        }), fa.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(t).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = fa.isEmptyObject(a),
                    f = fa.speed(b, c, d),
                    g = function() {
                        var b = J(this, fa.extend({}, a), f);
                        (e || qa.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, c, d) {
                var e = function(a) {
                    var b = a.stop;
                    delete a.stop, b(d)
                };
                return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        c = null != a && a + "queueHooks",
                        f = fa.timers,
                        g = qa.get(this);
                    if (c)
                        g[c] && g[c].stop && e(g[c]);
                    else
                        for (c in g)
                            g[c] && g[c].stop && Fb.test(c) && e(g[c]);
                    for (c = f.length; c--;)
                        f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                    !b && d || fa.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b,
                        c = qa.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = fa.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++)
                        d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), fa.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            fa.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), fa.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? fa.extend({}, a) : {
                complete: c || !c && b || fa.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !fa.isFunction(b) && b
            };
            return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
            }, d
        }, fa.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, fa.timers = [], fa.fx = M.prototype.init, fa.fx.tick = function() {
            var a,
                c = fa.timers,
                d = 0;
            for (Bb = fa.now(); d < c.length; d++)
                a = c[d], a() || c[d] !== a || c.splice(d--, 1);
            c.length || fa.fx.stop(), Bb = b
        }, fa.fx.timer = function(a) {
            a() && fa.timers.push(a) && fa.fx.start()
        }, fa.fx.interval = 13, fa.fx.start = function() {
            Cb || (Cb = setInterval(fa.fx.tick, fa.fx.interval))
        }, fa.fx.stop = function() {
            clearInterval(Cb), Cb = null
        }, fa.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fa.fx.step = {}, fa.expr && fa.expr.filters && (fa.expr.filters.animated = function(a) {
            return fa.grep(fa.timers, function(b) {
                return a === b.elem
            }).length
        }), fa.fn.offset = function(a) {
            if (arguments.length)
                return a === b ? this : this.each(function(b) {
                    fa.offset.setOffset(this, a, b)
                });
            var c,
                d,
                e = this[0],
                f = {
                    top: 0,
                    left: 0
                },
                g = e && e.ownerDocument;
            if (g)
                return c = g.documentElement, fa.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), d = O(g), {
                    top: f.top + d.pageYOffset - c.clientTop,
                    left: f.left + d.pageXOffset - c.clientLeft
                }) : f
        }, fa.offset = {
            setOffset: function(a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = fa.css(a, "position"),
                    l = fa(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, fa.fn.extend({
            position: function() {
                if (this[0]) {
                    var a,
                        b,
                        c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0), d.left += fa.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - fa.css(c, "marginTop", !0),
                        left: b.left - d.left - fa.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || U; a && !fa.nodeName(a, "html") && "static" === fa.css(a, "position");)
                        a = a.offsetParent;
                    return a || U
                })
            }
        }), fa.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(c, d) {
            var e = "pageYOffset" === d;
            fa.fn[c] = function(f) {
                return fa.access(this, function(c, f, g) {
                    var h = O(c);
                    return g === b ? h ? h[d] : c[f] : void (h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g)
                }, c, f, arguments.length, null)
            }
        }), fa.each({
            Height: "height",
            Width: "width"
        }, function(a, c) {
            fa.each({
                padding: "inner" + a,
                content: c,
                "": "outer" + a
            }, function(d, e) {
                fa.fn[e] = function(e, f) {
                    var g = arguments.length && (d || "boolean" != typeof e),
                        h = d || (e === !0 || f === !0 ? "margin" : "border");
                    return fa.access(this, function(c, d, e) {
                        var f;
                        return fa.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fa.css(c, d, h) : fa.style(c, d, e, h)
                    }, c, g ? e : b, g, null)
                }
            })
        }), fa.fn.size = function() {
            return this.length
        }, fa.fn.andSelf = fa.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fa : "function" == typeof define && define.amd && define("jquery", [], function() {
            return fa
        }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fa)
    }(a), function(a) {
        function b(a, b, c) {
            for (var d = (c || 0) - 1, e = a.length; ++d < e;)
                if (a[d] === b)
                    return d;
            return -1
        }
        function c(a, c) {
            var d = typeof c;
            if (a = a.cache, "boolean" == d || null == c)
                return a[c];
            "number" != d && "string" != d && (d = "object");
            var e = "number" == d ? c : v + c;
            return a = a[d] || (a[d] = {}), "object" == d ? a[e] && b(a[e], c) > -1 ? 0 : -1 : a[e] ? 0 : -1
        }
        function d(a) {
            var b = this.cache,
                c = typeof a;
            if ("boolean" == c || null == a)
                b[a] = !0;
            else {
                "number" != c && "string" != c && (c = "object");
                var d = "number" == c ? a : v + a,
                    e = b[c] || (b[c] = {});
                "object" == c ? (e[d] || (e[d] = [])).push(a) == this.array.length && (b[c] = !1) : e[d] = !0
            }
        }
        function e(a) {
            return a.charCodeAt(0)
        }
        function f(a, b) {
            var c = a.index,
                d = b.index;
            if (a = a.criteria, b = b.criteria, a !== b) {
                if (a > b || "undefined" == typeof a)
                    return 1;
                if (b > a || "undefined" == typeof b)
                    return -1
            }
            return d > c ? -1 : 1
        }
        function g(a) {
            var b = -1,
                c = a.length,
                e = j();
            e["false"] = e["null"] = e["true"] = e.undefined = !1;
            var f = j();
            for (f.array = a, f.cache = e, f.push = d; ++b < c;)
                f.push(a[b]);
            return e.object === !1 ? (n(f), null) : f
        }
        function h(a) {
            return "\\" + $[a]
        }
        function i() {
            return r.pop() || []
        }
        function j() {
            return s.pop() || {
                    args: "",
                    array: null,
                    bottom: "",
                    cache: null,
                    criteria: null,
                    "false": !1,
                    firstArg: "",
                    index: 0,
                    init: "",
                    leading: !1,
                    loop: "",
                    maxWait: 0,
                    "null": !1,
                    number: null,
                    object: null,
                    push: null,
                    shadowedProps: null,
                    string: null,
                    support: null,
                    top: "",
                    trailing: !1,
                    "true": !1,
                    undefined: !1,
                    useHas: !1,
                    useKeys: !1,
                    value: null
                }
        }
        function k(a) {
            return "function" != typeof a.toString && "string" == typeof (a + "")
        }
        function l() {}
        function m(a) {
            a.length = 0, r.length < x && r.push(a)
        }
        function n(a) {
            var b = a.cache;
            b && n(b), a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null, s.length < x && s.push(a)
        }
        function o(a, b, c) {
            b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
            for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e;)
                f[d] = a[b + d];
            return f
        }
        function p(d) {
            function r(a) {
                return a && "object" == typeof a && !Oc(a) && oc.call(a, "__wrapped__") ? a : new s(a)
            }
            function s(a) {
                this.__wrapped__ = a
            }
            function x(a, b, c, d) {
                function e() {
                    var d = arguments,
                        j = g ? this : b;
                    if (f || (a = b[h]), c.length && (d = d.length ? (d = Ec.call(d), i ? d.concat(c) : c.concat(d)) : c), this instanceof e) {
                        j = _(a.prototype);
                        var k = a.apply(j, d);
                        return va(k) ? k : j
                    }
                    return a.apply(j, d)
                }
                var f = ua(a),
                    g = !c,
                    h = b;
                if (g) {
                    var i = d;
                    c = b
                } else if (!f) {
                    if (!d)
                        throw new bc;
                    b = a
                }
                return e
            }
            function $() {
                var a = j();
                a.shadowedProps = M, a.support = Jc, a.array = a.bottom = a.loop = a.top = "", a.init = "iterable", a.useHas = !0, a.useKeys = !!Qc;
                for (var b, c = 0; b = arguments[c]; c++)
                    for (var d in b)
                        a[d] = b[d];
                var e = a.args;
                a.firstArg = /^[^,]+/.exec(e)[0];
                var f = Xb("errorClass, errorProto, hasOwnProperty, isArguments, isArray, isString, keys, lodash, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + e + ") {\n" + Kc(a) + "\n}");
                return n(a), f(S, dc, oc, ha, Oc, Aa, Qc, r, ec, Z, Ic, X, fc, tc)
            }
            function _(a) {
                return va(a) ? vc(a) : {}
            }
            function ba(a) {
                return Sc[a]
            }
            function da(a, c, d) {
                var e = (e = r.indexOf) === eb ? b : e;
                return e
            }
            function ea(a) {
                return function(b, c, d, e) {
                    return "boolean" != typeof c && null != c && (e = d, d = e && e[c] === b ? q : c, c = !1), null != d && (d = r.createCallback(d, e)), a(b, c, d, e)
                }
            }
            function fa(a) {
                var b,
                    c;
                return !a || tc.call(a) != V || (b = a.constructor, ua(b) && !(b instanceof b)) || !Jc.argsClass && ha(a) || !Jc.nodeClass && k(a) ? !1 : Jc.ownLast ? (Wc(a, function(a, b, d) {
                    return c = oc.call(d, b), !1
                }), c !== !1) : (Wc(a, function(a, b) {
                    c = b
                }), c === q || oc.call(a, c))
            }
            function ga(a) {
                return Tc[a]
            }
            function ha(a) {
                return tc.call(a) == O
            }
            function ia(a, b, c, d, e, f) {
                var g = a;
                if ("boolean" != typeof b && null != b && (d = c, c = b, b = !1), "function" == typeof c) {
                    if (c = "undefined" == typeof d ? c : r.createCallback(c, d, 1), g = c(g), "undefined" != typeof g)
                        return g;
                    g = a
                }
                var h = va(g);
                if (h) {
                    var j = tc.call(g);
                    if (!Y[j] || !Jc.nodeClass && k(g))
                        return g;
                    var l = Oc(g)
                }
                if (!h || !b)
                    return h ? l ? o(g) : Uc({}, g) : g;
                var n = Hc[j];
                switch (j) {
                case Q:
                case R:
                    return new n(+g);
                case U:
                case X:
                    return new n(g);
                case W:
                    return n(g.source, D.exec(g))
                }
                var p = !e;
                e || (e = i()), f || (f = i());
                for (var s = e.length; s--;)
                    if (e[s] == a)
                        return f[s];
                return g = l ? n(g.length) : {}, l && (oc.call(a, "index") && (g.index = a.index), oc.call(a, "input") && (g.input = a.input)), e.push(a), f.push(g), (l ? Rc : Xc)(a, function(a, d) {
                    g[d] = ia(a, b, c, q, e, f)
                }), p && (m(e), m(f)), g
            }
            function ja(a, b, c) {
                return ia(a, !0, b, c)
            }
            function ka(a, b, c) {
                var d;
                return b = r.createCallback(b, c), Xc(a, function(a, c, e) {
                    return b(a, c, e) ? (d = c, !1) : void 0
                }), d
            }
            function la(a) {
                var b = [];
                return Wc(a, function(a, c) {
                    ua(a) && b.push(c)
                }), b.sort()
            }
            function ma(a, b) {
                return a ? oc.call(a, b) : !1
            }
            function na(a) {
                for (var b = -1, c = Qc(a), d = c.length, e = {}; ++b < d;) {
                    var f = c[b];
                    e[a[f]] = f
                }
                return e
            }
            function oa(a) {
                return a === !0 || a === !1 || tc.call(a) == Q
            }
            function pa(a) {
                return a ? "object" == typeof a && tc.call(a) == R : !1
            }
            function qa(a) {
                return a ? 1 === a.nodeType : !1
            }
            function ra(a) {
                var b = !0;
                if (!a)
                    return b;
                var c = tc.call(a),
                    d = a.length;
                return c == P || c == X || (Jc.argsClass ? c == O : ha(a)) || c == V && "number" == typeof d && ua(a.splice) ? !d : (Xc(a, function() {
                    return b = !1
                }), b)
            }
            function sa(a, b, c, d, e, f) {
                var g = c === u;
                if ("function" == typeof c && !g) {
                    c = r.createCallback(c, d, 2);
                    var h = c(a, b);
                    if ("undefined" != typeof h)
                        return !!h
                }
                if (a === b)
                    return 0 !== a || 1 / a == 1 / b;
                var j = typeof a,
                    l = typeof b;
                if (a === a && (!a || "function" != j && "object" != j) && (!b || "function" != l && "object" != l))
                    return !1;
                if (null == a || null == b)
                    return a === b;
                var n = tc.call(a),
                    o = tc.call(b);
                if (n == O && (n = V), o == O && (o = V), n != o)
                    return !1;
                switch (n) {
                case Q:
                case R:
                    return +a == +b;
                case U:
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case W:
                case X:
                    return a == ac(b)
                }
                var p = n == P;
                if (!p) {
                    if (oc.call(a, "__wrapped__ ") || oc.call(b, "__wrapped__"))
                        return sa(a.__wrapped__ || a, b.__wrapped__ || b, c, d, e, f);
                    if (n != V || !Jc.nodeClass && (k(a) || k(b)))
                        return !1;
                    var q = !Jc.argsObject && ha(a) ? $b : a.constructor,
                        s = !Jc.argsObject && ha(b) ? $b : b.constructor;
                    if (q != s && !(ua(q) && q instanceof q && ua(s) && s instanceof s))
                        return !1
                }
                var t = !e;
                e || (e = i()), f || (f = i());
                for (var v = e.length; v--;)
                    if (e[v] == a)
                        return f[v] == b;
                var w = 0;
                if (h = !0, e.push(a), f.push(b), p) {
                    if (v = a.length, w = b.length, h = w == a.length, !h && !g)
                        return h;
                    for (; w--;) {
                        var x = v,
                            y = b[w];
                        if (g)
                            for (; x-- && !(h = sa(a[x], y, c, d, e, f));)
                                ;
                        else if (!(h = sa(a[w], y, c, d, e, f)))
                            break
                    }
                    return h
                }
                return Wc(b, function(b, g, i) {
                    return oc.call(i, g) ? (w++, h = oc.call(a, g) && sa(a[g], b, c, d, e, f)) : void 0
                }), h && !g && Wc(a, function(a, b, c) {
                    return oc.call(c, b) ? h = --w > -1 : void 0
                }), t && (m(e), m(f)), h
            }
            function ta(a) {
                return xc(a) && !yc(parseFloat(a))
            }
            function ua(a) {
                return "function" == typeof a
            }
            function va(a) {
                return !(!a || !Z[typeof a])
            }
            function wa(a) {
                return ya(a) && a != +a
            }
            function xa(a) {
                return null === a
            }
            function ya(a) {
                return "number" == typeof a || tc.call(a) == U
            }
            function za(a) {
                return !(!a || !Z[typeof a]) && tc.call(a) == W
            }
            function Aa(a) {
                return "string" == typeof a || tc.call(a) == X
            }
            function Ba(a) {
                return "undefined" == typeof a
            }
            function Ca(a, b, c) {
                var d = arguments,
                    e = 0,
                    f = 2;
                if (!va(a))
                    return a;
                if (c === u)
                    var g = d[3],
                        h = d[4],
                        j = d[5];
                else {
                    var k = !0;
                    h = i(), j = i(), "number" != typeof c && (f = d.length), f > 3 && "function" == typeof d[f - 2] ? g = r.createCallback(d[--f - 1], d[f--], 2) : f > 2 && "function" == typeof d[f - 1] && (g = d[--f])
                }
                for (; ++e < f;)
                    (Oc(d[e]) ? Oa : Xc)(d[e], function(b, c) {
                        var d,
                            e,
                            f = b,
                            i = a[c];
                        if (b && ((e = Oc(b)) || Yc(b))) {
                            for (var k = h.length; k--;)
                                if (d = h[k] == b) {
                                    i = j[k];
                                    break
                                }
                            if (!d) {
                                var l;
                                g && (f = g(i, b), (l = "undefined" != typeof f) && (i = f)), l || (i = e ? Oc(i) ? i : [] : Yc(i) ? i : {}), h.push(b), j.push(i), l || (i = Ca(i, b, u, g, h, j))
                            }
                        } else
                            g && (f = g(i, b), "undefined" == typeof f && (f = b)), "undefined" != typeof f && (i = f);
                        a[c] = i
                    });
                return k && (m(h), m(j)), a
            }
            function Da(a, b, c) {
                var d = da(),
                    e = "function" == typeof b,
                    f = {};
                if (e)
                    b = r.createCallback(b, c);
                else
                    var g = kc.apply(cc, Ec.call(arguments, 1));
                return Wc(a, function(a, c, h) {
                    (e ? !b(a, c, h) : d(g, c) < 0) && (f[c] = a)
                }), f
            }
            function Ea(a) {
                for (var b = -1, c = Qc(a), d = c.length, e = Tb(d); ++b < d;) {
                    var f = c[b];
                    e[b] = [f, a[f]]
                }
                return e
            }
            function Fa(a, b, c) {
                var d = {};
                if ("function" != typeof b)
                    for (var e = -1, f = kc.apply(cc, Ec.call(arguments, 1)), g = va(a) ? f.length : 0; ++e < g;) {
                        var h = f[e];
                        h in a && (d[h] = a[h])
                    }
                else
                    b = r.createCallback(b, c), Wc(a, function(a, c, e) {
                        b(a, c, e) && (d[c] = a)
                    });
                return d
            }
            function Ga(a, b, c, d) {
                var e = Oc(a);
                if (b = r.createCallback(b, d, 4), null == c)
                    if (e)
                        c = [];
                    else {
                        var f = a && a.constructor,
                            g = f && f.prototype;
                        c = _(g)
                    }
                return (e ? Rc : Xc)(a, function(a, d, e) {
                    return b(c, a, d, e)
                }), c
            }
            function Ha(a) {
                for (var b = -1, c = Qc(a), d = c.length, e = Tb(d); ++b < d;)
                    e[b] = a[c[b]];
                return e
            }
            function Ia(a) {
                var b = -1,
                    c = kc.apply(cc, Ec.call(arguments, 1)),
                    d = c.length,
                    e = Tb(d);
                for (Jc.unindexedChars && Aa(a) && (a = a.split("")); ++b < d;)
                    e[b] = a[c[b]];
                return e
            }
            function Ja(a, b, c) {
                var d = -1,
                    e = da(),
                    f = a ? a.length : 0,
                    g = !1;
                return c = (0 > c ? Ac(0, f + c) : c) || 0, f && "number" == typeof f ? g = (Aa(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : Rc(a, function(a) {
                    return ++d >= c ? !(g = a === b) : void 0
                }), g
            }
            function Ka(a, b, c) {
                var d = {};
                return b = r.createCallback(b, c), Oa(a, function(a, c, e) {
                    c = ac(b(a, c, e)), oc.call(d, c) ? d[c]++ : d[c] = 1
                }), d
            }
            function La(a, b, c) {
                var d = !0;
                if (b = r.createCallback(b, c), Oc(a))
                    for (var e = -1, f = a.length; ++e < f && (d = !!b(a[e], e, a));)
                        ;
                else
                    Rc(a, function(a, c, e) {
                        return d = !!b(a, c, e)
                    });
                return d
            }
            function Ma(a, b, c) {
                var d = [];
                if (b = r.createCallback(b, c), Oc(a))
                    for (var e = -1, f = a.length; ++e < f;) {
                        var g = a[e];
                        b(g, e, a) && d.push(g)
                    }
                else
                    Rc(a, function(a, c, e) {
                        b(a, c, e) && d.push(a)
                    });
                return d
            }
            function Na(a, b, c) {
                if (b = r.createCallback(b, c), !Oc(a)) {
                    var d;
                    return Rc(a, function(a, c, e) {
                        return b(a, c, e) ? (d = a, !1) : void 0
                    }), d
                }
                for (var e = -1, f = a.length; ++e < f;) {
                    var g = a[e];
                    if (b(g, e, a))
                        return g
                }
            }
            function Oa(a, b, c) {
                if (b && "undefined" == typeof c && Oc(a))
                    for (var d = -1, e = a.length; ++d < e && b(a[d], d, a) !== !1;)
                        ;
                else
                    Rc(a, b, c);
                return a
            }
            function Pa(a, b, c) {
                var d = {};
                return b = r.createCallback(b, c), Oa(a, function(a, c, e) {
                    c = ac(b(a, c, e)), (oc.call(d, c) ? d[c] : d[c] = []).push(a)
                }), d
            }
            function Qa(a, b) {
                var c = Ec.call(arguments, 2),
                    d = -1,
                    e = "function" == typeof b,
                    f = a ? a.length : 0,
                    g = Tb("number" == typeof f ? f : 0);
                return Oa(a, function(a) {
                    g[++d] = (e ? b : a[b]).apply(a, c)
                }), g
            }
            function Ra(a, b, c) {
                var d = -1,
                    e = a ? a.length : 0,
                    f = Tb("number" == typeof e ? e : 0);
                if (b = r.createCallback(b, c), Oc(a))
                    for (; ++d < e;)
                        f[d] = b(a[d], d, a);
                else
                    Rc(a, function(a, c, e) {
                        f[++d] = b(a, c, e)
                    });
                return f
            }
            function Sa(a, b, c) {
                var d = -(1 / 0),
                    f = d;
                if (!b && Oc(a))
                    for (var g = -1, h = a.length; ++g < h;) {
                        var i = a[g];
                        i > f && (f = i)
                    }
                else
                    b = !b && Aa(a) ? e : r.createCallback(b, c), Rc(a, function(a, c, e) {
                        var g = b(a, c, e);
                        g > d && (d = g, f = a)
                    });
                return f
            }
            function Ta(a, b, c) {
                var d = 1 / 0,
                    f = d;
                if (!b && Oc(a))
                    for (var g = -1, h = a.length; ++g < h;) {
                        var i = a[g];
                        f > i && (f = i)
                    }
                else
                    b = !b && Aa(a) ? e : r.createCallback(b, c), Rc(a, function(a, c, e) {
                        var g = b(a, c, e);
                        d > g && (d = g, f = a)
                    });
                return f
            }
            function Ua(a, b, c, d) {
                var e = arguments.length < 3;
                if (b = r.createCallback(b, d, 4), Oc(a)) {
                    var f = -1,
                        g = a.length;
                    for (e && (c = a[++f]); ++f < g;)
                        c = b(c, a[f], f, a)
                } else
                    Rc(a, function(a, d, f) {
                        c = e ? (e = !1, a) : b(c, a, d, f)
                    });
                return c
            }
            function Va(a, b, c, d) {
                var e = a,
                    f = a ? a.length : 0,
                    g = arguments.length < 3;
                if ("number" != typeof f) {
                    var h = Qc(a);
                    f = h.length
                } else
                    Jc.unindexedChars && Aa(a) && (e = a.split(""));
                return b = r.createCallback(b, d, 4), Oa(a, function(a, d, i) {
                    d = h ? h[--f] : --f, c = g ? (g = !1, e[d]) : b(c, e[d], d, i)
                }), c
            }
            function Wa(a, b, c) {
                return b = r.createCallback(b, c), Ma(a, function(a, c, d) {
                    return !b(a, c, d)
                })
            }
            function Xa(a) {
                var b = -1,
                    c = a ? a.length : 0,
                    d = Tb("number" == typeof c ? c : 0);
                return Oa(a, function(a) {
                    var c = lc(Dc() * (++b + 1));
                    d[b] = d[c], d[c] = a
                }), d
            }
            function Ya(a) {
                var b = a ? a.length : 0;
                return "number" == typeof b ? b : Qc(a).length
            }
            function Za(a, b, c) {
                var d;
                if (b = r.createCallback(b, c), Oc(a))
                    for (var e = -1, f = a.length; ++e < f && !(d = b(a[e], e, a));)
                        ;
                else
                    Rc(a, function(a, c, e) {
                        return !(d = b(a, c, e))
                    });
                return !!d
            }
            function $a(a, b, c) {
                var d = -1,
                    e = a ? a.length : 0,
                    g = Tb("number" == typeof e ? e : 0);
                for (b = r.createCallback(b, c), Oa(a, function(a, c, e) {
                    var f = g[++d] = j();
                    f.criteria = b(a, c, e), f.index = d, f.value = a
                }), e = g.length, g.sort(f); e--;) {
                    var h = g[e];
                    g[e] = h.value, n(h)
                }
                return g
            }
            function _a(a) {
                return a && "number" == typeof a.length ? Jc.unindexedChars && Aa(a) ? a.split("") : o(a) : Ha(a)
            }
            function ab(a) {
                for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                    var e = a[b];
                    e && d.push(e)
                }
                return d
            }
            function bb(a) {
                var d = -1,
                    e = da(),
                    f = a ? a.length : 0,
                    h = kc.apply(cc, Ec.call(arguments, 1)),
                    i = [],
                    j = f >= w && e === b;
                if (j) {
                    var k = g(h);
                    k ? (e = c, h = k) : j = !1
                }
                for (; ++d < f;) {
                    var l = a[d];
                    e(h, l) < 0 && i.push(l)
                }
                return j && n(h), i
            }
            function cb(a, b, c) {
                var d = -1,
                    e = a ? a.length : 0;
                for (b = r.createCallback(b, c); ++d < e;)
                    if (b(a[d], d, a))
                        return d;
                return -1
            }
            function db(a, b, c) {
                if (a) {
                    var d = 0,
                        e = a.length;
                    if ("number" != typeof b && null != b) {
                        var f = -1;
                        for (b = r.createCallback(b, c); ++f < e && b(a[f], f, a);)
                            d++
                    } else if (d = b, null == d || c)
                        return a[0];
                    return o(a, 0, Bc(Ac(0, d), e))
                }
            }
            function eb(a, c, d) {
                if ("number" == typeof d) {
                    var e = a ? a.length : 0;
                    d = 0 > d ? Ac(0, e + d) : d || 0
                } else if (d) {
                    var f = lb(a, c);
                    return a[f] === c ? f : -1
                }
                return a ? b(a, c, d) : -1
            }
            function fb(a, b, c) {
                if (!a)
                    return [];
                var d = 0,
                    e = a.length;
                if ("number" != typeof b && null != b) {
                    var f = e;
                    for (b = r.createCallback(b, c); f-- && b(a[f], f, a);)
                        d++
                } else
                    d = null == b || c ? 1 : b || d;
                return o(a, 0, Bc(Ac(0, e - d), e))
            }
            function gb(a) {
                for (var d = arguments, e = d.length, f = -1, h = i(), j = -1, k = da(), l = a ? a.length : 0, o = [], p = i(); ++f < e;) {
                    var q = d[f];
                    h[f] = k === b && (q ? q.length : 0) >= w && g(f ? d[f] : p)
                }
                a:
                for (; ++j < l;) {
                    var r = h[0];
                    if (q = a[j], (r ? c(r, q) : k(p, q)) < 0) {
                        for (f = e, (r || p).push(q); --f;)
                            if (r = h[f], (r ? c(r, q) : k(d[f], q)) < 0)
                                continue a;
                        o.push(q)
                    }
                }
                for (; e--;)
                    r = h[e], r && n(r);
                return m(h), m(p), o
            }
            function hb(a, b, c) {
                if (a) {
                    var d = 0,
                        e = a.length;
                    if ("number" != typeof b && null != b) {
                        var f = e;
                        for (b = r.createCallback(b, c); f-- && b(a[f], f, a);)
                            d++
                    } else if (d = b, null == d || c)
                        return a[e - 1];
                    return o(a, Ac(0, e - d))
                }
            }
            function ib(a, b, c) {
                var d = a ? a.length : 0;
                for ("number" == typeof c && (d = (0 > c ? Ac(0, d + c) : Bc(c, d - 1)) + 1); d--;)
                    if (a[d] === b)
                        return d;
                return -1
            }
            function jb(a, b, c) {
                a = +a || 0, c = +c || 1, null == b && (b = a, a = 0);
                for (var d = -1, e = Ac(0, ic((b - a) / c)), f = Tb(e); ++d < e;)
                    f[d] = a, a += c;
                return f
            }
            function kb(a, b, c) {
                if ("number" != typeof b && null != b) {
                    var d = 0,
                        e = -1,
                        f = a ? a.length : 0;
                    for (b = r.createCallback(b, c); ++e < f && b(a[e], e, a);)
                        d++
                } else
                    d = null == b || c ? 1 : Ac(0, b);
                return o(a, d)
            }
            function lb(a, b, c, d) {
                var e = 0,
                    f = a ? a.length : e;
                for (c = c ? r.createCallback(c, d, 1) : Hb, b = c(b); f > e;) {
                    var g = e + f >>> 1;
                    c(a[g]) < b ? e = g + 1 : f = g
                }
                return e
            }
            function mb(a) {
                return Oc(a) || (arguments[0] = a ? Ec.call(a) : cc), ad(kc.apply(cc, arguments))
            }
            function nb(a) {
                for (var b = -1, c = a ? Sa(Zc(a, "length")) : 0, d = Tb(0 > c ? 0 : c); ++b < c;)
                    d[b] = Zc(a, b);
                return d
            }
            function ob(a) {
                return bb(a, Ec.call(arguments, 1))
            }
            function pb(a) {
                return a ? nb(arguments) : []
            }
            function qb(a, b) {
                for (var c = -1, d = a ? a.length : 0, e = {}; ++c < d;) {
                    var f = a[c];
                    b ? e[f] = b[c] : e[f[0]] = f[1]
                }
                return e
            }
            function rb(a, b) {
                return 1 > a ? b() : function() {
                    return --a < 1 ? b.apply(this, arguments) : void 0
                }
            }
            function sb(a, b) {
                return Jc.fastBind || uc && arguments.length > 2 ? uc.call.apply(uc, arguments) : x(a, b, Ec.call(arguments, 2))
            }
            function tb(a) {
                for (var b = arguments.length > 1 ? kc.apply(cc, Ec.call(arguments, 1)) : la(a), c = -1, d = b.length; ++c < d;) {
                    var e = b[c];
                    a[e] = sb(a[e], a)
                }
                return a
            }
            function ub(a, b) {
                return x(a, b, Ec.call(arguments, 2), u)
            }
            function vb() {
                var a = arguments;
                return function() {
                    for (var b = arguments, c = a.length; c--;)
                        b = [a[c].apply(this, b)];
                    return b[0]
                }
            }
            function wb(a, b, c) {
                if (null == a)
                    return Hb;
                var d = typeof a;
                if ("function" != d) {
                    if ("object" != d)
                        return function(b) {
                            return b[a]
                        };
                    var e = Qc(a);
                    return function(b) {
                        for (var c = e.length, d = !1; c-- && (d = sa(b[e[c]], a[e[c]], u));)
                            ;
                        return d
                    }
                }
                return "undefined" == typeof b || F && !F.test(mc.call(a)) ? a : 1 === c ? function(c) {
                    return a.call(b, c)
                } : 2 === c ? function(c, d) {
                    return a.call(b, c, d)
                } : 4 === c ? function(c, d, e, f) {
                    return a.call(b, c, d, e, f)
                } : function(c, d, e) {
                    return a.call(b, c, d, e)
                }
            }
            function xb(a, b, c) {
                function d() {
                    jc(m), jc(n), j = 0, m = n = null
                }
                function e() {
                    var b = o && (!p || j > 1);
                    d(), b && (l !== !1 && (k = new Vb), h = a.apply(i, g))
                }
                function f() {
                    d(), (o || l !== b) && (k = new Vb, h = a.apply(i, g))
                }
                var g,
                    h,
                    i,
                    j = 0,
                    k = 0,
                    l = !1,
                    m = null,
                    n = null,
                    o = !0;
                if (b = Ac(0, b || 0), c === !0) {
                    var p = !0;
                    o = !1
                } else
                    va(c) && (p = c.leading, l = "maxWait" in c && Ac(b, c.maxWait || 0), o = "trailing" in c ? c.trailing : o);
                return function() {
                    if (g = arguments, i = this, j++, jc(n), l === !1)
                        p && 2 > j && (h = a.apply(i, g));
                    else {
                        var c = new Vb;
                        m || p || (k = c);
                        var d = l - (c - k);
                        0 >= d ? (jc(m), m = null, k = c, h = a.apply(i, g)) : m || (m = sc(f, d))
                    }
                    return b !== l && (n = sc(e, b)), h
                }
            }
            function yb(a) {
                var b = Ec.call(arguments, 1);
                return sc(function() {
                    a.apply(q, b)
                }, 1)
            }
            function zb(a, b) {
                var c = Ec.call(arguments, 2);
                return sc(function() {
                    a.apply(q, c)
                }, b)
            }
            function Ab(a, b) {
                function c() {
                    var d = c.cache,
                        e = v + (b ? b.apply(this, arguments) : arguments[0]);
                    return oc.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
                }
                return c.cache = {}, c
            }
            function Bb(a) {
                var b,
                    c;
                return function() {
                    return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
                }
            }
            function Cb(a) {
                return x(a, Ec.call(arguments, 1))
            }
            function Db(a) {
                return x(a, Ec.call(arguments, 1), null, u)
            }
            function Eb(a, b, c) {
                var d = !0,
                    e = !0;
                c === !1 ? d = !1 : va(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), c = j(), c.leading = d, c.maxWait = b, c.trailing = e;
                var f = xb(a, b, c);
                return n(c), f
            }
            function Fb(a, b) {
                return function() {
                    var c = [a];
                    return pc.apply(c, arguments), b.apply(this, c)
                }
            }
            function Gb(a) {
                return null == a ? "" : ac(a).replace(J, ba)
            }
            function Hb(a) {
                return a
            }
            function Ib(a) {
                Oa(la(a), function(b) {
                    var c = r[b] = a[b];
                    r.prototype[b] = function() {
                        var a = this.__wrapped__,
                            b = [a];
                        pc.apply(b, arguments);
                        var d = c.apply(r, b);
                        return a && "object" == typeof a && a === d ? this : new s(d)
                    }
                })
            }
            function Jb() {
                return d._ = gc, this
            }
            function Kb(a, b) {
                null == a && null == b && (b = 1), a = +a || 0, null == b ? (b = a, a = 0) : b = +b || 0;
                var c = Dc();
                return a % 1 || b % 1 ? a + Bc(c * (b - a + parseFloat("1e-" + ((c + "").length - 1))), b) : a + lc(c * (b - a + 1))
            }
            function Lb(a, b) {
                var c = a ? a[b] : q;
                return ua(c) ? a[b]() : c
            }
            function Mb(a, b, c) {
                var d = r.templateSettings;
                a || (a = ""), c = Kc ? Vc({}, c, d) : d;
                var e,
                    f = Kc && Vc({}, c.imports, d.imports),
                    g = Kc ? Qc(f) : ["_"],
                    i = Kc ? Ha(f) : [r],
                    j = 0,
                    k = c.interpolate || I,
                    l = "__p += '",
                    m = _b((c.escape || I).source + "|" + k.source + "|" + (k === E ? C : I).source + "|" + (c.evaluate || I).source + "|$", "g");
                a.replace(m, function(b, c, d, f, g, i) {
                    return d || (d = f), l += a.slice(j, i).replace(K, h), c && (l += "' +\n__e(" + c + ") +\n'"), g && (e = !0, l += "';\n" + g + ";\n__p += '"), d && (l += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), j = i + b.length, b
                }), l += "';\n";
                var n = c.variable,
                    o = n;
                o || (n = "obj", l = "with (" + n + ") {\n" + l + "\n}\n"), l = (e ? l.replace(y, "") : l).replace(z, "$1").replace(A, "$1;"), l = "function(" + n + ") {\n" + (o ? "" : n + " || (" + n + " = {});\n") + "var __t, __p = '', __e = _.escape" + (e ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l + "return __p\n}";
                var p = "\n/*\n//@ sourceURL=" + (c.sourceURL || "/lodash/template/source[" + N++ + "]") + "\n*/";
                try {
                    var s = Xb(g, "return " + l + p).apply(q, i)
                } catch (t) {
                    throw t.source = l, t
                }
                return b ? s(b) : (s.source = l, s)
            }
            function Nb(a, b, c) {
                a = (a = +a) > -1 ? a : 0;
                var d = -1,
                    e = Tb(a);
                for (b = r.createCallback(b, c, 1); ++d < a;)
                    e[d] = b(d);
                return e
            }
            function Ob(a) {
                return null == a ? "" : ac(a).replace(B, ga)
            }
            function Pb(a) {
                var b = ++t;
                return ac(null == a ? "" : a) + b
            }
            function Qb(a, b) {
                return b(a), a
            }
            function Rb() {
                return ac(this.__wrapped__)
            }
            function Sb() {
                return this.__wrapped__
            }
            d = d ? ca.defaults(a.Object(), d, ca.pick(a, L)) : a;
            var Tb = d.Array,
                Ub = d.Boolean,
                Vb = d.Date,
                Wb = d.Error,
                Xb = d.Function,
                Yb = d.Math,
                Zb = d.Number,
                $b = d.Object,
                _b = d.RegExp,
                ac = d.String,
                bc = d.TypeError,
                cc = [],
                dc = Wb.prototype,
                ec = $b.prototype,
                fc = ac.prototype,
                gc = d._,
                hc = _b("^" + ac(ec.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
                ic = Yb.ceil,
                jc = d.clearTimeout,
                kc = cc.concat,
                lc = Yb.floor,
                mc = Xb.prototype.toString,
                nc = hc.test(nc = $b.getPrototypeOf) && nc,
                oc = ec.hasOwnProperty,
                pc = cc.push,
                qc = ec.propertyIsEnumerable,
                rc = d.setImmediate,
                sc = d.setTimeout,
                tc = ec.toString,
                uc = hc.test(uc = tc.bind) && uc,
                vc = hc.test(vc = $b.create) && vc,
                wc = hc.test(wc = Tb.isArray) && wc,
                xc = d.isFinite,
                yc = d.isNaN,
                zc = hc.test(zc = $b.keys) && zc,
                Ac = Yb.max,
                Bc = Yb.min,
                Cc = d.parseInt,
                Dc = Yb.random,
                Ec = cc.slice,
                Fc = hc.test(d.attachEvent),
                Gc = uc && !/\n|true/.test(uc + Fc),
                Hc = {};
            Hc[P] = Tb, Hc[Q] = Ub, Hc[R] = Vb, Hc[T] = Xb, Hc[V] = $b, Hc[U] = Zb, Hc[W] = _b, Hc[X] = ac;
            var Ic = {};
            Ic[P] = Ic[R] = Ic[U] = {
                constructor: !0,
                toLocaleString: !0,
                toString: !0,
                valueOf: !0
            }, Ic[Q] = Ic[X] = {
                constructor: !0,
                toString: !0,
                valueOf: !0
            }, Ic[S] = Ic[T] = Ic[W] = {
                constructor: !0,
                toString: !0
            }, Ic[V] = {
                constructor: !0
            }, function() {
                for (var a = M.length; a--;) {
                    var b = M[a];
                    for (var c in Ic)
                        oc.call(Ic, c) && !oc.call(Ic[c], b) && (Ic[c][b] = !1)
                }
            }(), s.prototype = r.prototype;
            var Jc = r.support = {};
            !function() {
                var a = function() {
                        this.x = 1
                    },
                    b = {
                        0: 1,
                        length: 1
                    },
                    c = [];
                a.prototype = {
                    valueOf: 1,
                    y: 1
                };
                for (var d in new a)
                    c.push(d);
                for (d in arguments)
                    ;
                Jc.argsObject = arguments.constructor == $b && !(arguments instanceof Tb), Jc.argsClass = ha(arguments), Jc.enumErrorProps = qc.call(dc, "message") || qc.call(dc, "name"), Jc.enumPrototypes = qc.call(a, "prototype"), Jc.fastBind = uc && !Gc, Jc.ownLast = "x" != c[0], Jc.nonEnumArgs = 0 != d, Jc.nonEnumShadows = !/valueOf/.test(c), Jc.spliceObjects = (cc.splice.call(b, 0, 1), !b[0]), Jc.unindexedChars = "x"[0] + $b("x")[0] != "xx";
                try {
                    Jc.nodeClass = !(tc.call(document) == V && !({
                        toString: 0
                    } + ""))
                } catch (e) {
                    Jc.nodeClass = !0
                }
            }(1), r.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: E,
                variable: "",
                imports: {
                    _: r
                }
            };
            var Kc = Mb("var index, iterable = <%= firstArg %>, result = <%= init %>;\nif (!iterable) return result;\n<%= top %>;<% if (array) { %>\nvar length = iterable.length; index = -1;\nif (<%= array %>) {  <% if (support.unindexedChars) { %>\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  <% } %>\n  while (++index < length) {\n    <%= loop %>;\n  }\n}\nelse {  <% } else if (support.nonEnumArgs) { %>\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      <%= loop %>;\n    }\n  } else {  <% } %>  <% if (support.enumPrototypes) { %>\n  var skipProto = typeof iterable == 'function';\n  <% } %>  <% if (support.enumErrorProps) { %>\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  <% } %>  <%    var conditions = [];    if (support.enumPrototypes) { conditions.push('!(skipProto && index == \"prototype\")'); }    if (support.enumErrorProps)  { conditions.push('!(skipErrorProps && (index == \"message\" || index == \"name\"))'); }  %>  <% if (useHas && useKeys) { %>\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n<%    if (conditions.length) { %>    if (<%= conditions.join(' && ') %>) {\n  <% } %>    <%= loop %>;    <% if (conditions.length) { %>\n    }<% } %>\n  }  <% } else { %>\n  for (index in iterable) {\n<%    if (useHas) { conditions.push(\"hasOwnProperty.call(iterable, index)\"); }    if (conditions.length) { %>    if (<%= conditions.join(' && ') %>) {\n  <% } %>    <%= loop %>;    <% if (conditions.length) { %>\n    }<% } %>\n  }    <% if (support.nonEnumShadows) { %>\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      <% for (k = 0; k < 7; k++) { %>\n    index = '<%= shadowedProps[k] %>';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))<%        if (!useHas) { %> || (!nonEnum[index] && iterable[index] !== objectProto[index])<% }      %>) {\n      <%= loop %>;\n    }      <% } %>\n  }    <% } %>  <% } %>  <% if (array || support.nonEnumArgs) { %>\n}<% } %>\n<%= bottom %>;\nreturn result"),
                Lc = {
                    args: "object, source, guard",
                    top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
                    loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
                    bottom: "  }\n}"
                },
                Mc = {
                    args: "collection, callback, thisArg",
                    top: "callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg)",
                    array: "typeof length == 'number'",
                    loop: "if (callback(iterable[index], index, collection) === false) return result"
                },
                Nc = {
                    top: "if (!objectTypes[typeof iterable]) return result;\n" + Mc.top,
                    array: !1
                };
            if (!vc)
                var _ = function(a) {
                    if (va(a)) {
                        l.prototype = a;
                        var b = new l;
                        l.prototype = null
                    }
                    return b || {}
                };
            Jc.argsClass || (ha = function(a) {
                return a ? oc.call(a, "callee") : !1
            });
            var Oc = wc || function(a) {
                    return a ? "object" == typeof a && tc.call(a) == P : !1
                },
                Pc = $({
                    args: "object",
                    init: "[]",
                    top: "if (!(objectTypes[typeof object])) return result",
                    loop: "result.push(index)"
                }),
                Qc = zc ? function(a) {
                    return va(a) ? Jc.enumPrototypes && "function" == typeof a || Jc.nonEnumArgs && a.length && ha(a) ? Pc(a) : zc(a) : []
                } : Pc,
                Rc = $(Mc),
                Sc = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                Tc = na(Sc),
                Uc = $(Lc, {
                    top: Lc.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
                    loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
                }),
                Vc = $(Lc),
                Wc = $(Mc, Nc, {
                    useHas: !1
                }),
                Xc = $(Mc, Nc);
            ua(/x/) && (ua = function(a) {
                return "function" == typeof a && tc.call(a) == T
            });
            var Yc = nc ? function(a) {
                    if (!a || tc.call(a) != V || !Jc.argsClass && ha(a))
                        return !1;
                    var b = a.valueOf,
                        c = "function" == typeof b && (c = nc(b)) && nc(c);
                    return c ? a == c || nc(a) == c : fa(a)
                } : fa,
                Zc = Ra,
                $c = Ma,
                _c = ea(function cd(a, b, c) {
                    for (var d = -1, e = a ? a.length : 0, f = []; ++d < e;) {
                        var g = a[d];
                        c && (g = c(g, d, a)), Oc(g) ? pc.apply(f, b ? g : cd(g)) : f.push(g)
                    }
                    return f
                }),
                ad = ea(function(a, d, e) {
                    var f = -1,
                        h = da(),
                        j = a ? a.length : 0,
                        k = [],
                        l = !d && j >= w && h === b,
                        o = e || l ? i() : k;
                    if (l) {
                        var p = g(o);
                        p ? (h = c, o = p) : (l = !1, o = e ? o : (m(o), k))
                    }
                    for (; ++f < j;) {
                        var q = a[f],
                            r = e ? e(q, f, a) : q;
                        (d ? !f || o[o.length - 1] !== r : h(o, r) < 0) && ((e || l) && o.push(r), k.push(q))
                    }
                    return l ? (m(o.array), n(o)) : e && m(o), k
                });
            Gc && aa && "function" == typeof rc && (yb = sb(rc, d));
            var bd = 8 == Cc(G + "08") ? Cc : function(a, b) {
                return Cc(Aa(a) ? a.replace(H, "") : a, b || 0)
            };
            return r.after = rb, r.assign = Uc, r.at = Ia, r.bind = sb, r.bindAll = tb, r.bindKey = ub, r.compact = ab, r.compose = vb, r.countBy = Ka, r.createCallback = wb, r.debounce = xb, r.defaults = Vc, r.defer = yb, r.delay = zb, r.difference = bb, r.filter = Ma, r.flatten = _c, r.forEach = Oa, r.forIn = Wc, r.forOwn = Xc, r.functions = la, r.groupBy = Pa, r.initial = fb, r.intersection = gb, r.invert = na, r.invoke = Qa, r.keys = Qc, r.map = Ra, r.max = Sa, r.memoize = Ab, r.merge = Ca, r.min = Ta, r.omit = Da, r.once = Bb, r.pairs = Ea, r.partial = Cb, r.partialRight = Db, r.pick = Fa, r.pluck = Zc, r.range = jb, r.reject = Wa, r.rest = kb, r.shuffle = Xa, r.sortBy = $a, r.tap = Qb, r.throttle = Eb, r.times = Nb, r.toArray = _a, r.transform = Ga, r.union = mb, r.uniq = ad, r.unzip = nb, r.values = Ha, r.where = $c, r.without = ob, r.wrap = Fb, r.zip = pb, r.zipObject = qb, r.collect = Ra, r.drop = kb, r.each = Oa, r.extend = Uc, r.methods = la, r.object = qb, r.select = Ma, r.tail = kb, r.unique = ad, Ib(r), r.chain = r, r.prototype.chain = function() {
                return this
            }, r.clone = ia, r.cloneDeep = ja, r.contains = Ja, r.escape = Gb, r.every = La, r.find = Na, r.findIndex = cb, r.findKey = ka, r.has = ma, r.identity = Hb, r.indexOf = eb, r.isArguments = ha, r.isArray = Oc, r.isBoolean = oa, r.isDate = pa, r.isElement = qa, r.isEmpty = ra, r.isEqual = sa, r.isFinite = ta, r.isFunction = ua, r.isNaN = wa, r.isNull = xa, r.isNumber = ya, r.isObject = va, r.isPlainObject = Yc, r.isRegExp = za, r.isString = Aa, r.isUndefined = Ba, r.lastIndexOf = ib, r.mixin = Ib, r.noConflict = Jb, r.parseInt = bd, r.random = Kb, r.reduce = Ua, r.reduceRight = Va, r.result = Lb, r.runInContext = p, r.size = Ya, r.some = Za, r.sortedIndex = lb, r.template = Mb, r.unescape = Ob, r.uniqueId = Pb, r.all = La, r.any = Za, r.detect = Na, r.findWhere = Na, r.foldl = Ua, r.foldr = Va, r.include = Ja, r.inject = Ua, Xc(r, function(a, b) {
                r.prototype[b] || (r.prototype[b] = function() {
                    var b = [this.__wrapped__];
                    return pc.apply(b, arguments), a.apply(r, b)
                })
            }), r.first = db, r.last = hb, r.take = db, r.head = db, Xc(r, function(a, b) {
                r.prototype[b] || (r.prototype[b] = function(b, c) {
                    var d = a(this.__wrapped__, b, c);
                    return null == b || c && "function" != typeof b ? d : new s(d)
                })
            }), r.VERSION = "1.3.1", r.prototype.toString = Rb, r.prototype.value = Sb, r.prototype.valueOf = Sb, Rc(["join", "pop", "shift"], function(a) {
                var b = cc[a];
                r.prototype[a] = function() {
                    return b.apply(this.__wrapped__, arguments)
                }
            }), Rc(["push", "reverse", "sort", "unshift"], function(a) {
                var b = cc[a];
                r.prototype[a] = function() {
                    return b.apply(this.__wrapped__, arguments), this
                }
            }), Rc(["concat", "slice", "splice"], function(a) {
                var b = cc[a];
                r.prototype[a] = function() {
                    return new s(b.apply(this.__wrapped__, arguments))
                }
            }), Jc.spliceObjects || Rc(["pop", "shift", "splice"], function(a) {
                var b = cc[a],
                    c = "splice" == a;
                r.prototype[a] = function() {
                    var a = this.__wrapped__,
                        d = b.apply(a, arguments);
                    return 0 === a.length && delete a[0], c ? new s(d) : d
                }
            }), r._basicEach = Rc, r._iteratorTemplate = Kc, r._shimKeys = Pc, r
        }
        var q,
            r = [],
            s = [],
            t = 0,
            u = {},
            v = +new Date + "",
            w = 75,
            x = 40,
            y = /\b__p \+= '';/g,
            z = /\b(__p \+=) '' \+/g,
            A = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            B = /&(?:amp|lt|gt|quot|#39);/g,
            C = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            D = /\w*$/,
            E = /<%=([\s\S]+?)%>/g,
            F = (F = /\bthis\b/) && F.test(p) && F,
            G = "  \x0B\fÂ \ufeff\n\r\u2028\u2029áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€",
            H = RegExp("^[" + G + "]*0+(?=.$)"),
            I = /($^)/,
            J = /[&<>"']/g,
            K = /['\n\r\t\u2028\u2029\\]/g,
            L = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setImmediate", "setTimeout"],
            M = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
            N = 0,
            O = "[object Arguments]",
            P = "[object Array]",
            Q = "[object Boolean]",
            R = "[object Date]",
            S = "[object Error]",
            T = "[object Function]",
            U = "[object Number]",
            V = "[object Object]",
            W = "[object RegExp]",
            X = "[object String]",
            Y = {};
        Y[T] = !1, Y[O] = Y[P] = Y[Q] = Y[R] = Y[U] = Y[V] = Y[W] = Y[X] = !0;
        var Z = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                undefined: !1
            },
            $ = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                " ": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            _ = Z[typeof exports] && exports,
            aa = Z[typeof module] && module && module.exports == _ && module,
            ba = Z[typeof global] && global;
        !ba || ba.global !== ba && ba.window !== ba || (a = ba);
        var ca = p();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (a._ = ca, define(function() {
            return ca
        })) : _ && !_.nodeType ? aa ? (aa.exports = ca)._ = ca : _._ = ca : a._ = ca
    }(this), function(a, b) {
        if ("object" == typeof exports && exports)
            b(exports);
        else {
            var c = {};
            b(c), "function" == typeof define && define.amd ? define(c) : a.Mustache = c
        }
    }(this, function(a) {
        function b(a, b) {
            return u.call(a, b)
        }
        function c(a) {
            return !b(q, a)
        }
        function d(a) {
            return "function" == typeof a
        }
        function e(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }
        function f(a) {
            return String(a).replace(/[&<>"'\/]/g, function(a) {
                return x[a]
            })
        }
        function g(a) {
            this.string = a, this.tail = a, this.pos = 0
        }
        function h(a, b) {
            this.view = null == a ? {} : a, this.parent = b, this._cache = {
                ".": this.view
            }
        }
        function i() {
            this.clearCache()
        }
        function j(b, c, e, f) {
            function g(a) {
                return c.render(a, e)
            }
            for (var h, i, k, l = "", m = 0, n = b.length; n > m; ++m)
                switch (h = b[m], i = h[1], h[0]) {
                case "#":
                    if (k = e.lookup(i), "object" == typeof k || "string" == typeof k)
                        if (w(k))
                            for (var o = 0, p = k.length; p > o; ++o)
                                l += j(h[4], c, e.push(k[o]), f);
                        else
                            k && (l += j(h[4], c, e.push(k), f));
                    else if (d(k)) {
                        var q = null == f ? null : f.slice(h[3], h[5]);
                        k = k.call(e.view, q, g), null != k && (l += k)
                    } else
                        k && (l += j(h[4], c, e, f));
                    break;
                case "^":
                    k = e.lookup(i), (!k || w(k) && 0 === k.length) && (l += j(h[4], c, e, f));
                    break;
                case ">":
                    k = c.getPartial(i), d(k) && (l += k(e));
                    break;
                case "&":
                    k = e.lookup(i), null != k && (l += k);
                    break;
                case "name":
                    k = e.lookup(i), null != k && (l += a.escape(k));
                    break;
                case "text":
                    l += i
                }
            return l
        }
        function k(a) {
            for (var b, c = [], d = c, e = [], f = 0, g = a.length; g > f; ++f)
                switch (b = a[f], b[0]) {
                case "#":
                case "^":
                    e.push(b), d.push(b), d = b[4] = [];
                    break;
                case "/":
                    var h = e.pop();
                    h[5] = b[2], d = e.length > 0 ? e[e.length - 1][4] : c;
                    break;
                default:
                    d.push(b)
                }
            return c
        }
        function l(a) {
            for (var b, c, d = [], e = 0, f = a.length; f > e; ++e)
                b = a[e], b && ("text" === b[0] && c && "text" === c[0] ? (c[1] += b[1], c[3] = b[3]) : (c = b, d.push(b)));
            return d
        }
        function m(a) {
            return [new RegExp(e(a[0]) + "\\s*"), new RegExp("\\s*" + e(a[1]))]
        }
        function n(b, d) {
            function f() {
                if (A && !B)
                    for (; z.length;)
                        delete y[z.pop()];
                else
                    z = [];
                A = !1, B = !1
            }
            if (b = b || "", d = d || a.tags, "string" == typeof d && (d = d.split(p)), 2 !== d.length)
                throw new Error("Invalid tags: " + d.join(", "));
            for (var h, i, j, n, q, u, v = m(d), w = new g(b), x = [], y = [], z = [], A = !1, B = !1; !w.eos();) {
                if (h = w.pos, j = w.scanUntil(v[0]))
                    for (var C = 0, D = j.length; D > C; ++C)
                        n = j.charAt(C), c(n) ? z.push(y.length) : B = !0, y.push(["text", n, h, h + 1]), h += 1, "\n" == n && f();
                if (!w.scan(v[0]))
                    break;
                if (A = !0, i = w.scan(t) || "name", w.scan(o), "=" === i ? (j = w.scanUntil(r), w.scan(r), w.scanUntil(v[1])) : "{" === i ? (j = w.scanUntil(new RegExp("\\s*" + e("}" + d[1]))), w.scan(s), w.scanUntil(v[1]), i = "&") : j = w.scanUntil(v[1]), !w.scan(v[1]))
                    throw new Error("Unclosed tag at " + w.pos);
                if (q = [i, j, h, w.pos], y.push(q), "#" === i || "^" === i)
                    x.push(q);
                else if ("/" === i) {
                    if (u = x.pop(), !u)
                        throw new Error('Unopened section "' + j + '" at ' + h);
                    if (u[1] !== j)
                        throw new Error('Unclosed section "' + u[1] + '" at ' + h)
                } else if ("name" === i || "{" === i || "&" === i)
                    B = !0;
                else if ("=" === i) {
                    if (d = j.split(p), 2 !== d.length)
                        throw new Error("Invalid tags at " + h + ": " + d.join(", "));
                    v = m(d)
                }
            }
            if (u = x.pop())
                throw new Error('Unclosed section "' + u[1] + '" at ' + w.pos);
            return k(l(y))
        }
        var o = /\s*/,
            p = /\s+/,
            q = /\S/,
            r = /\s*=/,
            s = /\s*\}/,
            t = /#|\^|\/|>|\{|&|=|!/,
            u = RegExp.prototype.test,
            v = Object.prototype.toString,
            w = Array.isArray || function(a) {
                return "[object Array]" === v.call(a)
            },
            x = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };
        g.prototype.eos = function() {
            return "" === this.tail
        }, g.prototype.scan = function(a) {
            var b = this.tail.match(a);
            if (b && 0 === b.index) {
                var c = b[0];
                return this.tail = this.tail.substring(c.length), this.pos += c.length, c
            }
            return ""
        }, g.prototype.scanUntil = function(a) {
            var b,
                c = this.tail.search(a);
            switch (c) {
            case -1:
                b = this.tail, this.tail = "";
                break;
            case 0:
                b = "";
                break;
            default:
                b = this.tail.substring(0, c), this.tail = this.tail.substring(c)
            }
            return this.pos += b.length, b
        }, h.make = function(a) {
            return a instanceof h ? a : new h(a)
        }, h.prototype.push = function(a) {
            return new h(a, this)
        }, h.prototype.lookup = function(a) {
            var b;
            if (a in this._cache)
                b = this._cache[a];
            else {
                for (var c = this; c;) {
                    if (a.indexOf(".") > 0) {
                        b = c.view;
                        for (var e = a.split("."), f = 0; null != b && f < e.length;)
                            b = b[e[f++]]
                    } else
                        b = c.view[a];
                    if (null != b)
                        break;
                    c = c.parent
                }
                this._cache[a] = b
            }
            return d(b) && (b = b.call(this.view)), b
        }, i.prototype.clearCache = function() {
            this._cache = {}, this._partialCache = {}
        }, i.prototype.compile = function(b, c) {
            var d = this._cache[b];
            if (!d) {
                var e = a.parse(b, c);
                d = this._cache[b] = this.compileTokens(e, b)
            }
            return d
        }, i.prototype.compilePartial = function(a, b, c) {
            var d = this.compile(b, c);
            return this._partialCache[a] = d, d
        }, i.prototype.getPartial = function(a) {
            return a in this._partialCache || !this._loadPartial || this.compilePartial(a, this._loadPartial(a)), this._partialCache[a]
        }, i.prototype.compileTokens = function(a, b) {
            var c = this;
            return function(e, f) {
                if (f)
                    if (d(f))
                        c._loadPartial = f;
                    else
                        for (var g in f)
                            c.compilePartial(g, f[g]);
                return j(a, c, h.make(e), b)
            }
        }, i.prototype.render = function(a, b, c) {
            return this.compile(a)(b, c)
        }, a.name = "mustache.js", a.version = "0.7.3", a.tags = ["{{", "}}"], a.Scanner = g, a.Context = h, a.Writer = i, a.parse = n, a.escape = f;
        var y = new i;
        a.clearCache = function() {
            return y.clearCache()
        }, a.compile = function(a, b) {
            return y.compile(a, b)
        }, a.compilePartial = function(a, b, c) {
            return y.compilePartial(a, b, c)
        }, a.compileTokens = function(a, b) {
            return y.compileTokens(a, b)
        }, a.render = function(a, b, c) {
            return y.render(a, b, c)
        }, a.to_html = function(b, c, e, f) {
            var g = a.render(b, c, e);
            return d(f) ? void f(g) : g
        }
    }), function(a, b) {
        if ("function" == typeof define && define.amd)
            define(["underscore", "jquery", "exports"], function(c, d, e) {
                a.Backbone = b(a, e, c, d)
            });
        else if ("undefined" != typeof exports) {
            var c = require("underscore");
            b(a, exports, c)
        } else
            a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$)
    }(this, function(b, c, d, e) {
        var f = b.Backbone,
            g = [],
            h = (g.push, g.slice);
        g.splice;
        c.VERSION = "1.1.2", c.$ = e, c.noConflict = function() {
            return b.Backbone = f, this
        }, c.emulateHTTP = !1, c.emulateJSON = !1;
        var i = c.Events = {
                on: function(a, b, c) {
                    if (!k(this, "on", a, [b, c]) || !b)
                        return this;
                    this._events || (this._events = {});
                    var d = this._events[a] || (this._events[a] = []);
                    return d.push({
                        callback: b,
                        context: c,
                        ctx: c || this
                    }), this
                },
                once: function(a, b, c) {
                    if (!k(this, "once", a, [b, c]) || !b)
                        return this;
                    var e = this,
                        f = d.once(function() {
                            e.off(a, f), b.apply(this, arguments)
                        });
                    return f._callback = b, this.on(a, f, c)
                },
                off: function(a, b, c) {
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        l,
                        m;
                    if (!this._events || !k(this, "off", a, [b, c]))
                        return this;
                    if (!a && !b && !c)
                        return this._events = void 0, this;
                    for (h = a ? [a] : d.keys(this._events), i = 0, j = h.length; j > i; i++)
                        if (a = h[i], g = this._events[a]) {
                            if (this._events[a] = e = [], b || c)
                                for (l = 0, m = g.length; m > l; l++)
                                    f = g[l], (b && b !== f.callback && b !== f.callback._callback || c && c !== f.context) && e.push(f);
                            e.length || delete this._events[a]
                        }
                    return this
                },
                trigger: function(a) {
                    if (!this._events)
                        return this;
                    var b = h.call(arguments, 1);
                    if (!k(this, "trigger", a, b))
                        return this;
                    var c = this._events[a],
                        d = this._events.all;
                    return c && l(c, b), d && l(d, arguments), this
                },
                stopListening: function(a, b, c) {
                    var e = this._listeningTo;
                    if (!e)
                        return this;
                    var f = !b && !c;
                    c || "object" != typeof b || (c = this), a && ((e = {})[a._listenId] = a);
                    for (var g in e)
                        a = e[g], a.off(b, c, this), (f || d.isEmpty(a._events)) && delete this._listeningTo[g];
                    return this
                }
            },
            j = /\s+/,
            k = function(a, b, c, d) {
                if (!c)
                    return !0;
                if ("object" == typeof c) {
                    for (var e in c)
                        a[b].apply(a, [e, c[e]].concat(d));
                    return !1
                }
                if (j.test(c)) {
                    for (var f = c.split(j), g = 0, h = f.length; h > g; g++)
                        a[b].apply(a, [f[g]].concat(d));
                    return !1
                }
                return !0
            },
            l = function(a, b) {
                var c,
                    d = -1,
                    e = a.length,
                    f = b[0],
                    g = b[1],
                    h = b[2];
                switch (b.length) {
                case 0:
                    for (; ++d < e;)
                        (c = a[d]).callback.call(c.ctx);
                    return;
                case 1:
                    for (; ++d < e;)
                        (c = a[d]).callback.call(c.ctx, f);
                    return;
                case 2:
                    for (; ++d < e;)
                        (c = a[d]).callback.call(c.ctx, f, g);
                    return;
                case 3:
                    for (; ++d < e;)
                        (c = a[d]).callback.call(c.ctx, f, g, h);
                    return;
                default:
                    for (; ++d < e;)
                        (c = a[d]).callback.apply(c.ctx, b);
                    return
                }
            },
            m = {
                listenTo: "on",
                listenToOnce: "once"
            };
        d.each(m, function(a, b) {
            i[b] = function(b, c, e) {
                var f = this._listeningTo || (this._listeningTo = {}),
                    g = b._listenId || (b._listenId = d.uniqueId("l"));
                return f[g] = b, e || "object" != typeof c || (e = this), b[a](c, e, this), this
            }
        }), i.bind = i.on, i.unbind = i.off, d.extend(c, i);
        var n = c.Model = function(a, b) {
            var c = a || {};
            b || (b = {}), this.cid = d.uniqueId("c"), this.attributes = {}, b.collection && (this.collection = b.collection), b.parse && (c = this.parse(c, b) || {}), c = d.defaults({}, c, d.result(this, "defaults")), this.set(c, b), this.changed = {}, this.initialize.apply(this, arguments)
        };
        d.extend(n.prototype, i, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(a) {
                return d.clone(this.attributes)
            },
            sync: function() {
                return c.sync.apply(this, arguments)
            },
            get: function(a) {
                return this.attributes[a]
            },
            escape: function(a) {
                return d.escape(this.get(a))
            },
            has: function(a) {
                return null != this.get(a)
            },
            set: function(a, b, c) {
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l;
                if (null == a)
                    return this;
                if ("object" == typeof a ? (f = a, c = b) : (f = {})[a] = b, c || (c = {}), !this._validate(f, c))
                    return !1;
                g = c.unset, i = c.silent, h = [], j = this._changing, this._changing = !0, j || (this._previousAttributes = d.clone(this.attributes), this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in f && (this.id = f[this.idAttribute]);
                for (e in f)
                    b = f[e], d.isEqual(l[e], b) || h.push(e), d.isEqual(k[e], b) ? delete this.changed[e] : this.changed[e] = b, g ? delete l[e] : l[e] = b;
                if (!i) {
                    h.length && (this._pending = c);
                    for (var m = 0, n = h.length; n > m; m++)
                        this.trigger("change:" + h[m], this, l[h[m]], c)
                }
                if (j)
                    return this;
                if (!i)
                    for (; this._pending;)
                        c = this._pending, this._pending = !1, this.trigger("change", this, c);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(a, b) {
                return this.set(a, void 0, d.extend({}, b, {
                    unset: !0
                }))
            },
            clear: function(a) {
                var b = {};
                for (var c in this.attributes)
                    b[c] = void 0;
                return this.set(b, d.extend({}, a, {
                    unset: !0
                }))
            },
            hasChanged: function(a) {
                return null == a ? !d.isEmpty(this.changed) : d.has(this.changed, a)
            },
            changedAttributes: function(a) {
                if (!a)
                    return this.hasChanged() ? d.clone(this.changed) : !1;
                var b,
                    c = !1,
                    e = this._changing ? this._previousAttributes : this.attributes;
                for (var f in a)
                    d.isEqual(e[f], b = a[f]) || ((c || (c = {}))[f] = b);
                return c
            },
            previous: function(a) {
                return null != a && this._previousAttributes ? this._previousAttributes[a] : null
            },
            previousAttributes: function() {
                return d.clone(this._previousAttributes)
            },
            fetch: function(a) {
                a = a ? d.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                var b = this,
                    c = a.success;
                return a.success = function(d) {
                    return b.set(b.parse(d, a), a) ? (c && c(b, d, a), void b.trigger("sync", b, d, a)) : !1
                }, M(this, a), this.sync("read", this, a)
            },
            save: function(a, b, c) {
                var e,
                    f,
                    g,
                    h = this.attributes;
                if (null == a || "object" == typeof a ? (e = a, c = b) : (e = {})[a] = b, c = d.extend({
                    validate: !0
                }, c), e && !c.wait) {
                    if (!this.set(e, c))
                        return !1
                } else if (!this._validate(e, c))
                    return !1;
                e && c.wait && (this.attributes = d.extend({}, h, e)), void 0 === c.parse && (c.parse = !0);
                var i = this,
                    j = c.success;
                return c.success = function(a) {
                    i.attributes = h;
                    var b = i.parse(a, c);
                    return c.wait && (b = d.extend(e || {}, b)), d.isObject(b) && !i.set(b, c) ? !1 : (j && j(i, a, c), void i.trigger("sync", i, a, c))
                }, M(this, c), f = this.isNew() ? "create" : c.patch ? "patch" : "update", "patch" === f && (c.attrs = e), g = this.sync(f, this, c), e && c.wait && (this.attributes = h), g
            },
            destroy: function(a) {
                a = a ? d.clone(a) : {};
                var b = this,
                    c = a.success,
                    e = function() {
                        b.trigger("destroy", b, b.collection, a)
                    };
                if (a.success = function(d) {
                    (a.wait || b.isNew()) && e(), c && c(b, d, a), b.isNew() || b.trigger("sync", b, d, a)
                }, this.isNew())
                    return a.success(), !1;
                M(this, a);
                var f = this.sync("delete", this, a);
                return a.wait || e(), f
            },
            url: function() {
                var a = d.result(this, "urlRoot") || d.result(this.collection, "url") || L();
                return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(a, b) {
                return a
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(a) {
                return this._validate({}, d.extend(a || {}, {
                    validate: !0
                }))
            },
            _validate: function(a, b) {
                if (!b.validate || !this.validate)
                    return !0;
                a = d.extend({}, this.attributes, a);
                var c = this.validationError = this.validate(a, b) || null;
                return c ? (this.trigger("invalid", this, c, d.extend(b, {
                    validationError: c
                })), !1) : !0
            }
        });
        var o = ["keys", "values", "pairs", "invert", "pick", "omit"];
        d.each(o, function(a) {
            n.prototype[a] = function() {
                var b = h.call(arguments);
                return b.unshift(this.attributes), d[a].apply(d, b)
            }
        });
        var p = c.Collection = function(a, b) {
                b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, d.extend({
                    silent: !0
                }, b))
            },
            q = {
                add: !0,
                remove: !0,
                merge: !0
            },
            r = {
                add: !0,
                remove: !1
            };
        d.extend(p.prototype, i, {
            model: n,
            initialize: function() {},
            toJSON: function(a) {
                return this.map(function(b) {
                    return b.toJSON(a)
                })
            },
            sync: function() {
                return c.sync.apply(this, arguments)
            },
            add: function(a, b) {
                return this.set(a, d.extend({
                    merge: !1
                }, b, r))
            },
            remove: function(a, b) {
                var c = !d.isArray(a);
                a = c ? [a] : d.clone(a), b || (b = {});
                var e,
                    f,
                    g,
                    h;
                for (e = 0, f = a.length; f > e; e++)
                    h = a[e] = this.get(a[e]), h && (delete this._byId[h.id], delete this._byId[h.cid], g = this.indexOf(h), this.models.splice(g, 1), this.length--, b.silent || (b.index = g, h.trigger("remove", h, this, b)), this._removeReference(h, b));
                return c ? a[0] : a
            },
            set: function(a, b) {
                b = d.defaults({}, b, q), b.parse && (a = this.parse(a, b));
                var c = !d.isArray(a);
                a = c ? a ? [a] : [] : d.clone(a);
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l = b.at,
                    m = this.model,
                    o = this.comparator && null == l && b.sort !== !1,
                    p = d.isString(this.comparator) ? this.comparator : null,
                    r = [],
                    s = [],
                    t = {},
                    u = b.add,
                    v = b.merge,
                    w = b.remove,
                    x = !o && u && w ? [] : !1;
                for (e = 0, f = a.length; f > e; e++) {
                    if (i = a[e] || {}, g = i instanceof n ? h = i : i[m.prototype.idAttribute || "id"], j = this.get(g))
                        w && (t[j.cid] = !0), v && (i = i === h ? h.attributes : i, b.parse && (i = j.parse(i, b)), j.set(i, b), o && !k && j.hasChanged(p) && (k = !0)), a[e] = j;
                    else if (u) {
                        if (h = a[e] = this._prepareModel(i, b), !h)
                            continue;
                        r.push(h), this._addReference(h, b)
                    }
                    h = j || h, !x || !h.isNew() && t[h.id] || x.push(h), t[h.id] = !0
                }
                if (w) {
                    for (e = 0, f = this.length; f > e; ++e)
                        t[(h = this.models[e]).cid] || s.push(h);
                    s.length && this.remove(s, b)
                }
                if (r.length || x && x.length)
                    if (o && (k = !0), this.length += r.length, null != l)
                        for (e = 0, f = r.length; f > e; e++)
                            this.models.splice(l + e, 0, r[e]);
                    else {
                        x && (this.models.length = 0);
                        var y = x || r;
                        for (e = 0, f = y.length; f > e; e++)
                            this.models.push(y[e])
                    }
                if (k && this.sort({
                    silent: !0
                }), !b.silent) {
                    for (e = 0, f = r.length; f > e; e++)
                        (h = r[e]).trigger("add", h, this, b);
                    (k || x && x.length) && this.trigger("sort", this, b)
                }
                return c ? a[0] : a
            },
            reset: function(a, b) {
                b || (b = {});
                for (var c = 0, e = this.models.length; e > c; c++)
                    this._removeReference(this.models[c], b);
                return b.previousModels = this.models, this._reset(), a = this.add(a, d.extend({
                    silent: !0
                }, b)), b.silent || this.trigger("reset", this, b), a
            },
            push: function(a, b) {
                return this.add(a, d.extend({
                    at: this.length
                }, b))
            },
            pop: function(a) {
                var b = this.at(this.length - 1);
                return this.remove(b, a), b
            },
            unshift: function(a, b) {
                return this.add(a, d.extend({
                    at: 0
                }, b))
            },
            shift: function(a) {
                var b = this.at(0);
                return this.remove(b, a), b
            },
            slice: function() {
                return h.apply(this.models, arguments)
            },
            get: function(a) {
                return null != a ? this._byId[a] || this._byId[a.id] || this._byId[a.cid] : void 0
            },
            at: function(a) {
                return this.models[a]
            },
            where: function(a, b) {
                return d.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                    for (var c in a)
                        if (a[c] !== b.get(c))
                            return !1;
                    return !0
                })
            },
            findWhere: function(a) {
                return this.where(a, !0)
            },
            sort: function(a) {
                if (!this.comparator)
                    throw new Error("Cannot sort a set without a comparator");
                return a || (a = {}), d.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(d.bind(this.comparator, this)), a.silent || this.trigger("sort", this, a), this
            },
            pluck: function(a) {
                return d.invoke(this.models, "get", a)
            },
            fetch: function(a) {
                a = a ? d.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                var b = a.success,
                    c = this;
                return a.success = function(d) {
                    var e = a.reset ? "reset" : "set";
                    c[e](d, a), b && b(c, d, a), c.trigger("sync", c, d, a)
                }, M(this, a), this.sync("read", this, a)
            },
            create: function(a, b) {
                if (b = b ? d.clone(b) : {}, !(a = this._prepareModel(a, b)))
                    return !1;
                b.wait || this.add(a, b);
                var c = this,
                    e = b.success;
                return b.success = function(a, d) {
                    b.wait && c.add(a, b), e && e(a, d, b)
                }, a.save(null, b), a
            },
            parse: function(a, b) {
                return a
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(a, b) {
                if (a instanceof n)
                    return a;
                b = b ? d.clone(b) : {}, b.collection = this;
                var c = new this.model(a, b);
                return c.validationError ? (this.trigger("invalid", this, c.validationError, b), !1) : c
            },
            _addReference: function(a, b) {
                this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a), a.collection || (a.collection = this), a.on("all", this._onModelEvent, this);
            },
            _removeReference: function(a, b) {
                this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(a, b, c, d) {
                ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
            }
        });
        var s = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        d.each(s, function(a) {
            p.prototype[a] = function() {
                var b = h.call(arguments);
                return b.unshift(this.models), d[a].apply(d, b)
            }
        });
        var t = ["groupBy", "countBy", "sortBy", "indexBy"];
        d.each(t, function(a) {
            p.prototype[a] = function(b, c) {
                var e = d.isFunction(b) ? b : function(a) {
                    return a.get(b)
                };
                return d[a](this.models, e, c)
            }
        });
        var u = c.View = function(a) {
                this.cid = d.uniqueId("view"), a || (a = {}), d.extend(this, d.pick(a, w)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            v = /^(\S+)\s*(.*)$/,
            w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        d.extend(u.prototype, i, {
            tagName: "div",
            $: function(a) {
                return this.$el.find(a)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(a, b) {
                return this.$el && this.undelegateEvents(), this.$el = a instanceof c.$ ? a : c.$(a), this.el = this.$el[0], b !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(a) {
                if (!a && !(a = d.result(this, "events")))
                    return this;
                this.undelegateEvents();
                for (var b in a) {
                    var c = a[b];
                    if (d.isFunction(c) || (c = this[a[b]]), c) {
                        var e = b.match(v),
                            f = e[1],
                            g = e[2];
                        c = d.bind(c, this), f += ".delegateEvents" + this.cid, "" === g ? this.$el.on(f, c) : this.$el.on(f, g, c)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el)
                    this.setElement(d.result(this, "el"), !1);
                else {
                    var a = d.extend({}, d.result(this, "attributes"));
                    this.id && (a.id = d.result(this, "id")), this.className && (a["class"] = d.result(this, "className"));
                    var b = c.$("<" + d.result(this, "tagName") + ">").attr(a);
                    this.setElement(b, !1)
                }
            }
        }), c.sync = function(a, b, e) {
            var f = y[a];
            d.defaults(e || (e = {}), {
                emulateHTTP: c.emulateHTTP,
                emulateJSON: c.emulateJSON
            });
            var g = {
                type: f,
                dataType: "json"
            };
            if (e.url || (g.url = d.result(b, "url") || L()), null != e.data || !b || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", g.data = JSON.stringify(e.attrs || b.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {
                model: g.data
            } : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
                g.type = "POST", e.emulateJSON && (g.data._method = f);
                var h = e.beforeSend;
                e.beforeSend = function(a) {
                    return a.setRequestHeader("X-HTTP-Method-Override", f), h ? h.apply(this, arguments) : void 0
                }
            }
            "GET" === g.type || e.emulateJSON || (g.processData = !1), "PATCH" === g.type && x && (g.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var i = e.xhr = c.ajax(d.extend(g, e));
            return b.trigger("request", b, i, e), i
        };
        var x = !("undefined" == typeof a || !a.ActiveXObject || a.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            y = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        c.ajax = function() {
            return c.$.ajax.apply(c.$, arguments)
        };
        var z = c.Router = function(a) {
                a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            A = /\((.*?)\)/g,
            B = /(\(\?)?:\w+/g,
            C = /\*\w+/g,
            D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        d.extend(z.prototype, i, {
            initialize: function() {},
            route: function(a, b, e) {
                d.isRegExp(a) || (a = this._routeToRegExp(a)), d.isFunction(b) && (e = b, b = ""), e || (e = this[b]);
                var f = this;
                return c.history.route(a, function(d) {
                    var g = f._extractParameters(a, d);
                    f.execute(e, g), f.trigger.apply(f, ["route:" + b].concat(g)), f.trigger("route", b, g), c.history.trigger("route", f, b, g)
                }), this
            },
            execute: function(a, b) {
                a && a.apply(this, b)
            },
            navigate: function(a, b) {
                return c.history.navigate(a, b), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = d.result(this, "routes");
                    for (var a, b = d.keys(this.routes); null != (a = b.pop());)
                        this.route(a, this.routes[a])
                }
            },
            _routeToRegExp: function(a) {
                return a = a.replace(D, "\\$&").replace(A, "(?:$1)?").replace(B, function(a, b) {
                    return b ? a : "([^/?]+)"
                }).replace(C, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(a, b) {
                var c = a.exec(b).slice(1);
                return d.map(c, function(a, b) {
                    return b === c.length - 1 ? a || null : a ? decodeURIComponent(a) : null
                })
            }
        });
        var E = c.History = function() {
                this.handlers = [], d.bindAll(this, "checkUrl"), "undefined" != typeof a && (this.location = a.location, this.history = a.history)
            },
            F = /^[#\/]|\s+$/g,
            G = /^\/+|\/+$/g,
            H = /msie [\w.]+/,
            I = /\/$/,
            J = /#.*$/;
        E.started = !1, d.extend(E.prototype, i, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(a) {
                var b = (a || this).location.href.match(/#(.*)$/);
                return b ? b[1] : ""
            },
            getFragment: function(a, b) {
                if (null == a)
                    if (this._hasPushState || !this._wantsHashChange || b) {
                        a = decodeURI(this.location.pathname + this.location.search);
                        var c = this.root.replace(I, "");
                        a.indexOf(c) || (a = a.slice(c.length))
                    } else
                        a = this.getHash();
                return a.replace(F, "")
            },
            start: function(b) {
                if (E.started)
                    throw new Error("Backbone.history has already been started");
                E.started = !0, this.options = d.extend({
                    root: "/"
                }, this.options, b), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var e = this.getFragment(),
                    f = document.documentMode,
                    g = H.exec(navigator.userAgent.toLowerCase()) && (!f || 7 >= f);
                if (this.root = ("/" + this.root + "/").replace(G, "/"), g && this._wantsHashChange) {
                    var h = c.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = h.hide().appendTo("body")[0].contentWindow, this.navigate(e)
                }
                this._hasPushState ? c.$(a).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in a && !g ? c.$(a).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = e;
                var i = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot())
                        return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && i.hash && (this.fragment = this.getHash().replace(F, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function() {
                c.$(a).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), E.started = !1
            },
            route: function(a, b) {
                this.handlers.unshift({
                    route: a,
                    callback: b
                })
            },
            checkUrl: function(a) {
                var b = this.getFragment();
                return b === this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe))), b === this.fragment ? !1 : (this.iframe && this.navigate(b), void this.loadUrl())
            },
            loadUrl: function(a) {
                return a = this.fragment = this.getFragment(a), d.any(this.handlers, function(b) {
                    return b.route.test(a) ? (b.callback(a), !0) : void 0
                })
            },
            navigate: function(a, b) {
                if (!E.started)
                    return !1;
                b && b !== !0 || (b = {
                    trigger: !!b
                });
                var c = this.root + (a = this.getFragment(a || ""));
                if (a = a.replace(J, ""), this.fragment !== a) {
                    if (this.fragment = a, "" === a && "/" !== c && (c = c.slice(0, -1)), this._hasPushState)
                        this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                    else {
                        if (!this._wantsHashChange)
                            return this.location.assign(c);
                        this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
                    }
                    return b.trigger ? this.loadUrl(a) : void 0
                }
            },
            _updateHash: function(a, b, c) {
                if (c) {
                    var d = a.href.replace(/(javascript:|#).*$/, "");
                    a.replace(d + "#" + b)
                } else
                    a.hash = "#" + b
            }
        }), c.history = new E;
        var K = function(a, b) {
            var c,
                e = this;
            c = a && d.has(a, "constructor") ? a.constructor : function() {
                return e.apply(this, arguments)
            }, d.extend(c, e, b);
            var f = function() {
                this.constructor = c
            };
            return f.prototype = e.prototype, c.prototype = new f, a && d.extend(c.prototype, a), c.__super__ = e.prototype, c
        };
        n.extend = p.extend = z.extend = u.extend = E.extend = K;
        var L = function() {
                throw new Error('A "url" property or function must be specified')
            },
            M = function(a, b) {
                var c = b.error;
                b.error = function(d) {
                    c && c(a, d, b), a.trigger("error", a, d, b)
                }
            };
        return c
    }), Backbone.ChildViewContainer = function(a, b) {
        var c = function(a) {
            this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), b.each(a, this.add, this)
        };
        b.extend(c.prototype, {
            add: function(a, b) {
                var c = a.cid;
                this._views[c] = a, a.model && (this._indexByModel[a.model.cid] = c), b && (this._indexByCustom[b] = c), this._updateLength()
            },
            findByModel: function(a) {
                return this.findByModelCid(a.cid)
            },
            findByModelCid: function(a) {
                var b = this._indexByModel[a];
                return this.findByCid(b)
            },
            findByCustom: function(a) {
                var b = this._indexByCustom[a];
                return this.findByCid(b)
            },
            findByIndex: function(a) {
                return b.values(this._views)[a]
            },
            findByCid: function(a) {
                return this._views[a]
            },
            remove: function(a) {
                var c = a.cid;
                a.model && delete this._indexByModel[a.model.cid], b.any(this._indexByCustom, function(a, b) {
                    return a === c ? (delete this._indexByCustom[b], !0) : void 0
                }, this), delete this._views[c], this._updateLength()
            },
            call: function(a) {
                this.apply(a, b.tail(arguments))
            },
            apply: function(a, c) {
                b.each(this._views, function(d) {
                    b.isFunction(d[a]) && d[a].apply(d, c || [])
                })
            },
            _updateLength: function() {
                this.length = b.size(this._views)
            }
        });
        var d = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        return b.each(d, function(a) {
            c.prototype[a] = function() {
                var c = b.values(this._views),
                    d = [c].concat(b.toArray(arguments));
                return b[a].apply(b, d)
            }
        }), c
    }(Backbone, _), Backbone.Wreqr = function(a, b, c) {
        "use strict";
        var d = {};
        return d.Handlers = function(a, b) {
            var c = function(a) {
                this.options = a, this._wreqrHandlers = {}, b.isFunction(this.initialize) && this.initialize(a)
            };
            return c.extend = a.Model.extend, b.extend(c.prototype, a.Events, {
                setHandlers: function(a) {
                    b.each(a, function(a, c) {
                        var d = null;
                        b.isObject(a) && !b.isFunction(a) && (d = a.context, a = a.callback), this.setHandler(c, a, d)
                    }, this)
                },
                setHandler: function(a, b, c) {
                    var d = {
                        callback: b,
                        context: c
                    };
                    this._wreqrHandlers[a] = d, this.trigger("handler:add", a, b, c)
                },
                hasHandler: function(a) {
                    return !!this._wreqrHandlers[a]
                },
                getHandler: function(a) {
                    var b = this._wreqrHandlers[a];
                    if (!b)
                        throw new Error("Handler not found for '" + a + "'");
                    return function() {
                        var a = Array.prototype.slice.apply(arguments);
                        return b.callback.apply(b.context, a)
                    }
                },
                removeHandler: function(a) {
                    delete this._wreqrHandlers[a]
                },
                removeAllHandlers: function() {
                    this._wreqrHandlers = {}
                }
            }), c
        }(a, c), d.CommandStorage = function() {
            var b = function(a) {
                this.options = a, this._commands = {}, c.isFunction(this.initialize) && this.initialize(a)
            };
            return c.extend(b.prototype, a.Events, {
                getCommands: function(a) {
                    var b = this._commands[a];
                    return b || (b = {
                        command: a,
                        instances: []
                    }, this._commands[a] = b), b
                },
                addCommand: function(a, b) {
                    var c = this.getCommands(a);
                    c.instances.push(b)
                },
                clearCommands: function(a) {
                    var b = this.getCommands(a);
                    b.instances = []
                }
            }), b
        }(), d.Commands = function(a) {
            return a.Handlers.extend({
                storageType: a.CommandStorage,
                constructor: function(b) {
                    this.options = b || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                    var c = Array.prototype.slice.call(arguments);
                    a.Handlers.prototype.constructor.apply(this, c)
                },
                execute: function(a, b) {
                    a = arguments[0], b = Array.prototype.slice.call(arguments, 1), this.hasHandler(a) ? this.getHandler(a).apply(this, b) : this.storage.addCommand(a, b)
                },
                _executeCommands: function(a, b, d) {
                    var e = this.storage.getCommands(a);
                    c.each(e.instances, function(a) {
                        b.apply(d, a)
                    }), this.storage.clearCommands(a)
                },
                _initializeStorage: function(a) {
                    var b,
                        d = a.storageType || this.storageType;
                    b = c.isFunction(d) ? new d : d, this.storage = b
                }
            })
        }(d), d.RequestResponse = function(a) {
            return a.Handlers.extend({
                request: function() {
                    var a = arguments[0],
                        b = Array.prototype.slice.call(arguments, 1);
                    return this.getHandler(a).apply(this, b)
                }
            })
        }(d), d.EventAggregator = function(a, b) {
            var c = function() {};
            return c.extend = a.Model.extend, b.extend(c.prototype, a.Events), c
        }(a, c), d
    }(Backbone, Backbone.Marionette, _);
    (function(a, c, d) {
        "use strict";
        function e(a) {
            return h.call(a)
        }
        function f(a, b) {
            var c = new Error(a);
            throw c.name = b || "Error", c
        }
        var g = {};
        c.Marionette = g, g.$ = c.$;
        var h = Array.prototype.slice;
        return g.extend = c.Model.extend, g.getOption = function(a, c) {
            if (a && c) {
                var d;
                return d = a.options && c in a.options && a.options[c] !== b ? a.options[c] : a[c]
            }
        }, g.triggerMethod = function() {
            function a(a, b, c) {
                return c.toUpperCase()
            }
            var b = /(^|:)(\w)/gi,
                c = function(c) {
                    var e = "on" + c.replace(b, a),
                        f = this[e];
                    return d.isFunction(this.trigger) && this.trigger.apply(this, arguments), d.isFunction(f) ? f.apply(this, d.tail(arguments)) : void 0
                };
            return c
        }(), g.MonitorDOMRefresh = function() {
            function a(a) {
                a._isShown = !0, c(a)
            }
            function b(a) {
                a._isRendered = !0, c(a)
            }
            function c(a) {
                a._isShown && a._isRendered && d.isFunction(a.triggerMethod) && a.triggerMethod("dom:refresh")
            }
            return function(c) {
                c.listenTo(c, "show", function() {
                    a(c)
                }), c.listenTo(c, "render", function() {
                    b(c)
                })
            }
        }(), function(a) {
            function b(a, b, c, e) {
                var g = e.split(/\s+/);
                d.each(g, function(d) {
                    var e = a[d];
                    e || f("Method '" + d + "' was configured as an event handler, but does not exist."), a.listenTo(b, c, e, a)
                })
            }
            function c(a, b, c, d) {
                a.listenTo(b, c, d, a)
            }
            function e(a, b, c, e) {
                var f = e.split(/\s+/);
                d.each(f, function(d) {
                    var e = a[d];
                    a.stopListening(b, c, e, a)
                })
            }
            function g(a, b, c, d) {
                a.stopListening(b, c, d, a)
            }
            function h(a, b, c, e, f) {
                b && c && (d.isFunction(c) && (c = c.call(a)), d.each(c, function(c, g) {
                    d.isFunction(c) ? e(a, b, g, c) : f(a, b, g, c)
                }))
            }
            a.bindEntityEvents = function(a, d, e) {
                h(a, d, e, c, b)
            }, a.unbindEntityEvents = function(a, b, c) {
                h(a, b, c, g, e)
            }
        }(g), g.Callbacks = function() {
            this._deferred = g.$.Deferred(), this._callbacks = []
        }, d.extend(g.Callbacks.prototype, {
            add: function(a, b) {
                this._callbacks.push({
                    cb: a,
                    ctx: b
                }), this._deferred.done(function(c, d) {
                    b && (c = b), a.call(c, d)
                })
            },
            run: function(a, b) {
                this._deferred.resolve(b, a)
            },
            reset: function() {
                var a = this._callbacks;
                this._deferred = g.$.Deferred(), this._callbacks = [], d.each(a, function(a) {
                    this.add(a.cb, a.ctx)
                }, this)
            }
        }), g.Controller = function(a) {
            this.triggerMethod = g.triggerMethod, this.options = a || {}, d.isFunction(this.initialize) && this.initialize(this.options)
        }, g.Controller.extend = g.extend, d.extend(g.Controller.prototype, c.Events, {
            close: function() {
                this.stopListening(), this.triggerMethod("close"), this.unbind()
            }
        }), g.Region = function(a) {
            if (this.options = a || {}, this.el = g.getOption(this, "el"), !this.el) {
                var b = new Error("An 'el' must be specified for a region.");
                throw b.name = "NoElError", b
            }
            if (this.initialize) {
                var c = Array.prototype.slice.apply(arguments);
                this.initialize.apply(this, c)
            }
        }, d.extend(g.Region, {
            buildRegion: function(a, b) {
                var c = "string" == typeof a,
                    e = "string" == typeof a.selector,
                    f = "undefined" == typeof a.regionType,
                    g = "function" == typeof a;
                if (!g && !c && !e)
                    throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");
                var h,
                    i;
                c && (h = a), a.selector && (h = a.selector), g && (i = a), !g && f && (i = b), a.regionType && (i = a.regionType);
                var j = new i({
                    el: h
                });
                return a.parentEl && (j.getEl = function(b) {
                    var c = a.parentEl;
                    return d.isFunction(c) && (c = c()), c.find(b)
                }), j
            }
        }), d.extend(g.Region.prototype, c.Events, {
            show: function(a) {
                this.ensureEl();
                var b = a.isClosed || d.isUndefined(a.$el),
                    c = a !== this.currentView;
                c && this.close(), a.render(), (c || b) && this.open(a), this.currentView = a, g.triggerMethod.call(this, "show", a), g.triggerMethod.call(a, "show")
            },
            ensureEl: function() {
                this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el))
            },
            getEl: function(a) {
                return g.$(a)
            },
            open: function(a) {
                this.$el.empty().append(a.el)
            },
            close: function() {
                var a = this.currentView;
                a && !a.isClosed && (a.close ? a.close() : a.remove && a.remove(), g.triggerMethod.call(this, "close"), delete this.currentView)
            },
            attachView: function(a) {
                this.currentView = a
            },
            reset: function() {
                this.close(), delete this.$el
            }
        }), g.Region.extend = g.extend, g.RegionManager = function(a) {
            var b = a.Controller.extend({
                    constructor: function(b) {
                        this._regions = {}, a.Controller.prototype.constructor.call(this, b)
                    },
                    addRegions: function(a, b) {
                        var c = {};
                        return d.each(a, function(a, e) {
                            "string" == typeof a && (a = {
                                selector: a
                            }), a.selector && (a = d.defaults({}, a, b));
                            var f = this.addRegion(e, a);
                            c[e] = f
                        }, this), c
                    },
                    addRegion: function(b, c) {
                        var e,
                            f = d.isObject(c),
                            g = d.isString(c),
                            h = !!c.selector;
                        return e = g || f && h ? a.Region.buildRegion(c, a.Region) : d.isFunction(c) ? a.Region.buildRegion(c, a.Region) : c, this._store(b, e), this.triggerMethod("region:add", b, e), e
                    },
                    get: function(a) {
                        return this._regions[a]
                    },
                    removeRegion: function(a) {
                        var b = this._regions[a];
                        this._remove(a, b)
                    },
                    removeRegions: function() {
                        d.each(this._regions, function(a, b) {
                            this._remove(b, a)
                        }, this)
                    },
                    closeRegions: function() {
                        d.each(this._regions, function(a, b) {
                            a.close()
                        }, this)
                    },
                    close: function() {
                        this.removeRegions();
                        var b = Array.prototype.slice.call(arguments);
                        a.Controller.prototype.close.apply(this, b)
                    },
                    _store: function(a, b) {
                        this._regions[a] = b, this._setLength()
                    },
                    _remove: function(a, b) {
                        b.close(), delete this._regions[a], this._setLength(), this.triggerMethod("region:remove", a, b)
                    },
                    _setLength: function() {
                        this.length = d.size(this._regions)
                    }
                }),
                c = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
            return d.each(c, function(a) {
                b.prototype[a] = function() {
                    var b = d.values(this._regions),
                        c = [b].concat(d.toArray(arguments));
                    return d[a].apply(d, c)
                }
            }), b
        }(g), g.TemplateCache = function(a) {
            this.templateId = a
        }, d.extend(g.TemplateCache, {
            templateCaches: {},
            get: function(a) {
                var b = this.templateCaches[a];
                return b || (b = new g.TemplateCache(a), this.templateCaches[a] = b), b.load()
            },
            clear: function() {
                var a,
                    b = e(arguments),
                    c = b.length;
                if (c > 0)
                    for (a = 0; c > a; a++)
                        delete this.templateCaches[b[a]];
                else
                    this.templateCaches = {}
            }
        }), d.extend(g.TemplateCache.prototype, {
            load: function() {
                if (this.compiledTemplate)
                    return this.compiledTemplate;
                var a = this.loadTemplate(this.templateId);
                return this.compiledTemplate = this.compileTemplate(a), this.compiledTemplate
            },
            loadTemplate: function(a) {
                var b = g.$(a).html();
                return b && 0 !== b.length || f("Could not find template: '" + a + "'", "NoTemplateError"), b
            },
            compileTemplate: function(a) {
                return d.template(a)
            }
        }), g.Renderer = {
            render: function(a, b) {
                if (!a) {
                    var c = new Error("Cannot render the template since it's false, null or undefined.");
                    throw c.name = "TemplateNotFoundError", c
                }
                var d;
                return (d = "function" == typeof a ? a : g.TemplateCache.get(a))(b)
            }
        }, g.View = c.View.extend({
            constructor: function(a) {
                d.bindAll(this, "render");
                var b = Array.prototype.slice.apply(arguments);
                this.options = a || {}, c.View.prototype.constructor.apply(this, b), g.MonitorDOMRefresh(this), this.listenTo(this, "show", this.onShowCalled, this)
            },
            triggerMethod: g.triggerMethod,
            getTemplate: function() {
                return g.getOption(this, "template")
            },
            mixinTemplateHelpers: function(a) {
                a = a || {};
                var b = g.getOption(this, "templateHelpers");
                return d.isFunction(b) && (b = b.call(this)), d.extend(a, b)
            },
            configureTriggers: function() {
                if (this.triggers) {
                    var a = {},
                        b = d.result(this, "triggers");
                    return d.each(b, function(b, c) {
                        var e = d.isObject(b),
                            f = e ? b.event : b;
                        a[c] = function(a) {
                            if (a) {
                                var c = a.preventDefault,
                                    d = a.stopPropagation,
                                    g = e ? b.preventDefault : c,
                                    h = e ? b.stopPropagation : d;
                                g && c && c.apply(a), h && d && d.apply(a)
                            }
                            var i = {
                                view: this,
                                model: this.model,
                                collection: this.collection
                            };
                            this.triggerMethod(f, i)
                        }
                    }, this), a
                }
            },
            delegateEvents: function(a) {
                this._delegateDOMEvents(a), g.bindEntityEvents(this, this.model, g.getOption(this, "modelEvents")), g.bindEntityEvents(this, this.collection, g.getOption(this, "collectionEvents"))
            },
            _delegateDOMEvents: function(a) {
                a = a || this.events, d.isFunction(a) && (a = a.call(this));
                var b = {},
                    e = this.configureTriggers();
                d.extend(b, a, e), c.View.prototype.delegateEvents.call(this, b)
            },
            undelegateEvents: function() {
                var a = Array.prototype.slice.call(arguments);
                c.View.prototype.undelegateEvents.apply(this, a), g.unbindEntityEvents(this, this.model, g.getOption(this, "modelEvents")), g.unbindEntityEvents(this, this.collection, g.getOption(this, "collectionEvents"))
            },
            onShowCalled: function() {},
            close: function() {
                if (!this.isClosed) {
                    var a = this.triggerMethod("before:close");
                    a !== !1 && (this.isClosed = !0, this.triggerMethod("close"), this.unbindUIElements(), this.remove())
                }
            },
            bindUIElements: function() {
                if (this.ui) {
                    this._uiBindings || (this._uiBindings = this.ui);
                    var a = d.result(this, "_uiBindings");
                    this.ui = {}, d.each(d.keys(a), function(b) {
                        var c = a[b];
                        this.ui[b] = this.$(c)
                    }, this)
                }
            },
            unbindUIElements: function() {
                this.ui && this._uiBindings && (d.each(this.ui, function(a, b) {
                    delete this.ui[b]
                }, this), this.ui = this._uiBindings, delete this._uiBindings)
            }
        }), g.ItemView = g.View.extend({
            constructor: function() {
                g.View.prototype.constructor.apply(this, e(arguments))
            },
            serializeData: function() {
                var a = {};
                return this.model ? a = this.model.toJSON() : this.collection && (a = {
                    items: this.collection.toJSON()
                }), a
            },
            render: function() {
                this.isClosed = !1, this.triggerMethod("before:render", this), this.triggerMethod("item:before:render", this);
                var a = this.serializeData();
                a = this.mixinTemplateHelpers(a);
                var b = this.getTemplate(),
                    c = g.Renderer.render(b, a);
                return this.$el.html(c), this.bindUIElements(), this.triggerMethod("render", this), this.triggerMethod("item:rendered", this), this
            },
            close: function() {
                this.isClosed || (this.triggerMethod("item:before:close"), g.View.prototype.close.apply(this, e(arguments)), this.triggerMethod("item:closed"))
            }
        }), g.CollectionView = g.View.extend({
            itemViewEventPrefix: "itemview",
            constructor: function(a) {
                this._initChildViewStorage(), g.View.prototype.constructor.apply(this, e(arguments)), this._initialEvents()
            },
            _initialEvents: function() {
                this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this.render, this))
            },
            addChildView: function(a, b, c) {
                this.closeEmptyView();
                var d = this.getItemView(a),
                    e = this.collection.indexOf(a);
                this.addItemView(a, d, e)
            },
            onShowCalled: function() {
                this.children.each(function(a) {
                    g.triggerMethod.call(a, "show")
                })
            },
            triggerBeforeRender: function() {
                this.triggerMethod("before:render", this), this.triggerMethod("collection:before:render", this)
            },
            triggerRendered: function() {
                this.triggerMethod("render", this), this.triggerMethod("collection:rendered", this)
            },
            render: function() {
                return this.isClosed = !1, this.triggerBeforeRender(), this._renderChildren(), this.triggerRendered(), this
            },
            _renderChildren: function() {
                this.closeEmptyView(), this.closeChildren(), this.collection && this.collection.length > 0 ? this.showCollection() : this.showEmptyView()
            },
            showCollection: function() {
                var a;
                this.collection.each(function(b, c) {
                    a = this.getItemView(b), this.addItemView(b, a, c)
                }, this)
            },
            showEmptyView: function() {
                var a = this.getEmptyView();
                if (a && !this._showingEmptyView) {
                    this._showingEmptyView = !0;
                    var b = new c.Model;
                    this.addItemView(b, a, 0)
                }
            },
            closeEmptyView: function() {
                this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
            },
            getEmptyView: function() {
                return g.getOption(this, "emptyView")
            },
            getItemView: function(a) {
                var b = g.getOption(this, "itemView");
                return b || f("An `itemView` must be specified", "NoItemViewError"), b
            },
            addItemView: function(a, b, c) {
                var e = g.getOption(this, "itemViewOptions");
                d.isFunction(e) && (e = e.call(this, a, c));
                var f = this.buildItemView(a, b, e);
                this.addChildViewEventForwarding(f), this.triggerMethod("before:item:added", f), this.children.add(f), this.renderItemView(f, c), this._isShown && g.triggerMethod.call(f, "show"), this.triggerMethod("after:item:added", f)
            },
            addChildViewEventForwarding: function(a) {
                var b = g.getOption(this, "itemViewEventPrefix");
                this.listenTo(a, "all", function() {
                    var c = e(arguments);
                    c[0] = b + ":" + c[0], c.splice(1, 0, a), g.triggerMethod.apply(this, c)
                }, this)
            },
            renderItemView: function(a, b) {
                a.render(), this.appendHtml(this, a, b)
            },
            buildItemView: function(a, b, c) {
                var e = d.extend({
                    model: a
                }, c);
                return new b(e)
            },
            removeItemView: function(a) {
                var b = this.children.findByModel(a);
                this.removeChildView(b), this.checkEmpty()
            },
            removeChildView: function(a) {
                a && (this.stopListening(a), a.close ? a.close() : a.remove && a.remove(), this.children.remove(a)), this.triggerMethod("item:removed", a)
            },
            checkEmpty: function() {
                this.collection && 0 !== this.collection.length || this.showEmptyView()
            },
            appendHtml: function(a, b, c) {
                a.$el.append(b.el)
            },
            _initChildViewStorage: function() {
                this.children = new c.ChildViewContainer
            },
            close: function() {
                this.isClosed || (this.triggerMethod("collection:before:close"), this.closeChildren(), this.triggerMethod("collection:closed"), g.View.prototype.close.apply(this, e(arguments)))
            },
            closeChildren: function() {
                this.children.each(function(a) {
                    this.removeChildView(a)
                }, this), this.checkEmpty()
            }
        }), g.CompositeView = g.CollectionView.extend({
            constructor: function() {
                g.CollectionView.prototype.constructor.apply(this, e(arguments))
            },
            _initialEvents: function() {
                this.once("render", function() {
                    this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this._renderChildren, this))
                })
            },
            getItemView: function(a) {
                var b = g.getOption(this, "itemView") || this.constructor;
                return b || f("An `itemView` must be specified", "NoItemViewError"), b
            },
            serializeData: function() {
                var a = {};
                return this.model && (a = this.model.toJSON()), a
            },
            render: function() {
                this.isRendered = !0, this.isClosed = !1, this.resetItemViewContainer(), this.triggerBeforeRender();
                var a = this.renderModel();
                return this.$el.html(a), this.bindUIElements(), this.triggerMethod("composite:model:rendered"), this._renderChildren(), this.triggerMethod("composite:rendered"), this.triggerRendered(), this
            },
            _renderChildren: function() {
                this.isRendered && (g.CollectionView.prototype._renderChildren.call(this), this.triggerMethod("composite:collection:rendered"))
            },
            renderModel: function() {
                var a = {};
                a = this.serializeData(), a = this.mixinTemplateHelpers(a);
                var b = this.getTemplate();
                return g.Renderer.render(b, a)
            },
            appendHtml: function(a, b, c) {
                var d = this.getItemViewContainer(a);
                d.append(b.el)
            },
            getItemViewContainer: function(a) {
                if ("$itemViewContainer" in a)
                    return a.$itemViewContainer;
                var b,
                    c = g.getOption(a, "itemViewContainer");
                if (c) {
                    var e = d.isFunction(c) ? c() : c;
                    b = a.$(e), b.length <= 0 && f("The specified `itemViewContainer` was not found: " + a.itemViewContainer, "ItemViewContainerMissingError")
                } else
                    b = a.$el;
                return a.$itemViewContainer = b, b
            },
            resetItemViewContainer: function() {
                this.$itemViewContainer && delete this.$itemViewContainer
            }
        }), g.Layout = g.ItemView.extend({
            regionType: g.Region,
            constructor: function(a) {
                a = a || {}, this._firstRender = !0, this._initializeRegions(a), g.ItemView.prototype.constructor.call(this, a)
            },
            render: function() {
                this.isClosed && this._initializeRegions(), this._firstRender ? this._firstRender = !1 : this.isClosed || this._reInitializeRegions();
                var a = Array.prototype.slice.apply(arguments),
                    b = g.ItemView.prototype.render.apply(this, a);
                return b
            },
            close: function() {
                if (!this.isClosed) {
                    this.regionManager.close();
                    var a = Array.prototype.slice.apply(arguments);
                    g.ItemView.prototype.close.apply(this, a)
                }
            },
            addRegion: function(a, b) {
                var c = {};
                return c[a] = b, this._buildRegions(c)[a]
            },
            addRegions: function(a) {
                return this.regions = d.extend({}, this.regions, a), this._buildRegions(a)
            },
            removeRegion: function(a) {
                return delete this.regions[a], this.regionManager.removeRegion(a)
            },
            _buildRegions: function(a) {
                var b = this,
                    c = {
                        regionType: g.getOption(this, "regionType"),
                        parentEl: function() {
                            return b.$el
                        }
                    };
                return this.regionManager.addRegions(a, c)
            },
            _initializeRegions: function(a) {
                var b;
                this._initRegionManager(), b = d.isFunction(this.regions) ? this.regions(a) : this.regions || {}, this.addRegions(b)
            },
            _reInitializeRegions: function() {
                this.regionManager.closeRegions(), this.regionManager.each(function(a) {
                    a.reset()
                })
            },
            _initRegionManager: function() {
                this.regionManager = new g.RegionManager, this.listenTo(this.regionManager, "region:add", function(a, b) {
                    this[a] = b, this.trigger("region:add", a, b)
                }), this.listenTo(this.regionManager, "region:remove", function(a, b) {
                    delete this[a], this.trigger("region:remove", a, b)
                })
            }
        }), g.AppRouter = c.Router.extend({
            constructor: function(a) {
                c.Router.prototype.constructor.apply(this, e(arguments)), this.options = a || {};
                var b = g.getOption(this, "appRoutes"),
                    d = this._getController();
                this.processAppRoutes(d, b)
            },
            appRoute: function(a, b) {
                var c = this._getController();
                this._addAppRoute(c, a, b)
            },
            processAppRoutes: function(a, b) {
                if (b) {
                    var c = d.keys(b).reverse();
                    d.each(c, function(c) {
                        this._addAppRoute(a, c, b[c])
                    }, this)
                }
            },
            _getController: function() {
                return g.getOption(this, "controller")
            },
            _addAppRoute: function(a, b, c) {
                var e = a[c];
                if (!e)
                    throw new Error("Method '" + c + "' was not found on the controller");
                this.route(b, c, d.bind(e, a))
            }
        }), g.Application = function(a) {
            this._initRegionManager(), this._initCallbacks = new g.Callbacks, this.vent = new c.Wreqr.EventAggregator, this.commands = new c.Wreqr.Commands, this.reqres = new c.Wreqr.RequestResponse, this.submodules = {}, d.extend(this, a), this.triggerMethod = g.triggerMethod
        }, d.extend(g.Application.prototype, c.Events, {
            execute: function() {
                var a = Array.prototype.slice.apply(arguments);
                this.commands.execute.apply(this.commands, a)
            },
            request: function() {
                var a = Array.prototype.slice.apply(arguments);
                return this.reqres.request.apply(this.reqres, a)
            },
            addInitializer: function(a) {
                this._initCallbacks.add(a)
            },
            start: function(a) {
                this.triggerMethod("initialize:before", a), this._initCallbacks.run(a, this), this.triggerMethod("initialize:after", a), this.triggerMethod("start", a)
            },
            addRegions: function(a) {
                return this._regionManager.addRegions(a)
            },
            closeRegions: function() {
                this._regionManager.closeRegions()
            },
            removeRegion: function(a) {
                this._regionManager.removeRegion(a)
            },
            getRegion: function(a) {
                return this._regionManager.get(a)
            },
            module: function(a, b) {
                var c = e(arguments);
                return c.unshift(this), g.Module.create.apply(g.Module, c)
            },
            _initRegionManager: function() {
                this._regionManager = new g.RegionManager, this.listenTo(this._regionManager, "region:add", function(a, b) {
                    this[a] = b
                }), this.listenTo(this._regionManager, "region:remove", function(a, b) {
                    delete this[a]
                })
            }
        }), g.Application.extend = g.extend, g.Module = function(a, b) {
            this.moduleName = a, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = b, this.startWithParent = !0, this.triggerMethod = g.triggerMethod
        }, d.extend(g.Module.prototype, c.Events, {
            addInitializer: function(a) {
                this._initializerCallbacks.add(a)
            },
            addFinalizer: function(a) {
                this._finalizerCallbacks.add(a)
            },
            start: function(a) {
                this._isInitialized || (d.each(this.submodules, function(b) {
                    b.startWithParent && b.start(a)
                }), this.triggerMethod("before:start", a), this._initializerCallbacks.run(a, this), this._isInitialized = !0, this.triggerMethod("start", a))
            },
            stop: function() {
                this._isInitialized && (this._isInitialized = !1, g.triggerMethod.call(this, "before:stop"), d.each(this.submodules, function(a) {
                    a.stop()
                }), this._finalizerCallbacks.run(b, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), g.triggerMethod.call(this, "stop"))
            },
            addDefinition: function(a, b) {
                this._runModuleDefinition(a, b)
            },
            _runModuleDefinition: function(a, b) {
                if (a) {
                    var e = d.flatten([this, this.app, c, g, g.$, d, b]);
                    a.apply(this, e)
                }
            },
            _setupInitializersAndFinalizers: function() {
                this._initializerCallbacks = new g.Callbacks, this._finalizerCallbacks = new g.Callbacks
            }
        }), d.extend(g.Module, {
            create: function(a, b, c) {
                var f = a,
                    g = e(arguments);
                g.splice(0, 3), b = b.split(".");
                var h = b.length,
                    i = [];
                return i[h - 1] = c, d.each(b, function(b, c) {
                    var d = f;
                    f = this._getModule(d, b, a), this._addModuleDefinition(d, f, i[c], g)
                }, this), f
            },
            _getModule: function(a, b, c, d, e) {
                var f = a[b];
                return f || (f = new g.Module(b, c), a[b] = f, a.submodules[b] = f), f
            },
            _addModuleDefinition: function(a, b, c, e) {
                var f,
                    g;
                d.isFunction(c) ? (f = c, g = !0) : d.isObject(c) ? (f = c.define, g = c.startWithParent) : g = !0, f && b.addDefinition(f, e), b.startWithParent = b.startWithParent && g, b.startWithParent && !b.startWithParentIsConfigured && (b.startWithParentIsConfigured = !0, a.addInitializer(function(a) {
                    b.startWithParent && b.start(a)
                }))
            }
        }), g
    })(this, Backbone, _);
    !function() {
        "use strict";
        function b() {
            $(document).on("keyup", function(a) {
                var b = c.mix.get("playing"),
                    d = c.mix.get("position");
                switch (a.keyCode) {
                case 32:
                    b ? c.mix.pause() : c.mix.play();
                    break;
                case 82:
                    c.mix.play(0), b || c.mix.pause();
                    break;
                case 37:
                    b && c.mix.play(d - 10);
                    break;
                case 39:
                    b && c.mix.play(d + 10)
                }
            }), $(a).on("mousemove touchmove", function(a) {
                c.vent.trigger("mixer-mousemove", a), "touchmove" === a.type && a.preventDefault();
            }), $(a).on("mouseup touchend", function(a) {
                c.vent.trigger("mixer-mouseup", a)
            }), $("#master .fader").on("mousedown touchstart", c.enableDrag), $("#master .fader").on("dblclick", c.resetFader), c.vent.on("mixer-mouseup", c.disableDrag), c.vent.on("mixer-mousemove", c.dragHandler)
        }
        var c = a.App = new Backbone.Marionette.Application,
            d = Backbone.Marionette.TemplateCache;
        d.prototype.compileTemplate = function(a) {
            return Mustache.compile(a)
        }, c.tracks = 0, c.loaded = 0, c.ready = !1, c.vuLeftData = [], c.vuRightData = [], c.ac = function(a) {
            var b = a.AudioContext || a.webkitAudioContext || a.mozAudioContext;
            return new b
        }(a), c.vent.on("loaded", function() {
            var a;
            ++c.loaded === c.tracks && (c.ready = !0, c.vent.trigger("ready"), a = c.util.scale(c.mix.get("gain"), 0, 1.5, 314, 0), $("#master .fader").css("top", a + "px"))
        }), c.vent.on("ready", function() {
            c.trackViews = new c.Views.Tracks({
                collection: c.mix.attributes.tracks
            }), c.controlsView = new c.Views.Controls({
                model: c.mix
            }), c.vuLeft = $(".needle.left"), c.vuRight = $(".needle.right"), c.trackViews.render(), b(), "ontouchstart" in a || c.mix.play()
        }), c.vent.on("anim-tick", function() {
            var b,
                d;
            !c.vuLeft || !c.vuRight || a.innerWidth <= 1200 || (c.mix.levels(), b = c.mix.get("dBFSLeft"), d = c.mix.get("dBFSRight"), b = Math.max(-20, c.util.scale(b + 20, -20, 0, 0, 60)), d = Math.max(-20, c.util.scale(d + 20, -20, 0, 0, 60)), c.vuLeftData.unshift(b), c.vuRightData.unshift(d), c.vuLeftData.length >= 18 && (c.vuLeftData.length = 18), c.vuRightData.length > 18 && (c.vuRightData.length = 18), b = c.vuLeftData.reduce(function(a, b) {
                return a + b
            }, 0) / c.vuLeftData.length, d = c.vuRightData.reduce(function(a, b) {
                return a + b
            }, 0) / c.vuRightData.length, c.vuLeft.css("transform", "rotate(" + b + "deg)"), c.vuRight.css("transform", "rotate(" + d + "deg)"))
        }), c.dragState = {
            x: null,
            y: null,
            px: null,
            prop: null,
            $target: null
        }, c.enableDrag = function(a) {
            var b,
                d = $(a.currentTarget);
            d.hasClass("fader") && (c.faderCanDrag = !0, c.dragState.px = parseInt(d.css("top"), 10)), "touchstart" === a.type && a.originalEvent.changedTouches ? (b = a.originalEvent.changedTouches[0], c.dragState.x = b.pageX, c.dragState.y = b.pageY) : (c.dragState.x = a.pageX, c.dragState.y = a.pageY), c.dragState.$target = d
        }, c.disableDrag = function() {
            c.faderCanDrag && (c.faderCanDrag = !1)
        }, c.dragHandler = function(a) {
            if (c.faderCanDrag) {
                var b = "touchmove" === a.type && a.originalEvent.changedTouches,
                    d = b && b[0] ? b[0].pageY : a.pageY,
                    e = c.dragState.y,
                    f = d - e,
                    g = c.dragState.px + f;
                g = Math.min(314, g), g = Math.max(0, g), c.dragState.$target.css("top", g + "px"), c.mix.set("gain", c.util.scale(g, 0, 314, 1.5, 0))
            }
        }, c.resetFader = function() {
            var a = c.util.scale(1, 0, 1.5, 314, 0);
            $("#master .fader").css("top", a + "px"), c.mix.set("gain", 1)
        }, $(function() {
            function b() {
                c.mix.fetch(), c.start()
            }
            var d,
                e,
                f = location.hash.substr(1);
            c.mix = new c.Models.Mix, location.hash ? $.ajax({
                url: "" + f, //http://api.myjson.com/bins
                type: "GET",
                dataType: "json",
                success: function(f) {
                    try {
                        d = new Blob([JSON.stringify(f)]), e = a.URL.createObjectURL(d), c.mix.url = e
                    } catch (g) {}
                    b()
                },
                error: b
            }) : b()
        })
    }(), App.module("Loader", function(a, b, c, d, e, f) {
        "use strict";
        var g,
            h,
            i,
            j,
            k;
        i = function() {
            g = e("#loader"), h = g.find(".loader-bar"), j()
        }, j = function() {
            b.vent.on("loaded", k), b.vent.on("ready", function() {
                g.hide()
            })
        }, k = function() {
            var a = (b.loaded + 1) / b.tracks * 100;
            a = Math.min(a, 100), h.css("width", a + "%")
        }, i()
    }), App.module("util", function(a, b, c, d, e, f) {
        "use strict";
        a.scale = function(a, b, c, d, e) {
            return (a - b) * (e - d) / (c - b) + d
        }, a.dBToPercent = function(b) {
            return a.scale(b, -192, 0, 0, 100)
        }, a.percentTodB = function(b) {
            return a.scale(b, 0, 100, -192, 0)
        }, a.samplesToSeconds = function(a) {
            return a / b.ac.sampleRate
        }, a.secondsToSamples = function(a, c) {
            return a * b.ac.sampleRate
        }, a.cloneFloat32Array = function(a) {
            var b = new Float32Array(a.length);
            return b.set(a), b
        }, a.createAudioBuffer = function() {
            for (var a = f.toArray(arguments), c = b.ac.sampleRate, d = a.length, e = Math.max.apply(Math, f.map(a, function(a) {
                    return a.length
                })), g = b.ac.createBuffer(d, e, c); d--;)
                g.getChannelData(d).set(a[d]);
            return g
        }, a.cloneAudioBuffer = function(a, c, d) {
            for (var e, f = a.numberOfChannels, g = b.ac.sampleRate, h = c || 0, i = d || a.length, j = i - h, k = b.ac.createBuffer(f, j, g); f--;)
                e = a.getChannelData(f).subarray(c, d), k.getChannelData(f).set(e);
            return k
        }, a.createBufferSource = function(a) {
            var c = b.ac.createBufferSource();
            return c.buffer = a, c
        }, a.fetchAudioAsset = function(a, c) {
            var d = new XMLHttpRequest;
            d.open("GET", a, !0), d.responseType = "arraybuffer", d.addEventListener("load", function() {
                b.ac.decodeAudioData(d.response, function(a) {
                    c(a)
                })
            }, !1), d.send()
        }, a.dBFS = function(a) {
            for (var b, c, d = a.length, e = 0, f = 0; d > f;)
                e += a[f] * a[f++];
            return b = Math.sqrt(e / d), c = 20 * (Math.log(b) / Math.LN10), Math.max(-192, c)
        }, a.formatTime = function(a) {
            var b = Math.floor(1e3 * a % 1e3),
                c = Math.floor(a % 60),
                d = Math.floor(1e3 * a / 6e4 % 60),
                e = "";
            return c = 10 > c ? "0" + c : c, d = 10 > d ? "0" + d : d, b = 10 > b ? "0" + b : b, e += d + ":", e += c + ":", e += b.toString().slice(0, 2)
        }
    }), App.module("Models", function(a, b, c, d, e, f) {
        "use strict";
        a.Mix = c.Model.extend({
            url: "mix.json", // mix.json.php switch for dynamic .. 
            defaults: {
                name: "Mix",
                gain: 0.72,
                position: 0,
                minTime: 0,
                maxTime: 1 / 0,
                startTime: 0,
                playing: !1,
                dBFSLeft: -32,
                dBFSRight: -32,
                duration: 1 / 0
            },
            initialize: function() {
                this.nodes = {}, this.createNodes(), this.setGain(), this.updatePosition(), b.vent.on("solo", this.soloMute.bind(this)), b.vent.on("unsolo", this.soloMute.bind(this)), b.vent.on("anim-tick", this.updatePosition.bind(this)), this.on("change:gain", this.setGain, this), this.on("change:gain", this.persist, this)
            },
            createNodes: function() {
                return this.fftSize = 2048, this.timeDataL = new Uint8Array(this.fftSize), this.timeDataR = new Uint8Array(this.fftSize), this.nodes.gain = b.ac.createGain(), this.nodes.splitter = b.ac.createChannelSplitter(2), this.nodes.analyserL = b.ac.createAnalyser(), this.nodes.analyserR = b.ac.createAnalyser(), this.nodes.gain.connect(this.nodes.splitter), this.nodes.splitter.connect(this.nodes.analyserL, 0, 0), this.nodes.splitter.connect(this.nodes.analyserR, 1, 0), this.nodes.gain.connect(b.ac.destination), this.nodes.analyserL.smoothingTimeConstant = 1, this.nodes.analyserR.smoothingTimeConstant = 1, this
            },
            setGain: function() {
                return this.nodes.gain.gain.value = this.get("gain"), this
            },
            play: function(a) {
                var c = b.ac.currentTime,
                    d = this.get("position"),
                    e = this.get("tracks").maxLength();
                if (!b.ready)
                    throw new Error("Cannot play before App.ready");
                return "number" == typeof a && this.set("position", d = Math.max(a, this.get("minTime"))), this.set({
                    startTime: c - d,
                    playing: !0,
                    duration: e
                }), this.get("tracks").play(d), this
            },
            pause: function() {
                return this.get("tracks").pause(), this.set("playing", !1), b.vent.trigger("mix-pause"), this
            },
            exactTime: function() {
                var a = b.ac.currentTime,
                    c = this.get("playing"),
                    d = this.get("startTime"),
                    e = this.get("position"),
                    f = a - d;
                return c ? f : e
            },
            updatePosition: function() {
                var a = this.exactTime();
                this.get("playing");
                return a > Math.min(this.get("maxTime"), this.get("duration")) ? this.play(0).pause() : this.set("position", a, {
                    silent: !0
                }), this
            },
            soloMute: function() {
                var a,
                    b,
                    c;
                return this.get("tracks") && (a = this.get("tracks").where({
                    soloed: !1
                }), b = this.get("tracks").where({
                    soloed: !0
                }), c = this.get("tracks").where({
                    _muted: !0
                }), b.length && a.forEach(function(a) {
                    a._mute()
                }), b.length || c.forEach(function(a) {
                    a._unmute()
                })), this
            },
            levels: function(a) {
                var c = this.get("playing"),
                    d = this.timeDataL.length,
                    e = new Array(d),
                    f = new Array(d),
                    g = 0;
                for (this.nodes.analyserL.getByteTimeDomainData(this.timeDataL), this.nodes.analyserR.getByteTimeDomainData(this.timeDataR); d > g; ++g)
                    f[g] = 2 * this.timeDataL[g] / 255 - 1, e[g] = 2 * this.timeDataR[g] / 255 - 1;
                return f = b.util.dBFS(f), e = b.util.dBFS(e), this.set({
                    dBFSLeft: c ? f : -192,
                    dBFSRight: c ? e : -192
                }), this
            },
            parse: function(a) {
                return a.tracks = new b.Collections.Tracks(a.tracks), a.position = a.position || a.minTime || 0, b.tracks = a.tracks.length, f.extend({}, a)
            },
            toJSON: function() {
                var a = f.extend({}, this.attributes),
                    b = f.map(this.get("tracks").models, function(a) {
                        return a.toJSON()
                    });
                return a.tracks = b, delete a.dBFSLeft, delete a.dBFSRight, delete a.startTime, delete a.binURI, a
            },
            persist: f.debounce(function() {
                var a = b.mix,
                    c = a.toJSON(),
                    d = a.get("binURI");
                delete c.position, delete c.playing, delete c.duration, delete c.binURI, c = JSON.stringify(c), e.ajax({
                    type: d ? "PUT" : "POST",
                    url: d || "", // http://api.myjson.com/bins
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: c,
                    success: function(b) {
                        b.uri && (a.set("binURI", b.uri, {
                            silent: !0
                        }), location.hash = b.uri.split("/").pop())
                    }
                })
            }, 500)
        })
    }), App.module("Models", function(a, b, c, d, e, f) {
        "use strict";
        a.Track = c.Model.extend({
            defaults: {
                name: "Track",
                gain: 1,
                pan: 0,
                muted: !1,
                _muted: !1,
                soloed: !1,
                dBFS: -48,
                afl: !0,
                duration: 1 / 0
            },
            initialize: function() {
                this.nodes = {}, this.createNodes(), this.setValues(), this.fetchAudio(), this.fftSize = 2048, this.timeData = new Uint8Array(this.fftSize), this.on("change:gain", this.setGain, this), this.on("change:pan", this.setPanning, this), this.on("change:gain change:pan change:soloed change:muted change:afl", b.mix.persist, b.mix)
            },
            createNodes: function() {
                return this.nodes.mute = b.ac.createGain(), this.nodes._mute = b.ac.createGain(), this.nodes.panLeft = b.ac.createGain(), this.nodes.panRight = b.ac.createGain(), this.nodes.merger = b.ac.createChannelMerger(2), this.nodes.analyser = b.ac.createAnalyser(), this.nodes.gain = b.ac.createGain(), this.nodes._mute.connect(this.nodes.mute), this.nodes.mute.connect(this.nodes.panLeft), this.nodes.mute.connect(this.nodes.panRight), this.nodes.panLeft.connect(this.nodes.merger, 0, 0), this.nodes.panRight.connect(this.nodes.merger, 0, 1), this.nodes.merger.connect(this.nodes.analyser), this.nodes.merger.connect(this.nodes.gain), this.nodes.gain.connect(b.mix.nodes.gain), this.nodes.analyser.smoothingTimeConstant = 1, this
            },
            setValues: function() {
                return this.setGain(), this.setPanning(), this.get("muted") && this.mute(), this.get("_muted") && this._mute(), this.get("soloed") && this.solo(), this
            },
            setGain: function() {
                return this.nodes.gain.gain.value = this.get("gain"), this
            },
            setPanning: function() {
                return this.nodes.panLeft.gain.value = this.get("pan") * -.5 + .5, this.nodes.panRight.gain.value = .5 * this.get("pan") + .5, this
            },
            fetchAudio: function() {
                return b.util.fetchAudioAsset(this.get("path"), function(a) {
                    this.buffer = a, this.set("duration", a.duration), b.vent.trigger("loaded")
                }.bind(this)), this
            },
            connect: function() {
                return this.nodes.source = b.util.createBufferSource(this.buffer), this.nodes.source.connect(this.nodes._mute), this.nodes.source.loop = true, this
            },
            play: function(a) {
                return this.pause().connect(), this.nodes.source.start(b.ac.currentTime, a), this
            },
            pause: function() {
                return this.nodes.source && (this.nodes.source.stop(0), this.nodes.source = null), this
            },
            mute: function() {
                return this.nodes.mute.gain.value = 0, this.set("muted", !0), this.get("soloed") && this.unsolo(), this
            },
            unmute: function() {
                return this.nodes.mute.gain.value = 1, this.set("muted", !1), this
            },
            _mute: function() {
                return this.nodes._mute.gain.value = 0, this.set("_muted", !0), this
            },
            _unmute: function() {
                return this.nodes._mute.gain.value = 1, this.set("_muted", !1), this
            },
            solo: function() {
                return this.unmute(), this._unmute(), this.set("soloed", !0), b.vent.trigger("solo"), this
            },
            unsolo: function() {
                return this.set("soloed", !1), b.vent.trigger("unsolo"), this
            },
            levels: function(a) {
                var c,
                    d = b.mix.get("playing"),
                    e = this.timeData.length,
                    f = new Array(e),
                    g = 0;
                for (this.nodes.analyser.getByteTimeDomainData(this.timeData); e > g; ++g)
                    f[g] = 2 * this.timeData[g] / 255 - 1;
                return c = b.util.dBFS(f), this.set("dBFS", d ? c : this.get("dBFS") - .8), this
            },
            toJSON: function() {
                var a = f.extend({}, this.attributes);
                return delete a.dBFS, a
            }
        })
    }), App.module("Collections", function(a, b, c, d, e, f) {
        "use strict";
        a.Tracks = c.Collection.extend({
            model: b.Models.Track,
            play: function(a) {
                return this.each(function(b) {
                    b.play(a)
                }), this
            },
            pause: function() {
                return this.each(function(a) {
                    a.pause()
                }), this
            },
            maxLength: function() {
                var a = b.mix.get("tracks").map(function(a) {
                    return a.get("duration")
                });
                return Math.max.apply(Math, a)
            }
        })
    }), App.module("Views", function(b, c, d, e, f, g) {
        "use strict";
        b.Track = e.ItemView.extend({
            template: "#tmpl-track",
            events: {
                "mousedown .fader": "enableDrag",
                "touchstart .fader": "enableDrag",
                "dblclick .fader": "resetFader",
                "mousedown .panner": "enableDrag",
                "touchstart .panner": "enableDrag",
                "dblclick .panner": "resetPanner",
                "click .mute": "mute",
                "touchstart .mute": "mute",
                "click .solo": "solo",
                "touchstart .solo": "solo",
                "click .afl": "afl",
                "touchstart .afl": "afl"
            },
            ui: {
                canvas: ".meter"
            },
            modelEvents: {
                "change:muted": "render",
                "change:soloed": "render",
                "change:afl": "render"
            },
            initialize: function() {
                c.vent.on("mixer-mouseup", this.disableDrag.bind(this)), c.vent.on("mixer-mousemove", this.dragHandler.bind(this)), c.vent.on("anim-tick", this.drawMeter.bind(this)), c.vent.on("mix-pause", function() {
                    setTimeout(function() {
                        this.drawMeter()
                    }.bind(this), 50)
                }.bind(this))
            },
            onBeforeRender: function() {
                this.$el.addClass("channel")
            },
            onRender: function() {
                var a,
                    b = this.ui.canvas[0],
                    c = b.height,
                    d = b.width,
                    e = 180,
                    f = 0;
                for (this.offscreen = document.createElement("canvas"), this.offscreen.width = b.width, this.offscreen.height = b.height, a = this.offscreen.getContext("2d"), a.fillStyle = "hsl(" + e + ", 100%, 40%)"; c > f;)
                    e += .6 * (1 - f / c), a.fillStyle = "hsl(" + e + ", 100%, 40%)", a.fillRect(0, c - f, d, 2), f += 3
            },
            serializeData: function() {
                var a = this.model.toJSON();
                return a.gain = c.util.scale(Math.sqrt(a.gain), 0, 1.15, 220, 0), a.pan = c.util.scale(a.pan, -1, 1, -150, 150), a.muted = a.muted ? "active" : "", a.soloed = a.soloed ? "active" : "", a.afl = a.afl ? "" : "active", a
            },
            faderCanDrag: !1,
            pannerCanDrag: !1,
            dragState: {
                x: null,
                y: null,
                px: null,
                prop: null,
                $target: null
            },
            enableDrag: function(a) {
                var b,
                    c = f(a.currentTarget);
                c.hasClass("fader") ? (this.faderCanDrag = !0, this.dragState.px = parseInt(c.css("top"), 10)) : c.hasClass("panner") && (this.pannerCanDrag = !0, this.dragState.width = parseInt(c.width()), this.dragState.height = parseInt(c.height()), this.dragState.offset = c.offset()), "touchstart" === a.type && a.originalEvent.changedTouches ? (b = a.originalEvent.changedTouches[0], this.dragState.x = b.pageX, this.dragState.y = b.pageY) : (this.dragState.x = a.pageX, this.dragState.y = a.pageY), this.dragState.$target = c
            },
            disableDrag: function(a) {
                (this.faderCanDrag || this.pannerCanDrag) && (this.faderCanDrag = !1, this.pannerCanDrag = !1)
            },
            dragFader: function(a, b) {
                var d = "touchmove" === a.type && a.originalEvent.changedTouches,
                    e = d && d[0] ? d[0].pageY : a.pageY,
                    f = this.dragState.y,
                    g = e - f,
                    h = this.dragState.px + g;
                h = Math.min(b, h), h = Math.max(0, h), this.dragState.$target.css("top", h + "px"), this.model.set("gain", Math.pow(c.util.scale(h, 0, 220, 1.15, 0), 2))
            },
            dragPanner: function(a) {
                var b = "touchmove" === a.type && a.originalEvent.changedTouches,
                    d = this.dragState.width,
                    e = this.dragState.height,
                    f = this.dragState.offset,
                    g = b && b[0] ? b[0].pageY : a.pageY,
                    h = b && b[0] ? b[0].pageX : a.pageX,
                    i = f.left + d / 2 - h,
                    j = f.top + e / 2 - g,
                    k = -1 * Math.atan2(i, j) * (180 / Math.PI);
                k >= -150 && 150 >= k && (this.dragState.$target.css("transform", "rotate(" + k + "deg)"), this.model.set("pan", c.util.scale(k, -150, 150, -1, 1)))
            },
            dragHandler: function(a) {
                this.faderCanDrag ? this.dragFader(a, 220) : this.pannerCanDrag && this.dragPanner(a)
            },
            resetFader: function() {
                var a = c.util.scale(1, 0, 1.15, 220, 0);
                this.$el.find(".fader").css("top", a + "px"), this.model.set("gain", 1)
            },
            resetPanner: function() {
                this.$el.find(".panner").css("transform", "rotate(0deg)"), this.model.set("pan", 0)
            },
            mute: function(b) {
                var c;
                b && "ontouchstart" in a && "click" === b.type || (c = this.model.get("muted"), c ? this.model.unmute() : this.model.mute())
            },
            solo: function(b) {
                var c;
                b && "ontouchstart" in a && "click" === b.type || (c = this.model.get("soloed"), c ? this.model.unsolo() : this.model.solo())
            },
            afl: function(b) {
                b && "ontouchstart" in a && "click" === b.type || this.model.set("afl", !this.model.get("afl"))
            },
            drawMeter: function() {
                if ("string" != typeof this.ui.canvas) {
                    this.model.levels();
                    var a,
                        b = this.ui.canvas[0],
                        d = b.getContext("2d"),
                        e = this.model.attributes.dBFS,
                        f = this.model.attributes.gain,
                        g = this.model.attributes.afl,
                        h = this.cHeight || (this.cHeight = b.height),
                        i = this.cWidth || (this.cWidth = b.width),
                        j = c.util.scale(-e, 48, 0, 0, h),
                        k = Date.now(),
                        l = this.peakTime || -(1 / 0),
                        m = this.peak || 0,
                        n = k - l;
                    g && (j *= f), j = Math.max(0, j - j % 3), this.dirty && (d.clearRect(0, 0, i, h), this.dirty = !1), j >= 3 && (d.drawImage(this.offscreen, 0, h - j, i, j, 0, h - j, i, j), this.dirty = !0), j >= m && (m = this.peak = j, this.peakTime = k, n = 0), 1e3 > n && m >= 1 ? (a = 650 > n ? 1 : 1 - (n - 650) / 350, d.fillStyle = "rgba(238,119,85," + a + ")", d.fillRect(0, h - m - 1, i, 1), this.dirty = !0) : (this.peak = 0, this.peakTime = k)
                }
            }
        })
    }), App.module("Views", function(b, c, d, e, f, g) {
        "use strict";
        b.Tracks = e.CollectionView.extend({
            itemView: b.Track,
            el: "#mixer",
            initialize: function() {
                this.animTick(), this.unhide()
            },
            animTick: function() {
                c.vent.trigger("anim-tick"), a.requestAnimationFrame(this.animTick.bind(this))
            },
            unhide: function() {
                this.$el.css("visibility", "visible")
            }
        })
    }), App.module("Views", function(b, c, d, e, f, g) {
        "use strict";
        b.Controls = e.ItemView.extend({
            template: "#tmpl-controls",
            el: "#controls",
            events: {
                "click .play": "toggle",
                "touchstart .play": "toggle",
                "click .start": "start",
                "touchstart .start": "start",
                "click .rw": "rewind",
                "touchstart .rw": "rewind",
                "click .ff": "fastForward",
                "touchstart .ff": "fastForward"
            },
            ui: {
                clock: ".clock"
            },
            modelEvents: {
                "change:playing": "render"
            },
            initialize: function() {
                this.unhide(), c.vent.on("anim-tick", function() {
                    this.updatePosition()
                }.bind(this)), this.render()
            },
            serializeData: function() {
                var a = this.model.toJSON();
                return a.playing = a.playing ? "" : "paused", a
            },
            toggle: function(b) {
                b && "ontouchstart" in a && "click" === b.type || (this.model.get("playing") ? this.model.pause() : this.model.play())
            },
            start: function(b) {
                b && "ontouchstart" in a && "click" === b.type || (this.model.play(0), this.model.get("playing") || this.model.pause())
            },
            rewind: function(b) {
                var c;
                b && "ontouchstart" in a && "click" === b.type || (c = this.model.get("position"), this.model.get("playing") ? this.model.play(c - 10) : this.model.set("position", c - 10))
            },
            fastForward: function(b) {
                var c;
                b && "ontouchstart" in a && "click" === b.type || (c = this.model.get("position"), this.model.get("playing") ? this.model.play(c + 10) : this.model.set("position", c + 10))
            },
            updatePosition: function() {
                var a = this.ui.clock[0],
                    b = a.getContext("2d"),
                    d = this.model.attributes.position,
                    e = c.util.formatTime(d),
                    f = ["8", "8", ":", "8", "8", ":", "8", "8"],
                    g = e.split(""),
                    h = 0,
                    i = 78;
                for (b.clearRect(0, 0, a.width, a.height), b.font = '76px "digital-7"', b.textAlign = "right", b.fillStyle = "hsla(215, 77%, 76%, 0.085)"; 8 > h;)
                    b.fillText(f[h], i, 88), i += ":" === f[++h] ? 20 : 40;
                for (h = 0, i = 78, b.fillStyle = "hsl(215, 77%, 76%)"; 8 > h;)
                    b.fillText(g[h], i, 88), i += ":" === g[++h] ? 20 : 40
            },
            unhide: function() {
                this.$el.show()
            }
        })
    })
}(this);