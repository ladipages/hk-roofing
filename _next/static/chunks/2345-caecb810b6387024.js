"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2345],
  {
    92345: function (t, e, o) {
      var n = o(67294),
        r = o(73935);
      function i() {
        return (
          (i =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
              }
              return t;
            }),
          i.apply(this, arguments)
        );
      }
      var a = "undefined" !== typeof window ? n.useLayoutEffect : n.useEffect,
        u = {
          popupContent: {
            tooltip: { position: "absolute", zIndex: 999 },
            modal: { position: "relative", margin: "auto" },
          },
          popupArrow: {
            height: "8px",
            width: "16px",
            position: "absolute",
            background: "transparent",
            color: "#FFF",
            zIndex: -1,
          },
          overlay: {
            tooltip: {
              position: "fixed",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              zIndex: 999,
            },
            modal: {
              position: "fixed",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              display: "flex",
              zIndex: 999,
            },
          },
        },
        l = [
          "top left",
          "top center",
          "top right",
          "right top",
          "right center",
          "right bottom",
          "bottom left",
          "bottom center",
          "bottom right",
          "left top",
          "left center",
          "left bottom",
        ],
        c = function (t, e, o, n, r) {
          var i = r.offsetX,
            a = r.offsetY,
            u = n ? 8 : 0,
            l = o.split(" "),
            c = t.top + t.height / 2,
            f = t.left + t.width / 2,
            s = e.height,
            d = e.width,
            p = c - s / 2,
            v = f - d / 2,
            m = "",
            h = "0%",
            y = "0%";
          switch (l[0]) {
            case "top":
              (p -= s / 2 + t.height / 2 + u),
                (m = "rotate(180deg)  translateX(50%)"),
                (h = "100%"),
                (y = "50%");
              break;
            case "bottom":
              (p += s / 2 + t.height / 2 + u),
                (m = "rotate(0deg) translateY(-100%) translateX(-50%)"),
                (y = "50%");
              break;
            case "left":
              (v -= d / 2 + t.width / 2 + u),
                (m = " rotate(90deg)  translateY(50%) translateX(-25%)"),
                (y = "100%"),
                (h = "50%");
              break;
            case "right":
              (v += d / 2 + t.width / 2 + u),
                (m = "rotate(-90deg)  translateY(-150%) translateX(25%)"),
                (h = "50%");
          }
          switch (l[1]) {
            case "top":
              (p = t.top), (h = t.height / 2 + "px");
              break;
            case "bottom":
              (p = t.top - s + t.height), (h = s - t.height / 2 + "px");
              break;
            case "left":
              (v = t.left), (y = t.width / 2 + "px");
              break;
            case "right":
              (v = t.left - d + t.width), (y = d - t.width / 2 + "px");
          }
          return {
            top: (p = "top" === l[0] ? p - a : p + a),
            left: (v = "left" === l[0] ? v - i : v + i),
            transform: m,
            arrowLeft: y,
            arrowTop: h,
          };
        },
        f = function (t, e, o, n, r, i) {
          var a = r.offsetX,
            u = r.offsetY,
            f = {
              arrowLeft: "0%",
              arrowTop: "0%",
              left: 0,
              top: 0,
              transform: "rotate(135deg)",
            },
            s = 0,
            d = (function (t) {
              var e = {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              };
              if ("string" === typeof t) {
                var o = document.querySelector(t);
                null !== o && (e = o.getBoundingClientRect());
              }
              return e;
            })(i),
            p = Array.isArray(o) ? o : [o];
          for (
            (i || Array.isArray(o)) && (p = [].concat(p, l));
            s < p.length;

          ) {
            var v = {
              top: (f = c(t, e, p[s], n, { offsetX: a, offsetY: u })).top,
              left: f.left,
              width: e.width,
              height: e.height,
            };
            if (
              !(
                v.top <= d.top ||
                v.left <= d.left ||
                v.top + v.height >= d.top + d.height ||
                v.left + v.width >= d.left + d.width
              )
            )
              break;
            s++;
          }
          return f;
        },
        s = 0,
        d = (0, n.forwardRef)(function (t, e) {
          var o = t.trigger,
            l = void 0 === o ? null : o,
            c = t.onOpen,
            d = void 0 === c ? function () {} : c,
            p = t.onClose,
            v = void 0 === p ? function () {} : p,
            m = t.defaultOpen,
            h = void 0 !== m && m,
            y = t.open,
            g = void 0 === y ? void 0 : y,
            w = t.disabled,
            b = void 0 !== w && w,
            E = t.nested,
            k = void 0 !== E && E,
            x = t.closeOnDocumentClick,
            C = void 0 === x || x,
            L = t.repositionOnResize,
            A = void 0 === L || L,
            T = t.closeOnEscape,
            O = void 0 === T || T,
            R = t.on,
            S = void 0 === R ? ["click"] : R,
            X = t.contentStyle,
            Y = void 0 === X ? {} : X,
            z = t.arrowStyle,
            B = void 0 === z ? {} : z,
            I = t.overlayStyle,
            N = void 0 === I ? {} : I,
            D = t.className,
            P = void 0 === D ? "" : D,
            j = t.position,
            M = void 0 === j ? "bottom center" : j,
            F = t.modal,
            _ = void 0 !== F && F,
            q = t.lockScroll,
            H = void 0 !== q && q,
            K = t.arrow,
            W = void 0 === K || K,
            Z = t.offsetX,
            G = void 0 === Z ? 0 : Z,
            J = t.offsetY,
            Q = void 0 === J ? 0 : J,
            U = t.mouseEnterDelay,
            V = void 0 === U ? 100 : U,
            $ = t.mouseLeaveDelay,
            tt = void 0 === $ ? 100 : $,
            et = t.keepTooltipInside,
            ot = void 0 !== et && et,
            nt = t.children,
            rt = (0, n.useState)(g || h),
            it = rt[0],
            at = rt[1],
            ut = (0, n.useRef)(null),
            lt = (0, n.useRef)(null),
            ct = (0, n.useRef)(null),
            ft = (0, n.useRef)(null),
            st = (0, n.useRef)("popup-" + ++s),
            dt = !!_ || !l,
            pt = (0, n.useRef)(0);
          a(
            function () {
              return (
                it
                  ? ((ft.current = document.activeElement), Lt(), kt(), bt())
                  : Et(),
                function () {
                  clearTimeout(pt.current);
                }
              );
            },
            [it]
          ),
            (0, n.useEffect)(
              function () {
                "boolean" === typeof g && (g ? vt() : mt());
              },
              [g, b]
            );
          var vt = function (t) {
              it ||
                b ||
                (at(!0),
                setTimeout(function () {
                  return d(t);
                }, 0));
            },
            mt = function (t) {
              var e;
              it &&
                !b &&
                (at(!1),
                dt && (null === (e = ft.current) || void 0 === e || e.focus()),
                setTimeout(function () {
                  return v(t);
                }, 0));
            },
            ht = function (t) {
              null === t || void 0 === t || t.stopPropagation(),
                it ? mt(t) : vt(t);
            },
            yt = function (t) {
              clearTimeout(pt.current),
                (pt.current = setTimeout(function () {
                  return vt(t);
                }, V));
            },
            gt = function (t) {
              null === t || void 0 === t || t.preventDefault(), ht();
            },
            wt = function (t) {
              clearTimeout(pt.current),
                (pt.current = setTimeout(function () {
                  return mt(t);
                }, tt));
            },
            bt = function () {
              dt &&
                H &&
                (document.getElementsByTagName("body")[0].style.overflow =
                  "hidden");
            },
            Et = function () {
              dt &&
                H &&
                (document.getElementsByTagName("body")[0].style.overflow =
                  "auto");
            },
            kt = function () {
              var t,
                e =
                  null === lt ||
                  void 0 === lt ||
                  null === (t = lt.current) ||
                  void 0 === t
                    ? void 0
                    : t.querySelectorAll(
                        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
                      ),
                o = Array.prototype.slice.call(e)[0];
              null === o || void 0 === o || o.focus();
            };
          (0, n.useImperativeHandle)(e, function () {
            return {
              open: function () {
                vt();
              },
              close: function () {
                mt();
              },
              toggle: function () {
                ht();
              },
            };
          });
          var xt,
            Ct,
            Lt = function () {
              if (
                !dt &&
                it &&
                (null === ut || void 0 === ut ? void 0 : ut.current) &&
                (null === ut || void 0 === ut ? void 0 : ut.current) &&
                (null === lt || void 0 === lt ? void 0 : lt.current)
              ) {
                var t,
                  e,
                  o = ut.current.getBoundingClientRect(),
                  n = lt.current.getBoundingClientRect(),
                  r = f(o, n, M, W, { offsetX: G, offsetY: Q }, ot);
                if (
                  ((lt.current.style.top = r.top + window.scrollY + "px"),
                  (lt.current.style.left = r.left + window.scrollX + "px"),
                  W && ct.current)
                )
                  (ct.current.style.transform = r.transform),
                    ct.current.style.setProperty("-ms-transform", r.transform),
                    ct.current.style.setProperty(
                      "-webkit-transform",
                      r.transform
                    ),
                    (ct.current.style.top =
                      (null === (t = B.top) || void 0 === t
                        ? void 0
                        : t.toString()) || r.arrowTop),
                    (ct.current.style.left =
                      (null === (e = B.left) || void 0 === e
                        ? void 0
                        : e.toString()) || r.arrowLeft);
              }
            };
          (xt = mt),
            void 0 === (Ct = O) && (Ct = !0),
            (0, n.useEffect)(
              function () {
                if (Ct) {
                  var t = function (t) {
                    "Escape" === t.key && xt(t);
                  };
                  return (
                    document.addEventListener("keyup", t),
                    function () {
                      Ct && document.removeEventListener("keyup", t);
                    }
                  );
                }
              },
              [xt, Ct]
            ),
            (function (t, e) {
              void 0 === e && (e = !0),
                (0, n.useEffect)(
                  function () {
                    if (e) {
                      var o = function (e) {
                        if (9 === e.keyCode) {
                          var o,
                            n =
                              null === t ||
                              void 0 === t ||
                              null === (o = t.current) ||
                              void 0 === o
                                ? void 0
                                : o.querySelectorAll(
                                    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
                                  ),
                            r = Array.prototype.slice.call(n);
                          if (1 === r.length) return void e.preventDefault();
                          var i = r[0],
                            a = r[r.length - 1];
                          e.shiftKey && document.activeElement === i
                            ? (e.preventDefault(), a.focus())
                            : document.activeElement === a &&
                              (e.preventDefault(), i.focus());
                        }
                      };
                      return (
                        document.addEventListener("keydown", o),
                        function () {
                          e && document.removeEventListener("keydown", o);
                        }
                      );
                    }
                  },
                  [t, e]
                );
            })(lt, it && dt),
            (function (t, e) {
              void 0 === e && (e = !0),
                (0, n.useEffect)(
                  function () {
                    if (e) {
                      var o = function () {
                        t();
                      };
                      return (
                        window.addEventListener("resize", o),
                        function () {
                          e && window.removeEventListener("resize", o);
                        }
                      );
                    }
                  },
                  [t, e]
                );
            })(Lt, A),
            (function (t, e, o) {
              void 0 === o && (o = !0),
                (0, n.useEffect)(
                  function () {
                    if (o) {
                      var n = function (o) {
                        var n = Array.isArray(t) ? t : [t],
                          r = !1;
                        n.forEach(function (t) {
                          (t.current && !t.current.contains(o.target)) ||
                            (r = !0);
                        }),
                          o.stopPropagation(),
                          r || e(o);
                      };
                      return (
                        document.addEventListener("mousedown", n),
                        document.addEventListener("touchstart", n),
                        function () {
                          o &&
                            (document.removeEventListener("mousedown", n),
                            document.removeEventListener("touchstart", n));
                        }
                      );
                    }
                  },
                  [t, e, o]
                );
            })(l ? [lt, ut] : [lt], mt, C && !k);
          var At = function () {
              return n.createElement(
                "div",
                Object.assign(
                  {},
                  (function () {
                    var t = dt ? u.popupContent.modal : u.popupContent.tooltip,
                      e = {
                        className:
                          "popup-content " +
                          ("" !== P
                            ? P.split(" ")
                                .map(function (t) {
                                  return t + "-content";
                                })
                                .join(" ")
                            : ""),
                        style: i({}, t, Y, { pointerEvents: "auto" }),
                        ref: lt,
                        onClick: function (t) {
                          t.stopPropagation();
                        },
                      };
                    return (
                      !_ &&
                        S.indexOf("hover") >= 0 &&
                        ((e.onMouseEnter = yt), (e.onMouseLeave = wt)),
                      e
                    );
                  })(),
                  { key: "C", role: dt ? "dialog" : "tooltip", id: st.current }
                ),
                W &&
                  !dt &&
                  n.createElement(
                    "div",
                    { ref: ct, style: u.popupArrow },
                    n.createElement(
                      "svg",
                      {
                        "data-testid": "arrow",
                        className:
                          "popup-arrow " +
                          ("" !== P
                            ? P.split(" ")
                                .map(function (t) {
                                  return t + "-arrow";
                                })
                                .join(" ")
                            : ""),
                        viewBox: "0 0 32 16",
                        style: i({ position: "absolute" }, B),
                      },
                      n.createElement("path", {
                        d: "M16 0l16 16H0z",
                        fill: "currentcolor",
                      })
                    )
                  ),
                nt && "function" === typeof nt ? nt(mt, it) : nt
              );
            },
            Tt = !(S.indexOf("hover") >= 0),
            Ot = dt ? u.overlay.modal : u.overlay.tooltip,
            Rt = [
              Tt &&
                n.createElement(
                  "div",
                  {
                    key: "O",
                    "data-testid": "overlay",
                    "data-popup": dt ? "modal" : "tooltip",
                    className:
                      "popup-overlay " +
                      ("" !== P
                        ? P.split(" ")
                            .map(function (t) {
                              return t + "-overlay";
                            })
                            .join(" ")
                        : ""),
                    style: i({}, Ot, N, {
                      pointerEvents: (C && k) || dt ? "auto" : "none",
                    }),
                    onClick: C && k ? mt : void 0,
                    tabIndex: -1,
                  },
                  dt && At()
                ),
              !dt && At(),
            ];
          return n.createElement(
            n.Fragment,
            null,
            (function () {
              for (
                var t = { key: "T", ref: ut, "aria-describedby": st.current },
                  e = Array.isArray(S) ? S : [S],
                  o = 0,
                  r = e.length;
                o < r;
                o++
              )
                switch (e[o]) {
                  case "click":
                    t.onClick = ht;
                    break;
                  case "right-click":
                    t.onContextMenu = gt;
                    break;
                  case "hover":
                    (t.onMouseEnter = yt), (t.onMouseLeave = wt);
                    break;
                  case "focus":
                    (t.onFocus = yt), (t.onBlur = wt);
                }
              if ("function" === typeof l) {
                var i = l(it);
                return !!l && n.cloneElement(i, t);
              }
              return !!l && n.cloneElement(l, t);
            })(),
            it &&
              r.createPortal(
                Rt,
                (function () {
                  var t = document.getElementById("popup-root");
                  return (
                    null === t &&
                      ((t = document.createElement("div")).setAttribute(
                        "id",
                        "popup-root"
                      ),
                      document.body.appendChild(t)),
                    t
                  );
                })()
              )
          );
        });
      e.Z = d;
    },
  },
]);
