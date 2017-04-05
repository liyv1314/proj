(function (g) {
    var window = this;
    var e8 = function (a, b) {
        return g.aa[a] = b
    }, isa = function (a, b) {
        var c = new g.xp;
        c.o = a.o;
        c.D = a.D;
        c.C = a.C;
        c.B = a.B;
        c.isDefault = !1;
        c.G = a.G;
        c.F = a.F;
        c.H = a.H;
        c.g = b;
        return c
    }, f8 = function (a) {
        return a.g ? a.g.languageCode : a.o
    }, g8 = function (a) {
        var b = {
            format: a.A,
            languageCode: a.o,
            languageName: a.D,
            displayName: g.yp(a),
            kind: a.B,
            name: a.C,
            id: a.Fa,
            is_servable: a.O,
            is_default: a.isDefault,
            is_translateable: a.G,
            vss_id: a.F
        };
        a.g && (a = a.g, b.translationLanguage = {
            languageCode: a.languageCode,
            languageName: a.languageName,
            languageOriginal: a.g,
            id: a.id,
            is_default: a.isDefault
        });
        return b
    }, h8 = function (a, b, c, d, e) {
        g.zm.call(this, a, a + b, {
            priority: c,
            namespace: "captions"
        });
        this.id = d;
        this.params = e;
        this.Tj = []
    }, i8 = function (a, b, c, d, e, f, k) {
        g.zm.call(this, a, a + b, {
            priority: c,
            namespace: "captions"
        });
        this.windowId = d;
        this.text = e;
        this.C = f || !1;
        this.o = k || null
    }, jsa = function (a, b, c, d, e, f, k, l) {
        switch (f.tagName) {
            case "b":
                k.bold = !0;
                break;
            case "i":
                k.Go = !0;
                break;
            case "u":
                k.sp = !0;
                break;
            case "font":
                var m = f.getAttribute("color");
                j8.test(m);
                k.color = m
        }
        for (m = 0; m < f.childNodes.length; m++) {
            var n = f.childNodes[m];
            if (3 == n.nodeType) l.push(new i8(a, b, c, d, n.nodeValue, e || 0 < m, g.Sb(k) ? void 0 : k)); else {
                var q = {};
                g.wa(q, k);
                jsa(a, b, c, d, e || 0 < m, n, q, l)
            }
        }
    }, k8 = function (a) {
        var b = "_" + ksa++;
        return new h8(0, 0x8000000000000, 0, b, a || {})
    }, lsa = function (a, b, c) {
        var d = a.getAttribute("t"), d = d ? (0, window.parseInt)(d, 10) : 1E3 * (0, window.parseFloat)(a.getAttribute("start") || 0), e = a.getAttribute("d"), e = e ? (0, window.parseFloat)(e) : 1E3 * (0, window.parseFloat)(a.getAttribute("dur") || 0);
        b = a.getAttribute("w") || b;
        var f = !!a.getAttribute("append"), k = f ? 6 : 5;
        a = g.Qv("<html>" + (a.firstChild && a.firstChild.nodeValue || "") + "</html>");
        jsa(d, e, k, b, f, a.firstChild, {}, c)
    }, l8 = function () {
    }, msa = function (a, b) {
        for (var c in a)if (!(c in b) || a[c] !== b[c])return !1;
        for (c in b)if (!(c in a))return !1;
        return !0
    }, m8 = function () {
        this.Aa = []
    }, n8 = function () {
        this.g = null
    }, nsa = function (a, b, c, d, e, f, k, l, m) {
        switch (k.tagName) {
            case "b":
                l.bold = !0;
                break;
            case "i":
                l.Go = !0;
                break;
            case "u":
                l.sp = !0
        }
        for (var n = 0; n < k.childNodes.length; n++) {
            var q = k.childNodes[n];
            if (3 == q.nodeType) q = new i8(b, c, d, e.id, q.nodeValue, f || 0 < n, g.Sb(l) ? void 0 : l), m.push(q), e != a.g && e.Tj.push(q); else {
                var t = {};
                g.wa(t, l);
                nsa(a, b, c, d, e, !0, q, t, m)
            }
        }
    }, o8 = function (a) {
        a = a.split(":");
        for (var b = 0, c = 0; c < a.length; c++)b = 60 * b + (0, window.parseFloat)(a[c]);
        return 1E3 * b
    }, osa = function () {
        this.A = [];
        this.g = [];
        this.o = -1
    }, p8 = function (a, b) {
        return b ? a.g.concat(a.A) : a.g
    }, q8 = function (a, b) {
        switch (b.B) {
            case "asr":
                psa(b, a.A);
                break;
            default:
                if (b.isDefault || 0 > a.o) a.o = a.g.length;
                psa(b, a.g)
        }
    }, psa = function (a, b) {
        g.Wa(b, (0, g.z)(a.J, a)) || b.push(a)
    }, qsa = function (a, b) {
        var c = g.Va(a.g, (0, g.z)(b.J, b));
        -1 != c && (a.o = c)
    }, r8 = function (a) {
        this.g = {};
        this.B = {};
        this.C = {};
        this.A = a
    }, s8 = function (a, b) {
        var c = a.getAttribute(b);
        if (null != c)return (0, window.parseFloat)(c)
    }, t8 = function (a, b) {
        var c = a.getAttribute(b);
        if (null != c)return "1" == c
    }, u8 = function (a, b) {
        var c = s8(a, b);
        if (void 0 != c)return c
    }, v8 = function (a, b) {
        var c = a.getAttribute(b);
        if (null != c)return j8.test(c), c
    }, rsa = function (a, b) {
        var c = {}, d = b.getAttribute("ws");
        g.wa(c, d ? a.C[d] : a.A);
        d = u8(b, "mh");
        null != d && (c.Ko = d);
        d = u8(b, "ju");
        null != d && (c.textAlign = d);
        d = u8(b, "pd");
        null != d && (c.Eh = d);
        d = v8(b, "wfc");
        null != d && (c.windowColor = d);
        d = s8(b, "wfo");
        void 0 != d && (c.Ih = d / 255);
        return c
    }, ssa = function (a, b) {
        var c = {}, d = b.getAttribute("wp");
        d && g.wa(c, a.B[d]);
        d = u8(b, "ap");
        null != d && (c.dg = d);
        d = s8(b, "cc");
        null != d && (c.Gs = d);
        d = s8(b, "ah");
        null != d && (c.oh = d);
        d = s8(b, "rc");
        null != d && (c.Yi = d);
        d = s8(b, "av");
        null != d && (c.Fh = d);
        return c
    }, tsa = function (a, b, c) {
        var d = {};
        g.wa(d, ssa(a, b));
        g.wa(d, rsa(a, b));
        c ? (c = "_" + ksa++, msa(d, a.A) && (d = a.A)) : c = b.getAttribute("id") || "0";
        a = s8(b, "t");
        b = s8(b, "d") || 0x8000000000000;
        return new h8(a, b, 0, c, d)
    }, w8 = function () {
        this.A = {};
        this.g = null
    }, x8 = function (a) {
        this.A = a;
        this.g = null
    }, y8 = function (a) {
        if (!usa.test(a))throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(vsa, "#$1$1$2$2$3$3"));
        a = a.toLowerCase();
        return [(0, window.parseInt)(a.substr(1, 2), 16), (0, window.parseInt)(a.substr(3, 2), 16), (0, window.parseInt)(a.substr(5, 2), 16)]
    }, z8 = function (a, b, c, d) {
        g.H.call(this);
        this.H = b;
        this.C = new m8;
        this.g = null;
        this.G = d;
        this.o = this.A = null;
        this.L = c;
        this.D = new g.Kd(this.F, 1E3, this);
        g.J(this, this.D);
        b.addEventListener("seekto", this.B, this);
        this.B(b.getCurrentTime());
        this.F()
    }, A8 = function (a) {
        this.xu = !!a;
        this.g = new osa;
        this.D = [];
        this.A = null
    }, xsa = function (a) {
        var b = {};
        if (a = f8(a)) b.lang = a, wsa.test(a) && (b.Eh = 1);
        return b
    }, ysa = function (a, b) {
        return g.Wa(p8(a.g, !0), function (a) {
            return a.toString() == b
        })
    }, B8 = function (a, b, c, d, e, f) {
        this.C = [];
        this.H = !1;
        this.A = a;
        this.F = [];
        this.G = [];
        this.xa = e;
        this.va = f;
        this.D = null;
        this.V = .96 * e;
        this.la = .96 * f;
        this.o = {};
        g.wa(this.o, b);
        g.wa(this.o, this.A.params);
        g.wa(this.o, c);
        e = {};
        g.wa(e, b.ab);
        this.A.params.ab && g.wa(e, this.A.params.ab);
        g.wa(e, c.ab);
        this.o.ab = e;
        this.oa = c;
        g.V.call(this, {
            K: "div",
            Z: "caption-window",
            Y: {
                id: "caption-window-" + a.id,
                dir: 1 == this.o.Eh ? "rtl" : "ltr",
                tabindex: 0,
                "aria-live": "assertive",
                lang: this.o.lang
            },
            T: [{K: "span", Z: "captions-text"}]
        });
        this.B = this.ua["captions-text"];
        this.ga = null != this.B.style["box-decoration-break"] ||
            null != this.B.style["-webkit-box-decoration-break"];
        this.J = d / 360 * 16;
        this.type = 0;
        this.ca = this.J * zsa(e);
        a = new g.jz(this.element, !0);
        g.J(this, a);
        a.subscribe("dragstart", this.uN, this);
        a.subscribe("dragmove", this.tN, this);
        a.subscribe("dragend", this.sN, this);
        this.da = this.ba = 0;
        a = "";
        this.o.Ih && (a = y8(this.o.windowColor), a = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + this.o.Ih + ")");
        b = {
            "background-color": a,
            display: !1 === this.o.isVisible ? "none" : "",
            "text-align": Asa[this.o.textAlign]
        };
        this.ga && (b["border-radius"] = a ? this.ca /
            8 + "px" : "");
        g.Uj(this.element, b);
        switch (this.o.dg) {
            case 0:
            case 1:
            case 2:
                g.N(this.element, "ytp-caption-window-top");
                break;
            case 6:
            case 7:
            case 8:
                g.N(this.element, "ytp-caption-window-bottom")
        }
    }, zsa = function (a) {
        var b = 1 + .25 * (a.Ug || 0);
        if (0 == a.offset || 2 == a.offset) b *= .8;
        return b
    }, C8 = function (a, b) {
        var c = {};
        if (null != b.ae || b.background) {
            var d = null != b.ae ? b.ae : a.o.ab.ae, e = y8(b.background ? b.background : a.o.ab.background);
            c.background = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")";
            a.ga && (c["box-decoration-break"] = "clone", c["border-radius"] = a.ca / 8 + "px")
        }
        if (null != b.Ug || null != b.offset) c["font-size"] = a.J * zsa(b) + "px";
        e = 1;
        if (b.color || null != b.Uf) d = y8(b.color || a.o.ab.color), e = null == b.Uf ? a.o.ab.Uf : b.Uf, d = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")", c.color = d, c.fill = d;
        if (null != b.hf && 0 != b.hf) {
            var d = "rgba(34, 34, 34, " + e + ")", f =
                "rgba(204, 204, 204, " + e + ")";
            b.ws && (f = d = b.ws);
            var k = a.J / 16 / 2, l = Math.max(k, 1), m = Math.max(2 * k, 1), e = Math.max(3 * k, 1), n = Math.max(5 * k, 1), q = [];
            switch (b.hf) {
                case 4:
                    for (l = e; l <= n; l += k)q.push(m + "px " + m + "px " + l + "px " + d);
                    break;
                case 1:
                    for (k = 2 <= window.devicePixelRatio ? .5 : 1; l <= e; l += k)q.push(l + "px " + l + "px " + d);
                    break;
                case 2:
                    q.push(l + "px " + l + "px " + f);
                    q.push(-l + "px " + -l + "px " + d);
                    break;
                case 3:
                    for (l = 0; 5 > l; l++)q.push("0 0 " + m + "px " + d)
            }
            c["text-shadow"] = q.join(", ")
        }
        d = "";
        switch (b.fontFamily) {
            case 1:
                d = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
                break;
            case 2:
                d = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
                break;
            case 3:
                d = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
                break;
            case 5:
                d = '"Comic Sans MS", Impact, Handlee, fantasy';
                break;
            case 6:
                d = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
                break;
            case 7:
                d = g.si() ? '"Carrois Gothic SC", sans-serif-smallcaps' : '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
                break;
            case 0:
            case 4:
                d =
                    'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
        }
        d && (c["font-family"] = d);
        d = b.offset;
        null == d && (d = a.o.ab.offset);
        switch (d) {
            case 0:
                c["vertical-align"] = "sub";
                break;
            case 2:
                c["vertical-align"] = "super"
        }
        7 == b.fontFamily && (c["font-variant"] = "small-caps");
        b.bold && (c["font-weight"] = "bold");
        b.Go && (c["font-style"] = "italic");
        b.sp && (c["text-decoration"] = "underline");
        b.ao && (c.visibility = "hidden");
        return c
    }, Bsa = function (a) {
        for (var b = 1, c = 0; c < a.length; c++) {
            var d = a[c];
            g.y(d.text) && (b += d.text.split("\n").length - 1, d.C || 0 == c || b++)
        }
        return b
    }, Csa = function (a, b, c) {
        a.H = a.H || !!c;
        var d = {};
        g.wa(d, a.o.ab);
        g.wa(d, c || b.o);
        g.wa(d, a.oa.ab);
        var e = a.F[0], f;
        if (e && d.background == e.background && d.ae == e.ae && !!d.ao == !!e.ao && d.hf == e.hf) {
            for (c = 0; c < a.F.length; c++)if (msa(d, a.F[c])) {
                f = a.G[c];
                break
            }
            if (!f) {
                c = {};
                for (var k in d)d[k] != e[k] && (c[k] = d[k]);
                f = g.Oe("SPAN");
                g.Uj(f, C8(a, c));
                a.G[0].appendChild(f);
                c = 1
            }
            a.G.length = c;
            a.F.length = c
        } else a.G.length = 0, a.F.length = 0, f = g.Oe("SPAN"), g.Uj(f, C8(a, d)), a.B.appendChild(f);
        a.D && a.D.parentNode != f && (g.Ve(a.D), f.appendChild(a.D));
        e = (k = g.y(b.text)) ? b.text.split("\n") :
            [b.text];
        for (c = 0; c < e.length; c++) {
            var l = e[c];
            if (0 < c || 0 == a.C.length || !b.C) {
                if (0 < c || 0 != a.C.length) {
                    var m = g.Oe("BR");
                    f.appendChild(m)
                }
                f.appendChild(g.Pe("\u00a0"));
                a.D = g.Pe("\u00a0");
                f.appendChild(a.D)
            }
            l && (m = a.D, m.parentNode && m.parentNode.insertBefore(k ? g.Pe(l) : l, m))
        }
        a.F.push(d);
        a.G.push(f);
        a.C.push(b)
    }, D8 = function (a, b, c, d) {
        A8.call(this, d);
        c = c || g.Jh(a).hl || "";
        c = c.split("_").join("-");
        this.B = g.Lh(a, {hl: c});
        this.C = b;
        this.F = {};
        this.o = null
    }, E8 = function (a, b, c, d, e, f) {
        B8.call(this, a, b, c, d, e, f);
        g.N(this.element, "ytp-caption-window-rollup");
        this.type = 2;
        this.L = this.$ = 0;
        this.fa = window.NaN;
        this.P = null;
        this.N = new g.Kd(this.sa, 433, this);
        g.J(this, this.N)
    }, F8 = function (a) {
        if (!a.L) {
            var b = g.Oe("SPAN");
            g.Uj(b, C8(a, a.o.ab));
            a.B.appendChild(b);
            b.appendChild(g.Pe("M"));
            var c = b.offsetHeight, d = g.Oe("BR");
            b.appendChild(d);
            b.appendChild(g.Pe("M"));
            a.L = b.offsetHeight - c;
            a.B.removeChild(b)
        }
        return a.L
    }, G8 = function (a, b, c, d, e, f) {
        B8.call(this, a, b, c, d, e, f);
        this.type = 1
    }, H8 = function (a, b) {
        A8.call(this);
        this.B = a;
        this.X = b;
        this.o = null
    }, I8 = function (a) {
        A8.call(this, a.hc);
        this.o = null;
        this.C = void 0;
        this.B = null;
        this.D = a.captionTranslationLanguages
    }, Dsa = function (a) {
        for (var b in a)delete a[b]
    }, M8 = function (a) {
        g.iu.call(this, a);
        g.hz();
        this.W = g.U(a);
        this.A = a.getVideoData();
        this.ba = g.Xl(a);
        this.X = a;
        var b = null, c = g.Uh("yt-html5-player-modules::subtitlesModuleData");
        c && (b = new g.Vh(c));
        this.P = b;
        this.C = {ab: {}};
        this.D = {ab: {}};
        this.H = [];
        this.G = {};
        this.O = {};
        this.L = !1;
        this.fa = "1" == this.A.C.cc_auto_caps || "1" == this.W.O.cc_auto_caps;
        c = b = this.B = this.o = this.F = this.J = this.$ = null;
        J8(this) || (b = new g.Kd(this.ax, 0, this), g.J(this, b), c = new g.Kd(this.aK, 2E3, this), g.J(this, c));
        this.V = b;
        this.da = c;
        this.N = new g.Pn(this);
        g.J(this, this.N);
        J8(this) ||
        this.N.U(a, "resize", this.up);
        this.N.U(a, "onPlaybackAudioChange", this.$F);
        this.N.U(a, "crn_captions", this.ZM, this);
        this.N.U(a, "crx_captions", this.$M, this);
        K8(this, L8(this, "display-settings") || {});
        Esa(this) && this.load()
    }, J8 = function (a) {
        return "3" != a.W.B ? !1 : !!a.X.app.F.Cl()
    }, Fsa = function (a) {
        var b;
        a.A.captionTracks.length && (b = a.g.Kh().ms);
        if (3 == b || 1 == a.W.sa || 1 == a.A.Lr || "alwayson" == a.A.He("yt:cc"))return !0;
        if (2 == a.W.sa) {
            var c = L8(a, "module-enabled");
            if (null != c)return !!c
        }
        return 2 == b || "on" == a.A.He("yt:cc")
    }, Esa = function (a) {
        return J8(a) ? !a.A.o : a.A.captionTracks.length && a.g.Kh().qk ? !0 : Fsa(a)
    }, Gsa = function (a, b) {
        var c = null;
        if (a.o) {
            c = a.o.xt();
            !c && b && (c = p8(a.o.g, !0)[0]);
            if (!c && (b || a.fa)) {
                var d = a.o.g.A;
                d.length && (c = ysa(a.o, d[0].toString()))
            }
            c || (c = a.o.uk())
        }
        return c
    }, N8 = function (a, b, c, d) {
        a.loaded && a.unload();
        null != c && (a.L = c);
        a.B = b;
        a.load(d)
    }, K8 = function (a, b, c) {
        var d = O8.ab;
        a.C = {};
        g.wa(a.C, O8);
        a.C.ab = {};
        g.wa(a.C.ab, d);
        a.D = {ab: {}};
        var e = b.backgroundOverride ? a.D : a.C, f = b.background || d.background;
        j8.test(f);
        e.ab.background = f;
        e = b.colorOverride ? a.D : a.C;
        f = b.color || d.color;
        j8.test(f);
        e.ab.color = f;
        e = b.windowColorOverride ? a.D : a.C;
        f = b.windowColor || O8.windowColor;
        j8.test(f);
        e.windowColor = f;
        e = b.backgroundOpacityOverride ? a.D : a.C;
        f = b.backgroundOpacity;
        null == f && (f = d.ae);
        e.ab.ae = f;
        e = b.fontSizeIncrementOverride ? a.D : a.C;
        f = b.fontSizeIncrement;
        null == f && (f = d.Ug);
        e.ab.Ug = f;
        e = b.textOpacityOverride ?
            a.D : a.C;
        f = b.textOpacity;
        null == f && (f = d.Uf);
        e.ab.Uf = f;
        e = b.windowOpacityOverride ? a.D : a.C;
        f = b.windowOpacity;
        null == f && (f = O8.Ih);
        e.Ih = f;
        e = b.charEdgeStyleOverride ? a.D : a.C;
        f = b.charEdgeStyle;
        null == f && (f = d.hf);
        e.ab.hf = f;
        e = b.fontFamilyOverride ? a.D : a.C;
        f = b.fontFamily;
        null == f && (f = d.fontFamily);
        e.ab.fontFamily = f;
        a.loaded && a.up();
        c && P8(a, "display-settings", b)
    }, Isa = function (a, b) {
        if (b && !a.F) {
            var c = k8({
                Eh: 0,
                lang: "zh-CN"
            });
            a.F = [c, new i8(c.start, c.end - c.start, 0, c.id, g.P("YTP_SAMPLE_SUBTITLES"))];
            g.mm(a.g, a.F)
        } else!b && a.F && (Hsa(a, a.F), a.F = null)
    }, Hsa = function (a, b) {
        g.om(a.g, b);
        (0, g.F)(b, function (a) {
            g.fb(this.H, a)
        }, a);
        a.V.re()
    }, Jsa = function (a, b) {
        return a && g.y(a) && j8.test(a) ? a : b
    }, Ksa = function (a, b) {
        return g.qa(a) && !(0, window.isNaN)(a) ? Math.max(0, Math.min(1, (0, window.parseFloat)(a))) : b
    }, Msa = function (a, b) {
        if (a && g.y(a)) {
            var c = Lsa.indexOf(a);
            return -1 != c ? c : b
        }
        return b
    }, Osa = function (a, b) {
        if (a && g.y(a)) {
            var c = Nsa.indexOf(a);
            return -1 != c ? c : b
        }
        return b
    }, Psa = function (a, b) {
        return g.qa(a) && !(0, window.isNaN)(a) ? g.ne(a, -2, 4) : b
    }, L8 = function (a, b) {
        if (!a.P)return null;
        var c;
        try {
            c = a.P.get(b)
        } catch (d) {
            a.P.remove(b)
        }
        return c
    }, P8 = function (a, b, c) {
        if (a.P)try {
            a.P.set(b, c)
        } catch (d) {
        }
    };
    g.xp.prototype.J = e8(4, function (a) {
        return a ? this.toString() == a.toString() : !1
    });
    g.Mn.prototype.Cl = e8(3, function () {
        return !!this.g.textTracks
    });
    g.zZ.prototype.Cl = e8(2, function () {
        return !1
    });
    g.Mn.prototype.Wj = e8(1, function (a) {
        for (var b = 0; b < a.length; b++)this.g.appendChild(a[b])
    });
    g.zZ.prototype.Wj = e8(0, function () {
    });
    var ksa = 0;
    g.B(h8, g.zm);
    g.B(i8, g.zm);
    var j8 = /^#(?:[0-9a-f]{3}){1,2}$/i, usa = /^#(?:[0-9a-f]{3}){1,2}$/i, vsa = /#(.)(.)(.)/, Qsa = /<((?:[\d]{2}:)?[\d]{2}:[\d]{2}\.[\d]{3})>/, Rsa = /(?:\r\n|\r|\n){2,}/, Ssa = /^NOTE/, Tsa = 0, wsa = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    m8.prototype.contains = function (a) {
        a = g.tb(this.Aa, a);
        return 0 <= a || 0 > a && 1 == (-a - 1) % 2
    };
    m8.prototype.length = function () {
        return this.Aa.length / 2
    };
    g.B(n8, l8);
    n8.prototype.o = function (a, b) {
        for (var c = [], d = a.split(Rsa), e = 1; e < d.length; e++) {
            var f = d[e], k = b, l = c;
            if ("" != f && !Ssa.test(f)) {
                var m = g.A3.exec(f);
                if (m && 3 <= m.length) {
                    var n = o8(m[1]), m = o8(m[2]) - n, f = f.substring(g.A3.lastIndex);
                    g.A3.lastIndex = 0;
                    var k = n + k, n = m, q = f, m = {};
                    this.g || (this.g = k8({Ko: 0}), l.push(this.g));
                    var t = this.g, f = 5;
                    if (0 > q.indexOf("<")) l.push(new i8(k, n, f, t.id, q, !1, g.Sb(m) ? void 0 : m)); else {
                        q = q.split(Qsa);
                        1 != q.length && (f = 6, t = "_" + Tsa++, t = new h8(k, n, f, t, {}), l.push(t));
                        for (var v = k, x = 0; x < q.length; x++) {
                            var A = q[x];
                            if (0 == x % 2) {
                                var G = g.Qv("<html>" + A + "</html>"), I;
                                G.getElementsByTagName("parsererror").length ? (I = G.createElement("span"), I.appendChild(G.createTextNode(A))) : I = G.firstChild;
                                nsa(this, v, n - (v - k), f, t, 0 < x, I, m, l)
                            } else v = o8(A)
                        }
                    }
                }
                g.A3.lastIndex = 0
            }
        }
        return c
    };
    g.B(r8, l8);
    r8.prototype.o = function (a) {
        a.firstChild.getAttribute("format");
        var b, c;
        a = a.firstChild.childNodes;
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            switch (e.tagName) {
                case "head":
                    b = e;
                    break;
                case "body":
                    c = e
            }
        }
        if (b)for (b = b.childNodes, a = 0; a < b.length; a++) {
            var f = b[a];
            switch (f.tagName) {
                case "pen":
                    var e = f.getAttribute("id"), d = this.g, k = f, f = {}, l = k.getAttribute("p");
                    l && g.wa(f, this.g[l]);
                    l = t8(k, "b");
                    null != l && (f.bold = l);
                    l = t8(k, "i");
                    null != l && (f.Go = l);
                    l = t8(k, "u");
                    null != l && (f.sp = l);
                    l = u8(k, "et");
                    null != l && (f.hf = l);
                    l = u8(k, "of");
                    null != l && (f.offset = l);
                    l = v8(k, "bc");
                    null != l && (f.background = l);
                    l = v8(k, "ec");
                    null != l && (f.ws = l);
                    l = v8(k, "fc");
                    null != l && (f.color = l);
                    l = u8(k, "fs");
                    void 0 != l && 0 != l && (f.fontFamily = l);
                    l = s8(k, "sz");
                    void 0 != l && (f.Ug = l / 100 - 1);
                    l = s8(k, "bo");
                    void 0 != l && (f.ae = l / 255);
                    k = s8(k, "fo");
                    void 0 != k && (f.Uf = k / 255);
                    d[e] = f;
                    break;
                case "ws":
                    d = f.getAttribute("id");
                    this.C[d] = rsa(this, f);
                    break;
                case "wp":
                    d = f.getAttribute("id"), this.B[d] = ssa(this, f)
            }
        }
        b = [];
        if (c)for (a = {}, c = c.childNodes, d = void 0, e = 0; e < c.length; e++)switch (f = c[e], f.tagName) {
            case "w":
                k =
                    tsa(this, f, !1);
                if (f = a[k.id]) f.end = k.start;
                a[k.id] = k;
                b.push(k);
                break;
            case "p":
                var m = f, n = d, k = [], l = s8(m, "t") || 0, q = s8(m, "d") || 0, t = m.getAttribute("w") || "0", v = !!t8(m, "a");
                n && "\n" == n.text && !v && (v = !0);
                for (var n = v ? 6 : 5, x = this.g[m.getAttribute("p")], m = m.childNodes, A = 0; A < m.length; A++) {
                    var G = m[A];
                    0 < A && (v = !0);
                    if ("s" == G.tagName)var I = G, G = l, K = q, $a = t, sb = v, nb = n, Id = I.textContent ? I.textContent : "", Rb = this.g[I.getAttribute("p")], I = s8(I, "t") || 0, G = new i8(G + I, K - I, nb, $a, Id, sb, Rb); else G = new i8(l, q, n, t, G.textContent || "", v,
                        x);
                    k.push(G)
                }
                l = k;
                if (0 < l.length)for (d = l[l.length - 1], k = a[l[0].windowId], k || (k = tsa(this, f, !0), b.push(k)), f = 0; f < l.length; f++)q = l[f], l[f].windowId = k.id, k.Tj.push(q), b.push(q)
        }
        return b
    };
    g.B(w8, l8);
    w8.prototype.o = function (a) {
        var b = [];
        this.g || (this.g = k8(), this.A[this.g.id] = this.g, b.push(this.g));
        for (a = a.firstChild.firstChild; a;) {
            switch (a.tagName) {
                case "window":
                    var c = a, d = b, e = c.getAttribute("id");
                    a:{
                        var f = c, k = this.A[e];
                        if (f.getAttribute("t") || f.getAttribute("start")) {
                            c = f.getAttribute("start") ? 1E3 * (0, window.parseFloat)(f.getAttribute("start")) : (0, window.parseInt)(f.getAttribute("t"), 10);
                            k && (k.end >= c ? k.end = c : k = null);
                            switch (f.getAttribute("op")) {
                                case "kill":
                                    c = null;
                                    break a;
                                case "define":
                                    k = null
                            }
                            k ||
                            (k = k8());
                            var l = {};
                            k && (g.wa(l, k.params), k = k.params.ab) && (l.ab = {}, g.wa(l.ab, k));
                            f.getAttribute("rc") && (l.Yi = (0, window.parseInt)(f.getAttribute("rc"), 10));
                            f.getAttribute("cc") && (l.Gs = (0, window.parseInt)(f.getAttribute("cc"), 10));
                            f.getAttribute("ap") && (k = (0, window.parseInt)(f.getAttribute("ap"), 10), l.dg = 0 > k || 8 < k ? 7 : k);
                            f.getAttribute("ah") && (l.oh = (0, window.parseInt)(f.getAttribute("ah"), 10));
                            f.getAttribute("av") && (l.Fh = (0, window.parseInt)(f.getAttribute("av"), 10));
                            f.getAttribute("vs") && (l.isVisible = !!f.getAttribute("vs"));
                            f.getAttribute("ju") && (l.textAlign = (0, window.parseInt)(f.getAttribute("ju"), 10));
                            f.getAttribute("pd") && (l.Eh = 1, 0 == (0, window.parseInt)(f.getAttribute("pd"), 10) && (l.Eh = 0));
                            f.getAttribute("bc") && (l.ab || (l.ab = {}), l.ab.backgroundColor = f.getAttribute("bc"));
                            f.getAttribute("bo") && (l.ab || (l.ab = {}), l.ab.ae = (0, window.parseInt)(f.getAttribute("bo"), 10) / 100);
                            f.getAttribute("fc") && (l.ab || (l.ab = {}), l.ab.color = f.getAttribute("fc"));
                            f.getAttribute("sd") && (l.FK = (0, window.parseInt)(f.getAttribute("sd"), 10));
                            k = (0, window.parseInt)(f.getAttribute("d"),
                                    10) || 1E3 * (0, window.parseFloat)(f.getAttribute("dur")) || 0x8000000000000;
                            f = f.getAttribute("id") || "0";
                            c = new h8(c, k, 0, f, l)
                        } else c = null
                    }
                    this.A[e] = c;
                    d.push(c);
                    break;
                case "text":
                    for (d = b, e = [], lsa(a, this.g.id, e), c = 0; c < e.length; c++)l = e[c], this.A[l.windowId] && d.push(l)
            }
            a = a.nextSibling
        }
        return b
    };
    g.B(x8, l8);
    x8.prototype.o = function (a) {
        var b = [];
        this.g || (this.g = k8(this.A), b.push(this.g));
        a = a.firstChild.childNodes;
        for (var c = 0, d = a.length; c < d; c++)lsa(a[c], this.g.id, b);
        return b
    };
    var Asa = ["left", "right", "center"], Usa = {ao: !0};
    g.B(z8, g.H);
    z8.prototype.R = function () {
        z8.M.R.call(this);
        this.H.removeEventListener("seekto", this.B, this);
        this.o && this.o.abort()
    };
    z8.prototype.B = function (a) {
        this.g = g.Ua(this.L.ti(a).g)
    };
    z8.prototype.F = function () {
        this.isDisposed();
        var a;
        if (a = null !== this.g) a = this.g, a = a.g.Yp(a);
        if (a && !this.o && !(this.g && 30 < this.g.startTime - this.H.getCurrentTime())) {
            a = this.g;
            a = a.g.dm(a);
            if (!this.C.contains(a.g[0].o)) {
                var b = g.Cn(g.Eo(a));
                this.o = g.Oi(b, {format: "RAW", gd: (0, g.z)(this.J, this), withCredentials: !0});
                this.A = a;
                var b = this.C, c = this.A.g[0].o, d = g.tb(b.Aa, c);
                0 <= d || 0 > d && 1 == (-d - 1) % 2 || (d = -d - 1, 0 < d && 1 == c - b.Aa[d - 1] && d < b.Aa.length && 1 == b.Aa[d] - c ? (g.eb(b.Aa, d), g.eb(b.Aa, d - 1)) : 0 < d && 1 == c - b.Aa[d - 1] ? b.Aa[d - 1] = c :
                        d < b.Aa.length && 1 == b.Aa[d] - c ? b.Aa[d] = c : (g.ob(b.Aa, d, 0, c), g.ob(b.Aa, d + 1, 0, c)))
            }
            this.g = g.Ua(a.g)
        }
        this.D.start()
    };
    z8.prototype.J = function (a) {
        this.isDisposed();
        null == a.responseText || 400 <= a.status || null === this.G || this.G(a.responseText, 1E3 * this.A.g[0].startTime);
        this.o = this.A = null
    };
    g.B(A8, g.H);
    A8.prototype.xt = function (a) {
        var b = this.g.o, c = p8(this.g, !0);
        a && 0 > b && 0 < c.length && (b = 0);
        return 0 > b ? null : c[b]
    };
    A8.prototype.uk = function () {
        return null
    };
    A8.prototype.jd = function () {
        this.A = null
    };
    A8.prototype.R = function () {
        A8.M.R.call(this);
        this.jd()
    };
    g.B(B8, g.V);
    g.h = B8.prototype;
    g.h.uN = function (a, b) {
        var c = g.jk(this.element, this.element.parentElement);
        this.ba = a - c.x;
        this.da = b - c.y;
        g.N(this.element, "ytp-dragging")
    };
    g.h.tN = function (a, b) {
        var c = g.mk(this.element), d = a - this.ba - .02 * this.xa, e = b - this.da - .02 * this.va, f = (d + c.width / 2) / this.V * 3, f = Math.floor(g.ne(f, 0, 2)), k = (e + c.height / 2) / this.la * 3, k = Math.floor(g.ne(k, 0, 2)), l = f + 3 * k, d = (d + f / 2 * c.width) / this.V, d = 100 * g.ne(d, 0, 1), c = (e + k / 2 * c.height) / this.la, c = 100 * g.ne(c, 0, 1);
        this.A.params.dg = l;
        this.A.params.Fh = c;
        this.A.params.oh = d;
        this.o.dg = l;
        this.o.Fh = c;
        this.o.oh = d;
        this.Bh(this.C)
    };
    g.h.sN = function () {
        g.jh(this.element, "ytp-dragging")
    };
    g.h.Pb = function () {
        return this.type
    };
    g.h.Bh = function (a) {
        var b = Math.min(this.At(), this.V), c = this.zt();
        g.Uj(this.element, {
            top: 0,
            left: 0,
            right: "",
            bottom: "",
            width: b ? b + "px" : "96%",
            height: c ? c + "px" : "96%",
            margin: "",
            transform: ""
        });
        this.Zm(a);
        a = {transform: "", top: "", left: ""};
        b || (a.width = "");
        c || (a.height = "");
        var d = .96 * this.o.oh + 2, e = this.o.dg;
        switch (e) {
            case 0:
            case 3:
            case 6:
                a.left = d + "%";
                break;
            case 1:
            case 4:
            case 7:
                a.left = d + "%";
                d = this.B.offsetWidth;
                b || d ? (b = b || d + 1, a.width = b + "px", a["margin-left"] = b / -2 + "px") : a.transform += " translateX(-50%)";
                break;
            case 2:
            case 5:
            case 8:
                a.right =
                    100 - d + "%"
        }
        b = .96 * this.o.Fh + 2;
        switch (e) {
            case 0:
            case 1:
            case 2:
                a.top = b + "%";
                break;
            case 3:
            case 4:
            case 5:
                a.top = b + "%";
                (c = c || this.B.offsetHeight) ? (a.height = c + "px", a["margin-top"] = c / -2 + "px") : a.transform += " translateY(-50%)";
                break;
            case 6:
            case 7:
            case 8:
                a.bottom = 100 - b + "%"
        }
        g.Uj(this.element, a)
    };
    g.h.Zm = function (a) {
        for (var b = 0; b < a.length && a[b] == this.C[b]; b++);
        if (this.H || this.C.length > b) b = 0, this.H = !1, this.C = [], this.F = [], this.G = [], this.D = null, g.Se(this.B);
        for (; b < a.length; b++)Csa(this, a[b])
    };
    g.h.At = function () {
        return 0
    };
    g.h.zt = function () {
        return 0
    };
    g.h.toString = function () {
        return B8.M.toString.call(this)
    };
    g.B(D8, A8);
    g.h = D8.prototype;
    g.h.Ho = function (a, b) {
        this.isDisposed();
        var c = this.wi(a), d = (0, g.z)(function (c) {
            this.o = null;
            b(c.responseText, a)
        }, this);
        this.jd();
        this.o = g.Oi(c, {format: "RAW", Eb: d, withCredentials: !0});
        qsa(this.g, a)
    };
    g.h.Io = function (a, b, c) {
        var d = this.B;
        b = {type: "list", tlangs: 1, v: this.C, fmts: Number(b || !1), vssids: 1};
        this.xu && (b.asrs = 1);
        d = g.Lh(d, b);
        b = (0, g.z)(function (b) {
            this.o = null;
            if ((b = b.responseXML) && b.firstChild) {
                for (var d = this.g, e = b.getElementsByTagName("track"), l = e.length, m = 0; m < l; m++) {
                    var n = e[m].getAttribute("formats"), q = c, t = e[m].getAttribute("lang_code"), v = e[m].getAttribute("lang_translated"), x = e[m].getAttribute("name"), A = e[m].getAttribute("kind"), G = e[m].getAttribute("id"), I = "true" == e[m].getAttribute("lang_default"),
                        K = "true" == e[m].getAttribute("cantran"), $a = e[m].getAttribute("vss_id");
                    q8(d, new g.xp({
                        formats: n,
                        format: q,
                        languageCode: t,
                        languageName: v,
                        name: x,
                        kind: A,
                        id: G,
                        is_servable: !0,
                        is_default: I,
                        is_translateable: K,
                        vss_id: $a
                    }))
                }
                b = b.getElementsByTagName("target");
                d = b.length;
                for (e = 0; e < d; e++)l = b[e].getAttribute("lang_code"), m = b[e].getAttribute("lang_translated"), n = b[e].getAttribute("lang_original"), q = b[e].getAttribute("id"), t = "true" == b[e].getAttribute("lang_default"), l = {
                    languageCode: l, languageName: m, languageOriginal: n,
                    id: q, is_default: t
                }, this.F[l.languageCode] = l.languageName, this.D.push(new g.wp(l))
            }
            a()
        }, this);
        this.jd();
        this.o = g.Oi(d, {format: "RAW", Eb: b, withCredentials: !0})
    };
    g.h.wi = function (a) {
        var b = this.B, c = {v: this.C, type: "track", lang: a.o, name: a.getName(), kind: a.B, fmt: a.A};
        a.g && (c.tlang = f8(a));
        return b = g.Lh(b, c)
    };
    g.h.jd = function () {
        D8.M.jd.call(this);
        this.o && this.o.abort()
    };
    g.h.R = function () {
        this.jd();
        D8.M.R.call(this)
    };
    g.B(E8, B8);
    E8.prototype.sa = function () {
        g.jh(this.element, "ytp-rollup-mode");
        var a = this.P;
        this.P = null;
        this.Bh(a)
    };
    E8.prototype.At = function () {
        var a = this.A.params.Gs;
        if (!this.$ && a) {
            var b = g.Oe("SPAN");
            g.df(b, "\u00a0" + (0, g.Ia)("\u2014", a) + "\u00a0");
            g.Uj(b, C8(this, this.o.ab));
            this.B.appendChild(b);
            this.$ = b.offsetWidth;
            this.B.removeChild(b)
        }
        return this.$
    };
    E8.prototype.zt = function () {
        return this.A.params.Yi * F8(this)
    };
    E8.prototype.Bh = function (a) {
        if (F8(this)) {
            for (var b = 0, c = 0; b < this.C.length && c < a.length; b++)this.C[b] == a[c] && c++;
            var d = Bsa(a), e = !1, b = 0;
            if (0 < c && c < a.length) {
                var c = this.C.concat(a.slice(c)), f = Bsa(c) - d;
                0 < f && (this.P = a, a = c, b -= f, e = !0)
            }
            d < this.A.params.Yi && (b += this.A.params.Yi - d);
            e && !this.N.isActive() && (g.N(this.element, "ytp-rollup-mode"), this.N.start());
            b != this.fa && (d = "", b && (d = "translateY(" + Math.ceil(b * F8(this)) + "px)"), g.Uj(this.B, "transform", d), this.fa = b);
            E8.M.Bh.call(this, a)
        } else E8.M.Bh.call(this, a)
    };
    g.B(G8, B8);
    G8.prototype.Zm = function (a) {
        var b = this.A.Tj;
        G8.M.Zm.call(this, a);
        var c, d;
        for (a = a.length; a < b.length; a++) {
            var e = b[a], f;
            d && e.o == c ? f = d : (f = {}, g.wa(f, e.o), g.wa(f, Usa), c = e.o, d = f);
            Csa(this, e, f)
        }
    };
    g.B(H8, A8);
    g.h = H8.prototype;
    g.h.Ho = function (a, b) {
        this.jd();
        var c = this.B.g[a.o];
        c && (this.o = new z8(0, this.X, c, function (c, e) {
            b(c, a, e)
        }))
    };
    g.h.Io = function (a) {
        q8(this.g, new g.xp({
            format: 1,
            languageCode: "en",
            languageName: "English",
            name: "",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1
        }));
        a()
    };
    g.h.jd = function () {
        H8.M.jd.call(this);
        this.o && (this.o.dispose(), this.o = null)
    };
    g.h.wi = function () {
        return ""
    };
    g.h.R = function () {
        this.jd();
        H8.M.R.call(this)
    };
    g.B(I8, A8);
    g.h = I8.prototype;
    g.h.Ho = function (a, b) {
        this.isDisposed();
        var c = this.wi(a), d = (0, g.z)(function (c) {
            this.B = null;
            b(c.responseText, a)
        }, this);
        this.jd();
        this.B = g.Oi(c, {format: "RAW", Eb: d, withCredentials: !0});
        this.o && this.o.qk != a && (this.o.vn = a)
    };
    g.h.Io = function (a, b, c, d) {
        this.C = c;
        if (this.o = d || null)for (b = 0; b < this.o.captionTracks.length; b++)q8(this.g, this.o.captionTracks[b]);
        a()
    };
    g.h.wi = function (a) {
        var b = a.H, c = {};
        if (this.C || a.A) c.fmt = this.C || "srv" + a.A;
        a.g && (c.tlang = a.g.languageCode);
        return g.Lh(b, c)
    };
    g.h.uk = function () {
        return this.o ? this.o.qk : null
    };
    g.h.xt = function () {
        return this.o ? this.o.vn : null
    };
    g.h.jd = function () {
        I8.M.jd.call(this);
        this.B && this.B.abort()
    };
    g.h.R = function () {
        this.jd();
        I8.M.R.call(this)
    };
    var O8 = {
        windowColor: "#080808",
        Ih: 0,
        textAlign: 2,
        dg: 7,
        oh: 50,
        Fh: 100,
        ab: {background: "#080808", ae: .75, hf: 0, color: "#fff", fontFamily: 4, Ug: 0, Uf: 1, offset: 1}
    }, Lsa = ["none", "raised", "depressed", "uniform", "dropShadow"], Nsa = "default monoSerif propSerif monoSans propSans casual cursive smallCaps".split(" ");
    g.B(M8, g.iu);
    g.h = M8.prototype;
    g.h.R = function () {
        J8(this) || Isa(this, !1);
        M8.M.R.call(this)
    };
    g.h.load = function (a) {
        M8.M.load.call(this);
        if (this.o || a) this.B ? (a ? this.Uv(a, this.B) : 3 != this.g.Xa() && this.o.Ho(this.B, (0, g.z)(this.Uv, this)), this.g.ya("captionschanged", g8(this.B))) : this.g.ya("onCaptionsTrackListChanged"); else {
            var b;
            this.A.o ? b = new H8(this.A.g, this.g) : this.A.captionTracks.length ? b = new I8(this.A) : b = new D8(this.A.jc, this.A.videoId, this.A.Jr || this.W.zc || this.A.He("yt:cc_default_lang") || this.W.Ta, this.A.hc);
            this.o = b;
            b.Io((0, g.z)(this.aJ, this), !0, J8(this) ? "vtt" : void 0, this.g.Kh())
        }
    };
    g.h.unload = function () {
        if (J8(this))for (var a = g.Ce("track", void 0, this.ba.o), b = 0; b < a.length; b++)g.Ve(a[b]); else g.Md(this.da), g.pm(this.g, "captions"), this.H = [], this.o && this.o.jd(), this.F && g.mm(this.g, this.F), this.up();
        M8.M.unload.call(this);
        (a = g.Vl(this.g.app)) && g.fV(a);
        this.g.ya("captionschanged", {})
    };
    g.h.aJ = function () {
        var a;
        if (this.L || Fsa(this)) a = Gsa(this, this.L);
        if (J8(this))for (var b = p8(this.o.g, !0), c = 0; c < b.length; c++) {
            var d = b[c], e = {kind: "subtitles", label: g.yp(d), srclang: f8(d), src: this.o.wi(d)};
            d == a && (e["default"] = 1);
            this.X.app.F.Wj([g.M("TRACK", e)])
        } else!this.B && a && N8(this, a), this.g.ya("onCaptionsTrackListChanged"), this.g.ya("onApiChange")
    };
    g.h.JK = function () {
        this.loaded && !J8(this) && this.unload()
    };
    g.h.Uv = function (a, b, c) {
        if (a) {
            var d;
            d = this.o;
            c = c || 0;
            "WEBVTT" == a.substring(0, 6) ? (d.A || (d.A = new n8), d = d.A.o(a, c)) : (a = g.Qv(a)) && a.firstChild ? (d.A || ("timedtext" == a.firstChild.tagName ? 3 == (0, window.parseInt)(a.firstChild.getAttribute("format"), 10) ? d.A = new r8(xsa(b)) : d.A = new w8 : d.A = new x8(xsa(b))), d = d.A.o(a, c)) : d = [];
            a = {trackName: b.getName(), trackKind: b.B, trackLangCode: f8(b)};
            b.g && (a.fromLangCode = b.o);
            g.dm(this.g, "cc", a);
            if (this.B != this.o.uk()) {
                if (this.L && !g.ao(this.W) && !g.Ps(this.W)) {
                    g.Md(this.da);
                    b = k8({
                        dg: 0,
                        oh: 5, Fh: 5, Yi: 2, textAlign: 0, Eh: 0, lang: "zh-CN"
                    });
                    this.J = [b];
                    a = g.P("YTP_CLICK_FOR_SETTINGS").split("$GEAR_ICON");
                    this.$ || (c = new g.ku(g.Qg()), g.J(this, c), this.$ = c.element);
                    c = b.end - b.start;
                    var e = g.yp(this.B);
                    e && this.J.push(new i8(b.start, c, 0, b.id, e));
                    this.J.push(new i8(b.start, c, 0, b.id, a[0]), new i8(b.start, c, 0, b.id, this.$, !0), new i8(b.start, c, 0, b.id, a[1], !0));
                    g.mm(this.g, this.J);
                    this.da.re()
                }
                (this.L || g.ao(this.W)) && P8(this, "module-enabled", !0);
                (b = g.Vl(this.g.app)) && g.fV(b)
            }
            g.mm(this.g, d);
            this.L = !1
        }
    };
    g.h.ZM = function (a) {
        this.H.push(a);
        this.V.re()
    };
    g.h.$M = function (a) {
        g.fb(this.H, a);
        this.V.re()
    };
    g.h.SJ = function (a) {
        if (a instanceof h8) {
            var b = this.G[a.id];
            b && b.A != a && (b.dispose(), delete this.G[a.id], b = null);
            if (!b) {
                var b = this.G, c = a.id;
                a:{
                    var d = this.ba.Ua(), e = g.dZ(this.ba, !0).height;
                    switch (null != a.params.Ko ? a.params.Ko : a.params.FK ? 2 : 1 < a.Tj.length ? 1 : 0) {
                        case 1:
                            a = new G8(a, this.C, this.D, e, d.width, d.height);
                            break a;
                        case 2:
                            a = new E8(a, this.C, this.D, e, d.width, d.height);
                            break a;
                        default:
                            a = new B8(a, this.C, this.D, e, d.width, d.height)
                    }
                }
                b[c] = a
            }
        } else b = a.windowId, this.O[b] || (this.O[b] = []), this.O[b].push(a)
    };
    g.h.aK = function () {
        Hsa(this, this.J);
        this.J = null
    };
    g.h.ax = function () {
        this.V.stop();
        Dsa(this.O);
        this.H.sort(g.Am);
        (0, g.F)(this.H, this.SJ, this);
        g.Fb(this.G, function (a, b) {
            !this.O[b] || this.F && -1 == this.F.indexOf(a.A) ? (a.dispose(), delete this.G[b]) : (a.element.parentNode || g.sm(this.g, a.element, 5), a.Bh(this.O[b]))
        }, this)
    };
    g.h.ow = function () {
        K8(this, {}, !0)
    };
    g.h.Nn = function () {
        var a = O8.ab, a = {
            background: a.background,
            backgroundOpacity: a.ae,
            charEdgeStyle: a.hf,
            color: a.color,
            fontFamily: a.fontFamily,
            fontSizeIncrement: a.Ug,
            textOpacity: a.Uf,
            windowColor: O8.windowColor,
            windowOpacity: O8.Ih
        }, b = L8(this, "display-settings"), c;
        for (c in b)null != b[c] && (a[c] = b[c]);
        return a
    };
    g.h.xp = function (a, b) {
        var c = {};
        g.wa(c, L8(this, "display-settings"));
        g.wa(c, a);
        K8(this, c, b);
        this.g.Ra("captionssettingschanged")
    };
    g.h.up = function () {
        !J8(this) && this.loaded && (g.Fb(this.G, function (a, b) {
            a.dispose();
            delete this.G[b]
        }, this), this.ax())
    };
    g.h.uy = function (a, b) {
        switch (a) {
            case "fontSize":
                if ((0, window.isNaN)(b))break;
                var c = g.ne(b, -2, 4);
                this.xp({fontSizeIncrement: c});
                return c;
            case "reload":
                b && !J8(this) && N8(this, this.B, !0);
                break;
            case "stickyLoading":
                void 0 != b && this.W.ob && P8(this, "module-enabled", !!b);
                break;
            case "track":
                if (!this.o)return {};
                if (b) {
                    if (J8(this))break;
                    if (!g.sa(b))break;
                    if (g.Sb(b)) {
                        N8(this, null, !0);
                        break
                    }
                    for (var d, e = p8(this.o.g, !0), c = 0; c < e.length; c++) {
                        var f = e[c];
                        f.o != b.languageCode || d && f.D != b.languageName || (d = b.translationLanguage ?
                            isa(f, b.translationLanguage) : f)
                    }
                    !d || d == this.B && this.loaded || N8(this, d, !0)
                } else return this.loaded && this.B && this.B != this.o.uk() ? g8(this.B) : {};
                return "";
            case "tracklist":
                return this.o ? (0, g.Q)(p8(this.o.g, b && b.includeAsr), function (a) {
                        return g8(a)
                    }) : [];
            case "translationLanguages":
                return this.o ? this.o.D : [];
            case "displaySettings":
                d = this.Nn();
                if (g.ao(this.W) && b && g.sa(b))if (b.reset) this.ow(); else {
                    f = {};
                    for (c in b)switch (c) {
                        case "color":
                        case "background":
                        case "windowColor":
                            f[c] = Jsa(b[c], d[c]);
                            break;
                        case "textOpacity":
                        case "backgroundOpacity":
                        case "windowOpacity":
                            f[c] = Ksa(b[c], d[c]);
                            break;
                        case "charEdgeStyle":
                            f[c] = Msa(b[c], d[c]);
                            break;
                        case "fontSizeIncrement":
                            f[c] = Psa(b[c], d[c]);
                            break;
                        case "fontFamilyOption":
                            f.fontFamily = Osa(b[c], d[c])
                    }
                    for (e in f)f[e +
                    "Override"] = !0;
                    this.xp(f, !0);
                    d = this.Nn()
                }
                d.fontFamilyOption = Nsa[d.fontFamily];
                d.charEdgeStyle = Lsa[d.charEdgeStyle];
                return d;
            case "sampleSubtitles":
                J8(this) || void 0 == b || Isa(this, !!b);
                break;
            case "xmlTrack":
                b && this.W.ob && !J8(this) && N8(this, new g.xp({languageName: b.name}), !1, b.xml)
        }
    };
    g.h.XM = function () {
        var a = "reload fontSize track tracklist translationLanguages displaySettings sampleSubtitle".split(" ");
        this.W.ob && a.push("stickyLoading", "xmlTrack");
        return a
    };
    g.h.YM = function () {
        var a = this.B;
        return a ? {cc: a.F} : {}
    };
    g.h.Zw = function () {
        this.loaded && this.B ? (P8(this, "module-enabled", !1), this.unload()) : N8(this, this.B || Gsa(this, !0), !0)
    };
    g.h.$F = function () {
        this.A.captionTracks.length && (this.loaded && this.unload(), Esa(this) && this.load())
    };
    window._exportCheck == g.xa && g.ka("ytmod.player.captions", M8, void 0);
})(_yt_player);
