"use strict";
var ol = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function ll(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

var ul = {exports: {}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
(function (t) {
    (function (n, a) {
        t.exports = n.document ? a(n, !0) : function (o) {
            if (!o.document) throw new Error("jQuery requires a window with a document");
            return a(o)
        }
    })(typeof window < "u" ? window : ol, function (n, a) {
        var o = [], e = Object.getPrototypeOf, i = o.slice, f = o.flat ? function (r) {
                return o.flat.call(r)
            } : function (r) {
                return o.concat.apply([], r)
            }, h = o.push, y = o.indexOf, C = {}, R = C.toString, Y = C.hasOwnProperty, $ = Y.toString, Ce = $.call(Object),
            K = {}, re = function (s) {
                return typeof s == "function" && typeof s.nodeType != "number" && typeof s.item != "function"
            }, me = function (s) {
                return s != null && s === s.window
            }, de = n.document, te = {type: !0, src: !0, nonce: !0, noModule: !0};

        function St(r, s, l) {
            l = l || de;
            var u, p, g = l.createElement("script");
            if (g.text = r, s) for (u in te) p = s[u] || s.getAttribute && s.getAttribute(u), p && g.setAttribute(u, p);
            l.head.appendChild(g).parentNode.removeChild(g)
        }

        function Dt(r) {
            return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? C[R.call(r)] || "object" : typeof r
        }

        var Ot = "3.7.1", pn = /HTML$/i, c = function (r, s) {
            return new c.fn.init(r, s)
        };
        c.fn = c.prototype = {
            jquery: Ot, constructor: c, length: 0, toArray: function () {
                return i.call(this)
            }, get: function (r) {
                return r == null ? i.call(this) : r < 0 ? this[r + this.length] : this[r]
            }, pushStack: function (r) {
                var s = c.merge(this.constructor(), r);
                return s.prevObject = this, s
            }, each: function (r) {
                return c.each(this, r)
            }, map: function (r) {
                return this.pushStack(c.map(this, function (s, l) {
                    return r.call(s, l, s)
                }))
            }, slice: function () {
                return this.pushStack(i.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, even: function () {
                return this.pushStack(c.grep(this, function (r, s) {
                    return (s + 1) % 2
                }))
            }, odd: function () {
                return this.pushStack(c.grep(this, function (r, s) {
                    return s % 2
                }))
            }, eq: function (r) {
                var s = this.length, l = +r + (r < 0 ? s : 0);
                return this.pushStack(l >= 0 && l < s ? [this[l]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: h, sort: o.sort, splice: o.splice
        }, c.extend = c.fn.extend = function () {
            var r, s, l, u, p, g, m = arguments[0] || {}, D = 1, b = arguments.length, M = !1;
            for (typeof m == "boolean" && (M = m, m = arguments[D] || {}, D++), typeof m != "object" && !re(m) && (m = {}), D === b && (m = this, D--); D < b; D++) if ((r = arguments[D]) != null) for (s in r) u = r[s], !(s === "__proto__" || m === u) && (M && u && (c.isPlainObject(u) || (p = Array.isArray(u))) ? (l = m[s], p && !Array.isArray(l) ? g = [] : !p && !c.isPlainObject(l) ? g = {} : g = l, p = !1, m[s] = c.extend(M, g, u)) : u !== void 0 && (m[s] = u));
            return m
        }, c.extend({
            expando: "jQuery" + (Ot + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (r) {
                throw new Error(r)
            }, noop: function () {
            }, isPlainObject: function (r) {
                var s, l;
                return !r || R.call(r) !== "[object Object]" ? !1 : (s = e(r), s ? (l = Y.call(s, "constructor") && s.constructor, typeof l == "function" && $.call(l) === Ce) : !0)
            }, isEmptyObject: function (r) {
                var s;
                for (s in r) return !1;
                return !0
            }, globalEval: function (r, s, l) {
                St(r, {nonce: s && s.nonce}, l)
            }, each: function (r, s) {
                var l, u = 0;
                if (Lt(r)) for (l = r.length; u < l && s.call(r[u], u, r[u]) !== !1; u++) ; else for (u in r) if (s.call(r[u], u, r[u]) === !1) break;
                return r
            }, text: function (r) {
                var s, l = "", u = 0, p = r.nodeType;
                if (!p) for (; s = r[u++];) l += c.text(s);
                return p === 1 || p === 11 ? r.textContent : p === 9 ? r.documentElement.textContent : p === 3 || p === 4 ? r.nodeValue : l
            }, makeArray: function (r, s) {
                var l = s || [];
                return r != null && (Lt(Object(r)) ? c.merge(l, typeof r == "string" ? [r] : r) : h.call(l, r)), l
            }, inArray: function (r, s, l) {
                return s == null ? -1 : y.call(s, r, l)
            }, isXMLDoc: function (r) {
                var s = r && r.namespaceURI, l = r && (r.ownerDocument || r).documentElement;
                return !pn.test(s || l && l.nodeName || "HTML")
            }, merge: function (r, s) {
                for (var l = +s.length, u = 0, p = r.length; u < l; u++) r[p++] = s[u];
                return r.length = p, r
            }, grep: function (r, s, l) {
                for (var u, p = [], g = 0, m = r.length, D = !l; g < m; g++) u = !s(r[g], g), u !== D && p.push(r[g]);
                return p
            }, map: function (r, s, l) {
                var u, p, g = 0, m = [];
                if (Lt(r)) for (u = r.length; g < u; g++) p = s(r[g], g, l), p != null && m.push(p); else for (g in r) p = s(r[g], g, l), p != null && m.push(p);
                return f(m)
            }, guid: 1, support: K
        }), typeof Symbol == "function" && (c.fn[Symbol.iterator] = o[Symbol.iterator]), c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (r, s) {
            C["[object " + s + "]"] = s.toLowerCase()
        });

        function Lt(r) {
            var s = !!r && "length" in r && r.length, l = Dt(r);
            return re(r) || me(r) ? !1 : l === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }

        function Ae(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }

        var Ve = o.pop, Tt = o.sort, Xt = o.splice, Ye = "[\\x20\\t\\r\\n\\f]",
            gn = new RegExp("^" + Ye + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ye + "+$", "g");
        c.contains = function (r, s) {
            var l = s && s.parentNode;
            return r === l || !!(l && l.nodeType === 1 && (r.contains ? r.contains(l) : r.compareDocumentPosition && r.compareDocumentPosition(l) & 16))
        };
        var zn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

        function Zt(r, s) {
            return s ? r === "\0" ? "ï¿½" : r.slice(0, -1) + "\\" + r.charCodeAt(r.length - 1).toString(16) + " " : "\\" + r
        }

        c.escapeSelector = function (r) {
            return (r + "").replace(zn, Zt)
        };
        var ct = de, nn = h;
        (function () {
            var r, s, l, u, p, g = nn, m, D, b, M, j, q = c.expando, H = 0, X = 0, De = li(), ze = li(), Pe = li(),
                Ct = li(), _t = function (T, x) {
                    return T === x && (p = !0), 0
                },
                On = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                An = "(?:\\\\[\\da-fA-F]{1,6}" + Ye + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Ue = "\\[" + Ye + "*(" + An + ")(?:" + Ye + "*([*^$|!~]?=)" + Ye + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + An + "))|)" + Ye + "*\\]",
                Jn = ":(" + An + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ue + ")*)|.*)\\)|)",
                Ge = new RegExp(Ye + "+", "g"), st = new RegExp("^" + Ye + "*," + Ye + "*"),
                Vr = new RegExp("^" + Ye + "*([>+~]|" + Ye + ")" + Ye + "*"), cr = new RegExp(Ye + "|>"),
                xn = new RegExp(Jn), Ur = new RegExp("^" + An + "$"), Nn = {
                    ID: new RegExp("^#(" + An + ")"),
                    CLASS: new RegExp("^\\.(" + An + ")"),
                    TAG: new RegExp("^(" + An + "|[*])"),
                    ATTR: new RegExp("^" + Ue),
                    PSEUDO: new RegExp("^" + Jn),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Ye + "*(even|odd|(([+-]|)(\\d*)n|)" + Ye + "*(?:([+-]|)" + Ye + "*(\\d+)|))" + Ye + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + On + ")$", "i"),
                    needsContext: new RegExp("^" + Ye + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Ye + "*((?:-\\d)?\\d*)" + Ye + "*\\)|)(?=[^-]|$)", "i")
                }, er = /^(?:input|select|textarea|button)$/i, tr = /^h\d$/i, sn = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                si = /[+~]/, Ft = new RegExp("\\\\[\\da-fA-F]{1,6}" + Ye + "?|\\\\([^\\r\\n\\f])", "g"),
                Fn = function (T, x) {
                    var L = "0x" + T.slice(1) - 65536;
                    return x || (L < 0 ? String.fromCharCode(L + 65536) : String.fromCharCode(L >> 10 | 55296, L & 1023 | 56320))
                }, oi = function () {
                    on()
                }, wn = ci(function (T) {
                    return T.disabled === !0 && Ae(T, "fieldset")
                }, {dir: "parentNode", next: "legend"});

            function Ss() {
                try {
                    return m.activeElement
                } catch {
                }
            }

            try {
                g.apply(o = i.call(ct.childNodes), ct.childNodes), o[ct.childNodes.length].nodeType
            } catch {
                g = {
                    apply: function (x, L) {
                        nn.apply(x, i.call(L))
                    }, call: function (x) {
                        nn.apply(x, i.call(arguments, 1))
                    }
                }
            }

            function Ke(T, x, L, F) {
                var B, ne, le, ve, ue, je, Se, be = x && x.ownerDocument, $e = x ? x.nodeType : 9;
                if (L = L || [], typeof T != "string" || !T || $e !== 1 && $e !== 9 && $e !== 11) return L;
                if (!F && (on(x), x = x || m, b)) {
                    if ($e !== 11 && (ue = sn.exec(T))) if (B = ue[1]) {
                        if ($e === 9) if (le = x.getElementById(B)) {
                            if (le.id === B) return g.call(L, le), L
                        } else return L; else if (be && (le = be.getElementById(B)) && Ke.contains(x, le) && le.id === B) return g.call(L, le), L
                    } else {
                        if (ue[2]) return g.apply(L, x.getElementsByTagName(T)), L;
                        if ((B = ue[3]) && x.getElementsByClassName) return g.apply(L, x.getElementsByClassName(B)), L
                    }
                    if (!Ct[T + " "] && (!M || !M.test(T))) {
                        if (Se = T, be = x, $e === 1 && (cr.test(T) || Vr.test(T))) {
                            for (be = si.test(T) && $i(x.parentNode) || x, (be != x || !K.scope) && ((ve = x.getAttribute("id")) ? ve = c.escapeSelector(ve) : x.setAttribute("id", ve = q)), je = zr(T), ne = je.length; ne--;) je[ne] = (ve ? "#" + ve : ":scope") + " " + di(je[ne]);
                            Se = je.join(",")
                        }
                        try {
                            return g.apply(L, be.querySelectorAll(Se)), L
                        } catch {
                            Ct(T, !0)
                        } finally {
                            ve === q && x.removeAttribute("id")
                        }
                    }
                }
                return ln(T.replace(gn, "$1"), x, L, F)
            }

            function li() {
                var T = [];

                function x(L, F) {
                    return T.push(L + " ") > s.cacheLength && delete x[T.shift()], x[L + " "] = F
                }

                return x
            }

            function Tn(T) {
                return T[q] = !0, T
            }

            function Mn(T) {
                var x = m.createElement("fieldset");
                try {
                    return !!T(x)
                } catch {
                    return !1
                } finally {
                    x.parentNode && x.parentNode.removeChild(x), x = null
                }
            }

            function qr(T) {
                return function (x) {
                    return Ae(x, "input") && x.type === T
                }
            }

            function Br(T) {
                return function (x) {
                    return (Ae(x, "input") || Ae(x, "button")) && x.type === T
                }
            }

            function ui(T) {
                return function (x) {
                    return "form" in x ? x.parentNode && x.disabled === !1 ? "label" in x ? "label" in x.parentNode ? x.parentNode.disabled === T : x.disabled === T : x.isDisabled === T || x.isDisabled !== !T && wn(x) === T : x.disabled === T : "label" in x ? x.disabled === T : !1
                }
            }

            function hr(T) {
                return Tn(function (x) {
                    return x = +x, Tn(function (L, F) {
                        for (var B, ne = T([], L.length, x), le = ne.length; le--;) L[B = ne[le]] && (L[B] = !(F[B] = L[B]))
                    })
                })
            }

            function $i(T) {
                return T && typeof T.getElementsByTagName < "u" && T
            }

            function on(T) {
                var x, L = T ? T.ownerDocument || T : ct;
                return L == m || L.nodeType !== 9 || !L.documentElement || (m = L, D = m.documentElement, b = !c.isXMLDoc(m), j = D.matches || D.webkitMatchesSelector || D.msMatchesSelector, D.msMatchesSelector && ct != m && (x = m.defaultView) && x.top !== x && x.addEventListener("unload", oi), K.getById = Mn(function (F) {
                    return D.appendChild(F).id = c.expando, !m.getElementsByName || !m.getElementsByName(c.expando).length
                }), K.disconnectedMatch = Mn(function (F) {
                    return j.call(F, "*")
                }), K.scope = Mn(function () {
                    return m.querySelectorAll(":scope")
                }), K.cssHas = Mn(function () {
                    try {
                        return m.querySelector(":has(*,:jqfake)"), !1
                    } catch {
                        return !0
                    }
                }), K.getById ? (s.filter.ID = function (F) {
                    var B = F.replace(Ft, Fn);
                    return function (ne) {
                        return ne.getAttribute("id") === B
                    }
                }, s.find.ID = function (F, B) {
                    if (typeof B.getElementById < "u" && b) {
                        var ne = B.getElementById(F);
                        return ne ? [ne] : []
                    }
                }) : (s.filter.ID = function (F) {
                    var B = F.replace(Ft, Fn);
                    return function (ne) {
                        var le = typeof ne.getAttributeNode < "u" && ne.getAttributeNode("id");
                        return le && le.value === B
                    }
                }, s.find.ID = function (F, B) {
                    if (typeof B.getElementById < "u" && b) {
                        var ne, le, ve, ue = B.getElementById(F);
                        if (ue) {
                            if (ne = ue.getAttributeNode("id"), ne && ne.value === F) return [ue];
                            for (ve = B.getElementsByName(F), le = 0; ue = ve[le++];) if (ne = ue.getAttributeNode("id"), ne && ne.value === F) return [ue]
                        }
                        return []
                    }
                }), s.find.TAG = function (F, B) {
                    return typeof B.getElementsByTagName < "u" ? B.getElementsByTagName(F) : B.querySelectorAll(F)
                }, s.find.CLASS = function (F, B) {
                    if (typeof B.getElementsByClassName < "u" && b) return B.getElementsByClassName(F)
                }, M = [], Mn(function (F) {
                    var B;
                    D.appendChild(F).innerHTML = "<a id='" + q + "' href='' disabled='disabled'></a><select id='" + q + "-\r\\' disabled='disabled'><option selected=''></option></select>", F.querySelectorAll("[selected]").length || M.push("\\[" + Ye + "*(?:value|" + On + ")"), F.querySelectorAll("[id~=" + q + "-]").length || M.push("~="), F.querySelectorAll("a#" + q + "+*").length || M.push(".#.+[+~]"), F.querySelectorAll(":checked").length || M.push(":checked"), B = m.createElement("input"), B.setAttribute("type", "hidden"), F.appendChild(B).setAttribute("name", "D"), D.appendChild(F).disabled = !0, F.querySelectorAll(":disabled").length !== 2 && M.push(":enabled", ":disabled"), B = m.createElement("input"), B.setAttribute("name", ""), F.appendChild(B), F.querySelectorAll("[name='']").length || M.push("\\[" + Ye + "*name" + Ye + "*=" + Ye + `*(?:''|"")`)
                }), K.cssHas || M.push(":has"), M = M.length && new RegExp(M.join("|")), _t = function (F, B) {
                    if (F === B) return p = !0, 0;
                    var ne = !F.compareDocumentPosition - !B.compareDocumentPosition;
                    return ne || (ne = (F.ownerDocument || F) == (B.ownerDocument || B) ? F.compareDocumentPosition(B) : 1, ne & 1 || !K.sortDetached && B.compareDocumentPosition(F) === ne ? F === m || F.ownerDocument == ct && Ke.contains(ct, F) ? -1 : B === m || B.ownerDocument == ct && Ke.contains(ct, B) ? 1 : u ? y.call(u, F) - y.call(u, B) : 0 : ne & 4 ? -1 : 1)
                }), m
            }

            Ke.matches = function (T, x) {
                return Ke(T, null, null, x)
            }, Ke.matchesSelector = function (T, x) {
                if (on(T), b && !Ct[x + " "] && (!M || !M.test(x))) try {
                    var L = j.call(T, x);
                    if (L || K.disconnectedMatch || T.document && T.document.nodeType !== 11) return L
                } catch {
                    Ct(x, !0)
                }
                return Ke(x, m, null, [T]).length > 0
            }, Ke.contains = function (T, x) {
                return (T.ownerDocument || T) != m && on(T), c.contains(T, x)
            }, Ke.attr = function (T, x) {
                (T.ownerDocument || T) != m && on(T);
                var L = s.attrHandle[x.toLowerCase()],
                    F = L && Y.call(s.attrHandle, x.toLowerCase()) ? L(T, x, !b) : void 0;
                return F !== void 0 ? F : T.getAttribute(x)
            }, Ke.error = function (T) {
                throw new Error("Syntax error, unrecognized expression: " + T)
            }, c.uniqueSort = function (T) {
                var x, L = [], F = 0, B = 0;
                if (p = !K.sortStable, u = !K.sortStable && i.call(T, 0), Tt.call(T, _t), p) {
                    for (; x = T[B++];) x === T[B] && (F = L.push(B));
                    for (; F--;) Xt.call(T, L[F], 1)
                }
                return u = null, T
            }, c.fn.uniqueSort = function () {
                return this.pushStack(c.uniqueSort(i.apply(this)))
            }, s = c.expr = {
                cacheLength: 50,
                createPseudo: Tn,
                match: Nn,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (T) {
                        return T[1] = T[1].replace(Ft, Fn), T[3] = (T[3] || T[4] || T[5] || "").replace(Ft, Fn), T[2] === "~=" && (T[3] = " " + T[3] + " "), T.slice(0, 4)
                    }, CHILD: function (T) {
                        return T[1] = T[1].toLowerCase(), T[1].slice(0, 3) === "nth" ? (T[3] || Ke.error(T[0]), T[4] = +(T[4] ? T[5] + (T[6] || 1) : 2 * (T[3] === "even" || T[3] === "odd")), T[5] = +(T[7] + T[8] || T[3] === "odd")) : T[3] && Ke.error(T[0]), T
                    }, PSEUDO: function (T) {
                        var x, L = !T[6] && T[2];
                        return Nn.CHILD.test(T[0]) ? null : (T[3] ? T[2] = T[4] || T[5] || "" : L && xn.test(L) && (x = zr(L, !0)) && (x = L.indexOf(")", L.length - x) - L.length) && (T[0] = T[0].slice(0, x), T[2] = L.slice(0, x)), T.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (T) {
                        var x = T.replace(Ft, Fn).toLowerCase();
                        return T === "*" ? function () {
                            return !0
                        } : function (L) {
                            return Ae(L, x)
                        }
                    }, CLASS: function (T) {
                        var x = De[T + " "];
                        return x || (x = new RegExp("(^|" + Ye + ")" + T + "(" + Ye + "|$)")) && De(T, function (L) {
                            return x.test(typeof L.className == "string" && L.className || typeof L.getAttribute < "u" && L.getAttribute("class") || "")
                        })
                    }, ATTR: function (T, x, L) {
                        return function (F) {
                            var B = Ke.attr(F, T);
                            return B == null ? x === "!=" : x ? (B += "", x === "=" ? B === L : x === "!=" ? B !== L : x === "^=" ? L && B.indexOf(L) === 0 : x === "*=" ? L && B.indexOf(L) > -1 : x === "$=" ? L && B.slice(-L.length) === L : x === "~=" ? (" " + B.replace(Ge, " ") + " ").indexOf(L) > -1 : x === "|=" ? B === L || B.slice(0, L.length + 1) === L + "-" : !1) : !0
                        }
                    }, CHILD: function (T, x, L, F, B) {
                        var ne = T.slice(0, 3) !== "nth", le = T.slice(-4) !== "last", ve = x === "of-type";
                        return F === 1 && B === 0 ? function (ue) {
                            return !!ue.parentNode
                        } : function (ue, je, Se) {
                            var be, $e, _e, et, Bt, xt = ne !== le ? "nextSibling" : "previousSibling",
                                un = ue.parentNode, Nt = ve && ue.nodeName.toLowerCase(), Pr = !Se && !ve, jt = !1;
                            if (un) {
                                if (ne) {
                                    for (; xt;) {
                                        for (_e = ue; _e = _e[xt];) if (ve ? Ae(_e, Nt) : _e.nodeType === 1) return !1;
                                        Bt = xt = T === "only" && !Bt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Bt = [le ? un.firstChild : un.lastChild], le && Pr) {
                                    for ($e = un[q] || (un[q] = {}), be = $e[T] || [], et = be[0] === H && be[1], jt = et && be[2], _e = et && un.childNodes[et]; _e = ++et && _e && _e[xt] || (jt = et = 0) || Bt.pop();) if (_e.nodeType === 1 && ++jt && _e === ue) {
                                        $e[T] = [H, et, jt];
                                        break
                                    }
                                } else if (Pr && ($e = ue[q] || (ue[q] = {}), be = $e[T] || [], et = be[0] === H && be[1], jt = et), jt === !1) for (; (_e = ++et && _e && _e[xt] || (jt = et = 0) || Bt.pop()) && !((ve ? Ae(_e, Nt) : _e.nodeType === 1) && ++jt && (Pr && ($e = _e[q] || (_e[q] = {}), $e[T] = [H, jt]), _e === ue));) ;
                                return jt -= B, jt === F || jt % F === 0 && jt / F >= 0
                            }
                        }
                    }, PSEUDO: function (T, x) {
                        var L,
                            F = s.pseudos[T] || s.setFilters[T.toLowerCase()] || Ke.error("unsupported pseudo: " + T);
                        return F[q] ? F(x) : F.length > 1 ? (L = [T, T, "", x], s.setFilters.hasOwnProperty(T.toLowerCase()) ? Tn(function (B, ne) {
                            for (var le, ve = F(B, x), ue = ve.length; ue--;) le = y.call(B, ve[ue]), B[le] = !(ne[le] = ve[ue])
                        }) : function (B) {
                            return F(B, 0, L)
                        }) : F
                    }
                },
                pseudos: {
                    not: Tn(function (T) {
                        var x = [], L = [], F = Lr(T.replace(gn, "$1"));
                        return F[q] ? Tn(function (B, ne, le, ve) {
                            for (var ue, je = F(B, null, ve, []), Se = B.length; Se--;) (ue = je[Se]) && (B[Se] = !(ne[Se] = ue))
                        }) : function (B, ne, le) {
                            return x[0] = B, F(x, null, le, L), x[0] = null, !L.pop()
                        }
                    }), has: Tn(function (T) {
                        return function (x) {
                            return Ke(T, x).length > 0
                        }
                    }), contains: Tn(function (T) {
                        return T = T.replace(Ft, Fn), function (x) {
                            return (x.textContent || c.text(x)).indexOf(T) > -1
                        }
                    }), lang: Tn(function (T) {
                        return Ur.test(T || "") || Ke.error("unsupported lang: " + T), T = T.replace(Ft, Fn).toLowerCase(), function (x) {
                            var L;
                            do if (L = b ? x.lang : x.getAttribute("xml:lang") || x.getAttribute("lang")) return L = L.toLowerCase(), L === T || L.indexOf(T + "-") === 0; while ((x = x.parentNode) && x.nodeType === 1);
                            return !1
                        }
                    }), target: function (T) {
                        var x = n.location && n.location.hash;
                        return x && x.slice(1) === T.id
                    }, root: function (T) {
                        return T === D
                    }, focus: function (T) {
                        return T === Ss() && m.hasFocus() && !!(T.type || T.href || ~T.tabIndex)
                    }, enabled: ui(!1), disabled: ui(!0), checked: function (T) {
                        return Ae(T, "input") && !!T.checked || Ae(T, "option") && !!T.selected
                    }, selected: function (T) {
                        return T.parentNode && T.parentNode.selectedIndex, T.selected === !0
                    }, empty: function (T) {
                        for (T = T.firstChild; T; T = T.nextSibling) if (T.nodeType < 6) return !1;
                        return !0
                    }, parent: function (T) {
                        return !s.pseudos.empty(T)
                    }, header: function (T) {
                        return tr.test(T.nodeName)
                    }, input: function (T) {
                        return er.test(T.nodeName)
                    }, button: function (T) {
                        return Ae(T, "input") && T.type === "button" || Ae(T, "button")
                    }, text: function (T) {
                        var x;
                        return Ae(T, "input") && T.type === "text" && ((x = T.getAttribute("type")) == null || x.toLowerCase() === "text")
                    }, first: hr(function () {
                        return [0]
                    }), last: hr(function (T, x) {
                        return [x - 1]
                    }), eq: hr(function (T, x, L) {
                        return [L < 0 ? L + x : L]
                    }), even: hr(function (T, x) {
                        for (var L = 0; L < x; L += 2) T.push(L);
                        return T
                    }), odd: hr(function (T, x) {
                        for (var L = 1; L < x; L += 2) T.push(L);
                        return T
                    }), lt: hr(function (T, x, L) {
                        var F;
                        for (L < 0 ? F = L + x : L > x ? F = x : F = L; --F >= 0;) T.push(F);
                        return T
                    }), gt: hr(function (T, x, L) {
                        for (var F = L < 0 ? L + x : L; ++F < x;) T.push(F);
                        return T
                    })
                }
            }, s.pseudos.nth = s.pseudos.eq;
            for (r in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) s.pseudos[r] = qr(r);
            for (r in {submit: !0, reset: !0}) s.pseudos[r] = Br(r);

            function fi() {
            }

            fi.prototype = s.filters = s.pseudos, s.setFilters = new fi;

            function zr(T, x) {
                var L, F, B, ne, le, ve, ue, je = ze[T + " "];
                if (je) return x ? 0 : je.slice(0);
                for (le = T, ve = [], ue = s.preFilter; le;) {
                    (!L || (F = st.exec(le))) && (F && (le = le.slice(F[0].length) || le), ve.push(B = [])), L = !1, (F = Vr.exec(le)) && (L = F.shift(), B.push({
                        value: L,
                        type: F[0].replace(gn, " ")
                    }), le = le.slice(L.length));
                    for (ne in s.filter) (F = Nn[ne].exec(le)) && (!ue[ne] || (F = ue[ne](F))) && (L = F.shift(), B.push({
                        value: L,
                        type: ne,
                        matches: F
                    }), le = le.slice(L.length));
                    if (!L) break
                }
                return x ? le.length : le ? Ke.error(T) : ze(T, ve).slice(0)
            }

            function di(T) {
                for (var x = 0, L = T.length, F = ""; x < L; x++) F += T[x].value;
                return F
            }

            function ci(T, x, L) {
                var F = x.dir, B = x.next, ne = B || F, le = L && ne === "parentNode", ve = X++;
                return x.first ? function (ue, je, Se) {
                    for (; ue = ue[F];) if (ue.nodeType === 1 || le) return T(ue, je, Se);
                    return !1
                } : function (ue, je, Se) {
                    var be, $e, _e = [H, ve];
                    if (Se) {
                        for (; ue = ue[F];) if ((ue.nodeType === 1 || le) && T(ue, je, Se)) return !0
                    } else for (; ue = ue[F];) if (ue.nodeType === 1 || le) if ($e = ue[q] || (ue[q] = {}), B && Ae(ue, B)) ue = ue[F] || ue; else {
                        if ((be = $e[ne]) && be[0] === H && be[1] === ve) return _e[2] = be[2];
                        if ($e[ne] = _e, _e[2] = T(ue, je, Se)) return !0
                    }
                    return !1
                }
            }

            function Vi(T) {
                return T.length > 1 ? function (x, L, F) {
                    for (var B = T.length; B--;) if (!T[B](x, L, F)) return !1;
                    return !0
                } : T[0]
            }

            function bs(T, x, L) {
                for (var F = 0, B = x.length; F < B; F++) Ke(T, x[F], L);
                return L
            }

            function hi(T, x, L, F, B) {
                for (var ne, le = [], ve = 0, ue = T.length, je = x != null; ve < ue; ve++) (ne = T[ve]) && (!L || L(ne, F, B)) && (le.push(ne), je && x.push(ve));
                return le
            }

            function jn(T, x, L, F, B, ne) {
                return F && !F[q] && (F = jn(F)), B && !B[q] && (B = jn(B, ne)), Tn(function (le, ve, ue, je) {
                    var Se, be, $e, _e, et = [], Bt = [], xt = ve.length,
                        un = le || bs(x || "*", ue.nodeType ? [ue] : ue, []),
                        Nt = T && (le || !x) ? hi(un, et, T, ue, je) : un;
                    if (L ? (_e = B || (le ? T : xt || F) ? [] : ve, L(Nt, _e, ue, je)) : _e = Nt, F) for (Se = hi(_e, Bt), F(Se, [], ue, je), be = Se.length; be--;) ($e = Se[be]) && (_e[Bt[be]] = !(Nt[Bt[be]] = $e));
                    if (le) {
                        if (B || T) {
                            if (B) {
                                for (Se = [], be = _e.length; be--;) ($e = _e[be]) && Se.push(Nt[be] = $e);
                                B(null, _e = [], Se, je)
                            }
                            for (be = _e.length; be--;) ($e = _e[be]) && (Se = B ? y.call(le, $e) : et[be]) > -1 && (le[Se] = !(ve[Se] = $e))
                        }
                    } else _e = hi(_e === ve ? _e.splice(xt, _e.length) : _e), B ? B(null, ve, _e, je) : g.apply(ve, _e)
                })
            }

            function nr(T) {
                for (var x, L, F, B = T.length, ne = s.relative[T[0].type], le = ne || s.relative[" "], ve = ne ? 1 : 0, ue = ci(function (be) {
                    return be === x
                }, le, !0), je = ci(function (be) {
                    return y.call(x, be) > -1
                }, le, !0), Se = [function (be, $e, _e) {
                    var et = !ne && (_e || $e != l) || ((x = $e).nodeType ? ue(be, $e, _e) : je(be, $e, _e));
                    return x = null, et
                }]; ve < B; ve++) if (L = s.relative[T[ve].type]) Se = [ci(Vi(Se), L)]; else {
                    if (L = s.filter[T[ve].type].apply(null, T[ve].matches), L[q]) {
                        for (F = ++ve; F < B && !s.relative[T[F].type]; F++) ;
                        return jn(ve > 1 && Vi(Se), ve > 1 && di(T.slice(0, ve - 1).concat({value: T[ve - 2].type === " " ? "*" : ""})).replace(gn, "$1"), L, ve < F && nr(T.slice(ve, F)), F < B && nr(T = T.slice(F)), F < B && di(T))
                    }
                    Se.push(L)
                }
                return Vi(Se)
            }

            function Es(T, x) {
                var L = x.length > 0, F = T.length > 0, B = function (ne, le, ve, ue, je) {
                    var Se, be, $e, _e = 0, et = "0", Bt = ne && [], xt = [], un = l,
                        Nt = ne || F && s.find.TAG("*", je), Pr = H += un == null ? 1 : Math.random() || .1,
                        jt = Nt.length;
                    for (je && (l = le == m || le || je); et !== jt && (Se = Nt[et]) != null; et++) {
                        if (F && Se) {
                            for (be = 0, !le && Se.ownerDocument != m && (on(Se), ve = !b); $e = T[be++];) if ($e(Se, le || m, ve)) {
                                g.call(ue, Se);
                                break
                            }
                            je && (H = Pr)
                        }
                        L && ((Se = !$e && Se) && _e--, ne && Bt.push(Se))
                    }
                    if (_e += et, L && et !== _e) {
                        for (be = 0; $e = x[be++];) $e(Bt, xt, le, ve);
                        if (ne) {
                            if (_e > 0) for (; et--;) Bt[et] || xt[et] || (xt[et] = Ve.call(ue));
                            xt = hi(xt)
                        }
                        g.apply(ue, xt), je && !ne && xt.length > 0 && _e + x.length > 1 && c.uniqueSort(ue)
                    }
                    return je && (H = Pr, l = un), Bt
                };
                return L ? Tn(B) : B
            }

            function Lr(T, x) {
                var L, F = [], B = [], ne = Pe[T + " "];
                if (!ne) {
                    for (x || (x = zr(T)), L = x.length; L--;) ne = nr(x[L]), ne[q] ? F.push(ne) : B.push(ne);
                    ne = Pe(T, Es(B, F)), ne.selector = T
                }
                return ne
            }

            function ln(T, x, L, F) {
                var B, ne, le, ve, ue, je = typeof T == "function" && T, Se = !F && zr(T = je.selector || T);
                if (L = L || [], Se.length === 1) {
                    if (ne = Se[0] = Se[0].slice(0), ne.length > 2 && (le = ne[0]).type === "ID" && x.nodeType === 9 && b && s.relative[ne[1].type]) {
                        if (x = (s.find.ID(le.matches[0].replace(Ft, Fn), x) || [])[0], x) je && (x = x.parentNode); else return L;
                        T = T.slice(ne.shift().value.length)
                    }
                    for (B = Nn.needsContext.test(T) ? 0 : ne.length; B-- && (le = ne[B], !s.relative[ve = le.type]);) if ((ue = s.find[ve]) && (F = ue(le.matches[0].replace(Ft, Fn), si.test(ne[0].type) && $i(x.parentNode) || x))) {
                        if (ne.splice(B, 1), T = F.length && di(ne), !T) return g.apply(L, F), L;
                        break
                    }
                }
                return (je || Lr(T, Se))(F, x, !b, L, !x || si.test(T) && $i(x.parentNode) || x), L
            }

            K.sortStable = q.split("").sort(_t).join("") === q, on(), K.sortDetached = Mn(function (T) {
                return T.compareDocumentPosition(m.createElement("fieldset")) & 1
            }), c.find = Ke, c.expr[":"] = c.expr.pseudos, c.unique = c.uniqueSort, Ke.compile = Lr, Ke.select = ln, Ke.setDocument = on, Ke.tokenize = zr, Ke.escape = c.escapeSelector, Ke.getText = c.text, Ke.isXML = c.isXMLDoc, Ke.selectors = c.expr, Ke.support = c.support, Ke.uniqueSort = c.uniqueSort
        })();
        var ht = function (r, s, l) {
            for (var u = [], p = l !== void 0; (r = r[s]) && r.nodeType !== 9;) if (r.nodeType === 1) {
                if (p && c(r).is(l)) break;
                u.push(r)
            }
            return u
        }, gt = function (r, s) {
            for (var l = []; r; r = r.nextSibling) r.nodeType === 1 && r !== s && l.push(r);
            return l
        }, bt = c.expr.match.needsContext, we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function oe(r, s, l) {
            return re(s) ? c.grep(r, function (u, p) {
                return !!s.call(u, p, u) !== l
            }) : s.nodeType ? c.grep(r, function (u) {
                return u === s !== l
            }) : typeof s != "string" ? c.grep(r, function (u) {
                return y.call(s, u) > -1 !== l
            }) : c.filter(s, r, l)
        }

        c.filter = function (r, s, l) {
            var u = s[0];
            return l && (r = ":not(" + r + ")"), s.length === 1 && u.nodeType === 1 ? c.find.matchesSelector(u, r) ? [u] : [] : c.find.matches(r, c.grep(s, function (p) {
                return p.nodeType === 1
            }))
        }, c.fn.extend({
            find: function (r) {
                var s, l, u = this.length, p = this;
                if (typeof r != "string") return this.pushStack(c(r).filter(function () {
                    for (s = 0; s < u; s++) if (c.contains(p[s], this)) return !0
                }));
                for (l = this.pushStack([]), s = 0; s < u; s++) c.find(r, p[s], l);
                return u > 1 ? c.uniqueSort(l) : l
            }, filter: function (r) {
                return this.pushStack(oe(this, r || [], !1))
            }, not: function (r) {
                return this.pushStack(oe(this, r || [], !0))
            }, is: function (r) {
                return !!oe(this, typeof r == "string" && bt.test(r) ? c(r) : r || [], !1).length
            }
        });
        var ce, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, ke = c.fn.init = function (r, s, l) {
            var u, p;
            if (!r) return this;
            if (l = l || ce, typeof r == "string") if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? u = [null, r, null] : u = Ee.exec(r), u && (u[1] || !s)) if (u[1]) {
                if (s = s instanceof c ? s[0] : s, c.merge(this, c.parseHTML(u[1], s && s.nodeType ? s.ownerDocument || s : de, !0)), we.test(u[1]) && c.isPlainObject(s)) for (u in s) re(this[u]) ? this[u](s[u]) : this.attr(u, s[u]);
                return this
            } else return p = de.getElementById(u[2]), p && (this[0] = p, this.length = 1), this; else return !s || s.jquery ? (s || l).find(r) : this.constructor(s).find(r); else {
                if (r.nodeType) return this[0] = r, this.length = 1, this;
                if (re(r)) return l.ready !== void 0 ? l.ready(r) : r(c)
            }
            return c.makeArray(r, this)
        };
        ke.prototype = c.fn, ce = c(de);
        var Re = /^(?:parents|prev(?:Until|All))/, Le = {children: !0, contents: !0, next: !0, prev: !0};
        c.fn.extend({
            has: function (r) {
                var s = c(r, this), l = s.length;
                return this.filter(function () {
                    for (var u = 0; u < l; u++) if (c.contains(this, s[u])) return !0
                })
            }, closest: function (r, s) {
                var l, u = 0, p = this.length, g = [], m = typeof r != "string" && c(r);
                if (!bt.test(r)) {
                    for (; u < p; u++) for (l = this[u]; l && l !== s; l = l.parentNode) if (l.nodeType < 11 && (m ? m.index(l) > -1 : l.nodeType === 1 && c.find.matchesSelector(l, r))) {
                        g.push(l);
                        break
                    }
                }
                return this.pushStack(g.length > 1 ? c.uniqueSort(g) : g)
            }, index: function (r) {
                return r ? typeof r == "string" ? y.call(c(r), this[0]) : y.call(this, r.jquery ? r[0] : r) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (r, s) {
                return this.pushStack(c.uniqueSort(c.merge(this.get(), c(r, s))))
            }, addBack: function (r) {
                return this.add(r == null ? this.prevObject : this.prevObject.filter(r))
            }
        });

        function $t(r, s) {
            for (; (r = r[s]) && r.nodeType !== 1;) ;
            return r
        }

        c.each({
            parent: function (r) {
                var s = r.parentNode;
                return s && s.nodeType !== 11 ? s : null
            }, parents: function (r) {
                return ht(r, "parentNode")
            }, parentsUntil: function (r, s, l) {
                return ht(r, "parentNode", l)
            }, next: function (r) {
                return $t(r, "nextSibling")
            }, prev: function (r) {
                return $t(r, "previousSibling")
            }, nextAll: function (r) {
                return ht(r, "nextSibling")
            }, prevAll: function (r) {
                return ht(r, "previousSibling")
            }, nextUntil: function (r, s, l) {
                return ht(r, "nextSibling", l)
            }, prevUntil: function (r, s, l) {
                return ht(r, "previousSibling", l)
            }, siblings: function (r) {
                return gt((r.parentNode || {}).firstChild, r)
            }, children: function (r) {
                return gt(r.firstChild)
            }, contents: function (r) {
                return r.contentDocument != null && e(r.contentDocument) ? r.contentDocument : (Ae(r, "template") && (r = r.content || r), c.merge([], r.childNodes))
            }
        }, function (r, s) {
            c.fn[r] = function (l, u) {
                var p = c.map(this, s, l);
                return r.slice(-5) !== "Until" && (u = l), u && typeof u == "string" && (p = c.filter(u, p)), this.length > 1 && (Le[r] || c.uniqueSort(p), Re.test(r) && p.reverse()), this.pushStack(p)
            }
        });
        var Pt = /[^\x20\t\r\n\f]+/g;

        function Er(r) {
            var s = {};
            return c.each(r.match(Pt) || [], function (l, u) {
                s[u] = !0
            }), s
        }

        c.Callbacks = function (r) {
            r = typeof r == "string" ? Er(r) : c.extend({}, r);
            var s, l, u, p, g = [], m = [], D = -1, b = function () {
                for (p = p || r.once, u = s = !0; m.length; D = -1) for (l = m.shift(); ++D < g.length;) g[D].apply(l[0], l[1]) === !1 && r.stopOnFalse && (D = g.length, l = !1);
                r.memory || (l = !1), s = !1, p && (l ? g = [] : g = "")
            }, M = {
                add: function () {
                    return g && (l && !s && (D = g.length - 1, m.push(l)), function j(q) {
                        c.each(q, function (H, X) {
                            re(X) ? (!r.unique || !M.has(X)) && g.push(X) : X && X.length && Dt(X) !== "string" && j(X)
                        })
                    }(arguments), l && !s && b()), this
                }, remove: function () {
                    return c.each(arguments, function (j, q) {
                        for (var H; (H = c.inArray(q, g, H)) > -1;) g.splice(H, 1), H <= D && D--
                    }), this
                }, has: function (j) {
                    return j ? c.inArray(j, g) > -1 : g.length > 0
                }, empty: function () {
                    return g && (g = []), this
                }, disable: function () {
                    return p = m = [], g = l = "", this
                }, disabled: function () {
                    return !g
                }, lock: function () {
                    return p = m = [], !l && !s && (g = l = ""), this
                }, locked: function () {
                    return !!p
                }, fireWith: function (j, q) {
                    return p || (q = q || [], q = [j, q.slice ? q.slice() : q], m.push(q), s || b()), this
                }, fire: function () {
                    return M.fireWith(this, arguments), this
                }, fired: function () {
                    return !!u
                }
            };
            return M
        };

        function vn(r) {
            return r
        }

        function Rt(r) {
            throw r
        }

        function Cr(r, s, l, u) {
            var p;
            try {
                r && re(p = r.promise) ? p.call(r).done(s).fail(l) : r && re(p = r.then) ? p.call(r, s, l) : s.apply(void 0, [r].slice(u))
            } catch (g) {
                l.apply(void 0, [g])
            }
        }

        c.extend({
            Deferred: function (r) {
                var s = [["notify", "progress", c.Callbacks("memory"), c.Callbacks("memory"), 2], ["resolve", "done", c.Callbacks("once memory"), c.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", c.Callbacks("once memory"), c.Callbacks("once memory"), 1, "rejected"]],
                    l = "pending", u = {
                        state: function () {
                            return l
                        }, always: function () {
                            return p.done(arguments).fail(arguments), this
                        }, catch: function (g) {
                            return u.then(null, g)
                        }, pipe: function () {
                            var g = arguments;
                            return c.Deferred(function (m) {
                                c.each(s, function (D, b) {
                                    var M = re(g[b[4]]) && g[b[4]];
                                    p[b[1]](function () {
                                        var j = M && M.apply(this, arguments);
                                        j && re(j.promise) ? j.promise().progress(m.notify).done(m.resolve).fail(m.reject) : m[b[0] + "With"](this, M ? [j] : arguments)
                                    })
                                }), g = null
                            }).promise()
                        }, then: function (g, m, D) {
                            var b = 0;

                            function M(j, q, H, X) {
                                return function () {
                                    var De = this, ze = arguments, Pe = function () {
                                        var _t, On;
                                        if (!(j < b)) {
                                            if (_t = H.apply(De, ze), _t === q.promise()) throw new TypeError("Thenable self-resolution");
                                            On = _t && (typeof _t == "object" || typeof _t == "function") && _t.then, re(On) ? X ? On.call(_t, M(b, q, vn, X), M(b, q, Rt, X)) : (b++, On.call(_t, M(b, q, vn, X), M(b, q, Rt, X), M(b, q, vn, q.notifyWith))) : (H !== vn && (De = void 0, ze = [_t]), (X || q.resolveWith)(De, ze))
                                        }
                                    }, Ct = X ? Pe : function () {
                                        try {
                                            Pe()
                                        } catch (_t) {
                                            c.Deferred.exceptionHook && c.Deferred.exceptionHook(_t, Ct.error), j + 1 >= b && (H !== Rt && (De = void 0, ze = [_t]), q.rejectWith(De, ze))
                                        }
                                    };
                                    j ? Ct() : (c.Deferred.getErrorHook ? Ct.error = c.Deferred.getErrorHook() : c.Deferred.getStackHook && (Ct.error = c.Deferred.getStackHook()), n.setTimeout(Ct))
                                }
                            }

                            return c.Deferred(function (j) {
                                s[0][3].add(M(0, j, re(D) ? D : vn, j.notifyWith)), s[1][3].add(M(0, j, re(g) ? g : vn)), s[2][3].add(M(0, j, re(m) ? m : Rt))
                            }).promise()
                        }, promise: function (g) {
                            return g != null ? c.extend(g, u) : u
                        }
                    }, p = {};
                return c.each(s, function (g, m) {
                    var D = m[2], b = m[5];
                    u[m[1]] = D.add, b && D.add(function () {
                        l = b
                    }, s[3 - g][2].disable, s[3 - g][3].disable, s[0][2].lock, s[0][3].lock), D.add(m[3].fire), p[m[0]] = function () {
                        return p[m[0] + "With"](this === p ? void 0 : this, arguments), this
                    }, p[m[0] + "With"] = D.fireWith
                }), u.promise(p), r && r.call(p, p), p
            }, when: function (r) {
                var s = arguments.length, l = s, u = Array(l), p = i.call(arguments), g = c.Deferred(),
                    m = function (D) {
                        return function (b) {
                            u[D] = this, p[D] = arguments.length > 1 ? i.call(arguments) : b, --s || g.resolveWith(u, p)
                        }
                    };
                if (s <= 1 && (Cr(r, g.done(m(l)).resolve, g.reject, !s), g.state() === "pending" || re(p[l] && p[l].then))) return g.then();
                for (; l--;) Cr(p[l], m(l), g.reject);
                return g.promise()
            }
        });
        var kr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        c.Deferred.exceptionHook = function (r, s) {
            n.console && n.console.warn && r && kr.test(r.name) && n.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
        }, c.readyException = function (r) {
            n.setTimeout(function () {
                throw r
            })
        };
        var mn = c.Deferred();
        c.fn.ready = function (r) {
            return mn.then(r).catch(function (s) {
                c.readyException(s)
            }), this
        }, c.extend({
            isReady: !1, readyWait: 1, ready: function (r) {
                (r === !0 ? --c.readyWait : c.isReady) || (c.isReady = !0, !(r !== !0 && --c.readyWait > 0) && mn.resolveWith(de, [c]))
            }
        }), c.ready.then = mn.then;

        function Ht() {
            de.removeEventListener("DOMContentLoaded", Ht), n.removeEventListener("load", Ht), c.ready()
        }

        de.readyState === "complete" || de.readyState !== "loading" && !de.documentElement.doScroll ? n.setTimeout(c.ready) : (de.addEventListener("DOMContentLoaded", Ht), n.addEventListener("load", Ht));
        var Be = function (r, s, l, u, p, g, m) {
            var D = 0, b = r.length, M = l == null;
            if (Dt(l) === "object") {
                p = !0;
                for (D in l) Be(r, s, D, l[D], !0, g, m)
            } else if (u !== void 0 && (p = !0, re(u) || (m = !0), M && (m ? (s.call(r, u), s = null) : (M = s, s = function (j, q, H) {
                return M.call(c(j), H)
            })), s)) for (; D < b; D++) s(r[D], l, m ? u : u.call(r[D], D, s(r[D], l)));
            return p ? r : M ? s.call(r) : b ? s(r[0], l) : g
        }, We = /^-ms-/, Fe = /-([a-z])/g;

        function lr(r, s) {
            return s.toUpperCase()
        }

        function ft(r) {
            return r.replace(We, "ms-").replace(Fe, lr)
        }

        var rn = function (r) {
            return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType
        };

        function Rn() {
            this.expando = c.expando + Rn.uid++
        }

        Rn.uid = 1, Rn.prototype = {
            cache: function (r) {
                var s = r[this.expando];
                return s || (s = {}, rn(r) && (r.nodeType ? r[this.expando] = s : Object.defineProperty(r, this.expando, {
                    value: s,
                    configurable: !0
                }))), s
            }, set: function (r, s, l) {
                var u, p = this.cache(r);
                if (typeof s == "string") p[ft(s)] = l; else for (u in s) p[ft(u)] = s[u];
                return p
            }, get: function (r, s) {
                return s === void 0 ? this.cache(r) : r[this.expando] && r[this.expando][ft(s)]
            }, access: function (r, s, l) {
                return s === void 0 || s && typeof s == "string" && l === void 0 ? this.get(r, s) : (this.set(r, s, l), l !== void 0 ? l : s)
            }, remove: function (r, s) {
                var l, u = r[this.expando];
                if (u !== void 0) {
                    if (s !== void 0) for (Array.isArray(s) ? s = s.map(ft) : (s = ft(s), s = s in u ? [s] : s.match(Pt) || []), l = s.length; l--;) delete u[s[l]];
                    (s === void 0 || c.isEmptyObject(u)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
                }
            }, hasData: function (r) {
                var s = r[this.expando];
                return s !== void 0 && !c.isEmptyObject(s)
            }
        };
        var ae = new Rn, pt = new Rn, Dr = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Jt = /[A-Z]/g;

        function Gn(r) {
            return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : Dr.test(r) ? JSON.parse(r) : r
        }

        function ur(r, s, l) {
            var u;
            if (l === void 0 && r.nodeType === 1) if (u = "data-" + s.replace(Jt, "-$&").toLowerCase(), l = r.getAttribute(u), typeof l == "string") {
                try {
                    l = Gn(l)
                } catch {
                }
                pt.set(r, s, l)
            } else l = void 0;
            return l
        }

        c.extend({
            hasData: function (r) {
                return pt.hasData(r) || ae.hasData(r)
            }, data: function (r, s, l) {
                return pt.access(r, s, l)
            }, removeData: function (r, s) {
                pt.remove(r, s)
            }, _data: function (r, s, l) {
                return ae.access(r, s, l)
            }, _removeData: function (r, s) {
                ae.remove(r, s)
            }
        }), c.fn.extend({
            data: function (r, s) {
                var l, u, p, g = this[0], m = g && g.attributes;
                if (r === void 0) {
                    if (this.length && (p = pt.get(g), g.nodeType === 1 && !ae.get(g, "hasDataAttrs"))) {
                        for (l = m.length; l--;) m[l] && (u = m[l].name, u.indexOf("data-") === 0 && (u = ft(u.slice(5)), ur(g, u, p[u])));
                        ae.set(g, "hasDataAttrs", !0)
                    }
                    return p
                }
                return typeof r == "object" ? this.each(function () {
                    pt.set(this, r)
                }) : Be(this, function (D) {
                    var b;
                    if (g && D === void 0) return b = pt.get(g, r), b !== void 0 || (b = ur(g, r), b !== void 0) ? b : void 0;
                    this.each(function () {
                        pt.set(this, r, D)
                    })
                }, null, s, arguments.length > 1, null, !0)
            }, removeData: function (r) {
                return this.each(function () {
                    pt.remove(this, r)
                })
            }
        }), c.extend({
            queue: function (r, s, l) {
                var u;
                if (r) return s = (s || "fx") + "queue", u = ae.get(r, s), l && (!u || Array.isArray(l) ? u = ae.access(r, s, c.makeArray(l)) : u.push(l)), u || []
            }, dequeue: function (r, s) {
                s = s || "fx";
                var l = c.queue(r, s), u = l.length, p = l.shift(), g = c._queueHooks(r, s), m = function () {
                    c.dequeue(r, s)
                };
                p === "inprogress" && (p = l.shift(), u--), p && (s === "fx" && l.unshift("inprogress"), delete g.stop, p.call(r, m, g)), !u && g && g.empty.fire()
            }, _queueHooks: function (r, s) {
                var l = s + "queueHooks";
                return ae.get(r, l) || ae.access(r, l, {
                    empty: c.Callbacks("once memory").add(function () {
                        ae.remove(r, [s + "queue", l])
                    })
                })
            }
        }), c.fn.extend({
            queue: function (r, s) {
                var l = 2;
                return typeof r != "string" && (s = r, r = "fx", l--), arguments.length < l ? c.queue(this[0], r) : s === void 0 ? this : this.each(function () {
                    var u = c.queue(this, r, s);
                    c._queueHooks(this, r), r === "fx" && u[0] !== "inprogress" && c.dequeue(this, r)
                })
            }, dequeue: function (r) {
                return this.each(function () {
                    c.dequeue(this, r)
                })
            }, clearQueue: function (r) {
                return this.queue(r || "fx", [])
            }, promise: function (r, s) {
                var l, u = 1, p = c.Deferred(), g = this, m = this.length, D = function () {
                    --u || p.resolveWith(g, [g])
                };
                for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; m--;) l = ae.get(g[m], r + "queueHooks"), l && l.empty && (u++, l.empty.add(D));
                return D(), p.promise(s)
            }
        });
        var Qn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Cn = new RegExp("^(?:([+-])=|)(" + Qn + ")([a-z%]*)$", "i"), Vt = ["Top", "Right", "Bottom", "Left"],
            Ut = de.documentElement, v = function (r) {
                return c.contains(r.ownerDocument, r)
            }, N = {composed: !0};
        Ut.getRootNode && (v = function (r) {
            return c.contains(r.ownerDocument, r) || r.getRootNode(N) === r.ownerDocument
        });
        var V = function (r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && v(r) && c.css(r, "display") === "none"
        };

        function se(r, s, l, u) {
            var p, g, m = 20, D = u ? function () {
                    return u.cur()
                } : function () {
                    return c.css(r, s, "")
                }, b = D(), M = l && l[3] || (c.cssNumber[s] ? "" : "px"),
                j = r.nodeType && (c.cssNumber[s] || M !== "px" && +b) && Cn.exec(c.css(r, s));
            if (j && j[3] !== M) {
                for (b = b / 2, M = M || j[3], j = +b || 1; m--;) c.style(r, s, j + M), (1 - g) * (1 - (g = D() / b || .5)) <= 0 && (m = 0), j = j / g;
                j = j * 2, c.style(r, s, j + M), l = l || []
            }
            return l && (j = +j || +b || 0, p = l[1] ? j + (l[1] + 1) * l[2] : +l[2], u && (u.unit = M, u.start = j, u.end = p)), p
        }

        var xe = {};

        function it(r) {
            var s, l = r.ownerDocument, u = r.nodeName, p = xe[u];
            return p || (s = l.body.appendChild(l.createElement(u)), p = c.css(s, "display"), s.parentNode.removeChild(s), p === "none" && (p = "block"), xe[u] = p, p)
        }

        function vt(r, s) {
            for (var l, u, p = [], g = 0, m = r.length; g < m; g++) u = r[g], u.style && (l = u.style.display, s ? (l === "none" && (p[g] = ae.get(u, "display") || null, p[g] || (u.style.display = "")), u.style.display === "" && V(u) && (p[g] = it(u))) : l !== "none" && (p[g] = "none", ae.set(u, "display", l)));
            for (g = 0; g < m; g++) p[g] != null && (r[g].style.display = p[g]);
            return r
        }

        c.fn.extend({
            show: function () {
                return vt(this, !0)
            }, hide: function () {
                return vt(this)
            }, toggle: function (r) {
                return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function () {
                    V(this) ? c(this).show() : c(this).hide()
                })
            }
        });
        var mt = /^(?:checkbox|radio)$/i, Yt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            _ = /^$|^module$|\/(?:java|ecma)script/i;
        (function () {
            var r = de.createDocumentFragment(), s = r.appendChild(de.createElement("div")),
                l = de.createElement("input");
            l.setAttribute("type", "radio"), l.setAttribute("checked", "checked"), l.setAttribute("name", "t"), s.appendChild(l), K.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", K.option = !!s.lastChild
        })();
        var k = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        k.tbody = k.tfoot = k.colgroup = k.caption = k.thead, k.th = k.td, K.option || (k.optgroup = k.option = [1, "<select multiple='multiple'>", "</select>"]);

        function A(r, s) {
            var l;
            return typeof r.getElementsByTagName < "u" ? l = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? l = r.querySelectorAll(s || "*") : l = [], s === void 0 || s && Ae(r, s) ? c.merge([r], l) : l
        }

        function I(r, s) {
            for (var l = 0, u = r.length; l < u; l++) ae.set(r[l], "globalEval", !s || ae.get(s[l], "globalEval"))
        }

        var G = /<|&#?\w+;/;

        function z(r, s, l, u, p) {
            for (var g, m, D, b, M, j, q = s.createDocumentFragment(), H = [], X = 0, De = r.length; X < De; X++) if (g = r[X], g || g === 0) if (Dt(g) === "object") c.merge(H, g.nodeType ? [g] : g); else if (!G.test(g)) H.push(s.createTextNode(g)); else {
                for (m = m || q.appendChild(s.createElement("div")), D = (Yt.exec(g) || ["", ""])[1].toLowerCase(), b = k[D] || k._default, m.innerHTML = b[1] + c.htmlPrefilter(g) + b[2], j = b[0]; j--;) m = m.lastChild;
                c.merge(H, m.childNodes), m = q.firstChild, m.textContent = ""
            }
            for (q.textContent = "", X = 0; g = H[X++];) {
                if (u && c.inArray(g, u) > -1) {
                    p && p.push(g);
                    continue
                }
                if (M = v(g), m = A(q.appendChild(g), "script"), M && I(m), l) for (j = 0; g = m[j++];) _.test(g.type || "") && l.push(g)
            }
            return q
        }

        var Q = /^([^.]*)(?:\.(.+)|)/;

        function J() {
            return !0
        }

        function ie() {
            return !1
        }

        function pe(r, s, l, u, p, g) {
            var m, D;
            if (typeof s == "object") {
                typeof l != "string" && (u = u || l, l = void 0);
                for (D in s) pe(r, D, l, u, s[D], g);
                return r
            }
            if (u == null && p == null ? (p = l, u = l = void 0) : p == null && (typeof l == "string" ? (p = u, u = void 0) : (p = u, u = l, l = void 0)), p === !1) p = ie; else if (!p) return r;
            return g === 1 && (m = p, p = function (b) {
                return c().off(b), m.apply(this, arguments)
            }, p.guid = m.guid || (m.guid = c.guid++)), r.each(function () {
                c.event.add(this, s, p, u, l)
            })
        }

        c.event = {
            global: {}, add: function (r, s, l, u, p) {
                var g, m, D, b, M, j, q, H, X, De, ze, Pe = ae.get(r);
                if (rn(r)) for (l.handler && (g = l, l = g.handler, p = g.selector), p && c.find.matchesSelector(Ut, p), l.guid || (l.guid = c.guid++), (b = Pe.events) || (b = Pe.events = Object.create(null)), (m = Pe.handle) || (m = Pe.handle = function (Ct) {
                    return typeof c < "u" && c.event.triggered !== Ct.type ? c.event.dispatch.apply(r, arguments) : void 0
                }), s = (s || "").match(Pt) || [""], M = s.length; M--;) D = Q.exec(s[M]) || [], X = ze = D[1], De = (D[2] || "").split(".").sort(), X && (q = c.event.special[X] || {}, X = (p ? q.delegateType : q.bindType) || X, q = c.event.special[X] || {}, j = c.extend({
                    type: X,
                    origType: ze,
                    data: u,
                    handler: l,
                    guid: l.guid,
                    selector: p,
                    needsContext: p && c.expr.match.needsContext.test(p),
                    namespace: De.join(".")
                }, g), (H = b[X]) || (H = b[X] = [], H.delegateCount = 0, (!q.setup || q.setup.call(r, u, De, m) === !1) && r.addEventListener && r.addEventListener(X, m)), q.add && (q.add.call(r, j), j.handler.guid || (j.handler.guid = l.guid)), p ? H.splice(H.delegateCount++, 0, j) : H.push(j), c.event.global[X] = !0)
            }, remove: function (r, s, l, u, p) {
                var g, m, D, b, M, j, q, H, X, De, ze, Pe = ae.hasData(r) && ae.get(r);
                if (!(!Pe || !(b = Pe.events))) {
                    for (s = (s || "").match(Pt) || [""], M = s.length; M--;) {
                        if (D = Q.exec(s[M]) || [], X = ze = D[1], De = (D[2] || "").split(".").sort(), !X) {
                            for (X in b) c.event.remove(r, X + s[M], l, u, !0);
                            continue
                        }
                        for (q = c.event.special[X] || {}, X = (u ? q.delegateType : q.bindType) || X, H = b[X] || [], D = D[2] && new RegExp("(^|\\.)" + De.join("\\.(?:.*\\.|)") + "(\\.|$)"), m = g = H.length; g--;) j = H[g], (p || ze === j.origType) && (!l || l.guid === j.guid) && (!D || D.test(j.namespace)) && (!u || u === j.selector || u === "**" && j.selector) && (H.splice(g, 1), j.selector && H.delegateCount--, q.remove && q.remove.call(r, j));
                        m && !H.length && ((!q.teardown || q.teardown.call(r, De, Pe.handle) === !1) && c.removeEvent(r, X, Pe.handle), delete b[X])
                    }
                    c.isEmptyObject(b) && ae.remove(r, "handle events")
                }
            }, dispatch: function (r) {
                var s, l, u, p, g, m, D = new Array(arguments.length), b = c.event.fix(r),
                    M = (ae.get(this, "events") || Object.create(null))[b.type] || [],
                    j = c.event.special[b.type] || {};
                for (D[0] = b, s = 1; s < arguments.length; s++) D[s] = arguments[s];
                if (b.delegateTarget = this, !(j.preDispatch && j.preDispatch.call(this, b) === !1)) {
                    for (m = c.event.handlers.call(this, b, M), s = 0; (p = m[s++]) && !b.isPropagationStopped();) for (b.currentTarget = p.elem, l = 0; (g = p.handlers[l++]) && !b.isImmediatePropagationStopped();) (!b.rnamespace || g.namespace === !1 || b.rnamespace.test(g.namespace)) && (b.handleObj = g, b.data = g.data, u = ((c.event.special[g.origType] || {}).handle || g.handler).apply(p.elem, D), u !== void 0 && (b.result = u) === !1 && (b.preventDefault(), b.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, b), b.result
                }
            }, handlers: function (r, s) {
                var l, u, p, g, m, D = [], b = s.delegateCount, M = r.target;
                if (b && M.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; M !== this; M = M.parentNode || this) if (M.nodeType === 1 && !(r.type === "click" && M.disabled === !0)) {
                        for (g = [], m = {}, l = 0; l < b; l++) u = s[l], p = u.selector + " ", m[p] === void 0 && (m[p] = u.needsContext ? c(p, this).index(M) > -1 : c.find(p, this, null, [M]).length), m[p] && g.push(u);
                        g.length && D.push({elem: M, handlers: g})
                    }
                }
                return M = this, b < s.length && D.push({elem: M, handlers: s.slice(b)}), D
            }, addProp: function (r, s) {
                Object.defineProperty(c.Event.prototype, r, {
                    enumerable: !0,
                    configurable: !0,
                    get: re(s) ? function () {
                        if (this.originalEvent) return s(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[r]
                    },
                    set: function (l) {
                        Object.defineProperty(this, r, {enumerable: !0, configurable: !0, writable: !0, value: l})
                    }
                })
            }, fix: function (r) {
                return r[c.expando] ? r : new c.Event(r)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (r) {
                        var s = this || r;
                        return mt.test(s.type) && s.click && Ae(s, "input") && ye(s, "click", !0), !1
                    }, trigger: function (r) {
                        var s = this || r;
                        return mt.test(s.type) && s.click && Ae(s, "input") && ye(s, "click"), !0
                    }, _default: function (r) {
                        var s = r.target;
                        return mt.test(s.type) && s.click && Ae(s, "input") && ae.get(s, "click") || Ae(s, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (r) {
                        r.result !== void 0 && r.originalEvent && (r.originalEvent.returnValue = r.result)
                    }
                }
            }
        };

        function ye(r, s, l) {
            if (!l) {
                ae.get(r, s) === void 0 && c.event.add(r, s, J);
                return
            }
            ae.set(r, s, !1), c.event.add(r, s, {
                namespace: !1, handler: function (u) {
                    var p, g = ae.get(this, s);
                    if (u.isTrigger & 1 && this[s]) {
                        if (g) (c.event.special[s] || {}).delegateType && u.stopPropagation(); else if (g = i.call(arguments), ae.set(this, s, g), this[s](), p = ae.get(this, s), ae.set(this, s, !1), g !== p) return u.stopImmediatePropagation(), u.preventDefault(), p
                    } else g && (ae.set(this, s, c.event.trigger(g[0], g.slice(1), this)), u.stopPropagation(), u.isImmediatePropagationStopped = J)
                }
            })
        }

        c.removeEvent = function (r, s, l) {
            r.removeEventListener && r.removeEventListener(s, l)
        }, c.Event = function (r, s) {
            if (!(this instanceof c.Event)) return new c.Event(r, s);
            r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? J : ie, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && c.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[c.expando] = !0
        }, c.Event.prototype = {
            constructor: c.Event,
            isDefaultPrevented: ie,
            isPropagationStopped: ie,
            isImmediatePropagationStopped: ie,
            isSimulated: !1,
            preventDefault: function () {
                var r = this.originalEvent;
                this.isDefaultPrevented = J, r && !this.isSimulated && r.preventDefault()
            },
            stopPropagation: function () {
                var r = this.originalEvent;
                this.isPropagationStopped = J, r && !this.isSimulated && r.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var r = this.originalEvent;
                this.isImmediatePropagationStopped = J, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation()
            }
        }, c.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, c.event.addProp), c.each({focus: "focusin", blur: "focusout"}, function (r, s) {
            function l(u) {
                if (de.documentMode) {
                    var p = ae.get(this, "handle"), g = c.event.fix(u);
                    g.type = u.type === "focusin" ? "focus" : "blur", g.isSimulated = !0, p(u), g.target === g.currentTarget && p(g)
                } else c.event.simulate(s, u.target, c.event.fix(u))
            }

            c.event.special[r] = {
                setup: function () {
                    var u;
                    if (ye(this, r, !0), de.documentMode) u = ae.get(this, s), u || this.addEventListener(s, l), ae.set(this, s, (u || 0) + 1); else return !1
                }, trigger: function () {
                    return ye(this, r), !0
                }, teardown: function () {
                    var u;
                    if (de.documentMode) u = ae.get(this, s) - 1, u ? ae.set(this, s, u) : (this.removeEventListener(s, l), ae.remove(this, s)); else return !1
                }, _default: function (u) {
                    return ae.get(u.target, r)
                }, delegateType: s
            }, c.event.special[s] = {
                setup: function () {
                    var u = this.ownerDocument || this.document || this, p = de.documentMode ? this : u,
                        g = ae.get(p, s);
                    g || (de.documentMode ? this.addEventListener(s, l) : u.addEventListener(r, l, !0)), ae.set(p, s, (g || 0) + 1)
                }, teardown: function () {
                    var u = this.ownerDocument || this.document || this, p = de.documentMode ? this : u,
                        g = ae.get(p, s) - 1;
                    g ? ae.set(p, s, g) : (de.documentMode ? this.removeEventListener(s, l) : u.removeEventListener(r, l, !0), ae.remove(p, s))
                }
            }
        }), c.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (r, s) {
            c.event.special[r] = {
                delegateType: s, bindType: s, handle: function (l) {
                    var u, p = this, g = l.relatedTarget, m = l.handleObj;
                    return (!g || g !== p && !c.contains(p, g)) && (l.type = m.origType, u = m.handler.apply(this, arguments), l.type = s), u
                }
            }
        }), c.fn.extend({
            on: function (r, s, l, u) {
                return pe(this, r, s, l, u)
            }, one: function (r, s, l, u) {
                return pe(this, r, s, l, u, 1)
            }, off: function (r, s, l) {
                var u, p;
                if (r && r.preventDefault && r.handleObj) return u = r.handleObj, c(r.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
                if (typeof r == "object") {
                    for (p in r) this.off(p, s, r[p]);
                    return this
                }
                return (s === !1 || typeof s == "function") && (l = s, s = void 0), l === !1 && (l = ie), this.each(function () {
                    c.event.remove(this, r, l, s)
                })
            }
        });
        var ge = /<script|<style|<link/i, Ie = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

        function Me(r, s) {
            return Ae(r, "table") && Ae(s.nodeType !== 11 ? s : s.firstChild, "tr") && c(r).children("tbody")[0] || r
        }

        function at(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function en(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function yn(r, s) {
            var l, u, p, g, m, D, b;
            if (s.nodeType === 1) {
                if (ae.hasData(r) && (g = ae.get(r), b = g.events, b)) {
                    ae.remove(s, "handle events");
                    for (p in b) for (l = 0, u = b[p].length; l < u; l++) c.event.add(s, p, b[p][l])
                }
                pt.hasData(r) && (m = pt.access(r), D = c.extend({}, m), pt.set(s, D))
            }
        }

        function Wt(r, s) {
            var l = s.nodeName.toLowerCase();
            l === "input" && mt.test(r.type) ? s.checked = r.checked : (l === "input" || l === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function yt(r, s, l, u) {
            s = f(s);
            var p, g, m, D, b, M, j = 0, q = r.length, H = q - 1, X = s[0], De = re(X);
            if (De || q > 1 && typeof X == "string" && !K.checkClone && Ie.test(X)) return r.each(function (ze) {
                var Pe = r.eq(ze);
                De && (s[0] = X.call(this, ze, Pe.html())), yt(Pe, s, l, u)
            });
            if (q && (p = z(s, r[0].ownerDocument, !1, r, u), g = p.firstChild, p.childNodes.length === 1 && (p = g), g || u)) {
                for (m = c.map(A(p, "script"), at), D = m.length; j < q; j++) b = p, j !== H && (b = c.clone(b, !0, !0), D && c.merge(m, A(b, "script"))), l.call(r[j], b, j);
                if (D) for (M = m[m.length - 1].ownerDocument, c.map(m, en), j = 0; j < D; j++) b = m[j], _.test(b.type || "") && !ae.access(b, "globalEval") && c.contains(M, b) && (b.src && (b.type || "").toLowerCase() !== "module" ? c._evalUrl && !b.noModule && c._evalUrl(b.src, {nonce: b.nonce || b.getAttribute("nonce")}, M) : St(b.textContent.replace(Ne, ""), b, M))
            }
            return r
        }

        function Hn(r, s, l) {
            for (var u, p = s ? c.filter(s, r) : r, g = 0; (u = p[g]) != null; g++) !l && u.nodeType === 1 && c.cleanData(A(u)), u.parentNode && (l && v(u) && I(A(u, "script")), u.parentNode.removeChild(u));
            return r
        }

        c.extend({
            htmlPrefilter: function (r) {
                return r
            }, clone: function (r, s, l) {
                var u, p, g, m, D = r.cloneNode(!0), b = v(r);
                if (!K.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !c.isXMLDoc(r)) for (m = A(D), g = A(r), u = 0, p = g.length; u < p; u++) Wt(g[u], m[u]);
                if (s) if (l) for (g = g || A(r), m = m || A(D), u = 0, p = g.length; u < p; u++) yn(g[u], m[u]); else yn(r, D);
                return m = A(D, "script"), m.length > 0 && I(m, !b && A(r, "script")), D
            }, cleanData: function (r) {
                for (var s, l, u, p = c.event.special, g = 0; (l = r[g]) !== void 0; g++) if (rn(l)) {
                    if (s = l[ae.expando]) {
                        if (s.events) for (u in s.events) p[u] ? c.event.remove(l, u) : c.removeEvent(l, u, s.handle);
                        l[ae.expando] = void 0
                    }
                    l[pt.expando] && (l[pt.expando] = void 0)
                }
            }
        }), c.fn.extend({
            detach: function (r) {
                return Hn(this, r, !0)
            }, remove: function (r) {
                return Hn(this, r)
            }, text: function (r) {
                return Be(this, function (s) {
                    return s === void 0 ? c.text(this) : this.empty().each(function () {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = s)
                    })
                }, null, r, arguments.length)
            }, append: function () {
                return yt(this, arguments, function (r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Me(this, r);
                        s.appendChild(r)
                    }
                })
            }, prepend: function () {
                return yt(this, arguments, function (r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Me(this, r);
                        s.insertBefore(r, s.firstChild)
                    }
                })
            }, before: function () {
                return yt(this, arguments, function (r) {
                    this.parentNode && this.parentNode.insertBefore(r, this)
                })
            }, after: function () {
                return yt(this, arguments, function (r) {
                    this.parentNode && this.parentNode.insertBefore(r, this.nextSibling)
                })
            }, empty: function () {
                for (var r, s = 0; (r = this[s]) != null; s++) r.nodeType === 1 && (c.cleanData(A(r, !1)), r.textContent = "");
                return this
            }, clone: function (r, s) {
                return r = r ?? !1, s = s ?? r, this.map(function () {
                    return c.clone(this, r, s)
                })
            }, html: function (r) {
                return Be(this, function (s) {
                    var l = this[0] || {}, u = 0, p = this.length;
                    if (s === void 0 && l.nodeType === 1) return l.innerHTML;
                    if (typeof s == "string" && !ge.test(s) && !k[(Yt.exec(s) || ["", ""])[1].toLowerCase()]) {
                        s = c.htmlPrefilter(s);
                        try {
                            for (; u < p; u++) l = this[u] || {}, l.nodeType === 1 && (c.cleanData(A(l, !1)), l.innerHTML = s);
                            l = 0
                        } catch {
                        }
                    }
                    l && this.empty().append(s)
                }, null, r, arguments.length)
            }, replaceWith: function () {
                var r = [];
                return yt(this, arguments, function (s) {
                    var l = this.parentNode;
                    c.inArray(this, r) < 0 && (c.cleanData(A(this)), l && l.replaceChild(s, this))
                }, r)
            }
        }), c.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (r, s) {
            c.fn[r] = function (l) {
                for (var u, p = [], g = c(l), m = g.length - 1, D = 0; D <= m; D++) u = D === m ? this : this.clone(!0), c(g[D])[s](u), h.apply(p, u.get());
                return this.pushStack(p)
            }
        });
        var Or = new RegExp("^(" + Qn + ")(?!px)[a-z%]+$", "i"), Yn = /^--/, Kn = function (r) {
            var s = r.ownerDocument.defaultView;
            return (!s || !s.opener) && (s = n), s.getComputedStyle(r)
        }, ga = function (r, s, l) {
            var u, p, g = {};
            for (p in s) g[p] = r.style[p], r.style[p] = s[p];
            u = l.call(r);
            for (p in s) r.style[p] = g[p];
            return u
        }, is = new RegExp(Vt.join("|"), "i");
        (function () {
            function r() {
                if (M) {
                    b.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", M.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ut.appendChild(b).appendChild(M);
                    var j = n.getComputedStyle(M);
                    l = j.top !== "1%", D = s(j.marginLeft) === 12, M.style.right = "60%", g = s(j.right) === 36, u = s(j.width) === 36, M.style.position = "absolute", p = s(M.offsetWidth / 3) === 12, Ut.removeChild(b), M = null
                }
            }

            function s(j) {
                return Math.round(parseFloat(j))
            }

            var l, u, p, g, m, D, b = de.createElement("div"), M = de.createElement("div");
            M.style && (M.style.backgroundClip = "content-box", M.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = M.style.backgroundClip === "content-box", c.extend(K, {
                boxSizingReliable: function () {
                    return r(), u
                }, pixelBoxStyles: function () {
                    return r(), g
                }, pixelPosition: function () {
                    return r(), l
                }, reliableMarginLeft: function () {
                    return r(), D
                }, scrollboxSize: function () {
                    return r(), p
                }, reliableTrDimensions: function () {
                    var j, q, H, X;
                    return m == null && (j = de.createElement("table"), q = de.createElement("tr"), H = de.createElement("div"), j.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", q.style.cssText = "box-sizing:content-box;border:1px solid", q.style.height = "1px", H.style.height = "9px", H.style.display = "block", Ut.appendChild(j).appendChild(q).appendChild(H), X = n.getComputedStyle(q), m = parseInt(X.height, 10) + parseInt(X.borderTopWidth, 10) + parseInt(X.borderBottomWidth, 10) === q.offsetHeight, Ut.removeChild(j)), m
                }
            }))
        })();

        function _n(r, s, l) {
            var u, p, g, m, D = Yn.test(s), b = r.style;
            return l = l || Kn(r), l && (m = l.getPropertyValue(s) || l[s], D && m && (m = m.replace(gn, "$1") || void 0), m === "" && !v(r) && (m = c.style(r, s)), !K.pixelBoxStyles() && Or.test(m) && is.test(s) && (u = b.width, p = b.minWidth, g = b.maxWidth, b.minWidth = b.maxWidth = b.width = m, m = l.width, b.width = u, b.minWidth = p, b.maxWidth = g)), m !== void 0 ? m + "" : m
        }

        function Ar(r, s) {
            return {
                get: function () {
                    if (r()) {
                        delete this.get;
                        return
                    }
                    return (this.get = s).apply(this, arguments)
                }
            }
        }

        var Fr = ["Webkit", "Moz", "ms"], ni = de.createElement("div").style, Di = {};

        function as(r) {
            for (var s = r[0].toUpperCase() + r.slice(1), l = Fr.length; l--;) if (r = Fr[l] + s, r in ni) return r
        }

        function Oi(r) {
            var s = c.cssProps[r] || Di[r];
            return s || (r in ni ? r : Di[r] = as(r) || r)
        }

        var ss = /^(none|table(?!-c[ea]).+)/, os = {position: "absolute", visibility: "hidden", display: "block"},
            va = {letterSpacing: "0", fontWeight: "400"};

        function ma(r, s, l) {
            var u = Cn.exec(s);
            return u ? Math.max(0, u[2] - (l || 0)) + (u[3] || "px") : s
        }

        function Ai(r, s, l, u, p, g) {
            var m = s === "width" ? 1 : 0, D = 0, b = 0, M = 0;
            if (l === (u ? "border" : "content")) return 0;
            for (; m < 4; m += 2) l === "margin" && (M += c.css(r, l + Vt[m], !0, p)), u ? (l === "content" && (b -= c.css(r, "padding" + Vt[m], !0, p)), l !== "margin" && (b -= c.css(r, "border" + Vt[m] + "Width", !0, p))) : (b += c.css(r, "padding" + Vt[m], !0, p), l !== "padding" ? b += c.css(r, "border" + Vt[m] + "Width", !0, p) : D += c.css(r, "border" + Vt[m] + "Width", !0, p));
            return !u && g >= 0 && (b += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - g - b - D - .5)) || 0), b + M
        }

        function xi(r, s, l) {
            var u = Kn(r), p = !K.boxSizingReliable() || l, g = p && c.css(r, "boxSizing", !1, u) === "border-box",
                m = g, D = _n(r, s, u), b = "offset" + s[0].toUpperCase() + s.slice(1);
            if (Or.test(D)) {
                if (!l) return D;
                D = "auto"
            }
            return (!K.boxSizingReliable() && g || !K.reliableTrDimensions() && Ae(r, "tr") || D === "auto" || !parseFloat(D) && c.css(r, "display", !1, u) === "inline") && r.getClientRects().length && (g = c.css(r, "boxSizing", !1, u) === "border-box", m = b in r, m && (D = r[b])), D = parseFloat(D) || 0, D + Ai(r, s, l || (g ? "border" : "content"), m, u, D) + "px"
        }

        c.extend({
            cssHooks: {
                opacity: {
                    get: function (r, s) {
                        if (s) {
                            var l = _n(r, "opacity");
                            return l === "" ? "1" : l
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageSlice: !0,
                columnCount: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                scale: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0
            },
            cssProps: {},
            style: function (r, s, l, u) {
                if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
                    var p, g, m, D = ft(s), b = Yn.test(s), M = r.style;
                    if (b || (s = Oi(D)), m = c.cssHooks[s] || c.cssHooks[D], l !== void 0) {
                        if (g = typeof l, g === "string" && (p = Cn.exec(l)) && p[1] && (l = se(r, s, p), g = "number"), l == null || l !== l) return;
                        g === "number" && !b && (l += p && p[3] || (c.cssNumber[D] ? "" : "px")), !K.clearCloneStyle && l === "" && s.indexOf("background") === 0 && (M[s] = "inherit"), (!m || !("set" in m) || (l = m.set(r, l, u)) !== void 0) && (b ? M.setProperty(s, l) : M[s] = l)
                    } else return m && "get" in m && (p = m.get(r, !1, u)) !== void 0 ? p : M[s]
                }
            },
            css: function (r, s, l, u) {
                var p, g, m, D = ft(s), b = Yn.test(s);
                return b || (s = Oi(D)), m = c.cssHooks[s] || c.cssHooks[D], m && "get" in m && (p = m.get(r, !0, l)), p === void 0 && (p = _n(r, s, u)), p === "normal" && s in va && (p = va[s]), l === "" || l ? (g = parseFloat(p), l === !0 || isFinite(g) ? g || 0 : p) : p
            }
        }), c.each(["height", "width"], function (r, s) {
            c.cssHooks[s] = {
                get: function (l, u, p) {
                    if (u) return ss.test(c.css(l, "display")) && (!l.getClientRects().length || !l.getBoundingClientRect().width) ? ga(l, os, function () {
                        return xi(l, s, p)
                    }) : xi(l, s, p)
                }, set: function (l, u, p) {
                    var g, m = Kn(l), D = !K.scrollboxSize() && m.position === "absolute", b = D || p,
                        M = b && c.css(l, "boxSizing", !1, m) === "border-box", j = p ? Ai(l, s, p, M, m) : 0;
                    return M && D && (j -= Math.ceil(l["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(m[s]) - Ai(l, s, "border", !1, m) - .5)), j && (g = Cn.exec(u)) && (g[3] || "px") !== "px" && (l.style[s] = u, u = c.css(l, s)), ma(l, u, j)
                }
            }
        }), c.cssHooks.marginLeft = Ar(K.reliableMarginLeft, function (r, s) {
            if (s) return (parseFloat(_n(r, "marginLeft")) || r.getBoundingClientRect().left - ga(r, {marginLeft: 0}, function () {
                return r.getBoundingClientRect().left
            })) + "px"
        }), c.each({margin: "", padding: "", border: "Width"}, function (r, s) {
            c.cssHooks[r + s] = {
                expand: function (l) {
                    for (var u = 0, p = {}, g = typeof l == "string" ? l.split(" ") : [l]; u < 4; u++) p[r + Vt[u] + s] = g[u] || g[u - 2] || g[0];
                    return p
                }
            }, r !== "margin" && (c.cssHooks[r + s].set = ma)
        }), c.fn.extend({
            css: function (r, s) {
                return Be(this, function (l, u, p) {
                    var g, m, D = {}, b = 0;
                    if (Array.isArray(u)) {
                        for (g = Kn(l), m = u.length; b < m; b++) D[u[b]] = c.css(l, u[b], !1, g);
                        return D
                    }
                    return p !== void 0 ? c.style(l, u, p) : c.css(l, u)
                }, r, s, arguments.length > 1)
            }
        });

        function At(r, s, l, u, p) {
            return new At.prototype.init(r, s, l, u, p)
        }

        c.Tween = At, At.prototype = {
            constructor: At, init: function (r, s, l, u, p, g) {
                this.elem = r, this.prop = l, this.easing = p || c.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = u, this.unit = g || (c.cssNumber[l] ? "" : "px")
            }, cur: function () {
                var r = At.propHooks[this.prop];
                return r && r.get ? r.get(this) : At.propHooks._default.get(this)
            }, run: function (r) {
                var s, l = At.propHooks[this.prop];
                return this.options.duration ? this.pos = s = c.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration) : this.pos = s = r, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), l && l.set ? l.set(this) : At.propHooks._default.set(this), this
            }
        }, At.prototype.init.prototype = At.prototype, At.propHooks = {
            _default: {
                get: function (r) {
                    var s;
                    return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (s = c.css(r.elem, r.prop, ""), !s || s === "auto" ? 0 : s)
                }, set: function (r) {
                    c.fx.step[r.prop] ? c.fx.step[r.prop](r) : r.elem.nodeType === 1 && (c.cssHooks[r.prop] || r.elem.style[Oi(r.prop)] != null) ? c.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now
                }
            }
        }, At.propHooks.scrollTop = At.propHooks.scrollLeft = {
            set: function (r) {
                r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now)
            }
        }, c.easing = {
            linear: function (r) {
                return r
            }, swing: function (r) {
                return .5 - Math.cos(r * Math.PI) / 2
            }, _default: "swing"
        }, c.fx = At.prototype.init, c.fx.step = {};
        var xr, Xn, Nr = /^(?:toggle|show|hide)$/, ls = /queueHooks$/;

        function fr() {
            Xn && (de.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(fr) : n.setTimeout(fr, c.fx.interval), c.fx.tick())
        }

        function kn() {
            return n.setTimeout(function () {
                xr = void 0
            }), xr = Date.now()
        }

        function Mr(r, s) {
            var l, u = 0, p = {height: r};
            for (s = s ? 1 : 0; u < 4; u += 2 - s) l = Vt[u], p["margin" + l] = p["padding" + l] = r;
            return s && (p.opacity = p.width = r), p
        }

        function ya(r, s, l) {
            for (var u, p = (an.tweeners[s] || []).concat(an.tweeners["*"]), g = 0, m = p.length; g < m; g++) if (u = p[g].call(l, s, r)) return u
        }

        function jr(r, s, l) {
            var u, p, g, m, D, b, M, j, q = "width" in s || "height" in s, H = this, X = {}, De = r.style,
                ze = r.nodeType && V(r), Pe = ae.get(r, "fxshow");
            l.queue || (m = c._queueHooks(r, "fx"), m.unqueued == null && (m.unqueued = 0, D = m.empty.fire, m.empty.fire = function () {
                m.unqueued || D()
            }), m.unqueued++, H.always(function () {
                H.always(function () {
                    m.unqueued--, c.queue(r, "fx").length || m.empty.fire()
                })
            }));
            for (u in s) if (p = s[u], Nr.test(p)) {
                if (delete s[u], g = g || p === "toggle", p === (ze ? "hide" : "show")) if (p === "show" && Pe && Pe[u] !== void 0) ze = !0; else continue;
                X[u] = Pe && Pe[u] || c.style(r, u)
            }
            if (b = !c.isEmptyObject(s), !(!b && c.isEmptyObject(X))) {
                q && r.nodeType === 1 && (l.overflow = [De.overflow, De.overflowX, De.overflowY], M = Pe && Pe.display, M == null && (M = ae.get(r, "display")), j = c.css(r, "display"), j === "none" && (M ? j = M : (vt([r], !0), M = r.style.display || M, j = c.css(r, "display"), vt([r]))), (j === "inline" || j === "inline-block" && M != null) && c.css(r, "float") === "none" && (b || (H.done(function () {
                    De.display = M
                }), M == null && (j = De.display, M = j === "none" ? "" : j)), De.display = "inline-block")), l.overflow && (De.overflow = "hidden", H.always(function () {
                    De.overflow = l.overflow[0], De.overflowX = l.overflow[1], De.overflowY = l.overflow[2]
                })), b = !1;
                for (u in X) b || (Pe ? "hidden" in Pe && (ze = Pe.hidden) : Pe = ae.access(r, "fxshow", {display: M}), g && (Pe.hidden = !ze), ze && vt([r], !0), H.done(function () {
                    ze || vt([r]), ae.remove(r, "fxshow");
                    for (u in X) c.style(r, u, X[u])
                })), b = ya(ze ? Pe[u] : 0, u, H), u in Pe || (Pe[u] = b.start, ze && (b.end = b.start, b.start = 0))
            }
        }

        function _a(r, s) {
            var l, u, p, g, m;
            for (l in r) if (u = ft(l), p = s[u], g = r[l], Array.isArray(g) && (p = g[1], g = r[l] = g[0]), l !== u && (r[u] = g, delete r[l]), m = c.cssHooks[u], m && "expand" in m) {
                g = m.expand(g), delete r[u];
                for (l in g) l in r || (r[l] = g[l], s[l] = p)
            } else s[u] = p
        }

        function an(r, s, l) {
            var u, p, g = 0, m = an.prefilters.length, D = c.Deferred().always(function () {
                delete b.elem
            }), b = function () {
                if (p) return !1;
                for (var q = xr || kn(), H = Math.max(0, M.startTime + M.duration - q), X = H / M.duration || 0, De = 1 - X, ze = 0, Pe = M.tweens.length; ze < Pe; ze++) M.tweens[ze].run(De);
                return D.notifyWith(r, [M, De, H]), De < 1 && Pe ? H : (Pe || D.notifyWith(r, [M, 1, 0]), D.resolveWith(r, [M]), !1)
            }, M = D.promise({
                elem: r,
                props: c.extend({}, s),
                opts: c.extend(!0, {specialEasing: {}, easing: c.easing._default}, l),
                originalProperties: s,
                originalOptions: l,
                startTime: xr || kn(),
                duration: l.duration,
                tweens: [],
                createTween: function (q, H) {
                    var X = c.Tween(r, M.opts, q, H, M.opts.specialEasing[q] || M.opts.easing);
                    return M.tweens.push(X), X
                },
                stop: function (q) {
                    var H = 0, X = q ? M.tweens.length : 0;
                    if (p) return this;
                    for (p = !0; H < X; H++) M.tweens[H].run(1);
                    return q ? (D.notifyWith(r, [M, 1, 0]), D.resolveWith(r, [M, q])) : D.rejectWith(r, [M, q]), this
                }
            }), j = M.props;
            for (_a(j, M.opts.specialEasing); g < m; g++) if (u = an.prefilters[g].call(M, r, j, M.opts), u) return re(u.stop) && (c._queueHooks(M.elem, M.opts.queue).stop = u.stop.bind(u)), u;
            return c.map(j, ya, M), re(M.opts.start) && M.opts.start.call(r, M), M.progress(M.opts.progress).done(M.opts.done, M.opts.complete).fail(M.opts.fail).always(M.opts.always), c.fx.timer(c.extend(b, {
                elem: r,
                anim: M,
                queue: M.opts.queue
            })), M
        }

        c.Animation = c.extend(an, {
            tweeners: {
                "*": [function (r, s) {
                    var l = this.createTween(r, s);
                    return se(l.elem, r, Cn.exec(s), l), l
                }]
            }, tweener: function (r, s) {
                re(r) ? (s = r, r = ["*"]) : r = r.match(Pt);
                for (var l, u = 0, p = r.length; u < p; u++) l = r[u], an.tweeners[l] = an.tweeners[l] || [], an.tweeners[l].unshift(s)
            }, prefilters: [jr], prefilter: function (r, s) {
                s ? an.prefilters.unshift(r) : an.prefilters.push(r)
            }
        }), c.speed = function (r, s, l) {
            var u = r && typeof r == "object" ? c.extend({}, r) : {
                complete: l || !l && s || re(r) && r,
                duration: r,
                easing: l && s || s && !re(s) && s
            };
            return c.fx.off ? u.duration = 0 : typeof u.duration != "number" && (u.duration in c.fx.speeds ? u.duration = c.fx.speeds[u.duration] : u.duration = c.fx.speeds._default), (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function () {
                re(u.old) && u.old.call(this), u.queue && c.dequeue(this, u.queue)
            }, u
        }, c.fn.extend({
            fadeTo: function (r, s, l, u) {
                return this.filter(V).css("opacity", 0).show().end().animate({opacity: s}, r, l, u)
            }, animate: function (r, s, l, u) {
                var p = c.isEmptyObject(r), g = c.speed(s, l, u), m = function () {
                    var D = an(this, c.extend({}, r), g);
                    (p || ae.get(this, "finish")) && D.stop(!0)
                };
                return m.finish = m, p || g.queue === !1 ? this.each(m) : this.queue(g.queue, m)
            }, stop: function (r, s, l) {
                var u = function (p) {
                    var g = p.stop;
                    delete p.stop, g(l)
                };
                return typeof r != "string" && (l = s, s = r, r = void 0), s && this.queue(r || "fx", []), this.each(function () {
                    var p = !0, g = r != null && r + "queueHooks", m = c.timers, D = ae.get(this);
                    if (g) D[g] && D[g].stop && u(D[g]); else for (g in D) D[g] && D[g].stop && ls.test(g) && u(D[g]);
                    for (g = m.length; g--;) m[g].elem === this && (r == null || m[g].queue === r) && (m[g].anim.stop(l), p = !1, m.splice(g, 1));
                    (p || !l) && c.dequeue(this, r)
                })
            }, finish: function (r) {
                return r !== !1 && (r = r || "fx"), this.each(function () {
                    var s, l = ae.get(this), u = l[r + "queue"], p = l[r + "queueHooks"], g = c.timers,
                        m = u ? u.length : 0;
                    for (l.finish = !0, c.queue(this, r, []), p && p.stop && p.stop.call(this, !0), s = g.length; s--;) g[s].elem === this && g[s].queue === r && (g[s].anim.stop(!0), g.splice(s, 1));
                    for (s = 0; s < m; s++) u[s] && u[s].finish && u[s].finish.call(this);
                    delete l.finish
                })
            }
        }), c.each(["toggle", "show", "hide"], function (r, s) {
            var l = c.fn[s];
            c.fn[s] = function (u, p, g) {
                return u == null || typeof u == "boolean" ? l.apply(this, arguments) : this.animate(Mr(s, !0), u, p, g)
            }
        }), c.each({
            slideDown: Mr("show"),
            slideUp: Mr("hide"),
            slideToggle: Mr("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (r, s) {
            c.fn[r] = function (l, u, p) {
                return this.animate(s, l, u, p)
            }
        }), c.timers = [], c.fx.tick = function () {
            var r, s = 0, l = c.timers;
            for (xr = Date.now(); s < l.length; s++) r = l[s], !r() && l[s] === r && l.splice(s--, 1);
            l.length || c.fx.stop(), xr = void 0
        }, c.fx.timer = function (r) {
            c.timers.push(r), c.fx.start()
        }, c.fx.interval = 13, c.fx.start = function () {
            Xn || (Xn = !0, fr())
        }, c.fx.stop = function () {
            Xn = null
        }, c.fx.speeds = {slow: 600, fast: 200, _default: 400}, c.fn.delay = function (r, s) {
            return r = c.fx && c.fx.speeds[r] || r, s = s || "fx", this.queue(s, function (l, u) {
                var p = n.setTimeout(l, r);
                u.stop = function () {
                    n.clearTimeout(p)
                }
            })
        }, function () {
            var r = de.createElement("input"), s = de.createElement("select"),
                l = s.appendChild(de.createElement("option"));
            r.type = "checkbox", K.checkOn = r.value !== "", K.optSelected = l.selected, r = de.createElement("input"), r.value = "t", r.type = "radio", K.radioValue = r.value === "t"
        }();
        var ri, dr = c.expr.attrHandle;
        c.fn.extend({
            attr: function (r, s) {
                return Be(this, c.attr, r, s, arguments.length > 1)
            }, removeAttr: function (r) {
                return this.each(function () {
                    c.removeAttr(this, r)
                })
            }
        }), c.extend({
            attr: function (r, s, l) {
                var u, p, g = r.nodeType;
                if (!(g === 3 || g === 8 || g === 2)) {
                    if (typeof r.getAttribute > "u") return c.prop(r, s, l);
                    if ((g !== 1 || !c.isXMLDoc(r)) && (p = c.attrHooks[s.toLowerCase()] || (c.expr.match.bool.test(s) ? ri : void 0)), l !== void 0) {
                        if (l === null) {
                            c.removeAttr(r, s);
                            return
                        }
                        return p && "set" in p && (u = p.set(r, l, s)) !== void 0 ? u : (r.setAttribute(s, l + ""), l)
                    }
                    return p && "get" in p && (u = p.get(r, s)) !== null ? u : (u = c.find.attr(r, s), u ?? void 0)
                }
            }, attrHooks: {
                type: {
                    set: function (r, s) {
                        if (!K.radioValue && s === "radio" && Ae(r, "input")) {
                            var l = r.value;
                            return r.setAttribute("type", s), l && (r.value = l), s
                        }
                    }
                }
            }, removeAttr: function (r, s) {
                var l, u = 0, p = s && s.match(Pt);
                if (p && r.nodeType === 1) for (; l = p[u++];) r.removeAttribute(l)
            }
        }), ri = {
            set: function (r, s, l) {
                return s === !1 ? c.removeAttr(r, l) : r.setAttribute(l, l), l
            }
        }, c.each(c.expr.match.bool.source.match(/\w+/g), function (r, s) {
            var l = dr[s] || c.find.attr;
            dr[s] = function (u, p, g) {
                var m, D, b = p.toLowerCase();
                return g || (D = dr[b], dr[b] = m, m = l(u, p, g) != null ? b : null, dr[b] = D), m
            }
        });
        var us = /^(?:input|select|textarea|button)$/i, fs = /^(?:a|area)$/i;
        c.fn.extend({
            prop: function (r, s) {
                return Be(this, c.prop, r, s, arguments.length > 1)
            }, removeProp: function (r) {
                return this.each(function () {
                    delete this[c.propFix[r] || r]
                })
            }
        }), c.extend({
            prop: function (r, s, l) {
                var u, p, g = r.nodeType;
                if (!(g === 3 || g === 8 || g === 2)) return (g !== 1 || !c.isXMLDoc(r)) && (s = c.propFix[s] || s, p = c.propHooks[s]), l !== void 0 ? p && "set" in p && (u = p.set(r, l, s)) !== void 0 ? u : r[s] = l : p && "get" in p && (u = p.get(r, s)) !== null ? u : r[s]
            }, propHooks: {
                tabIndex: {
                    get: function (r) {
                        var s = c.find.attr(r, "tabindex");
                        return s ? parseInt(s, 10) : us.test(r.nodeName) || fs.test(r.nodeName) && r.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), K.optSelected || (c.propHooks.selected = {
            get: function (r) {
                var s = r.parentNode;
                return s && s.parentNode && s.parentNode.selectedIndex, null
            }, set: function (r) {
                var s = r.parentNode;
                s && (s.selectedIndex, s.parentNode && s.parentNode.selectedIndex)
            }
        }), c.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            c.propFix[this.toLowerCase()] = this
        });

        function Dn(r) {
            var s = r.match(Pt) || [];
            return s.join(" ")
        }

        function Et(r) {
            return r.getAttribute && r.getAttribute("class") || ""
        }

        function Ni(r) {
            return Array.isArray(r) ? r : typeof r == "string" ? r.match(Pt) || [] : []
        }

        c.fn.extend({
            addClass: function (r) {
                var s, l, u, p, g, m;
                return re(r) ? this.each(function (D) {
                    c(this).addClass(r.call(this, D, Et(this)))
                }) : (s = Ni(r), s.length ? this.each(function () {
                    if (u = Et(this), l = this.nodeType === 1 && " " + Dn(u) + " ", l) {
                        for (g = 0; g < s.length; g++) p = s[g], l.indexOf(" " + p + " ") < 0 && (l += p + " ");
                        m = Dn(l), u !== m && this.setAttribute("class", m)
                    }
                }) : this)
            }, removeClass: function (r) {
                var s, l, u, p, g, m;
                return re(r) ? this.each(function (D) {
                    c(this).removeClass(r.call(this, D, Et(this)))
                }) : arguments.length ? (s = Ni(r), s.length ? this.each(function () {
                    if (u = Et(this), l = this.nodeType === 1 && " " + Dn(u) + " ", l) {
                        for (g = 0; g < s.length; g++) for (p = s[g]; l.indexOf(" " + p + " ") > -1;) l = l.replace(" " + p + " ", " ");
                        m = Dn(l), u !== m && this.setAttribute("class", m)
                    }
                }) : this) : this.attr("class", "")
            }, toggleClass: function (r, s) {
                var l, u, p, g, m = typeof r, D = m === "string" || Array.isArray(r);
                return re(r) ? this.each(function (b) {
                    c(this).toggleClass(r.call(this, b, Et(this), s), s)
                }) : typeof s == "boolean" && D ? s ? this.addClass(r) : this.removeClass(r) : (l = Ni(r), this.each(function () {
                    if (D) for (g = c(this), p = 0; p < l.length; p++) u = l[p], g.hasClass(u) ? g.removeClass(u) : g.addClass(u); else (r === void 0 || m === "boolean") && (u = Et(this), u && ae.set(this, "__className__", u), this.setAttribute && this.setAttribute("class", u || r === !1 ? "" : ae.get(this, "__className__") || ""))
                }))
            }, hasClass: function (r) {
                var s, l, u = 0;
                for (s = " " + r + " "; l = this[u++];) if (l.nodeType === 1 && (" " + Dn(Et(l)) + " ").indexOf(s) > -1) return !0;
                return !1
            }
        });
        var ds = /\r/g;
        c.fn.extend({
            val: function (r) {
                var s, l, u, p = this[0];
                return arguments.length ? (u = re(r), this.each(function (g) {
                    var m;
                    this.nodeType === 1 && (u ? m = r.call(this, g, c(this).val()) : m = r, m == null ? m = "" : typeof m == "number" ? m += "" : Array.isArray(m) && (m = c.map(m, function (D) {
                        return D == null ? "" : D + ""
                    })), s = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, m, "value") === void 0) && (this.value = m))
                })) : p ? (s = c.valHooks[p.type] || c.valHooks[p.nodeName.toLowerCase()], s && "get" in s && (l = s.get(p, "value")) !== void 0 ? l : (l = p.value, typeof l == "string" ? l.replace(ds, "") : l ?? "")) : void 0
            }
        }), c.extend({
            valHooks: {
                option: {
                    get: function (r) {
                        var s = c.find.attr(r, "value");
                        return s ?? Dn(c.text(r))
                    }
                }, select: {
                    get: function (r) {
                        var s, l, u, p = r.options, g = r.selectedIndex, m = r.type === "select-one", D = m ? null : [],
                            b = m ? g + 1 : p.length;
                        for (g < 0 ? u = b : u = m ? g : 0; u < b; u++) if (l = p[u], (l.selected || u === g) && !l.disabled && (!l.parentNode.disabled || !Ae(l.parentNode, "optgroup"))) {
                            if (s = c(l).val(), m) return s;
                            D.push(s)
                        }
                        return D
                    }, set: function (r, s) {
                        for (var l, u, p = r.options, g = c.makeArray(s), m = p.length; m--;) u = p[m], (u.selected = c.inArray(c.valHooks.option.get(u), g) > -1) && (l = !0);
                        return l || (r.selectedIndex = -1), g
                    }
                }
            }
        }), c.each(["radio", "checkbox"], function () {
            c.valHooks[this] = {
                set: function (r, s) {
                    if (Array.isArray(s)) return r.checked = c.inArray(c(r).val(), s) > -1
                }
            }, K.checkOn || (c.valHooks[this].get = function (r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        });
        var $r = n.location, Mi = {guid: Date.now()}, Ii = /\?/;
        c.parseXML = function (r) {
            var s, l;
            if (!r || typeof r != "string") return null;
            try {
                s = new n.DOMParser().parseFromString(r, "text/xml")
            } catch {
            }
            return l = s && s.getElementsByTagName("parsererror")[0], (!s || l) && c.error("Invalid XML: " + (l ? c.map(l.childNodes, function (u) {
                return u.textContent
            }).join(`
`) : r)), s
        };
        var Li = /^(?:focusinfocus|focusoutblur)$/, Pi = function (r) {
            r.stopPropagation()
        };
        c.extend(c.event, {
            trigger: function (r, s, l, u) {
                var p, g, m, D, b, M, j, q, H = [l || de], X = Y.call(r, "type") ? r.type : r,
                    De = Y.call(r, "namespace") ? r.namespace.split(".") : [];
                if (g = q = m = l = l || de, !(l.nodeType === 3 || l.nodeType === 8) && !Li.test(X + c.event.triggered) && (X.indexOf(".") > -1 && (De = X.split("."), X = De.shift(), De.sort()), b = X.indexOf(":") < 0 && "on" + X, r = r[c.expando] ? r : new c.Event(X, typeof r == "object" && r), r.isTrigger = u ? 2 : 3, r.namespace = De.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + De.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = l), s = s == null ? [r] : c.makeArray(s, [r]), j = c.event.special[X] || {}, !(!u && j.trigger && j.trigger.apply(l, s) === !1))) {
                    if (!u && !j.noBubble && !me(l)) {
                        for (D = j.delegateType || X, Li.test(D + X) || (g = g.parentNode); g; g = g.parentNode) H.push(g), m = g;
                        m === (l.ownerDocument || de) && H.push(m.defaultView || m.parentWindow || n)
                    }
                    for (p = 0; (g = H[p++]) && !r.isPropagationStopped();) q = g, r.type = p > 1 ? D : j.bindType || X, M = (ae.get(g, "events") || Object.create(null))[r.type] && ae.get(g, "handle"), M && M.apply(g, s), M = b && g[b], M && M.apply && rn(g) && (r.result = M.apply(g, s), r.result === !1 && r.preventDefault());
                    return r.type = X, !u && !r.isDefaultPrevented() && (!j._default || j._default.apply(H.pop(), s) === !1) && rn(l) && b && re(l[X]) && !me(l) && (m = l[b], m && (l[b] = null), c.event.triggered = X, r.isPropagationStopped() && q.addEventListener(X, Pi), l[X](), r.isPropagationStopped() && q.removeEventListener(X, Pi), c.event.triggered = void 0, m && (l[b] = m)), r.result
                }
            }, simulate: function (r, s, l) {
                var u = c.extend(new c.Event, l, {type: r, isSimulated: !0});
                c.event.trigger(u, null, s)
            }
        }), c.fn.extend({
            trigger: function (r, s) {
                return this.each(function () {
                    c.event.trigger(r, s, this)
                })
            }, triggerHandler: function (r, s) {
                var l = this[0];
                if (l) return c.event.trigger(r, s, l, !0)
            }
        });
        var cs = /\[\]$/, wa = /\r?\n/g, hs = /^(?:submit|button|image|reset|file)$/i,
            Ri = /^(?:input|select|textarea|keygen)/i;

        function ii(r, s, l, u) {
            var p;
            if (Array.isArray(s)) c.each(s, function (g, m) {
                l || cs.test(r) ? u(r, m) : ii(r + "[" + (typeof m == "object" && m != null ? g : "") + "]", m, l, u)
            }); else if (!l && Dt(s) === "object") for (p in s) ii(r + "[" + p + "]", s[p], l, u); else u(r, s)
        }

        c.param = function (r, s) {
            var l, u = [], p = function (g, m) {
                var D = re(m) ? m() : m;
                u[u.length] = encodeURIComponent(g) + "=" + encodeURIComponent(D ?? "")
            };
            if (r == null) return "";
            if (Array.isArray(r) || r.jquery && !c.isPlainObject(r)) c.each(r, function () {
                p(this.name, this.value)
            }); else for (l in r) ii(l, r[l], s, p);
            return u.join("&")
        }, c.fn.extend({
            serialize: function () {
                return c.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var r = c.prop(this, "elements");
                    return r ? c.makeArray(r) : this
                }).filter(function () {
                    var r = this.type;
                    return this.name && !c(this).is(":disabled") && Ri.test(this.nodeName) && !hs.test(r) && (this.checked || !mt.test(r))
                }).map(function (r, s) {
                    var l = c(this).val();
                    return l == null ? null : Array.isArray(l) ? c.map(l, function (u) {
                        return {
                            name: s.name, value: u.replace(wa, `\r
`)
                        }
                    }) : {
                        name: s.name, value: l.replace(wa, `\r
`)
                    }
                }).get()
            }
        });
        var ps = /%20/g, ai = /#.*$/, gs = /([?&])_=[^&]*/, Hi = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            vs = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ms = /^(?:GET|HEAD)$/, ys = /^\/\//,
            Ta = {}, Yi = {}, Sa = "*/".concat("*"), Wi = de.createElement("a");
        Wi.href = $r.href;

        function ba(r) {
            return function (s, l) {
                typeof s != "string" && (l = s, s = "*");
                var u, p = 0, g = s.toLowerCase().match(Pt) || [];
                if (re(l)) for (; u = g[p++];) u[0] === "+" ? (u = u.slice(1) || "*", (r[u] = r[u] || []).unshift(l)) : (r[u] = r[u] || []).push(l)
            }
        }

        function Ea(r, s, l, u) {
            var p = {}, g = r === Yi;

            function m(D) {
                var b;
                return p[D] = !0, c.each(r[D] || [], function (M, j) {
                    var q = j(s, l, u);
                    if (typeof q == "string" && !g && !p[q]) return s.dataTypes.unshift(q), m(q), !1;
                    if (g) return !(b = q)
                }), b
            }

            return m(s.dataTypes[0]) || !p["*"] && m("*")
        }

        function Fi(r, s) {
            var l, u, p = c.ajaxSettings.flatOptions || {};
            for (l in s) s[l] !== void 0 && ((p[l] ? r : u || (u = {}))[l] = s[l]);
            return u && c.extend(!0, r, u), r
        }

        function Zn(r, s, l) {
            for (var u, p, g, m, D = r.contents, b = r.dataTypes; b[0] === "*";) b.shift(), u === void 0 && (u = r.mimeType || s.getResponseHeader("Content-Type"));
            if (u) {
                for (p in D) if (D[p] && D[p].test(u)) {
                    b.unshift(p);
                    break
                }
            }
            if (b[0] in l) g = b[0]; else {
                for (p in l) {
                    if (!b[0] || r.converters[p + " " + b[0]]) {
                        g = p;
                        break
                    }
                    m || (m = p)
                }
                g = g || m
            }
            if (g) return g !== b[0] && b.unshift(g), l[g]
        }

        function Ir(r, s, l, u) {
            var p, g, m, D, b, M = {}, j = r.dataTypes.slice();
            if (j[1]) for (m in r.converters) M[m.toLowerCase()] = r.converters[m];
            for (g = j.shift(); g;) if (r.responseFields[g] && (l[r.responseFields[g]] = s), !b && u && r.dataFilter && (s = r.dataFilter(s, r.dataType)), b = g, g = j.shift(), g) {
                if (g === "*") g = b; else if (b !== "*" && b !== g) {
                    if (m = M[b + " " + g] || M["* " + g], !m) {
                        for (p in M) if (D = p.split(" "), D[1] === g && (m = M[b + " " + D[0]] || M["* " + D[0]], m)) {
                            m === !0 ? m = M[p] : M[p] !== !0 && (g = D[0], j.unshift(D[1]));
                            break
                        }
                    }
                    if (m !== !0) if (m && r.throws) s = m(s); else try {
                        s = m(s)
                    } catch (q) {
                        return {state: "parsererror", error: m ? q : "No conversion from " + b + " to " + g}
                    }
                }
            }
            return {state: "success", data: s}
        }

        c.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: $r.href,
                type: "GET",
                isLocal: vs.test($r.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Sa,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": c.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (r, s) {
                return s ? Fi(Fi(r, c.ajaxSettings), s) : Fi(c.ajaxSettings, r)
            },
            ajaxPrefilter: ba(Ta),
            ajaxTransport: ba(Yi),
            ajax: function (r, s) {
                typeof r == "object" && (s = r, r = void 0), s = s || {};
                var l, u, p, g, m, D, b, M, j, q, H = c.ajaxSetup({}, s), X = H.context || H,
                    De = H.context && (X.nodeType || X.jquery) ? c(X) : c.event, ze = c.Deferred(),
                    Pe = c.Callbacks("once memory"), Ct = H.statusCode || {}, _t = {}, On = {}, An = "canceled", Ue = {
                        readyState: 0, getResponseHeader: function (Ge) {
                            var st;
                            if (b) {
                                if (!g) for (g = {}; st = Hi.exec(p);) g[st[1].toLowerCase() + " "] = (g[st[1].toLowerCase() + " "] || []).concat(st[2]);
                                st = g[Ge.toLowerCase() + " "]
                            }
                            return st == null ? null : st.join(", ")
                        }, getAllResponseHeaders: function () {
                            return b ? p : null
                        }, setRequestHeader: function (Ge, st) {
                            return b == null && (Ge = On[Ge.toLowerCase()] = On[Ge.toLowerCase()] || Ge, _t[Ge] = st), this
                        }, overrideMimeType: function (Ge) {
                            return b == null && (H.mimeType = Ge), this
                        }, statusCode: function (Ge) {
                            var st;
                            if (Ge) if (b) Ue.always(Ge[Ue.status]); else for (st in Ge) Ct[st] = [Ct[st], Ge[st]];
                            return this
                        }, abort: function (Ge) {
                            var st = Ge || An;
                            return l && l.abort(st), Jn(0, st), this
                        }
                    };
                if (ze.promise(Ue), H.url = ((r || H.url || $r.href) + "").replace(ys, $r.protocol + "//"), H.type = s.method || s.type || H.method || H.type, H.dataTypes = (H.dataType || "*").toLowerCase().match(Pt) || [""], H.crossDomain == null) {
                    D = de.createElement("a");
                    try {
                        D.href = H.url, D.href = D.href, H.crossDomain = Wi.protocol + "//" + Wi.host != D.protocol + "//" + D.host
                    } catch {
                        H.crossDomain = !0
                    }
                }
                if (H.data && H.processData && typeof H.data != "string" && (H.data = c.param(H.data, H.traditional)), Ea(Ta, H, s, Ue), b) return Ue;
                M = c.event && H.global, M && c.active++ === 0 && c.event.trigger("ajaxStart"), H.type = H.type.toUpperCase(), H.hasContent = !ms.test(H.type), u = H.url.replace(ai, ""), H.hasContent ? H.data && H.processData && (H.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (H.data = H.data.replace(ps, "+")) : (q = H.url.slice(u.length), H.data && (H.processData || typeof H.data == "string") && (u += (Ii.test(u) ? "&" : "?") + H.data, delete H.data), H.cache === !1 && (u = u.replace(gs, "$1"), q = (Ii.test(u) ? "&" : "?") + "_=" + Mi.guid++ + q), H.url = u + q), H.ifModified && (c.lastModified[u] && Ue.setRequestHeader("If-Modified-Since", c.lastModified[u]), c.etag[u] && Ue.setRequestHeader("If-None-Match", c.etag[u])), (H.data && H.hasContent && H.contentType !== !1 || s.contentType) && Ue.setRequestHeader("Content-Type", H.contentType), Ue.setRequestHeader("Accept", H.dataTypes[0] && H.accepts[H.dataTypes[0]] ? H.accepts[H.dataTypes[0]] + (H.dataTypes[0] !== "*" ? ", " + Sa + "; q=0.01" : "") : H.accepts["*"]);
                for (j in H.headers) Ue.setRequestHeader(j, H.headers[j]);
                if (H.beforeSend && (H.beforeSend.call(X, Ue, H) === !1 || b)) return Ue.abort();
                if (An = "abort", Pe.add(H.complete), Ue.done(H.success), Ue.fail(H.error), l = Ea(Yi, H, s, Ue), !l) Jn(-1, "No Transport"); else {
                    if (Ue.readyState = 1, M && De.trigger("ajaxSend", [Ue, H]), b) return Ue;
                    H.async && H.timeout > 0 && (m = n.setTimeout(function () {
                        Ue.abort("timeout")
                    }, H.timeout));
                    try {
                        b = !1, l.send(_t, Jn)
                    } catch (Ge) {
                        if (b) throw Ge;
                        Jn(-1, Ge)
                    }
                }

                function Jn(Ge, st, Vr, cr) {
                    var xn, Ur, Nn, er, tr, sn = st;
                    b || (b = !0, m && n.clearTimeout(m), l = void 0, p = cr || "", Ue.readyState = Ge > 0 ? 4 : 0, xn = Ge >= 200 && Ge < 300 || Ge === 304, Vr && (er = Zn(H, Ue, Vr)), !xn && c.inArray("script", H.dataTypes) > -1 && c.inArray("json", H.dataTypes) < 0 && (H.converters["text script"] = function () {
                    }), er = Ir(H, er, Ue, xn), xn ? (H.ifModified && (tr = Ue.getResponseHeader("Last-Modified"), tr && (c.lastModified[u] = tr), tr = Ue.getResponseHeader("etag"), tr && (c.etag[u] = tr)), Ge === 204 || H.type === "HEAD" ? sn = "nocontent" : Ge === 304 ? sn = "notmodified" : (sn = er.state, Ur = er.data, Nn = er.error, xn = !Nn)) : (Nn = sn, (Ge || !sn) && (sn = "error", Ge < 0 && (Ge = 0))), Ue.status = Ge, Ue.statusText = (st || sn) + "", xn ? ze.resolveWith(X, [Ur, sn, Ue]) : ze.rejectWith(X, [Ue, sn, Nn]), Ue.statusCode(Ct), Ct = void 0, M && De.trigger(xn ? "ajaxSuccess" : "ajaxError", [Ue, H, xn ? Ur : Nn]), Pe.fireWith(X, [Ue, sn]), M && (De.trigger("ajaxComplete", [Ue, H]), --c.active || c.event.trigger("ajaxStop")))
                }

                return Ue
            },
            getJSON: function (r, s, l) {
                return c.get(r, s, l, "json")
            },
            getScript: function (r, s) {
                return c.get(r, void 0, s, "script")
            }
        }), c.each(["get", "post"], function (r, s) {
            c[s] = function (l, u, p, g) {
                return re(u) && (g = g || p, p = u, u = void 0), c.ajax(c.extend({
                    url: l,
                    type: s,
                    dataType: g,
                    data: u,
                    success: p
                }, c.isPlainObject(l) && l))
            }
        }), c.ajaxPrefilter(function (r) {
            var s;
            for (s in r.headers) s.toLowerCase() === "content-type" && (r.contentType = r.headers[s] || "")
        }), c._evalUrl = function (r, s, l) {
            return c.ajax({
                url: r,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (u) {
                    c.globalEval(u, s, l)
                }
            })
        }, c.fn.extend({
            wrapAll: function (r) {
                var s;
                return this[0] && (re(r) && (r = r.call(this[0])), s = c(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && s.insertBefore(this[0]), s.map(function () {
                    for (var l = this; l.firstElementChild;) l = l.firstElementChild;
                    return l
                }).append(this)), this
            }, wrapInner: function (r) {
                return re(r) ? this.each(function (s) {
                    c(this).wrapInner(r.call(this, s))
                }) : this.each(function () {
                    var s = c(this), l = s.contents();
                    l.length ? l.wrapAll(r) : s.append(r)
                })
            }, wrap: function (r) {
                var s = re(r);
                return this.each(function (l) {
                    c(this).wrapAll(s ? r.call(this, l) : r)
                })
            }, unwrap: function (r) {
                return this.parent(r).not("body").each(function () {
                    c(this).replaceWith(this.childNodes)
                }), this
            }
        }), c.expr.pseudos.hidden = function (r) {
            return !c.expr.pseudos.visible(r)
        }, c.expr.pseudos.visible = function (r) {
            return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length)
        }, c.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch {
            }
        };
        var _s = {0: 200, 1223: 204}, Wn = c.ajaxSettings.xhr();
        K.cors = !!Wn && "withCredentials" in Wn, K.ajax = Wn = !!Wn, c.ajaxTransport(function (r) {
            var s, l;
            if (K.cors || Wn && !r.crossDomain) return {
                send: function (u, p) {
                    var g, m = r.xhr();
                    if (m.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields) for (g in r.xhrFields) m[g] = r.xhrFields[g];
                    r.mimeType && m.overrideMimeType && m.overrideMimeType(r.mimeType), !r.crossDomain && !u["X-Requested-With"] && (u["X-Requested-With"] = "XMLHttpRequest");
                    for (g in u) m.setRequestHeader(g, u[g]);
                    s = function (D) {
                        return function () {
                            s && (s = l = m.onload = m.onerror = m.onabort = m.ontimeout = m.onreadystatechange = null, D === "abort" ? m.abort() : D === "error" ? typeof m.status != "number" ? p(0, "error") : p(m.status, m.statusText) : p(_s[m.status] || m.status, m.statusText, (m.responseType || "text") !== "text" || typeof m.responseText != "string" ? {binary: m.response} : {text: m.responseText}, m.getAllResponseHeaders()))
                        }
                    }, m.onload = s(), l = m.onerror = m.ontimeout = s("error"), m.onabort !== void 0 ? m.onabort = l : m.onreadystatechange = function () {
                        m.readyState === 4 && n.setTimeout(function () {
                            s && l()
                        })
                    }, s = s("abort");
                    try {
                        m.send(r.hasContent && r.data || null)
                    } catch (D) {
                        if (s) throw D
                    }
                }, abort: function () {
                    s && s()
                }
            }
        }), c.ajaxPrefilter(function (r) {
            r.crossDomain && (r.contents.script = !1)
        }), c.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (r) {
                    return c.globalEval(r), r
                }
            }
        }), c.ajaxPrefilter("script", function (r) {
            r.cache === void 0 && (r.cache = !1), r.crossDomain && (r.type = "GET")
        }), c.ajaxTransport("script", function (r) {
            if (r.crossDomain || r.scriptAttrs) {
                var s, l;
                return {
                    send: function (u, p) {
                        s = c("<script>").attr(r.scriptAttrs || {}).prop({
                            charset: r.scriptCharset,
                            src: r.url
                        }).on("load error", l = function (g) {
                            s.remove(), l = null, g && p(g.type === "error" ? 404 : 200, g.type)
                        }), de.head.appendChild(s[0])
                    }, abort: function () {
                        l && l()
                    }
                }
            }
        });
        var qt = [], ji = /(=)\?(?=&|$)|\?\?/;
        c.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var r = qt.pop() || c.expando + "_" + Mi.guid++;
                return this[r] = !0, r
            }
        }), c.ajaxPrefilter("json jsonp", function (r, s, l) {
            var u, p, g,
                m = r.jsonp !== !1 && (ji.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ji.test(r.data) && "data");
            if (m || r.dataTypes[0] === "jsonp") return u = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, m ? r[m] = r[m].replace(ji, "$1" + u) : r.jsonp !== !1 && (r.url += (Ii.test(r.url) ? "&" : "?") + r.jsonp + "=" + u), r.converters["script json"] = function () {
                return g || c.error(u + " was not called"), g[0]
            }, r.dataTypes[0] = "json", p = n[u], n[u] = function () {
                g = arguments
            }, l.always(function () {
                p === void 0 ? c(n).removeProp(u) : n[u] = p, r[u] && (r.jsonpCallback = s.jsonpCallback, qt.push(u)), g && re(p) && p(g[0]), g = p = void 0
            }), "script"
        }), K.createHTMLDocument = function () {
            var r = de.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), c.parseHTML = function (r, s, l) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (l = s, s = !1);
            var u, p, g;
            return s || (K.createHTMLDocument ? (s = de.implementation.createHTMLDocument(""), u = s.createElement("base"), u.href = de.location.href, s.head.appendChild(u)) : s = de), p = we.exec(r), g = !l && [], p ? [s.createElement(p[1])] : (p = z([r], s, g), g && g.length && c(g).remove(), c.merge([], p.childNodes))
        }, c.fn.load = function (r, s, l) {
            var u, p, g, m = this, D = r.indexOf(" ");
            return D > -1 && (u = Dn(r.slice(D)), r = r.slice(0, D)), re(s) ? (l = s, s = void 0) : s && typeof s == "object" && (p = "POST"), m.length > 0 && c.ajax({
                url: r,
                type: p || "GET",
                dataType: "html",
                data: s
            }).done(function (b) {
                g = arguments, m.html(u ? c("<div>").append(c.parseHTML(b)).find(u) : b)
            }).always(l && function (b, M) {
                m.each(function () {
                    l.apply(this, g || [b.responseText, M, b])
                })
            }), this
        }, c.expr.pseudos.animated = function (r) {
            return c.grep(c.timers, function (s) {
                return r === s.elem
            }).length
        }, c.offset = {
            setOffset: function (r, s, l) {
                var u, p, g, m, D, b, M, j = c.css(r, "position"), q = c(r), H = {};
                j === "static" && (r.style.position = "relative"), D = q.offset(), g = c.css(r, "top"), b = c.css(r, "left"), M = (j === "absolute" || j === "fixed") && (g + b).indexOf("auto") > -1, M ? (u = q.position(), m = u.top, p = u.left) : (m = parseFloat(g) || 0, p = parseFloat(b) || 0), re(s) && (s = s.call(r, l, c.extend({}, D))), s.top != null && (H.top = s.top - D.top + m), s.left != null && (H.left = s.left - D.left + p), "using" in s ? s.using.call(r, H) : q.css(H)
            }
        }, c.fn.extend({
            offset: function (r) {
                if (arguments.length) return r === void 0 ? this : this.each(function (p) {
                    c.offset.setOffset(this, r, p)
                });
                var s, l, u = this[0];
                if (u) return u.getClientRects().length ? (s = u.getBoundingClientRect(), l = u.ownerDocument.defaultView, {
                    top: s.top + l.pageYOffset,
                    left: s.left + l.pageXOffset
                }) : {top: 0, left: 0}
            }, position: function () {
                if (this[0]) {
                    var r, s, l, u = this[0], p = {top: 0, left: 0};
                    if (c.css(u, "position") === "fixed") s = u.getBoundingClientRect(); else {
                        for (s = this.offset(), l = u.ownerDocument, r = u.offsetParent || l.documentElement; r && (r === l.body || r === l.documentElement) && c.css(r, "position") === "static";) r = r.parentNode;
                        r && r !== u && r.nodeType === 1 && (p = c(r).offset(), p.top += c.css(r, "borderTopWidth", !0), p.left += c.css(r, "borderLeftWidth", !0))
                    }
                    return {
                        top: s.top - p.top - c.css(u, "marginTop", !0),
                        left: s.left - p.left - c.css(u, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var r = this.offsetParent; r && c.css(r, "position") === "static";) r = r.offsetParent;
                    return r || Ut
                })
            }
        }), c.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (r, s) {
            var l = s === "pageYOffset";
            c.fn[r] = function (u) {
                return Be(this, function (p, g, m) {
                    var D;
                    if (me(p) ? D = p : p.nodeType === 9 && (D = p.defaultView), m === void 0) return D ? D[s] : p[g];
                    D ? D.scrollTo(l ? D.pageXOffset : m, l ? m : D.pageYOffset) : p[g] = m
                }, r, u, arguments.length)
            }
        }), c.each(["top", "left"], function (r, s) {
            c.cssHooks[s] = Ar(K.pixelPosition, function (l, u) {
                if (u) return u = _n(l, s), Or.test(u) ? c(l).position()[s] + "px" : u
            })
        }), c.each({Height: "height", Width: "width"}, function (r, s) {
            c.each({padding: "inner" + r, content: s, "": "outer" + r}, function (l, u) {
                c.fn[u] = function (p, g) {
                    var m = arguments.length && (l || typeof p != "boolean"),
                        D = l || (p === !0 || g === !0 ? "margin" : "border");
                    return Be(this, function (b, M, j) {
                        var q;
                        return me(b) ? u.indexOf("outer") === 0 ? b["inner" + r] : b.document.documentElement["client" + r] : b.nodeType === 9 ? (q = b.documentElement, Math.max(b.body["scroll" + r], q["scroll" + r], b.body["offset" + r], q["offset" + r], q["client" + r])) : j === void 0 ? c.css(b, M, D) : c.style(b, M, j, D)
                    }, s, m ? p : void 0, m)
                }
            })
        }), c.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (r, s) {
            c.fn[s] = function (l) {
                return this.on(s, l)
            }
        }), c.fn.extend({
            bind: function (r, s, l) {
                return this.on(r, null, s, l)
            }, unbind: function (r, s) {
                return this.off(r, null, s)
            }, delegate: function (r, s, l, u) {
                return this.on(s, r, l, u)
            }, undelegate: function (r, s, l) {
                return arguments.length === 1 ? this.off(r, "**") : this.off(s, r || "**", l)
            }, hover: function (r, s) {
                return this.on("mouseenter", r).on("mouseleave", s || r)
            }
        }), c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (r, s) {
            c.fn[s] = function (l, u) {
                return arguments.length > 0 ? this.on(s, null, l, u) : this.trigger(s)
            }
        });
        var ws = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        c.proxy = function (r, s) {
            var l, u, p;
            if (typeof s == "string" && (l = r[s], s = r, r = l), !!re(r)) return u = i.call(arguments, 2), p = function () {
                return r.apply(s || this, u.concat(i.call(arguments)))
            }, p.guid = r.guid = r.guid || c.guid++, p
        }, c.holdReady = function (r) {
            r ? c.readyWait++ : c.ready(!0)
        }, c.isArray = Array.isArray, c.parseJSON = JSON.parse, c.nodeName = Ae, c.isFunction = re, c.isWindow = me, c.camelCase = ft, c.type = Dt, c.now = Date.now, c.isNumeric = function (r) {
            var s = c.type(r);
            return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
        }, c.trim = function (r) {
            return r == null ? "" : (r + "").replace(ws, "$1")
        };
        var Ca = n.jQuery, Ts = n.$;
        return c.noConflict = function (r) {
            return n.$ === c && (n.$ = Ts), r && n.jQuery === c && (n.jQuery = Ca), c
        }, typeof a > "u" && (n.jQuery = n.$ = c), c
    })
})(ul);
var fl = ul.exports;
const ot = ll(fl);
window.jQuery = ot;
window.$ = ot;
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */(function (t, n) {
    typeof exports == "object" && typeof module < "u" ? module.exports = n() : typeof define == "function" && define.amd ? define(n) : t.Popper = n()
})(globalThis, function () {
    var t = typeof window < "u" && typeof document < "u" && typeof navigator < "u", n = function () {
        for (var _ = ["Edge", "Trident", "Firefox"], k = 0; k < _.length; k += 1) if (t && navigator.userAgent.indexOf(_[k]) >= 0) return 1;
        return 0
    }();

    function a(_) {
        var k = !1;
        return function () {
            k || (k = !0, window.Promise.resolve().then(function () {
                k = !1, _()
            }))
        }
    }

    function o(_) {
        var k = !1;
        return function () {
            k || (k = !0, setTimeout(function () {
                k = !1, _()
            }, n))
        }
    }

    var e = t && window.Promise, i = e ? a : o;

    function f(_) {
        var k = {};
        return _ && k.toString.call(_) === "[object Function]"
    }

    function h(_, k) {
        if (_.nodeType !== 1) return [];
        var A = _.ownerDocument.defaultView, I = A.getComputedStyle(_, null);
        return k ? I[k] : I
    }

    function y(_) {
        return _.nodeName === "HTML" ? _ : _.parentNode || _.host
    }

    function C(_) {
        if (!_) return document.body;
        switch (_.nodeName) {
            case"HTML":
            case"BODY":
                return _.ownerDocument.body;
            case"#document":
                return _.body
        }
        var k = h(_), A = k.overflow, I = k.overflowX, G = k.overflowY;
        return /(auto|scroll|overlay)/.test(A + G + I) ? _ : C(y(_))
    }

    function R(_) {
        return _ && _.referenceNode ? _.referenceNode : _
    }

    var Y = t && !!(window.MSInputMethodContext && document.documentMode), $ = t && /MSIE 10/.test(navigator.userAgent);

    function Ce(_) {
        return _ === 11 ? Y : _ === 10 ? $ : Y || $
    }

    function K(_) {
        if (!_) return document.documentElement;
        for (var k = Ce(10) ? document.body : null, A = _.offsetParent || null; A === k && _.nextElementSibling;) A = (_ = _.nextElementSibling).offsetParent;
        var I = A && A.nodeName;
        return !I || I === "BODY" || I === "HTML" ? _ ? _.ownerDocument.documentElement : document.documentElement : ["TH", "TD", "TABLE"].indexOf(A.nodeName) !== -1 && h(A, "position") === "static" ? K(A) : A
    }

    function re(_) {
        var k = _.nodeName;
        return k === "BODY" ? !1 : k === "HTML" || K(_.firstElementChild) === _
    }

    function me(_) {
        return _.parentNode !== null ? me(_.parentNode) : _
    }

    function de(_, k) {
        if (!_ || !_.nodeType || !k || !k.nodeType) return document.documentElement;
        var A = _.compareDocumentPosition(k) & Node.DOCUMENT_POSITION_FOLLOWING, I = A ? _ : k, G = A ? k : _,
            z = document.createRange();
        z.setStart(I, 0), z.setEnd(G, 0);
        var Q = z.commonAncestorContainer;
        if (_ !== Q && k !== Q || I.contains(G)) return re(Q) ? Q : K(Q);
        var J = me(_);
        return J.host ? de(J.host, k) : de(_, me(k).host)
    }

    function te(_) {
        var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top",
            A = k === "top" ? "scrollTop" : "scrollLeft", I = _.nodeName;
        if (I === "BODY" || I === "HTML") {
            var G = _.ownerDocument.documentElement, z = _.ownerDocument.scrollingElement || G;
            return z[A]
        }
        return _[A]
    }

    function St(_, k) {
        var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, I = te(k, "top"),
            G = te(k, "left"), z = A ? -1 : 1;
        return _.top += I * z, _.bottom += I * z, _.left += G * z, _.right += G * z, _
    }

    function Dt(_, k) {
        var A = k === "x" ? "Left" : "Top", I = A === "Left" ? "Right" : "Bottom";
        return parseFloat(_["border" + A + "Width"]) + parseFloat(_["border" + I + "Width"])
    }

    function Ot(_, k, A, I) {
        return Math.max(k["offset" + _], k["scroll" + _], A["client" + _], A["offset" + _], A["scroll" + _], Ce(10) ? parseInt(A["offset" + _]) + parseInt(I["margin" + (_ === "Height" ? "Top" : "Left")]) + parseInt(I["margin" + (_ === "Height" ? "Bottom" : "Right")]) : 0)
    }

    function pn(_) {
        var k = _.body, A = _.documentElement, I = Ce(10) && getComputedStyle(A);
        return {height: Ot("Height", k, A, I), width: Ot("Width", k, A, I)}
    }

    var c = function (_, k) {
        if (!(_ instanceof k)) throw new TypeError("Cannot call a class as a function")
    }, Lt = function () {
        function _(k, A) {
            for (var I = 0; I < A.length; I++) {
                var G = A[I];
                G.enumerable = G.enumerable || !1, G.configurable = !0, "value" in G && (G.writable = !0), Object.defineProperty(k, G.key, G)
            }
        }

        return function (k, A, I) {
            return A && _(k.prototype, A), I && _(k, I), k
        }
    }(), Ae = function (_, k, A) {
        return k in _ ? Object.defineProperty(_, k, {
            value: A,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _[k] = A, _
    }, Ve = Object.assign || function (_) {
        for (var k = 1; k < arguments.length; k++) {
            var A = arguments[k];
            for (var I in A) Object.prototype.hasOwnProperty.call(A, I) && (_[I] = A[I])
        }
        return _
    };

    function Tt(_) {
        return Ve({}, _, {right: _.left + _.width, bottom: _.top + _.height})
    }

    function Xt(_) {
        var k = {};
        try {
            if (Ce(10)) {
                k = _.getBoundingClientRect();
                var A = te(_, "top"), I = te(_, "left");
                k.top += A, k.left += I, k.bottom += A, k.right += I
            } else k = _.getBoundingClientRect()
        } catch {
        }
        var G = {left: k.left, top: k.top, width: k.right - k.left, height: k.bottom - k.top},
            z = _.nodeName === "HTML" ? pn(_.ownerDocument) : {}, Q = z.width || _.clientWidth || G.width,
            J = z.height || _.clientHeight || G.height, ie = _.offsetWidth - Q, pe = _.offsetHeight - J;
        if (ie || pe) {
            var ye = h(_);
            ie -= Dt(ye, "x"), pe -= Dt(ye, "y"), G.width -= ie, G.height -= pe
        }
        return Tt(G)
    }

    function Ye(_, k) {
        var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, I = Ce(10),
            G = k.nodeName === "HTML", z = Xt(_), Q = Xt(k), J = C(_), ie = h(k), pe = parseFloat(ie.borderTopWidth),
            ye = parseFloat(ie.borderLeftWidth);
        A && G && (Q.top = Math.max(Q.top, 0), Q.left = Math.max(Q.left, 0));
        var ge = Tt({top: z.top - Q.top - pe, left: z.left - Q.left - ye, width: z.width, height: z.height});
        if (ge.marginTop = 0, ge.marginLeft = 0, !I && G) {
            var Ie = parseFloat(ie.marginTop), Ne = parseFloat(ie.marginLeft);
            ge.top -= pe - Ie, ge.bottom -= pe - Ie, ge.left -= ye - Ne, ge.right -= ye - Ne, ge.marginTop = Ie, ge.marginLeft = Ne
        }
        return (I && !A ? k.contains(J) : k === J && J.nodeName !== "BODY") && (ge = St(ge, k)), ge
    }

    function gn(_) {
        var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            A = _.ownerDocument.documentElement, I = Ye(_, A), G = Math.max(A.clientWidth, window.innerWidth || 0),
            z = Math.max(A.clientHeight, window.innerHeight || 0), Q = k ? 0 : te(A), J = k ? 0 : te(A, "left"),
            ie = {top: Q - I.top + I.marginTop, left: J - I.left + I.marginLeft, width: G, height: z};
        return Tt(ie)
    }

    function zn(_) {
        var k = _.nodeName;
        if (k === "BODY" || k === "HTML") return !1;
        if (h(_, "position") === "fixed") return !0;
        var A = y(_);
        return A ? zn(A) : !1
    }

    function Zt(_) {
        if (!_ || !_.parentElement || Ce()) return document.documentElement;
        for (var k = _.parentElement; k && h(k, "transform") === "none";) k = k.parentElement;
        return k || document.documentElement
    }

    function ct(_, k, A, I) {
        var G = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, z = {top: 0, left: 0},
            Q = G ? Zt(_) : de(_, R(k));
        if (I === "viewport") z = gn(Q, G); else {
            var J = void 0;
            I === "scrollParent" ? (J = C(y(k)), J.nodeName === "BODY" && (J = _.ownerDocument.documentElement)) : I === "window" ? J = _.ownerDocument.documentElement : J = I;
            var ie = Ye(J, Q, G);
            if (J.nodeName === "HTML" && !zn(Q)) {
                var pe = pn(_.ownerDocument), ye = pe.height, ge = pe.width;
                z.top += ie.top - ie.marginTop, z.bottom = ye + ie.top, z.left += ie.left - ie.marginLeft, z.right = ge + ie.left
            } else z = ie
        }
        A = A || 0;
        var Ie = typeof A == "number";
        return z.left += Ie ? A : A.left || 0, z.top += Ie ? A : A.top || 0, z.right -= Ie ? A : A.right || 0, z.bottom -= Ie ? A : A.bottom || 0, z
    }

    function nn(_) {
        var k = _.width, A = _.height;
        return k * A
    }

    function ht(_, k, A, I, G) {
        var z = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
        if (_.indexOf("auto") === -1) return _;
        var Q = ct(A, I, z, G), J = {
            top: {width: Q.width, height: k.top - Q.top},
            right: {width: Q.right - k.right, height: Q.height},
            bottom: {width: Q.width, height: Q.bottom - k.bottom},
            left: {width: k.left - Q.left, height: Q.height}
        }, ie = Object.keys(J).map(function (Ie) {
            return Ve({key: Ie}, J[Ie], {area: nn(J[Ie])})
        }).sort(function (Ie, Ne) {
            return Ne.area - Ie.area
        }), pe = ie.filter(function (Ie) {
            var Ne = Ie.width, Me = Ie.height;
            return Ne >= A.clientWidth && Me >= A.clientHeight
        }), ye = pe.length > 0 ? pe[0].key : ie[0].key, ge = _.split("-")[1];
        return ye + (ge ? "-" + ge : "")
    }

    function gt(_, k, A) {
        var I = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, G = I ? Zt(k) : de(k, R(A));
        return Ye(A, G, I)
    }

    function bt(_) {
        var k = _.ownerDocument.defaultView, A = k.getComputedStyle(_),
            I = parseFloat(A.marginTop || 0) + parseFloat(A.marginBottom || 0),
            G = parseFloat(A.marginLeft || 0) + parseFloat(A.marginRight || 0),
            z = {width: _.offsetWidth + G, height: _.offsetHeight + I};
        return z
    }

    function we(_) {
        var k = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return _.replace(/left|right|bottom|top/g, function (A) {
            return k[A]
        })
    }

    function oe(_, k, A) {
        A = A.split("-")[0];
        var I = bt(_), G = {width: I.width, height: I.height}, z = ["right", "left"].indexOf(A) !== -1,
            Q = z ? "top" : "left", J = z ? "left" : "top", ie = z ? "height" : "width", pe = z ? "width" : "height";
        return G[Q] = k[Q] + k[ie] / 2 - I[ie] / 2, A === J ? G[J] = k[J] - I[pe] : G[J] = k[we(J)], G
    }

    function ce(_, k) {
        return Array.prototype.find ? _.find(k) : _.filter(k)[0]
    }

    function Ee(_, k, A) {
        if (Array.prototype.findIndex) return _.findIndex(function (G) {
            return G[k] === A
        });
        var I = ce(_, function (G) {
            return G[k] === A
        });
        return _.indexOf(I)
    }

    function ke(_, k, A) {
        var I = A === void 0 ? _ : _.slice(0, Ee(_, "name", A));
        return I.forEach(function (G) {
            G.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var z = G.function || G.fn;
            G.enabled && f(z) && (k.offsets.popper = Tt(k.offsets.popper), k.offsets.reference = Tt(k.offsets.reference), k = z(k, G))
        }), k
    }

    function Re() {
        if (!this.state.isDestroyed) {
            var _ = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            _.offsets.reference = gt(this.state, this.popper, this.reference, this.options.positionFixed), _.placement = ht(this.options.placement, _.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), _.originalPlacement = _.placement, _.positionFixed = this.options.positionFixed, _.offsets.popper = oe(this.popper, _.offsets.reference, _.placement), _.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", _ = ke(this.modifiers, _), this.state.isCreated ? this.options.onUpdate(_) : (this.state.isCreated = !0, this.options.onCreate(_))
        }
    }

    function Le(_, k) {
        return _.some(function (A) {
            var I = A.name, G = A.enabled;
            return G && I === k
        })
    }

    function $t(_) {
        for (var k = [!1, "ms", "Webkit", "Moz", "O"], A = _.charAt(0).toUpperCase() + _.slice(1), I = 0; I < k.length; I++) {
            var G = k[I], z = G ? "" + G + A : _;
            if (typeof document.body.style[z] < "u") return z
        }
        return null
    }

    function Pt() {
        return this.state.isDestroyed = !0, Le(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[$t("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function Er(_) {
        var k = _.ownerDocument;
        return k ? k.defaultView : window
    }

    function vn(_, k, A, I) {
        var G = _.nodeName === "BODY", z = G ? _.ownerDocument.defaultView : _;
        z.addEventListener(k, A, {passive: !0}), G || vn(C(z.parentNode), k, A, I), I.push(z)
    }

    function Rt(_, k, A, I) {
        A.updateBound = I, Er(_).addEventListener("resize", A.updateBound, {passive: !0});
        var G = C(_);
        return vn(G, "scroll", A.updateBound, A.scrollParents), A.scrollElement = G, A.eventsEnabled = !0, A
    }

    function Cr() {
        this.state.eventsEnabled || (this.state = Rt(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function kr(_, k) {
        return Er(_).removeEventListener("resize", k.updateBound), k.scrollParents.forEach(function (A) {
            A.removeEventListener("scroll", k.updateBound)
        }), k.updateBound = null, k.scrollParents = [], k.scrollElement = null, k.eventsEnabled = !1, k
    }

    function mn() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = kr(this.reference, this.state))
    }

    function Ht(_) {
        return _ !== "" && !isNaN(parseFloat(_)) && isFinite(_)
    }

    function Be(_, k) {
        Object.keys(k).forEach(function (A) {
            var I = "";
            ["width", "height", "top", "right", "bottom", "left"].indexOf(A) !== -1 && Ht(k[A]) && (I = "px"), _.style[A] = k[A] + I
        })
    }

    function We(_, k) {
        Object.keys(k).forEach(function (A) {
            var I = k[A];
            I !== !1 ? _.setAttribute(A, k[A]) : _.removeAttribute(A)
        })
    }

    function Fe(_) {
        return Be(_.instance.popper, _.styles), We(_.instance.popper, _.attributes), _.arrowElement && Object.keys(_.arrowStyles).length && Be(_.arrowElement, _.arrowStyles), _
    }

    function lr(_, k, A, I, G) {
        var z = gt(G, k, _, A.positionFixed),
            Q = ht(A.placement, z, k, _, A.modifiers.flip.boundariesElement, A.modifiers.flip.padding);
        return k.setAttribute("x-placement", Q), Be(k, {position: A.positionFixed ? "fixed" : "absolute"}), A
    }

    function ft(_, k) {
        var A = _.offsets, I = A.popper, G = A.reference, z = Math.round, Q = Math.floor, J = function (yn) {
                return yn
            }, ie = z(G.width), pe = z(I.width), ye = ["left", "right"].indexOf(_.placement) !== -1,
            ge = _.placement.indexOf("-") !== -1, Ie = ie % 2 === pe % 2, Ne = ie % 2 === 1 && pe % 2 === 1,
            Me = k ? ye || ge || Ie ? z : Q : J, at = k ? z : J;
        return {
            left: Me(Ne && !ge && k ? I.left - 1 : I.left),
            top: at(I.top),
            bottom: at(I.bottom),
            right: Me(I.right)
        }
    }

    var rn = t && /Firefox/i.test(navigator.userAgent);

    function Rn(_, k) {
        var A = k.x, I = k.y, G = _.offsets.popper, z = ce(_.instance.modifiers, function (yt) {
            return yt.name === "applyStyle"
        }).gpuAcceleration;
        z !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
        var Q = z !== void 0 ? z : k.gpuAcceleration, J = K(_.instance.popper), ie = Xt(J), pe = {position: G.position},
            ye = ft(_, window.devicePixelRatio < 2 || !rn), ge = A === "bottom" ? "top" : "bottom",
            Ie = I === "right" ? "left" : "right", Ne = $t("transform"), Me = void 0, at = void 0;
        if (ge === "bottom" ? J.nodeName === "HTML" ? at = -J.clientHeight + ye.bottom : at = -ie.height + ye.bottom : at = ye.top, Ie === "right" ? J.nodeName === "HTML" ? Me = -J.clientWidth + ye.right : Me = -ie.width + ye.right : Me = ye.left, Q && Ne) pe[Ne] = "translate3d(" + Me + "px, " + at + "px, 0)", pe[ge] = 0, pe[Ie] = 0, pe.willChange = "transform"; else {
            var en = ge === "bottom" ? -1 : 1, yn = Ie === "right" ? -1 : 1;
            pe[ge] = at * en, pe[Ie] = Me * yn, pe.willChange = ge + ", " + Ie
        }
        var Wt = {"x-placement": _.placement};
        return _.attributes = Ve({}, Wt, _.attributes), _.styles = Ve({}, pe, _.styles), _.arrowStyles = Ve({}, _.offsets.arrow, _.arrowStyles), _
    }

    function ae(_, k, A) {
        var I = ce(_, function (J) {
            var ie = J.name;
            return ie === k
        }), G = !!I && _.some(function (J) {
            return J.name === A && J.enabled && J.order < I.order
        });
        if (!G) {
            var z = "`" + k + "`", Q = "`" + A + "`";
            console.warn(Q + " modifier is required by " + z + " modifier in order to work, be sure to include it before " + z + "!")
        }
        return G
    }

    function pt(_, k) {
        var A;
        if (!ae(_.instance.modifiers, "arrow", "keepTogether")) return _;
        var I = k.element;
        if (typeof I == "string") {
            if (I = _.instance.popper.querySelector(I), !I) return _
        } else if (!_.instance.popper.contains(I)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), _;
        var G = _.placement.split("-")[0], z = _.offsets, Q = z.popper, J = z.reference,
            ie = ["left", "right"].indexOf(G) !== -1, pe = ie ? "height" : "width", ye = ie ? "Top" : "Left",
            ge = ye.toLowerCase(), Ie = ie ? "left" : "top", Ne = ie ? "bottom" : "right", Me = bt(I)[pe];
        J[Ne] - Me < Q[ge] && (_.offsets.popper[ge] -= Q[ge] - (J[Ne] - Me)), J[ge] + Me > Q[Ne] && (_.offsets.popper[ge] += J[ge] + Me - Q[Ne]), _.offsets.popper = Tt(_.offsets.popper);
        var at = J[ge] + J[pe] / 2 - Me / 2, en = h(_.instance.popper), yn = parseFloat(en["margin" + ye]),
            Wt = parseFloat(en["border" + ye + "Width"]), yt = at - _.offsets.popper[ge] - yn - Wt;
        return yt = Math.max(Math.min(Q[pe] - Me, yt), 0), _.arrowElement = I, _.offsets.arrow = (A = {}, Ae(A, ge, Math.round(yt)), Ae(A, Ie, ""), A), _
    }

    function Dr(_) {
        return _ === "end" ? "start" : _ === "start" ? "end" : _
    }

    var Jt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Gn = Jt.slice(3);

    function ur(_) {
        var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, A = Gn.indexOf(_),
            I = Gn.slice(A + 1).concat(Gn.slice(0, A));
        return k ? I.reverse() : I
    }

    var Qn = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};

    function Cn(_, k) {
        if (Le(_.instance.modifiers, "inner") || _.flipped && _.placement === _.originalPlacement) return _;
        var A = ct(_.instance.popper, _.instance.reference, k.padding, k.boundariesElement, _.positionFixed),
            I = _.placement.split("-")[0], G = we(I), z = _.placement.split("-")[1] || "", Q = [];
        switch (k.behavior) {
            case Qn.FLIP:
                Q = [I, G];
                break;
            case Qn.CLOCKWISE:
                Q = ur(I);
                break;
            case Qn.COUNTERCLOCKWISE:
                Q = ur(I, !0);
                break;
            default:
                Q = k.behavior
        }
        return Q.forEach(function (J, ie) {
            if (I !== J || Q.length === ie + 1) return _;
            I = _.placement.split("-")[0], G = we(I);
            var pe = _.offsets.popper, ye = _.offsets.reference, ge = Math.floor,
                Ie = I === "left" && ge(pe.right) > ge(ye.left) || I === "right" && ge(pe.left) < ge(ye.right) || I === "top" && ge(pe.bottom) > ge(ye.top) || I === "bottom" && ge(pe.top) < ge(ye.bottom),
                Ne = ge(pe.left) < ge(A.left), Me = ge(pe.right) > ge(A.right), at = ge(pe.top) < ge(A.top),
                en = ge(pe.bottom) > ge(A.bottom),
                yn = I === "left" && Ne || I === "right" && Me || I === "top" && at || I === "bottom" && en,
                Wt = ["top", "bottom"].indexOf(I) !== -1,
                yt = !!k.flipVariations && (Wt && z === "start" && Ne || Wt && z === "end" && Me || !Wt && z === "start" && at || !Wt && z === "end" && en),
                Hn = !!k.flipVariationsByContent && (Wt && z === "start" && Me || Wt && z === "end" && Ne || !Wt && z === "start" && en || !Wt && z === "end" && at),
                Or = yt || Hn;
            (Ie || yn || Or) && (_.flipped = !0, (Ie || yn) && (I = Q[ie + 1]), Or && (z = Dr(z)), _.placement = I + (z ? "-" + z : ""), _.offsets.popper = Ve({}, _.offsets.popper, oe(_.instance.popper, _.offsets.reference, _.placement)), _ = ke(_.instance.modifiers, _, "flip"))
        }), _
    }

    function Vt(_) {
        var k = _.offsets, A = k.popper, I = k.reference, G = _.placement.split("-")[0], z = Math.floor,
            Q = ["top", "bottom"].indexOf(G) !== -1, J = Q ? "right" : "bottom", ie = Q ? "left" : "top",
            pe = Q ? "width" : "height";
        return A[J] < z(I[ie]) && (_.offsets.popper[ie] = z(I[ie]) - A[pe]), A[ie] > z(I[J]) && (_.offsets.popper[ie] = z(I[J])), _
    }

    function Ut(_, k, A, I) {
        var G = _.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), z = +G[1], Q = G[2];
        if (!z) return _;
        if (Q.indexOf("%") === 0) {
            var J = void 0;
            switch (Q) {
                case"%p":
                    J = A;
                    break;
                case"%":
                case"%r":
                default:
                    J = I
            }
            var ie = Tt(J);
            return ie[k] / 100 * z
        } else if (Q === "vh" || Q === "vw") {
            var pe = void 0;
            return Q === "vh" ? pe = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : pe = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), pe / 100 * z
        } else return z
    }

    function v(_, k, A, I) {
        var G = [0, 0], z = ["right", "left"].indexOf(I) !== -1, Q = _.split(/(\+|\-)/).map(function (ye) {
            return ye.trim()
        }), J = Q.indexOf(ce(Q, function (ye) {
            return ye.search(/,|\s/) !== -1
        }));
        Q[J] && Q[J].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var ie = /\s*,\s*|\s+/,
            pe = J !== -1 ? [Q.slice(0, J).concat([Q[J].split(ie)[0]]), [Q[J].split(ie)[1]].concat(Q.slice(J + 1))] : [Q];
        return pe = pe.map(function (ye, ge) {
            var Ie = (ge === 1 ? !z : z) ? "height" : "width", Ne = !1;
            return ye.reduce(function (Me, at) {
                return Me[Me.length - 1] === "" && ["+", "-"].indexOf(at) !== -1 ? (Me[Me.length - 1] = at, Ne = !0, Me) : Ne ? (Me[Me.length - 1] += at, Ne = !1, Me) : Me.concat(at)
            }, []).map(function (Me) {
                return Ut(Me, Ie, k, A)
            })
        }), pe.forEach(function (ye, ge) {
            ye.forEach(function (Ie, Ne) {
                Ht(Ie) && (G[ge] += Ie * (ye[Ne - 1] === "-" ? -1 : 1))
            })
        }), G
    }

    function N(_, k) {
        var A = k.offset, I = _.placement, G = _.offsets, z = G.popper, Q = G.reference, J = I.split("-")[0],
            ie = void 0;
        return Ht(+A) ? ie = [+A, 0] : ie = v(A, z, Q, J), J === "left" ? (z.top += ie[0], z.left -= ie[1]) : J === "right" ? (z.top += ie[0], z.left += ie[1]) : J === "top" ? (z.left += ie[0], z.top -= ie[1]) : J === "bottom" && (z.left += ie[0], z.top += ie[1]), _.popper = z, _
    }

    function V(_, k) {
        var A = k.boundariesElement || K(_.instance.popper);
        _.instance.reference === A && (A = K(A));
        var I = $t("transform"), G = _.instance.popper.style, z = G.top, Q = G.left, J = G[I];
        G.top = "", G.left = "", G[I] = "";
        var ie = ct(_.instance.popper, _.instance.reference, k.padding, A, _.positionFixed);
        G.top = z, G.left = Q, G[I] = J, k.boundaries = ie;
        var pe = k.priority, ye = _.offsets.popper, ge = {
            primary: function (Ne) {
                var Me = ye[Ne];
                return ye[Ne] < ie[Ne] && !k.escapeWithReference && (Me = Math.max(ye[Ne], ie[Ne])), Ae({}, Ne, Me)
            }, secondary: function (Ne) {
                var Me = Ne === "right" ? "left" : "top", at = ye[Me];
                return ye[Ne] > ie[Ne] && !k.escapeWithReference && (at = Math.min(ye[Me], ie[Ne] - (Ne === "right" ? ye.width : ye.height))), Ae({}, Me, at)
            }
        };
        return pe.forEach(function (Ie) {
            var Ne = ["left", "top"].indexOf(Ie) !== -1 ? "primary" : "secondary";
            ye = Ve({}, ye, ge[Ne](Ie))
        }), _.offsets.popper = ye, _
    }

    function se(_) {
        var k = _.placement, A = k.split("-")[0], I = k.split("-")[1];
        if (I) {
            var G = _.offsets, z = G.reference, Q = G.popper, J = ["bottom", "top"].indexOf(A) !== -1,
                ie = J ? "left" : "top", pe = J ? "width" : "height",
                ye = {start: Ae({}, ie, z[ie]), end: Ae({}, ie, z[ie] + z[pe] - Q[pe])};
            _.offsets.popper = Ve({}, Q, ye[I])
        }
        return _
    }

    function xe(_) {
        if (!ae(_.instance.modifiers, "hide", "preventOverflow")) return _;
        var k = _.offsets.reference, A = ce(_.instance.modifiers, function (I) {
            return I.name === "preventOverflow"
        }).boundaries;
        if (k.bottom < A.top || k.left > A.right || k.top > A.bottom || k.right < A.left) {
            if (_.hide === !0) return _;
            _.hide = !0, _.attributes["x-out-of-boundaries"] = ""
        } else {
            if (_.hide === !1) return _;
            _.hide = !1, _.attributes["x-out-of-boundaries"] = !1
        }
        return _
    }

    function it(_) {
        var k = _.placement, A = k.split("-")[0], I = _.offsets, G = I.popper, z = I.reference,
            Q = ["left", "right"].indexOf(A) !== -1, J = ["top", "left"].indexOf(A) === -1;
        return G[Q ? "left" : "top"] = z[A] - (J ? G[Q ? "width" : "height"] : 0), _.placement = we(k), _.offsets.popper = Tt(G), _
    }

    var vt = {
        shift: {order: 100, enabled: !0, fn: se},
        offset: {order: 200, enabled: !0, fn: N, offset: 0},
        preventOverflow: {
            order: 300,
            enabled: !0,
            fn: V,
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
        },
        keepTogether: {order: 400, enabled: !0, fn: Vt},
        arrow: {order: 500, enabled: !0, fn: pt, element: "[x-arrow]"},
        flip: {
            order: 600,
            enabled: !0,
            fn: Cn,
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1
        },
        inner: {order: 700, enabled: !1, fn: it},
        hide: {order: 800, enabled: !0, fn: xe},
        computeStyle: {order: 850, enabled: !0, fn: Rn, gpuAcceleration: !0, x: "bottom", y: "right"},
        applyStyle: {order: 900, enabled: !0, fn: Fe, onLoad: lr, gpuAcceleration: void 0}
    }, mt = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: vt
    }, Yt = function () {
        function _(k, A) {
            var I = this, G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            c(this, _), this.scheduleUpdate = function () {
                return requestAnimationFrame(I.update)
            }, this.update = i(this.update.bind(this)), this.options = Ve({}, _.Defaults, G), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = k && k.jquery ? k[0] : k, this.popper = A && A.jquery ? A[0] : A, this.options.modifiers = {}, Object.keys(Ve({}, _.Defaults.modifiers, G.modifiers)).forEach(function (Q) {
                I.options.modifiers[Q] = Ve({}, _.Defaults.modifiers[Q] || {}, G.modifiers ? G.modifiers[Q] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (Q) {
                return Ve({name: Q}, I.options.modifiers[Q])
            }).sort(function (Q, J) {
                return Q.order - J.order
            }), this.modifiers.forEach(function (Q) {
                Q.enabled && f(Q.onLoad) && Q.onLoad(I.reference, I.popper, I.options, Q, I.state)
            }), this.update();
            var z = this.options.eventsEnabled;
            z && this.enableEventListeners(), this.state.eventsEnabled = z
        }

        return Lt(_, [{
            key: "update", value: function () {
                return Re.call(this)
            }
        }, {
            key: "destroy", value: function () {
                return Pt.call(this)
            }
        }, {
            key: "enableEventListeners", value: function () {
                return Cr.call(this)
            }
        }, {
            key: "disableEventListeners", value: function () {
                return mn.call(this)
            }
        }]), _
    }();
    return Yt.Utils = (typeof window < "u" ? window : global).PopperUtils, Yt.placements = Jt, Yt.Defaults = mt, Yt
});/*!
  * Bootstrap v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (t, n) {
    typeof exports == "object" && typeof module < "u" ? n(exports, require("jquery"), require("popper.js")) : typeof define == "function" && define.amd ? define(["exports", "jquery", "popper.js"], n) : (t = typeof globalThis < "u" ? globalThis : t || self, n(t.bootstrap = {}, t.jQuery, t.Popper))
})(globalThis, function (t, n, a) {
    function o(P) {
        return P && typeof P == "object" && "default" in P ? P : {default: P}
    }

    var e = o(n), i = o(a);

    function f(P, O) {
        for (var E = 0; E < O.length; E++) {
            var d = O[E];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(P, d.key, d)
        }
    }

    function h(P, O, E) {
        return O && f(P.prototype, O), E && f(P, E), Object.defineProperty(P, "prototype", {writable: !1}), P
    }

    function y() {
        return y = Object.assign ? Object.assign.bind() : function (P) {
            for (var O = 1; O < arguments.length; O++) {
                var E = arguments[O];
                for (var d in E) Object.prototype.hasOwnProperty.call(E, d) && (P[d] = E[d])
            }
            return P
        }, y.apply(this, arguments)
    }

    function C(P, O) {
        P.prototype = Object.create(O.prototype), P.prototype.constructor = P, R(P, O)
    }

    function R(P, O) {
        return R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (d, w) {
            return d.__proto__ = w, d
        }, R(P, O)
    }

    var Y = "transitionend", $ = 1e6, Ce = 1e3;

    function K(P) {
        return P === null || typeof P > "u" ? "" + P : {}.toString.call(P).match(/\s([a-z]+)/i)[1].toLowerCase()
    }

    function re() {
        return {
            bindType: Y, delegateType: Y, handle: function (O) {
                if (e.default(O.target).is(this)) return O.handleObj.handler.apply(this, arguments)
            }
        }
    }

    function me(P) {
        var O = this, E = !1;
        return e.default(this).one(te.TRANSITION_END, function () {
            E = !0
        }), setTimeout(function () {
            E || te.triggerTransitionEnd(O)
        }, P), this
    }

    function de() {
        e.default.fn.emulateTransitionEnd = me, e.default.event.special[te.TRANSITION_END] = re()
    }

    var te = {
        TRANSITION_END: "bsTransitionEnd", getUID: function (O) {
            do O += ~~(Math.random() * $); while (document.getElementById(O));
            return O
        }, getSelectorFromElement: function (O) {
            var E = O.getAttribute("data-target");
            if (!E || E === "#") {
                var d = O.getAttribute("href");
                E = d && d !== "#" ? d.trim() : ""
            }
            try {
                return document.querySelector(E) ? E : null
            } catch {
                return null
            }
        }, getTransitionDurationFromElement: function (O) {
            if (!O) return 0;
            var E = e.default(O).css("transition-duration"), d = e.default(O).css("transition-delay"),
                w = parseFloat(E), S = parseFloat(d);
            return !w && !S ? 0 : (E = E.split(",")[0], d = d.split(",")[0], (parseFloat(E) + parseFloat(d)) * Ce)
        }, reflow: function (O) {
            return O.offsetHeight
        }, triggerTransitionEnd: function (O) {
            e.default(O).trigger(Y)
        }, supportsTransitionEnd: function () {
            return !!Y
        }, isElement: function (O) {
            return (O[0] || O).nodeType
        }, typeCheckConfig: function (O, E, d) {
            for (var w in d) if (Object.prototype.hasOwnProperty.call(d, w)) {
                var S = d[w], W = E[w], U = W && te.isElement(W) ? "element" : K(W);
                if (!new RegExp(S).test(U)) throw new Error(O.toUpperCase() + ": " + ('Option "' + w + '" provided type "' + U + '" ') + ('but expected type "' + S + '".'))
            }
        }, findShadowRoot: function (O) {
            if (!document.documentElement.attachShadow) return null;
            if (typeof O.getRootNode == "function") {
                var E = O.getRootNode();
                return E instanceof ShadowRoot ? E : null
            }
            return O instanceof ShadowRoot ? O : O.parentNode ? te.findShadowRoot(O.parentNode) : null
        }, jQueryDetection: function () {
            if (typeof e.default > "u") throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var O = e.default.fn.jquery.split(" ")[0].split("."), E = 1, d = 2, w = 9, S = 1, W = 4;
            if (O[0] < d && O[1] < w || O[0] === E && O[1] === w && O[2] < S || O[0] >= W) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    te.jQueryDetection(), de();
    var St = "alert", Dt = "4.6.2", Ot = "bs.alert", pn = "." + Ot, c = ".data-api", Lt = e.default.fn[St],
        Ae = "alert", Ve = "fade", Tt = "show", Xt = "close" + pn, Ye = "closed" + pn, gn = "click" + pn + c,
        zn = '[data-dismiss="alert"]', Zt = function () {
            function P(E) {
                this._element = E
            }

            var O = P.prototype;
            return O.close = function (d) {
                var w = this._element;
                d && (w = this._getRootElement(d));
                var S = this._triggerCloseEvent(w);
                S.isDefaultPrevented() || this._removeElement(w)
            }, O.dispose = function () {
                e.default.removeData(this._element, Ot), this._element = null
            }, O._getRootElement = function (d) {
                var w = te.getSelectorFromElement(d), S = !1;
                return w && (S = document.querySelector(w)), S || (S = e.default(d).closest("." + Ae)[0]), S
            }, O._triggerCloseEvent = function (d) {
                var w = e.default.Event(Xt);
                return e.default(d).trigger(w), w
            }, O._removeElement = function (d) {
                var w = this;
                if (e.default(d).removeClass(Tt), !e.default(d).hasClass(Ve)) {
                    this._destroyElement(d);
                    return
                }
                var S = te.getTransitionDurationFromElement(d);
                e.default(d).one(te.TRANSITION_END, function (W) {
                    return w._destroyElement(d, W)
                }).emulateTransitionEnd(S)
            }, O._destroyElement = function (d) {
                e.default(d).detach().trigger(Ye).remove()
            }, P._jQueryInterface = function (d) {
                return this.each(function () {
                    var w = e.default(this), S = w.data(Ot);
                    S || (S = new P(this), w.data(Ot, S)), d === "close" && S[d](this)
                })
            }, P._handleDismiss = function (d) {
                return function (w) {
                    w && w.preventDefault(), d.close(this)
                }
            }, h(P, null, [{
                key: "VERSION", get: function () {
                    return Dt
                }
            }]), P
        }();
    e.default(document).on(gn, zn, Zt._handleDismiss(new Zt)), e.default.fn[St] = Zt._jQueryInterface, e.default.fn[St].Constructor = Zt, e.default.fn[St].noConflict = function () {
        return e.default.fn[St] = Lt, Zt._jQueryInterface
    };
    var ct = "button", nn = "4.6.2", ht = "bs.button", gt = "." + ht, bt = ".data-api", we = e.default.fn[ct],
        oe = "active", ce = "btn", Ee = "focus", ke = "click" + gt + bt,
        Re = "focus" + gt + bt + " " + ("blur" + gt + bt), Le = "load" + gt + bt, $t = '[data-toggle^="button"]',
        Pt = '[data-toggle="buttons"]', Er = '[data-toggle="button"]', vn = '[data-toggle="buttons"] .btn',
        Rt = 'input:not([type="hidden"])', Cr = ".active", kr = ".btn", mn = function () {
            function P(E) {
                this._element = E, this.shouldAvoidTriggerChange = !1
            }

            var O = P.prototype;
            return O.toggle = function () {
                var d = !0, w = !0, S = e.default(this._element).closest(Pt)[0];
                if (S) {
                    var W = this._element.querySelector(Rt);
                    if (W) {
                        if (W.type === "radio") if (W.checked && this._element.classList.contains(oe)) d = !1; else {
                            var U = S.querySelector(Cr);
                            U && e.default(U).removeClass(oe)
                        }
                        d && ((W.type === "checkbox" || W.type === "radio") && (W.checked = !this._element.classList.contains(oe)), this.shouldAvoidTriggerChange || e.default(W).trigger("change")), W.focus(), w = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (w && this._element.setAttribute("aria-pressed", !this._element.classList.contains(oe)), d && e.default(this._element).toggleClass(oe))
            }, O.dispose = function () {
                e.default.removeData(this._element, ht), this._element = null
            }, P._jQueryInterface = function (d, w) {
                return this.each(function () {
                    var S = e.default(this), W = S.data(ht);
                    W || (W = new P(this), S.data(ht, W)), W.shouldAvoidTriggerChange = w, d === "toggle" && W[d]()
                })
            }, h(P, null, [{
                key: "VERSION", get: function () {
                    return nn
                }
            }]), P
        }();
    e.default(document).on(ke, $t, function (P) {
        var O = P.target, E = O;
        if (e.default(O).hasClass(ce) || (O = e.default(O).closest(kr)[0]), !O || O.hasAttribute("disabled") || O.classList.contains("disabled")) P.preventDefault(); else {
            var d = O.querySelector(Rt);
            if (d && (d.hasAttribute("disabled") || d.classList.contains("disabled"))) {
                P.preventDefault();
                return
            }
            (E.tagName === "INPUT" || O.tagName !== "LABEL") && mn._jQueryInterface.call(e.default(O), "toggle", E.tagName === "INPUT")
        }
    }).on(Re, $t, function (P) {
        var O = e.default(P.target).closest(kr)[0];
        e.default(O).toggleClass(Ee, /^focus(in)?$/.test(P.type))
    }), e.default(window).on(Le, function () {
        for (var P = [].slice.call(document.querySelectorAll(vn)), O = 0, E = P.length; O < E; O++) {
            var d = P[O], w = d.querySelector(Rt);
            w.checked || w.hasAttribute("checked") ? d.classList.add(oe) : d.classList.remove(oe)
        }
        P = [].slice.call(document.querySelectorAll(Er));
        for (var S = 0, W = P.length; S < W; S++) {
            var U = P[S];
            U.getAttribute("aria-pressed") === "true" ? U.classList.add(oe) : U.classList.remove(oe)
        }
    }), e.default.fn[ct] = mn._jQueryInterface, e.default.fn[ct].Constructor = mn, e.default.fn[ct].noConflict = function () {
        return e.default.fn[ct] = we, mn._jQueryInterface
    };
    var Ht = "carousel", Be = "4.6.2", We = "bs.carousel", Fe = "." + We, lr = ".data-api", ft = e.default.fn[Ht],
        rn = 37, Rn = 39, ae = 500, pt = 40, Dr = "carousel", Jt = "active", Gn = "slide", ur = "carousel-item-right",
        Qn = "carousel-item-left", Cn = "carousel-item-next", Vt = "carousel-item-prev", Ut = "pointer-event",
        v = "next", N = "prev", V = "left", se = "right", xe = "slide" + Fe, it = "slid" + Fe, vt = "keydown" + Fe,
        mt = "mouseenter" + Fe, Yt = "mouseleave" + Fe, _ = "touchstart" + Fe, k = "touchmove" + Fe,
        A = "touchend" + Fe, I = "pointerdown" + Fe, G = "pointerup" + Fe, z = "dragstart" + Fe, Q = "load" + Fe + lr,
        J = "click" + Fe + lr, ie = ".active", pe = ".active.carousel-item", ye = ".carousel-item",
        ge = ".carousel-item img", Ie = ".carousel-item-next, .carousel-item-prev", Ne = ".carousel-indicators",
        Me = "[data-slide], [data-slide-to]", at = '[data-ride="carousel"]',
        en = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, yn = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, Wt = {TOUCH: "touch", PEN: "pen"}, yt = function () {
            function P(E, d) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(d), this._element = E, this._indicatorsElement = this._element.querySelector(Ne), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = !!(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }

            var O = P.prototype;
            return O.next = function () {
                this._isSliding || this._slide(v)
            }, O.nextWhenVisible = function () {
                var d = e.default(this._element);
                !document.hidden && d.is(":visible") && d.css("visibility") !== "hidden" && this.next()
            }, O.prev = function () {
                this._isSliding || this._slide(N)
            }, O.pause = function (d) {
                d || (this._isPaused = !0), this._element.querySelector(Ie) && (te.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, O.cycle = function (d) {
                d || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, O.to = function (d) {
                var w = this;
                this._activeElement = this._element.querySelector(pe);
                var S = this._getItemIndex(this._activeElement);
                if (!(d > this._items.length - 1 || d < 0)) {
                    if (this._isSliding) {
                        e.default(this._element).one(it, function () {
                            return w.to(d)
                        });
                        return
                    }
                    if (S === d) {
                        this.pause(), this.cycle();
                        return
                    }
                    var W = d > S ? v : N;
                    this._slide(W, this._items[d])
                }
            }, O.dispose = function () {
                e.default(this._element).off(Fe), e.default.removeData(this._element, We), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, O._getConfig = function (d) {
                return d = y({}, en, d), te.typeCheckConfig(Ht, d, yn), d
            }, O._handleSwipe = function () {
                var d = Math.abs(this.touchDeltaX);
                if (!(d <= pt)) {
                    var w = d / this.touchDeltaX;
                    this.touchDeltaX = 0, w > 0 && this.prev(), w < 0 && this.next()
                }
            }, O._addEventListeners = function () {
                var d = this;
                this._config.keyboard && e.default(this._element).on(vt, function (w) {
                    return d._keydown(w)
                }), this._config.pause === "hover" && e.default(this._element).on(mt, function (w) {
                    return d.pause(w)
                }).on(Yt, function (w) {
                    return d.cycle(w)
                }), this._config.touch && this._addTouchEventListeners()
            }, O._addTouchEventListeners = function () {
                var d = this;
                if (this._touchSupported) {
                    var w = function (Z) {
                        d._pointerEvent && Wt[Z.originalEvent.pointerType.toUpperCase()] ? d.touchStartX = Z.originalEvent.clientX : d._pointerEvent || (d.touchStartX = Z.originalEvent.touches[0].clientX)
                    }, S = function (Z) {
                        d.touchDeltaX = Z.originalEvent.touches && Z.originalEvent.touches.length > 1 ? 0 : Z.originalEvent.touches[0].clientX - d.touchStartX
                    }, W = function (Z) {
                        d._pointerEvent && Wt[Z.originalEvent.pointerType.toUpperCase()] && (d.touchDeltaX = Z.originalEvent.clientX - d.touchStartX), d._handleSwipe(), d._config.pause === "hover" && (d.pause(), d.touchTimeout && clearTimeout(d.touchTimeout), d.touchTimeout = setTimeout(function (Oe) {
                            return d.cycle(Oe)
                        }, ae + d._config.interval))
                    };
                    e.default(this._element.querySelectorAll(ge)).on(z, function (U) {
                        return U.preventDefault()
                    }), this._pointerEvent ? (e.default(this._element).on(I, function (U) {
                        return w(U)
                    }), e.default(this._element).on(G, function (U) {
                        return W(U)
                    }), this._element.classList.add(Ut)) : (e.default(this._element).on(_, function (U) {
                        return w(U)
                    }), e.default(this._element).on(k, function (U) {
                        return S(U)
                    }), e.default(this._element).on(A, function (U) {
                        return W(U)
                    }))
                }
            }, O._keydown = function (d) {
                if (!/input|textarea/i.test(d.target.tagName)) switch (d.which) {
                    case rn:
                        d.preventDefault(), this.prev();
                        break;
                    case Rn:
                        d.preventDefault(), this.next();
                        break
                }
            }, O._getItemIndex = function (d) {
                return this._items = d && d.parentNode ? [].slice.call(d.parentNode.querySelectorAll(ye)) : [], this._items.indexOf(d)
            }, O._getItemByDirection = function (d, w) {
                var S = d === v, W = d === N, U = this._getItemIndex(w), Z = this._items.length - 1,
                    Oe = W && U === 0 || S && U === Z;
                if (Oe && !this._config.wrap) return w;
                var Xe = d === N ? -1 : 1, tt = (U + Xe) % this._items.length;
                return tt === -1 ? this._items[this._items.length - 1] : this._items[tt]
            }, O._triggerSlideEvent = function (d, w) {
                var S = this._getItemIndex(d), W = this._getItemIndex(this._element.querySelector(pe)),
                    U = e.default.Event(xe, {relatedTarget: d, direction: w, from: W, to: S});
                return e.default(this._element).trigger(U), U
            }, O._setActiveIndicatorElement = function (d) {
                if (this._indicatorsElement) {
                    var w = [].slice.call(this._indicatorsElement.querySelectorAll(ie));
                    e.default(w).removeClass(Jt);
                    var S = this._indicatorsElement.children[this._getItemIndex(d)];
                    S && e.default(S).addClass(Jt)
                }
            }, O._updateInterval = function () {
                var d = this._activeElement || this._element.querySelector(pe);
                if (d) {
                    var w = parseInt(d.getAttribute("data-interval"), 10);
                    w ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = w) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
            }, O._slide = function (d, w) {
                var S = this, W = this._element.querySelector(pe), U = this._getItemIndex(W),
                    Z = w || W && this._getItemByDirection(d, W), Oe = this._getItemIndex(Z), Xe = !!this._interval, tt, Mt,
                    rr;
                if (d === v ? (tt = Qn, Mt = Cn, rr = V) : (tt = ur, Mt = Vt, rr = se), Z && e.default(Z).hasClass(Jt)) {
                    this._isSliding = !1;
                    return
                }
                var $n = this._triggerSlideEvent(Z, rr);
                if (!$n.isDefaultPrevented() && !(!W || !Z)) {
                    this._isSliding = !0, Xe && this.pause(), this._setActiveIndicatorElement(Z), this._activeElement = Z;
                    var gi = e.default.Event(it, {relatedTarget: Z, direction: rr, from: U, to: Oe});
                    if (e.default(this._element).hasClass(Gn)) {
                        e.default(Z).addClass(Mt), te.reflow(Z), e.default(W).addClass(tt), e.default(Z).addClass(tt);
                        var ks = te.getTransitionDurationFromElement(W);
                        e.default(W).one(te.TRANSITION_END, function () {
                            e.default(Z).removeClass(tt + " " + Mt).addClass(Jt), e.default(W).removeClass(Jt + " " + Mt + " " + tt), S._isSliding = !1, setTimeout(function () {
                                return e.default(S._element).trigger(gi)
                            }, 0)
                        }).emulateTransitionEnd(ks)
                    } else e.default(W).removeClass(Jt), e.default(Z).addClass(Jt), this._isSliding = !1, e.default(this._element).trigger(gi);
                    Xe && this.cycle()
                }
            }, P._jQueryInterface = function (d) {
                return this.each(function () {
                    var w = e.default(this).data(We), S = y({}, en, e.default(this).data());
                    typeof d == "object" && (S = y({}, S, d));
                    var W = typeof d == "string" ? d : S.slide;
                    if (w || (w = new P(this, S), e.default(this).data(We, w)), typeof d == "number") w.to(d); else if (typeof W == "string") {
                        if (typeof w[W] > "u") throw new TypeError('No method named "' + W + '"');
                        w[W]()
                    } else S.interval && S.ride && (w.pause(), w.cycle())
                })
            }, P._dataApiClickHandler = function (d) {
                var w = te.getSelectorFromElement(this);
                if (w) {
                    var S = e.default(w)[0];
                    if (!(!S || !e.default(S).hasClass(Dr))) {
                        var W = y({}, e.default(S).data(), e.default(this).data()), U = this.getAttribute("data-slide-to");
                        U && (W.interval = !1), P._jQueryInterface.call(e.default(S), W), U && e.default(S).data(We).to(U), d.preventDefault()
                    }
                }
            }, h(P, null, [{
                key: "VERSION", get: function () {
                    return Be
                }
            }, {
                key: "Default", get: function () {
                    return en
                }
            }]), P
        }();
    e.default(document).on(J, Me, yt._dataApiClickHandler), e.default(window).on(Q, function () {
        for (var P = [].slice.call(document.querySelectorAll(at)), O = 0, E = P.length; O < E; O++) {
            var d = e.default(P[O]);
            yt._jQueryInterface.call(d, d.data())
        }
    }), e.default.fn[Ht] = yt._jQueryInterface, e.default.fn[Ht].Constructor = yt, e.default.fn[Ht].noConflict = function () {
        return e.default.fn[Ht] = ft, yt._jQueryInterface
    };
    var Hn = "collapse", Or = "4.6.2", Yn = "bs.collapse", Kn = "." + Yn, ga = ".data-api", is = e.default.fn[Hn],
        _n = "show", Ar = "collapse", Fr = "collapsing", ni = "collapsed", Di = "width", as = "height",
        Oi = "show" + Kn, ss = "shown" + Kn, os = "hide" + Kn, va = "hidden" + Kn, ma = "click" + Kn + ga,
        Ai = ".show, .collapsing", xi = '[data-toggle="collapse"]', At = {toggle: !0, parent: ""},
        xr = {toggle: "boolean", parent: "(string|element)"}, Xn = function () {
            function P(E, d) {
                this._isTransitioning = !1, this._element = E, this._config = this._getConfig(d), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + E.id + '"],' + ('[data-toggle="collapse"][data-target="#' + E.id + '"]')));
                for (var w = [].slice.call(document.querySelectorAll(xi)), S = 0, W = w.length; S < W; S++) {
                    var U = w[S], Z = te.getSelectorFromElement(U),
                        Oe = [].slice.call(document.querySelectorAll(Z)).filter(function (Xe) {
                            return Xe === E
                        });
                    Z !== null && Oe.length > 0 && (this._selector = Z, this._triggerArray.push(U))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var O = P.prototype;
            return O.toggle = function () {
                e.default(this._element).hasClass(_n) ? this.hide() : this.show()
            }, O.show = function () {
                var d = this;
                if (!(this._isTransitioning || e.default(this._element).hasClass(_n))) {
                    var w, S;
                    if (this._parent && (w = [].slice.call(this._parent.querySelectorAll(Ai)).filter(function (Mt) {
                        return typeof d._config.parent == "string" ? Mt.getAttribute("data-parent") === d._config.parent : Mt.classList.contains(Ar)
                    }), w.length === 0 && (w = null)), !(w && (S = e.default(w).not(this._selector).data(Yn), S && S._isTransitioning))) {
                        var W = e.default.Event(Oi);
                        if (e.default(this._element).trigger(W), !W.isDefaultPrevented()) {
                            w && (P._jQueryInterface.call(e.default(w).not(this._selector), "hide"), S || e.default(w).data(Yn, null));
                            var U = this._getDimension();
                            e.default(this._element).removeClass(Ar).addClass(Fr), this._element.style[U] = 0, this._triggerArray.length && e.default(this._triggerArray).removeClass(ni).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var Z = function () {
                                    e.default(d._element).removeClass(Fr).addClass(Ar + " " + _n), d._element.style[U] = "", d.setTransitioning(!1), e.default(d._element).trigger(ss)
                                }, Oe = U[0].toUpperCase() + U.slice(1), Xe = "scroll" + Oe,
                                tt = te.getTransitionDurationFromElement(this._element);
                            e.default(this._element).one(te.TRANSITION_END, Z).emulateTransitionEnd(tt), this._element.style[U] = this._element[Xe] + "px"
                        }
                    }
                }
            }, O.hide = function () {
                var d = this;
                if (!(this._isTransitioning || !e.default(this._element).hasClass(_n))) {
                    var w = e.default.Event(os);
                    if (e.default(this._element).trigger(w), !w.isDefaultPrevented()) {
                        var S = this._getDimension();
                        this._element.style[S] = this._element.getBoundingClientRect()[S] + "px", te.reflow(this._element), e.default(this._element).addClass(Fr).removeClass(Ar + " " + _n);
                        var W = this._triggerArray.length;
                        if (W > 0) for (var U = 0; U < W; U++) {
                            var Z = this._triggerArray[U], Oe = te.getSelectorFromElement(Z);
                            if (Oe !== null) {
                                var Xe = e.default([].slice.call(document.querySelectorAll(Oe)));
                                Xe.hasClass(_n) || e.default(Z).addClass(ni).attr("aria-expanded", !1)
                            }
                        }
                        this.setTransitioning(!0);
                        var tt = function () {
                            d.setTransitioning(!1), e.default(d._element).removeClass(Fr).addClass(Ar).trigger(va)
                        };
                        this._element.style[S] = "";
                        var Mt = te.getTransitionDurationFromElement(this._element);
                        e.default(this._element).one(te.TRANSITION_END, tt).emulateTransitionEnd(Mt)
                    }
                }
            }, O.setTransitioning = function (d) {
                this._isTransitioning = d
            }, O.dispose = function () {
                e.default.removeData(this._element, Yn), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, O._getConfig = function (d) {
                return d = y({}, At, d), d.toggle = !!d.toggle, te.typeCheckConfig(Hn, d, xr), d
            }, O._getDimension = function () {
                var d = e.default(this._element).hasClass(Di);
                return d ? Di : as
            }, O._getParent = function () {
                var d = this, w;
                te.isElement(this._config.parent) ? (w = this._config.parent, typeof this._config.parent.jquery < "u" && (w = this._config.parent[0])) : w = document.querySelector(this._config.parent);
                var S = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    W = [].slice.call(w.querySelectorAll(S));
                return e.default(W).each(function (U, Z) {
                    d._addAriaAndCollapsedClass(P._getTargetFromElement(Z), [Z])
                }), w
            }, O._addAriaAndCollapsedClass = function (d, w) {
                var S = e.default(d).hasClass(_n);
                w.length && e.default(w).toggleClass(ni, !S).attr("aria-expanded", S)
            }, P._getTargetFromElement = function (d) {
                var w = te.getSelectorFromElement(d);
                return w ? document.querySelector(w) : null
            }, P._jQueryInterface = function (d) {
                return this.each(function () {
                    var w = e.default(this), S = w.data(Yn), W = y({}, At, w.data(), typeof d == "object" && d ? d : {});
                    if (!S && W.toggle && typeof d == "string" && /show|hide/.test(d) && (W.toggle = !1), S || (S = new P(this, W), w.data(Yn, S)), typeof d == "string") {
                        if (typeof S[d] > "u") throw new TypeError('No method named "' + d + '"');
                        S[d]()
                    }
                })
            }, h(P, null, [{
                key: "VERSION", get: function () {
                    return Or
                }
            }, {
                key: "Default", get: function () {
                    return At
                }
            }]), P
        }();
    e.default(document).on(ma, xi, function (P) {
        P.currentTarget.tagName === "A" && P.preventDefault();
        var O = e.default(this), E = te.getSelectorFromElement(this), d = [].slice.call(document.querySelectorAll(E));
        e.default(d).each(function () {
            var w = e.default(this), S = w.data(Yn), W = S ? "toggle" : O.data();
            Xn._jQueryInterface.call(w, W)
        })
    }), e.default.fn[Hn] = Xn._jQueryInterface, e.default.fn[Hn].Constructor = Xn, e.default.fn[Hn].noConflict = function () {
        return e.default.fn[Hn] = is, Xn._jQueryInterface
    };
    var Nr = "dropdown", ls = "4.6.2", fr = "bs.dropdown", kn = "." + fr, Mr = ".data-api", ya = e.default.fn[Nr],
        jr = 27, _a = 32, an = 9, ri = 38, dr = 40, us = 3, fs = new RegExp(ri + "|" + dr + "|" + jr), Dn = "disabled",
        Et = "show", Ni = "dropup", ds = "dropright", $r = "dropleft", Mi = "dropdown-menu-right",
        Ii = "position-static", Li = "hide" + kn, Pi = "hidden" + kn, cs = "show" + kn, wa = "shown" + kn,
        hs = "click" + kn, Ri = "click" + kn + Mr, ii = "keydown" + kn + Mr, ps = "keyup" + kn + Mr,
        ai = '[data-toggle="dropdown"]', gs = ".dropdown form", Hi = ".dropdown-menu", vs = ".navbar-nav",
        ms = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", ys = "top-start", Ta = "top-end",
        Yi = "bottom-start", Sa = "bottom-end", Wi = "right-start", ba = "left-start", Ea = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        }, Fi = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        }, Zn = function () {
            function P(E, d) {
                this._element = E, this._popper = null, this._config = this._getConfig(d), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var O = P.prototype;
            return O.toggle = function () {
                if (!(this._element.disabled || e.default(this._element).hasClass(Dn))) {
                    var d = e.default(this._menu).hasClass(Et);
                    P._clearMenus(), !d && this.show(!0)
                }
            }, O.show = function (d) {
                if (d === void 0 && (d = !1), !(this._element.disabled || e.default(this._element).hasClass(Dn) || e.default(this._menu).hasClass(Et))) {
                    var w = {relatedTarget: this._element}, S = e.default.Event(cs, w),
                        W = P._getParentFromElement(this._element);
                    if (e.default(W).trigger(S), !S.isDefaultPrevented()) {
                        if (!this._inNavbar && d) {
                            if (typeof i.default > "u") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var U = this._element;
                            this._config.reference === "parent" ? U = W : te.isElement(this._config.reference) && (U = this._config.reference, typeof this._config.reference.jquery < "u" && (U = this._config.reference[0])), this._config.boundary !== "scrollParent" && e.default(W).addClass(Ii), this._popper = new i.default(U, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && e.default(W).closest(vs).length === 0 && e.default(document.body).children().on("mouseover", null, e.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e.default(this._menu).toggleClass(Et), e.default(W).toggleClass(Et).trigger(e.default.Event(wa, w))
                    }
                }
            }, O.hide = function () {
                if (!(this._element.disabled || e.default(this._element).hasClass(Dn) || !e.default(this._menu).hasClass(Et))) {
                    var d = {relatedTarget: this._element}, w = e.default.Event(Li, d),
                        S = P._getParentFromElement(this._element);
                    e.default(S).trigger(w), !w.isDefaultPrevented() && (this._popper && this._popper.destroy(), e.default(this._menu).toggleClass(Et), e.default(S).toggleClass(Et).trigger(e.default.Event(Pi, d)))
                }
            }, O.dispose = function () {
                e.default.removeData(this._element, fr), e.default(this._element).off(kn), this._element = null, this._menu = null, this._popper !== null && (this._popper.destroy(), this._popper = null)
            }, O.update = function () {
                this._inNavbar = this._detectNavbar(), this._popper !== null && this._popper.scheduleUpdate()
            }, O._addEventListeners = function () {
                var d = this;
                e.default(this._element).on(hs, function (w) {
                    w.preventDefault(), w.stopPropagation(), d.toggle()
                })
            }, O._getConfig = function (d) {
                return d = y({}, this.constructor.Default, e.default(this._element).data(), d), te.typeCheckConfig(Nr, d, this.constructor.DefaultType), d
            }, O._getMenuElement = function () {
                if (!this._menu) {
                    var d = P._getParentFromElement(this._element);
                    d && (this._menu = d.querySelector(Hi))
                }
                return this._menu
            }, O._getPlacement = function () {
                var d = e.default(this._element.parentNode), w = Yi;
                return d.hasClass(Ni) ? w = e.default(this._menu).hasClass(Mi) ? Ta : ys : d.hasClass(ds) ? w = Wi : d.hasClass($r) ? w = ba : e.default(this._menu).hasClass(Mi) && (w = Sa), w
            }, O._detectNavbar = function () {
                return e.default(this._element).closest(".navbar").length > 0
            }, O._getOffset = function () {
                var d = this, w = {};
                return typeof this._config.offset == "function" ? w.fn = function (S) {
                    return S.offsets = y({}, S.offsets, d._config.offset(S.offsets, d._element)), S
                } : w.offset = this._config.offset, w
            }, O._getPopperConfig = function () {
                var d = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return this._config.display === "static" && (d.modifiers.applyStyle = {enabled: !1}), y({}, d, this._config.popperConfig)
            }, P._jQueryInterface = function (d) {
                return this.each(function () {
                    var w = e.default(this).data(fr), S = typeof d == "object" ? d : null;
                    if (w || (w = new P(this, S), e.default(this).data(fr, w)), typeof d == "string") {
                        if (typeof w[d] > "u") throw new TypeError('No method named "' + d + '"');
                        w[d]()
                    }
                })
            }, P._clearMenus = function (d) {
                if (!(d && (d.which === us || d.type === "keyup" && d.which !== an))) for (var w = [].slice.call(document.querySelectorAll(ai)), S = 0, W = w.length; S < W; S++) {
                    var U = P._getParentFromElement(w[S]), Z = e.default(w[S]).data(fr), Oe = {relatedTarget: w[S]};
                    if (d && d.type === "click" && (Oe.clickEvent = d), !!Z) {
                        var Xe = Z._menu;
                        if (e.default(U).hasClass(Et) && !(d && (d.type === "click" && /input|textarea/i.test(d.target.tagName) || d.type === "keyup" && d.which === an) && e.default.contains(U, d.target))) {
                            var tt = e.default.Event(Li, Oe);
                            e.default(U).trigger(tt), !tt.isDefaultPrevented() && ("ontouchstart" in document.documentElement && e.default(document.body).children().off("mouseover", null, e.default.noop), w[S].setAttribute("aria-expanded", "false"), Z._popper && Z._popper.destroy(), e.default(Xe).removeClass(Et), e.default(U).removeClass(Et).trigger(e.default.Event(Pi, Oe)))
                        }
                    }
                }
            }, P._getParentFromElement = function (d) {
                var w, S = te.getSelectorFromElement(d);
                return S && (w = document.querySelector(S)), w || d.parentNode
            }, P._dataApiKeydownHandler = function (d) {
                if (!(/input|textarea/i.test(d.target.tagName) ? d.which === _a || d.which !== jr && (d.which !== dr && d.which !== ri || e.default(d.target).closest(Hi).length) : !fs.test(d.which)) && !(this.disabled || e.default(this).hasClass(Dn))) {
                    var w = P._getParentFromElement(this), S = e.default(w).hasClass(Et);
                    if (!(!S && d.which === jr)) {
                        if (d.preventDefault(), d.stopPropagation(), !S || d.which === jr || d.which === _a) {
                            d.which === jr && e.default(w.querySelector(ai)).trigger("focus"), e.default(this).trigger("click");
                            return
                        }
                        var W = [].slice.call(w.querySelectorAll(ms)).filter(function (Z) {
                            return e.default(Z).is(":visible")
                        });
                        if (W.length !== 0) {
                            var U = W.indexOf(d.target);
                            d.which === ri && U > 0 && U--, d.which === dr && U < W.length - 1 && U++, U < 0 && (U = 0), W[U].focus()
                        }
                    }
                }
            }, h(P, null, [{
                key: "VERSION", get: function () {
                    return ls
                }
            }, {
                key: "Default", get: function () {
                    return Ea
                }
            }, {
                key: "DefaultType", get: function () {
                    return Fi
                }
            }]), P
        }();
    e.default(document).on(ii, ai, Zn._dataApiKeydownHandler).on(ii, Hi, Zn._dataApiKeydownHandler).on(Ri + " " + ps, Zn._clearMenus).on(Ri, ai, function (P) {
        P.preventDefault(), P.stopPropagation(), Zn._jQueryInterface.call(e.default(this), "toggle")
    }).on(Ri, gs, function (P) {
        P.stopPropagation()
    }), e.default.fn[Nr] = Zn._jQueryInterface, e.default.fn[Nr].Constructor = Zn, e.default.fn[Nr].noConflict = function () {
        return e.default.fn[Nr] = ya, Zn._jQueryInterface
    };
    var Ir = "modal", _s = "4.6.2", Wn = "bs.modal", qt = "." + Wn, ji = ".data-api", ws = e.default.fn[Ir], Ca = 27,
        Ts = "modal-dialog-scrollable", r = "modal-scrollbar-measure", s = "modal-backdrop", l = "modal-open",
        u = "fade", p = "show", g = "modal-static", m = "hide" + qt, D = "hidePrevented" + qt, b = "hidden" + qt,
        M = "show" + qt, j = "shown" + qt, q = "focusin" + qt, H = "resize" + qt, X = "click.dismiss" + qt,
        De = "keydown.dismiss" + qt, ze = "mouseup.dismiss" + qt, Pe = "mousedown.dismiss" + qt, Ct = "click" + qt + ji,
        _t = ".modal-dialog", On = ".modal-body", An = '[data-toggle="modal"]', Ue = '[data-dismiss="modal"]',
        Jn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Ge = ".sticky-top",
        st = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
        Vr = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, cr = function () {
            function P(E, d) {
                this._config = this._getConfig(d), this._element = E, this._dialog = E.querySelector(_t), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }

            var O = P.prototype;
            return O.toggle = function (d) {
                return this._isShown ? this.hide() : this.show(d)
            }, O.show = function (d) {
                var w = this;
                if (!(this._isShown || this._isTransitioning)) {
                    var S = e.default.Event(M, {relatedTarget: d});
                    e.default(this._element).trigger(S), !S.isDefaultPrevented() && (this._isShown = !0, e.default(this._element).hasClass(u) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e.default(this._element).on(X, Ue, function (W) {
                        return w.hide(W)
                    }), e.default(this._dialog).on(Pe, function () {
                        e.default(w._element).one(ze, function (W) {
                            e.default(W.target).is(w._element) && (w._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return w._showElement(d)
                    }))
                }
            }, O.hide = function (d) {
                var w = this;
                if (d && d.preventDefault(), !(!this._isShown || this._isTransitioning)) {
                    var S = e.default.Event(m);
                    if (e.default(this._element).trigger(S), !(!this._isShown || S.isDefaultPrevented())) {
                        this._isShown = !1;
                        var W = e.default(this._element).hasClass(u);
                        if (W && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e.default(document).off(q), e.default(this._element).removeClass(p), e.default(this._element).off(X), e.default(this._dialog).off(Pe), W) {
                            var U = te.getTransitionDurationFromElement(this._element);
                            e.default(this._element).one(te.TRANSITION_END, function (Z) {
                                return w._hideModal(Z)
                            }).emulateTransitionEnd(U)
                        } else this._hideModal()
                    }
                }
            }, O.dispose = function () {
                [window, this._element, this._dialog].forEach(function (d) {
                    return e.default(d).off(qt)
                }), e.default(document).off(q), e.default.removeData(this._element, Wn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, O.handleUpdate = function () {
                this._adjustDialog()
            }, O._getConfig = function (d) {
                return d = y({}, st, d), te.typeCheckConfig(Ir, d, Vr), d
            }, O._triggerBackdropTransition = function () {
                var d = this, w = e.default.Event(D);
                if (e.default(this._element).trigger(w), !w.isDefaultPrevented()) {
                    var S = this._element.scrollHeight > document.documentElement.clientHeight;
                    S || (this._element.style.overflowY = "hidden"), this._element.classList.add(g);
                    var W = te.getTransitionDurationFromElement(this._dialog);
                    e.default(this._element).off(te.TRANSITION_END), e.default(this._element).one(te.TRANSITION_END, function () {
                        d._element.classList.remove(g), S || e.default(d._element).one(te.TRANSITION_END, function () {
                            d._element.style.overflowY = ""
                        }).emulateTransitionEnd(d._element, W)
                    }).emulateTransitionEnd(W), this._element.focus()
                }
            }, O._showElement = function (d) {
                var w = this, S = e.default(this._element).hasClass(u),
                    W = this._dialog ? this._dialog.querySelector(On) : null;
                (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), e.default(this._dialog).hasClass(Ts) && W ? W.scrollTop = 0 : this._element.scrollTop = 0, S && te.reflow(this._element), e.default(this._element).addClass(p), this._config.focus && this._enforceFocus();
                var U = e.default.Event(j, {relatedTarget: d}), Z = function () {
                    w._config.focus && w._element.focus(), w._isTransitioning = !1, e.default(w._element).trigger(U)
                };
                if (S) {
                    var Oe = te.getTransitionDurationFromElement(this._dialog);
                    e.default(this._dialog).one(te.TRANSITION_END, Z).emulateTransitionEnd(Oe)
                } else Z()
            }, O._enforceFocus = function () {
                var d = this;
                e.default(document).off(q).on(q, function (w) {
                    document !== w.target && d._element !== w.target && e.default(d._element).has(w.target).length === 0 && d._element.focus()
                })
            }, O._setEscapeEvent = function () {
                var d = this;
                this._isShown ? e.default(this._element).on(De, function (w) {
                    d._config.keyboard && w.which === Ca ? (w.preventDefault(), d.hide()) : !d._config.keyboard && w.which === Ca && d._triggerBackdropTransition()
                }) : this._isShown || e.default(this._element).off(De)
            }, O._setResizeEvent = function () {
                var d = this;
                this._isShown ? e.default(window).on(H, function (w) {
                    return d.handleUpdate(w)
                }) : e.default(window).off(H)
            }, O._hideModal = function () {
                var d = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
                    e.default(document.body).removeClass(l), d._resetAdjustments(), d._resetScrollbar(), e.default(d._element).trigger(b)
                })
            }, O._removeBackdrop = function () {
                this._backdrop && (e.default(this._backdrop).remove(), this._backdrop = null)
            }, O._showBackdrop = function (d) {
                var w = this, S = e.default(this._element).hasClass(u) ? u : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = s, S && this._backdrop.classList.add(S), e.default(this._backdrop).appendTo(document.body), e.default(this._element).on(X, function (Oe) {
                        if (w._ignoreBackdropClick) {
                            w._ignoreBackdropClick = !1;
                            return
                        }
                        Oe.target === Oe.currentTarget && (w._config.backdrop === "static" ? w._triggerBackdropTransition() : w.hide())
                    }), S && te.reflow(this._backdrop), e.default(this._backdrop).addClass(p), !d) return;
                    if (!S) {
                        d();
                        return
                    }
                    var W = te.getTransitionDurationFromElement(this._backdrop);
                    e.default(this._backdrop).one(te.TRANSITION_END, d).emulateTransitionEnd(W)
                } else if (!this._isShown && this._backdrop) {
                    e.default(this._backdrop).removeClass(p);
                    var U = function () {
                        w._removeBackdrop(), d && d()
                    };
                    if (e.default(this._element).hasClass(u)) {
                        var Z = te.getTransitionDurationFromElement(this._backdrop);
                        e.default(this._backdrop).one(te.TRANSITION_END, U).emulateTransitionEnd(Z)
                    } else U()
                } else d && d()
            }, O._adjustDialog = function () {
                var d = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && d && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !d && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, O._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, O._checkScrollbar = function () {
                var d = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(d.left + d.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, O._setScrollbar = function () {
                var d = this;
                if (this._isBodyOverflowing) {
                    var w = [].slice.call(document.querySelectorAll(Jn)), S = [].slice.call(document.querySelectorAll(Ge));
                    e.default(w).each(function (Z, Oe) {
                        var Xe = Oe.style.paddingRight, tt = e.default(Oe).css("padding-right");
                        e.default(Oe).data("padding-right", Xe).css("padding-right", parseFloat(tt) + d._scrollbarWidth + "px")
                    }), e.default(S).each(function (Z, Oe) {
                        var Xe = Oe.style.marginRight, tt = e.default(Oe).css("margin-right");
                        e.default(Oe).data("margin-right", Xe).css("margin-right", parseFloat(tt) - d._scrollbarWidth + "px")
                    });
                    var W = document.body.style.paddingRight, U = e.default(document.body).css("padding-right");
                    e.default(document.body).data("padding-right", W).css("padding-right", parseFloat(U) + this._scrollbarWidth + "px")
                }
                e.default(document.body).addClass(l)
            }, O._resetScrollbar = function () {
                var d = [].slice.call(document.querySelectorAll(Jn));
                e.default(d).each(function (W, U) {
                    var Z = e.default(U).data("padding-right");
                    e.default(U).removeData("padding-right"), U.style.paddingRight = Z || ""
                });
                var w = [].slice.call(document.querySelectorAll("" + Ge));
                e.default(w).each(function (W, U) {
                    var Z = e.default(U).data("margin-right");
                    typeof Z < "u" && e.default(U).css("margin-right", Z).removeData("margin-right")
                });
                var S = e.default(document.body).data("padding-right");
                e.default(document.body).removeData("padding-right"), document.body.style.paddingRight = S || ""
            }, O._getScrollbarWidth = function () {
                var d = document.createElement("div");
                d.className = r, document.body.appendChild(d);
                var w = d.getBoundingClientRect().width - d.clientWidth;
                return document.body.removeChild(d), w
            }, P._jQueryInterface = function (d, w) {
                return this.each(function () {
                    var S = e.default(this).data(Wn),
                        W = y({}, st, e.default(this).data(), typeof d == "object" && d ? d : {});
                    if (S || (S = new P(this, W), e.default(this).data(Wn, S)), typeof d == "string") {
                        if (typeof S[d] > "u") throw new TypeError('No method named "' + d + '"');
                        S[d](w)
                    } else W.show && S.show(w)
                })
            }, h(P, null, [{
                key: "VERSION", get: function () {
                    return _s
                }
            }, {
                key: "Default", get: function () {
                    return st
                }
            }]), P
        }();
    e.default(document).on(Ct, An, function (P) {
        var O = this, E, d = te.getSelectorFromElement(this);
        d && (E = document.querySelector(d));
        var w = e.default(E).data(Wn) ? "toggle" : y({}, e.default(E).data(), e.default(this).data());
        (this.tagName === "A" || this.tagName === "AREA") && P.preventDefault();
        var S = e.default(E).one(M, function (W) {
            W.isDefaultPrevented() || S.one(b, function () {
                e.default(O).is(":visible") && O.focus()
            })
        });
        cr._jQueryInterface.call(e.default(E), w, this)
    }), e.default.fn[Ir] = cr._jQueryInterface, e.default.fn[Ir].Constructor = cr, e.default.fn[Ir].noConflict = function () {
        return e.default.fn[Ir] = ws, cr._jQueryInterface
    };
    var xn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ur = /^aria-[\w-]*$/i, Nn = {
            "*": ["class", "dir", "id", "lang", "role", Ur],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }, er = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        tr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function sn(P, O) {
        var E = P.nodeName.toLowerCase();
        if (O.indexOf(E) !== -1) return xn.indexOf(E) !== -1 ? !!(er.test(P.nodeValue) || tr.test(P.nodeValue)) : !0;
        for (var d = O.filter(function (W) {
            return W instanceof RegExp
        }), w = 0, S = d.length; w < S; w++) if (d[w].test(E)) return !0;
        return !1
    }

    function si(P, O, E) {
        if (P.length === 0) return P;
        if (E && typeof E == "function") return E(P);
        for (var d = new window.DOMParser, w = d.parseFromString(P, "text/html"), S = Object.keys(O), W = [].slice.call(w.body.querySelectorAll("*")), U = function (Mt, rr) {
            var $n = W[Mt], gi = $n.nodeName.toLowerCase();
            if (S.indexOf($n.nodeName.toLowerCase()) === -1) return $n.parentNode.removeChild($n), "continue";
            var ks = [].slice.call($n.attributes), Mf = [].concat(O["*"] || [], O[gi] || []);
            ks.forEach(function (Uo) {
                sn(Uo, Mf) || $n.removeAttribute(Uo.nodeName)
            })
        }, Z = 0, Oe = W.length; Z < Oe; Z++) var Xe = U(Z);
        return w.body.innerHTML
    }

    var Ft = "tooltip", Fn = "4.6.2", oi = "bs.tooltip", wn = "." + oi, Ss = e.default.fn[Ft], Ke = "bs-tooltip",
        li = new RegExp("(^|\\s)" + Ke + "\\S+", "g"), Tn = ["sanitize", "whiteList", "sanitizeFn"], Mn = "fade",
        qr = "show", Br = "show", ui = "out", hr = ".tooltip-inner", $i = ".arrow", on = "hover", fi = "focus",
        zr = "click", di = "manual", ci = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"},
        Vi = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Nn,
            popperConfig: null
        }, bs = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        }, hi = {
            HIDE: "hide" + wn,
            HIDDEN: "hidden" + wn,
            SHOW: "show" + wn,
            SHOWN: "shown" + wn,
            INSERTED: "inserted" + wn,
            CLICK: "click" + wn,
            FOCUSIN: "focusin" + wn,
            FOCUSOUT: "focusout" + wn,
            MOUSEENTER: "mouseenter" + wn,
            MOUSELEAVE: "mouseleave" + wn
        }, jn = function () {
            function P(E, d) {
                if (typeof i.default > "u") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = E, this.config = this._getConfig(d), this.tip = null, this._setListeners()
            }

            var O = P.prototype;
            return O.enable = function () {
                this._isEnabled = !0
            }, O.disable = function () {
                this._isEnabled = !1
            }, O.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, O.toggle = function (d) {
                if (this._isEnabled) if (d) {
                    var w = this.constructor.DATA_KEY, S = e.default(d.currentTarget).data(w);
                    S || (S = new this.constructor(d.currentTarget, this._getDelegateConfig()), e.default(d.currentTarget).data(w, S)), S._activeTrigger.click = !S._activeTrigger.click, S._isWithActiveTrigger() ? S._enter(null, S) : S._leave(null, S)
                } else {
                    if (e.default(this.getTipElement()).hasClass(qr)) {
                        this._leave(null, this);
                        return
                    }
                    this._enter(null, this)
                }
            }, O.dispose = function () {
                clearTimeout(this._timeout), e.default.removeData(this.element, this.constructor.DATA_KEY), e.default(this.element).off(this.constructor.EVENT_KEY), e.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, O.show = function () {
                var d = this;
                if (e.default(this.element).css("display") === "none") throw new Error("Please use show on visible elements");
                var w = e.default.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e.default(this.element).trigger(w);
                    var S = te.findShadowRoot(this.element),
                        W = e.default.contains(S !== null ? S : this.element.ownerDocument.documentElement, this.element);
                    if (w.isDefaultPrevented() || !W) return;
                    var U = this.getTipElement(), Z = te.getUID(this.constructor.NAME);
                    U.setAttribute("id", Z), this.element.setAttribute("aria-describedby", Z), this.setContent(), this.config.animation && e.default(U).addClass(Mn);
                    var Oe = typeof this.config.placement == "function" ? this.config.placement.call(this, U, this.element) : this.config.placement,
                        Xe = this._getAttachment(Oe);
                    this.addAttachmentClass(Xe);
                    var tt = this._getContainer();
                    e.default(U).data(this.constructor.DATA_KEY, this), e.default.contains(this.element.ownerDocument.documentElement, this.tip) || e.default(U).appendTo(tt), e.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i.default(this.element, U, this._getPopperConfig(Xe)), e.default(U).addClass(qr), e.default(U).addClass(this.config.customClass), "ontouchstart" in document.documentElement && e.default(document.body).children().on("mouseover", null, e.default.noop);
                    var Mt = function () {
                        d.config.animation && d._fixTransition();
                        var gi = d._hoverState;
                        d._hoverState = null, e.default(d.element).trigger(d.constructor.Event.SHOWN), gi === ui && d._leave(null, d)
                    };
                    if (e.default(this.tip).hasClass(Mn)) {
                        var rr = te.getTransitionDurationFromElement(this.tip);
                        e.default(this.tip).one(te.TRANSITION_END, Mt).emulateTransitionEnd(rr)
                    } else Mt()
                }
            }, O.hide = function (d) {
                var w = this, S = this.getTipElement(), W = e.default.Event(this.constructor.Event.HIDE), U = function () {
                    w._hoverState !== Br && S.parentNode && S.parentNode.removeChild(S), w._cleanTipClass(), w.element.removeAttribute("aria-describedby"), e.default(w.element).trigger(w.constructor.Event.HIDDEN), w._popper !== null && w._popper.destroy(), d && d()
                };
                if (e.default(this.element).trigger(W), !W.isDefaultPrevented()) {
                    if (e.default(S).removeClass(qr), "ontouchstart" in document.documentElement && e.default(document.body).children().off("mouseover", null, e.default.noop), this._activeTrigger[zr] = !1, this._activeTrigger[fi] = !1, this._activeTrigger[on] = !1, e.default(this.tip).hasClass(Mn)) {
                        var Z = te.getTransitionDurationFromElement(S);
                        e.default(S).one(te.TRANSITION_END, U).emulateTransitionEnd(Z)
                    } else U();
                    this._hoverState = ""
                }
            }, O.update = function () {
                this._popper !== null && this._popper.scheduleUpdate()
            }, O.isWithContent = function () {
                return !!this.getTitle()
            }, O.addAttachmentClass = function (d) {
                e.default(this.getTipElement()).addClass(Ke + "-" + d)
            }, O.getTipElement = function () {
                return this.tip = this.tip || e.default(this.config.template)[0], this.tip
            }, O.setContent = function () {
                var d = this.getTipElement();
                this.setElementContent(e.default(d.querySelectorAll(hr)), this.getTitle()), e.default(d).removeClass(Mn + " " + qr)
            }, O.setElementContent = function (d, w) {
                if (typeof w == "object" && (w.nodeType || w.jquery)) {
                    this.config.html ? e.default(w).parent().is(d) || d.empty().append(w) : d.text(e.default(w).text());
                    return
                }
                this.config.html ? (this.config.sanitize && (w = si(w, this.config.whiteList, this.config.sanitizeFn)), d.html(w)) : d.text(w)
            }, O.getTitle = function () {
                var d = this.element.getAttribute("data-original-title");
                return d || (d = typeof this.config.title == "function" ? this.config.title.call(this.element) : this.config.title), d
            }, O._getPopperConfig = function (d) {
                var w = this, S = {
                    placement: d,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {behavior: this.config.fallbackPlacement},
                        arrow: {element: $i},
                        preventOverflow: {boundariesElement: this.config.boundary}
                    },
                    onCreate: function (U) {
                        U.originalPlacement !== U.placement && w._handlePopperPlacementChange(U)
                    },
                    onUpdate: function (U) {
                        return w._handlePopperPlacementChange(U)
                    }
                };
                return y({}, S, this.config.popperConfig)
            }, O._getOffset = function () {
                var d = this, w = {};
                return typeof this.config.offset == "function" ? w.fn = function (S) {
                    return S.offsets = y({}, S.offsets, d.config.offset(S.offsets, d.element)), S
                } : w.offset = this.config.offset, w
            }, O._getContainer = function () {
                return this.config.container === !1 ? document.body : te.isElement(this.config.container) ? e.default(this.config.container) : e.default(document).find(this.config.container)
            }, O._getAttachment = function (d) {
                return ci[d.toUpperCase()]
            }, O._setListeners = function () {
                var d = this, w = this.config.trigger.split(" ");
                w.forEach(function (S) {
                    if (S === "click") e.default(d.element).on(d.constructor.Event.CLICK, d.config.selector, function (Z) {
                        return d.toggle(Z)
                    }); else if (S !== di) {
                        var W = S === on ? d.constructor.Event.MOUSEENTER : d.constructor.Event.FOCUSIN,
                            U = S === on ? d.constructor.Event.MOUSELEAVE : d.constructor.Event.FOCUSOUT;
                        e.default(d.element).on(W, d.config.selector, function (Z) {
                            return d._enter(Z)
                        }).on(U, d.config.selector, function (Z) {
                            return d._leave(Z)
                        })
                    }
                }), this._hideModalHandler = function () {
                    d.element && d.hide()
                }, e.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = y({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, O._fixTitle = function () {
                var d = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || d !== "string") && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, O._enter = function (d, w) {
                var S = this.constructor.DATA_KEY;
                if (w = w || e.default(d.currentTarget).data(S), w || (w = new this.constructor(d.currentTarget, this._getDelegateConfig()), e.default(d.currentTarget).data(S, w)), d && (w._activeTrigger[d.type === "focusin" ? fi : on] = !0), e.default(w.getTipElement()).hasClass(qr) || w._hoverState === Br) {
                    w._hoverState = Br;
                    return
                }
                if (clearTimeout(w._timeout), w._hoverState = Br, !w.config.delay || !w.config.delay.show) {
                    w.show();
                    return
                }
                w._timeout = setTimeout(function () {
                    w._hoverState === Br && w.show()
                }, w.config.delay.show)
            }, O._leave = function (d, w) {
                var S = this.constructor.DATA_KEY;
                if (w = w || e.default(d.currentTarget).data(S), w || (w = new this.constructor(d.currentTarget, this._getDelegateConfig()), e.default(d.currentTarget).data(S, w)), d && (w._activeTrigger[d.type === "focusout" ? fi : on] = !1), !w._isWithActiveTrigger()) {
                    if (clearTimeout(w._timeout), w._hoverState = ui, !w.config.delay || !w.config.delay.hide) {
                        w.hide();
                        return
                    }
                    w._timeout = setTimeout(function () {
                        w._hoverState === ui && w.hide()
                    }, w.config.delay.hide)
                }
            }, O._isWithActiveTrigger = function () {
                for (var d in this._activeTrigger) if (this._activeTrigger[d]) return !0;
                return !1
            }, O._getConfig = function (d) {
                var w = e.default(this.element).data();
                return Object.keys(w).forEach(function (S) {
                    Tn.indexOf(S) !== -1 && delete w[S]
                }), d = y({}, this.constructor.Default, w, typeof d == "object" && d ? d : {}), typeof d.delay == "number" && (d.delay = {
                    show: d.delay,
                    hide: d.delay
                }), typeof d.title == "number" && (d.title = d.title.toString()), typeof d.content == "number" && (d.content = d.content.toString()), te.typeCheckConfig(Ft, d, this.constructor.DefaultType), d.sanitize && (d.template = si(d.template, d.whiteList, d.sanitizeFn)), d
            }, O._getDelegateConfig = function () {
                var d = {};
                if (this.config) for (var w in this.config) this.constructor.Default[w] !== this.config[w] && (d[w] = this.config[w]);
                return d
            }, O._cleanTipClass = function () {
                var d = e.default(this.getTipElement()), w = d.attr("class").match(li);
                w !== null && w.length && d.removeClass(w.join(""))
            }, O._handlePopperPlacementChange = function (d) {
                this.tip = d.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(d.placement))
            }, O._fixTransition = function () {
                var d = this.getTipElement(), w = this.config.animation;
                d.getAttribute("x-placement") === null && (e.default(d).removeClass(Mn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = w)
            }, P._jQueryInterface = function (d) {
                return this.each(function () {
                    var w = e.default(this), S = w.data(oi), W = typeof d == "object" && d;
                    if (!(!S && /dispose|hide/.test(d)) && (S || (S = new P(this, W), w.data(oi, S)), typeof d == "string")) {
                        if (typeof S[d] > "u") throw new TypeError('No method named "' + d + '"');
                        S[d]()
                    }
                })
            }, h(P, null, [{
                key: "VERSION", get: function () {
                    return Fn
                }
            }, {
                key: "Default", get: function () {
                    return Vi
                }
            }, {
                key: "NAME", get: function () {
                    return Ft
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return oi
                }
            }, {
                key: "Event", get: function () {
                    return hi
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return wn
                }
            }, {
                key: "DefaultType", get: function () {
                    return bs
                }
            }]), P
        }();
    e.default.fn[Ft] = jn._jQueryInterface, e.default.fn[Ft].Constructor = jn, e.default.fn[Ft].noConflict = function () {
        return e.default.fn[Ft] = Ss, jn._jQueryInterface
    };
    var nr = "popover", Es = "4.6.2", Lr = "bs.popover", ln = "." + Lr, T = e.default.fn[nr], x = "bs-popover",
        L = new RegExp("(^|\\s)" + x + "\\S+", "g"), F = "fade", B = "show", ne = ".popover-header",
        le = ".popover-body", ve = y({}, jn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), ue = y({}, jn.DefaultType, {content: "(string|element|function)"}), je = {
            HIDE: "hide" + ln,
            HIDDEN: "hidden" + ln,
            SHOW: "show" + ln,
            SHOWN: "shown" + ln,
            INSERTED: "inserted" + ln,
            CLICK: "click" + ln,
            FOCUSIN: "focusin" + ln,
            FOCUSOUT: "focusout" + ln,
            MOUSEENTER: "mouseenter" + ln,
            MOUSELEAVE: "mouseleave" + ln
        }, Se = function (P) {
            C(O, P);

            function O() {
                return P.apply(this, arguments) || this
            }

            var E = O.prototype;
            return E.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, E.addAttachmentClass = function (w) {
                e.default(this.getTipElement()).addClass(x + "-" + w)
            }, E.getTipElement = function () {
                return this.tip = this.tip || e.default(this.config.template)[0], this.tip
            }, E.setContent = function () {
                var w = e.default(this.getTipElement());
                this.setElementContent(w.find(ne), this.getTitle());
                var S = this._getContent();
                typeof S == "function" && (S = S.call(this.element)), this.setElementContent(w.find(le), S), w.removeClass(F + " " + B)
            }, E._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, E._cleanTipClass = function () {
                var w = e.default(this.getTipElement()), S = w.attr("class").match(L);
                S !== null && S.length > 0 && w.removeClass(S.join(""))
            }, O._jQueryInterface = function (w) {
                return this.each(function () {
                    var S = e.default(this).data(Lr), W = typeof w == "object" ? w : null;
                    if (!(!S && /dispose|hide/.test(w)) && (S || (S = new O(this, W), e.default(this).data(Lr, S)), typeof w == "string")) {
                        if (typeof S[w] > "u") throw new TypeError('No method named "' + w + '"');
                        S[w]()
                    }
                })
            }, h(O, null, [{
                key: "VERSION", get: function () {
                    return Es
                }
            }, {
                key: "Default", get: function () {
                    return ve
                }
            }, {
                key: "NAME", get: function () {
                    return nr
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Lr
                }
            }, {
                key: "Event", get: function () {
                    return je
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return ln
                }
            }, {
                key: "DefaultType", get: function () {
                    return ue
                }
            }]), O
        }(jn);
    e.default.fn[nr] = Se._jQueryInterface, e.default.fn[nr].Constructor = Se, e.default.fn[nr].noConflict = function () {
        return e.default.fn[nr] = T, Se._jQueryInterface
    };
    var be = "scrollspy", $e = "4.6.2", _e = "bs.scrollspy", et = "." + _e, Bt = ".data-api", xt = e.default.fn[be],
        un = "dropdown-item", Nt = "active", Pr = "activate" + et, jt = "scroll" + et, Ju = "load" + et + Bt,
        ef = "offset", Mo = "position", tf = '[data-spy="scroll"]', Io = ".nav, .list-group", Cs = ".nav-link",
        nf = ".nav-item", Lo = ".list-group-item", rf = ".dropdown", af = ".dropdown-item", sf = ".dropdown-toggle",
        Po = {offset: 10, method: "auto", target: ""},
        of = {offset: "number", method: "string", target: "(string|element)"}, Ui = function () {
            function P(E, d) {
                var w = this;
                this._element = E, this._scrollElement = E.tagName === "BODY" ? window : E, this._config = this._getConfig(d), this._selector = this._config.target + " " + Cs + "," + (this._config.target + " " + Lo + ",") + (this._config.target + " " + af), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e.default(this._scrollElement).on(jt, function (S) {
                    return w._process(S)
                }), this.refresh(), this._process()
            }

            var O = P.prototype;
            return O.refresh = function () {
                var d = this, w = this._scrollElement === this._scrollElement.window ? ef : Mo,
                    S = this._config.method === "auto" ? w : this._config.method, W = S === Mo ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                var U = [].slice.call(document.querySelectorAll(this._selector));
                U.map(function (Z) {
                    var Oe, Xe = te.getSelectorFromElement(Z);
                    if (Xe && (Oe = document.querySelector(Xe)), Oe) {
                        var tt = Oe.getBoundingClientRect();
                        if (tt.width || tt.height) return [e.default(Oe)[S]().top + W, Xe]
                    }
                    return null
                }).filter(Boolean).sort(function (Z, Oe) {
                    return Z[0] - Oe[0]
                }).forEach(function (Z) {
                    d._offsets.push(Z[0]), d._targets.push(Z[1])
                })
            }, O.dispose = function () {
                e.default.removeData(this._element, _e), e.default(this._scrollElement).off(et), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, O._getConfig = function (d) {
                if (d = y({}, Po, typeof d == "object" && d ? d : {}), typeof d.target != "string" && te.isElement(d.target)) {
                    var w = e.default(d.target).attr("id");
                    w || (w = te.getUID(be), e.default(d.target).attr("id", w)), d.target = "#" + w
                }
                return te.typeCheckConfig(be, d, of), d
            }, O._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, O._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, O._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, O._process = function () {
                var d = this._getScrollTop() + this._config.offset, w = this._getScrollHeight(),
                    S = this._config.offset + w - this._getOffsetHeight();
                if (this._scrollHeight !== w && this.refresh(), d >= S) {
                    var W = this._targets[this._targets.length - 1];
                    this._activeTarget !== W && this._activate(W);
                    return
                }
                if (this._activeTarget && d < this._offsets[0] && this._offsets[0] > 0) {
                    this._activeTarget = null, this._clear();
                    return
                }
                for (var U = this._offsets.length; U--;) {
                    var Z = this._activeTarget !== this._targets[U] && d >= this._offsets[U] && (typeof this._offsets[U + 1] > "u" || d < this._offsets[U + 1]);
                    Z && this._activate(this._targets[U])
                }
            }, O._activate = function (d) {
                this._activeTarget = d, this._clear();
                var w = this._selector.split(",").map(function (W) {
                    return W + '[data-target="' + d + '"],' + W + '[href="' + d + '"]'
                }), S = e.default([].slice.call(document.querySelectorAll(w.join(","))));
                S.hasClass(un) ? (S.closest(rf).find(sf).addClass(Nt), S.addClass(Nt)) : (S.addClass(Nt), S.parents(Io).prev(Cs + ", " + Lo).addClass(Nt), S.parents(Io).prev(nf).children(Cs).addClass(Nt)), e.default(this._scrollElement).trigger(Pr, {relatedTarget: d})
            }, O._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (d) {
                    return d.classList.contains(Nt)
                }).forEach(function (d) {
                    return d.classList.remove(Nt)
                })
            }, P._jQueryInterface = function (d) {
                return this.each(function () {
                    var w = e.default(this).data(_e), S = typeof d == "object" && d;
                    if (w || (w = new P(this, S), e.default(this).data(_e, w)), typeof d == "string") {
                        if (typeof w[d] > "u") throw new TypeError('No method named "' + d + '"');
                        w[d]()
                    }
                })
            }, h(P, null, [{
                key: "VERSION", get: function () {
                    return $e
                }
            }, {
                key: "Default", get: function () {
                    return Po
                }
            }]), P
        }();
    e.default(window).on(Ju, function () {
        for (var P = [].slice.call(document.querySelectorAll(tf)), O = P.length, E = O; E--;) {
            var d = e.default(P[E]);
            Ui._jQueryInterface.call(d, d.data())
        }
    }), e.default.fn[be] = Ui._jQueryInterface, e.default.fn[be].Constructor = Ui, e.default.fn[be].noConflict = function () {
        return e.default.fn[be] = xt, Ui._jQueryInterface
    };
    var qi = "tab", lf = "4.6.2", ka = "bs.tab", Bi = "." + ka, uf = ".data-api", ff = e.default.fn[qi],
        df = "dropdown-menu", zi = "active", cf = "disabled", Ro = "fade", Ho = "show", hf = "hide" + Bi,
        pf = "hidden" + Bi, gf = "show" + Bi, vf = "shown" + Bi, mf = "click" + Bi + uf, yf = ".dropdown",
        _f = ".nav, .list-group", Yo = ".active", Wo = "> li > .active",
        wf = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Tf = ".dropdown-toggle",
        Sf = "> .dropdown-menu .active", Gi = function () {
            function P(E) {
                this._element = E
            }

            var O = P.prototype;
            return O.show = function () {
                var d = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e.default(this._element).hasClass(zi) || e.default(this._element).hasClass(cf) || this._element.hasAttribute("disabled"))) {
                    var w, S, W = e.default(this._element).closest(_f)[0], U = te.getSelectorFromElement(this._element);
                    if (W) {
                        var Z = W.nodeName === "UL" || W.nodeName === "OL" ? Wo : Yo;
                        S = e.default.makeArray(e.default(W).find(Z)), S = S[S.length - 1]
                    }
                    var Oe = e.default.Event(hf, {relatedTarget: this._element}),
                        Xe = e.default.Event(gf, {relatedTarget: S});
                    if (S && e.default(S).trigger(Oe), e.default(this._element).trigger(Xe), !(Xe.isDefaultPrevented() || Oe.isDefaultPrevented())) {
                        U && (w = document.querySelector(U)), this._activate(this._element, W);
                        var tt = function () {
                            var rr = e.default.Event(pf, {relatedTarget: d._element}),
                                $n = e.default.Event(vf, {relatedTarget: S});
                            e.default(S).trigger(rr), e.default(d._element).trigger($n)
                        };
                        w ? this._activate(w, w.parentNode, tt) : tt()
                    }
                }
            }, O.dispose = function () {
                e.default.removeData(this._element, ka), this._element = null
            }, O._activate = function (d, w, S) {
                var W = this,
                    U = w && (w.nodeName === "UL" || w.nodeName === "OL") ? e.default(w).find(Wo) : e.default(w).children(Yo),
                    Z = U[0], Oe = S && Z && e.default(Z).hasClass(Ro), Xe = function () {
                        return W._transitionComplete(d, Z, S)
                    };
                if (Z && Oe) {
                    var tt = te.getTransitionDurationFromElement(Z);
                    e.default(Z).removeClass(Ho).one(te.TRANSITION_END, Xe).emulateTransitionEnd(tt)
                } else Xe()
            }, O._transitionComplete = function (d, w, S) {
                if (w) {
                    e.default(w).removeClass(zi);
                    var W = e.default(w.parentNode).find(Sf)[0];
                    W && e.default(W).removeClass(zi), w.getAttribute("role") === "tab" && w.setAttribute("aria-selected", !1)
                }
                e.default(d).addClass(zi), d.getAttribute("role") === "tab" && d.setAttribute("aria-selected", !0), te.reflow(d), d.classList.contains(Ro) && d.classList.add(Ho);
                var U = d.parentNode;
                if (U && U.nodeName === "LI" && (U = U.parentNode), U && e.default(U).hasClass(df)) {
                    var Z = e.default(d).closest(yf)[0];
                    if (Z) {
                        var Oe = [].slice.call(Z.querySelectorAll(Tf));
                        e.default(Oe).addClass(zi)
                    }
                    d.setAttribute("aria-expanded", !0)
                }
                S && S()
            }, P._jQueryInterface = function (d) {
                return this.each(function () {
                    var w = e.default(this), S = w.data(ka);
                    if (S || (S = new P(this), w.data(ka, S)), typeof d == "string") {
                        if (typeof S[d] > "u") throw new TypeError('No method named "' + d + '"');
                        S[d]()
                    }
                })
            }, h(P, null, [{
                key: "VERSION", get: function () {
                    return lf
                }
            }]), P
        }();
    e.default(document).on(mf, wf, function (P) {
        P.preventDefault(), Gi._jQueryInterface.call(e.default(this), "show")
    }), e.default.fn[qi] = Gi._jQueryInterface, e.default.fn[qi].Constructor = Gi, e.default.fn[qi].noConflict = function () {
        return e.default.fn[qi] = ff, Gi._jQueryInterface
    };
    var pi = "toast", bf = "4.6.2", Da = "bs.toast", Qi = "." + Da, Ef = e.default.fn[pi], Cf = "fade", Fo = "hide",
        Ki = "show", jo = "showing", $o = "click.dismiss" + Qi, kf = "hide" + Qi, Df = "hidden" + Qi, Of = "show" + Qi,
        Af = "shown" + Qi, xf = '[data-dismiss="toast"]', Vo = {animation: !0, autohide: !0, delay: 500},
        Nf = {animation: "boolean", autohide: "boolean", delay: "number"}, Oa = function () {
            function P(E, d) {
                this._element = E, this._config = this._getConfig(d), this._timeout = null, this._setListeners()
            }

            var O = P.prototype;
            return O.show = function () {
                var d = this, w = e.default.Event(Of);
                if (e.default(this._element).trigger(w), !w.isDefaultPrevented()) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add(Cf);
                    var S = function () {
                        d._element.classList.remove(jo), d._element.classList.add(Ki), e.default(d._element).trigger(Af), d._config.autohide && (d._timeout = setTimeout(function () {
                            d.hide()
                        }, d._config.delay))
                    };
                    if (this._element.classList.remove(Fo), te.reflow(this._element), this._element.classList.add(jo), this._config.animation) {
                        var W = te.getTransitionDurationFromElement(this._element);
                        e.default(this._element).one(te.TRANSITION_END, S).emulateTransitionEnd(W)
                    } else S()
                }
            }, O.hide = function () {
                if (this._element.classList.contains(Ki)) {
                    var d = e.default.Event(kf);
                    e.default(this._element).trigger(d), !d.isDefaultPrevented() && this._close()
                }
            }, O.dispose = function () {
                this._clearTimeout(), this._element.classList.contains(Ki) && this._element.classList.remove(Ki), e.default(this._element).off($o), e.default.removeData(this._element, Da), this._element = null, this._config = null
            }, O._getConfig = function (d) {
                return d = y({}, Vo, e.default(this._element).data(), typeof d == "object" && d ? d : {}), te.typeCheckConfig(pi, d, this.constructor.DefaultType), d
            }, O._setListeners = function () {
                var d = this;
                e.default(this._element).on($o, xf, function () {
                    return d.hide()
                })
            }, O._close = function () {
                var d = this, w = function () {
                    d._element.classList.add(Fo), e.default(d._element).trigger(Df)
                };
                if (this._element.classList.remove(Ki), this._config.animation) {
                    var S = te.getTransitionDurationFromElement(this._element);
                    e.default(this._element).one(te.TRANSITION_END, w).emulateTransitionEnd(S)
                } else w()
            }, O._clearTimeout = function () {
                clearTimeout(this._timeout), this._timeout = null
            }, P._jQueryInterface = function (d) {
                return this.each(function () {
                    var w = e.default(this), S = w.data(Da), W = typeof d == "object" && d;
                    if (S || (S = new P(this, W), w.data(Da, S)), typeof d == "string") {
                        if (typeof S[d] > "u") throw new TypeError('No method named "' + d + '"');
                        S[d](this)
                    }
                })
            }, h(P, null, [{
                key: "VERSION", get: function () {
                    return bf
                }
            }, {
                key: "DefaultType", get: function () {
                    return Nf
                }
            }, {
                key: "Default", get: function () {
                    return Vo
                }
            }]), P
        }();
    e.default.fn[pi] = Oa._jQueryInterface, e.default.fn[pi].Constructor = Oa, e.default.fn[pi].noConflict = function () {
        return e.default.fn[pi] = Ef, Oa._jQueryInterface
    }, t.Alert = Zt, t.Button = mn, t.Carousel = yt, t.Collapse = Xn, t.Dropdown = Zn, t.Modal = cr, t.Popover = Se, t.Scrollspy = Ui, t.Tab = Gi, t.Toast = Oa, t.Tooltip = jn, t.Util = te, Object.defineProperty(t, "__esModule", {value: !0})
});
var If = {exports: {}};
(function (t, n) {
    (function (a) {
        t.exports = a(fl)
    })(function (a) {
        var o = window.Slick || {};
        o = function () {
            var e = 0;

            function i(f, h) {
                var y = this, C;
                y.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(f),
                    appendDots: a(f),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (R, Y) {
                        return a('<button type="button" />').text(Y + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, y.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, a.extend(y, y.initials), y.activeBreakpoint = null, y.animType = null, y.animProp = null, y.breakpoints = [], y.breakpointSettings = [], y.cssTransitions = !1, y.focussed = !1, y.interrupted = !1, y.hidden = "hidden", y.paused = !0, y.positionProp = null, y.respondTo = null, y.rowCount = 1, y.shouldClick = !0, y.$slider = a(f), y.$slidesCache = null, y.transformType = null, y.transitionType = null, y.visibilityChange = "visibilitychange", y.windowWidth = 0, y.windowTimer = null, C = a(f).data("slick") || {}, y.options = a.extend({}, y.defaults, h, C), y.currentSlide = y.options.initialSlide, y.originalSettings = y.options, typeof document.mozHidden < "u" ? (y.hidden = "mozHidden", y.visibilityChange = "mozvisibilitychange") : typeof document.webkitHidden < "u" && (y.hidden = "webkitHidden", y.visibilityChange = "webkitvisibilitychange"), y.autoPlay = a.proxy(y.autoPlay, y), y.autoPlayClear = a.proxy(y.autoPlayClear, y), y.autoPlayIterator = a.proxy(y.autoPlayIterator, y), y.changeSlide = a.proxy(y.changeSlide, y), y.clickHandler = a.proxy(y.clickHandler, y), y.selectHandler = a.proxy(y.selectHandler, y), y.setPosition = a.proxy(y.setPosition, y), y.swipeHandler = a.proxy(y.swipeHandler, y), y.dragHandler = a.proxy(y.dragHandler, y), y.keyHandler = a.proxy(y.keyHandler, y), y.instanceUid = e++, y.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, y.registerBreakpoints(), y.init(!0)
            }

            return i
        }(), o.prototype.activateADA = function () {
            var e = this;
            e.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
        }, o.prototype.addSlide = o.prototype.slickAdd = function (e, i, f) {
            var h = this;
            if (typeof i == "boolean") f = i, i = null; else if (i < 0 || i >= h.slideCount) return !1;
            h.unload(), typeof i == "number" ? i === 0 && h.$slides.length === 0 ? a(e).appendTo(h.$slideTrack) : f ? a(e).insertBefore(h.$slides.eq(i)) : a(e).insertAfter(h.$slides.eq(i)) : f === !0 ? a(e).prependTo(h.$slideTrack) : a(e).appendTo(h.$slideTrack), h.$slides = h.$slideTrack.children(this.options.slide), h.$slideTrack.children(this.options.slide).detach(), h.$slideTrack.append(h.$slides), h.$slides.each(function (y, C) {
                a(C).attr("data-slick-index", y)
            }), h.$slidesCache = h.$slides, h.reinit()
        }, o.prototype.animateHeight = function () {
            var e = this;
            if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({height: i}, e.options.speed)
            }
        }, o.prototype.animateSlide = function (e, i) {
            var f = {}, h = this;
            h.animateHeight(), h.options.rtl === !0 && h.options.vertical === !1 && (e = -e), h.transformsEnabled === !1 ? h.options.vertical === !1 ? h.$slideTrack.animate({left: e}, h.options.speed, h.options.easing, i) : h.$slideTrack.animate({top: e}, h.options.speed, h.options.easing, i) : h.cssTransitions === !1 ? (h.options.rtl === !0 && (h.currentLeft = -h.currentLeft), a({animStart: h.currentLeft}).animate({animStart: e}, {
                duration: h.options.speed,
                easing: h.options.easing,
                step: function (y) {
                    y = Math.ceil(y), h.options.vertical === !1 ? (f[h.animType] = "translate(" + y + "px, 0px)", h.$slideTrack.css(f)) : (f[h.animType] = "translate(0px," + y + "px)", h.$slideTrack.css(f))
                },
                complete: function () {
                    i && i.call()
                }
            })) : (h.applyTransition(), e = Math.ceil(e), h.options.vertical === !1 ? f[h.animType] = "translate3d(" + e + "px, 0px, 0px)" : f[h.animType] = "translate3d(0px," + e + "px, 0px)", h.$slideTrack.css(f), i && setTimeout(function () {
                h.disableTransition(), i.call()
            }, h.options.speed))
        }, o.prototype.getNavTarget = function () {
            var e = this, i = e.options.asNavFor;
            return i && i !== null && (i = a(i).not(e.$slider)), i
        }, o.prototype.asNavFor = function (e) {
            var i = this, f = i.getNavTarget();
            f !== null && typeof f == "object" && f.each(function () {
                var h = a(this).slick("getSlick");
                h.unslicked || h.slideHandler(e, !0)
            })
        }, o.prototype.applyTransition = function (e) {
            var i = this, f = {};
            i.options.fade === !1 ? f[i.transitionType] = i.transformType + " " + i.options.speed + "ms " + i.options.cssEase : f[i.transitionType] = "opacity " + i.options.speed + "ms " + i.options.cssEase, i.options.fade === !1 ? i.$slideTrack.css(f) : i.$slides.eq(e).css(f)
        }, o.prototype.autoPlay = function () {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, o.prototype.autoPlayClear = function () {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, o.prototype.autoPlayIterator = function () {
            var e = this, i = e.currentSlide + e.options.slidesToScroll;
            !e.paused && !e.interrupted && !e.focussed && (e.options.infinite === !1 && (e.direction === 1 && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : e.direction === 0 && (i = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(i))
        }, o.prototype.buildArrows = function () {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = a(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = a(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, o.prototype.buildDots = function () {
            var e = this, i, f;
            if (e.options.dots === !0 && e.slideCount > e.options.slidesToShow) {
                for (e.$slider.addClass("slick-dotted"), f = a("<ul />").addClass(e.options.dotsClass), i = 0; i <= e.getDotCount(); i += 1) f.append(a("<li />").append(e.options.customPaging.call(this, e, i)));
                e.$dots = f.appendTo(e.options.appendDots), e.$dots.find("li").first().addClass("slick-active")
            }
        }, o.prototype.buildOut = function () {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (i, f) {
                a(f).attr("data-slick-index", i).data("originalStyling", a(f).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = e.slideCount === 0 ? a('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), a("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses(typeof e.currentSlide == "number" ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, o.prototype.buildRows = function () {
            var e = this, i, f, h, y, C, R, Y;
            if (y = document.createDocumentFragment(), R = e.$slider.children(), e.options.rows > 0) {
                for (Y = e.options.slidesPerRow * e.options.rows, C = Math.ceil(R.length / Y), i = 0; i < C; i++) {
                    var $ = document.createElement("div");
                    for (f = 0; f < e.options.rows; f++) {
                        var Ce = document.createElement("div");
                        for (h = 0; h < e.options.slidesPerRow; h++) {
                            var K = i * Y + (f * e.options.slidesPerRow + h);
                            R.get(K) && Ce.appendChild(R.get(K))
                        }
                        $.appendChild(Ce)
                    }
                    y.appendChild($)
                }
                e.$slider.empty().append(y), e.$slider.children().children().children().css({
                    width: 100 / e.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, o.prototype.checkResponsive = function (e, i) {
            var f = this, h, y, C, R = !1, Y = f.$slider.width(), $ = window.innerWidth || a(window).width();
            if (f.respondTo === "window" ? C = $ : f.respondTo === "slider" ? C = Y : f.respondTo === "min" && (C = Math.min($, Y)), f.options.responsive && f.options.responsive.length && f.options.responsive !== null) {
                y = null;
                for (h in f.breakpoints) f.breakpoints.hasOwnProperty(h) && (f.originalSettings.mobileFirst === !1 ? C < f.breakpoints[h] && (y = f.breakpoints[h]) : C > f.breakpoints[h] && (y = f.breakpoints[h]));
                y !== null ? f.activeBreakpoint !== null ? (y !== f.activeBreakpoint || i) && (f.activeBreakpoint = y, f.breakpointSettings[y] === "unslick" ? f.unslick(y) : (f.options = a.extend({}, f.originalSettings, f.breakpointSettings[y]), e === !0 && (f.currentSlide = f.options.initialSlide), f.refresh(e)), R = y) : (f.activeBreakpoint = y, f.breakpointSettings[y] === "unslick" ? f.unslick(y) : (f.options = a.extend({}, f.originalSettings, f.breakpointSettings[y]), e === !0 && (f.currentSlide = f.options.initialSlide), f.refresh(e)), R = y) : f.activeBreakpoint !== null && (f.activeBreakpoint = null, f.options = f.originalSettings, e === !0 && (f.currentSlide = f.options.initialSlide), f.refresh(e), R = y), !e && R !== !1 && f.$slider.trigger("breakpoint", [f, R])
            }
        }, o.prototype.changeSlide = function (e, i) {
            var f = this, h = a(e.currentTarget), y, C, R;
            switch (h.is("a") && e.preventDefault(), h.is("li") || (h = h.closest("li")), R = f.slideCount % f.options.slidesToScroll !== 0, y = R ? 0 : (f.slideCount - f.currentSlide) % f.options.slidesToScroll, e.data.message) {
                case"previous":
                    C = y === 0 ? f.options.slidesToScroll : f.options.slidesToShow - y, f.slideCount > f.options.slidesToShow && f.slideHandler(f.currentSlide - C, !1, i);
                    break;
                case"next":
                    C = y === 0 ? f.options.slidesToScroll : y, f.slideCount > f.options.slidesToShow && f.slideHandler(f.currentSlide + C, !1, i);
                    break;
                case"index":
                    var Y = e.data.index === 0 ? 0 : e.data.index || h.index() * f.options.slidesToScroll;
                    f.slideHandler(f.checkNavigable(Y), !1, i), h.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, o.prototype.checkNavigable = function (e) {
            var i = this, f, h;
            if (f = i.getNavigableIndexes(), h = 0, e > f[f.length - 1]) e = f[f.length - 1]; else for (var y in f) {
                if (e < f[y]) {
                    e = h;
                    break
                }
                h = f[y]
            }
            return e
        }, o.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots && e.$dots !== null && (a("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", a.proxy(e.interrupt, e, !0)).off("mouseleave.slick", a.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), a(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && a(e.$slideTrack).children().off("click.slick", e.selectHandler), a(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), a(window).off("resize.slick.slick-" + e.instanceUid, e.resize), a("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), a(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, o.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", a.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", a.proxy(e.interrupt, e, !1))
        }, o.prototype.cleanUpRows = function () {
            var e = this, i;
            e.options.rows > 0 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i))
        }, o.prototype.clickHandler = function (e) {
            var i = this;
            i.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, o.prototype.destroy = function (e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), a(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                a(this).attr("style", a(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, o.prototype.disableTransition = function (e) {
            var i = this, f = {};
            f[i.transitionType] = "", i.options.fade === !1 ? i.$slideTrack.css(f) : i.$slides.eq(e).css(f)
        }, o.prototype.fadeSlide = function (e, i) {
            var f = this;
            f.cssTransitions === !1 ? (f.$slides.eq(e).css({zIndex: f.options.zIndex}), f.$slides.eq(e).animate({opacity: 1}, f.options.speed, f.options.easing, i)) : (f.applyTransition(e), f.$slides.eq(e).css({
                opacity: 1,
                zIndex: f.options.zIndex
            }), i && setTimeout(function () {
                f.disableTransition(e), i.call()
            }, f.options.speed))
        }, o.prototype.fadeSlideOut = function (e) {
            var i = this;
            i.cssTransitions === !1 ? i.$slides.eq(e).animate({
                opacity: 0,
                zIndex: i.options.zIndex - 2
            }, i.options.speed, i.options.easing) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 0,
                zIndex: i.options.zIndex - 2
            }))
        }, o.prototype.filterSlides = o.prototype.slickFilter = function (e) {
            var i = this;
            e !== null && (i.$slidesCache = i.$slides, i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.filter(e).appendTo(i.$slideTrack), i.reinit())
        }, o.prototype.focusHandler = function () {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
                i.stopImmediatePropagation();
                var f = a(this);
                setTimeout(function () {
                    e.options.pauseOnFocus && (e.focussed = f.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, o.prototype.getCurrent = o.prototype.slickCurrentSlide = function () {
            var e = this;
            return e.currentSlide
        }, o.prototype.getDotCount = function () {
            var e = this, i = 0, f = 0, h = 0;
            if (e.options.infinite === !0) if (e.slideCount <= e.options.slidesToShow) ++h; else for (; i < e.slideCount;) ++h, i = f + e.options.slidesToScroll, f += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (e.options.centerMode === !0) h = e.slideCount; else if (!e.options.asNavFor) h = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll); else for (; i < e.slideCount;) ++h, i = f + e.options.slidesToScroll, f += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return h - 1
        }, o.prototype.getLeft = function (e) {
            var i = this, f, h, y = 0, C, R;
            return i.slideOffset = 0, h = i.$slides.first().outerHeight(!0), i.options.infinite === !0 ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1, R = -1, i.options.vertical === !0 && i.options.centerMode === !0 && (i.options.slidesToShow === 2 ? R = -1.5 : i.options.slidesToShow === 1 && (R = -2)), y = h * i.options.slidesToShow * R), i.slideCount % i.options.slidesToScroll !== 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1, y = (i.options.slidesToShow - (e - i.slideCount)) * h * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1, y = i.slideCount % i.options.slidesToScroll * h * -1))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth, y = (e + i.options.slidesToShow - i.slideCount) * h), i.slideCount <= i.options.slidesToShow && (i.slideOffset = 0, y = 0), i.options.centerMode === !0 && i.slideCount <= i.options.slidesToShow ? i.slideOffset = i.slideWidth * Math.floor(i.options.slidesToShow) / 2 - i.slideWidth * i.slideCount / 2 : i.options.centerMode === !0 && i.options.infinite === !0 ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : i.options.centerMode === !0 && (i.slideOffset = 0, i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)), i.options.vertical === !1 ? f = e * i.slideWidth * -1 + i.slideOffset : f = e * h * -1 + y, i.options.variableWidth === !0 && (i.slideCount <= i.options.slidesToShow || i.options.infinite === !1 ? C = i.$slideTrack.children(".slick-slide").eq(e) : C = i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow), i.options.rtl === !0 ? C[0] ? f = (i.$slideTrack.width() - C[0].offsetLeft - C.width()) * -1 : f = 0 : f = C[0] ? C[0].offsetLeft * -1 : 0, i.options.centerMode === !0 && (i.slideCount <= i.options.slidesToShow || i.options.infinite === !1 ? C = i.$slideTrack.children(".slick-slide").eq(e) : C = i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1), i.options.rtl === !0 ? C[0] ? f = (i.$slideTrack.width() - C[0].offsetLeft - C.width()) * -1 : f = 0 : f = C[0] ? C[0].offsetLeft * -1 : 0, f += (i.$list.width() - C.outerWidth()) / 2)), f
        }, o.prototype.getOption = o.prototype.slickGetOption = function (e) {
            var i = this;
            return i.options[e]
        }, o.prototype.getNavigableIndexes = function () {
            var e = this, i = 0, f = 0, h = [], y;
            for (e.options.infinite === !1 ? y = e.slideCount : (i = e.options.slidesToScroll * -1, f = e.options.slidesToScroll * -1, y = e.slideCount * 2); i < y;) h.push(i), i = f + e.options.slidesToScroll, f += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return h
        }, o.prototype.getSlick = function () {
            return this
        }, o.prototype.getSlideCount = function () {
            var e = this, i, f, h;
            return h = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function (y, C) {
                if (C.offsetLeft - h + a(C).outerWidth() / 2 > e.swipeLeft * -1) return f = C, !1
            }), i = Math.abs(a(f).attr("data-slick-index") - e.currentSlide) || 1, i) : e.options.slidesToScroll
        }, o.prototype.goTo = o.prototype.slickGoTo = function (e, i) {
            var f = this;
            f.changeSlide({data: {message: "index", index: parseInt(e)}}, i)
        }, o.prototype.init = function (e) {
            var i = this;
            a(i.$slider).hasClass("slick-initialized") || (a(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, o.prototype.initADA = function () {
            var e = this, i = Math.ceil(e.slideCount / e.options.slidesToShow),
                f = e.getNavigableIndexes().filter(function (C) {
                    return C >= 0 && C < e.slideCount
                });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({tabindex: "-1"}), e.$dots !== null && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (C) {
                var R = f.indexOf(C);
                if (a(this).attr({role: "tabpanel", id: "slick-slide" + e.instanceUid + C, tabindex: -1}), R !== -1) {
                    var Y = "slick-slide-control" + e.instanceUid + R;
                    a("#" + Y).length && a(this).attr({"aria-describedby": Y})
                }
            }), e.$dots.attr("role", "tablist").find("li").each(function (C) {
                var R = f[C];
                a(this).attr({role: "presentation"}), a(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + C,
                    "aria-controls": "slick-slide" + e.instanceUid + R,
                    "aria-label": C + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
            for (var h = e.currentSlide, y = h + e.options.slidesToShow; h < y; h++) e.options.focusOnChange ? e.$slides.eq(h).attr({tabindex: "0"}) : e.$slides.eq(h).removeAttr("tabindex");
            e.activateADA()
        }, o.prototype.initArrowEvents = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, o.prototype.initDotEvents = function () {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (a("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && a("li", e.$dots).on("mouseenter.slick", a.proxy(e.interrupt, e, !0)).on("mouseleave.slick", a.proxy(e.interrupt, e, !1))
        }, o.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", a.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", a.proxy(e.interrupt, e, !1)))
        }, o.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), a(document).on(e.visibilityChange, a.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && a(e.$slideTrack).children().on("click.slick", e.selectHandler), a(window).on("orientationchange.slick.slick-" + e.instanceUid, a.proxy(e.orientationChange, e)), a(window).on("resize.slick.slick-" + e.instanceUid, a.proxy(e.resize, e)), a("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), a(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), a(e.setPosition)
        }, o.prototype.initUI = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, o.prototype.keyHandler = function (e) {
            var i = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (e.keyCode === 37 && i.options.accessibility === !0 ? i.changeSlide({data: {message: i.options.rtl === !0 ? "next" : "previous"}}) : e.keyCode === 39 && i.options.accessibility === !0 && i.changeSlide({data: {message: i.options.rtl === !0 ? "previous" : "next"}}))
        }, o.prototype.lazyLoad = function () {
            var e = this, i, f, h, y;

            function C(K) {
                a("img[data-lazy]", K).each(function () {
                    var re = a(this), me = a(this).attr("data-lazy"), de = a(this).attr("data-srcset"),
                        te = a(this).attr("data-sizes") || e.$slider.attr("data-sizes"),
                        St = document.createElement("img");
                    St.onload = function () {
                        re.animate({opacity: 0}, 100, function () {
                            de && (re.attr("srcset", de), te && re.attr("sizes", te)), re.attr("src", me).animate({opacity: 1}, 200, function () {
                                re.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), e.$slider.trigger("lazyLoaded", [e, re, me])
                        })
                    }, St.onerror = function () {
                        re.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), e.$slider.trigger("lazyLoadError", [e, re, me])
                    }, St.src = me
                })
            }

            if (e.options.centerMode === !0 ? e.options.infinite === !0 ? (h = e.currentSlide + (e.options.slidesToShow / 2 + 1), y = h + e.options.slidesToShow + 2) : (h = Math.max(0, e.currentSlide - (e.options.slidesToShow / 2 + 1)), y = 2 + (e.options.slidesToShow / 2 + 1) + e.currentSlide) : (h = e.options.infinite ? e.options.slidesToShow + e.currentSlide : e.currentSlide, y = Math.ceil(h + e.options.slidesToShow), e.options.fade === !0 && (h > 0 && h--, y <= e.slideCount && y++)), i = e.$slider.find(".slick-slide").slice(h, y), e.options.lazyLoad === "anticipated") for (var R = h - 1, Y = y, $ = e.$slider.find(".slick-slide"), Ce = 0; Ce < e.options.slidesToScroll; Ce++) R < 0 && (R = e.slideCount - 1), i = i.add($.eq(R)), i = i.add($.eq(Y)), R--, Y++;
            C(i), e.slideCount <= e.options.slidesToShow ? (f = e.$slider.find(".slick-slide"), C(f)) : e.currentSlide >= e.slideCount - e.options.slidesToShow ? (f = e.$slider.find(".slick-cloned").slice(0, e.options.slidesToShow), C(f)) : e.currentSlide === 0 && (f = e.$slider.find(".slick-cloned").slice(e.options.slidesToShow * -1), C(f))
        }, o.prototype.loadSlider = function () {
            var e = this;
            e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), e.options.lazyLoad === "progressive" && e.progressiveLazyLoad()
        }, o.prototype.next = o.prototype.slickNext = function () {
            var e = this;
            e.changeSlide({data: {message: "next"}})
        }, o.prototype.orientationChange = function () {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, o.prototype.pause = o.prototype.slickPause = function () {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, o.prototype.play = o.prototype.slickPlay = function () {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, o.prototype.postSlide = function (e) {
            var i = this;
            if (!i.unslicked && (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), i.options.accessibility === !0 && (i.initADA(), i.options.focusOnChange))) {
                var f = a(i.$slides.get(i.currentSlide));
                f.attr("tabindex", 0).focus()
            }
        }, o.prototype.prev = o.prototype.slickPrev = function () {
            var e = this;
            e.changeSlide({data: {message: "previous"}})
        }, o.prototype.preventDefault = function (e) {
            e.preventDefault()
        }, o.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var i = this, f = a("img[data-lazy]", i.$slider), h, y, C, R, Y;
            f.length ? (h = f.first(), y = h.attr("data-lazy"), C = h.attr("data-srcset"), R = h.attr("data-sizes") || i.$slider.attr("data-sizes"), Y = document.createElement("img"), Y.onload = function () {
                C && (h.attr("srcset", C), R && h.attr("sizes", R)), h.attr("src", y).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), i.options.adaptiveHeight === !0 && i.setPosition(), i.$slider.trigger("lazyLoaded", [i, h, y]), i.progressiveLazyLoad()
            }, Y.onerror = function () {
                e < 3 ? setTimeout(function () {
                    i.progressiveLazyLoad(e + 1)
                }, 500) : (h.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, h, y]), i.progressiveLazyLoad())
            }, Y.src = y) : i.$slider.trigger("allImagesLoaded", [i])
        }, o.prototype.refresh = function (e) {
            var i = this, f, h;
            h = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > h && (i.currentSlide = h), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), f = i.currentSlide, i.destroy(!0), a.extend(i, i.initials, {currentSlide: f}), i.init(), e || i.changeSlide({
                data: {
                    message: "index",
                    index: f
                }
            }, !1)
        }, o.prototype.registerBreakpoints = function () {
            var e = this, i, f, h, y = e.options.responsive || null;
            if (a.type(y) === "array" && y.length) {
                e.respondTo = e.options.respondTo || "window";
                for (i in y) if (h = e.breakpoints.length - 1, y.hasOwnProperty(i)) {
                    for (f = y[i].breakpoint; h >= 0;) e.breakpoints[h] && e.breakpoints[h] === f && e.breakpoints.splice(h, 1), h--;
                    e.breakpoints.push(f), e.breakpointSettings[f] = y[i].settings
                }
                e.breakpoints.sort(function (C, R) {
                    return e.options.mobileFirst ? C - R : R - C
                })
            }
        }, o.prototype.reinit = function () {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && e.currentSlide !== 0 && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && a(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(typeof e.currentSlide == "number" ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, o.prototype.resize = function () {
            var e = this;
            a(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
                e.windowWidth = a(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, o.prototype.removeSlide = o.prototype.slickRemove = function (e, i, f) {
            var h = this;
            if (typeof e == "boolean" ? (i = e, e = i === !0 ? 0 : h.slideCount - 1) : e = i === !0 ? --e : e, h.slideCount < 1 || e < 0 || e > h.slideCount - 1) return !1;
            h.unload(), f === !0 ? h.$slideTrack.children().remove() : h.$slideTrack.children(this.options.slide).eq(e).remove(), h.$slides = h.$slideTrack.children(this.options.slide), h.$slideTrack.children(this.options.slide).detach(), h.$slideTrack.append(h.$slides), h.$slidesCache = h.$slides, h.reinit()
        }, o.prototype.setCSS = function (e) {
            var i = this, f = {}, h, y;
            i.options.rtl === !0 && (e = -e), h = i.positionProp == "left" ? Math.ceil(e) + "px" : "0px", y = i.positionProp == "top" ? Math.ceil(e) + "px" : "0px", f[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(f) : (f = {}, i.cssTransitions === !1 ? (f[i.animType] = "translate(" + h + ", " + y + ")", i.$slideTrack.css(f)) : (f[i.animType] = "translate3d(" + h + ", " + y + ", 0px)", i.$slideTrack.css(f)))
        }, o.prototype.setDimensions = function () {
            var e = this;
            e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i)
        }, o.prototype.setFade = function () {
            var e = this, i;
            e.$slides.each(function (f, h) {
                i = e.slideWidth * f * -1, e.options.rtl === !0 ? a(h).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: e.options.zIndex - 2,
                    opacity: 0
                }) : a(h).css({position: "relative", left: i, top: 0, zIndex: e.options.zIndex - 2, opacity: 0})
            }), e.$slides.eq(e.currentSlide).css({zIndex: e.options.zIndex - 1, opacity: 1})
        }, o.prototype.setHeight = function () {
            var e = this;
            if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", i)
            }
        }, o.prototype.setOption = o.prototype.slickSetOption = function () {
            var e = this, i, f, h, y, C = !1, R;
            if (a.type(arguments[0]) === "object" ? (h = arguments[0], C = arguments[1], R = "multiple") : a.type(arguments[0]) === "string" && (h = arguments[0], y = arguments[1], C = arguments[2], arguments[0] === "responsive" && a.type(arguments[1]) === "array" ? R = "responsive" : typeof arguments[1] < "u" && (R = "single")), R === "single") e.options[h] = y; else if (R === "multiple") a.each(h, function (Y, $) {
                e.options[Y] = $
            }); else if (R === "responsive") for (f in y) if (a.type(e.options.responsive) !== "array") e.options.responsive = [y[f]]; else {
                for (i = e.options.responsive.length - 1; i >= 0;) e.options.responsive[i].breakpoint === y[f].breakpoint && e.options.responsive.splice(i, 1), i--;
                e.options.responsive.push(y[f])
            }
            C && (e.unload(), e.reinit())
        }, o.prototype.setPosition = function () {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, o.prototype.setProps = function () {
            var e = this, i = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", e.positionProp === "top" ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (i.WebkitTransition !== void 0 || i.MozTransition !== void 0 || i.msTransition !== void 0) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && (typeof e.options.zIndex == "number" ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), i.OTransform !== void 0 && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", i.perspectiveProperty === void 0 && i.webkitPerspective === void 0 && (e.animType = !1)), i.MozTransform !== void 0 && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", i.perspectiveProperty === void 0 && i.MozPerspective === void 0 && (e.animType = !1)), i.webkitTransform !== void 0 && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", i.perspectiveProperty === void 0 && i.webkitPerspective === void 0 && (e.animType = !1)), i.msTransform !== void 0 && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", i.msTransform === void 0 && (e.animType = !1)), i.transform !== void 0 && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && e.animType !== null && e.animType !== !1
        }, o.prototype.setSlideClasses = function (e) {
            var i = this, f, h, y, C;
            if (h = i.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), i.$slides.eq(e).addClass("slick-current"), i.options.centerMode === !0) {
                var R = i.options.slidesToShow % 2 === 0 ? 1 : 0;
                f = Math.floor(i.options.slidesToShow / 2), i.options.infinite === !0 && (e >= f && e <= i.slideCount - 1 - f ? i.$slides.slice(e - f + R, e + f + 1).addClass("slick-active").attr("aria-hidden", "false") : (y = i.options.slidesToShow + e, h.slice(y - f + 1 + R, y + f + 2).addClass("slick-active").attr("aria-hidden", "false")), e === 0 ? h.eq(h.length - 1 - i.options.slidesToShow).addClass("slick-center") : e === i.slideCount - 1 && h.eq(i.options.slidesToShow).addClass("slick-center")), i.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= i.slideCount - i.options.slidesToShow ? i.$slides.slice(e, e + i.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : h.length <= i.options.slidesToShow ? h.addClass("slick-active").attr("aria-hidden", "false") : (C = i.slideCount % i.options.slidesToShow, y = i.options.infinite === !0 ? i.options.slidesToShow + e : e, i.options.slidesToShow == i.options.slidesToScroll && i.slideCount - e < i.options.slidesToShow ? h.slice(y - (i.options.slidesToShow - C), y + C).addClass("slick-active").attr("aria-hidden", "false") : h.slice(y, y + i.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            (i.options.lazyLoad === "ondemand" || i.options.lazyLoad === "anticipated") && i.lazyLoad()
        }, o.prototype.setupInfinite = function () {
            var e = this, i, f, h;
            if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (f = null, e.slideCount > e.options.slidesToShow)) {
                for (e.options.centerMode === !0 ? h = e.options.slidesToShow + 1 : h = e.options.slidesToShow, i = e.slideCount; i > e.slideCount - h; i -= 1) f = i - 1, a(e.$slides[f]).clone(!0).attr("id", "").attr("data-slick-index", f - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
                for (i = 0; i < h + e.slideCount; i += 1) f = i, a(e.$slides[f]).clone(!0).attr("id", "").attr("data-slick-index", f + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
                e.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    a(this).attr("id", "")
                })
            }
        }, o.prototype.interrupt = function (e) {
            var i = this;
            e || i.autoPlay(), i.interrupted = e
        }, o.prototype.selectHandler = function (e) {
            var i = this, f = a(e.target).is(".slick-slide") ? a(e.target) : a(e.target).parents(".slick-slide"),
                h = parseInt(f.attr("data-slick-index"));
            if (h || (h = 0), i.slideCount <= i.options.slidesToShow) {
                i.slideHandler(h, !1, !0);
                return
            }
            i.slideHandler(h)
        }, o.prototype.slideHandler = function (e, i, f) {
            var h, y, C, R, Y = null, $ = this, Ce;
            if (i = i || !1, !($.animating === !0 && $.options.waitForAnimate === !0) && !($.options.fade === !0 && $.currentSlide === e)) {
                if (i === !1 && $.asNavFor(e), h = e, Y = $.getLeft(h), R = $.getLeft($.currentSlide), $.currentLeft = $.swipeLeft === null ? R : $.swipeLeft, $.options.infinite === !1 && $.options.centerMode === !1 && (e < 0 || e > $.getDotCount() * $.options.slidesToScroll)) {
                    $.options.fade === !1 && (h = $.currentSlide, f !== !0 && $.slideCount > $.options.slidesToShow ? $.animateSlide(R, function () {
                        $.postSlide(h)
                    }) : $.postSlide(h));
                    return
                } else if ($.options.infinite === !1 && $.options.centerMode === !0 && (e < 0 || e > $.slideCount - $.options.slidesToScroll)) {
                    $.options.fade === !1 && (h = $.currentSlide, f !== !0 && $.slideCount > $.options.slidesToShow ? $.animateSlide(R, function () {
                        $.postSlide(h)
                    }) : $.postSlide(h));
                    return
                }
                if ($.options.autoplay && clearInterval($.autoPlayTimer), h < 0 ? $.slideCount % $.options.slidesToScroll !== 0 ? y = $.slideCount - $.slideCount % $.options.slidesToScroll : y = $.slideCount + h : h >= $.slideCount ? $.slideCount % $.options.slidesToScroll !== 0 ? y = 0 : y = h - $.slideCount : y = h, $.animating = !0, $.$slider.trigger("beforeChange", [$, $.currentSlide, y]), C = $.currentSlide, $.currentSlide = y, $.setSlideClasses($.currentSlide), $.options.asNavFor && (Ce = $.getNavTarget(), Ce = Ce.slick("getSlick"), Ce.slideCount <= Ce.options.slidesToShow && Ce.setSlideClasses($.currentSlide)), $.updateDots(), $.updateArrows(), $.options.fade === !0) {
                    f !== !0 ? ($.fadeSlideOut(C), $.fadeSlide(y, function () {
                        $.postSlide(y)
                    })) : $.postSlide(y), $.animateHeight();
                    return
                }
                f !== !0 && $.slideCount > $.options.slidesToShow ? $.animateSlide(Y, function () {
                    $.postSlide(y)
                }) : $.postSlide(y)
            }
        }, o.prototype.startLoad = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, o.prototype.swipeDirection = function () {
            var e, i, f, h, y = this;
            return e = y.touchObject.startX - y.touchObject.curX, i = y.touchObject.startY - y.touchObject.curY, f = Math.atan2(i, e), h = Math.round(f * 180 / Math.PI), h < 0 && (h = 360 - Math.abs(h)), h <= 45 && h >= 0 || h <= 360 && h >= 315 ? y.options.rtl === !1 ? "left" : "right" : h >= 135 && h <= 225 ? y.options.rtl === !1 ? "right" : "left" : y.options.verticalSwiping === !0 ? h >= 35 && h <= 135 ? "down" : "up" : "vertical"
        }, o.prototype.swipeEnd = function (e) {
            var i = this, f, h;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
            if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), i.touchObject.curX === void 0) return !1;
            if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (h = i.swipeDirection(), h) {
                    case"left":
                    case"down":
                        f = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case"right":
                    case"up":
                        f = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1;
                        break
                }
                h != "vertical" && (i.slideHandler(f), i.touchObject = {}, i.$slider.trigger("swipe", [i, h]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, o.prototype.swipeHandler = function (e) {
            var i = this;
            if (!(i.options.swipe === !1 || "ontouchend" in document && i.options.swipe === !1) && !(i.options.draggable === !1 && e.type.indexOf("mouse") !== -1)) switch (i.touchObject.fingerCount = e.originalEvent && e.originalEvent.touches !== void 0 ? e.originalEvent.touches.length : 1, i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold, i.options.verticalSwiping === !0 && (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold), e.data.action) {
                case"start":
                    i.swipeStart(e);
                    break;
                case"move":
                    i.swipeMove(e);
                    break;
                case"end":
                    i.swipeEnd(e);
                    break
            }
        }, o.prototype.swipeMove = function (e) {
            var i = this, f, h, y, C, R, Y;
            if (R = e.originalEvent !== void 0 ? e.originalEvent.touches : null, !i.dragging || i.scrolling || R && R.length !== 1) return !1;
            if (f = i.getLeft(i.currentSlide), i.touchObject.curX = R !== void 0 ? R[0].pageX : e.clientX, i.touchObject.curY = R !== void 0 ? R[0].pageY : e.clientY, i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))), Y = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2))), !i.options.verticalSwiping && !i.swiping && Y > 4) return i.scrolling = !0, !1;
            if (i.options.verticalSwiping === !0 && (i.touchObject.swipeLength = Y), h = i.swipeDirection(), e.originalEvent !== void 0 && i.touchObject.swipeLength > 4 && (i.swiping = !0, e.preventDefault()), C = (i.options.rtl === !1 ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1), i.options.verticalSwiping === !0 && (C = i.touchObject.curY > i.touchObject.startY ? 1 : -1), y = i.touchObject.swipeLength, i.touchObject.edgeHit = !1, i.options.infinite === !1 && (i.currentSlide === 0 && h === "right" || i.currentSlide >= i.getDotCount() && h === "left") && (y = i.touchObject.swipeLength * i.options.edgeFriction, i.touchObject.edgeHit = !0), i.options.vertical === !1 ? i.swipeLeft = f + y * C : i.swipeLeft = f + y * (i.$list.height() / i.listWidth) * C, i.options.verticalSwiping === !0 && (i.swipeLeft = f + y * C), i.options.fade === !0 || i.options.touchMove === !1) return !1;
            if (i.animating === !0) return i.swipeLeft = null, !1;
            i.setCSS(i.swipeLeft)
        }, o.prototype.swipeStart = function (e) {
            var i = this, f;
            if (i.interrupted = !0, i.touchObject.fingerCount !== 1 || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            e.originalEvent !== void 0 && e.originalEvent.touches !== void 0 && (f = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = f !== void 0 ? f.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = f !== void 0 ? f.pageY : e.clientY, i.dragging = !0
        }, o.prototype.unfilterSlides = o.prototype.slickUnfilter = function () {
            var e = this;
            e.$slidesCache !== null && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, o.prototype.unload = function () {
            var e = this;
            a(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, o.prototype.unslick = function (e) {
            var i = this;
            i.$slider.trigger("unslick", [i, e]), i.destroy()
        }, o.prototype.updateArrows = function () {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.currentSlide === 0 ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 || e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, o.prototype.updateDots = function () {
            var e = this;
            e.$dots !== null && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, o.prototype.visibility = function () {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, a.fn.slick = function () {
            var e = this, i = arguments[0], f = Array.prototype.slice.call(arguments, 1), h = e.length, y, C;
            for (y = 0; y < h; y++) if (typeof i == "object" || typeof i > "u" ? e[y].slick = new o(e[y], i) : C = e[y].slick[i].apply(e[y].slick, f), typeof C < "u") return C;
            return e
        }
    })
})(If);
var dl = "1.13.6",
    qo = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {},
    Ua = Array.prototype, Qs = Object.prototype, Bo = typeof Symbol < "u" ? Symbol.prototype : null, Lf = Ua.push,
    oa = Ua.slice, ta = Qs.toString, Pf = Qs.hasOwnProperty, cl = typeof ArrayBuffer < "u", Rf = typeof DataView < "u",
    Hf = Array.isArray, zo = Object.keys, Go = Object.create, Qo = cl && ArrayBuffer.isView, Yf = isNaN, Wf = isFinite,
    hl = !{toString: null}.propertyIsEnumerable("toString"),
    Ko = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
    Ff = Math.pow(2, 53) - 1;

function dn(t, n) {
    return n = n == null ? t.length - 1 : +n, function () {
        for (var a = Math.max(arguments.length - n, 0), o = Array(a), e = 0; e < a; e++) o[e] = arguments[e + n];
        switch (n) {
            case 0:
                return t.call(this, o);
            case 1:
                return t.call(this, arguments[0], o);
            case 2:
                return t.call(this, arguments[0], arguments[1], o)
        }
        var i = Array(n + 1);
        for (e = 0; e < n; e++) i[e] = arguments[e];
        return i[n] = o, t.apply(this, i)
    }
}

function Zr(t) {
    var n = typeof t;
    return n === "function" || n === "object" && !!t
}

function jf(t) {
    return t === null
}

function pl(t) {
    return t === void 0
}

function gl(t) {
    return t === !0 || t === !1 || ta.call(t) === "[object Boolean]"
}

function $f(t) {
    return !!(t && t.nodeType === 1)
}

function Gt(t) {
    var n = "[object " + t + "]";
    return function (a) {
        return ta.call(a) === n
    }
}

const Ks = Gt("String"), vl = Gt("Number"), Vf = Gt("Date"), Uf = Gt("RegExp"), qf = Gt("Error"), ml = Gt("Symbol"),
    yl = Gt("ArrayBuffer");
var _l = Gt("Function"), Bf = qo.document && qo.document.childNodes;
typeof /./ != "function" && typeof Int8Array != "object" && typeof Bf != "function" && (_l = function (t) {
    return typeof t == "function" || !1
});
const tn = _l, wl = Gt("Object");
var Tl = Rf && wl(new DataView(new ArrayBuffer(8))), Xs = typeof Map < "u" && wl(new Map), zf = Gt("DataView");

function Gf(t) {
    return t != null && tn(t.getInt8) && yl(t.buffer)
}

const Pa = Tl ? Gf : zf, Jr = Hf || Gt("Array");

function Wr(t, n) {
    return t != null && Pf.call(t, n)
}

var Ls = Gt("Arguments");
(function () {
    Ls(arguments) || (Ls = function (t) {
        return Wr(t, "callee")
    })
})();
const Zs = Ls;

function Qf(t) {
    return !ml(t) && Wf(t) && !isNaN(parseFloat(t))
}

function Sl(t) {
    return vl(t) && Yf(t)
}

function bl(t) {
    return function () {
        return t
    }
}

function El(t) {
    return function (n) {
        var a = t(n);
        return typeof a == "number" && a >= 0 && a <= Ff
    }
}

function Cl(t) {
    return function (n) {
        return n?.[t]
    }
}

const Ra = Cl("byteLength"), Kf = El(Ra);
var Xf = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;

function Zf(t) {
    return Qo ? Qo(t) && !Pa(t) : Kf(t) && Xf.test(ta.call(t))
}

const kl = cl ? Zf : bl(!1), cn = Cl("length");

function Jf(t) {
    for (var n = {}, a = t.length, o = 0; o < a; ++o) n[t[o]] = !0;
    return {
        contains: function (e) {
            return n[e] === !0
        }, push: function (e) {
            return n[e] = !0, t.push(e)
        }
    }
}

function Dl(t, n) {
    n = Jf(n);
    var a = Ko.length, o = t.constructor, e = tn(o) && o.prototype || Qs, i = "constructor";
    for (Wr(t, i) && !n.contains(i) && n.push(i); a--;) i = Ko[a], i in t && t[i] !== e[i] && !n.contains(i) && n.push(i)
}

function It(t) {
    if (!Zr(t)) return [];
    if (zo) return zo(t);
    var n = [];
    for (var a in t) Wr(t, a) && n.push(a);
    return hl && Dl(t, n), n
}

function ed(t) {
    if (t == null) return !0;
    var n = cn(t);
    return typeof n == "number" && (Jr(t) || Ks(t) || Zs(t)) ? n === 0 : cn(It(t)) === 0
}

function Ol(t, n) {
    var a = It(n), o = a.length;
    if (t == null) return !o;
    for (var e = Object(t), i = 0; i < o; i++) {
        var f = a[i];
        if (n[f] !== e[f] || !(f in e)) return !1
    }
    return !0
}

function nt(t) {
    if (t instanceof nt) return t;
    if (!(this instanceof nt)) return new nt(t);
    this._wrapped = t
}

nt.VERSION = dl;
nt.prototype.value = function () {
    return this._wrapped
};
nt.prototype.valueOf = nt.prototype.toJSON = nt.prototype.value;
nt.prototype.toString = function () {
    return String(this._wrapped)
};

function Xo(t) {
    return new Uint8Array(t.buffer || t, t.byteOffset || 0, Ra(t))
}

var Zo = "[object DataView]";

function Ps(t, n, a, o) {
    if (t === n) return t !== 0 || 1 / t === 1 / n;
    if (t == null || n == null) return !1;
    if (t !== t) return n !== n;
    var e = typeof t;
    return e !== "function" && e !== "object" && typeof n != "object" ? !1 : Al(t, n, a, o)
}

function Al(t, n, a, o) {
    t instanceof nt && (t = t._wrapped), n instanceof nt && (n = n._wrapped);
    var e = ta.call(t);
    if (e !== ta.call(n)) return !1;
    if (Tl && e == "[object Object]" && Pa(t)) {
        if (!Pa(n)) return !1;
        e = Zo
    }
    switch (e) {
        case"[object RegExp]":
        case"[object String]":
            return "" + t == "" + n;
        case"[object Number]":
            return +t != +t ? +n != +n : +t == 0 ? 1 / +t === 1 / n : +t == +n;
        case"[object Date]":
        case"[object Boolean]":
            return +t == +n;
        case"[object Symbol]":
            return Bo.valueOf.call(t) === Bo.valueOf.call(n);
        case"[object ArrayBuffer]":
        case Zo:
            return Al(Xo(t), Xo(n), a, o)
    }
    var i = e === "[object Array]";
    if (!i && kl(t)) {
        var f = Ra(t);
        if (f !== Ra(n)) return !1;
        if (t.buffer === n.buffer && t.byteOffset === n.byteOffset) return !0;
        i = !0
    }
    if (!i) {
        if (typeof t != "object" || typeof n != "object") return !1;
        var h = t.constructor, y = n.constructor;
        if (h !== y && !(tn(h) && h instanceof h && tn(y) && y instanceof y) && "constructor" in t && "constructor" in n) return !1
    }
    a = a || [], o = o || [];
    for (var C = a.length; C--;) if (a[C] === t) return o[C] === n;
    if (a.push(t), o.push(n), i) {
        if (C = t.length, C !== n.length) return !1;
        for (; C--;) if (!Ps(t[C], n[C], a, o)) return !1
    } else {
        var R = It(t), Y;
        if (C = R.length, It(n).length !== C) return !1;
        for (; C--;) if (Y = R[C], !(Wr(n, Y) && Ps(t[Y], n[Y], a, o))) return !1
    }
    return a.pop(), o.pop(), !0
}

function td(t, n) {
    return Ps(t, n)
}

function la(t) {
    if (!Zr(t)) return [];
    var n = [];
    for (var a in t) n.push(a);
    return hl && Dl(t, n), n
}

function Js(t) {
    var n = cn(t);
    return function (a) {
        if (a == null) return !1;
        var o = la(a);
        if (cn(o)) return !1;
        for (var e = 0; e < n; e++) if (!tn(a[t[e]])) return !1;
        return t !== Ml || !tn(a[eo])
    }
}

var eo = "forEach", xl = "has", to = ["clear", "delete"], Nl = ["get", xl, "set"], nd = to.concat(eo, Nl),
    Ml = to.concat(Nl), rd = ["add"].concat(to, eo, xl);
const id = Xs ? Js(nd) : Gt("Map"), ad = Xs ? Js(Ml) : Gt("WeakMap"), sd = Xs ? Js(rd) : Gt("Set"), od = Gt("WeakSet");

function bi(t) {
    for (var n = It(t), a = n.length, o = Array(a), e = 0; e < a; e++) o[e] = t[n[e]];
    return o
}

function ld(t) {
    for (var n = It(t), a = n.length, o = Array(a), e = 0; e < a; e++) o[e] = [n[e], t[n[e]]];
    return o
}

function Il(t) {
    for (var n = {}, a = It(t), o = 0, e = a.length; o < e; o++) n[t[a[o]]] = a[o];
    return n
}

function Rs(t) {
    var n = [];
    for (var a in t) tn(t[a]) && n.push(a);
    return n.sort()
}

function no(t, n) {
    return function (a) {
        var o = arguments.length;
        if (n && (a = Object(a)), o < 2 || a == null) return a;
        for (var e = 1; e < o; e++) for (var i = arguments[e], f = t(i), h = f.length, y = 0; y < h; y++) {
            var C = f[y];
            (!n || a[C] === void 0) && (a[C] = i[C])
        }
        return a
    }
}

const Ll = no(la), Ha = no(It), Pl = no(la, !0);

function ud() {
    return function () {
    }
}

function Rl(t) {
    if (!Zr(t)) return {};
    if (Go) return Go(t);
    var n = ud();
    n.prototype = t;
    var a = new n;
    return n.prototype = null, a
}

function fd(t, n) {
    var a = Rl(t);
    return n && Ha(a, n), a
}

function dd(t) {
    return Zr(t) ? Jr(t) ? t.slice() : Ll({}, t) : t
}

function cd(t, n) {
    return n(t), t
}

function Hl(t) {
    return Jr(t) ? t : [t]
}

nt.toPath = Hl;

function ua(t) {
    return nt.toPath(t)
}

function ro(t, n) {
    for (var a = n.length, o = 0; o < a; o++) {
        if (t == null) return;
        t = t[n[o]]
    }
    return a ? t : void 0
}

function Yl(t, n, a) {
    var o = ro(t, ua(n));
    return pl(o) ? a : o
}

function hd(t, n) {
    n = ua(n);
    for (var a = n.length, o = 0; o < a; o++) {
        var e = n[o];
        if (!Wr(t, e)) return !1;
        t = t[e]
    }
    return !!a
}

function io(t) {
    return t
}

function na(t) {
    return t = Ha({}, t), function (n) {
        return Ol(n, t)
    }
}

function ao(t) {
    return t = ua(t), function (n) {
        return ro(n, t)
    }
}

function fa(t, n, a) {
    if (n === void 0) return t;
    switch (a ?? 3) {
        case 1:
            return function (o) {
                return t.call(n, o)
            };
        case 3:
            return function (o, e, i) {
                return t.call(n, o, e, i)
            };
        case 4:
            return function (o, e, i, f) {
                return t.call(n, o, e, i, f)
            }
    }
    return function () {
        return t.apply(n, arguments)
    }
}

function Wl(t, n, a) {
    return t == null ? io : tn(t) ? fa(t, n, a) : Zr(t) && !Jr(t) ? na(t) : ao(t)
}

function so(t, n) {
    return Wl(t, n, 1 / 0)
}

nt.iteratee = so;

function hn(t, n, a) {
    return nt.iteratee !== so ? nt.iteratee(t, n) : Wl(t, n, a)
}

function pd(t, n, a) {
    n = hn(n, a);
    for (var o = It(t), e = o.length, i = {}, f = 0; f < e; f++) {
        var h = o[f];
        i[h] = n(t[h], h, t)
    }
    return i
}

function Fl() {
}

function gd(t) {
    return t == null ? Fl : function (n) {
        return Yl(t, n)
    }
}

function vd(t, n, a) {
    var o = Array(Math.max(0, t));
    n = fa(n, a, 1);
    for (var e = 0; e < t; e++) o[e] = n(e);
    return o
}

function Hs(t, n) {
    return n == null && (n = t, t = 0), t + Math.floor(Math.random() * (n - t + 1))
}

const ra = Date.now || function () {
    return new Date().getTime()
};

function jl(t) {
    var n = function (i) {
        return t[i]
    }, a = "(?:" + It(t).join("|") + ")", o = RegExp(a), e = RegExp(a, "g");
    return function (i) {
        return i = i == null ? "" : "" + i, o.test(i) ? i.replace(e, n) : i
    }
}

const $l = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, md = jl($l),
    yd = Il($l), _d = jl(yd), wd = nt.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
var Ds = /(.)^/, Td = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
    Sd = /\\|'|\r|\n|\u2028|\u2029/g;

function bd(t) {
    return "\\" + Td[t]
}

var Ed = /^\s*(\w|\$)+\s*$/;

function Cd(t, n, a) {
    !n && a && (n = a), n = Pl({}, n, nt.templateSettings);
    var o = RegExp([(n.escape || Ds).source, (n.interpolate || Ds).source, (n.evaluate || Ds).source].join("|") + "|$", "g"),
        e = 0, i = "__p+='";
    t.replace(o, function (C, R, Y, $, Ce) {
        return i += t.slice(e, Ce).replace(Sd, bd), e = Ce + C.length, R ? i += `'+
((__t=(` + R + `))==null?'':_.escape(__t))+
'` : Y ? i += `'+
((__t=(` + Y + `))==null?'':__t)+
'` : $ && (i += `';
` + $ + `
__p+='`), C
    }), i += `';
`;
    var f = n.variable;
    if (f) {
        if (!Ed.test(f)) throw new Error("variable is not a bare identifier: " + f)
    } else i = `with(obj||{}){
` + i + `}
`, f = "obj";
    i = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + i + `return __p;
`;
    var h;
    try {
        h = new Function(f, "_", i)
    } catch (C) {
        throw C.source = i, C
    }
    var y = function (C) {
        return h.call(this, C, nt)
    };
    return y.source = "function(" + f + `){
` + i + "}", y
}

function kd(t, n, a) {
    n = ua(n);
    var o = n.length;
    if (!o) return tn(a) ? a.call(t) : a;
    for (var e = 0; e < o; e++) {
        var i = t?.[n[e]];
        i === void 0 && (i = a, e = o), t = tn(i) ? i.call(t) : i
    }
    return t
}

var Dd = 0;

function Od(t) {
    var n = ++Dd + "";
    return t ? t + n : n
}

function Ad(t) {
    var n = nt(t);
    return n._chain = !0, n
}

function Vl(t, n, a, o, e) {
    if (!(o instanceof n)) return t.apply(a, e);
    var i = Rl(t.prototype), f = t.apply(i, e);
    return Zr(f) ? f : i
}

var Ei = dn(function (t, n) {
    var a = Ei.placeholder, o = function () {
        for (var e = 0, i = n.length, f = Array(i), h = 0; h < i; h++) f[h] = n[h] === a ? arguments[e++] : n[h];
        for (; e < arguments.length;) f.push(arguments[e++]);
        return Vl(t, o, this, this, f)
    };
    return o
});
Ei.placeholder = nt;
const Ul = dn(function (t, n, a) {
    if (!tn(t)) throw new TypeError("Bind must be called on a function");
    var o = dn(function (e) {
        return Vl(t, o, n, this, a.concat(e))
    });
    return o
}), bn = El(cn);

function ei(t, n, a, o) {
    if (o = o || [], !n && n !== 0) n = 1 / 0; else if (n <= 0) return o.concat(t);
    for (var e = o.length, i = 0, f = cn(t); i < f; i++) {
        var h = t[i];
        if (bn(h) && (Jr(h) || Zs(h))) if (n > 1) ei(h, n - 1, a, o), e = o.length; else for (var y = 0, C = h.length; y < C;) o[e++] = h[y++]; else a || (o[e++] = h)
    }
    return o
}

const xd = dn(function (t, n) {
    n = ei(n, !1, !1);
    var a = n.length;
    if (a < 1) throw new Error("bindAll must be passed function names");
    for (; a--;) {
        var o = n[a];
        t[o] = Ul(t[o], t)
    }
    return t
});

function Nd(t, n) {
    var a = function (o) {
        var e = a.cache, i = "" + (n ? n.apply(this, arguments) : o);
        return Wr(e, i) || (e[i] = t.apply(this, arguments)), e[i]
    };
    return a.cache = {}, a
}

const ql = dn(function (t, n, a) {
    return setTimeout(function () {
        return t.apply(null, a)
    }, n)
}), Md = Ei(ql, nt, 1);

function Id(t, n, a) {
    var o, e, i, f, h = 0;
    a || (a = {});
    var y = function () {
        h = a.leading === !1 ? 0 : ra(), o = null, f = t.apply(e, i), o || (e = i = null)
    }, C = function () {
        var R = ra();
        !h && a.leading === !1 && (h = R);
        var Y = n - (R - h);
        return e = this, i = arguments, Y <= 0 || Y > n ? (o && (clearTimeout(o), o = null), h = R, f = t.apply(e, i), o || (e = i = null)) : !o && a.trailing !== !1 && (o = setTimeout(y, Y)), f
    };
    return C.cancel = function () {
        clearTimeout(o), h = 0, o = e = i = null
    }, C
}

function Ld(t, n, a) {
    var o, e, i, f, h, y = function () {
        var R = ra() - e;
        n > R ? o = setTimeout(y, n - R) : (o = null, a || (f = t.apply(h, i)), o || (i = h = null))
    }, C = dn(function (R) {
        return h = this, i = R, e = ra(), o || (o = setTimeout(y, n), a && (f = t.apply(h, i))), f
    });
    return C.cancel = function () {
        clearTimeout(o), o = i = h = null
    }, C
}

function Pd(t, n) {
    return Ei(n, t)
}

function oo(t) {
    return function () {
        return !t.apply(this, arguments)
    }
}

function Rd() {
    var t = arguments, n = t.length - 1;
    return function () {
        for (var a = n, o = t[n].apply(this, arguments); a--;) o = t[a].call(this, o);
        return o
    }
}

function Hd(t, n) {
    return function () {
        if (--t < 1) return n.apply(this, arguments)
    }
}

function Bl(t, n) {
    var a;
    return function () {
        return --t > 0 && (a = n.apply(this, arguments)), t <= 1 && (n = null), a
    }
}

const Yd = Ei(Bl, 2);

function zl(t, n, a) {
    n = hn(n, a);
    for (var o = It(t), e, i = 0, f = o.length; i < f; i++) if (e = o[i], n(t[e], e, t)) return e
}

function Gl(t) {
    return function (n, a, o) {
        a = hn(a, o);
        for (var e = cn(n), i = t > 0 ? 0 : e - 1; i >= 0 && i < e; i += t) if (a(n[i], i, n)) return i;
        return -1
    }
}

const lo = Gl(1), Ql = Gl(-1);

function Kl(t, n, a, o) {
    a = hn(a, o, 1);
    for (var e = a(n), i = 0, f = cn(t); i < f;) {
        var h = Math.floor((i + f) / 2);
        a(t[h]) < e ? i = h + 1 : f = h
    }
    return i
}

function Xl(t, n, a) {
    return function (o, e, i) {
        var f = 0, h = cn(o);
        if (typeof i == "number") t > 0 ? f = i >= 0 ? i : Math.max(i + h, f) : h = i >= 0 ? Math.min(i + 1, h) : i + h + 1; else if (a && i && h) return i = a(o, e), o[i] === e ? i : -1;
        if (e !== e) return i = n(oa.call(o, f, h), Sl), i >= 0 ? i + f : -1;
        for (i = t > 0 ? f : h - 1; i >= 0 && i < h; i += t) if (o[i] === e) return i;
        return -1
    }
}

const Zl = Xl(1, lo, Kl), Wd = Xl(-1, Ql);

function Ys(t, n, a) {
    var o = bn(t) ? lo : zl, e = o(t, n, a);
    if (e !== void 0 && e !== -1) return t[e]
}

function Fd(t, n) {
    return Ys(t, na(n))
}

function wr(t, n, a) {
    n = fa(n, a);
    var o, e;
    if (bn(t)) for (o = 0, e = t.length; o < e; o++) n(t[o], o, t); else {
        var i = It(t);
        for (o = 0, e = i.length; o < e; o++) n(t[i[o]], i[o], t)
    }
    return t
}

function Xr(t, n, a) {
    n = hn(n, a);
    for (var o = !bn(t) && It(t), e = (o || t).length, i = Array(e), f = 0; f < e; f++) {
        var h = o ? o[f] : f;
        i[f] = n(t[h], h, t)
    }
    return i
}

function Jl(t) {
    var n = function (a, o, e, i) {
        var f = !bn(a) && It(a), h = (f || a).length, y = t > 0 ? 0 : h - 1;
        for (i || (e = a[f ? f[y] : y], y += t); y >= 0 && y < h; y += t) {
            var C = f ? f[y] : y;
            e = o(e, a[C], C, a)
        }
        return e
    };
    return function (a, o, e, i) {
        var f = arguments.length >= 3;
        return n(a, fa(o, i, 4), e, f)
    }
}

const Os = Jl(1), Jo = Jl(-1);

function Si(t, n, a) {
    var o = [];
    return n = hn(n, a), wr(t, function (e, i, f) {
        n(e, i, f) && o.push(e)
    }), o
}

function jd(t, n, a) {
    return Si(t, oo(hn(n)), a)
}

function el(t, n, a) {
    n = hn(n, a);
    for (var o = !bn(t) && It(t), e = (o || t).length, i = 0; i < e; i++) {
        var f = o ? o[i] : i;
        if (!n(t[f], f, t)) return !1
    }
    return !0
}

function tl(t, n, a) {
    n = hn(n, a);
    for (var o = !bn(t) && It(t), e = (o || t).length, i = 0; i < e; i++) {
        var f = o ? o[i] : i;
        if (n(t[f], f, t)) return !0
    }
    return !1
}

function yr(t, n, a, o) {
    return bn(t) || (t = bi(t)), (typeof a != "number" || o) && (a = 0), Zl(t, n, a) >= 0
}

const $d = dn(function (t, n, a) {
    var o, e;
    return tn(n) ? e = n : (n = ua(n), o = n.slice(0, -1), n = n[n.length - 1]), Xr(t, function (i) {
        var f = e;
        if (!f) {
            if (o && o.length && (i = ro(i, o)), i == null) return;
            f = i[n]
        }
        return f == null ? f : f.apply(i, a)
    })
});

function uo(t, n) {
    return Xr(t, ao(n))
}

function Vd(t, n) {
    return Si(t, na(n))
}

function eu(t, n, a) {
    var o = -1 / 0, e = -1 / 0, i, f;
    if (n == null || typeof n == "number" && typeof t[0] != "object" && t != null) {
        t = bn(t) ? t : bi(t);
        for (var h = 0, y = t.length; h < y; h++) i = t[h], i != null && i > o && (o = i)
    } else n = hn(n, a), wr(t, function (C, R, Y) {
        f = n(C, R, Y), (f > e || f === -1 / 0 && o === -1 / 0) && (o = C, e = f)
    });
    return o
}

function Ud(t, n, a) {
    var o = 1 / 0, e = 1 / 0, i, f;
    if (n == null || typeof n == "number" && typeof t[0] != "object" && t != null) {
        t = bn(t) ? t : bi(t);
        for (var h = 0, y = t.length; h < y; h++) i = t[h], i != null && i < o && (o = i)
    } else n = hn(n, a), wr(t, function (C, R, Y) {
        f = n(C, R, Y), (f < e || f === 1 / 0 && o === 1 / 0) && (o = C, e = f)
    });
    return o
}

var qd = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;

function tu(t) {
    return t ? Jr(t) ? oa.call(t) : Ks(t) ? t.match(qd) : bn(t) ? Xr(t, io) : bi(t) : []
}

function nu(t, n, a) {
    if (n == null || a) return bn(t) || (t = bi(t)), t[Hs(t.length - 1)];
    var o = tu(t), e = cn(o);
    n = Math.max(Math.min(n, e), 0);
    for (var i = e - 1, f = 0; f < n; f++) {
        var h = Hs(f, i), y = o[f];
        o[f] = o[h], o[h] = y
    }
    return o.slice(0, n)
}

function Bd(t) {
    return nu(t, 1 / 0)
}

function zd(t, n, a) {
    var o = 0;
    return n = hn(n, a), uo(Xr(t, function (e, i, f) {
        return {value: e, index: o++, criteria: n(e, i, f)}
    }).sort(function (e, i) {
        var f = e.criteria, h = i.criteria;
        if (f !== h) {
            if (f > h || f === void 0) return 1;
            if (f < h || h === void 0) return -1
        }
        return e.index - i.index
    }), "value")
}

function qa(t, n) {
    return function (a, o, e) {
        var i = n ? [[], []] : {};
        return o = hn(o, e), wr(a, function (f, h) {
            var y = o(f, h, a);
            t(i, f, y)
        }), i
    }
}

const Gd = qa(function (t, n, a) {
    Wr(t, a) ? t[a].push(n) : t[a] = [n]
}), Qd = qa(function (t, n, a) {
    t[a] = n
}), Kd = qa(function (t, n, a) {
    Wr(t, a) ? t[a]++ : t[a] = 1
}), Xd = qa(function (t, n, a) {
    t[a ? 0 : 1].push(n)
}, !0);

function Zd(t) {
    return t == null ? 0 : bn(t) ? t.length : It(t).length
}

function Jd(t, n, a) {
    return n in a
}

const ru = dn(function (t, n) {
    var a = {}, o = n[0];
    if (t == null) return a;
    tn(o) ? (n.length > 1 && (o = fa(o, n[1])), n = la(t)) : (o = Jd, n = ei(n, !1, !1), t = Object(t));
    for (var e = 0, i = n.length; e < i; e++) {
        var f = n[e], h = t[f];
        o(h, f, t) && (a[f] = h)
    }
    return a
}), ec = dn(function (t, n) {
    var a = n[0], o;
    return tn(a) ? (a = oo(a), n.length > 1 && (o = n[1])) : (n = Xr(ei(n, !1, !1), String), a = function (e, i) {
        return !yr(n, i)
    }), ru(t, a, o)
});

function iu(t, n, a) {
    return oa.call(t, 0, Math.max(0, t.length - (n == null || a ? 1 : n)))
}

function As(t, n, a) {
    return t == null || t.length < 1 ? n == null || a ? void 0 : [] : n == null || a ? t[0] : iu(t, t.length - n)
}

function Na(t, n, a) {
    return oa.call(t, n == null || a ? 1 : n)
}

function tc(t, n, a) {
    return t == null || t.length < 1 ? n == null || a ? void 0 : [] : n == null || a ? t[t.length - 1] : Na(t, Math.max(0, t.length - n))
}

function nc(t) {
    return Si(t, Boolean)
}

function rc(t, n) {
    return ei(t, n, !1)
}

const au = dn(function (t, n) {
    return n = ei(n, !0, !0), Si(t, function (a) {
        return !yr(n, a)
    })
}), ic = dn(function (t, n) {
    return au(t, n)
});

function Ws(t, n, a, o) {
    gl(n) || (o = a, a = n, n = !1), a != null && (a = hn(a, o));
    for (var e = [], i = [], f = 0, h = cn(t); f < h; f++) {
        var y = t[f], C = a ? a(y, f, t) : y;
        n && !a ? ((!f || i !== C) && e.push(y), i = C) : a ? yr(i, C) || (i.push(C), e.push(y)) : yr(e, y) || e.push(y)
    }
    return e
}

const ac = dn(function (t) {
    return Ws(ei(t, !0, !0))
});

function sc(t) {
    for (var n = [], a = arguments.length, o = 0, e = cn(t); o < e; o++) {
        var i = t[o];
        if (!yr(n, i)) {
            var f;
            for (f = 1; f < a && yr(arguments[f], i); f++) ;
            f === a && n.push(i)
        }
    }
    return n
}

function Fs(t) {
    for (var n = t && eu(t, cn).length || 0, a = Array(n), o = 0; o < n; o++) a[o] = uo(t, o);
    return a
}

const oc = dn(Fs);

function lc(t, n) {
    for (var a = {}, o = 0, e = cn(t); o < e; o++) n ? a[t[o]] = n[o] : a[t[o][0]] = t[o][1];
    return a
}

function uc(t, n, a) {
    n == null && (n = t || 0, t = 0), a || (a = n < t ? -1 : 1);
    for (var o = Math.max(Math.ceil((n - t) / a), 0), e = Array(o), i = 0; i < o; i++, t += a) e[i] = t;
    return e
}

function fc(t, n) {
    if (n == null || n < 1) return [];
    for (var a = [], o = 0, e = t.length; o < e;) a.push(oa.call(t, o, o += n));
    return a
}

function fo(t, n) {
    return t._chain ? nt(n).chain() : n
}

function su(t) {
    return wr(Rs(t), function (n) {
        var a = nt[n] = t[n];
        nt.prototype[n] = function () {
            var o = [this._wrapped];
            return Lf.apply(o, arguments), fo(this, a.apply(nt, o))
        }
    }), nt
}

wr(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
    var n = Ua[t];
    nt.prototype[t] = function () {
        var a = this._wrapped;
        return a != null && (n.apply(a, arguments), (t === "shift" || t === "splice") && a.length === 0 && delete a[0]), fo(this, a)
    }
});
wr(["concat", "join", "slice"], function (t) {
    var n = Ua[t];
    nt.prototype[t] = function () {
        var a = this._wrapped;
        return a != null && (a = n.apply(a, arguments)), fo(this, a)
    }
});
const dc = Object.freeze(Object.defineProperty({
    __proto__: null,
    VERSION: dl,
    after: Hd,
    all: el,
    allKeys: la,
    any: tl,
    assign: Ha,
    before: Bl,
    bind: Ul,
    bindAll: xd,
    chain: Ad,
    chunk: fc,
    clone: dd,
    collect: Xr,
    compact: nc,
    compose: Rd,
    constant: bl,
    contains: yr,
    countBy: Kd,
    create: fd,
    debounce: Ld,
    default: nt,
    defaults: Pl,
    defer: Md,
    delay: ql,
    detect: Ys,
    difference: au,
    drop: Na,
    each: wr,
    escape: md,
    every: el,
    extend: Ll,
    extendOwn: Ha,
    filter: Si,
    find: Ys,
    findIndex: lo,
    findKey: zl,
    findLastIndex: Ql,
    findWhere: Fd,
    first: As,
    flatten: rc,
    foldl: Os,
    foldr: Jo,
    forEach: wr,
    functions: Rs,
    get: Yl,
    groupBy: Gd,
    has: hd,
    head: As,
    identity: io,
    include: yr,
    includes: yr,
    indexBy: Qd,
    indexOf: Zl,
    initial: iu,
    inject: Os,
    intersection: sc,
    invert: Il,
    invoke: $d,
    isArguments: Zs,
    isArray: Jr,
    isArrayBuffer: yl,
    isBoolean: gl,
    isDataView: Pa,
    isDate: Vf,
    isElement: $f,
    isEmpty: ed,
    isEqual: td,
    isError: qf,
    isFinite: Qf,
    isFunction: tn,
    isMap: id,
    isMatch: Ol,
    isNaN: Sl,
    isNull: jf,
    isNumber: vl,
    isObject: Zr,
    isRegExp: Uf,
    isSet: sd,
    isString: Ks,
    isSymbol: ml,
    isTypedArray: kl,
    isUndefined: pl,
    isWeakMap: ad,
    isWeakSet: od,
    iteratee: so,
    keys: It,
    last: tc,
    lastIndexOf: Wd,
    map: Xr,
    mapObject: pd,
    matcher: na,
    matches: na,
    max: eu,
    memoize: Nd,
    methods: Rs,
    min: Ud,
    mixin: su,
    negate: oo,
    noop: Fl,
    now: ra,
    object: lc,
    omit: ec,
    once: Yd,
    pairs: ld,
    partial: Ei,
    partition: Xd,
    pick: ru,
    pluck: uo,
    property: ao,
    propertyOf: gd,
    random: Hs,
    range: uc,
    reduce: Os,
    reduceRight: Jo,
    reject: jd,
    rest: Na,
    restArguments: dn,
    result: kd,
    sample: nu,
    select: Si,
    shuffle: Bd,
    size: Zd,
    some: tl,
    sortBy: zd,
    sortedIndex: Kl,
    tail: Na,
    take: As,
    tap: cd,
    template: Cd,
    templateSettings: wd,
    throttle: Id,
    times: vd,
    toArray: tu,
    toPath: Hl,
    transpose: Fs,
    unescape: _d,
    union: ac,
    uniq: Ws,
    unique: Ws,
    uniqueId: Od,
    unzip: Fs,
    values: bi,
    where: Vd,
    without: ic,
    wrap: Pd,
    zip: oc
}, Symbol.toStringTag, {value: "Module"}));
var js = su(dc);
js._ = js;

function cc(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ou;

function fe() {
    return ou.apply(null, arguments)
}

function hc(t) {
    ou = t
}

function Un(t) {
    return t instanceof Array || Object.prototype.toString.call(t) === "[object Array]"
}

function Kr(t) {
    return t != null && Object.prototype.toString.call(t) === "[object Object]"
}

function Ze(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n)
}

function co(t) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(t).length === 0;
    var n;
    for (n in t) if (Ze(t, n)) return !1;
    return !0
}

function fn(t) {
    return t === void 0
}

function Tr(t) {
    return typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]"
}

function da(t) {
    return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]"
}

function lu(t, n) {
    var a = [], o, e = t.length;
    for (o = 0; o < e; ++o) a.push(n(t[o], o));
    return a
}

function Rr(t, n) {
    for (var a in n) Ze(n, a) && (t[a] = n[a]);
    return Ze(n, "toString") && (t.toString = n.toString), Ze(n, "valueOf") && (t.valueOf = n.valueOf), t
}

function sr(t, n, a, o) {
    return Mu(t, n, a, o, !0).utc()
}

function pc() {
    return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
    }
}

function He(t) {
    return t._pf == null && (t._pf = pc()), t._pf
}

var $s;
Array.prototype.some ? $s = Array.prototype.some : $s = function (t) {
    var n = Object(this), a = n.length >>> 0, o;
    for (o = 0; o < a; o++) if (o in n && t.call(this, n[o], o, n)) return !0;
    return !1
};

function ho(t) {
    if (t._isValid == null) {
        var n = He(t), a = $s.call(n.parsedDateParts, function (e) {
                return e != null
            }),
            o = !isNaN(t._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidEra && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && a);
        if (t._strict && (o = o && n.charsLeftOver === 0 && n.unusedTokens.length === 0 && n.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(t)) t._isValid = o; else return o
    }
    return t._isValid
}

function Ba(t) {
    var n = sr(NaN);
    return t != null ? Rr(He(n), t) : He(n).userInvalidated = !0, n
}

var nl = fe.momentProperties = [], xs = !1;

function po(t, n) {
    var a, o, e, i = nl.length;
    if (fn(n._isAMomentObject) || (t._isAMomentObject = n._isAMomentObject), fn(n._i) || (t._i = n._i), fn(n._f) || (t._f = n._f), fn(n._l) || (t._l = n._l), fn(n._strict) || (t._strict = n._strict), fn(n._tzm) || (t._tzm = n._tzm), fn(n._isUTC) || (t._isUTC = n._isUTC), fn(n._offset) || (t._offset = n._offset), fn(n._pf) || (t._pf = He(n)), fn(n._locale) || (t._locale = n._locale), i > 0) for (a = 0; a < i; a++) o = nl[a], e = n[o], fn(e) || (t[o] = e);
    return t
}

function ca(t) {
    po(this, t), this._d = new Date(t._d != null ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), xs === !1 && (xs = !0, fe.updateOffset(this), xs = !1)
}

function qn(t) {
    return t instanceof ca || t != null && t._isAMomentObject != null
}

function uu(t) {
    fe.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + t)
}

function Ln(t, n) {
    var a = !0;
    return Rr(function () {
        if (fe.deprecationHandler != null && fe.deprecationHandler(null, t), a) {
            var o = [], e, i, f, h = arguments.length;
            for (i = 0; i < h; i++) {
                if (e = "", typeof arguments[i] == "object") {
                    e += `
[` + i + "] ";
                    for (f in arguments[0]) Ze(arguments[0], f) && (e += f + ": " + arguments[0][f] + ", ");
                    e = e.slice(0, -2)
                } else e = arguments[i];
                o.push(e)
            }
            uu(t + `
Arguments: ` + Array.prototype.slice.call(o).join("") + `
` + new Error().stack), a = !1
        }
        return n.apply(this, arguments)
    }, n)
}

var rl = {};

function fu(t, n) {
    fe.deprecationHandler != null && fe.deprecationHandler(t, n), rl[t] || (uu(n), rl[t] = !0)
}

fe.suppressDeprecationWarnings = !1;
fe.deprecationHandler = null;

function or(t) {
    return typeof Function < "u" && t instanceof Function || Object.prototype.toString.call(t) === "[object Function]"
}

function gc(t) {
    var n, a;
    for (a in t) Ze(t, a) && (n = t[a], or(n) ? this[a] = n : this["_" + a] = n);
    this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
}

function Vs(t, n) {
    var a = Rr({}, t), o;
    for (o in n) Ze(n, o) && (Kr(t[o]) && Kr(n[o]) ? (a[o] = {}, Rr(a[o], t[o]), Rr(a[o], n[o])) : n[o] != null ? a[o] = n[o] : delete a[o]);
    for (o in t) Ze(t, o) && !Ze(n, o) && Kr(t[o]) && (a[o] = Rr({}, a[o]));
    return a
}

function go(t) {
    t != null && this.set(t)
}

var Us;
Object.keys ? Us = Object.keys : Us = function (t) {
    var n, a = [];
    for (n in t) Ze(t, n) && a.push(n);
    return a
};
var vc = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
};

function mc(t, n, a) {
    var o = this._calendar[t] || this._calendar.sameElse;
    return or(o) ? o.call(n, a) : o
}

function ar(t, n, a) {
    var o = "" + Math.abs(t), e = n - o.length, i = t >= 0;
    return (i ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + o
}

var vo = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Aa = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ns = {}, _i = {};

function Te(t, n, a, o) {
    var e = o;
    typeof o == "string" && (e = function () {
        return this[o]()
    }), t && (_i[t] = e), n && (_i[n[0]] = function () {
        return ar(e.apply(this, arguments), n[1], n[2])
    }), a && (_i[a] = function () {
        return this.localeData().ordinal(e.apply(this, arguments), t)
    })
}

function yc(t) {
    return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
}

function _c(t) {
    var n = t.match(vo), a, o;
    for (a = 0, o = n.length; a < o; a++) _i[n[a]] ? n[a] = _i[n[a]] : n[a] = yc(n[a]);
    return function (e) {
        var i = "", f;
        for (f = 0; f < o; f++) i += or(n[f]) ? n[f].call(e, t) : n[f];
        return i
    }
}

function Ma(t, n) {
    return t.isValid() ? (n = du(n, t.localeData()), Ns[n] = Ns[n] || _c(n), Ns[n](t)) : t.localeData().invalidDate()
}

function du(t, n) {
    var a = 5;

    function o(e) {
        return n.longDateFormat(e) || e
    }

    for (Aa.lastIndex = 0; a >= 0 && Aa.test(t);) t = t.replace(Aa, o), Aa.lastIndex = 0, a -= 1;
    return t
}

var wc = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
};

function Tc(t) {
    var n = this._longDateFormat[t], a = this._longDateFormat[t.toUpperCase()];
    return n || !a ? n : (this._longDateFormat[t] = a.match(vo).map(function (o) {
        return o === "MMMM" || o === "MM" || o === "DD" || o === "dddd" ? o.slice(1) : o
    }).join(""), this._longDateFormat[t])
}

var Sc = "Invalid date";

function bc() {
    return this._invalidDate
}

var Ec = "%d", Cc = /\d{1,2}/;

function kc(t) {
    return this._ordinal.replace("%d", t)
}

var Dc = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
};

function Oc(t, n, a, o) {
    var e = this._relativeTime[a];
    return or(e) ? e(t, n, a, o) : e.replace(/%d/i, t)
}

function Ac(t, n) {
    var a = this._relativeTime[t > 0 ? "future" : "past"];
    return or(a) ? a(n) : a.replace(/%s/i, n)
}

var Ji = {};

function Qt(t, n) {
    var a = t.toLowerCase();
    Ji[a] = Ji[a + "s"] = Ji[n] = t
}

function Pn(t) {
    return typeof t == "string" ? Ji[t] || Ji[t.toLowerCase()] : void 0
}

function mo(t) {
    var n = {}, a, o;
    for (o in t) Ze(t, o) && (a = Pn(o), a && (n[a] = t[o]));
    return n
}

var cu = {};

function Kt(t, n) {
    cu[t] = n
}

function xc(t) {
    var n = [], a;
    for (a in t) Ze(t, a) && n.push({unit: a, priority: cu[a]});
    return n.sort(function (o, e) {
        return o.priority - e.priority
    }), n
}

function za(t) {
    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
}

function In(t) {
    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
}

function qe(t) {
    var n = +t, a = 0;
    return n !== 0 && isFinite(n) && (a = In(n)), a
}

function Ci(t, n) {
    return function (a) {
        return a != null ? (hu(this, t, a), fe.updateOffset(this, n), this) : Ya(this, t)
    }
}

function Ya(t, n) {
    return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + n]() : NaN
}

function hu(t, n, a) {
    t.isValid() && !isNaN(a) && (n === "FullYear" && za(t.year()) && t.month() === 1 && t.date() === 29 ? (a = qe(a), t._d["set" + (t._isUTC ? "UTC" : "") + n](a, t.month(), Ja(a, t.month()))) : t._d["set" + (t._isUTC ? "UTC" : "") + n](a))
}

function Nc(t) {
    return t = Pn(t), or(this[t]) ? this[t]() : this
}

function Mc(t, n) {
    if (typeof t == "object") {
        t = mo(t);
        var a = xc(t), o, e = a.length;
        for (o = 0; o < e; o++) this[a[o].unit](t[a[o].unit])
    } else if (t = Pn(t), or(this[t])) return this[t](n);
    return this
}

var pu = /\d/, En = /\d\d/, gu = /\d{3}/, yo = /\d{4}/, Ga = /[+-]?\d{6}/, ut = /\d\d?/, vu = /\d\d\d\d?/,
    mu = /\d\d\d\d\d\d?/, Qa = /\d{1,3}/, _o = /\d{1,4}/, Ka = /[+-]?\d{1,6}/, ki = /\d+/, Xa = /[+-]?\d+/,
    Ic = /Z|[+-]\d\d:?\d\d/gi, Za = /Z|[+-]\d\d(?::?\d\d)?/gi, Lc = /[+-]?\d+(\.\d{1,3})?/,
    ha = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Wa;
Wa = {};

function he(t, n, a) {
    Wa[t] = or(n) ? n : function (o, e) {
        return o && a ? a : n
    }
}

function Pc(t, n) {
    return Ze(Wa, t) ? Wa[t](n._strict, n._locale) : new RegExp(Rc(t))
}

function Rc(t) {
    return Sn(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (n, a, o, e, i) {
        return a || o || e || i
    }))
}

function Sn(t) {
    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}

var qs = {};

function rt(t, n) {
    var a, o = n, e;
    for (typeof t == "string" && (t = [t]), Tr(n) && (o = function (i, f) {
        f[n] = qe(i)
    }), e = t.length, a = 0; a < e; a++) qs[t[a]] = o
}

function pa(t, n) {
    rt(t, function (a, o, e, i) {
        e._w = e._w || {}, n(a, e._w, e, i)
    })
}

function Hc(t, n, a) {
    n != null && Ze(qs, t) && qs[t](n, a._a, a, t)
}

var zt = 0, vr = 1, ir = 2, kt = 3, Vn = 4, mr = 5, Qr = 6, Yc = 7, Wc = 8;

function Fc(t, n) {
    return (t % n + n) % n
}

var wt;
Array.prototype.indexOf ? wt = Array.prototype.indexOf : wt = function (t) {
    var n;
    for (n = 0; n < this.length; ++n) if (this[n] === t) return n;
    return -1
};

function Ja(t, n) {
    if (isNaN(t) || isNaN(n)) return NaN;
    var a = Fc(n, 12);
    return t += (n - a) / 12, a === 1 ? za(t) ? 29 : 28 : 31 - a % 7 % 2
}

Te("M", ["MM", 2], "Mo", function () {
    return this.month() + 1
});
Te("MMM", 0, 0, function (t) {
    return this.localeData().monthsShort(this, t)
});
Te("MMMM", 0, 0, function (t) {
    return this.localeData().months(this, t)
});
Qt("month", "M");
Kt("month", 8);
he("M", ut);
he("MM", ut, En);
he("MMM", function (t, n) {
    return n.monthsShortRegex(t)
});
he("MMMM", function (t, n) {
    return n.monthsRegex(t)
});
rt(["M", "MM"], function (t, n) {
    n[vr] = qe(t) - 1
});
rt(["MMM", "MMMM"], function (t, n, a, o) {
    var e = a._locale.monthsParse(t, o, a._strict);
    e != null ? n[vr] = e : He(a).invalidMonth = t
});
var jc = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    yu = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), _u = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, $c = ha,
    Vc = ha;

function Uc(t, n) {
    return t ? Un(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || _u).test(n) ? "format" : "standalone"][t.month()] : Un(this._months) ? this._months : this._months.standalone
}

function qc(t, n) {
    return t ? Un(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[_u.test(n) ? "format" : "standalone"][t.month()] : Un(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
}

function Bc(t, n, a) {
    var o, e, i, f = t.toLocaleLowerCase();
    if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], o = 0; o < 12; ++o) i = sr([2e3, o]), this._shortMonthsParse[o] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[o] = this.months(i, "").toLocaleLowerCase();
    return a ? n === "MMM" ? (e = wt.call(this._shortMonthsParse, f), e !== -1 ? e : null) : (e = wt.call(this._longMonthsParse, f), e !== -1 ? e : null) : n === "MMM" ? (e = wt.call(this._shortMonthsParse, f), e !== -1 ? e : (e = wt.call(this._longMonthsParse, f), e !== -1 ? e : null)) : (e = wt.call(this._longMonthsParse, f), e !== -1 ? e : (e = wt.call(this._shortMonthsParse, f), e !== -1 ? e : null))
}

function zc(t, n, a) {
    var o, e, i;
    if (this._monthsParseExact) return Bc.call(this, t, n, a);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), o = 0; o < 12; o++) {
        if (e = sr([2e3, o]), a && !this._longMonthsParse[o] && (this._longMonthsParse[o] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[o] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), !a && !this._monthsParse[o] && (i = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[o] = new RegExp(i.replace(".", ""), "i")), a && n === "MMMM" && this._longMonthsParse[o].test(t)) return o;
        if (a && n === "MMM" && this._shortMonthsParse[o].test(t)) return o;
        if (!a && this._monthsParse[o].test(t)) return o
    }
}

function wu(t, n) {
    var a;
    if (!t.isValid()) return t;
    if (typeof n == "string") {
        if (/^\d+$/.test(n)) n = qe(n); else if (n = t.localeData().monthsParse(n), !Tr(n)) return t
    }
    return a = Math.min(t.date(), Ja(t.year(), n)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](n, a), t
}

function Tu(t) {
    return t != null ? (wu(this, t), fe.updateOffset(this, !0), this) : Ya(this, "Month")
}

function Gc() {
    return Ja(this.year(), this.month())
}

function Qc(t) {
    return this._monthsParseExact ? (Ze(this, "_monthsRegex") || Su.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Ze(this, "_monthsShortRegex") || (this._monthsShortRegex = $c), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
}

function Kc(t) {
    return this._monthsParseExact ? (Ze(this, "_monthsRegex") || Su.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (Ze(this, "_monthsRegex") || (this._monthsRegex = Vc), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
}

function Su() {
    function t(f, h) {
        return h.length - f.length
    }

    var n = [], a = [], o = [], e, i;
    for (e = 0; e < 12; e++) i = sr([2e3, e]), n.push(this.monthsShort(i, "")), a.push(this.months(i, "")), o.push(this.months(i, "")), o.push(this.monthsShort(i, ""));
    for (n.sort(t), a.sort(t), o.sort(t), e = 0; e < 12; e++) n[e] = Sn(n[e]), a[e] = Sn(a[e]);
    for (e = 0; e < 24; e++) o[e] = Sn(o[e]);
    this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
}

Te("Y", 0, 0, function () {
    var t = this.year();
    return t <= 9999 ? ar(t, 4) : "+" + t
});
Te(0, ["YY", 2], 0, function () {
    return this.year() % 100
});
Te(0, ["YYYY", 4], 0, "year");
Te(0, ["YYYYY", 5], 0, "year");
Te(0, ["YYYYYY", 6, !0], 0, "year");
Qt("year", "y");
Kt("year", 1);
he("Y", Xa);
he("YY", ut, En);
he("YYYY", _o, yo);
he("YYYYY", Ka, Ga);
he("YYYYYY", Ka, Ga);
rt(["YYYYY", "YYYYYY"], zt);
rt("YYYY", function (t, n) {
    n[zt] = t.length === 2 ? fe.parseTwoDigitYear(t) : qe(t)
});
rt("YY", function (t, n) {
    n[zt] = fe.parseTwoDigitYear(t)
});
rt("Y", function (t, n) {
    n[zt] = parseInt(t, 10)
});

function ea(t) {
    return za(t) ? 366 : 365
}

fe.parseTwoDigitYear = function (t) {
    return qe(t) + (qe(t) > 68 ? 1900 : 2e3)
};
var bu = Ci("FullYear", !0);

function Xc() {
    return za(this.year())
}

function Zc(t, n, a, o, e, i, f) {
    var h;
    return t < 100 && t >= 0 ? (h = new Date(t + 400, n, a, o, e, i, f), isFinite(h.getFullYear()) && h.setFullYear(t)) : h = new Date(t, n, a, o, e, i, f), h
}

function ia(t) {
    var n, a;
    return t < 100 && t >= 0 ? (a = Array.prototype.slice.call(arguments), a[0] = t + 400, n = new Date(Date.UTC.apply(null, a)), isFinite(n.getUTCFullYear()) && n.setUTCFullYear(t)) : n = new Date(Date.UTC.apply(null, arguments)), n
}

function Fa(t, n, a) {
    var o = 7 + n - a, e = (7 + ia(t, 0, o).getUTCDay() - n) % 7;
    return -e + o - 1
}

function Eu(t, n, a, o, e) {
    var i = (7 + a - o) % 7, f = Fa(t, o, e), h = 1 + 7 * (n - 1) + i + f, y, C;
    return h <= 0 ? (y = t - 1, C = ea(y) + h) : h > ea(t) ? (y = t + 1, C = h - ea(t)) : (y = t, C = h), {
        year: y,
        dayOfYear: C
    }
}

function aa(t, n, a) {
    var o = Fa(t.year(), n, a), e = Math.floor((t.dayOfYear() - o - 1) / 7) + 1, i, f;
    return e < 1 ? (f = t.year() - 1, i = e + _r(f, n, a)) : e > _r(t.year(), n, a) ? (i = e - _r(t.year(), n, a), f = t.year() + 1) : (f = t.year(), i = e), {
        week: i,
        year: f
    }
}

function _r(t, n, a) {
    var o = Fa(t, n, a), e = Fa(t + 1, n, a);
    return (ea(t) - o + e) / 7
}

Te("w", ["ww", 2], "wo", "week");
Te("W", ["WW", 2], "Wo", "isoWeek");
Qt("week", "w");
Qt("isoWeek", "W");
Kt("week", 5);
Kt("isoWeek", 5);
he("w", ut);
he("ww", ut, En);
he("W", ut);
he("WW", ut, En);
pa(["w", "ww", "W", "WW"], function (t, n, a, o) {
    n[o.substr(0, 1)] = qe(t)
});

function Jc(t) {
    return aa(t, this._week.dow, this._week.doy).week
}

var eh = {dow: 0, doy: 6};

function th() {
    return this._week.dow
}

function nh() {
    return this._week.doy
}

function rh(t) {
    var n = this.localeData().week(this);
    return t == null ? n : this.add((t - n) * 7, "d")
}

function ih(t) {
    var n = aa(this, 1, 4).week;
    return t == null ? n : this.add((t - n) * 7, "d")
}

Te("d", 0, "do", "day");
Te("dd", 0, 0, function (t) {
    return this.localeData().weekdaysMin(this, t)
});
Te("ddd", 0, 0, function (t) {
    return this.localeData().weekdaysShort(this, t)
});
Te("dddd", 0, 0, function (t) {
    return this.localeData().weekdays(this, t)
});
Te("e", 0, 0, "weekday");
Te("E", 0, 0, "isoWeekday");
Qt("day", "d");
Qt("weekday", "e");
Qt("isoWeekday", "E");
Kt("day", 11);
Kt("weekday", 11);
Kt("isoWeekday", 11);
he("d", ut);
he("e", ut);
he("E", ut);
he("dd", function (t, n) {
    return n.weekdaysMinRegex(t)
});
he("ddd", function (t, n) {
    return n.weekdaysShortRegex(t)
});
he("dddd", function (t, n) {
    return n.weekdaysRegex(t)
});
pa(["dd", "ddd", "dddd"], function (t, n, a, o) {
    var e = a._locale.weekdaysParse(t, o, a._strict);
    e != null ? n.d = e : He(a).invalidWeekday = t
});
pa(["d", "e", "E"], function (t, n, a, o) {
    n[o] = qe(t)
});

function ah(t, n) {
    return typeof t != "string" ? t : isNaN(t) ? (t = n.weekdaysParse(t), typeof t == "number" ? t : null) : parseInt(t, 10)
}

function sh(t, n) {
    return typeof t == "string" ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
}

function wo(t, n) {
    return t.slice(n, 7).concat(t.slice(0, n))
}

var oh = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    Cu = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), lh = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), uh = ha, fh = ha, dh = ha;

function ch(t, n) {
    var a = Un(this._weekdays) ? this._weekdays : this._weekdays[t && t !== !0 && this._weekdays.isFormat.test(n) ? "format" : "standalone"];
    return t === !0 ? wo(a, this._week.dow) : t ? a[t.day()] : a
}

function hh(t) {
    return t === !0 ? wo(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
}

function ph(t) {
    return t === !0 ? wo(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
}

function gh(t, n, a) {
    var o, e, i, f = t.toLocaleLowerCase();
    if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], o = 0; o < 7; ++o) i = sr([2e3, 1]).day(o), this._minWeekdaysParse[o] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[o] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[o] = this.weekdays(i, "").toLocaleLowerCase();
    return a ? n === "dddd" ? (e = wt.call(this._weekdaysParse, f), e !== -1 ? e : null) : n === "ddd" ? (e = wt.call(this._shortWeekdaysParse, f), e !== -1 ? e : null) : (e = wt.call(this._minWeekdaysParse, f), e !== -1 ? e : null) : n === "dddd" ? (e = wt.call(this._weekdaysParse, f), e !== -1 || (e = wt.call(this._shortWeekdaysParse, f), e !== -1) ? e : (e = wt.call(this._minWeekdaysParse, f), e !== -1 ? e : null)) : n === "ddd" ? (e = wt.call(this._shortWeekdaysParse, f), e !== -1 || (e = wt.call(this._weekdaysParse, f), e !== -1) ? e : (e = wt.call(this._minWeekdaysParse, f), e !== -1 ? e : null)) : (e = wt.call(this._minWeekdaysParse, f), e !== -1 || (e = wt.call(this._weekdaysParse, f), e !== -1) ? e : (e = wt.call(this._shortWeekdaysParse, f), e !== -1 ? e : null))
}

function vh(t, n, a) {
    var o, e, i;
    if (this._weekdaysParseExact) return gh.call(this, t, n, a);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), o = 0; o < 7; o++) {
        if (e = sr([2e3, 1]).day(o), a && !this._fullWeekdaysParse[o] && (this._fullWeekdaysParse[o] = new RegExp("^" + this.weekdays(e, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[o] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[o] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[o] || (i = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[o] = new RegExp(i.replace(".", ""), "i")), a && n === "dddd" && this._fullWeekdaysParse[o].test(t)) return o;
        if (a && n === "ddd" && this._shortWeekdaysParse[o].test(t)) return o;
        if (a && n === "dd" && this._minWeekdaysParse[o].test(t)) return o;
        if (!a && this._weekdaysParse[o].test(t)) return o
    }
}

function mh(t) {
    if (!this.isValid()) return t != null ? this : NaN;
    var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return t != null ? (t = ah(t, this.localeData()), this.add(t - n, "d")) : n
}

function yh(t) {
    if (!this.isValid()) return t != null ? this : NaN;
    var n = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return t == null ? n : this.add(t - n, "d")
}

function _h(t) {
    if (!this.isValid()) return t != null ? this : NaN;
    if (t != null) {
        var n = sh(t, this.localeData());
        return this.day(this.day() % 7 ? n : n - 7)
    } else return this.day() || 7
}

function wh(t) {
    return this._weekdaysParseExact ? (Ze(this, "_weekdaysRegex") || To.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Ze(this, "_weekdaysRegex") || (this._weekdaysRegex = uh), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
}

function Th(t) {
    return this._weekdaysParseExact ? (Ze(this, "_weekdaysRegex") || To.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Ze(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = fh), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
}

function Sh(t) {
    return this._weekdaysParseExact ? (Ze(this, "_weekdaysRegex") || To.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Ze(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = dh), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
}

function To() {
    function t(R, Y) {
        return Y.length - R.length
    }

    var n = [], a = [], o = [], e = [], i, f, h, y, C;
    for (i = 0; i < 7; i++) f = sr([2e3, 1]).day(i), h = Sn(this.weekdaysMin(f, "")), y = Sn(this.weekdaysShort(f, "")), C = Sn(this.weekdays(f, "")), n.push(h), a.push(y), o.push(C), e.push(h), e.push(y), e.push(C);
    n.sort(t), a.sort(t), o.sort(t), e.sort(t), this._weekdaysRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
}

function So() {
    return this.hours() % 12 || 12
}

function bh() {
    return this.hours() || 24
}

Te("H", ["HH", 2], 0, "hour");
Te("h", ["hh", 2], 0, So);
Te("k", ["kk", 2], 0, bh);
Te("hmm", 0, 0, function () {
    return "" + So.apply(this) + ar(this.minutes(), 2)
});
Te("hmmss", 0, 0, function () {
    return "" + So.apply(this) + ar(this.minutes(), 2) + ar(this.seconds(), 2)
});
Te("Hmm", 0, 0, function () {
    return "" + this.hours() + ar(this.minutes(), 2)
});
Te("Hmmss", 0, 0, function () {
    return "" + this.hours() + ar(this.minutes(), 2) + ar(this.seconds(), 2)
});

function ku(t, n) {
    Te(t, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), n)
    })
}

ku("a", !0);
ku("A", !1);
Qt("hour", "h");
Kt("hour", 13);

function Du(t, n) {
    return n._meridiemParse
}

he("a", Du);
he("A", Du);
he("H", ut);
he("h", ut);
he("k", ut);
he("HH", ut, En);
he("hh", ut, En);
he("kk", ut, En);
he("hmm", vu);
he("hmmss", mu);
he("Hmm", vu);
he("Hmmss", mu);
rt(["H", "HH"], kt);
rt(["k", "kk"], function (t, n, a) {
    var o = qe(t);
    n[kt] = o === 24 ? 0 : o
});
rt(["a", "A"], function (t, n, a) {
    a._isPm = a._locale.isPM(t), a._meridiem = t
});
rt(["h", "hh"], function (t, n, a) {
    n[kt] = qe(t), He(a).bigHour = !0
});
rt("hmm", function (t, n, a) {
    var o = t.length - 2;
    n[kt] = qe(t.substr(0, o)), n[Vn] = qe(t.substr(o)), He(a).bigHour = !0
});
rt("hmmss", function (t, n, a) {
    var o = t.length - 4, e = t.length - 2;
    n[kt] = qe(t.substr(0, o)), n[Vn] = qe(t.substr(o, 2)), n[mr] = qe(t.substr(e)), He(a).bigHour = !0
});
rt("Hmm", function (t, n, a) {
    var o = t.length - 2;
    n[kt] = qe(t.substr(0, o)), n[Vn] = qe(t.substr(o))
});
rt("Hmmss", function (t, n, a) {
    var o = t.length - 4, e = t.length - 2;
    n[kt] = qe(t.substr(0, o)), n[Vn] = qe(t.substr(o, 2)), n[mr] = qe(t.substr(e))
});

function Eh(t) {
    return (t + "").toLowerCase().charAt(0) === "p"
}

var Ch = /[ap]\.?m?\.?/i, kh = Ci("Hours", !0);

function Dh(t, n, a) {
    return t > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
}

var Ou = {
    calendar: vc,
    longDateFormat: wc,
    invalidDate: Sc,
    ordinal: Ec,
    dayOfMonthOrdinalParse: Cc,
    relativeTime: Dc,
    months: jc,
    monthsShort: yu,
    week: eh,
    weekdays: oh,
    weekdaysMin: lh,
    weekdaysShort: Cu,
    meridiemParse: Ch
}, dt = {}, Xi = {}, sa;

function Oh(t, n) {
    var a, o = Math.min(t.length, n.length);
    for (a = 0; a < o; a += 1) if (t[a] !== n[a]) return a;
    return o
}

function il(t) {
    return t && t.toLowerCase().replace("_", "-")
}

function Ah(t) {
    for (var n = 0, a, o, e, i; n < t.length;) {
        for (i = il(t[n]).split("-"), a = i.length, o = il(t[n + 1]), o = o ? o.split("-") : null; a > 0;) {
            if (e = es(i.slice(0, a).join("-")), e) return e;
            if (o && o.length >= a && Oh(i, o) >= a - 1) break;
            a--
        }
        n++
    }
    return sa
}

function xh(t) {
    return t.match("^[^/\\\\]*$") != null
}

function es(t) {
    var n = null, a;
    if (dt[t] === void 0 && typeof module < "u" && module && module.exports && xh(t)) try {
        n = sa._abbr, a = cc, a("./locale/" + t), Yr(n)
    } catch {
        dt[t] = null
    }
    return dt[t]
}

function Yr(t, n) {
    var a;
    return t && (fn(n) ? a = Sr(t) : a = bo(t, n), a ? sa = a : typeof console < "u" && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), sa._abbr
}

function bo(t, n) {
    if (n !== null) {
        var a, o = Ou;
        if (n.abbr = t, dt[t] != null) fu("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), o = dt[t]._config; else if (n.parentLocale != null) if (dt[n.parentLocale] != null) o = dt[n.parentLocale]._config; else if (a = es(n.parentLocale), a != null) o = a._config; else return Xi[n.parentLocale] || (Xi[n.parentLocale] = []), Xi[n.parentLocale].push({
            name: t,
            config: n
        }), null;
        return dt[t] = new go(Vs(o, n)), Xi[t] && Xi[t].forEach(function (e) {
            bo(e.name, e.config)
        }), Yr(t), dt[t]
    } else return delete dt[t], null
}

function Nh(t, n) {
    if (n != null) {
        var a, o, e = Ou;
        dt[t] != null && dt[t].parentLocale != null ? dt[t].set(Vs(dt[t]._config, n)) : (o = es(t), o != null && (e = o._config), n = Vs(e, n), o == null && (n.abbr = t), a = new go(n), a.parentLocale = dt[t], dt[t] = a), Yr(t)
    } else dt[t] != null && (dt[t].parentLocale != null ? (dt[t] = dt[t].parentLocale, t === Yr() && Yr(t)) : dt[t] != null && delete dt[t]);
    return dt[t]
}

function Sr(t) {
    var n;
    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return sa;
    if (!Un(t)) {
        if (n = es(t), n) return n;
        t = [t]
    }
    return Ah(t)
}

function Mh() {
    return Us(dt)
}

function Eo(t) {
    var n, a = t._a;
    return a && He(t).overflow === -2 && (n = a[vr] < 0 || a[vr] > 11 ? vr : a[ir] < 1 || a[ir] > Ja(a[zt], a[vr]) ? ir : a[kt] < 0 || a[kt] > 24 || a[kt] === 24 && (a[Vn] !== 0 || a[mr] !== 0 || a[Qr] !== 0) ? kt : a[Vn] < 0 || a[Vn] > 59 ? Vn : a[mr] < 0 || a[mr] > 59 ? mr : a[Qr] < 0 || a[Qr] > 999 ? Qr : -1, He(t)._overflowDayOfYear && (n < zt || n > ir) && (n = ir), He(t)._overflowWeeks && n === -1 && (n = Yc), He(t)._overflowWeekday && n === -1 && (n = Wc), He(t).overflow = n), t
}

var Ih = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Lh = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Ph = /Z|[+-]\d\d(?::?\d\d)?/,
    xa = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]],
    Ms = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
    Rh = /^\/?Date\((-?\d+)/i,
    Hh = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    Yh = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

function Au(t) {
    var n, a, o = t._i, e = Ih.exec(o) || Lh.exec(o), i, f, h, y, C = xa.length, R = Ms.length;
    if (e) {
        for (He(t).iso = !0, n = 0, a = C; n < a; n++) if (xa[n][1].exec(e[1])) {
            f = xa[n][0], i = xa[n][2] !== !1;
            break
        }
        if (f == null) {
            t._isValid = !1;
            return
        }
        if (e[3]) {
            for (n = 0, a = R; n < a; n++) if (Ms[n][1].exec(e[3])) {
                h = (e[2] || " ") + Ms[n][0];
                break
            }
            if (h == null) {
                t._isValid = !1;
                return
            }
        }
        if (!i && h != null) {
            t._isValid = !1;
            return
        }
        if (e[4]) if (Ph.exec(e[4])) y = "Z"; else {
            t._isValid = !1;
            return
        }
        t._f = f + (h || "") + (y || ""), ko(t)
    } else t._isValid = !1
}

function Wh(t, n, a, o, e, i) {
    var f = [Fh(t), yu.indexOf(n), parseInt(a, 10), parseInt(o, 10), parseInt(e, 10)];
    return i && f.push(parseInt(i, 10)), f
}

function Fh(t) {
    var n = parseInt(t, 10);
    return n <= 49 ? 2e3 + n : n <= 999 ? 1900 + n : n
}

function jh(t) {
    return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}

function $h(t, n, a) {
    if (t) {
        var o = Cu.indexOf(t), e = new Date(n[0], n[1], n[2]).getDay();
        if (o !== e) return He(a).weekdayMismatch = !0, a._isValid = !1, !1
    }
    return !0
}

function Vh(t, n, a) {
    if (t) return Yh[t];
    if (n) return 0;
    var o = parseInt(a, 10), e = o % 100, i = (o - e) / 100;
    return i * 60 + e
}

function xu(t) {
    var n = Hh.exec(jh(t._i)), a;
    if (n) {
        if (a = Wh(n[4], n[3], n[2], n[5], n[6], n[7]), !$h(n[1], a, t)) return;
        t._a = a, t._tzm = Vh(n[8], n[9], n[10]), t._d = ia.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), He(t).rfc2822 = !0
    } else t._isValid = !1
}

function Uh(t) {
    var n = Rh.exec(t._i);
    if (n !== null) {
        t._d = new Date(+n[1]);
        return
    }
    if (Au(t), t._isValid === !1) delete t._isValid; else return;
    if (xu(t), t._isValid === !1) delete t._isValid; else return;
    t._strict ? t._isValid = !1 : fe.createFromInputFallback(t)
}

fe.createFromInputFallback = Ln("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
});

function mi(t, n, a) {
    return t ?? n ?? a
}

function qh(t) {
    var n = new Date(fe.now());
    return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
}

function Co(t) {
    var n, a, o = [], e, i, f;
    if (!t._d) {
        for (e = qh(t), t._w && t._a[ir] == null && t._a[vr] == null && Bh(t), t._dayOfYear != null && (f = mi(t._a[zt], e[zt]), (t._dayOfYear > ea(f) || t._dayOfYear === 0) && (He(t)._overflowDayOfYear = !0), a = ia(f, 0, t._dayOfYear), t._a[vr] = a.getUTCMonth(), t._a[ir] = a.getUTCDate()), n = 0; n < 3 && t._a[n] == null; ++n) t._a[n] = o[n] = e[n];
        for (; n < 7; n++) t._a[n] = o[n] = t._a[n] == null ? n === 2 ? 1 : 0 : t._a[n];
        t._a[kt] === 24 && t._a[Vn] === 0 && t._a[mr] === 0 && t._a[Qr] === 0 && (t._nextDay = !0, t._a[kt] = 0), t._d = (t._useUTC ? ia : Zc).apply(null, o), i = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), t._tzm != null && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[kt] = 24), t._w && typeof t._w.d < "u" && t._w.d !== i && (He(t).weekdayMismatch = !0)
    }
}

function Bh(t) {
    var n, a, o, e, i, f, h, y, C;
    n = t._w, n.GG != null || n.W != null || n.E != null ? (i = 1, f = 4, a = mi(n.GG, t._a[zt], aa(lt(), 1, 4).year), o = mi(n.W, 1), e = mi(n.E, 1), (e < 1 || e > 7) && (y = !0)) : (i = t._locale._week.dow, f = t._locale._week.doy, C = aa(lt(), i, f), a = mi(n.gg, t._a[zt], C.year), o = mi(n.w, C.week), n.d != null ? (e = n.d, (e < 0 || e > 6) && (y = !0)) : n.e != null ? (e = n.e + i, (n.e < 0 || n.e > 6) && (y = !0)) : e = i), o < 1 || o > _r(a, i, f) ? He(t)._overflowWeeks = !0 : y != null ? He(t)._overflowWeekday = !0 : (h = Eu(a, o, e, i, f), t._a[zt] = h.year, t._dayOfYear = h.dayOfYear)
}

fe.ISO_8601 = function () {
};
fe.RFC_2822 = function () {
};

function ko(t) {
    if (t._f === fe.ISO_8601) {
        Au(t);
        return
    }
    if (t._f === fe.RFC_2822) {
        xu(t);
        return
    }
    t._a = [], He(t).empty = !0;
    var n = "" + t._i, a, o, e, i, f, h = n.length, y = 0, C, R;
    for (e = du(t._f, t._locale).match(vo) || [], R = e.length, a = 0; a < R; a++) i = e[a], o = (n.match(Pc(i, t)) || [])[0], o && (f = n.substr(0, n.indexOf(o)), f.length > 0 && He(t).unusedInput.push(f), n = n.slice(n.indexOf(o) + o.length), y += o.length), _i[i] ? (o ? He(t).empty = !1 : He(t).unusedTokens.push(i), Hc(i, o, t)) : t._strict && !o && He(t).unusedTokens.push(i);
    He(t).charsLeftOver = h - y, n.length > 0 && He(t).unusedInput.push(n), t._a[kt] <= 12 && He(t).bigHour === !0 && t._a[kt] > 0 && (He(t).bigHour = void 0), He(t).parsedDateParts = t._a.slice(0), He(t).meridiem = t._meridiem, t._a[kt] = zh(t._locale, t._a[kt], t._meridiem), C = He(t).era, C !== null && (t._a[zt] = t._locale.erasConvertYear(C, t._a[zt])), Co(t), Eo(t)
}

function zh(t, n, a) {
    var o;
    return a == null ? n : t.meridiemHour != null ? t.meridiemHour(n, a) : (t.isPM != null && (o = t.isPM(a), o && n < 12 && (n += 12), !o && n === 12 && (n = 0)), n)
}

function Gh(t) {
    var n, a, o, e, i, f, h = !1, y = t._f.length;
    if (y === 0) {
        He(t).invalidFormat = !0, t._d = new Date(NaN);
        return
    }
    for (e = 0; e < y; e++) i = 0, f = !1, n = po({}, t), t._useUTC != null && (n._useUTC = t._useUTC), n._f = t._f[e], ko(n), ho(n) && (f = !0), i += He(n).charsLeftOver, i += He(n).unusedTokens.length * 10, He(n).score = i, h ? i < o && (o = i, a = n) : (o == null || i < o || f) && (o = i, a = n, f && (h = !0));
    Rr(t, a || n)
}

function Qh(t) {
    if (!t._d) {
        var n = mo(t._i), a = n.day === void 0 ? n.date : n.day;
        t._a = lu([n.year, n.month, a, n.hour, n.minute, n.second, n.millisecond], function (o) {
            return o && parseInt(o, 10)
        }), Co(t)
    }
}

function Kh(t) {
    var n = new ca(Eo(Nu(t)));
    return n._nextDay && (n.add(1, "d"), n._nextDay = void 0), n
}

function Nu(t) {
    var n = t._i, a = t._f;
    return t._locale = t._locale || Sr(t._l), n === null || a === void 0 && n === "" ? Ba({nullInput: !0}) : (typeof n == "string" && (t._i = n = t._locale.preparse(n)), qn(n) ? new ca(Eo(n)) : (da(n) ? t._d = n : Un(a) ? Gh(t) : a ? ko(t) : Xh(t), ho(t) || (t._d = null), t))
}

function Xh(t) {
    var n = t._i;
    fn(n) ? t._d = new Date(fe.now()) : da(n) ? t._d = new Date(n.valueOf()) : typeof n == "string" ? Uh(t) : Un(n) ? (t._a = lu(n.slice(0), function (a) {
        return parseInt(a, 10)
    }), Co(t)) : Kr(n) ? Qh(t) : Tr(n) ? t._d = new Date(n) : fe.createFromInputFallback(t)
}

function Mu(t, n, a, o, e) {
    var i = {};
    return (n === !0 || n === !1) && (o = n, n = void 0), (a === !0 || a === !1) && (o = a, a = void 0), (Kr(t) && co(t) || Un(t) && t.length === 0) && (t = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = e, i._l = a, i._i = t, i._f = n, i._strict = o, Kh(i)
}

function lt(t, n, a, o) {
    return Mu(t, n, a, o, !1)
}

var Zh = Ln("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var t = lt.apply(null, arguments);
        return this.isValid() && t.isValid() ? t < this ? this : t : Ba()
    }),
    Jh = Ln("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var t = lt.apply(null, arguments);
        return this.isValid() && t.isValid() ? t > this ? this : t : Ba()
    });

function Iu(t, n) {
    var a, o;
    if (n.length === 1 && Un(n[0]) && (n = n[0]), !n.length) return lt();
    for (a = n[0], o = 1; o < n.length; ++o) (!n[o].isValid() || n[o][t](a)) && (a = n[o]);
    return a
}

function ep() {
    var t = [].slice.call(arguments, 0);
    return Iu("isBefore", t)
}

function tp() {
    var t = [].slice.call(arguments, 0);
    return Iu("isAfter", t)
}

var np = function () {
    return Date.now ? Date.now() : +new Date
}, Zi = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

function rp(t) {
    var n, a = !1, o, e = Zi.length;
    for (n in t) if (Ze(t, n) && !(wt.call(Zi, n) !== -1 && (t[n] == null || !isNaN(t[n])))) return !1;
    for (o = 0; o < e; ++o) if (t[Zi[o]]) {
        if (a) return !1;
        parseFloat(t[Zi[o]]) !== qe(t[Zi[o]]) && (a = !0)
    }
    return !0
}

function ip() {
    return this._isValid
}

function ap() {
    return Bn(NaN)
}

function ts(t) {
    var n = mo(t), a = n.year || 0, o = n.quarter || 0, e = n.month || 0, i = n.week || n.isoWeek || 0, f = n.day || 0,
        h = n.hour || 0, y = n.minute || 0, C = n.second || 0, R = n.millisecond || 0;
    this._isValid = rp(n), this._milliseconds = +R + C * 1e3 + y * 6e4 + h * 1e3 * 60 * 60, this._days = +f + i * 7, this._months = +e + o * 3 + a * 12, this._data = {}, this._locale = Sr(), this._bubble()
}

function Ia(t) {
    return t instanceof ts
}

function Bs(t) {
    return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
}

function sp(t, n, a) {
    var o = Math.min(t.length, n.length), e = Math.abs(t.length - n.length), i = 0, f;
    for (f = 0; f < o; f++) (a && t[f] !== n[f] || !a && qe(t[f]) !== qe(n[f])) && i++;
    return i + e
}

function Lu(t, n) {
    Te(t, 0, 0, function () {
        var a = this.utcOffset(), o = "+";
        return a < 0 && (a = -a, o = "-"), o + ar(~~(a / 60), 2) + n + ar(~~a % 60, 2)
    })
}

Lu("Z", ":");
Lu("ZZ", "");
he("Z", Za);
he("ZZ", Za);
rt(["Z", "ZZ"], function (t, n, a) {
    a._useUTC = !0, a._tzm = Do(Za, t)
});
var op = /([\+\-]|\d\d)/gi;

function Do(t, n) {
    var a = (n || "").match(t), o, e, i;
    return a === null ? null : (o = a[a.length - 1] || [], e = (o + "").match(op) || ["-", 0, 0], i = +(e[1] * 60) + qe(e[2]), i === 0 ? 0 : e[0] === "+" ? i : -i)
}

function Oo(t, n) {
    var a, o;
    return n._isUTC ? (a = n.clone(), o = (qn(t) || da(t) ? t.valueOf() : lt(t).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + o), fe.updateOffset(a, !1), a) : lt(t).local()
}

function zs(t) {
    return -Math.round(t._d.getTimezoneOffset())
}

fe.updateOffset = function () {
};

function lp(t, n, a) {
    var o = this._offset || 0, e;
    if (!this.isValid()) return t != null ? this : NaN;
    if (t != null) {
        if (typeof t == "string") {
            if (t = Do(Za, t), t === null) return this
        } else Math.abs(t) < 16 && !a && (t = t * 60);
        return !this._isUTC && n && (e = zs(this)), this._offset = t, this._isUTC = !0, e != null && this.add(e, "m"), o !== t && (!n || this._changeInProgress ? Hu(this, Bn(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, fe.updateOffset(this, !0), this._changeInProgress = null)), this
    } else return this._isUTC ? o : zs(this)
}

function up(t, n) {
    return t != null ? (typeof t != "string" && (t = -t), this.utcOffset(t, n), this) : -this.utcOffset()
}

function fp(t) {
    return this.utcOffset(0, t)
}

function dp(t) {
    return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(zs(this), "m")), this
}

function cp() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0); else if (typeof this._i == "string") {
        var t = Do(Ic, this._i);
        t != null ? this.utcOffset(t) : this.utcOffset(0, !0)
    }
    return this
}

function hp(t) {
    return this.isValid() ? (t = t ? lt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1
}

function pp() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
}

function gp() {
    if (!fn(this._isDSTShifted)) return this._isDSTShifted;
    var t = {}, n;
    return po(t, this), t = Nu(t), t._a ? (n = t._isUTC ? sr(t._a) : lt(t._a), this._isDSTShifted = this.isValid() && sp(t._a, n.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
}

function vp() {
    return this.isValid() ? !this._isUTC : !1
}

function mp() {
    return this.isValid() ? this._isUTC : !1
}

function Pu() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1
}

var yp = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    _p = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function Bn(t, n) {
    var a = t, o = null, e, i, f;
    return Ia(t) ? a = {
        ms: t._milliseconds,
        d: t._days,
        M: t._months
    } : Tr(t) || !isNaN(+t) ? (a = {}, n ? a[n] = +t : a.milliseconds = +t) : (o = yp.exec(t)) ? (e = o[1] === "-" ? -1 : 1, a = {
        y: 0,
        d: qe(o[ir]) * e,
        h: qe(o[kt]) * e,
        m: qe(o[Vn]) * e,
        s: qe(o[mr]) * e,
        ms: qe(Bs(o[Qr] * 1e3)) * e
    }) : (o = _p.exec(t)) ? (e = o[1] === "-" ? -1 : 1, a = {
        y: Gr(o[2], e),
        M: Gr(o[3], e),
        w: Gr(o[4], e),
        d: Gr(o[5], e),
        h: Gr(o[6], e),
        m: Gr(o[7], e),
        s: Gr(o[8], e)
    }) : a == null ? a = {} : typeof a == "object" && ("from" in a || "to" in a) && (f = wp(lt(a.from), lt(a.to)), a = {}, a.ms = f.milliseconds, a.M = f.months), i = new ts(a), Ia(t) && Ze(t, "_locale") && (i._locale = t._locale), Ia(t) && Ze(t, "_isValid") && (i._isValid = t._isValid), i
}

Bn.fn = ts.prototype;
Bn.invalid = ap;

function Gr(t, n) {
    var a = t && parseFloat(t.replace(",", "."));
    return (isNaN(a) ? 0 : a) * n
}

function al(t, n) {
    var a = {};
    return a.months = n.month() - t.month() + (n.year() - t.year()) * 12, t.clone().add(a.months, "M").isAfter(n) && --a.months, a.milliseconds = +n - +t.clone().add(a.months, "M"), a
}

function wp(t, n) {
    var a;
    return t.isValid() && n.isValid() ? (n = Oo(n, t), t.isBefore(n) ? a = al(t, n) : (a = al(n, t), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : {
        milliseconds: 0,
        months: 0
    }
}

function Ru(t, n) {
    return function (a, o) {
        var e, i;
        return o !== null && !isNaN(+o) && (fu(n, "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = a, a = o, o = i), e = Bn(a, o), Hu(this, e, t), this
    }
}

function Hu(t, n, a, o) {
    var e = n._milliseconds, i = Bs(n._days), f = Bs(n._months);
    t.isValid() && (o = o ?? !0, f && wu(t, Ya(t, "Month") + f * a), i && hu(t, "Date", Ya(t, "Date") + i * a), e && t._d.setTime(t._d.valueOf() + e * a), o && fe.updateOffset(t, i || f))
}

var Tp = Ru(1, "add"), Sp = Ru(-1, "subtract");

function Yu(t) {
    return typeof t == "string" || t instanceof String
}

function bp(t) {
    return qn(t) || da(t) || Yu(t) || Tr(t) || Cp(t) || Ep(t) || t === null || t === void 0
}

function Ep(t) {
    var n = Kr(t) && !co(t), a = !1,
        o = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
        e, i, f = o.length;
    for (e = 0; e < f; e += 1) i = o[e], a = a || Ze(t, i);
    return n && a
}

function Cp(t) {
    var n = Un(t), a = !1;
    return n && (a = t.filter(function (o) {
        return !Tr(o) && Yu(t)
    }).length === 0), n && a
}

function kp(t) {
    var n = Kr(t) && !co(t), a = !1, o = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], e, i;
    for (e = 0; e < o.length; e += 1) i = o[e], a = a || Ze(t, i);
    return n && a
}

function Dp(t, n) {
    var a = t.diff(n, "days", !0);
    return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
}

function Op(t, n) {
    arguments.length === 1 && (arguments[0] ? bp(arguments[0]) ? (t = arguments[0], n = void 0) : kp(arguments[0]) && (n = arguments[0], t = void 0) : (t = void 0, n = void 0));
    var a = t || lt(), o = Oo(a, this).startOf("day"), e = fe.calendarFormat(this, o) || "sameElse",
        i = n && (or(n[e]) ? n[e].call(this, a) : n[e]);
    return this.format(i || this.localeData().calendar(e, this, lt(a)))
}

function Ap() {
    return new ca(this)
}

function xp(t, n) {
    var a = qn(t) ? t : lt(t);
    return this.isValid() && a.isValid() ? (n = Pn(n) || "millisecond", n === "millisecond" ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(n).valueOf()) : !1
}

function Np(t, n) {
    var a = qn(t) ? t : lt(t);
    return this.isValid() && a.isValid() ? (n = Pn(n) || "millisecond", n === "millisecond" ? this.valueOf() < a.valueOf() : this.clone().endOf(n).valueOf() < a.valueOf()) : !1
}

function Mp(t, n, a, o) {
    var e = qn(t) ? t : lt(t), i = qn(n) ? n : lt(n);
    return this.isValid() && e.isValid() && i.isValid() ? (o = o || "()", (o[0] === "(" ? this.isAfter(e, a) : !this.isBefore(e, a)) && (o[1] === ")" ? this.isBefore(i, a) : !this.isAfter(i, a))) : !1
}

function Ip(t, n) {
    var a = qn(t) ? t : lt(t), o;
    return this.isValid() && a.isValid() ? (n = Pn(n) || "millisecond", n === "millisecond" ? this.valueOf() === a.valueOf() : (o = a.valueOf(), this.clone().startOf(n).valueOf() <= o && o <= this.clone().endOf(n).valueOf())) : !1
}

function Lp(t, n) {
    return this.isSame(t, n) || this.isAfter(t, n)
}

function Pp(t, n) {
    return this.isSame(t, n) || this.isBefore(t, n)
}

function Rp(t, n, a) {
    var o, e, i;
    if (!this.isValid()) return NaN;
    if (o = Oo(t, this), !o.isValid()) return NaN;
    switch (e = (o.utcOffset() - this.utcOffset()) * 6e4, n = Pn(n), n) {
        case"year":
            i = La(this, o) / 12;
            break;
        case"month":
            i = La(this, o);
            break;
        case"quarter":
            i = La(this, o) / 3;
            break;
        case"second":
            i = (this - o) / 1e3;
            break;
        case"minute":
            i = (this - o) / 6e4;
            break;
        case"hour":
            i = (this - o) / 36e5;
            break;
        case"day":
            i = (this - o - e) / 864e5;
            break;
        case"week":
            i = (this - o - e) / 6048e5;
            break;
        default:
            i = this - o
    }
    return a ? i : In(i)
}

function La(t, n) {
    if (t.date() < n.date()) return -La(n, t);
    var a = (n.year() - t.year()) * 12 + (n.month() - t.month()), o = t.clone().add(a, "months"), e, i;
    return n - o < 0 ? (e = t.clone().add(a - 1, "months"), i = (n - o) / (o - e)) : (e = t.clone().add(a + 1, "months"), i = (n - o) / (e - o)), -(a + i) || 0
}

fe.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
fe.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

function Hp() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}

function Yp(t) {
    if (!this.isValid()) return null;
    var n = t !== !0, a = n ? this.clone().utc() : this;
    return a.year() < 0 || a.year() > 9999 ? Ma(a, n ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : or(Date.prototype.toISOString) ? n ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ma(a, "Z")) : Ma(a, n ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}

function Wp() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var t = "moment", n = "", a, o, e, i;
    return this.isLocal() || (t = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", n = "Z"), a = "[" + t + '("]', o = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", e = "-MM-DD[T]HH:mm:ss.SSS", i = n + '[")]', this.format(a + o + e + i)
}

function Fp(t) {
    t || (t = this.isUtc() ? fe.defaultFormatUtc : fe.defaultFormat);
    var n = Ma(this, t);
    return this.localeData().postformat(n)
}

function jp(t, n) {
    return this.isValid() && (qn(t) && t.isValid() || lt(t).isValid()) ? Bn({
        to: this,
        from: t
    }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate()
}

function $p(t) {
    return this.from(lt(), t)
}

function Vp(t, n) {
    return this.isValid() && (qn(t) && t.isValid() || lt(t).isValid()) ? Bn({
        from: this,
        to: t
    }).locale(this.locale()).humanize(!n) : this.localeData().invalidDate()
}

function Up(t) {
    return this.to(lt(), t)
}

function Wu(t) {
    var n;
    return t === void 0 ? this._locale._abbr : (n = Sr(t), n != null && (this._locale = n), this)
}

var Fu = Ln("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
    return t === void 0 ? this.localeData() : this.locale(t)
});

function ju() {
    return this._locale
}

var ja = 1e3, wi = 60 * ja, $a = 60 * wi, $u = (365 * 400 + 97) * 24 * $a;

function Ti(t, n) {
    return (t % n + n) % n
}

function Vu(t, n, a) {
    return t < 100 && t >= 0 ? new Date(t + 400, n, a) - $u : new Date(t, n, a).valueOf()
}

function Uu(t, n, a) {
    return t < 100 && t >= 0 ? Date.UTC(t + 400, n, a) - $u : Date.UTC(t, n, a)
}

function qp(t) {
    var n, a;
    if (t = Pn(t), t === void 0 || t === "millisecond" || !this.isValid()) return this;
    switch (a = this._isUTC ? Uu : Vu, t) {
        case"year":
            n = a(this.year(), 0, 1);
            break;
        case"quarter":
            n = a(this.year(), this.month() - this.month() % 3, 1);
            break;
        case"month":
            n = a(this.year(), this.month(), 1);
            break;
        case"week":
            n = a(this.year(), this.month(), this.date() - this.weekday());
            break;
        case"isoWeek":
            n = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case"day":
        case"date":
            n = a(this.year(), this.month(), this.date());
            break;
        case"hour":
            n = this._d.valueOf(), n -= Ti(n + (this._isUTC ? 0 : this.utcOffset() * wi), $a);
            break;
        case"minute":
            n = this._d.valueOf(), n -= Ti(n, wi);
            break;
        case"second":
            n = this._d.valueOf(), n -= Ti(n, ja);
            break
    }
    return this._d.setTime(n), fe.updateOffset(this, !0), this
}

function Bp(t) {
    var n, a;
    if (t = Pn(t), t === void 0 || t === "millisecond" || !this.isValid()) return this;
    switch (a = this._isUTC ? Uu : Vu, t) {
        case"year":
            n = a(this.year() + 1, 0, 1) - 1;
            break;
        case"quarter":
            n = a(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case"month":
            n = a(this.year(), this.month() + 1, 1) - 1;
            break;
        case"week":
            n = a(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case"isoWeek":
            n = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case"day":
        case"date":
            n = a(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case"hour":
            n = this._d.valueOf(), n += $a - Ti(n + (this._isUTC ? 0 : this.utcOffset() * wi), $a) - 1;
            break;
        case"minute":
            n = this._d.valueOf(), n += wi - Ti(n, wi) - 1;
            break;
        case"second":
            n = this._d.valueOf(), n += ja - Ti(n, ja) - 1;
            break
    }
    return this._d.setTime(n), fe.updateOffset(this, !0), this
}

function zp() {
    return this._d.valueOf() - (this._offset || 0) * 6e4
}

function Gp() {
    return Math.floor(this.valueOf() / 1e3)
}

function Qp() {
    return new Date(this.valueOf())
}

function Kp() {
    var t = this;
    return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
}

function Xp() {
    var t = this;
    return {
        years: t.year(),
        months: t.month(),
        date: t.date(),
        hours: t.hours(),
        minutes: t.minutes(),
        seconds: t.seconds(),
        milliseconds: t.milliseconds()
    }
}

function Zp() {
    return this.isValid() ? this.toISOString() : null
}

function Jp() {
    return ho(this)
}

function eg() {
    return Rr({}, He(this))
}

function tg() {
    return He(this).overflow
}

function ng() {
    return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
}

Te("N", 0, 0, "eraAbbr");
Te("NN", 0, 0, "eraAbbr");
Te("NNN", 0, 0, "eraAbbr");
Te("NNNN", 0, 0, "eraName");
Te("NNNNN", 0, 0, "eraNarrow");
Te("y", ["y", 1], "yo", "eraYear");
Te("y", ["yy", 2], 0, "eraYear");
Te("y", ["yyy", 3], 0, "eraYear");
Te("y", ["yyyy", 4], 0, "eraYear");
he("N", Ao);
he("NN", Ao);
he("NNN", Ao);
he("NNNN", hg);
he("NNNNN", pg);
rt(["N", "NN", "NNN", "NNNN", "NNNNN"], function (t, n, a, o) {
    var e = a._locale.erasParse(t, o, a._strict);
    e ? He(a).era = e : He(a).invalidEra = t
});
he("y", ki);
he("yy", ki);
he("yyy", ki);
he("yyyy", ki);
he("yo", gg);
rt(["y", "yy", "yyy", "yyyy"], zt);
rt(["yo"], function (t, n, a, o) {
    var e;
    a._locale._eraYearOrdinalRegex && (e = t.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? n[zt] = a._locale.eraYearOrdinalParse(t, e) : n[zt] = parseInt(t, 10)
});

function rg(t, n) {
    var a, o, e, i = this._eras || Sr("en")._eras;
    for (a = 0, o = i.length; a < o; ++a) {
        switch (typeof i[a].since) {
            case"string":
                e = fe(i[a].since).startOf("day"), i[a].since = e.valueOf();
                break
        }
        switch (typeof i[a].until) {
            case"undefined":
                i[a].until = 1 / 0;
                break;
            case"string":
                e = fe(i[a].until).startOf("day").valueOf(), i[a].until = e.valueOf();
                break
        }
    }
    return i
}

function ig(t, n, a) {
    var o, e, i = this.eras(), f, h, y;
    for (t = t.toUpperCase(), o = 0, e = i.length; o < e; ++o) if (f = i[o].name.toUpperCase(), h = i[o].abbr.toUpperCase(), y = i[o].narrow.toUpperCase(), a) switch (n) {
        case"N":
        case"NN":
        case"NNN":
            if (h === t) return i[o];
            break;
        case"NNNN":
            if (f === t) return i[o];
            break;
        case"NNNNN":
            if (y === t) return i[o];
            break
    } else if ([f, h, y].indexOf(t) >= 0) return i[o]
}

function ag(t, n) {
    var a = t.since <= t.until ? 1 : -1;
    return n === void 0 ? fe(t.since).year() : fe(t.since).year() + (n - t.offset) * a
}

function sg() {
    var t, n, a, o = this.localeData().eras();
    for (t = 0, n = o.length; t < n; ++t) if (a = this.clone().startOf("day").valueOf(), o[t].since <= a && a <= o[t].until || o[t].until <= a && a <= o[t].since) return o[t].name;
    return ""
}

function og() {
    var t, n, a, o = this.localeData().eras();
    for (t = 0, n = o.length; t < n; ++t) if (a = this.clone().startOf("day").valueOf(), o[t].since <= a && a <= o[t].until || o[t].until <= a && a <= o[t].since) return o[t].narrow;
    return ""
}

function lg() {
    var t, n, a, o = this.localeData().eras();
    for (t = 0, n = o.length; t < n; ++t) if (a = this.clone().startOf("day").valueOf(), o[t].since <= a && a <= o[t].until || o[t].until <= a && a <= o[t].since) return o[t].abbr;
    return ""
}

function ug() {
    var t, n, a, o, e = this.localeData().eras();
    for (t = 0, n = e.length; t < n; ++t) if (a = e[t].since <= e[t].until ? 1 : -1, o = this.clone().startOf("day").valueOf(), e[t].since <= o && o <= e[t].until || e[t].until <= o && o <= e[t].since) return (this.year() - fe(e[t].since).year()) * a + e[t].offset;
    return this.year()
}

function fg(t) {
    return Ze(this, "_erasNameRegex") || xo.call(this), t ? this._erasNameRegex : this._erasRegex
}

function dg(t) {
    return Ze(this, "_erasAbbrRegex") || xo.call(this), t ? this._erasAbbrRegex : this._erasRegex
}

function cg(t) {
    return Ze(this, "_erasNarrowRegex") || xo.call(this), t ? this._erasNarrowRegex : this._erasRegex
}

function Ao(t, n) {
    return n.erasAbbrRegex(t)
}

function hg(t, n) {
    return n.erasNameRegex(t)
}

function pg(t, n) {
    return n.erasNarrowRegex(t)
}

function gg(t, n) {
    return n._eraYearOrdinalRegex || ki
}

function xo() {
    var t = [], n = [], a = [], o = [], e, i, f = this.eras();
    for (e = 0, i = f.length; e < i; ++e) n.push(Sn(f[e].name)), t.push(Sn(f[e].abbr)), a.push(Sn(f[e].narrow)), o.push(Sn(f[e].name)), o.push(Sn(f[e].abbr)), o.push(Sn(f[e].narrow));
    this._erasRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + a.join("|") + ")", "i")
}

Te(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100
});
Te(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100
});

function ns(t, n) {
    Te(0, [t, t.length], 0, n)
}

ns("gggg", "weekYear");
ns("ggggg", "weekYear");
ns("GGGG", "isoWeekYear");
ns("GGGGG", "isoWeekYear");
Qt("weekYear", "gg");
Qt("isoWeekYear", "GG");
Kt("weekYear", 1);
Kt("isoWeekYear", 1);
he("G", Xa);
he("g", Xa);
he("GG", ut, En);
he("gg", ut, En);
he("GGGG", _o, yo);
he("gggg", _o, yo);
he("GGGGG", Ka, Ga);
he("ggggg", Ka, Ga);
pa(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, n, a, o) {
    n[o.substr(0, 2)] = qe(t)
});
pa(["gg", "GG"], function (t, n, a, o) {
    n[o] = fe.parseTwoDigitYear(t)
});

function vg(t) {
    return qu.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
}

function mg(t) {
    return qu.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
}

function yg() {
    return _r(this.year(), 1, 4)
}

function _g() {
    return _r(this.isoWeekYear(), 1, 4)
}

function wg() {
    var t = this.localeData()._week;
    return _r(this.year(), t.dow, t.doy)
}

function Tg() {
    var t = this.localeData()._week;
    return _r(this.weekYear(), t.dow, t.doy)
}

function qu(t, n, a, o, e) {
    var i;
    return t == null ? aa(this, o, e).year : (i = _r(t, o, e), n > i && (n = i), Sg.call(this, t, n, a, o, e))
}

function Sg(t, n, a, o, e) {
    var i = Eu(t, n, a, o, e), f = ia(i.year, 0, i.dayOfYear);
    return this.year(f.getUTCFullYear()), this.month(f.getUTCMonth()), this.date(f.getUTCDate()), this
}

Te("Q", 0, "Qo", "quarter");
Qt("quarter", "Q");
Kt("quarter", 7);
he("Q", pu);
rt("Q", function (t, n) {
    n[vr] = (qe(t) - 1) * 3
});

function bg(t) {
    return t == null ? Math.ceil((this.month() + 1) / 3) : this.month((t - 1) * 3 + this.month() % 3)
}

Te("D", ["DD", 2], "Do", "date");
Qt("date", "D");
Kt("date", 9);
he("D", ut);
he("DD", ut, En);
he("Do", function (t, n) {
    return t ? n._dayOfMonthOrdinalParse || n._ordinalParse : n._dayOfMonthOrdinalParseLenient
});
rt(["D", "DD"], ir);
rt("Do", function (t, n) {
    n[ir] = qe(t.match(ut)[0])
});
var Bu = Ci("Date", !0);
Te("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Qt("dayOfYear", "DDD");
Kt("dayOfYear", 4);
he("DDD", Qa);
he("DDDD", gu);
rt(["DDD", "DDDD"], function (t, n, a) {
    a._dayOfYear = qe(t)
});

function Eg(t) {
    var n = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return t == null ? n : this.add(t - n, "d")
}

Te("m", ["mm", 2], 0, "minute");
Qt("minute", "m");
Kt("minute", 14);
he("m", ut);
he("mm", ut, En);
rt(["m", "mm"], Vn);
var Cg = Ci("Minutes", !1);
Te("s", ["ss", 2], 0, "second");
Qt("second", "s");
Kt("second", 15);
he("s", ut);
he("ss", ut, En);
rt(["s", "ss"], mr);
var kg = Ci("Seconds", !1);
Te("S", 0, 0, function () {
    return ~~(this.millisecond() / 100)
});
Te(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10)
});
Te(0, ["SSS", 3], 0, "millisecond");
Te(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10
});
Te(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100
});
Te(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1e3
});
Te(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 1e4
});
Te(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 1e5
});
Te(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1e6
});
Qt("millisecond", "ms");
Kt("millisecond", 16);
he("S", Qa, pu);
he("SS", Qa, En);
he("SSS", Qa, gu);
var Hr, zu;
for (Hr = "SSSS"; Hr.length <= 9; Hr += "S") he(Hr, ki);

function Dg(t, n) {
    n[Qr] = qe(("0." + t) * 1e3)
}

for (Hr = "S"; Hr.length <= 9; Hr += "S") rt(Hr, Dg);
zu = Ci("Milliseconds", !1);
Te("z", 0, 0, "zoneAbbr");
Te("zz", 0, 0, "zoneName");

function Og() {
    return this._isUTC ? "UTC" : ""
}

function Ag() {
    return this._isUTC ? "Coordinated Universal Time" : ""
}

var ee = ca.prototype;
ee.add = Tp;
ee.calendar = Op;
ee.clone = Ap;
ee.diff = Rp;
ee.endOf = Bp;
ee.format = Fp;
ee.from = jp;
ee.fromNow = $p;
ee.to = Vp;
ee.toNow = Up;
ee.get = Nc;
ee.invalidAt = tg;
ee.isAfter = xp;
ee.isBefore = Np;
ee.isBetween = Mp;
ee.isSame = Ip;
ee.isSameOrAfter = Lp;
ee.isSameOrBefore = Pp;
ee.isValid = Jp;
ee.lang = Fu;
ee.locale = Wu;
ee.localeData = ju;
ee.max = Jh;
ee.min = Zh;
ee.parsingFlags = eg;
ee.set = Mc;
ee.startOf = qp;
ee.subtract = Sp;
ee.toArray = Kp;
ee.toObject = Xp;
ee.toDate = Qp;
ee.toISOString = Yp;
ee.inspect = Wp;
typeof Symbol < "u" && Symbol.for != null && (ee[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return "Moment<" + this.format() + ">"
});
ee.toJSON = Zp;
ee.toString = Hp;
ee.unix = Gp;
ee.valueOf = zp;
ee.creationData = ng;
ee.eraName = sg;
ee.eraNarrow = og;
ee.eraAbbr = lg;
ee.eraYear = ug;
ee.year = bu;
ee.isLeapYear = Xc;
ee.weekYear = vg;
ee.isoWeekYear = mg;
ee.quarter = ee.quarters = bg;
ee.month = Tu;
ee.daysInMonth = Gc;
ee.week = ee.weeks = rh;
ee.isoWeek = ee.isoWeeks = ih;
ee.weeksInYear = wg;
ee.weeksInWeekYear = Tg;
ee.isoWeeksInYear = yg;
ee.isoWeeksInISOWeekYear = _g;
ee.date = Bu;
ee.day = ee.days = mh;
ee.weekday = yh;
ee.isoWeekday = _h;
ee.dayOfYear = Eg;
ee.hour = ee.hours = kh;
ee.minute = ee.minutes = Cg;
ee.second = ee.seconds = kg;
ee.millisecond = ee.milliseconds = zu;
ee.utcOffset = lp;
ee.utc = fp;
ee.local = dp;
ee.parseZone = cp;
ee.hasAlignedHourOffset = hp;
ee.isDST = pp;
ee.isLocal = vp;
ee.isUtcOffset = mp;
ee.isUtc = Pu;
ee.isUTC = Pu;
ee.zoneAbbr = Og;
ee.zoneName = Ag;
ee.dates = Ln("dates accessor is deprecated. Use date instead.", Bu);
ee.months = Ln("months accessor is deprecated. Use month instead", Tu);
ee.years = Ln("years accessor is deprecated. Use year instead", bu);
ee.zone = Ln("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", up);
ee.isDSTShifted = Ln("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", gp);

function xg(t) {
    return lt(t * 1e3)
}

function Ng() {
    return lt.apply(null, arguments).parseZone()
}

function Gu(t) {
    return t
}

var Je = go.prototype;
Je.calendar = mc;
Je.longDateFormat = Tc;
Je.invalidDate = bc;
Je.ordinal = kc;
Je.preparse = Gu;
Je.postformat = Gu;
Je.relativeTime = Oc;
Je.pastFuture = Ac;
Je.set = gc;
Je.eras = rg;
Je.erasParse = ig;
Je.erasConvertYear = ag;
Je.erasAbbrRegex = dg;
Je.erasNameRegex = fg;
Je.erasNarrowRegex = cg;
Je.months = Uc;
Je.monthsShort = qc;
Je.monthsParse = zc;
Je.monthsRegex = Kc;
Je.monthsShortRegex = Qc;
Je.week = Jc;
Je.firstDayOfYear = nh;
Je.firstDayOfWeek = th;
Je.weekdays = ch;
Je.weekdaysMin = ph;
Je.weekdaysShort = hh;
Je.weekdaysParse = vh;
Je.weekdaysRegex = wh;
Je.weekdaysShortRegex = Th;
Je.weekdaysMinRegex = Sh;
Je.isPM = Eh;
Je.meridiem = Dh;

function Va(t, n, a, o) {
    var e = Sr(), i = sr().set(o, n);
    return e[a](i, t)
}

function Qu(t, n, a) {
    if (Tr(t) && (n = t, t = void 0), t = t || "", n != null) return Va(t, n, a, "month");
    var o, e = [];
    for (o = 0; o < 12; o++) e[o] = Va(t, o, a, "month");
    return e
}

function No(t, n, a, o) {
    typeof t == "boolean" ? (Tr(n) && (a = n, n = void 0), n = n || "") : (n = t, a = n, t = !1, Tr(n) && (a = n, n = void 0), n = n || "");
    var e = Sr(), i = t ? e._week.dow : 0, f, h = [];
    if (a != null) return Va(n, (a + i) % 7, o, "day");
    for (f = 0; f < 7; f++) h[f] = Va(n, (f + i) % 7, o, "day");
    return h
}

function Mg(t, n) {
    return Qu(t, n, "months")
}

function Ig(t, n) {
    return Qu(t, n, "monthsShort")
}

function Lg(t, n, a) {
    return No(t, n, a, "weekdays")
}

function Pg(t, n, a) {
    return No(t, n, a, "weekdaysShort")
}

function Rg(t, n, a) {
    return No(t, n, a, "weekdaysMin")
}

Yr("en", {
    eras: [{
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
    }, {since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC"}],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (t) {
        var n = t % 10, a = qe(t % 100 / 10) === 1 ? "th" : n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
        return t + a
    }
});
fe.lang = Ln("moment.lang is deprecated. Use moment.locale instead.", Yr);
fe.langData = Ln("moment.langData is deprecated. Use moment.localeData instead.", Sr);
var pr = Math.abs;

function Hg() {
    var t = this._data;
    return this._milliseconds = pr(this._milliseconds), this._days = pr(this._days), this._months = pr(this._months), t.milliseconds = pr(t.milliseconds), t.seconds = pr(t.seconds), t.minutes = pr(t.minutes), t.hours = pr(t.hours), t.months = pr(t.months), t.years = pr(t.years), this
}

function Ku(t, n, a, o) {
    var e = Bn(n, a);
    return t._milliseconds += o * e._milliseconds, t._days += o * e._days, t._months += o * e._months, t._bubble()
}

function Yg(t, n) {
    return Ku(this, t, n, 1)
}

function Wg(t, n) {
    return Ku(this, t, n, -1)
}

function sl(t) {
    return t < 0 ? Math.floor(t) : Math.ceil(t)
}

function Fg() {
    var t = this._milliseconds, n = this._days, a = this._months, o = this._data, e, i, f, h, y;
    return t >= 0 && n >= 0 && a >= 0 || t <= 0 && n <= 0 && a <= 0 || (t += sl(Gs(a) + n) * 864e5, n = 0, a = 0), o.milliseconds = t % 1e3, e = In(t / 1e3), o.seconds = e % 60, i = In(e / 60), o.minutes = i % 60, f = In(i / 60), o.hours = f % 24, n += In(f / 24), y = In(Xu(n)), a += y, n -= sl(Gs(y)), h = In(a / 12), a %= 12, o.days = n, o.months = a, o.years = h, this
}

function Xu(t) {
    return t * 4800 / 146097
}

function Gs(t) {
    return t * 146097 / 4800
}

function jg(t) {
    if (!this.isValid()) return NaN;
    var n, a, o = this._milliseconds;
    if (t = Pn(t), t === "month" || t === "quarter" || t === "year") switch (n = this._days + o / 864e5, a = this._months + Xu(n), t) {
        case"month":
            return a;
        case"quarter":
            return a / 3;
        case"year":
            return a / 12
    } else switch (n = this._days + Math.round(Gs(this._months)), t) {
        case"week":
            return n / 7 + o / 6048e5;
        case"day":
            return n + o / 864e5;
        case"hour":
            return n * 24 + o / 36e5;
        case"minute":
            return n * 1440 + o / 6e4;
        case"second":
            return n * 86400 + o / 1e3;
        case"millisecond":
            return Math.floor(n * 864e5) + o;
        default:
            throw new Error("Unknown unit " + t)
    }
}

function $g() {
    return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + qe(this._months / 12) * 31536e6 : NaN
}

function br(t) {
    return function () {
        return this.as(t)
    }
}

var Vg = br("ms"), Ug = br("s"), qg = br("m"), Bg = br("h"), zg = br("d"), Gg = br("w"), Qg = br("M"), Kg = br("Q"),
    Xg = br("y");

function Zg() {
    return Bn(this)
}

function Jg(t) {
    return t = Pn(t), this.isValid() ? this[t + "s"]() : NaN
}

function ti(t) {
    return function () {
        return this.isValid() ? this._data[t] : NaN
    }
}

var ev = ti("milliseconds"), tv = ti("seconds"), nv = ti("minutes"), rv = ti("hours"), iv = ti("days"),
    av = ti("months"), sv = ti("years");

function ov() {
    return In(this.days() / 7)
}

var gr = Math.round, yi = {ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11};

function lv(t, n, a, o, e) {
    return e.relativeTime(n || 1, !!a, t, o)
}

function uv(t, n, a, o) {
    var e = Bn(t).abs(), i = gr(e.as("s")), f = gr(e.as("m")), h = gr(e.as("h")), y = gr(e.as("d")), C = gr(e.as("M")),
        R = gr(e.as("w")), Y = gr(e.as("y")),
        $ = i <= a.ss && ["s", i] || i < a.s && ["ss", i] || f <= 1 && ["m"] || f < a.m && ["mm", f] || h <= 1 && ["h"] || h < a.h && ["hh", h] || y <= 1 && ["d"] || y < a.d && ["dd", y];
    return a.w != null && ($ = $ || R <= 1 && ["w"] || R < a.w && ["ww", R]), $ = $ || C <= 1 && ["M"] || C < a.M && ["MM", C] || Y <= 1 && ["y"] || ["yy", Y], $[2] = n, $[3] = +t > 0, $[4] = o, lv.apply(null, $)
}

function fv(t) {
    return t === void 0 ? gr : typeof t == "function" ? (gr = t, !0) : !1
}

function dv(t, n) {
    return yi[t] === void 0 ? !1 : n === void 0 ? yi[t] : (yi[t] = n, t === "s" && (yi.ss = n - 1), !0)
}

function cv(t, n) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var a = !1, o = yi, e, i;
    return typeof t == "object" && (n = t, t = !1), typeof t == "boolean" && (a = t), typeof n == "object" && (o = Object.assign({}, yi, n), n.s != null && n.ss == null && (o.ss = n.s - 1)), e = this.localeData(), i = uv(this, !a, o, e), a && (i = e.pastFuture(+this, i)), e.postformat(i)
}

var Is = Math.abs;

function vi(t) {
    return (t > 0) - (t < 0) || +t
}

function rs() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t = Is(this._milliseconds) / 1e3, n = Is(this._days), a = Is(this._months), o, e, i, f, h = this.asSeconds(), y,
        C, R, Y;
    return h ? (o = In(t / 60), e = In(o / 60), t %= 60, o %= 60, i = In(a / 12), a %= 12, f = t ? t.toFixed(3).replace(/\.?0+$/, "") : "", y = h < 0 ? "-" : "", C = vi(this._months) !== vi(h) ? "-" : "", R = vi(this._days) !== vi(h) ? "-" : "", Y = vi(this._milliseconds) !== vi(h) ? "-" : "", y + "P" + (i ? C + i + "Y" : "") + (a ? C + a + "M" : "") + (n ? R + n + "D" : "") + (e || o || t ? "T" : "") + (e ? Y + e + "H" : "") + (o ? Y + o + "M" : "") + (t ? Y + f + "S" : "")) : "P0D"
}

var Qe = ts.prototype;
Qe.isValid = ip;
Qe.abs = Hg;
Qe.add = Yg;
Qe.subtract = Wg;
Qe.as = jg;
Qe.asMilliseconds = Vg;
Qe.asSeconds = Ug;
Qe.asMinutes = qg;
Qe.asHours = Bg;
Qe.asDays = zg;
Qe.asWeeks = Gg;
Qe.asMonths = Qg;
Qe.asQuarters = Kg;
Qe.asYears = Xg;
Qe.valueOf = $g;
Qe._bubble = Fg;
Qe.clone = Zg;
Qe.get = Jg;
Qe.milliseconds = ev;
Qe.seconds = tv;
Qe.minutes = nv;
Qe.hours = rv;
Qe.days = iv;
Qe.weeks = ov;
Qe.months = av;
Qe.years = sv;
Qe.humanize = cv;
Qe.toISOString = rs;
Qe.toString = rs;
Qe.toJSON = rs;
Qe.locale = Wu;
Qe.localeData = ju;
Qe.toIsoString = Ln("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rs);
Qe.lang = Fu;
Te("X", 0, 0, "unix");
Te("x", 0, 0, "valueOf");
he("x", Xa);
he("X", Lc);
rt("X", function (t, n, a) {
    a._d = new Date(parseFloat(t) * 1e3)
});
rt("x", function (t, n, a) {
    a._d = new Date(qe(t))
});//! moment.js
fe.version = "2.29.4";
hc(lt);
fe.fn = ee;
fe.min = ep;
fe.max = tp;
fe.now = np;
fe.utc = sr;
fe.unix = xg;
fe.months = Mg;
fe.isDate = da;
fe.locale = Yr;
fe.invalid = Ba;
fe.duration = Bn;
fe.isMoment = qn;
fe.weekdays = Lg;
fe.parseZone = Ng;
fe.localeData = Sr;
fe.isDuration = Ia;
fe.monthsShort = Ig;
fe.weekdaysMin = Rg;
fe.defineLocale = bo;
fe.updateLocale = Nh;
fe.locales = Mh;
fe.weekdaysShort = Pg;
fe.normalizeUnits = Pn;
fe.relativeTimeRounding = fv;
fe.relativeTimeThreshold = dv;
fe.calendarFormat = Dp;
fe.prototype = ee;
fe.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
};
(function (t) {
    if (typeof define == "function" && define.amd) define(["jquery", "moment"], t); else if (typeof exports == "object") module.exports = t(require("jquery"), require("moment")); else {
        if (typeof jQuery > "u") throw "bootstrap-datetimepicker requires jQuery to be loaded first";
        if (typeof fe > "u") throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
        t(jQuery, fe)
    }
})(function (t, n) {
    if (!n) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
    var a = function (o, e) {
        var i = {}, f, h, y = !0, C, R = !1, Y = !1, $, Ce = 0, K, re, me,
            de = [{clsName: "days", navFnc: "M", navStep: 1}, {
                clsName: "months",
                navFnc: "y",
                navStep: 1
            }, {clsName: "years", navFnc: "y", navStep: 10}, {clsName: "decades", navFnc: "y", navStep: 100}],
            te = ["days", "months", "years", "decades"], St = ["top", "bottom", "auto"], Dt = ["left", "right", "auto"],
            Ot = ["default", "top", "bottom"], pn = {
                up: 38,
                38: "up",
                down: 40,
                40: "down",
                left: 37,
                37: "left",
                right: 39,
                39: "right",
                tab: 9,
                9: "tab",
                escape: 27,
                27: "escape",
                enter: 13,
                13: "enter",
                pageUp: 33,
                33: "pageUp",
                pageDown: 34,
                34: "pageDown",
                shift: 16,
                16: "shift",
                control: 17,
                17: "control",
                space: 32,
                32: "space",
                t: 84,
                84: "t",
                delete: 46,
                46: "delete"
            }, c = {}, Lt = function () {
                return n.tz !== void 0 && e.timeZone !== void 0 && e.timeZone !== null && e.timeZone !== ""
            }, Ae = function (v) {
                var N;
                return v == null ? N = n() : n.isDate(v) || n.isMoment(v) ? N = n(v) : Lt() ? N = n.tz(v, re, e.useStrict, e.timeZone) : N = n(v, re, e.useStrict), Lt() && N.tz(e.timeZone), N
            }, Ve = function (v) {
                if (typeof v != "string" || v.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                switch (v) {
                    case"y":
                        return K.indexOf("Y") !== -1;
                    case"M":
                        return K.indexOf("M") !== -1;
                    case"d":
                        return K.toLowerCase().indexOf("d") !== -1;
                    case"h":
                    case"H":
                        return K.toLowerCase().indexOf("h") !== -1;
                    case"m":
                        return K.indexOf("m") !== -1;
                    case"s":
                        return K.indexOf("s") !== -1;
                    default:
                        return !1
                }
            }, Tt = function () {
                return Ve("h") || Ve("m") || Ve("s")
            }, Xt = function () {
                return Ve("y") || Ve("M") || Ve("d")
            }, Ye = function () {
                var v = t("<thead>").append(t("<tr>").append(t("<th>").addClass("prev").attr("data-action", "previous").append(t("<span>").addClass(e.icons.previous))).append(t("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", e.calendarWeeks ? "6" : "5")).append(t("<th>").addClass("next").attr("data-action", "next").append(t("<span>").addClass(e.icons.next)))),
                    N = t("<tbody>").append(t("<tr>").append(t("<td>").attr("colspan", e.calendarWeeks ? "8" : "7")));
                return [t("<div>").addClass("datepicker-days").append(t("<table>").addClass("table-condensed").append(v).append(t("<tbody>"))), t("<div>").addClass("datepicker-months").append(t("<table>").addClass("table-condensed").append(v.clone()).append(N.clone())), t("<div>").addClass("datepicker-years").append(t("<table>").addClass("table-condensed").append(v.clone()).append(N.clone())), t("<div>").addClass("datepicker-decades").append(t("<table>").addClass("table-condensed").append(v.clone()).append(N.clone()))]
            }, gn = function () {
                var v = t("<tr>"), N = t("<tr>"), V = t("<tr>");
                return Ve("h") && (v.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: e.tooltips.incrementHour
                }).addClass("btn").attr("data-action", "incrementHours").append(t("<span>").addClass(e.icons.up)))), N.append(t("<td>").append(t("<span>").addClass("timepicker-hour").attr({
                    "data-time-component": "hours",
                    title: e.tooltips.pickHour
                }).attr("data-action", "showHours"))), V.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: e.tooltips.decrementHour
                }).addClass("btn").attr("data-action", "decrementHours").append(t("<span>").addClass(e.icons.down))))), Ve("m") && (Ve("h") && (v.append(t("<td>").addClass("separator")), N.append(t("<td>").addClass("separator").html(":")), V.append(t("<td>").addClass("separator"))), v.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: e.tooltips.incrementMinute
                }).addClass("btn").attr("data-action", "incrementMinutes").append(t("<span>").addClass(e.icons.up)))), N.append(t("<td>").append(t("<span>").addClass("timepicker-minute").attr({
                    "data-time-component": "minutes",
                    title: e.tooltips.pickMinute
                }).attr("data-action", "showMinutes"))), V.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: e.tooltips.decrementMinute
                }).addClass("btn").attr("data-action", "decrementMinutes").append(t("<span>").addClass(e.icons.down))))), Ve("s") && (Ve("m") && (v.append(t("<td>").addClass("separator")), N.append(t("<td>").addClass("separator").html(":")), V.append(t("<td>").addClass("separator"))), v.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: e.tooltips.incrementSecond
                }).addClass("btn").attr("data-action", "incrementSeconds").append(t("<span>").addClass(e.icons.up)))), N.append(t("<td>").append(t("<span>").addClass("timepicker-second").attr({
                    "data-time-component": "seconds",
                    title: e.tooltips.pickSecond
                }).attr("data-action", "showSeconds"))), V.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: e.tooltips.decrementSecond
                }).addClass("btn").attr("data-action", "decrementSeconds").append(t("<span>").addClass(e.icons.down))))), $ || (v.append(t("<td>").addClass("separator")), N.append(t("<td>").append(t("<button>").addClass("btn btn-primary").attr({
                    "data-action": "togglePeriod",
                    tabindex: "-1",
                    title: e.tooltips.togglePeriod
                }))), V.append(t("<td>").addClass("separator"))), t("<div>").addClass("timepicker-picker").append(t("<table>").addClass("table-condensed").append([v, N, V]))
            }, zn = function () {
                var v = t("<div>").addClass("timepicker-hours").append(t("<table>").addClass("table-condensed")),
                    N = t("<div>").addClass("timepicker-minutes").append(t("<table>").addClass("table-condensed")),
                    V = t("<div>").addClass("timepicker-seconds").append(t("<table>").addClass("table-condensed")),
                    se = [gn()];
                return Ve("h") && se.push(v), Ve("m") && se.push(N), Ve("s") && se.push(V), se
            }, Zt = function () {
                var v = [];
                return e.showTodayButton && v.push(t("<td>").append(t("<a>").attr({
                    "data-action": "today",
                    title: e.tooltips.today
                }).append(t("<span>").addClass(e.icons.today)))), !e.sideBySide && Xt() && Tt() && v.push(t("<td>").append(t("<a>").attr({
                    "data-action": "togglePicker",
                    title: e.tooltips.selectTime
                }).append(t("<span>").addClass(e.icons.time)))), e.showClear && v.push(t("<td>").append(t("<a>").attr({
                    "data-action": "clear",
                    title: e.tooltips.clear
                }).append(t("<span>").addClass(e.icons.clear)))), e.showClose && v.push(t("<td>").append(t("<a>").attr({
                    "data-action": "close",
                    title: e.tooltips.close
                }).append(t("<span>").addClass(e.icons.close)))), t("<table>").addClass("table-condensed").append(t("<tbody>").append(t("<tr>").append(v)))
            }, ct = function () {
                var v = t("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                    N = t("<div>").addClass("datepicker").append(Ye()), V = t("<div>").addClass("timepicker").append(zn()),
                    se = t("<ul>").addClass("list-unstyled"),
                    xe = t("<li>").addClass("picker-switch" + (e.collapse ? " accordion-toggle" : "")).append(Zt());
                return e.inline && v.removeClass("dropdown-menu"), $ && v.addClass("usetwentyfour"), Ve("s") && !$ && v.addClass("wider"), e.sideBySide && Xt() && Tt() ? (v.addClass("timepicker-sbs"), e.toolbarPlacement === "top" && v.append(xe), v.append(t("<div>").addClass("row").append(N.addClass("col-md-6")).append(V.addClass("col-md-6"))), e.toolbarPlacement === "bottom" && v.append(xe), v) : (e.toolbarPlacement === "top" && se.append(xe), Xt() && se.append(t("<li>").addClass(e.collapse && Tt() ? "collapse in" : "").append(N)), e.toolbarPlacement === "default" && se.append(xe), Tt() && se.append(t("<li>").addClass(e.collapse && Xt() ? "collapse" : "").append(V)), e.toolbarPlacement === "bottom" && se.append(xe), v.append(se))
            }, nn = function () {
                var v, N = {};
                return o.is("input") || e.inline ? v = o.data() : v = o.find("input").data(), v.dateOptions && v.dateOptions instanceof Object && (N = t.extend(!0, N, v.dateOptions)), t.each(e, function (V) {
                    var se = "date" + V.charAt(0).toUpperCase() + V.slice(1);
                    v[se] !== void 0 && (N[V] = v[se])
                }), N
            }, ht = function () {
                var v = (R || o).position(), N = (R || o).offset(), V = e.widgetPositioning.vertical,
                    se = e.widgetPositioning.horizontal, xe;
                if (e.widgetParent) xe = e.widgetParent.append(Y); else if (o.is("input")) xe = o.after(Y).parent(); else if (e.inline) {
                    xe = o.append(Y);
                    return
                } else xe = o, o.children().first().after(Y);
                if (V === "auto" && (N.top + Y.height() * 1.5 >= t(window).height() + t(window).scrollTop() && Y.height() + o.outerHeight() < N.top ? V = "top" : V = "bottom"), se === "auto" && (xe.width() < N.left + Y.outerWidth() / 2 && N.left + Y.outerWidth() > t(window).width() ? se = "right" : se = "left"), V === "top" ? Y.addClass("top").removeClass("bottom") : Y.addClass("bottom").removeClass("top"), se === "right" ? Y.addClass("pull-right") : Y.removeClass("pull-right"), xe.css("position") === "static" && (xe = xe.parents().filter(function () {
                    return t(this).css("position") !== "static"
                }).first()), xe.length === 0) throw new Error("datetimepicker component should be placed within a non-static positioned container");
                Y.css({
                    top: V === "top" ? "auto" : v.top + o.outerHeight(),
                    bottom: V === "top" ? xe.outerHeight() - (xe === o ? 0 : v.top) : "auto",
                    left: se === "left" ? xe === o ? 0 : v.left : "auto",
                    right: se === "left" ? "auto" : xe.outerWidth() - o.outerWidth() - (xe === o ? 0 : v.left)
                })
            }, gt = function (v) {
                v.type === "dp.change" && (v.date && v.date.isSame(v.oldDate) || !v.date && !v.oldDate) || o.trigger(v)
            }, bt = function (v) {
                v === "y" && (v = "YYYY"), gt({type: "dp.update", change: v, viewDate: h.clone()})
            }, we = function (v) {
                Y && (v && (me = Math.max(Ce, Math.min(3, me + v))), Y.find(".datepicker > div").hide().filter(".datepicker-" + de[me].clsName).show())
            }, oe = function () {
                var v = t("<tr>"), N = h.clone().startOf("w").startOf("d");
                for (e.calendarWeeks === !0 && v.append(t("<th>").addClass("cw").text("#")); N.isBefore(h.clone().endOf("w"));) v.append(t("<th>").addClass("dow").text(N.format("dd"))), N.add(1, "d");
                Y.find(".datepicker-days thead").append(v)
            }, ce = function (v) {
                return e.disabledDates[v.format("YYYY-MM-DD")] === !0
            }, Ee = function (v) {
                return e.enabledDates[v.format("YYYY-MM-DD")] === !0
            }, ke = function (v) {
                return e.disabledHours[v.format("H")] === !0
            }, Re = function (v) {
                return e.enabledHours[v.format("H")] === !0
            }, Le = function (v, N) {
                if (!v.isValid() || e.disabledDates && N === "d" && ce(v) || e.enabledDates && N === "d" && !Ee(v) || e.minDate && v.isBefore(e.minDate, N) || e.maxDate && v.isAfter(e.maxDate, N) || e.daysOfWeekDisabled && N === "d" && e.daysOfWeekDisabled.indexOf(v.day()) !== -1 || e.disabledHours && (N === "h" || N === "m" || N === "s") && ke(v) || e.enabledHours && (N === "h" || N === "m" || N === "s") && !Re(v)) return !1;
                if (e.disabledTimeIntervals && (N === "h" || N === "m" || N === "s")) {
                    var V = !1;
                    if (t.each(e.disabledTimeIntervals, function () {
                        if (v.isBetween(this[0], this[1])) return V = !0, !1
                    }), V) return !1
                }
                return !0
            }, $t = function () {
                for (var v = [], N = h.clone().startOf("y").startOf("d"); N.isSame(h, "y");) v.push(t("<span>").attr("data-action", "selectMonth").addClass("month").text(N.format("MMM"))), N.add(1, "M");
                Y.find(".datepicker-months td").empty().append(v)
            }, Pt = function () {
                var v = Y.find(".datepicker-months"), N = v.find("th"), V = v.find("tbody").find("span");
                N.eq(0).find("span").attr("title", e.tooltips.prevYear), N.eq(1).attr("title", e.tooltips.selectYear), N.eq(2).find("span").attr("title", e.tooltips.nextYear), v.find(".disabled").removeClass("disabled"), Le(h.clone().subtract(1, "y"), "y") || N.eq(0).addClass("disabled"), N.eq(1).text(h.year()), Le(h.clone().add(1, "y"), "y") || N.eq(2).addClass("disabled"), V.removeClass("active"), f.isSame(h, "y") && !y && V.eq(f.month()).addClass("active"), V.each(function (se) {
                    Le(h.clone().month(se), "M") || t(this).addClass("disabled")
                })
            }, Er = function () {
                var v = Y.find(".datepicker-years"), N = v.find("th"), V = h.clone().subtract(5, "y"),
                    se = h.clone().add(6, "y"), xe = "";
                for (N.eq(0).find("span").attr("title", e.tooltips.prevDecade), N.eq(1).attr("title", e.tooltips.selectDecade), N.eq(2).find("span").attr("title", e.tooltips.nextDecade), v.find(".disabled").removeClass("disabled"), e.minDate && e.minDate.isAfter(V, "y") && N.eq(0).addClass("disabled"), N.eq(1).text(V.year() + "-" + se.year()), e.maxDate && e.maxDate.isBefore(se, "y") && N.eq(2).addClass("disabled"); !V.isAfter(se, "y");) xe += '<span data-action="selectYear" class="year' + (V.isSame(f, "y") && !y ? " active" : "") + (Le(V, "y") ? "" : " disabled") + '">' + V.year() + "</span>", V.add(1, "y");
                v.find("td").html(xe)
            }, vn = function () {
                var v = Y.find(".datepicker-decades"), N = v.find("th"), V = n({y: h.year() - h.year() % 100 - 1}),
                    se = V.clone().add(100, "y"), xe = V.clone(), it = !1, vt = !1, mt, Yt = "";
                for (N.eq(0).find("span").attr("title", e.tooltips.prevCentury), N.eq(2).find("span").attr("title", e.tooltips.nextCentury), v.find(".disabled").removeClass("disabled"), (V.isSame(n({y: 1900})) || e.minDate && e.minDate.isAfter(V, "y")) && N.eq(0).addClass("disabled"), N.eq(1).text(V.year() + "-" + se.year()), (V.isSame(n({y: 2e3})) || e.maxDate && e.maxDate.isBefore(se, "y")) && N.eq(2).addClass("disabled"); !V.isAfter(se, "y");) mt = V.year() + 12, it = e.minDate && e.minDate.isAfter(V, "y") && e.minDate.year() <= mt, vt = e.maxDate && e.maxDate.isAfter(V, "y") && e.maxDate.year() <= mt, Yt += '<span data-action="selectDecade" class="decade' + (f.isAfter(V) && f.year() <= mt ? " active" : "") + (!Le(V, "y") && !it && !vt ? " disabled" : "") + '" data-selection="' + (V.year() + 6) + '">' + (V.year() + 1) + " - " + (V.year() + 12) + "</span>", V.add(12, "y");
                Yt += "<span></span><span></span><span></span>", v.find("td").html(Yt), N.eq(1).text(xe.year() + 1 + "-" + V.year())
            }, Rt = function () {
                var v = Y.find(".datepicker-days"), N = v.find("th"), V, se = [], xe, it = [], vt;
                if (Xt()) {
                    for (N.eq(0).find("span").attr("title", e.tooltips.prevMonth), N.eq(1).attr("title", e.tooltips.selectMonth), N.eq(2).find("span").attr("title", e.tooltips.nextMonth), v.find(".disabled").removeClass("disabled"), N.eq(1).text(h.format(e.dayViewHeaderFormat)), Le(h.clone().subtract(1, "M"), "M") || N.eq(0).addClass("disabled"), Le(h.clone().add(1, "M"), "M") || N.eq(2).addClass("disabled"), V = h.clone().startOf("M").startOf("w").startOf("d"), vt = 0; vt < 42; vt++) V.weekday() === 0 && (xe = t("<tr>"), e.calendarWeeks && xe.append('<td class="cw">' + V.week() + "</td>"), se.push(xe)), it = ["day"], V.isBefore(h, "M") && it.push("old"), V.isAfter(h, "M") && it.push("new"), V.isSame(f, "d") && !y && it.push("active"), Le(V, "d") || it.push("disabled"), V.isSame(Ae(), "d") && it.push("today"), (V.day() === 0 || V.day() === 6) && it.push("weekend"), gt({
                        type: "dp.classify",
                        date: V,
                        classNames: it
                    }), xe.append('<td data-action="selectDay" data-day="' + V.format("L") + '" class="' + it.join(" ") + '">' + V.date() + "</td>"), V.add(1, "d");
                    v.find("tbody").empty().append(se), Pt(), Er(), vn()
                }
            }, Cr = function () {
                var v = Y.find(".timepicker-hours table"), N = h.clone().startOf("d"), V = [], se = t("<tr>");
                for (h.hour() > 11 && !$ && N.hour(12); N.isSame(h, "d") && ($ || h.hour() < 12 && N.hour() < 12 || h.hour() > 11);) N.hour() % 4 === 0 && (se = t("<tr>"), V.push(se)), se.append('<td data-action="selectHour" class="hour' + (Le(N, "h") ? "" : " disabled") + '">' + N.format($ ? "HH" : "hh") + "</td>"), N.add(1, "h");
                v.empty().append(V)
            }, kr = function () {
                for (var v = Y.find(".timepicker-minutes table"), N = h.clone().startOf("h"), V = [], se = t("<tr>"), xe = e.stepping === 1 ? 5 : e.stepping; h.isSame(N, "h");) N.minute() % (xe * 4) === 0 && (se = t("<tr>"), V.push(se)), se.append('<td data-action="selectMinute" class="minute' + (Le(N, "m") ? "" : " disabled") + '">' + N.format("mm") + "</td>"), N.add(xe, "m");
                v.empty().append(V)
            }, mn = function () {
                for (var v = Y.find(".timepicker-seconds table"), N = h.clone().startOf("m"), V = [], se = t("<tr>"); h.isSame(N, "m");) N.second() % 20 === 0 && (se = t("<tr>"), V.push(se)), se.append('<td data-action="selectSecond" class="second' + (Le(N, "s") ? "" : " disabled") + '">' + N.format("ss") + "</td>"), N.add(5, "s");
                v.empty().append(V)
            }, Ht = function () {
                var v, N, V = Y.find(".timepicker span[data-time-component]");
                $ || (v = Y.find(".timepicker [data-action=togglePeriod]"), N = f.clone().add(f.hours() >= 12 ? -12 : 12, "h"), v.text(f.format("A")), Le(N, "h") ? v.removeClass("disabled") : v.addClass("disabled")), V.filter("[data-time-component=hours]").text(f.format($ ? "HH" : "hh")), V.filter("[data-time-component=minutes]").text(f.format("mm")), V.filter("[data-time-component=seconds]").text(f.format("ss")), Cr(), kr(), mn()
            }, Be = function () {
                Y && (Rt(), Ht())
            }, We = function (v) {
                var N = y ? null : f;
                if (!v) {
                    y = !0, C.val(""), o.data("date", ""), gt({type: "dp.change", date: !1, oldDate: N}), Be();
                    return
                }
                if (v = v.clone().locale(e.locale), Lt() && v.tz(e.timeZone), e.stepping !== 1) for (v.minutes(Math.round(v.minutes() / e.stepping) * e.stepping).seconds(0); e.minDate && v.isBefore(e.minDate);) v.add(e.stepping, "minutes");
                Le(v) ? (f = v, h = f.clone(), C.val(f.format(K)), o.data("date", f.format(K)), y = !1, Be(), gt({
                    type: "dp.change",
                    date: f.clone(),
                    oldDate: N
                })) : (e.keepInvalid ? gt({
                    type: "dp.change",
                    date: v,
                    oldDate: N
                }) : C.val(y ? "" : f.format(K)), gt({type: "dp.error", date: v, oldDate: N}))
            }, Fe = function () {
                var v = !1;
                return !Y || (Y.find(".collapse").each(function () {
                    var N = t(this).data("collapse");
                    return N && N.transitioning ? (v = !0, !1) : !0
                }), v) || (R && R.hasClass("btn") && R.toggleClass("active"), Y.hide(), t(window).off("resize", ht), Y.off("click", "[data-action]"), Y.off("mousedown", !1), Y.remove(), Y = !1, gt({
                    type: "dp.hide",
                    date: f.clone()
                }), C.blur(), h = f.clone()), i
            }, lr = function () {
                We(null)
            }, ft = function (v) {
                return e.parseInputDate === void 0 ? (!n.isMoment(v) || v instanceof Date) && (v = Ae(v)) : v = e.parseInputDate(v), v
            }, rn = {
                next: function () {
                    var v = de[me].navFnc;
                    h.add(de[me].navStep, v), Rt(), bt(v)
                }, previous: function () {
                    var v = de[me].navFnc;
                    h.subtract(de[me].navStep, v), Rt(), bt(v)
                }, pickerSwitch: function () {
                    we(1)
                }, selectMonth: function (v) {
                    var N = t(v.target).closest("tbody").find("span").index(t(v.target));
                    h.month(N), me === Ce ? (We(f.clone().year(h.year()).month(h.month())), e.inline || Fe()) : (we(-1), Rt()), bt("M")
                }, selectYear: function (v) {
                    var N = parseInt(t(v.target).text(), 10) || 0;
                    h.year(N), me === Ce ? (We(f.clone().year(h.year())), e.inline || Fe()) : (we(-1), Rt()), bt("YYYY")
                }, selectDecade: function (v) {
                    var N = parseInt(t(v.target).data("selection"), 10) || 0;
                    h.year(N), me === Ce ? (We(f.clone().year(h.year())), e.inline || Fe()) : (we(-1), Rt()), bt("YYYY")
                }, selectDay: function (v) {
                    var N = h.clone();
                    t(v.target).is(".old") && N.subtract(1, "M"), t(v.target).is(".new") && N.add(1, "M"), We(N.date(parseInt(t(v.target).text(), 10))), !Tt() && !e.keepOpen && !e.inline && Fe()
                }, incrementHours: function () {
                    var v = f.clone().add(1, "h");
                    Le(v, "h") && We(v)
                }, incrementMinutes: function () {
                    var v = f.clone().add(e.stepping, "m");
                    Le(v, "m") && We(v)
                }, incrementSeconds: function () {
                    var v = f.clone().add(1, "s");
                    Le(v, "s") && We(v)
                }, decrementHours: function () {
                    var v = f.clone().subtract(1, "h");
                    Le(v, "h") && We(v)
                }, decrementMinutes: function () {
                    var v = f.clone().subtract(e.stepping, "m");
                    Le(v, "m") && We(v)
                }, decrementSeconds: function () {
                    var v = f.clone().subtract(1, "s");
                    Le(v, "s") && We(v)
                }, togglePeriod: function () {
                    We(f.clone().add(f.hours() >= 12 ? -12 : 12, "h"))
                }, togglePicker: function (v) {
                    var N = t(v.target), V = N.closest("ul"), se = V.find(".in"), xe = V.find(".collapse:not(.in)"), it;
                    if (se && se.length) {
                        if (it = se.data("collapse"), it && it.transitioning) return;
                        se.collapse ? (se.collapse("hide"), xe.collapse("show")) : (se.removeClass("in"), xe.addClass("in")), N.is("span") ? N.toggleClass(e.icons.time + " " + e.icons.date) : N.find("span").toggleClass(e.icons.time + " " + e.icons.date)
                    }
                }, showPicker: function () {
                    Y.find(".timepicker > div:not(.timepicker-picker)").hide(), Y.find(".timepicker .timepicker-picker").show()
                }, showHours: function () {
                    Y.find(".timepicker .timepicker-picker").hide(), Y.find(".timepicker .timepicker-hours").show()
                }, showMinutes: function () {
                    Y.find(".timepicker .timepicker-picker").hide(), Y.find(".timepicker .timepicker-minutes").show()
                }, showSeconds: function () {
                    Y.find(".timepicker .timepicker-picker").hide(), Y.find(".timepicker .timepicker-seconds").show()
                }, selectHour: function (v) {
                    var N = parseInt(t(v.target).text(), 10);
                    $ || (f.hours() >= 12 ? N !== 12 && (N += 12) : N === 12 && (N = 0)), We(f.clone().hours(N)), rn.showPicker.call(i)
                }, selectMinute: function (v) {
                    We(f.clone().minutes(parseInt(t(v.target).text(), 10))), rn.showPicker.call(i)
                }, selectSecond: function (v) {
                    We(f.clone().seconds(parseInt(t(v.target).text(), 10))), rn.showPicker.call(i)
                }, clear: lr, today: function () {
                    var v = Ae();
                    Le(v, "d") && We(v)
                }, close: Fe
            }, Rn = function (v) {
                return t(v.currentTarget).is(".disabled") || rn[t(v.currentTarget).data("action")].apply(i, arguments), !1
            }, ae = function () {
                var v, N = {
                    year: function (V) {
                        return V.month(0).date(1).hours(0).seconds(0).minutes(0)
                    }, month: function (V) {
                        return V.date(1).hours(0).seconds(0).minutes(0)
                    }, day: function (V) {
                        return V.hours(0).seconds(0).minutes(0)
                    }, hour: function (V) {
                        return V.seconds(0).minutes(0)
                    }, minute: function (V) {
                        return V.seconds(0)
                    }
                };
                return C.prop("disabled") || !e.ignoreReadonly && C.prop("readonly") || Y || (C.val() !== void 0 && C.val().trim().length !== 0 ? We(ft(C.val().trim())) : y && e.useCurrent && (e.inline || C.is("input") && C.val().trim().length === 0) && (v = Ae(), typeof e.useCurrent == "string" && (v = N[e.useCurrent](v)), We(v)), Y = ct(), oe(), $t(), Y.find(".timepicker-hours").hide(), Y.find(".timepicker-minutes").hide(), Y.find(".timepicker-seconds").hide(), Be(), we(), t(window).on("resize", ht), Y.on("click", "[data-action]", Rn), Y.on("mousedown", !1), R && R.hasClass("btn") && R.toggleClass("active"), ht(), Y.show(), e.focusOnShow && !C.is(":focus") && C.focus(), gt({type: "dp.show"})), i
            }, pt = function () {
                return Y ? Fe() : ae()
            }, Dr = function (v) {
                var N = null, V, se, xe = [], it = {}, vt = v.which, mt, Yt, _ = "p";
                c[vt] = _;
                for (V in c) c.hasOwnProperty(V) && c[V] === _ && (xe.push(V), parseInt(V, 10) !== vt && (it[V] = !0));
                for (V in e.keyBinds) if (e.keyBinds.hasOwnProperty(V) && typeof e.keyBinds[V] == "function" && (mt = V.split(" "), mt.length === xe.length && pn[vt] === mt[mt.length - 1])) {
                    for (Yt = !0, se = mt.length - 2; se >= 0; se--) if (!(pn[mt[se]] in it)) {
                        Yt = !1;
                        break
                    }
                    if (Yt) {
                        N = e.keyBinds[V];
                        break
                    }
                }
                N && (N.call(i, Y), v.stopPropagation(), v.preventDefault())
            }, Jt = function (v) {
                c[v.which] = "r", v.stopPropagation(), v.preventDefault()
            }, Gn = function (v) {
                var N = t(v.target).val().trim(), V = N ? ft(N) : null;
                return We(V), v.stopImmediatePropagation(), !1
            }, ur = function () {
                C.on({
                    change: Gn,
                    blur: e.debug ? "" : Fe,
                    keydown: Dr,
                    keyup: Jt,
                    focus: e.allowInputToggle ? ae : ""
                }), o.is("input") ? C.on({focus: ae}) : R && (R.on("click", pt), R.on("mousedown", !1))
            }, Qn = function () {
                C.off({
                    change: Gn,
                    blur,
                    keydown: Dr,
                    keyup: Jt,
                    focus: e.allowInputToggle ? Fe : ""
                }), o.is("input") ? C.off({focus: ae}) : R && (R.off("click", pt), R.off("mousedown", !1))
            }, Cn = function (v) {
                var N = {};
                return t.each(v, function () {
                    var V = ft(this);
                    V.isValid() && (N[V.format("YYYY-MM-DD")] = !0)
                }), Object.keys(N).length ? N : !1
            }, Vt = function (v) {
                var N = {};
                return t.each(v, function () {
                    N[this] = !0
                }), Object.keys(N).length ? N : !1
            }, Ut = function () {
                var v = e.format || "L LT";
                K = v.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (N) {
                    var V = f.localeData().longDateFormat(N) || N;
                    return V.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (se) {
                        return f.localeData().longDateFormat(se) || se
                    })
                }), re = e.extraFormats ? e.extraFormats.slice() : [], re.indexOf(v) < 0 && re.indexOf(K) < 0 && re.push(K), $ = K.toLowerCase().indexOf("a") < 1 && K.replace(/\[.*?\]/g, "").indexOf("h") < 1, Ve("y") && (Ce = 2), Ve("M") && (Ce = 1), Ve("d") && (Ce = 0), me = Math.max(Ce, me), y || We(f)
            };
        if (i.destroy = function () {
            Fe(), Qn(), o.removeData("DateTimePicker"), o.removeData("date")
        }, i.toggle = pt, i.show = ae, i.hide = Fe, i.disable = function () {
            return Fe(), R && R.hasClass("btn") && R.addClass("disabled"), C.prop("disabled", !0), i
        }, i.enable = function () {
            return R && R.hasClass("btn") && R.removeClass("disabled"), C.prop("disabled", !1), i
        }, i.ignoreReadonly = function (v) {
            if (arguments.length === 0) return e.ignoreReadonly;
            if (typeof v != "boolean") throw new TypeError("ignoreReadonly () expects a boolean parameter");
            return e.ignoreReadonly = v, i
        }, i.options = function (v) {
            if (arguments.length === 0) return t.extend(!0, {}, e);
            if (!(v instanceof Object)) throw new TypeError("options() options parameter should be an object");
            return t.extend(!0, e, v), t.each(e, function (N, V) {
                if (i[N] !== void 0) i[N](V); else throw new TypeError("option " + N + " is not recognized!")
            }), i
        }, i.date = function (v) {
            if (arguments.length === 0) return y ? null : f.clone();
            if (v !== null && typeof v != "string" && !n.isMoment(v) && !(v instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
            return We(v === null ? null : ft(v)), i
        }, i.format = function (v) {
            if (arguments.length === 0) return e.format;
            if (typeof v != "string" && (typeof v != "boolean" || v !== !1)) throw new TypeError("format() expects a string or boolean:false parameter " + v);
            return e.format = v, K && Ut(), i
        }, i.timeZone = function (v) {
            if (arguments.length === 0) return e.timeZone;
            if (typeof v != "string") throw new TypeError("newZone() expects a string parameter");
            return e.timeZone = v, i
        }, i.dayViewHeaderFormat = function (v) {
            if (arguments.length === 0) return e.dayViewHeaderFormat;
            if (typeof v != "string") throw new TypeError("dayViewHeaderFormat() expects a string parameter");
            return e.dayViewHeaderFormat = v, i
        }, i.extraFormats = function (v) {
            if (arguments.length === 0) return e.extraFormats;
            if (v !== !1 && !(v instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
            return e.extraFormats = v, re && Ut(), i
        }, i.disabledDates = function (v) {
            if (arguments.length === 0) return e.disabledDates ? t.extend({}, e.disabledDates) : e.disabledDates;
            if (!v) return e.disabledDates = !1, Be(), i;
            if (!(v instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
            return e.disabledDates = Cn(v), e.enabledDates = !1, Be(), i
        }, i.enabledDates = function (v) {
            if (arguments.length === 0) return e.enabledDates ? t.extend({}, e.enabledDates) : e.enabledDates;
            if (!v) return e.enabledDates = !1, Be(), i;
            if (!(v instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
            return e.enabledDates = Cn(v), e.disabledDates = !1, Be(), i
        }, i.daysOfWeekDisabled = function (v) {
            if (arguments.length === 0) return e.daysOfWeekDisabled.splice(0);
            if (typeof v == "boolean" && !v) return e.daysOfWeekDisabled = !1, Be(), i;
            if (!(v instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
            if (e.daysOfWeekDisabled = v.reduce(function (V, se) {
                return se = parseInt(se, 10), se > 6 || se < 0 || isNaN(se) || V.indexOf(se) === -1 && V.push(se), V
            }, []).sort(), e.useCurrent && !e.keepInvalid) {
                for (var N = 0; !Le(f, "d");) {
                    if (f.add(1, "d"), N === 31) throw "Tried 31 times to find a valid date";
                    N++
                }
                We(f)
            }
            return Be(), i
        }, i.maxDate = function (v) {
            if (arguments.length === 0) return e.maxDate ? e.maxDate.clone() : e.maxDate;
            if (typeof v == "boolean" && v === !1) return e.maxDate = !1, Be(), i;
            typeof v == "string" && (v === "now" || v === "moment") && (v = Ae());
            var N = ft(v);
            if (!N.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + v);
            if (e.minDate && N.isBefore(e.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + N.format(K));
            return e.maxDate = N, e.useCurrent && !e.keepInvalid && f.isAfter(v) && We(e.maxDate), h.isAfter(N) && (h = N.clone().subtract(e.stepping, "m")), Be(), i
        }, i.minDate = function (v) {
            if (arguments.length === 0) return e.minDate ? e.minDate.clone() : e.minDate;
            if (typeof v == "boolean" && v === !1) return e.minDate = !1, Be(), i;
            typeof v == "string" && (v === "now" || v === "moment") && (v = Ae());
            var N = ft(v);
            if (!N.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + v);
            if (e.maxDate && N.isAfter(e.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + N.format(K));
            return e.minDate = N, e.useCurrent && !e.keepInvalid && f.isBefore(v) && We(e.minDate), h.isBefore(N) && (h = N.clone().add(e.stepping, "m")), Be(), i
        }, i.defaultDate = function (v) {
            if (arguments.length === 0) return e.defaultDate ? e.defaultDate.clone() : e.defaultDate;
            if (!v) return e.defaultDate = !1, i;
            typeof v == "string" && (v === "now" || v === "moment" ? v = Ae() : v = Ae(v));
            var N = ft(v);
            if (!N.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + v);
            if (!Le(N)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
            return e.defaultDate = N, (e.defaultDate && e.inline || C.val().trim() === "") && We(e.defaultDate), i
        }, i.locale = function (v) {
            if (arguments.length === 0) return e.locale;
            if (!n.localeData(v)) throw new TypeError("locale() locale " + v + " is not loaded from moment locales!");
            return e.locale = v, f.locale(e.locale), h.locale(e.locale), K && Ut(), Y && (Fe(), ae()), i
        }, i.stepping = function (v) {
            return arguments.length === 0 ? e.stepping : (v = parseInt(v, 10), (isNaN(v) || v < 1) && (v = 1), e.stepping = v, i)
        }, i.useCurrent = function (v) {
            var N = ["year", "month", "day", "hour", "minute"];
            if (arguments.length === 0) return e.useCurrent;
            if (typeof v != "boolean" && typeof v != "string") throw new TypeError("useCurrent() expects a boolean or string parameter");
            if (typeof v == "string" && N.indexOf(v.toLowerCase()) === -1) throw new TypeError("useCurrent() expects a string parameter of " + N.join(", "));
            return e.useCurrent = v, i
        }, i.collapse = function (v) {
            if (arguments.length === 0) return e.collapse;
            if (typeof v != "boolean") throw new TypeError("collapse() expects a boolean parameter");
            return e.collapse === v || (e.collapse = v, Y && (Fe(), ae())), i
        }, i.icons = function (v) {
            if (arguments.length === 0) return t.extend({}, e.icons);
            if (!(v instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
            return t.extend(e.icons, v), Y && (Fe(), ae()), i
        }, i.tooltips = function (v) {
            if (arguments.length === 0) return t.extend({}, e.tooltips);
            if (!(v instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
            return t.extend(e.tooltips, v), Y && (Fe(), ae()), i
        }, i.useStrict = function (v) {
            if (arguments.length === 0) return e.useStrict;
            if (typeof v != "boolean") throw new TypeError("useStrict() expects a boolean parameter");
            return e.useStrict = v, i
        }, i.sideBySide = function (v) {
            if (arguments.length === 0) return e.sideBySide;
            if (typeof v != "boolean") throw new TypeError("sideBySide() expects a boolean parameter");
            return e.sideBySide = v, Y && (Fe(), ae()), i
        }, i.viewMode = function (v) {
            if (arguments.length === 0) return e.viewMode;
            if (typeof v != "string") throw new TypeError("viewMode() expects a string parameter");
            if (te.indexOf(v) === -1) throw new TypeError("viewMode() parameter must be one of (" + te.join(", ") + ") value");
            return e.viewMode = v, me = Math.max(te.indexOf(v), Ce), we(), i
        }, i.toolbarPlacement = function (v) {
            if (arguments.length === 0) return e.toolbarPlacement;
            if (typeof v != "string") throw new TypeError("toolbarPlacement() expects a string parameter");
            if (Ot.indexOf(v) === -1) throw new TypeError("toolbarPlacement() parameter must be one of (" + Ot.join(", ") + ") value");
            return e.toolbarPlacement = v, Y && (Fe(), ae()), i
        }, i.widgetPositioning = function (v) {
            if (arguments.length === 0) return t.extend({}, e.widgetPositioning);
            if ({}.toString.call(v) !== "[object Object]") throw new TypeError("widgetPositioning() expects an object variable");
            if (v.horizontal) {
                if (typeof v.horizontal != "string") throw new TypeError("widgetPositioning() horizontal variable must be a string");
                if (v.horizontal = v.horizontal.toLowerCase(), Dt.indexOf(v.horizontal) === -1) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + Dt.join(", ") + ")");
                e.widgetPositioning.horizontal = v.horizontal
            }
            if (v.vertical) {
                if (typeof v.vertical != "string") throw new TypeError("widgetPositioning() vertical variable must be a string");
                if (v.vertical = v.vertical.toLowerCase(), St.indexOf(v.vertical) === -1) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + St.join(", ") + ")");
                e.widgetPositioning.vertical = v.vertical
            }
            return Be(), i
        }, i.calendarWeeks = function (v) {
            if (arguments.length === 0) return e.calendarWeeks;
            if (typeof v != "boolean") throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
            return e.calendarWeeks = v, Be(), i
        }, i.showTodayButton = function (v) {
            if (arguments.length === 0) return e.showTodayButton;
            if (typeof v != "boolean") throw new TypeError("showTodayButton() expects a boolean parameter");
            return e.showTodayButton = v, Y && (Fe(), ae()), i
        }, i.showClear = function (v) {
            if (arguments.length === 0) return e.showClear;
            if (typeof v != "boolean") throw new TypeError("showClear() expects a boolean parameter");
            return e.showClear = v, Y && (Fe(), ae()), i
        }, i.widgetParent = function (v) {
            if (arguments.length === 0) return e.widgetParent;
            if (typeof v == "string" && (v = t(v)), v !== null && typeof v != "string" && !(v instanceof t)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
            return e.widgetParent = v, Y && (Fe(), ae()), i
        }, i.keepOpen = function (v) {
            if (arguments.length === 0) return e.keepOpen;
            if (typeof v != "boolean") throw new TypeError("keepOpen() expects a boolean parameter");
            return e.keepOpen = v, i
        }, i.focusOnShow = function (v) {
            if (arguments.length === 0) return e.focusOnShow;
            if (typeof v != "boolean") throw new TypeError("focusOnShow() expects a boolean parameter");
            return e.focusOnShow = v, i
        }, i.inline = function (v) {
            if (arguments.length === 0) return e.inline;
            if (typeof v != "boolean") throw new TypeError("inline() expects a boolean parameter");
            return e.inline = v, i
        }, i.clear = function () {
            return lr(), i
        }, i.keyBinds = function (v) {
            return arguments.length === 0 ? e.keyBinds : (e.keyBinds = v, i)
        }, i.getMoment = function (v) {
            return Ae(v)
        }, i.debug = function (v) {
            if (typeof v != "boolean") throw new TypeError("debug() expects a boolean parameter");
            return e.debug = v, i
        }, i.allowInputToggle = function (v) {
            if (arguments.length === 0) return e.allowInputToggle;
            if (typeof v != "boolean") throw new TypeError("allowInputToggle() expects a boolean parameter");
            return e.allowInputToggle = v, i
        }, i.showClose = function (v) {
            if (arguments.length === 0) return e.showClose;
            if (typeof v != "boolean") throw new TypeError("showClose() expects a boolean parameter");
            return e.showClose = v, i
        }, i.keepInvalid = function (v) {
            if (arguments.length === 0) return e.keepInvalid;
            if (typeof v != "boolean") throw new TypeError("keepInvalid() expects a boolean parameter");
            return e.keepInvalid = v, i
        }, i.datepickerInput = function (v) {
            if (arguments.length === 0) return e.datepickerInput;
            if (typeof v != "string") throw new TypeError("datepickerInput() expects a string parameter");
            return e.datepickerInput = v, i
        }, i.parseInputDate = function (v) {
            if (arguments.length === 0) return e.parseInputDate;
            if (typeof v != "function") throw new TypeError("parseInputDate() sholud be as function");
            return e.parseInputDate = v, i
        }, i.disabledTimeIntervals = function (v) {
            if (arguments.length === 0) return e.disabledTimeIntervals ? t.extend({}, e.disabledTimeIntervals) : e.disabledTimeIntervals;
            if (!v) return e.disabledTimeIntervals = !1, Be(), i;
            if (!(v instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
            return e.disabledTimeIntervals = v, Be(), i
        }, i.disabledHours = function (v) {
            if (arguments.length === 0) return e.disabledHours ? t.extend({}, e.disabledHours) : e.disabledHours;
            if (!v) return e.disabledHours = !1, Be(), i;
            if (!(v instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
            if (e.disabledHours = Vt(v), e.enabledHours = !1, e.useCurrent && !e.keepInvalid) {
                for (var N = 0; !Le(f, "h");) {
                    if (f.add(1, "h"), N === 24) throw "Tried 24 times to find a valid date";
                    N++
                }
                We(f)
            }
            return Be(), i
        }, i.enabledHours = function (v) {
            if (arguments.length === 0) return e.enabledHours ? t.extend({}, e.enabledHours) : e.enabledHours;
            if (!v) return e.enabledHours = !1, Be(), i;
            if (!(v instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
            if (e.enabledHours = Vt(v), e.disabledHours = !1, e.useCurrent && !e.keepInvalid) {
                for (var N = 0; !Le(f, "h");) {
                    if (f.add(1, "h"), N === 24) throw "Tried 24 times to find a valid date";
                    N++
                }
                We(f)
            }
            return Be(), i
        }, i.viewDate = function (v) {
            if (arguments.length === 0) return h.clone();
            if (!v) return h = f.clone(), i;
            if (typeof v != "string" && !n.isMoment(v) && !(v instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
            return h = ft(v), bt(), i
        }, o.is("input")) C = o; else if (C = o.find(e.datepickerInput), C.length === 0) C = o.find("input"); else if (!C.is("input")) throw new Error('CSS class "' + e.datepickerInput + '" cannot be applied to non input element');
        if (o.hasClass("input-group") && (o.find(".datepickerbutton").length === 0 ? R = o.find(".input-group-addon") : R = o.find(".datepickerbutton")), !e.inline && !C.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
        return f = Ae(), h = f.clone(), t.extend(!0, e, nn()), i.options(e), Ut(), ur(), C.prop("disabled") && i.disable(), C.is("input") && C.val().trim().length !== 0 ? We(ft(C.val().trim())) : e.defaultDate && C.attr("placeholder") === void 0 && We(e.defaultDate), e.inline && ae(), i
    };
    return t.fn.datetimepicker = function (o) {
        o = o || {};
        var e = Array.prototype.slice.call(arguments, 1), i = !0, f = ["destroy", "hide", "show", "toggle"], h;
        if (typeof o == "object") return this.each(function () {
            var y = t(this), C;
            y.data("DateTimePicker") || (C = t.extend(!0, {}, t.fn.datetimepicker.defaults, o), y.data("DateTimePicker", a(y, C)))
        });
        if (typeof o == "string") return this.each(function () {
            var y = t(this), C = y.data("DateTimePicker");
            if (!C) throw new Error('bootstrap-datetimepicker("' + o + '") method was called on an element that is not using DateTimePicker');
            h = C[o].apply(C, e), i = h === C
        }), i || t.inArray(o, f) > -1 ? this : h;
        throw new TypeError("Invalid arguments for DateTimePicker: " + o)
    }, t.fn.datetimepicker.defaults = {
        timeZone: "",
        format: !1,
        dayViewHeaderFormat: "MMMM YYYY",
        extraFormats: !1,
        stepping: 1,
        minDate: !1,
        maxDate: !1,
        useCurrent: !0,
        collapse: !0,
        locale: n.locale(),
        defaultDate: !1,
        disabledDates: !1,
        enabledDates: !1,
        icons: {
            time: "glyphicon glyphicon-time",
            date: "glyphicon glyphicon-calendar",
            up: "glyphicon glyphicon-chevron-up",
            down: "glyphicon glyphicon-chevron-down",
            previous: "glyphicon glyphicon-chevron-left",
            next: "glyphicon glyphicon-chevron-right",
            today: "glyphicon glyphicon-screenshot",
            clear: "glyphicon glyphicon-trash",
            close: "glyphicon glyphicon-remove"
        },
        tooltips: {
            today: "Go to today",
            clear: "Clear selection",
            close: "Close the picker",
            selectMonth: "Select Month",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            selectYear: "Select Year",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            selectDecade: "Select Decade",
            prevDecade: "Previous Decade",
            nextDecade: "Next Decade",
            prevCentury: "Previous Century",
            nextCentury: "Next Century",
            pickHour: "Pick Hour",
            incrementHour: "Increment Hour",
            decrementHour: "Decrement Hour",
            pickMinute: "Pick Minute",
            incrementMinute: "Increment Minute",
            decrementMinute: "Decrement Minute",
            pickSecond: "Pick Second",
            incrementSecond: "Increment Second",
            decrementSecond: "Decrement Second",
            togglePeriod: "Toggle Period",
            selectTime: "Select Time"
        },
        useStrict: !1,
        sideBySide: !1,
        daysOfWeekDisabled: !1,
        calendarWeeks: !1,
        viewMode: "days",
        toolbarPlacement: "default",
        showTodayButton: !1,
        showClear: !1,
        showClose: !1,
        widgetPositioning: {horizontal: "auto", vertical: "auto"},
        widgetParent: null,
        ignoreReadonly: !1,
        keepOpen: !1,
        focusOnShow: !0,
        inline: !1,
        keepInvalid: !1,
        datepickerInput: ".datepickerinput",
        keyBinds: {
            up: function (o) {
                if (o) {
                    var e = this.date() || this.getMoment();
                    o.find(".datepicker").is(":visible") ? this.date(e.clone().subtract(7, "d")) : this.date(e.clone().add(this.stepping(), "m"))
                }
            }, down: function (o) {
                if (!o) {
                    this.show();
                    return
                }
                var e = this.date() || this.getMoment();
                o.find(".datepicker").is(":visible") ? this.date(e.clone().add(7, "d")) : this.date(e.clone().subtract(this.stepping(), "m"))
            }, "control up": function (o) {
                if (o) {
                    var e = this.date() || this.getMoment();
                    o.find(".datepicker").is(":visible") ? this.date(e.clone().subtract(1, "y")) : this.date(e.clone().add(1, "h"))
                }
            }, "control down": function (o) {
                if (o) {
                    var e = this.date() || this.getMoment();
                    o.find(".datepicker").is(":visible") ? this.date(e.clone().add(1, "y")) : this.date(e.clone().subtract(1, "h"))
                }
            }, left: function (o) {
                if (o) {
                    var e = this.date() || this.getMoment();
                    o.find(".datepicker").is(":visible") && this.date(e.clone().subtract(1, "d"))
                }
            }, right: function (o) {
                if (o) {
                    var e = this.date() || this.getMoment();
                    o.find(".datepicker").is(":visible") && this.date(e.clone().add(1, "d"))
                }
            }, pageUp: function (o) {
                if (o) {
                    var e = this.date() || this.getMoment();
                    o.find(".datepicker").is(":visible") && this.date(e.clone().subtract(1, "M"))
                }
            }, pageDown: function (o) {
                if (o) {
                    var e = this.date() || this.getMoment();
                    o.find(".datepicker").is(":visible") && this.date(e.clone().add(1, "M"))
                }
            }, enter: function () {
                this.hide()
            }, escape: function () {
                this.hide()
            }, "control space": function (o) {
                o && o.find(".timepicker").is(":visible") && o.find('.btn[data-action="togglePeriod"]').click()
            }, t: function () {
                this.date(this.getMoment())
            }, delete: function () {
                this.clear()
            }
        },
        debug: !1,
        allowInputToggle: !1,
        disabledTimeIntervals: !1,
        disabledHours: !1,
        enabledHours: !1,
        viewDate: !1
    }, t.fn.datetimepicker
});
var Zu = {exports: {}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT Â© Zeno Rocha
 */
(function (t, n) {
    (function (o, e) {
        t.exports = e()
    })(ol, function () {
        return function () {
            var a = {
                686: function (i, f, h) {
                    h.d(f, {
                        default: function () {
                            return bt
                        }
                    });
                    var y = h(279), C = h.n(y), R = h(370), Y = h.n(R), $ = h(817), Ce = h.n($);

                    function K(we) {
                        try {
                            return document.execCommand(we)
                        } catch {
                            return !1
                        }
                    }

                    var re = function (oe) {
                        var ce = Ce()(oe);
                        return K("cut"), ce
                    }, me = re;

                    function de(we) {
                        var oe = document.documentElement.getAttribute("dir") === "rtl",
                            ce = document.createElement("textarea");
                        ce.style.fontSize = "12pt", ce.style.border = "0", ce.style.padding = "0", ce.style.margin = "0", ce.style.position = "absolute", ce.style[oe ? "right" : "left"] = "-9999px";
                        var Ee = window.pageYOffset || document.documentElement.scrollTop;
                        return ce.style.top = "".concat(Ee, "px"), ce.setAttribute("readonly", ""), ce.value = we, ce
                    }

                    var te = function (oe, ce) {
                        var Ee = de(oe);
                        ce.container.appendChild(Ee);
                        var ke = Ce()(Ee);
                        return K("copy"), Ee.remove(), ke
                    }, St = function (oe) {
                        var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {container: document.body},
                            Ee = "";
                        return typeof oe == "string" ? Ee = te(oe, ce) : oe instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(oe?.type) ? Ee = te(oe.value, ce) : (Ee = Ce()(oe), K("copy")), Ee
                    }, Dt = St;

                    function Ot(we) {
                        "@babel/helpers - typeof";
                        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ot = function (ce) {
                            return typeof ce
                        } : Ot = function (ce) {
                            return ce && typeof Symbol == "function" && ce.constructor === Symbol && ce !== Symbol.prototype ? "symbol" : typeof ce
                        }, Ot(we)
                    }

                    var pn = function () {
                        var oe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ce = oe.action,
                            Ee = ce === void 0 ? "copy" : ce, ke = oe.container, Re = oe.target, Le = oe.text;
                        if (Ee !== "copy" && Ee !== "cut") throw new Error('Invalid "action" value, use either "copy" or "cut"');
                        if (Re !== void 0) if (Re && Ot(Re) === "object" && Re.nodeType === 1) {
                            if (Ee === "copy" && Re.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if (Ee === "cut" && (Re.hasAttribute("readonly") || Re.hasAttribute("disabled"))) throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)
                        } else throw new Error('Invalid "target" value, use a valid Element');
                        if (Le) return Dt(Le, {container: ke});
                        if (Re) return Ee === "cut" ? me(Re) : Dt(Re, {container: ke})
                    }, c = pn;

                    function Lt(we) {
                        "@babel/helpers - typeof";
                        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Lt = function (ce) {
                            return typeof ce
                        } : Lt = function (ce) {
                            return ce && typeof Symbol == "function" && ce.constructor === Symbol && ce !== Symbol.prototype ? "symbol" : typeof ce
                        }, Lt(we)
                    }

                    function Ae(we, oe) {
                        if (!(we instanceof oe)) throw new TypeError("Cannot call a class as a function")
                    }

                    function Ve(we, oe) {
                        for (var ce = 0; ce < oe.length; ce++) {
                            var Ee = oe[ce];
                            Ee.enumerable = Ee.enumerable || !1, Ee.configurable = !0, "value" in Ee && (Ee.writable = !0), Object.defineProperty(we, Ee.key, Ee)
                        }
                    }

                    function Tt(we, oe, ce) {
                        return oe && Ve(we.prototype, oe), ce && Ve(we, ce), we
                    }

                    function Xt(we, oe) {
                        if (typeof oe != "function" && oe !== null) throw new TypeError("Super expression must either be null or a function");
                        we.prototype = Object.create(oe && oe.prototype, {
                            constructor: {
                                value: we,
                                writable: !0,
                                configurable: !0
                            }
                        }), oe && Ye(we, oe)
                    }

                    function Ye(we, oe) {
                        return Ye = Object.setPrototypeOf || function (Ee, ke) {
                            return Ee.__proto__ = ke, Ee
                        }, Ye(we, oe)
                    }

                    function gn(we) {
                        var oe = ct();
                        return function () {
                            var Ee = nn(we), ke;
                            if (oe) {
                                var Re = nn(this).constructor;
                                ke = Reflect.construct(Ee, arguments, Re)
                            } else ke = Ee.apply(this, arguments);
                            return zn(this, ke)
                        }
                    }

                    function zn(we, oe) {
                        return oe && (Lt(oe) === "object" || typeof oe == "function") ? oe : Zt(we)
                    }

                    function Zt(we) {
                        if (we === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return we
                    }

                    function ct() {
                        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                        if (typeof Proxy == "function") return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                            })), !0
                        } catch {
                            return !1
                        }
                    }

                    function nn(we) {
                        return nn = Object.setPrototypeOf ? Object.getPrototypeOf : function (ce) {
                            return ce.__proto__ || Object.getPrototypeOf(ce)
                        }, nn(we)
                    }

                    function ht(we, oe) {
                        var ce = "data-clipboard-".concat(we);
                        if (oe.hasAttribute(ce)) return oe.getAttribute(ce)
                    }

                    var gt = function (we) {
                        Xt(ce, we);
                        var oe = gn(ce);

                        function ce(Ee, ke) {
                            var Re;
                            return Ae(this, ce), Re = oe.call(this), Re.resolveOptions(ke), Re.listenClick(Ee), Re
                        }

                        return Tt(ce, [{
                            key: "resolveOptions", value: function () {
                                var ke = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                this.action = typeof ke.action == "function" ? ke.action : this.defaultAction, this.target = typeof ke.target == "function" ? ke.target : this.defaultTarget, this.text = typeof ke.text == "function" ? ke.text : this.defaultText, this.container = Lt(ke.container) === "object" ? ke.container : document.body
                            }
                        }, {
                            key: "listenClick", value: function (ke) {
                                var Re = this;
                                this.listener = Y()(ke, "click", function (Le) {
                                    return Re.onClick(Le)
                                })
                            }
                        }, {
                            key: "onClick", value: function (ke) {
                                var Re = ke.delegateTarget || ke.currentTarget, Le = this.action(Re) || "copy", $t = c({
                                    action: Le,
                                    container: this.container,
                                    target: this.target(Re),
                                    text: this.text(Re)
                                });
                                this.emit($t ? "success" : "error", {
                                    action: Le,
                                    text: $t,
                                    trigger: Re,
                                    clearSelection: function () {
                                        Re && Re.focus(), window.getSelection().removeAllRanges()
                                    }
                                })
                            }
                        }, {
                            key: "defaultAction", value: function (ke) {
                                return ht("action", ke)
                            }
                        }, {
                            key: "defaultTarget", value: function (ke) {
                                var Re = ht("target", ke);
                                if (Re) return document.querySelector(Re)
                            }
                        }, {
                            key: "defaultText", value: function (ke) {
                                return ht("text", ke)
                            }
                        }, {
                            key: "destroy", value: function () {
                                this.listener.destroy()
                            }
                        }], [{
                            key: "copy", value: function (ke) {
                                var Re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {container: document.body};
                                return Dt(ke, Re)
                            }
                        }, {
                            key: "cut", value: function (ke) {
                                return me(ke)
                            }
                        }, {
                            key: "isSupported", value: function () {
                                var ke = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"],
                                    Re = typeof ke == "string" ? [ke] : ke, Le = !!document.queryCommandSupported;
                                return Re.forEach(function ($t) {
                                    Le = Le && !!document.queryCommandSupported($t)
                                }), Le
                            }
                        }]), ce
                    }(C()), bt = gt
                }, 828: function (i) {
                    var f = 9;
                    if (typeof Element < "u" && !Element.prototype.matches) {
                        var h = Element.prototype;
                        h.matches = h.matchesSelector || h.mozMatchesSelector || h.msMatchesSelector || h.oMatchesSelector || h.webkitMatchesSelector
                    }

                    function y(C, R) {
                        for (; C && C.nodeType !== f;) {
                            if (typeof C.matches == "function" && C.matches(R)) return C;
                            C = C.parentNode
                        }
                    }

                    i.exports = y
                }, 438: function (i, f, h) {
                    var y = h(828);

                    function C($, Ce, K, re, me) {
                        var de = Y.apply(this, arguments);
                        return $.addEventListener(K, de, me), {
                            destroy: function () {
                                $.removeEventListener(K, de, me)
                            }
                        }
                    }

                    function R($, Ce, K, re, me) {
                        return typeof $.addEventListener == "function" ? C.apply(null, arguments) : typeof K == "function" ? C.bind(null, document).apply(null, arguments) : (typeof $ == "string" && ($ = document.querySelectorAll($)), Array.prototype.map.call($, function (de) {
                            return C(de, Ce, K, re, me)
                        }))
                    }

                    function Y($, Ce, K, re) {
                        return function (me) {
                            me.delegateTarget = y(me.target, Ce), me.delegateTarget && re.call($, me)
                        }
                    }

                    i.exports = R
                }, 879: function (i, f) {
                    f.node = function (h) {
                        return h !== void 0 && h instanceof HTMLElement && h.nodeType === 1
                    }, f.nodeList = function (h) {
                        var y = Object.prototype.toString.call(h);
                        return h !== void 0 && (y === "[object NodeList]" || y === "[object HTMLCollection]") && "length" in h && (h.length === 0 || f.node(h[0]))
                    }, f.string = function (h) {
                        return typeof h == "string" || h instanceof String
                    }, f.fn = function (h) {
                        var y = Object.prototype.toString.call(h);
                        return y === "[object Function]"
                    }
                }, 370: function (i, f, h) {
                    var y = h(879), C = h(438);

                    function R(K, re, me) {
                        if (!K && !re && !me) throw new Error("Missing required arguments");
                        if (!y.string(re)) throw new TypeError("Second argument must be a String");
                        if (!y.fn(me)) throw new TypeError("Third argument must be a Function");
                        if (y.node(K)) return Y(K, re, me);
                        if (y.nodeList(K)) return $(K, re, me);
                        if (y.string(K)) return Ce(K, re, me);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                    }

                    function Y(K, re, me) {
                        return K.addEventListener(re, me), {
                            destroy: function () {
                                K.removeEventListener(re, me)
                            }
                        }
                    }

                    function $(K, re, me) {
                        return Array.prototype.forEach.call(K, function (de) {
                            de.addEventListener(re, me)
                        }), {
                            destroy: function () {
                                Array.prototype.forEach.call(K, function (de) {
                                    de.removeEventListener(re, me)
                                })
                            }
                        }
                    }

                    function Ce(K, re, me) {
                        return C(document.body, K, re, me)
                    }

                    i.exports = R
                }, 817: function (i) {
                    function f(h) {
                        var y;
                        if (h.nodeName === "SELECT") h.focus(), y = h.value; else if (h.nodeName === "INPUT" || h.nodeName === "TEXTAREA") {
                            var C = h.hasAttribute("readonly");
                            C || h.setAttribute("readonly", ""), h.select(), h.setSelectionRange(0, h.value.length), C || h.removeAttribute("readonly"), y = h.value
                        } else {
                            h.hasAttribute("contenteditable") && h.focus();
                            var R = window.getSelection(), Y = document.createRange();
                            Y.selectNodeContents(h), R.removeAllRanges(), R.addRange(Y), y = R.toString()
                        }
                        return y
                    }

                    i.exports = f
                }, 279: function (i) {
                    function f() {
                    }

                    f.prototype = {
                        on: function (h, y, C) {
                            var R = this.e || (this.e = {});
                            return (R[h] || (R[h] = [])).push({fn: y, ctx: C}), this
                        }, once: function (h, y, C) {
                            var R = this;

                            function Y() {
                                R.off(h, Y), y.apply(C, arguments)
                            }

                            return Y._ = y, this.on(h, Y, C)
                        }, emit: function (h) {
                            var y = [].slice.call(arguments, 1), C = ((this.e || (this.e = {}))[h] || []).slice(),
                                R = 0, Y = C.length;
                            for (R; R < Y; R++) C[R].fn.apply(C[R].ctx, y);
                            return this
                        }, off: function (h, y) {
                            var C = this.e || (this.e = {}), R = C[h], Y = [];
                            if (R && y) for (var $ = 0, Ce = R.length; $ < Ce; $++) R[$].fn !== y && R[$].fn._ !== y && Y.push(R[$]);
                            return Y.length ? C[h] = Y : delete C[h], this
                        }
                    }, i.exports = f, i.exports.TinyEmitter = f
                }
            }, o = {};

            function e(i) {
                if (o[i]) return o[i].exports;
                var f = o[i] = {exports: {}};
                return a[i](f, f.exports, e), f.exports
            }

            return function () {
                e.n = function (i) {
                    var f = i && i.__esModule ? function () {
                        return i.default
                    } : function () {
                        return i
                    };
                    return e.d(f, {a: f}), f
                }
            }(), function () {
                e.d = function (i, f) {
                    for (var h in f) e.o(f, h) && !e.o(i, h) && Object.defineProperty(i, h, {enumerable: !0, get: f[h]})
                }
            }(), function () {
                e.o = function (i, f) {
                    return Object.prototype.hasOwnProperty.call(i, f)
                }
            }(), e(686)
        }().default
    })
})(Zu);
var hv = Zu.exports;
const pv = ll(hv);
ot(document).ready(() => {
    ot('div[data-slider="1"]').each(function (t) {
        const n = ot(this).data("slider-options").replace(/'/g, '"'), a = JSON.parse(n);
        a && ot(this).slick(a)
    })
});
ot(document).ready(() => {
    ot('[data-toggle="tooltip"]').tooltip()
});
const gv = new pv("[data-clip]");
gv.on("success", t => {
    ot(t.trigger).tooltip("show"), setTimeout(() => {
        ot(t.trigger).tooltip("dispose")
    }, 500)
});
document.addEventListener("DOMContentLoaded", function (t) {
    ot(document).on("click", ".btn-view-service-description", function () {
        var n = ot(this).data("target");
        ot(this).data("min"), ot(this).data("max");
        var a = ot(this).data("service-name");
        ot(this).data("service-id");
        var o = ot(this).data("content-id"), e = ot(n).find(".service-description-content"), i = ot(o).html();
        e.length && ot(e).html("<h3>" + a + "</h3><div>" + i + "</div>"), ot(document).on("hidden.bs.modal", function (f) {
            ot(".service-description-content").html(" ")
        })
    })
});
ot(document).ready(function () {
    ot(".video-frame").hover(() => {
        ot(this).find(".video-frame__poster").fadeOut(), ot(this).find(".video-frame__poster").remove()
    })
});
window._ = js;