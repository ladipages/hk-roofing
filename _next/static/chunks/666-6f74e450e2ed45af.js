(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [666],
  {
    67228: function (e) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    23646: function (e, t, a) {
      var n = a(67228);
      (e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    81506: function (e) {
      (e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    34575: function (e) {
      (e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    93913: function (e) {
      function t(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      (e.exports = function (e, a, n) {
        return a && t(e.prototype, a), n && t(e, n), e;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    59713: function (e) {
      (e.exports = function (e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    67154: function (e) {
      function t() {
        return (
          (e.exports = t =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              }
              return e;
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          t.apply(this, arguments)
        );
      }
      (e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    29754: function (e) {
      function t(a) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          t(a)
        );
      }
      (e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    2205: function (e, t, a) {
      var n = a(99489);
      (e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && n(e, t);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    95318: function (e) {
      (e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    20862: function (e, t, a) {
      var n = a(50008).default;
      function r(e) {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (r = function (e) {
          return e ? a : t;
        })(e);
      }
      (e.exports = function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" !== typeof e))
          return { default: e };
        var a = r(t);
        if (a && a.has(e)) return a.get(e);
        var o = {},
          l = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = l ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(o, u, i)
              : (o[u] = e[u]);
          }
        return (o.default = e), a && a.set(e, o), o;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    46860: function (e) {
      (e.exports = function (e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    98206: function (e) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    60693: function (e, t, a) {
      var n = a(59713);
      (e.exports = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? Object(arguments[t]) : {},
            r = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            r.push.apply(
              r,
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            ),
            r.forEach(function (t) {
              n(e, t, a[t]);
            });
        }
        return e;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    6479: function (e, t, a) {
      var n = a(37316);
      (e.exports = function (e, t) {
        if (null == e) return {};
        var a,
          r,
          o = n(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (a = l[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    37316: function (e) {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var a,
          n,
          r = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
        return r;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    78585: function (e, t, a) {
      var n = a(50008).default,
        r = a(81506);
      (e.exports = function (e, t) {
        if (t && ("object" === n(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return r(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    99489: function (e) {
      function t(a, n) {
        return (
          (e.exports = t =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          t(a, n)
        );
      }
      (e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    319: function (e, t, a) {
      var n = a(23646),
        r = a(46860),
        o = a(60379),
        l = a(98206);
      (e.exports = function (e) {
        return n(e) || r(e) || o(e) || l();
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    50008: function (e) {
      function t(a) {
        return (
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? ((e.exports = t =
                function (e) {
                  return typeof e;
                }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = t =
                function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0)),
          t(a)
        );
      }
      (e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    60379: function (e, t, a) {
      var n = a(67228);
      (e.exports = function (e, t) {
        if (e) {
          if ("string" === typeof e) return n(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === a && e.constructor && (a = e.constructor.name),
            "Map" === a || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? n(e, t)
              : void 0
          );
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    90638: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = a(96856).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var a = l.default,
            o = (null == t ? void 0 : t.suspense)
              ? {}
              : {
                  loading: function (e) {
                    e.error, e.isLoading;
                    return e.pastDelay, null;
                  },
                };
          n(e, Promise)
            ? (o.loader = function () {
                return e;
              })
            : "function" === typeof e
            ? (o.loader = e)
            : "object" === typeof e && (o = r({}, o, e));
          if ((o = r({}, o, t)).suspense)
            throw new Error(
              "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
            );
          o.suspense && (delete o.ssr, delete o.loading);
          o.loadableGenerated &&
            delete (o = r({}, o, o.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof o.ssr && !o.suspense) {
            if (!o.ssr) return delete o.ssr, u(a, o);
            delete o.ssr;
          }
          return a(o);
        }),
        (t.noSSR = u);
      var r = a(6495).Z,
        o = a(92648).Z,
        l = (o(a(67294)), o(a(14302)));
      function u(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    16319: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0);
      var n = (0, a(92648).Z)(a(67294)).default.createContext(null);
      t.LoadableContext = n;
    },
    14302: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = a(79658).Z,
        r = a(7222).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = a(6495).Z,
        l = (0, a(92648).Z)(a(67294)),
        u = a(16319),
        i = a(71849).useSyncExternalStore,
        d = [],
        s = [],
        c = !1;
      function f(e) {
        var t = e(),
          a = { loading: !0, loaded: null, error: null };
        return (
          (a.promise = t
            .then(function (e) {
              return (a.loading = !1), (a.loaded = e), e;
            })
            .catch(function (e) {
              throw ((a.loading = !1), (a.error = e), e);
            })),
          a
        );
      }
      var h = (function () {
        function e(t, a) {
          n(this, e),
            (this._loadFn = t),
            (this._opts = a),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          r(e, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  a = this._opts;
                t.loading &&
                  ("number" === typeof a.delay &&
                    (0 === a.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, a.delay))),
                  "number" === typeof a.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, a.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = o(
                  {},
                  this._state,
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function p(e) {
        return (function (e, t) {
          var a = function () {
              if (!d) {
                var t = new h(e, r);
                d = {
                  getCurrentValue: t.getCurrentValue.bind(t),
                  subscribe: t.subscribe.bind(t),
                  retry: t.retry.bind(t),
                  promise: t.promise.bind(t),
                };
              }
              return d.promise();
            },
            n = function () {
              a();
              var e = l.default.useContext(u.LoadableContext);
              e &&
                Array.isArray(r.modules) &&
                r.modules.forEach(function (t) {
                  e(t);
                });
            },
            r = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              t
            );
          r.suspense && (r.lazy = l.default.lazy(r.loader));
          var d = null;
          if (!c) {
            var f = r.webpack ? r.webpack() : r.modules;
            f &&
              s.push(function (e) {
                var t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var o, l = f[Symbol.iterator]();
                    !(t = (o = l.next()).done);
                    t = !0
                  ) {
                    var u = o.value;
                    if (-1 !== e.indexOf(u)) return a();
                  }
                } catch (i) {
                  (n = !0), (r = i);
                } finally {
                  try {
                    t || null == l.return || l.return();
                  } finally {
                    if (n) throw r;
                  }
                }
              });
          }
          var p = r.suspense
            ? function (e, t) {
                return (
                  n(), l.default.createElement(r.lazy, o({}, e, { ref: t }))
                );
              }
            : function (e, t) {
                n();
                var a = i(d.subscribe, d.getCurrentValue, d.getCurrentValue);
                return (
                  l.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: d.retry };
                    },
                    []
                  ),
                  l.default.useMemo(
                    function () {
                      return a.loading || a.error
                        ? l.default.createElement(r.loading, {
                            isLoading: a.loading,
                            pastDelay: a.pastDelay,
                            timedOut: a.timedOut,
                            error: a.error,
                            retry: d.retry,
                          })
                        : a.loaded
                        ? l.default.createElement(
                            (t = a.loaded) && t.__esModule ? t.default : t,
                            e
                          )
                        : null;
                      var t;
                    },
                    [e, a]
                  )
                );
              };
          return (
            (p.preload = function () {
              return a();
            }),
            (p.displayName = "LoadableComponent"),
            l.default.forwardRef(p)
          );
        })(f, e);
      }
      function v(e, t) {
        for (var a = []; e.length; ) {
          var n = e.pop();
          a.push(n(t));
        }
        return Promise.all(a).then(function () {
          if (e.length) return v(e, t);
        });
      }
      (p.preloadAll = function () {
        return new Promise(function (e, t) {
          v(d).then(e, t);
        });
      }),
        (p.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var a = function () {
              return (c = !0), t();
            };
            v(s, e).then(a, a);
          });
        }),
        (window.__NEXT_PRELOADREADY = p.preloadReady);
      var y = p;
      t.default = y;
    },
    5152: function (e, t, a) {
      e.exports = a(90638);
    },
    67651: function (e, t, a) {
      "use strict";
      var n = a(67294);
      var r =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        o = n.useState,
        l = n.useEffect,
        u = n.useLayoutEffect,
        i = n.useDebugValue;
      function d(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var a = t();
          return !r(e, a);
        } catch (n) {
          return !0;
        }
      }
      var s =
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var a = t(),
                n = o({ inst: { value: a, getSnapshot: t } }),
                r = n[0].inst,
                s = n[1];
              return (
                u(
                  function () {
                    (r.value = a), (r.getSnapshot = t), d(r) && s({ inst: r });
                  },
                  [e, a, t]
                ),
                l(
                  function () {
                    return (
                      d(r) && s({ inst: r }),
                      e(function () {
                        d(r) && s({ inst: r });
                      })
                    );
                  },
                  [e]
                ),
                i(a),
                a
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : s;
    },
    71849: function (e, t, a) {
      "use strict";
      e.exports = a(67651);
    },
    65571: function (e, t) {
      "use strict";
      function a(e) {
        return (
          (a =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          a(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          if (!("string" === typeof e || e instanceof String)) {
            var t = a(e);
            throw (
              (null === e
                ? (t = "null")
                : "object" === t && (t = e.constructor.name),
              new TypeError("Expected a string but received a ".concat(t)))
            );
          }
        }),
        (e.exports = t.default),
        (e.exports.default = t.default);
    },
    45501: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(60693)),
        l = r(a(34575)),
        u = r(a(93913)),
        i = a(45217),
        d = r(a(99610)),
        s = n(a(52234)),
        c = n(a(38359)),
        f = (function () {
          function e(t) {
            (0, l.default)(this, e),
              (this.store = t || (0, i.createStore)(d.default)),
              (this.video = null),
              (this.rootElement = null);
          }
          return (
            (0, u.default)(e, [
              {
                key: "getActions",
                value: function () {
                  var e = this,
                    t = this.store.dispatch,
                    a = (0, o.default)({}, s, c);
                  return Object.keys(a)
                    .filter(function (e) {
                      return "function" === typeof a[e];
                    })
                    .reduce(function (n, r) {
                      var o;
                      return (
                        (n[r] =
                          ((o = a[r]),
                          function () {
                            var a = o.apply(e, arguments);
                            "undefined" !== typeof a && t(a);
                          })),
                        n
                      );
                    }, {});
                },
              },
              {
                key: "getState",
                value: function () {
                  return this.store.getState();
                },
              },
              {
                key: "subscribeToStateChange",
                value: function (e, t) {
                  t || (t = this.getState.bind(this));
                  var a = t();
                  return this.store.subscribe(function () {
                    var n = t();
                    if (n !== a) {
                      var r = a;
                      (a = n), e(n, r);
                    }
                  });
                },
              },
              {
                key: "subscribeToOperationStateChange",
                value: function (e) {
                  var t = this;
                  return this.subscribeToStateChange(e, function () {
                    return t.getState().operation;
                  });
                },
              },
              {
                key: "subscribeToPlayerStateChange",
                value: function (e) {
                  var t = this;
                  return this.subscribeToStateChange(e, function () {
                    return t.getState().player;
                  });
                },
              },
            ]),
            e
          );
        })();
      t.default = f;
    },
    52234: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleFullscreenChange = function (e) {
          return { type: l, isFullscreen: e };
        }),
        (t.activate = function (e) {
          return { type: u, activity: e };
        }),
        (t.userActivate = function (e) {
          return { type: i, activity: e };
        }),
        (t.play = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { action: "play", source: "" };
          return this.video.play(), { type: o, operation: e };
        }),
        (t.pause = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { action: "pause", source: "" };
          return this.video.pause(), { type: o, operation: e };
        }),
        (t.togglePlay = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { action: "toggle-play", source: "" };
          return this.video.togglePlay(), { type: o, operation: e };
        }),
        (t.seek = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { action: "seek", source: "" };
          return this.video.seek(e), { type: o, operation: t };
        }),
        (t.forward = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { action: "forward-".concat(e), source: "" };
          return this.video.forward(e), { type: o, operation: t };
        }),
        (t.replay = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { action: "replay-".concat(e), source: "" };
          return this.video.replay(e), { type: o, operation: t };
        }),
        (t.changeRate = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { action: "change-rate", source: "" };
          return (this.video.playbackRate = e), { type: o, operation: t };
        }),
        (t.changeVolume = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { action: "change-volume", source: "" },
            a = e;
          e < 0 && (a = 0);
          e > 1 && (a = 1);
          return (this.video.volume = a), { type: o, operation: t };
        }),
        (t.mute = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { action: e ? "muted" : "unmuted", source: "" };
          return (this.video.muted = e), { type: o, operation: t };
        }),
        (t.toggleFullscreen = function (e) {
          if (r.default.enabled)
            return (
              r.default.isFullscreen
                ? r.default.exit()
                : r.default.request(this.rootElement),
              {
                type: o,
                operation: { action: "toggle-fullscreen", source: "" },
              }
            );
          return { type: l, isFullscreen: !e.isFullscreen };
        }),
        (t.USER_ACTIVATE =
          t.PLAYER_ACTIVATE =
          t.FULLSCREEN_CHANGE =
          t.OPERATE =
            void 0);
      var r = n(a(3387)),
        o = "video-react/OPERATE";
      t.OPERATE = o;
      var l = "video-react/FULLSCREEN_CHANGE";
      t.FULLSCREEN_CHANGE = l;
      var u = "video-react/PLAYER_ACTIVATE";
      t.PLAYER_ACTIVATE = u;
      var i = "video-react/USER_ACTIVATE";
      t.USER_ACTIVATE = i;
    },
    38359: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleLoadStart = function (e) {
          return { type: a, videoProps: e };
        }),
        (t.handleCanPlay = function (e) {
          return { type: n, videoProps: e };
        }),
        (t.handleWaiting = function (e) {
          return { type: r, videoProps: e };
        }),
        (t.handleCanPlayThrough = function (e) {
          return { type: o, videoProps: e };
        }),
        (t.handlePlaying = function (e) {
          return { type: l, videoProps: e };
        }),
        (t.handlePlay = function (e) {
          return { type: u, videoProps: e };
        }),
        (t.handlePause = function (e) {
          return { type: i, videoProps: e };
        }),
        (t.handleEnd = function (e) {
          return { type: d, videoProps: e };
        }),
        (t.handleSeeking = function (e) {
          return { type: s, videoProps: e };
        }),
        (t.handleSeeked = function (e) {
          return { type: c, videoProps: e };
        }),
        (t.handleDurationChange = function (e) {
          return { type: p, videoProps: e };
        }),
        (t.handleTimeUpdate = function (e) {
          return { type: v, videoProps: e };
        }),
        (t.handleVolumeChange = function (e) {
          return { type: y, videoProps: e };
        }),
        (t.handleProgressChange = function (e) {
          return { type: m, videoProps: e };
        }),
        (t.handleRateChange = function (e) {
          return { type: g, videoProps: e };
        }),
        (t.handleSuspend = function (e) {
          return { type: b, videoProps: e };
        }),
        (t.handleAbort = function (e) {
          return { type: k, videoProps: e };
        }),
        (t.handleEmptied = function (e) {
          return { type: E, videoProps: e };
        }),
        (t.handleStalled = function (e) {
          return { type: P, videoProps: e };
        }),
        (t.handleLoadedMetaData = function (e) {
          return { type: C, videoProps: e };
        }),
        (t.handleLoadedData = function (e) {
          return { type: T, videoProps: e };
        }),
        (t.handleResize = function (e) {
          return { type: _, videoProps: e };
        }),
        (t.handleError = function (e) {
          return { type: S, videoProps: e };
        }),
        (t.handleSeekingTime = function (e) {
          return { type: f, time: e };
        }),
        (t.handleEndSeeking = function (e) {
          return { type: h, time: e };
        }),
        (t.activateTextTrack = function (e) {
          return { type: M, textTrack: e };
        }),
        (t.ACTIVATE_TEXT_TRACK =
          t.ERROR =
          t.RESIZE =
          t.LOADED_DATA =
          t.LOADED_META_DATA =
          t.STALLED =
          t.EMPTIED =
          t.ABORT =
          t.SUSPEND =
          t.RATE_CHANGE =
          t.PROGRESS_CHANGE =
          t.VOLUME_CHANGE =
          t.TIME_UPDATE =
          t.DURATION_CHANGE =
          t.END_SEEKING =
          t.SEEKING_TIME =
          t.SEEKED =
          t.SEEKING =
          t.END =
          t.PAUSE =
          t.PLAY =
          t.PLAYING =
          t.CAN_PLAY_THROUGH =
          t.WAITING =
          t.CAN_PLAY =
          t.LOAD_START =
            void 0);
      var a = "video-react/LOAD_START";
      t.LOAD_START = a;
      var n = "video-react/CAN_PLAY";
      t.CAN_PLAY = n;
      var r = "video-react/WAITING";
      t.WAITING = r;
      var o = "video-react/CAN_PLAY_THROUGH";
      t.CAN_PLAY_THROUGH = o;
      var l = "video-react/PLAYING";
      t.PLAYING = l;
      var u = "video-react/PLAY";
      t.PLAY = u;
      var i = "video-react/PAUSE";
      t.PAUSE = i;
      var d = "video-react/END";
      t.END = d;
      var s = "video-react/SEEKING";
      t.SEEKING = s;
      var c = "video-react/SEEKED";
      t.SEEKED = c;
      var f = "video-react/SEEKING_TIME";
      t.SEEKING_TIME = f;
      var h = "video-react/END_SEEKING";
      t.END_SEEKING = h;
      var p = "video-react/DURATION_CHANGE";
      t.DURATION_CHANGE = p;
      var v = "video-react/TIME_UPDATE";
      t.TIME_UPDATE = v;
      var y = "video-react/VOLUME_CHANGE";
      t.VOLUME_CHANGE = y;
      var m = "video-react/PROGRESS_CHANGE";
      t.PROGRESS_CHANGE = m;
      var g = "video-react/RATE_CHANGE";
      t.RATE_CHANGE = g;
      var b = "video-react/SUSPEND";
      t.SUSPEND = b;
      var k = "video-react/ABORT";
      t.ABORT = k;
      var E = "video-react/EMPTIED";
      t.EMPTIED = E;
      var P = "video-react/STALLED";
      t.STALLED = P;
      var C = "video-react/LOADED_META_DATA";
      t.LOADED_META_DATA = C;
      var T = "video-react/LOADED_DATA";
      t.LOADED_DATA = T;
      var _ = "video-react/RESIZE";
      t.RESIZE = _;
      var S = "video-react/ERROR";
      t.ERROR = S;
      var M = "video-react/ACTIVATE_TEXT_TRACK";
      t.ACTIVATE_TEXT_TRACK = M;
    },
    33498: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = r(a(94184)),
        p = { manager: c.default.object, className: c.default.string },
        v = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).timer = null),
              e.manager.subscribeToOperationStateChange(
                n.handleStateChange.bind((0, d.default)(n))
              ),
              (n.state = { hidden: !0, operation: {} }),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              {
                key: "handleStateChange",
                value: function (e, t) {
                  var a = this;
                  e.count !== t.count &&
                    "shortcut" === e.operation.source &&
                    (this.timer &&
                      (clearTimeout(this.timer), (this.timer = null)),
                    this.setState({
                      hidden: !1,
                      count: e.count,
                      operation: e.operation,
                    }),
                    (this.timer = setTimeout(function () {
                      a.setState({ hidden: !0 }), (a.timer = null);
                    }, 500)));
                },
              },
              {
                key: "render",
                value: function () {
                  if ("shortcut" !== this.state.operation.source) return null;
                  var e = this.state.hidden ? { display: "none" } : null;
                  return f.default.createElement(
                    "div",
                    {
                      className: (0, h.default)(
                        {
                          "video-react-bezel": !0,
                          "video-react-bezel-animation":
                            this.state.count % 2 === 0,
                          "video-react-bezel-animation-alt":
                            this.state.count % 2 === 1,
                        },
                        this.props.className
                      ),
                      style: e,
                      role: "status",
                      "aria-label": this.state.operation.action,
                    },
                    f.default.createElement("div", {
                      className: (0, h.default)(
                        "video-react-bezel-icon",
                        "video-react-bezel-icon-".concat(
                          this.state.operation.action
                        )
                      ),
                    })
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = v), (v.propTypes = p), (v.displayName = "Bezel");
    },
    989: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = r(a(94184)),
        p = {
          actions: c.default.object,
          player: c.default.object,
          position: c.default.string,
          className: c.default.string,
        },
        v = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).handleClick = n.handleClick.bind((0, d.default)(n))),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "handleClick",
                value: function () {
                  this.props.actions.play();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.player,
                    a = e.position;
                  return f.default.createElement(
                    "button",
                    {
                      className: (0, h.default)(
                        "video-react-button",
                        "video-react-big-play-button",
                        "video-react-big-play-button-".concat(a),
                        this.props.className,
                        {
                          "big-play-button-hide": t.hasStarted || !t.currentSrc,
                        }
                      ),
                      type: "button",
                      "aria-live": "polite",
                      tabIndex: "0",
                      onClick: this.handleClick,
                    },
                    f.default.createElement(
                      "span",
                      { className: "video-react-control-text" },
                      "Play Video"
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = v),
        (v.propTypes = p),
        (v.defaultProps = { position: "left" }),
        (v.displayName = "BigPlayButton");
    },
    17191: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(67154)),
        l = r(a(60693)),
        u = r(a(34575)),
        i = r(a(93913)),
        d = r(a(78585)),
        s = r(a(29754)),
        c = r(a(81506)),
        f = r(a(2205)),
        h = r(a(45697)),
        p = n(a(67294)),
        v = r(a(94184)),
        y = {
          tagName: h.default.string,
          onClick: h.default.func.isRequired,
          onFocus: h.default.func,
          onBlur: h.default.func,
          className: h.default.string,
        },
        m = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, u.default)(this, t),
              ((n = (0, d.default)(
                this,
                (0, s.default)(t).call(this, e, a)
              )).handleClick = n.handleClick.bind((0, c.default)(n))),
              (n.handleFocus = n.handleFocus.bind((0, c.default)(n))),
              (n.handleBlur = n.handleBlur.bind((0, c.default)(n))),
              (n.handleKeypress = n.handleKeypress.bind((0, c.default)(n))),
              n
            );
          }
          return (
            (0, f.default)(t, e),
            (0, i.default)(t, [
              {
                key: "componentWillUnmount",
                value: function (e) {
                  this.handleBlur(e);
                },
              },
              {
                key: "handleKeypress",
                value: function (e) {
                  (32 !== e.which && 13 !== e.which) ||
                    (e.preventDefault(), this.handleClick(e));
                },
              },
              {
                key: "handleClick",
                value: function (e) {
                  (0, this.props.onClick)(e);
                },
              },
              {
                key: "handleFocus",
                value: function (e) {
                  document.addEventListener("keydown", this.handleKeypress),
                    this.props.onFocus && this.props.onFocus(e);
                },
              },
              {
                key: "handleBlur",
                value: function (e) {
                  document.removeEventListener("keydown", this.handleKeypress),
                    this.props.onBlur && this.props.onBlur(e);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.tagName,
                    t = (0, l.default)({}, this.props);
                  return (
                    delete t.tagName,
                    delete t.className,
                    p.default.createElement(
                      e,
                      (0, o.default)(
                        {
                          className: (0, v.default)(this.props.className),
                          role: "button",
                          tabIndex: "0",
                          onClick: this.handleClick,
                          onFocus: this.handleFocus,
                          onBlur: this.handleBlur,
                        },
                        t
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(p.Component);
      (t.default = m),
        (m.propTypes = y),
        (m.defaultProps = { tagName: "div" }),
        (m.displayName = "ClickableComponent");
    },
    6238: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
      var r = n(a(45697)),
        o = n(a(67294)),
        l = n(a(94184)),
        u = { player: r.default.object, className: r.default.string };
      function i(e) {
        var t = e.player,
          a = e.className;
        return t.error
          ? null
          : o.default.createElement("div", {
              className: (0, l.default)("video-react-loading-spinner", a),
            });
      }
      (i.propTypes = u), (i.displayName = "LoadingSpinner");
    },
    97617: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(60693)),
        l = r(a(59713)),
        u = r(a(6479)),
        i = r(a(34575)),
        d = r(a(93913)),
        s = r(a(78585)),
        c = r(a(29754)),
        f = r(a(81506)),
        h = r(a(2205)),
        p = r(a(45697)),
        v = n(a(67294)),
        y = r(a(94184)),
        m = r(a(45501)),
        g = r(a(989)),
        b = r(a(6238)),
        k = r(a(78814)),
        E = r(a(20122)),
        P = r(a(33498)),
        C = r(a(19097)),
        T = r(a(7473)),
        _ = n(a(87152)),
        S = a(6021),
        M = a(43453),
        x = r(a(3387)),
        N = {
          children: p.default.any,
          width: p.default.oneOfType([p.default.string, p.default.number]),
          height: p.default.oneOfType([p.default.string, p.default.number]),
          fluid: p.default.bool,
          muted: p.default.bool,
          playsInline: p.default.bool,
          aspectRatio: p.default.string,
          className: p.default.string,
          videoId: p.default.string,
          startTime: p.default.number,
          loop: p.default.bool,
          autoPlay: p.default.bool,
          src: p.default.string,
          poster: p.default.string,
          preload: p.default.oneOf(["auto", "metadata", "none"]),
          onLoadStart: p.default.func,
          onWaiting: p.default.func,
          onCanPlay: p.default.func,
          onCanPlayThrough: p.default.func,
          onPlaying: p.default.func,
          onEnded: p.default.func,
          onSeeking: p.default.func,
          onSeeked: p.default.func,
          onPlay: p.default.func,
          onPause: p.default.func,
          onProgress: p.default.func,
          onDurationChange: p.default.func,
          onError: p.default.func,
          onSuspend: p.default.func,
          onAbort: p.default.func,
          onEmptied: p.default.func,
          onStalled: p.default.func,
          onLoadedMetadata: p.default.func,
          onLoadedData: p.default.func,
          onTimeUpdate: p.default.func,
          onRateChange: p.default.func,
          onVolumeChange: p.default.func,
          store: p.default.object,
        },
        w = (function (e) {
          function t(e) {
            var a;
            return (
              (0, i.default)(this, t),
              ((a = (0, s.default)(
                this,
                (0, c.default)(t).call(this, e)
              )).controlsHideTimer = null),
              (a.video = null),
              (a.manager = new m.default(e.store)),
              (a.actions = a.manager.getActions()),
              a.manager.subscribeToPlayerStateChange(
                a.handleStateChange.bind((0, f.default)(a))
              ),
              (a.getStyle = a.getStyle.bind((0, f.default)(a))),
              (a.handleResize = a.handleResize.bind((0, f.default)(a))),
              (a.getChildren = a.getChildren.bind((0, f.default)(a))),
              (a.handleMouseMove = (0, M.throttle)(
                a.handleMouseMove.bind((0, f.default)(a)),
                250
              )),
              (a.handleMouseDown = a.handleMouseDown.bind((0, f.default)(a))),
              (a.startControlsTimer = a.startControlsTimer.bind(
                (0, f.default)(a)
              )),
              (a.handleFullScreenChange = a.handleFullScreenChange.bind(
                (0, f.default)(a)
              )),
              (a.handleKeyDown = a.handleKeyDown.bind((0, f.default)(a))),
              (a.handleFocus = a.handleFocus.bind((0, f.default)(a))),
              (a.handleBlur = a.handleBlur.bind((0, f.default)(a))),
              a
            );
          }
          return (
            (0, h.default)(t, e),
            (0, d.default)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.handleResize(),
                    window.addEventListener("resize", this.handleResize),
                    x.default.addEventListener(this.handleFullScreenChange);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("resize", this.handleResize),
                    x.default.removeEventListener(this.handleFullScreenChange),
                    this.controlsHideTimer &&
                      window.clearTimeout(this.controlsHideTimer);
                },
              },
              {
                key: "getDefaultChildren",
                value: function (e) {
                  var t = this;
                  return [
                    v.default.createElement(
                      E.default,
                      {
                        ref: function (e) {
                          (t.video = e), (t.manager.video = t.video);
                        },
                        key: "video",
                        order: 0,
                      },
                      e
                    ),
                    v.default.createElement(k.default, {
                      key: "poster-image",
                      order: 1,
                    }),
                    v.default.createElement(b.default, {
                      key: "loading-spinner",
                      order: 2,
                    }),
                    v.default.createElement(P.default, {
                      key: "bezel",
                      order: 3,
                    }),
                    v.default.createElement(g.default, {
                      key: "big-play-button",
                      order: 4,
                    }),
                    v.default.createElement(T.default, {
                      key: "control-bar",
                      order: 5,
                    }),
                    v.default.createElement(C.default, {
                      key: "shortcut",
                      order: 99,
                    }),
                  ];
                },
              },
              {
                key: "getChildren",
                value: function (e) {
                  e.className;
                  var t = e.children,
                    a = (0, u.default)(e, ["className", "children"]),
                    n = v.default.Children.toArray(this.props.children).filter(
                      function (e) {
                        return !(0, M.isVideoChild)(e);
                      }
                    ),
                    r = this.getDefaultChildren(t);
                  return (0, M.mergeAndSortChildren)(r, n, a);
                },
              },
              {
                key: "setWidthOrHeight",
                value: function (e, t, a) {
                  var n;
                  "string" === typeof a
                    ? "auto" === a
                      ? (n = "auto")
                      : a.match(/\d+%/) && (n = a)
                    : "number" === typeof a && (n = "".concat(a, "px")),
                    Object.assign(e, (0, l.default)({}, t, n));
                },
              },
              {
                key: "getStyle",
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.fluid,
                    r = a.aspectRatio,
                    o = a.height,
                    l = a.width,
                    u = this.manager.getState().player,
                    i = {},
                    d = (
                      void 0 !== r && "auto" !== r
                        ? r
                        : u.videoWidth
                        ? "".concat(u.videoWidth, ":").concat(u.videoHeight)
                        : "16:9"
                    ).split(":"),
                    s = d[1] / d[0];
                  return (
                    (e =
                      void 0 !== l
                        ? l
                        : void 0 !== o
                        ? o / s
                        : u.videoWidth || 400),
                    (t = void 0 !== o ? o : e * s),
                    n
                      ? (i.paddingTop = "".concat(100 * s, "%"))
                      : (this.setWidthOrHeight(i, "width", e),
                        this.setWidthOrHeight(i, "height", t)),
                    i
                  );
                },
              },
              {
                key: "getState",
                value: function () {
                  return this.manager.getState();
                },
              },
              {
                key: "play",
                value: function () {
                  this.video.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.video.pause();
                },
              },
              {
                key: "load",
                value: function () {
                  this.video.load();
                },
              },
              {
                key: "addTextTrack",
                value: function () {
                  var e;
                  (e = this.video).addTextTrack.apply(e, arguments);
                },
              },
              {
                key: "canPlayType",
                value: function () {
                  var e;
                  (e = this.video).canPlayType.apply(e, arguments);
                },
              },
              {
                key: "seek",
                value: function (e) {
                  this.video.seek(e);
                },
              },
              {
                key: "forward",
                value: function (e) {
                  this.video.forward(e);
                },
              },
              {
                key: "replay",
                value: function (e) {
                  this.video.replay(e);
                },
              },
              {
                key: "toggleFullscreen",
                value: function () {
                  this.video.toggleFullscreen();
                },
              },
              {
                key: "subscribeToStateChange",
                value: function (e) {
                  return this.manager.subscribeToPlayerStateChange(e);
                },
              },
              { key: "handleResize", value: function () {} },
              {
                key: "handleFullScreenChange",
                value: function (e) {
                  e.target === this.manager.rootElement &&
                    this.actions.handleFullscreenChange(x.default.isFullscreen);
                },
              },
              {
                key: "handleMouseDown",
                value: function () {
                  this.startControlsTimer();
                },
              },
              {
                key: "handleMouseMove",
                value: function () {
                  this.startControlsTimer();
                },
              },
              {
                key: "handleKeyDown",
                value: function () {
                  this.startControlsTimer();
                },
              },
              {
                key: "startControlsTimer",
                value: function () {
                  var e = this,
                    t = 3e3;
                  v.default.Children.forEach(this.props.children, function (e) {
                    if (v.default.isValidElement(e) && e.type === T.default) {
                      var a = e.props.autoHideTime;
                      "number" === typeof a && (t = a);
                    }
                  }),
                    this.actions.userActivate(!0),
                    clearTimeout(this.controlsHideTimer),
                    (this.controlsHideTimer = setTimeout(function () {
                      e.actions.userActivate(!1);
                    }, t));
                },
              },
              {
                key: "handleStateChange",
                value: function (e, t) {
                  e.isFullscreen !== t.isFullscreen &&
                    (this.handleResize(),
                    (0, S.focusNode)(this.manager.rootElement)),
                    this.forceUpdate();
                },
              },
              {
                key: "handleFocus",
                value: function () {
                  this.actions.activate(!0);
                },
              },
              {
                key: "handleBlur",
                value: function () {
                  this.actions.activate(!1);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.fluid,
                    a = this.manager.getState().player,
                    n = a.paused,
                    r = a.hasStarted,
                    l = a.waiting,
                    u = a.seeking,
                    i = a.isFullscreen,
                    d = a.userActivity,
                    s = (0, o.default)({}, this.props, {
                      player: a,
                      actions: this.actions,
                      manager: this.manager,
                      store: this.manager.store,
                      video: this.video ? this.video.video : null,
                    }),
                    c = this.getChildren(s);
                  return v.default.createElement(
                    "div",
                    {
                      className: (0, y.default)(
                        {
                          "video-react-controls-enabled": !0,
                          "video-react-has-started": r,
                          "video-react-paused": n,
                          "video-react-playing": !n,
                          "video-react-waiting": l,
                          "video-react-seeking": u,
                          "video-react-fluid": t,
                          "video-react-fullscreen": i,
                          "video-react-user-inactive": !d,
                          "video-react-user-active": d,
                          "video-react-workinghover": !_.IS_IOS,
                        },
                        "video-react",
                        this.props.className
                      ),
                      style: this.getStyle(),
                      ref: function (t) {
                        e.manager.rootElement = t;
                      },
                      role: "region",
                      onTouchStart: this.handleMouseDown,
                      onMouseDown: this.handleMouseDown,
                      onTouchMove: this.handleMouseMove,
                      onMouseMove: this.handleMouseMove,
                      onKeyDown: this.handleKeyDown,
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                      tabIndex: "-1",
                    },
                    c
                  );
                },
              },
              {
                key: "playbackRate",
                get: function () {
                  return this.video.playbackRate;
                },
                set: function (e) {
                  this.video.playbackRate = e;
                },
              },
              {
                key: "muted",
                get: function () {
                  return this.video.muted;
                },
                set: function (e) {
                  this.video.muted = e;
                },
              },
              {
                key: "volume",
                get: function () {
                  return this.video.volume;
                },
                set: function (e) {
                  this.video.volume = e;
                },
              },
              {
                key: "videoWidth",
                get: function () {
                  return this.video.videoWidth;
                },
              },
              {
                key: "videoHeight",
                get: function () {
                  return this.video.videoHeight;
                },
              },
            ]),
            t
          );
        })(v.Component);
      (t.default = w),
        (w.contextTypes = { store: p.default.object }),
        (w.propTypes = N),
        (w.defaultProps = {
          fluid: !0,
          muted: !1,
          playsInline: !1,
          preload: "auto",
          aspectRatio: "auto",
        }),
        (w.displayName = "Player");
    },
    78814: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(a(45697)),
        o = n(a(67294)),
        l = n(a(94184)),
        u = {
          poster: r.default.string,
          player: r.default.object,
          actions: r.default.object,
          className: r.default.string,
        };
      function i(e) {
        var t = e.poster,
          a = e.player,
          n = e.actions,
          r = e.className;
        return !t || a.hasStarted
          ? null
          : o.default.createElement("div", {
              className: (0, l.default)("video-react-poster", r),
              style: { backgroundImage: 'url("'.concat(t, '")') },
              onClick: function () {
                a.paused && n.play();
              },
            });
      }
      (i.propTypes = u), (i.displayName = "PosterImage");
      var d = i;
      t.default = d;
    },
    19097: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(a(59713)),
        o = n(a(319)),
        l = n(a(34575)),
        u = n(a(93913)),
        i = n(a(78585)),
        d = n(a(29754)),
        s = n(a(81506)),
        c = n(a(2205)),
        f = a(67294),
        h = n(a(45697)),
        p = a(6021),
        v = {
          clickable: h.default.bool,
          dblclickable: h.default.bool,
          manager: h.default.object,
          actions: h.default.object,
          player: h.default.object,
          shortcuts: h.default.array,
        },
        y = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, l.default)(this, t),
              ((n = (0, i.default)(
                this,
                (0, d.default)(t).call(this, e, a)
              )).defaultShortcuts = [
                { keyCode: 32, handle: n.togglePlay },
                { keyCode: 75, handle: n.togglePlay },
                { keyCode: 70, handle: n.toggleFullscreen },
                {
                  keyCode: 37,
                  handle: function (e, t) {
                    e.hasStarted &&
                      t.replay(5, { action: "replay-5", source: "shortcut" });
                  },
                },
                {
                  keyCode: 74,
                  handle: function (e, t) {
                    e.hasStarted &&
                      t.replay(10, { action: "replay-10", source: "shortcut" });
                  },
                },
                {
                  keyCode: 39,
                  handle: function (e, t) {
                    e.hasStarted &&
                      t.forward(5, { action: "forward-5", source: "shortcut" });
                  },
                },
                {
                  keyCode: 76,
                  handle: function (e, t) {
                    e.hasStarted &&
                      t.forward(10, {
                        action: "forward-10",
                        source: "shortcut",
                      });
                  },
                },
                {
                  keyCode: 36,
                  handle: function (e, t) {
                    e.hasStarted && t.seek(0);
                  },
                },
                {
                  keyCode: 35,
                  handle: function (e, t) {
                    e.hasStarted && t.seek(e.duration);
                  },
                },
                {
                  keyCode: 38,
                  handle: function (e, t) {
                    var a = e.volume + 0.05;
                    a > 1 && (a = 1),
                      t.changeVolume(a, {
                        action: "volume-up",
                        source: "shortcut",
                      });
                  },
                },
                {
                  keyCode: 40,
                  handle: function (e, t) {
                    var a = e.volume - 0.05;
                    a < 0 && (a = 0);
                    var n = a > 0 ? "volume-down" : "volume-off";
                    t.changeVolume(a, { action: n, source: "shortcut" });
                  },
                },
                {
                  keyCode: 190,
                  shift: !0,
                  handle: function (e, t) {
                    var a = e.playbackRate;
                    a >= 1.5
                      ? (a = 2)
                      : a >= 1.25
                      ? (a = 1.5)
                      : a >= 1
                      ? (a = 1.25)
                      : a >= 0.5
                      ? (a = 1)
                      : a >= 0.25
                      ? (a = 0.5)
                      : a >= 0 && (a = 0.25),
                      t.changeRate(a, {
                        action: "fast-forward",
                        source: "shortcut",
                      });
                  },
                },
                {
                  keyCode: 188,
                  shift: !0,
                  handle: function (e, t) {
                    var a = e.playbackRate;
                    a <= 0.5
                      ? (a = 0.25)
                      : a <= 1
                      ? (a = 0.5)
                      : a <= 1.25
                      ? (a = 1)
                      : a <= 1.5
                      ? (a = 1.25)
                      : a <= 2 && (a = 1.5),
                      t.changeRate(a, {
                        action: "fast-rewind",
                        source: "shortcut",
                      });
                  },
                },
              ]),
              (n.shortcuts = (0, o.default)(n.defaultShortcuts)),
              (n.mergeShortcuts = n.mergeShortcuts.bind((0, s.default)(n))),
              (n.handleKeyPress = n.handleKeyPress.bind((0, s.default)(n))),
              (n.handleClick = n.handleClick.bind((0, s.default)(n))),
              (n.handleDoubleClick = n.handleDoubleClick.bind(
                (0, s.default)(n)
              )),
              n
            );
          }
          return (
            (0, c.default)(t, e),
            (0, u.default)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.mergeShortcuts(),
                    document.addEventListener("keydown", this.handleKeyPress),
                    document.addEventListener("click", this.handleClick),
                    document.addEventListener(
                      "dblclick",
                      this.handleDoubleClick
                    );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  e.shortcuts !== this.props.shortcuts && this.mergeShortcuts();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener("keydown", this.handleKeyPress),
                    document.removeEventListener("click", this.handleClick),
                    document.removeEventListener(
                      "dblclick",
                      this.handleDoubleClick
                    );
                },
              },
              {
                key: "mergeShortcuts",
                value: function () {
                  var e = function (e) {
                      var t = e.keyCode,
                        a = void 0 === t ? 0 : t,
                        n = e.ctrl,
                        r = void 0 !== n && n,
                        o = e.shift,
                        l = void 0 !== o && o,
                        u = e.alt,
                        i = void 0 !== u && u;
                      return ""
                        .concat(a, ":")
                        .concat(r, ":")
                        .concat(l, ":")
                        .concat(i);
                    },
                    t = this.defaultShortcuts.reduce(function (t, a) {
                      return Object.assign(t, (0, r.default)({}, e(a), a));
                    }, {}),
                    a = (this.props.shortcuts || []).reduce(function (t, a) {
                      var n = a.keyCode,
                        o = a.handle;
                      return n && "function" === typeof o
                        ? Object.assign(t, (0, r.default)({}, e(a), a))
                        : t;
                    }, t),
                    n = function (e) {
                      var t = 0;
                      return (
                        ["ctrl", "shift", "alt"].forEach(function (a) {
                          e[a] && t++;
                        }),
                        t
                      );
                    };
                  this.shortcuts = Object.keys(a)
                    .map(function (e) {
                      return a[e];
                    })
                    .sort(function (e, t) {
                      return n(t) - n(e);
                    });
                },
              },
              {
                key: "togglePlay",
                value: function (e, t) {
                  e.paused
                    ? t.play({ action: "play", source: "shortcut" })
                    : t.pause({ action: "pause", source: "shortcut" });
                },
              },
              {
                key: "toggleFullscreen",
                value: function (e, t) {
                  t.toggleFullscreen(e);
                },
              },
              {
                key: "handleKeyPress",
                value: function (e) {
                  var t = this.props,
                    a = t.player,
                    n = t.actions;
                  if (
                    a.isActive &&
                    (!document.activeElement ||
                      !(
                        (0, p.hasClass)(
                          document.activeElement,
                          "video-react-control"
                        ) ||
                        (0, p.hasClass)(
                          document.activeElement,
                          "video-react-menu-button-active"
                        ) ||
                        (0, p.hasClass)(
                          document.activeElement,
                          "video-react-big-play-button"
                        )
                      ))
                  ) {
                    var r = e.keyCode || e.which,
                      o = e.ctrlKey || e.metaKey,
                      l = e.shiftKey,
                      u = e.altKey,
                      i = this.shortcuts.filter(function (e) {
                        return (
                          !(!e.keyCode || e.keyCode - r !== 0) &&
                          !(
                            (void 0 !== e.ctrl && e.ctrl !== o) ||
                            (void 0 !== e.shift && e.shift !== l) ||
                            (void 0 !== e.alt && e.alt !== u)
                          )
                        );
                      })[0];
                    i && (i.handle(a, n), e.preventDefault());
                  }
                },
              },
              {
                key: "canBeClicked",
                value: function (e, t) {
                  return !(
                    !e.isActive ||
                    "VIDEO" !== t.target.nodeName ||
                    4 !== e.readyState
                  );
                },
              },
              {
                key: "handleClick",
                value: function (e) {
                  var t = this.props,
                    a = t.player,
                    n = t.actions,
                    r = t.clickable;
                  this.canBeClicked(a, e) && r && this.togglePlay(a, n);
                },
              },
              {
                key: "handleDoubleClick",
                value: function (e) {
                  var t = this.props,
                    a = t.player,
                    n = t.actions,
                    r = t.dblclickable;
                  this.canBeClicked(a, e) && r && this.toggleFullscreen(a, n);
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = y),
        (y.propTypes = v),
        (y.defaultProps = { clickable: !0, dblclickable: !0 }),
        (y.displayName = "Shortcut");
    },
    21303: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = r(a(94184)),
        p = n(a(6021)),
        v = {
          className: c.default.string,
          onMouseDown: c.default.func,
          onMouseMove: c.default.func,
          stepForward: c.default.func,
          stepBack: c.default.func,
          sliderActive: c.default.func,
          sliderInactive: c.default.func,
          onMouseUp: c.default.func,
          onFocus: c.default.func,
          onBlur: c.default.func,
          onClick: c.default.func,
          getPercent: c.default.func,
          vertical: c.default.bool,
          children: c.default.node,
          label: c.default.string,
          valuenow: c.default.string,
          valuetext: c.default.string,
        },
        y = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).handleMouseDown = n.handleMouseDown.bind((0, d.default)(n))),
              (n.handleMouseMove = n.handleMouseMove.bind((0, d.default)(n))),
              (n.handleMouseUp = n.handleMouseUp.bind((0, d.default)(n))),
              (n.handleFocus = n.handleFocus.bind((0, d.default)(n))),
              (n.handleBlur = n.handleBlur.bind((0, d.default)(n))),
              (n.handleClick = n.handleClick.bind((0, d.default)(n))),
              (n.handleKeyPress = n.handleKeyPress.bind((0, d.default)(n))),
              (n.stepForward = n.stepForward.bind((0, d.default)(n))),
              (n.stepBack = n.stepBack.bind((0, d.default)(n))),
              (n.calculateDistance = n.calculateDistance.bind(
                (0, d.default)(n)
              )),
              (n.getProgress = n.getProgress.bind((0, d.default)(n))),
              (n.renderChildren = n.renderChildren.bind((0, d.default)(n))),
              (n.state = { active: !1 }),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener(
                    "mousemove",
                    this.handleMouseMove,
                    !0
                  ),
                    document.removeEventListener(
                      "mouseup",
                      this.handleMouseUp,
                      !0
                    ),
                    document.removeEventListener(
                      "touchmove",
                      this.handleMouseMove,
                      !0
                    ),
                    document.removeEventListener(
                      "touchend",
                      this.handleMouseUp,
                      !0
                    ),
                    document.removeEventListener(
                      "keydown",
                      this.handleKeyPress,
                      !0
                    );
                },
              },
              {
                key: "getProgress",
                value: function () {
                  var e = this.props.getPercent;
                  if (!e) return 0;
                  var t = e();
                  return (
                    ("number" !== typeof t || t < 0 || t === 1 / 0) && (t = 0),
                    t
                  );
                },
              },
              {
                key: "handleMouseDown",
                value: function (e) {
                  var t = this.props.onMouseDown;
                  document.addEventListener(
                    "mousemove",
                    this.handleMouseMove,
                    !0
                  ),
                    document.addEventListener(
                      "mouseup",
                      this.handleMouseUp,
                      !0
                    ),
                    document.addEventListener(
                      "touchmove",
                      this.handleMouseMove,
                      !0
                    ),
                    document.addEventListener(
                      "touchend",
                      this.handleMouseUp,
                      !0
                    ),
                    this.setState({ active: !0 }),
                    this.props.sliderActive && this.props.sliderActive(e),
                    this.handleMouseMove(e),
                    t && t(e);
                },
              },
              {
                key: "handleMouseMove",
                value: function (e) {
                  var t = this.props.onMouseMove;
                  t && t(e);
                },
              },
              {
                key: "handleMouseUp",
                value: function (e) {
                  e.preventDefault();
                  var t = this.props.onMouseUp;
                  document.removeEventListener(
                    "mousemove",
                    this.handleMouseMove,
                    !0
                  ),
                    document.removeEventListener(
                      "mouseup",
                      this.handleMouseUp,
                      !0
                    ),
                    document.removeEventListener(
                      "touchmove",
                      this.handleMouseMove,
                      !0
                    ),
                    document.removeEventListener(
                      "touchend",
                      this.handleMouseUp,
                      !0
                    ),
                    this.setState({ active: !1 }),
                    this.props.sliderInactive && this.props.sliderInactive(e),
                    t && t(e);
                },
              },
              {
                key: "handleFocus",
                value: function (e) {
                  document.addEventListener("keydown", this.handleKeyPress, !0),
                    this.props.onFocus && this.props.onFocus(e);
                },
              },
              {
                key: "handleBlur",
                value: function (e) {
                  document.removeEventListener(
                    "keydown",
                    this.handleKeyPress,
                    !0
                  ),
                    this.props.onBlur && this.props.onBlur(e);
                },
              },
              {
                key: "handleClick",
                value: function (e) {
                  e.preventDefault(),
                    this.props.onClick && this.props.onClick(e);
                },
              },
              {
                key: "handleKeyPress",
                value: function (e) {
                  37 === e.which || 40 === e.which
                    ? (e.preventDefault(), e.stopPropagation(), this.stepBack())
                    : (38 !== e.which && 39 !== e.which) ||
                      (e.preventDefault(),
                      e.stopPropagation(),
                      this.stepForward());
                },
              },
              {
                key: "stepForward",
                value: function () {
                  this.props.stepForward && this.props.stepForward();
                },
              },
              {
                key: "stepBack",
                value: function () {
                  this.props.stepBack && this.props.stepBack();
                },
              },
              {
                key: "calculateDistance",
                value: function (e) {
                  var t = this.slider,
                    a = p.getPointerPosition(t, e);
                  return this.props.vertical ? a.y : a.x;
                },
              },
              {
                key: "renderChildren",
                value: function () {
                  var e = this.getProgress(),
                    t = "".concat((100 * e).toFixed(2), "%");
                  return f.default.Children.map(
                    this.props.children,
                    function (a) {
                      return f.default.cloneElement(a, {
                        progress: e,
                        percentage: t,
                      });
                    }
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.vertical,
                    n = t.label,
                    r = t.valuenow,
                    o = t.valuetext;
                  return f.default.createElement(
                    "div",
                    {
                      className: (0, h.default)(
                        this.props.className,
                        {
                          "video-react-slider-vertical": a,
                          "video-react-slider-horizontal": !a,
                          "video-react-sliding": this.state.active,
                        },
                        "video-react-slider"
                      ),
                      ref: function (t) {
                        e.slider = t;
                      },
                      tabIndex: "0",
                      role: "slider",
                      onMouseDown: this.handleMouseDown,
                      onTouchStart: this.handleMouseDown,
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                      onClick: this.handleClick,
                      "aria-label": n || "",
                      "aria-valuenow": r || "",
                      "aria-valuetext": o || "",
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                    },
                    this.renderChildren()
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = y), (y.propTypes = v), (y.displayName = "Slider");
    },
    20122: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(60693)),
        l = r(a(34575)),
        u = r(a(93913)),
        i = r(a(78585)),
        d = r(a(29754)),
        s = r(a(81506)),
        c = r(a(2205)),
        f = r(a(45697)),
        h = n(a(67294)),
        p = r(a(94184)),
        v = a(43453),
        y = {
          actions: f.default.object,
          player: f.default.object,
          children: f.default.any,
          startTime: f.default.number,
          loop: f.default.bool,
          muted: f.default.bool,
          autoPlay: f.default.bool,
          playsInline: f.default.bool,
          src: f.default.string,
          poster: f.default.string,
          className: f.default.string,
          preload: f.default.oneOf(["auto", "metadata", "none"]),
          crossOrigin: f.default.string,
          onLoadStart: f.default.func,
          onWaiting: f.default.func,
          onCanPlay: f.default.func,
          onCanPlayThrough: f.default.func,
          onPlaying: f.default.func,
          onEnded: f.default.func,
          onSeeking: f.default.func,
          onSeeked: f.default.func,
          onPlay: f.default.func,
          onPause: f.default.func,
          onProgress: f.default.func,
          onDurationChange: f.default.func,
          onError: f.default.func,
          onSuspend: f.default.func,
          onAbort: f.default.func,
          onEmptied: f.default.func,
          onStalled: f.default.func,
          onLoadedMetadata: f.default.func,
          onLoadedData: f.default.func,
          onTimeUpdate: f.default.func,
          onRateChange: f.default.func,
          onVolumeChange: f.default.func,
          onResize: f.default.func,
        },
        m = (function (e) {
          function t(e) {
            var a;
            return (
              (0, l.default)(this, t),
              ((a = (0, i.default)(
                this,
                (0, d.default)(t).call(this, e)
              )).video = null),
              (a.play = a.play.bind((0, s.default)(a))),
              (a.pause = a.pause.bind((0, s.default)(a))),
              (a.seek = a.seek.bind((0, s.default)(a))),
              (a.forward = a.forward.bind((0, s.default)(a))),
              (a.replay = a.replay.bind((0, s.default)(a))),
              (a.toggleFullscreen = a.toggleFullscreen.bind((0, s.default)(a))),
              (a.getProperties = a.getProperties.bind((0, s.default)(a))),
              (a.renderChildren = a.renderChildren.bind((0, s.default)(a))),
              (a.handleLoadStart = a.handleLoadStart.bind((0, s.default)(a))),
              (a.handleCanPlay = a.handleCanPlay.bind((0, s.default)(a))),
              (a.handleCanPlayThrough = a.handleCanPlayThrough.bind(
                (0, s.default)(a)
              )),
              (a.handlePlay = a.handlePlay.bind((0, s.default)(a))),
              (a.handlePlaying = a.handlePlaying.bind((0, s.default)(a))),
              (a.handlePause = a.handlePause.bind((0, s.default)(a))),
              (a.handleEnded = a.handleEnded.bind((0, s.default)(a))),
              (a.handleWaiting = a.handleWaiting.bind((0, s.default)(a))),
              (a.handleSeeking = a.handleSeeking.bind((0, s.default)(a))),
              (a.handleSeeked = a.handleSeeked.bind((0, s.default)(a))),
              (a.handleFullscreenChange = a.handleFullscreenChange.bind(
                (0, s.default)(a)
              )),
              (a.handleError = a.handleError.bind((0, s.default)(a))),
              (a.handleSuspend = a.handleSuspend.bind((0, s.default)(a))),
              (a.handleAbort = a.handleAbort.bind((0, s.default)(a))),
              (a.handleEmptied = a.handleEmptied.bind((0, s.default)(a))),
              (a.handleStalled = a.handleStalled.bind((0, s.default)(a))),
              (a.handleLoadedMetaData = a.handleLoadedMetaData.bind(
                (0, s.default)(a)
              )),
              (a.handleLoadedData = a.handleLoadedData.bind((0, s.default)(a))),
              (a.handleTimeUpdate = a.handleTimeUpdate.bind((0, s.default)(a))),
              (a.handleRateChange = a.handleRateChange.bind((0, s.default)(a))),
              (a.handleVolumeChange = a.handleVolumeChange.bind(
                (0, s.default)(a)
              )),
              (a.handleDurationChange = a.handleDurationChange.bind(
                (0, s.default)(a)
              )),
              (a.handleProgress = (0, v.throttle)(
                a.handleProgress.bind((0, s.default)(a)),
                250
              )),
              (a.handleKeypress = a.handleKeypress.bind((0, s.default)(a))),
              (a.handleTextTrackChange = a.handleTextTrackChange.bind(
                (0, s.default)(a)
              )),
              a
            );
          }
          return (
            (0, c.default)(t, e),
            (0, u.default)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.forceUpdate(),
                    this.video &&
                      this.video.textTracks &&
                      ((this.video.textTracks.onaddtrack =
                        this.handleTextTrackChange),
                      (this.video.textTracks.onremovetrack =
                        this.handleTextTrackChange));
                },
              },
              {
                key: "getProperties",
                value: function () {
                  var e = this;
                  return this.video
                    ? v.mediaProperties.reduce(function (t, a) {
                        return (t[a] = e.video[a]), t;
                      }, {})
                    : null;
                },
              },
              {
                key: "handleTextTrackChange",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.player;
                  if (this.video && this.video.textTracks) {
                    var n = Array.from(this.video.textTracks).find(function (
                      e
                    ) {
                      return "showing" === e.mode;
                    });
                    n !== a.activeTextTrack && t.activateTextTrack(n);
                  }
                },
              },
              {
                key: "play",
                value: function () {
                  var e = this.video.play();
                  void 0 !== e && e.catch(function () {}).then(function () {});
                },
              },
              {
                key: "pause",
                value: function () {
                  var e = this.video.pause();
                  void 0 !== e && e.catch(function () {}).then(function () {});
                },
              },
              {
                key: "load",
                value: function () {
                  this.video.load();
                },
              },
              {
                key: "addTextTrack",
                value: function () {
                  var e;
                  (e = this.video).addTextTrack.apply(e, arguments);
                },
              },
              {
                key: "canPlayType",
                value: function () {
                  var e;
                  (e = this.video).canPlayType.apply(e, arguments);
                },
              },
              {
                key: "togglePlay",
                value: function () {
                  this.video.paused ? this.play() : this.pause();
                },
              },
              {
                key: "seek",
                value: function (e) {
                  try {
                    this.video.currentTime = e;
                  } catch (t) {}
                },
              },
              {
                key: "forward",
                value: function (e) {
                  this.seek(this.video.currentTime + e);
                },
              },
              {
                key: "replay",
                value: function (e) {
                  this.forward(-e);
                },
              },
              {
                key: "toggleFullscreen",
                value: function () {
                  var e = this.props,
                    t = e.player;
                  e.actions.toggleFullscreen(t);
                },
              },
              {
                key: "handleLoadStart",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onLoadStart;
                  t.handleLoadStart(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleCanPlay",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onCanPlay;
                  t.handleCanPlay(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleCanPlayThrough",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onCanPlayThrough;
                  t.handleCanPlayThrough(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handlePlaying",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onPlaying;
                  t.handlePlaying(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handlePlay",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onPlay;
                  t.handlePlay(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handlePause",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onPause;
                  t.handlePause(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleDurationChange",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onDurationChange;
                  t.handleDurationChange(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleProgress",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onProgress;
                  this.video && t.handleProgressChange(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleEnded",
                value: function () {
                  var e = this.props,
                    t = e.loop,
                    a = e.player,
                    n = e.actions,
                    r = e.onEnded;
                  t ? (this.seek(0), this.play()) : a.paused || this.pause(),
                    n.handleEnd(this.getProperties()),
                    r && r.apply(void 0, arguments);
                },
              },
              {
                key: "handleWaiting",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onWaiting;
                  t.handleWaiting(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleSeeking",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onSeeking;
                  t.handleSeeking(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleSeeked",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onSeeked;
                  t.handleSeeked(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              { key: "handleFullscreenChange", value: function () {} },
              {
                key: "handleSuspend",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onSuspend;
                  t.handleSuspend(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleAbort",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onAbort;
                  t.handleAbort(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleEmptied",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onEmptied;
                  t.handleEmptied(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleStalled",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onStalled;
                  t.handleStalled(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleLoadedMetaData",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onLoadedMetadata,
                    n = e.startTime;
                  n && n > 0 && (this.video.currentTime = n),
                    t.handleLoadedMetaData(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleLoadedData",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onLoadedData;
                  t.handleLoadedData(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleTimeUpdate",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onTimeUpdate;
                  t.handleTimeUpdate(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleRateChange",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onRateChange;
                  t.handleRateChange(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleVolumeChange",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onVolumeChange;
                  t.handleVolumeChange(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleError",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onError;
                  t.handleError(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              {
                key: "handleResize",
                value: function () {
                  var e = this.props,
                    t = e.actions,
                    a = e.onResize;
                  t.handleResize(this.getProperties()),
                    a && a.apply(void 0, arguments);
                },
              },
              { key: "handleKeypress", value: function () {} },
              {
                key: "renderChildren",
                value: function () {
                  var e = this,
                    t = (0, o.default)({}, this.props, { video: this.video });
                  return this.video
                    ? h.default.Children.toArray(this.props.children)
                        .filter(v.isVideoChild)
                        .map(function (a) {
                          var n;
                          if ("string" === typeof a.type) {
                            if ("source" === a.type) {
                              var r = (n = (0, o.default)({}, a.props)).onError;
                              n.onError = function () {
                                r && r.apply(void 0, arguments),
                                  e.handleError.apply(e, arguments);
                              };
                            }
                          } else n = t;
                          return h.default.cloneElement(a, n);
                        })
                    : null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.loop,
                    n = t.poster,
                    r = t.preload,
                    o = t.src,
                    l = t.autoPlay,
                    u = t.playsInline,
                    i = t.muted,
                    d = t.crossOrigin,
                    s = t.videoId;
                  return h.default.createElement(
                    "video",
                    {
                      className: (0, p.default)(
                        "video-react-video",
                        this.props.className
                      ),
                      id: s,
                      crossOrigin: d,
                      ref: function (t) {
                        e.video = t;
                      },
                      muted: i,
                      preload: r,
                      loop: a,
                      playsInline: u,
                      autoPlay: l,
                      poster: n,
                      src: o,
                      onLoadStart: this.handleLoadStart,
                      onWaiting: this.handleWaiting,
                      onCanPlay: this.handleCanPlay,
                      onCanPlayThrough: this.handleCanPlayThrough,
                      onPlaying: this.handlePlaying,
                      onEnded: this.handleEnded,
                      onSeeking: this.handleSeeking,
                      onSeeked: this.handleSeeked,
                      onPlay: this.handlePlay,
                      onPause: this.handlePause,
                      onProgress: this.handleProgress,
                      onDurationChange: this.handleDurationChange,
                      onError: this.handleError,
                      onSuspend: this.handleSuspend,
                      onAbort: this.handleAbort,
                      onEmptied: this.handleEmptied,
                      onStalled: this.handleStalled,
                      onLoadedMetadata: this.handleLoadedMetaData,
                      onLoadedData: this.handleLoadedData,
                      onTimeUpdate: this.handleTimeUpdate,
                      onRateChange: this.handleRateChange,
                      onVolumeChange: this.handleVolumeChange,
                      tabIndex: "-1",
                    },
                    this.renderChildren()
                  );
                },
              },
              {
                key: "playbackRate",
                get: function () {
                  return this.video.playbackRate;
                },
                set: function (e) {
                  this.video.playbackRate = e;
                },
              },
              {
                key: "muted",
                get: function () {
                  return this.video.muted;
                },
                set: function (e) {
                  this.video.muted = e;
                },
              },
              {
                key: "volume",
                get: function () {
                  return this.video.volume;
                },
                set: function (e) {
                  e > 1 && (e = 1), e < 0 && (e = 0), (this.video.volume = e);
                },
              },
              {
                key: "videoWidth",
                get: function () {
                  return this.video.videoWidth;
                },
              },
              {
                key: "videoHeight",
                get: function () {
                  return this.video.videoHeight;
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t.default = m), (m.propTypes = y), (m.displayName = "Video");
    },
    77557: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = r(a(94184)),
        p = r(a(9077)),
        v = {
          player: c.default.object,
          actions: c.default.object,
          className: c.default.string,
          offMenuText: c.default.string,
          showOffMenu: c.default.bool,
          kinds: c.default.array,
        },
        y = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).getTextTrackItems = n.getTextTrackItems.bind(
                (0, d.default)(n)
              )),
              (n.updateState = n.updateState.bind((0, d.default)(n))),
              (n.handleSelectItem = n.handleSelectItem.bind((0, d.default)(n))),
              (n.state = n.getTextTrackItems()),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              {
                key: "componentDidUpdate",
                value: function () {
                  this.updateState();
                },
              },
              {
                key: "getTextTrackItems",
                value: function () {
                  var e = this.props,
                    t = e.kinds,
                    a = e.player,
                    n = e.offMenuText,
                    r = e.showOffMenu,
                    o = a.textTracks,
                    l = a.activeTextTrack,
                    u = { items: [], selectedIndex: 0 },
                    i = Array.from(o || []);
                  return (
                    0 === i.length ||
                      (r && u.items.push({ label: n || "Off", value: null }),
                      i.forEach(function (e) {
                        (t.length && !t.includes(e.kind)) ||
                          u.items.push({ label: e.label, value: e.language });
                      }),
                      (u.selectedIndex = u.items.findIndex(function (e) {
                        return l && l.language === e.value;
                      })),
                      -1 === u.selectedIndex && (u.selectedIndex = 0)),
                    u
                  );
                },
              },
              {
                key: "updateState",
                value: function () {
                  var e = this.getTextTrackItems();
                  (e.selectedIndex === this.state.selectedIndex &&
                    this.textTrackItemsAreEqual(e.items, this.state.items)) ||
                    this.setState(e);
                },
              },
              {
                key: "textTrackItemsAreEqual",
                value: function (e, t) {
                  if (e.length !== t.length) return !1;
                  for (var a = 0; a < e.length; a++)
                    if (
                      !t[a] ||
                      e[a].label !== t[a].label ||
                      e[a].value !== t[a].value
                    )
                      return !1;
                  return !0;
                },
              },
              {
                key: "handleSelectItem",
                value: function (e) {
                  var t = this.props,
                    a = t.player,
                    n = t.actions,
                    r = t.showOffMenu,
                    o = a.textTracks;
                  Array.from(o).forEach(function (t, a) {
                    e === (r ? a + 1 : a)
                      ? ((t.mode = "showing"), n.activateTextTrack(t))
                      : (t.mode = "hidden");
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.items,
                    a = e.selectedIndex;
                  return f.default.createElement(
                    p.default,
                    {
                      className: (0, h.default)(
                        "video-react-closed-caption",
                        this.props.className
                      ),
                      onSelectItem: this.handleSelectItem,
                      items: t,
                      selectedIndex: a,
                    },
                    f.default.createElement(
                      "span",
                      { className: "video-react-control-text" },
                      "Closed Caption"
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (y.propTypes = v),
        (y.defaultProps = {
          offMenuText: "Off",
          showOffMenu: !0,
          kinds: ["captions", "subtitles"],
        }),
        (y.displayName = "ClosedCaptionButton");
      var m = y;
      t.default = m;
    },
    7473: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(6479)),
        l = r(a(34575)),
        u = r(a(93913)),
        i = r(a(78585)),
        d = r(a(29754)),
        s = r(a(81506)),
        c = r(a(2205)),
        f = r(a(45697)),
        h = n(a(67294)),
        p = r(a(94184)),
        v = r(a(54850)),
        y = r(a(17058)),
        m = r(a(50183)),
        g = r(a(9356)),
        b = r(a(93282)),
        k = r(a(61866)),
        E = r(a(66008)),
        P = r(a(72042)),
        C = r(a(24609)),
        T = r(a(90228)),
        _ = r(a(44223)),
        S = a(43453),
        M = {
          children: f.default.any,
          autoHide: f.default.bool,
          autoHideTime: f.default.number,
          disableDefaultControls: f.default.bool,
          disableCompletely: f.default.bool,
          className: f.default.string,
        },
        x = (function (e) {
          function t(e) {
            var a;
            return (
              (0, l.default)(this, t),
              ((a = (0, i.default)(
                this,
                (0, d.default)(t).call(this, e)
              )).getDefaultChildren = a.getDefaultChildren.bind(
                (0, s.default)(a)
              )),
              (a.getFullChildren = a.getFullChildren.bind((0, s.default)(a))),
              a
            );
          }
          return (
            (0, c.default)(t, e),
            (0, u.default)(t, [
              {
                key: "getDefaultChildren",
                value: function () {
                  return [
                    h.default.createElement(y.default, {
                      key: "play-toggle",
                      order: 1,
                    }),
                    h.default.createElement(T.default, {
                      key: "volume-menu-button",
                      order: 4,
                    }),
                    h.default.createElement(E.default, {
                      key: "current-time-display",
                      order: 5.1,
                    }),
                    h.default.createElement(C.default, {
                      key: "time-divider",
                      order: 5.2,
                    }),
                    h.default.createElement(P.default, {
                      key: "duration-display",
                      order: 5.3,
                    }),
                    h.default.createElement(v.default, {
                      key: "progress-control",
                      order: 6,
                    }),
                    h.default.createElement(b.default, {
                      key: "fullscreen-toggle",
                      order: 8,
                    }),
                  ];
                },
              },
              {
                key: "getFullChildren",
                value: function () {
                  return [
                    h.default.createElement(y.default, {
                      key: "play-toggle",
                      order: 1,
                    }),
                    h.default.createElement(g.default, {
                      key: "replay-control",
                      order: 2,
                    }),
                    h.default.createElement(m.default, {
                      key: "forward-control",
                      order: 3,
                    }),
                    h.default.createElement(T.default, {
                      key: "volume-menu-button",
                      order: 4,
                    }),
                    h.default.createElement(E.default, {
                      key: "current-time-display",
                      order: 5,
                    }),
                    h.default.createElement(C.default, {
                      key: "time-divider",
                      order: 6,
                    }),
                    h.default.createElement(P.default, {
                      key: "duration-display",
                      order: 7,
                    }),
                    h.default.createElement(v.default, {
                      key: "progress-control",
                      order: 8,
                    }),
                    h.default.createElement(k.default, {
                      key: "remaining-time-display",
                      order: 9,
                    }),
                    h.default.createElement(_.default, {
                      rates: [1, 1.25, 1.5, 2],
                      key: "playback-rate",
                      order: 10,
                    }),
                    h.default.createElement(b.default, {
                      key: "fullscreen-toggle",
                      order: 11,
                    }),
                  ];
                },
              },
              {
                key: "getChildren",
                value: function () {
                  var e = h.default.Children.toArray(this.props.children),
                    t = this.props.disableDefaultControls
                      ? []
                      : this.getDefaultChildren(),
                    a = this.props,
                    n = (a.className, (0, o.default)(a, ["className"]));
                  return (0, S.mergeAndSortChildren)(t, e, n);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.autoHide,
                    a = e.className,
                    n = e.disableCompletely,
                    r = this.getChildren();
                  return n
                    ? null
                    : h.default.createElement(
                        "div",
                        {
                          className: (0, p.default)(
                            "video-react-control-bar",
                            { "video-react-control-bar-auto-hide": t },
                            a
                          ),
                        },
                        r
                      );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t.default = x),
        (x.propTypes = M),
        (x.defaultProps = { autoHide: !0, disableCompletely: !1 }),
        (x.displayName = "ControlBar");
    },
    50183: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = (0, n(a(82073)).default)("forward");
      r.displayName = "ForwardControl";
      var o = r;
      t.default = o;
    },
    82073: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = {
          actions: c.default.object,
          className: c.default.string,
          seconds: c.default.oneOf([5, 10, 30]),
        },
        p = { seconds: 10 };
      t.default = function (e) {
        var t = (function (t) {
          function a(e, t) {
            var n;
            return (
              (0, o.default)(this, a),
              ((n = (0, u.default)(
                this,
                (0, i.default)(a).call(this, e, t)
              )).handleClick = n.handleClick.bind((0, d.default)(n))),
              n
            );
          }
          return (
            (0, s.default)(a, t),
            (0, l.default)(a, [
              {
                key: "handleClick",
                value: function () {
                  var t = this.props,
                    a = t.actions,
                    n = t.seconds;
                  "forward" === e ? a.forward(n) : a.replay(n);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    a = this.props,
                    n = a.seconds,
                    r = a.className,
                    o = [
                      "video-react-control",
                      "video-react-button",
                      "video-react-icon",
                    ];
                  return (
                    o.push(
                      "video-react-icon-".concat(e, "-").concat(n),
                      "video-react-".concat(e, "-control")
                    ),
                    r && o.push(r),
                    f.default.createElement(
                      "button",
                      {
                        ref: function (e) {
                          t.button = e;
                        },
                        className: o.join(" "),
                        type: "button",
                        onClick: this.handleClick,
                      },
                      f.default.createElement(
                        "span",
                        { className: "video-react-control-text" },
                        "".concat(e, " ").concat(n, " seconds")
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(f.Component);
        return (t.propTypes = h), (t.defaultProps = p), t;
      };
    },
    93282: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = r(a(94184)),
        p = {
          actions: c.default.object,
          player: c.default.object,
          className: c.default.string,
        },
        v = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).handleClick = n.handleClick.bind((0, d.default)(n))),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              {
                key: "handleClick",
                value: function () {
                  var e = this.props,
                    t = e.player;
                  e.actions.toggleFullscreen(t);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.player,
                    n = t.className;
                  return f.default.createElement(
                    "button",
                    {
                      className: (0, h.default)(
                        n,
                        {
                          "video-react-icon-fullscreen-exit": a.isFullscreen,
                          "video-react-icon-fullscreen": !a.isFullscreen,
                        },
                        "video-react-fullscreen-control video-react-control video-react-button video-react-icon"
                      ),
                      ref: function (t) {
                        e.button = t;
                      },
                      type: "button",
                      tabIndex: "0",
                      onClick: this.handleClick,
                    },
                    f.default.createElement(
                      "span",
                      { className: "video-react-control-text" },
                      "Non-Fullscreen"
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = v), (v.propTypes = p), (v.displayName = "FullscreenToggle");
    },
    97828: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
      var r = n(a(45697)),
        o = n(a(67294)),
        l = n(a(94184)),
        u = {
          duration: r.default.number,
          buffered: r.default.object,
          className: r.default.string,
        };
      function i(e) {
        var t = e.buffered,
          a = e.duration,
          n = e.className;
        if (!t || !t.length) return null;
        var r = t.end(t.length - 1),
          u = {};
        function i(e, t) {
          var a = e / t || 0;
          return "".concat(100 * (a >= 1 ? 1 : a), "%");
        }
        r > a && (r = a), (u.width = i(r, a));
        for (var d = [], s = 0; s < t.length; s++) {
          var c = t.start(s),
            f = t.end(s),
            h = o.default.createElement("div", {
              style: { left: i(c, r), width: i(f - c, r) },
              key: "part-".concat(s),
            });
          d.push(h);
        }
        return (
          0 === d.length && (d = null),
          o.default.createElement(
            "div",
            {
              style: u,
              className: (0, l.default)("video-react-load-progress", n),
            },
            o.default.createElement(
              "span",
              { className: "video-react-control-text" },
              "Loaded: 0%"
            ),
            d
          )
        );
      }
      (i.propTypes = u), (i.displayName = "LoadProgressBar");
    },
    36082: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(a(45697)),
        o = n(a(67294)),
        l = n(a(94184)),
        u = a(43453);
      function i(e) {
        var t = e.duration,
          a = e.mouseTime,
          n = e.className,
          r = e.text;
        if (!a.time) return null;
        var i = r || (0, u.formatTime)(a.time, t);
        return o.default.createElement("div", {
          className: (0, l.default)("video-react-mouse-display", n),
          style: { left: "".concat(a.position, "px") },
          "data-current-time": i,
        });
      }
      (i.propTypes = {
        duration: r.default.number,
        mouseTime: r.default.object,
        className: r.default.string,
      }),
        (i.displayName = "MouseTimeDisplay");
      var d = i;
      t.default = d;
    },
    73258: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = d);
      var r = n(a(45697)),
        o = n(a(67294)),
        l = n(a(94184)),
        u = a(43453),
        i = {
          currentTime: r.default.number,
          duration: r.default.number,
          percentage: r.default.string,
          className: r.default.string,
        };
      function d(e) {
        var t = e.currentTime,
          a = e.duration,
          n = e.percentage,
          r = e.className;
        return o.default.createElement(
          "div",
          {
            "data-current-time": (0, u.formatTime)(t, a),
            className: (0, l.default)(
              "video-react-play-progress video-react-slider-bar",
              r
            ),
            style: { width: n },
          },
          o.default.createElement(
            "span",
            { className: "video-react-control-text" },
            "Progress: ".concat(n)
          )
        );
      }
      (d.propTypes = i), (d.displayName = "PlayProgressBar");
    },
    17058: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = r(a(94184)),
        p = {
          actions: c.default.object,
          player: c.default.object,
          className: c.default.string,
        },
        v = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).handleClick = n.handleClick.bind((0, d.default)(n))),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              {
                key: "handleClick",
                value: function () {
                  var e = this.props,
                    t = e.actions;
                  e.player.paused ? t.play() : t.pause();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.player,
                    n = t.className,
                    r = a.paused ? "Play" : "Pause";
                  return f.default.createElement(
                    "button",
                    {
                      ref: function (t) {
                        e.button = t;
                      },
                      className: (0, h.default)(n, {
                        "video-react-play-control": !0,
                        "video-react-control": !0,
                        "video-react-button": !0,
                        "video-react-paused": a.paused,
                        "video-react-playing": !a.paused,
                      }),
                      type: "button",
                      tabIndex: "0",
                      onClick: this.handleClick,
                    },
                    f.default.createElement(
                      "span",
                      { className: "video-react-control-text" },
                      r
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = v), (v.propTypes = p), (v.displayName = "PlayToggle");
    },
    26203: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(2205)),
        s = n(a(67294)),
        c = r(a(44223)),
        f = a(43453),
        h = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              (n = (0, u.default)(this, (0, i.default)(t).call(this, e, a))),
              (0, f.deprecatedWarning)(
                "PlaybackRate",
                "PlaybackRateMenuButton"
              ),
              n
            );
          }
          return (
            (0, d.default)(t, e),
            (0, l.default)(t, [
              {
                key: "render",
                value: function () {
                  return s.default.createElement(c.default, this.props);
                },
              },
            ]),
            t
          );
        })(s.Component);
      (t.default = h), (h.displayName = "PlaybackRate");
    },
    44223: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = r(a(94184)),
        p = r(a(9077)),
        v = {
          player: c.default.object,
          actions: c.default.object,
          rates: c.default.array,
          className: c.default.string,
        },
        y = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).handleSelectItem = n.handleSelectItem.bind((0, d.default)(n))),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              {
                key: "handleSelectItem",
                value: function (e) {
                  var t = this.props,
                    a = t.rates,
                    n = t.actions;
                  e >= 0 && e < a.length && n.changeRate(a[e]);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.rates,
                    a = e.player,
                    n = t.map(function (e) {
                      return { label: "".concat(e, "x"), value: e };
                    }),
                    r = t.indexOf(a.playbackRate) || 0;
                  return f.default.createElement(
                    p.default,
                    {
                      className: (0, h.default)(
                        "video-react-playback-rate",
                        this.props.className
                      ),
                      onSelectItem: this.handleSelectItem,
                      items: n,
                      selectedIndex: r,
                    },
                    f.default.createElement(
                      "span",
                      { className: "video-react-control-text" },
                      "Playback Rate"
                    ),
                    f.default.createElement(
                      "div",
                      { className: "video-react-playback-rate-value" },
                      "".concat(a.playbackRate.toFixed(2), "x")
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (y.propTypes = v),
        (y.defaultProps = { rates: [2, 1.5, 1.25, 1, 0.5, 0.25] }),
        (y.displayName = "PlaybackRateMenuButton");
      var m = y;
      t.default = m;
    },
    54850: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(67154)),
        l = r(a(34575)),
        u = r(a(93913)),
        i = r(a(78585)),
        d = r(a(29754)),
        s = r(a(81506)),
        c = r(a(2205)),
        f = r(a(45697)),
        h = n(a(67294)),
        p = r(a(94184)),
        v = n(a(6021)),
        y = r(a(25775)),
        m = { player: f.default.object, className: f.default.string },
        g = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, l.default)(this, t),
              ((n = (0, i.default)(
                this,
                (0, d.default)(t).call(this, e, a)
              )).state = { mouseTime: { time: null, position: 0 } }),
              (n.handleMouseMoveThrottle = n.handleMouseMove.bind(
                (0, s.default)(n)
              )),
              n
            );
          }
          return (
            (0, c.default)(t, e),
            (0, u.default)(t, [
              {
                key: "handleMouseMove",
                value: function (e) {
                  if (e.pageX) {
                    var t = this.props.player.duration,
                      a = this.seekBar,
                      n = v.getPointerPosition(a, e).x * t,
                      r = e.pageX - v.findElPosition(a).left;
                    this.setState({ mouseTime: { time: n, position: r } });
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.className;
                  return h.default.createElement(
                    "div",
                    {
                      onMouseMove: this.handleMouseMoveThrottle,
                      className: (0, p.default)(
                        "video-react-progress-control video-react-control",
                        t
                      ),
                    },
                    h.default.createElement(
                      y.default,
                      (0, o.default)(
                        {
                          mouseTime: this.state.mouseTime,
                          ref: function (t) {
                            e.seekBar = t;
                          },
                        },
                        this.props
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (t.default = g), (g.propTypes = m), (g.displayName = "ProgressControl");
    },
    9356: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = (0, n(a(82073)).default)("replay");
      r.displayName = "ReplayControl";
      var o = r;
      t.default = o;
    },
    25775: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = r(a(94184)),
        p = r(a(21303)),
        v = r(a(73258)),
        y = r(a(97828)),
        m = r(a(36082)),
        g = a(43453),
        b = {
          player: c.default.object,
          mouseTime: c.default.object,
          actions: c.default.object,
          className: c.default.string,
        },
        k = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).getPercent = n.getPercent.bind((0, d.default)(n))),
              (n.getNewTime = n.getNewTime.bind((0, d.default)(n))),
              (n.stepForward = n.stepForward.bind((0, d.default)(n))),
              (n.stepBack = n.stepBack.bind((0, d.default)(n))),
              (n.handleMouseDown = n.handleMouseDown.bind((0, d.default)(n))),
              (n.handleMouseMove = n.handleMouseMove.bind((0, d.default)(n))),
              (n.handleMouseUp = n.handleMouseUp.bind((0, d.default)(n))),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              { key: "componentDidMount", value: function () {} },
              { key: "componentDidUpdate", value: function () {} },
              {
                key: "getPercent",
                value: function () {
                  var e = this.props.player,
                    t = e.currentTime,
                    a = (e.seekingTime || t) / e.duration;
                  return a >= 1 ? 1 : a;
                },
              },
              {
                key: "getNewTime",
                value: function (e) {
                  var t = this.props.player.duration,
                    a = this.slider.calculateDistance(e) * t;
                  return a === t ? a - 0.1 : a;
                },
              },
              { key: "handleMouseDown", value: function () {} },
              {
                key: "handleMouseUp",
                value: function (e) {
                  var t = this.props.actions,
                    a = this.getNewTime(e);
                  t.seek(a), t.handleEndSeeking(a);
                },
              },
              {
                key: "handleMouseMove",
                value: function (e) {
                  var t = this.props.actions,
                    a = this.getNewTime(e);
                  t.handleSeekingTime(a);
                },
              },
              {
                key: "stepForward",
                value: function () {
                  this.props.actions.forward(5);
                },
              },
              {
                key: "stepBack",
                value: function () {
                  this.props.actions.replay(5);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.player,
                    n = a.currentTime,
                    r = a.seekingTime,
                    o = a.duration,
                    l = a.buffered,
                    u = t.mouseTime,
                    i = r || n;
                  return f.default.createElement(
                    p.default,
                    {
                      ref: function (t) {
                        e.slider = t;
                      },
                      label: "video progress bar",
                      className: (0, h.default)(
                        "video-react-progress-holder",
                        this.props.className
                      ),
                      valuenow: (100 * this.getPercent()).toFixed(2),
                      valuetext: (0, g.formatTime)(i, o),
                      onMouseDown: this.handleMouseDown,
                      onMouseMove: this.handleMouseMove,
                      onMouseUp: this.handleMouseUp,
                      getPercent: this.getPercent,
                      stepForward: this.stepForward,
                      stepBack: this.stepBack,
                    },
                    f.default.createElement(y.default, {
                      buffered: l,
                      currentTime: i,
                      duration: o,
                    }),
                    f.default.createElement(m.default, {
                      duration: o,
                      mouseTime: u,
                    }),
                    f.default.createElement(v.default, {
                      currentTime: i,
                      duration: o,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = k), (k.propTypes = b), (k.displayName = "SeekBar");
    },
    90228: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(67154)),
        l = r(a(34575)),
        u = r(a(93913)),
        i = r(a(78585)),
        d = r(a(29754)),
        s = r(a(81506)),
        c = r(a(2205)),
        f = r(a(45697)),
        h = n(a(67294)),
        p = r(a(94184)),
        v = r(a(83842)),
        y = r(a(31251)),
        m = {
          player: f.default.object,
          actions: f.default.object,
          vertical: f.default.bool,
          className: f.default.string,
          alwaysShowVolume: f.default.bool,
        },
        g = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, l.default)(this, t),
              ((n = (0, i.default)(
                this,
                (0, d.default)(t).call(this, e, a)
              )).state = { active: !1 }),
              (n.handleClick = n.handleClick.bind((0, s.default)(n))),
              (n.handleFocus = n.handleFocus.bind((0, s.default)(n))),
              (n.handleBlur = n.handleBlur.bind((0, s.default)(n))),
              n
            );
          }
          return (
            (0, c.default)(t, e),
            (0, u.default)(t, [
              {
                key: "handleClick",
                value: function () {
                  var e = this.props,
                    t = e.player;
                  e.actions.mute(!t.muted);
                },
              },
              {
                key: "handleFocus",
                value: function () {
                  this.setState({ active: !0 });
                },
              },
              {
                key: "handleBlur",
                value: function () {
                  this.setState({ active: !1 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.vertical,
                    a = e.player,
                    n = e.className,
                    r = !t,
                    l = this.volumeLevel;
                  return h.default.createElement(
                    v.default,
                    {
                      className: (0, p.default)(
                        n,
                        {
                          "video-react-volume-menu-button-vertical": t,
                          "video-react-volume-menu-button-horizontal": !t,
                          "video-react-vol-muted": a.muted,
                          "video-react-vol-0": 0 === l && !a.muted,
                          "video-react-vol-1": 1 === l,
                          "video-react-vol-2": 2 === l,
                          "video-react-vol-3": 3 === l,
                          "video-react-slider-active":
                            this.props.alwaysShowVolume || this.state.active,
                          "video-react-lock-showing":
                            this.props.alwaysShowVolume || this.state.active,
                        },
                        "video-react-volume-menu-button"
                      ),
                      onClick: this.handleClick,
                      inline: r,
                    },
                    h.default.createElement(
                      y.default,
                      (0, o.default)(
                        { onFocus: this.handleFocus, onBlur: this.handleBlur },
                        this.props
                      )
                    )
                  );
                },
              },
              {
                key: "volumeLevel",
                get: function () {
                  var e = this.props.player,
                    t = e.volume,
                    a = e.muted,
                    n = 3;
                  return (
                    0 === t || a
                      ? (n = 0)
                      : t < 0.33
                      ? (n = 1)
                      : t < 0.67 && (n = 2),
                    n
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (g.propTypes = m),
        (g.defaultProps = { vertical: !1 }),
        (g.displayName = "VolumeMenuButton");
      var b = g;
      t.default = b;
    },
    60239: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = { children: c.default.any },
        p = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).handleClick = n.handleClick.bind((0, d.default)(n))),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              {
                key: "handleClick",
                value: function (e) {
                  e.preventDefault();
                },
              },
              {
                key: "render",
                value: function () {
                  return f.default.createElement(
                    "div",
                    {
                      className: "video-react-menu video-react-lock-showing",
                      role: "presentation",
                      onClick: this.handleClick,
                    },
                    f.default.createElement(
                      "ul",
                      { className: "video-react-menu-content" },
                      this.props.children
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = p), (p.propTypes = h), (p.displayName = "Menu");
    },
    9077: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = r(a(94184)),
        p = r(a(60239)),
        v = r(a(79533)),
        y = r(a(17191)),
        m = {
          inline: c.default.bool,
          items: c.default.array,
          className: c.default.string,
          onSelectItem: c.default.func,
          children: c.default.any,
          selectedIndex: c.default.number,
        },
        g = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).state = { active: !1, activateIndex: e.selectedIndex || 0 }),
              (n.commitSelection = n.commitSelection.bind((0, d.default)(n))),
              (n.activateMenuItem = n.activateMenuItem.bind((0, d.default)(n))),
              (n.handleClick = n.handleClick.bind((0, d.default)(n))),
              (n.renderMenu = n.renderMenu.bind((0, d.default)(n))),
              (n.handleFocus = n.handleFocus.bind((0, d.default)(n))),
              (n.handleBlur = n.handleBlur.bind((0, d.default)(n))),
              (n.handleUpArrow = n.handleUpArrow.bind((0, d.default)(n))),
              (n.handleDownArrow = n.handleDownArrow.bind((0, d.default)(n))),
              (n.handleEscape = n.handleEscape.bind((0, d.default)(n))),
              (n.handleReturn = n.handleReturn.bind((0, d.default)(n))),
              (n.handleTab = n.handleTab.bind((0, d.default)(n))),
              (n.handleKeyPress = n.handleKeyPress.bind((0, d.default)(n))),
              (n.handleSelectItem = n.handleSelectItem.bind((0, d.default)(n))),
              (n.handleIndexChange = n.handleIndexChange.bind(
                (0, d.default)(n)
              )),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              {
                key: "componentDidUpdate",
                value: function (e) {
                  e.selectedIndex !== this.props.selectedIndex &&
                    this.activateMenuItem(this.props.selectedIndex);
                },
              },
              {
                key: "commitSelection",
                value: function (e) {
                  this.setState({ activateIndex: e }),
                    this.handleIndexChange(e);
                },
              },
              {
                key: "activateMenuItem",
                value: function (e) {
                  this.setState({ activateIndex: e }),
                    this.handleIndexChange(e);
                },
              },
              {
                key: "handleIndexChange",
                value: function (e) {
                  (0, this.props.onSelectItem)(e);
                },
              },
              {
                key: "handleClick",
                value: function () {
                  this.setState(function (e) {
                    return { active: !e.active };
                  });
                },
              },
              {
                key: "handleFocus",
                value: function () {
                  document.addEventListener("keydown", this.handleKeyPress);
                },
              },
              {
                key: "handleBlur",
                value: function () {
                  this.setState({ active: !1 }),
                    document.removeEventListener(
                      "keydown",
                      this.handleKeyPress
                    );
                },
              },
              {
                key: "handleUpArrow",
                value: function (e) {
                  var t = this.props.items;
                  if (this.state.active) {
                    e.preventDefault();
                    var a = this.state.activateIndex - 1;
                    a < 0 && (a = t.length ? t.length - 1 : 0),
                      this.activateMenuItem(a);
                  }
                },
              },
              {
                key: "handleDownArrow",
                value: function (e) {
                  var t = this.props.items;
                  if (this.state.active) {
                    e.preventDefault();
                    var a = this.state.activateIndex + 1;
                    a >= t.length && (a = 0), this.activateMenuItem(a);
                  }
                },
              },
              {
                key: "handleTab",
                value: function (e) {
                  this.state.active &&
                    (e.preventDefault(),
                    this.commitSelection(this.state.activateIndex));
                },
              },
              {
                key: "handleReturn",
                value: function (e) {
                  e.preventDefault(),
                    this.state.active
                      ? this.commitSelection(this.state.activateIndex)
                      : this.setState({ active: !0 });
                },
              },
              {
                key: "handleEscape",
                value: function () {
                  this.setState({ active: !1, activateIndex: 0 });
                },
              },
              {
                key: "handleKeyPress",
                value: function (e) {
                  27 === e.which
                    ? this.handleEscape(e)
                    : 9 === e.which
                    ? this.handleTab(e)
                    : 13 === e.which
                    ? this.handleReturn(e)
                    : 38 === e.which
                    ? this.handleUpArrow(e)
                    : 40 === e.which && this.handleDownArrow(e);
                },
              },
              {
                key: "handleSelectItem",
                value: function (e) {
                  this.commitSelection(e);
                },
              },
              {
                key: "renderMenu",
                value: function () {
                  var e = this;
                  if (!this.state.active) return null;
                  var t = this.props.items;
                  return f.default.createElement(
                    p.default,
                    null,
                    t.map(function (t, a) {
                      return f.default.createElement(v.default, {
                        item: t,
                        index: a,
                        onSelectItem: e.handleSelectItem,
                        activateIndex: e.state.activateIndex,
                        key: "item-".concat(a++),
                      });
                    })
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.inline,
                    n = t.className;
                  return f.default.createElement(
                    y.default,
                    {
                      className: (0, h.default)(
                        n,
                        {
                          "video-react-menu-button-inline": !!a,
                          "video-react-menu-button-popup": !a,
                          "video-react-menu-button-active": this.state.active,
                        },
                        "video-react-control video-react-button video-react-menu-button"
                      ),
                      role: "button",
                      tabIndex: "0",
                      ref: function (t) {
                        e.menuButton = t;
                      },
                      onClick: this.handleClick,
                      onFocus: this.handleFocus,
                      onBlur: this.handleBlur,
                    },
                    this.props.children,
                    this.renderMenu()
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = g), (g.propTypes = m), (g.displayName = "MenuButton");
    },
    79533: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = r(a(94184)),
        p = {
          item: c.default.object,
          index: c.default.number,
          activateIndex: c.default.number,
          onSelectItem: c.default.func,
        },
        v = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).handleClick = n.handleClick.bind((0, d.default)(n))),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              {
                key: "handleClick",
                value: function () {
                  var e = this.props,
                    t = e.index;
                  (0, e.onSelectItem)(t);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.item,
                    a = e.index,
                    n = e.activateIndex;
                  return f.default.createElement(
                    "li",
                    {
                      className: (0, h.default)({
                        "video-react-menu-item": !0,
                        "video-react-selected": a === n,
                      }),
                      role: "menuitem",
                      onClick: this.handleClick,
                    },
                    t.label,
                    f.default.createElement("span", {
                      className: "video-react-control-text",
                    })
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = v), (v.propTypes = p), (v.displayName = "MenuItem");
    },
    62387: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(34575)),
        l = r(a(93913)),
        u = r(a(78585)),
        i = r(a(29754)),
        d = r(a(81506)),
        s = r(a(2205)),
        c = r(a(45697)),
        f = n(a(67294)),
        h = { player: c.default.object, children: c.default.any },
        p = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, o.default)(this, t),
              ((n = (0, u.default)(
                this,
                (0, i.default)(t).call(this, e, a)
              )).handleClick = n.handleClick.bind((0, d.default)(n))),
              n
            );
          }
          return (
            (0, s.default)(t, e),
            (0, l.default)(t, [
              {
                key: "handleClick",
                value: function (e) {
                  e.preventDefault();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.children;
                  return f.default.createElement(
                    "div",
                    {
                      className: "video-react-menu",
                      onClick: this.handleClick,
                    },
                    f.default.createElement(
                      "div",
                      { className: "video-react-menu-content" },
                      e
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (t.default = p), (p.propTypes = h), (p.displayName = "Popup");
    },
    83842: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f);
      var r = n(a(67154)),
        o = n(a(60693)),
        l = n(a(45697)),
        u = n(a(67294)),
        i = n(a(94184)),
        d = n(a(17191)),
        s = n(a(62387)),
        c = {
          inline: l.default.bool,
          onClick: l.default.func.isRequired,
          onFocus: l.default.func,
          onBlur: l.default.func,
          className: l.default.string,
        };
      function f(e) {
        var t = e.inline,
          a = e.className,
          n = (0, o.default)({}, e);
        return (
          delete n.children,
          delete n.inline,
          delete n.className,
          u.default.createElement(
            d.default,
            (0, r.default)(
              {
                className: (0, i.default)(
                  a,
                  {
                    "video-react-menu-button-inline": !!t,
                    "video-react-menu-button-popup": !t,
                  },
                  "video-react-control video-react-button video-react-menu-button"
                ),
              },
              n
            ),
            u.default.createElement(s.default, e)
          )
        );
      }
      (f.propTypes = c),
        (f.defaultProps = { inline: !0 }),
        (f.displayName = "PopupButton");
    },
    66008: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(a(45697)),
        o = n(a(67294)),
        l = n(a(94184)),
        u = a(43453),
        i = { player: r.default.object, className: r.default.string };
      function d(e) {
        var t = e.player,
          a = t.currentTime,
          n = t.duration,
          r = e.className,
          i = (0, u.formatTime)(a, n);
        return o.default.createElement(
          "div",
          {
            className: (0, l.default)(
              "video-react-current-time video-react-time-control video-react-control",
              r
            ),
          },
          o.default.createElement(
            "div",
            {
              className: "video-react-current-time-display",
              "aria-live": "off",
            },
            o.default.createElement(
              "span",
              { className: "video-react-control-text" },
              "Current Time "
            ),
            i
          )
        );
      }
      (d.propTypes = i), (d.displayName = "CurrentTimeDisplay");
      var s = d;
      t.default = s;
    },
    72042: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(a(45697)),
        o = n(a(67294)),
        l = n(a(94184)),
        u = a(43453),
        i = { player: r.default.object, className: r.default.string };
      function d(e) {
        var t = e.player.duration,
          a = e.className,
          n = (0, u.formatTime)(t);
        return o.default.createElement(
          "div",
          {
            className: (0, l.default)(
              a,
              "video-react-duration video-react-time-control video-react-control"
            ),
          },
          o.default.createElement(
            "div",
            { className: "video-react-duration-display", "aria-live": "off" },
            o.default.createElement(
              "span",
              { className: "video-react-control-text" },
              "Duration Time "
            ),
            n
          )
        );
      }
      (d.propTypes = i), (d.displayName = "DurationDisplay");
      var s = d;
      t.default = s;
    },
    61866: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(a(45697)),
        o = n(a(67294)),
        l = n(a(94184)),
        u = a(43453),
        i = { player: r.default.object, className: r.default.string };
      function d(e) {
        var t = e.player,
          a = t.currentTime,
          n = t.duration,
          r = e.className,
          i = n - a,
          d = (0, u.formatTime)(i);
        return o.default.createElement(
          "div",
          {
            className: (0, l.default)(
              "video-react-remaining-time video-react-time-control video-react-control",
              r
            ),
          },
          o.default.createElement(
            "div",
            {
              className: "video-react-remaining-time-display",
              "aria-live": "off",
            },
            o.default.createElement(
              "span",
              { className: "video-react-control-text" },
              "Remaining Time "
            ),
            "-".concat(d)
          )
        );
      }
      (d.propTypes = i), (d.displayName = "RemainingTimeDisplay");
      var s = d;
      t.default = s;
    },
    24609: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
      var r = n(a(45697)),
        o = n(a(67294)),
        l = n(a(94184)),
        u = { separator: r.default.string, className: r.default.string };
      function i(e) {
        var t = e.separator,
          a = e.className,
          n = t || "/";
        return o.default.createElement(
          "div",
          {
            className: (0, l.default)(
              "video-react-time-control video-react-time-divider",
              a
            ),
            dir: "ltr",
          },
          o.default.createElement(
            "div",
            null,
            o.default.createElement("span", null, n)
          )
        );
      }
      (i.propTypes = u), (i.displayName = "TimeDivider");
    },
    31251: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(a(67154)),
        l = r(a(34575)),
        u = r(a(93913)),
        i = r(a(78585)),
        d = r(a(29754)),
        s = r(a(81506)),
        c = r(a(2205)),
        f = r(a(45697)),
        h = n(a(67294)),
        p = r(a(94184)),
        v = r(a(21303)),
        y = r(a(30685)),
        m = {
          actions: f.default.object,
          player: f.default.object,
          className: f.default.string,
          onFocus: f.default.func,
          onBlur: f.default.func,
        },
        g = (function (e) {
          function t(e, a) {
            var n;
            return (
              (0, l.default)(this, t),
              ((n = (0, i.default)(
                this,
                (0, d.default)(t).call(this, e, a)
              )).state = { percentage: "0%" }),
              (n.handleMouseMove = n.handleMouseMove.bind((0, s.default)(n))),
              (n.handlePercentageChange = n.handlePercentageChange.bind(
                (0, s.default)(n)
              )),
              (n.checkMuted = n.checkMuted.bind((0, s.default)(n))),
              (n.getPercent = n.getPercent.bind((0, s.default)(n))),
              (n.stepForward = n.stepForward.bind((0, s.default)(n))),
              (n.stepBack = n.stepBack.bind((0, s.default)(n))),
              (n.handleFocus = n.handleFocus.bind((0, s.default)(n))),
              (n.handleBlur = n.handleBlur.bind((0, s.default)(n))),
              (n.handleClick = n.handleClick.bind((0, s.default)(n))),
              n
            );
          }
          return (
            (0, c.default)(t, e),
            (0, u.default)(t, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "getPercent",
                value: function () {
                  var e = this.props.player;
                  return e.muted ? 0 : e.volume;
                },
              },
              {
                key: "checkMuted",
                value: function () {
                  var e = this.props,
                    t = e.player,
                    a = e.actions;
                  t.muted && a.mute(!1);
                },
              },
              {
                key: "handleMouseMove",
                value: function (e) {
                  var t = this.props.actions;
                  this.checkMuted();
                  var a = this.slider.calculateDistance(e);
                  t.changeVolume(a);
                },
              },
              {
                key: "stepForward",
                value: function () {
                  var e = this.props,
                    t = e.player,
                    a = e.actions;
                  this.checkMuted(), a.changeVolume(t.volume + 0.1);
                },
              },
              {
                key: "stepBack",
                value: function () {
                  var e = this.props,
                    t = e.player,
                    a = e.actions;
                  this.checkMuted(), a.changeVolume(t.volume - 0.1);
                },
              },
              {
                key: "handleFocus",
                value: function (e) {
                  this.props.onFocus && this.props.onFocus(e);
                },
              },
              {
                key: "handleBlur",
                value: function (e) {
                  this.props.onBlur && this.props.onBlur(e);
                },
              },
              {
                key: "handlePercentageChange",
                value: function (e) {
                  e !== this.state.percentage &&
                    this.setState({ percentage: e });
                },
              },
              {
                key: "handleClick",
                value: function (e) {
                  e.stopPropagation();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.player,
                    n = t.className,
                    r = (100 * a.volume).toFixed(2);
                  return h.default.createElement(
                    v.default,
                    (0, o.default)(
                      {
                        ref: function (t) {
                          e.slider = t;
                        },
                        label: "volume level",
                        valuenow: r,
                        valuetext: "".concat(r, "%"),
                        onMouseMove: this.handleMouseMove,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onClick: this.handleClick,
                        sliderActive: this.handleFocus,
                        sliderInactive: this.handleBlur,
                        getPercent: this.getPercent,
                        onPercentageChange: this.handlePercentageChange,
                        stepForward: this.stepForward,
                        stepBack: this.stepBack,
                      },
                      this.props,
                      {
                        className: (0, p.default)(
                          n,
                          "video-react-volume-bar video-react-slider-bar"
                        ),
                      }
                    ),
                    h.default.createElement(y.default, this.props)
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (g.propTypes = m), (g.displayName = "VolumeBar");
      var b = g;
      t.default = b;
    },
    30685: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(a(45697)),
        o = n(a(67294)),
        l = n(a(94184)),
        u = {
          percentage: r.default.string,
          vertical: r.default.bool,
          className: r.default.string,
        };
      function i(e) {
        var t = e.percentage,
          a = e.vertical,
          n = e.className,
          r = {};
        return (
          a ? (r.height = t) : (r.width = t),
          o.default.createElement(
            "div",
            {
              className: (0, l.default)(n, "video-react-volume-level"),
              style: r,
            },
            o.default.createElement("span", {
              className: "video-react-control-text",
            })
          )
        );
      }
      (i.propTypes = u),
        (i.defaultProps = { percentage: "100%", vertical: !1 }),
        (i.displayName = "VolumeLevel");
      var d = i;
      t.default = d;
    },
    88330: function (e, t, a) {
      "use strict";
      var n = a(20862),
        r = a(95318);
      Object.defineProperty(t, "J5", {
        enumerable: !0,
        get: function () {
          return o.default;
        },
      }),
        Object.defineProperty(t, "sT", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        });
      var o = r(a(97617)),
        l = r(a(20122)),
        u = r(a(989)),
        i = r(a(6238)),
        d = r(a(78814)),
        s = r(a(21303)),
        c = r(a(33498)),
        f = r(a(19097)),
        h = r(a(7473)),
        p = r(a(17058)),
        v = r(a(50183)),
        y = r(a(9356)),
        m = r(a(93282)),
        g = r(a(54850)),
        b = r(a(25775)),
        k = r(a(73258)),
        E = r(a(97828)),
        P = r(a(36082)),
        C = r(a(90228)),
        T = r(a(44223)),
        _ = r(a(26203)),
        S = r(a(77557)),
        M = r(a(61866)),
        x = r(a(66008)),
        N = r(a(72042)),
        w = r(a(24609)),
        A = r(a(9077));
      n(a(52234)), n(a(38359));
      var O = a(99610);
    },
    99610: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return {
            player: (0, r.default)(e.player, t),
            operation: (0, o.default)(e.operation, t),
          };
        }),
        (t.operationReducer = t.playerReducer = void 0);
      var r = n(a(39256)),
        o = n(a(11382));
      var l = r.default;
      t.playerReducer = l;
      var u = o.default;
      t.operationReducer = u;
    },
    11382: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : l,
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (t.type === o.OPERATE)
            return (0, r.default)({}, e, {
              count: e.count + 1,
              operation: (0, r.default)({}, e.operation, t.operation),
            });
          return e;
        });
      var r = n(a(60693)),
        o = a(52234),
        l = { count: 0, operation: { action: "", source: "" } };
    },
    39256: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : u,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case l.USER_ACTIVATE:
              return (0, r.default)({}, e, { userActivity: t.activity });
            case l.PLAYER_ACTIVATE:
              return (0, r.default)({}, e, { isActive: t.activity });
            case l.FULLSCREEN_CHANGE:
              return (0, r.default)({}, e, { isFullscreen: !!t.isFullscreen });
            case o.SEEKING_TIME:
              return (0, r.default)({}, e, { seekingTime: t.time });
            case o.END_SEEKING:
              return (0, r.default)({}, e, { seekingTime: 0 });
            case o.LOAD_START:
              return (0, r.default)({}, e, t.videoProps, {
                hasStarted: !1,
                ended: !1,
              });
            case o.CAN_PLAY:
              return (0, r.default)({}, e, t.videoProps, { waiting: !1 });
            case o.WAITING:
              return (0, r.default)({}, e, t.videoProps, { waiting: !0 });
            case o.CAN_PLAY_THROUGH:
            case o.PLAYING:
              return (0, r.default)({}, e, t.videoProps, { waiting: !1 });
            case o.PLAY:
              return (0, r.default)({}, e, t.videoProps, {
                ended: !1,
                paused: !1,
                autoPaused: !1,
                waiting: !1,
                hasStarted: !0,
              });
            case o.PAUSE:
              return (0, r.default)({}, e, t.videoProps, { paused: !0 });
            case o.END:
              return (0, r.default)({}, e, t.videoProps, { ended: !0 });
            case o.SEEKING:
              return (0, r.default)({}, e, t.videoProps, { seeking: !0 });
            case o.SEEKED:
              return (0, r.default)({}, e, t.videoProps, { seeking: !1 });
            case o.ERROR:
              return (0, r.default)({}, e, t.videoProps, {
                error: "UNKNOWN ERROR",
                ended: !0,
              });
            case o.DURATION_CHANGE:
            case o.TIME_UPDATE:
            case o.VOLUME_CHANGE:
            case o.PROGRESS_CHANGE:
            case o.RATE_CHANGE:
            case o.SUSPEND:
            case o.ABORT:
            case o.EMPTIED:
            case o.STALLED:
            case o.LOADED_META_DATA:
            case o.LOADED_DATA:
            case o.RESIZE:
              return (0, r.default)({}, e, t.videoProps);
            case o.ACTIVATE_TEXT_TRACK:
              return (0, r.default)({}, e, { activeTextTrack: t.textTrack });
            default:
              return e;
          }
        });
      var r = n(a(60693)),
        o = a(38359),
        l = a(52234),
        u = {
          currentSrc: null,
          duration: 0,
          currentTime: 0,
          seekingTime: 0,
          buffered: null,
          waiting: !1,
          seeking: !1,
          paused: !0,
          autoPaused: !1,
          ended: !1,
          playbackRate: 1,
          muted: !1,
          volume: 1,
          readyState: 0,
          networkState: 0,
          videoWidth: 0,
          videoHeight: 0,
          hasStarted: !1,
          userActivity: !0,
          isActive: !1,
          isFullscreen: !1,
          activeTextTrack: null,
        };
    },
    87152: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IS_IOS = t.IS_IPOD = t.IS_IPHONE = t.IS_IPAD = void 0);
      var a =
          "undefined" !== typeof window && window.navigator
            ? window.navigator.userAgent
            : "",
        n = /iPad/i.test(a);
      t.IS_IPAD = n;
      var r = /iPhone/i.test(a) && !n;
      t.IS_IPHONE = r;
      var o = /iPod/i.test(a);
      t.IS_IPOD = o;
      var l = r || n || o;
      t.IS_IOS = l;
    },
    6021: function (e, t) {
      "use strict";
      function a(e) {
        var t;
        if (
          (e.getBoundingClientRect &&
            e.parentNode &&
            (t = e.getBoundingClientRect()),
          !t)
        )
          return { left: 0, top: 0 };
        var a = document,
          n = a.body,
          r = a.documentElement,
          o = r.clientLeft || n.clientLeft || 0,
          l = window.pageXOffset || n.scrollLeft,
          u = t.left + l - o,
          i = r.clientTop || n.clientTop || 0,
          d = window.pageYOffset || n.scrollTop,
          s = t.top + d - i;
        return { left: Math.round(u), top: Math.round(s) };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.findElPosition = a),
        (t.getPointerPosition = function (e, t) {
          var n = {},
            r = a(e),
            o = e.offsetWidth,
            l = e.offsetHeight,
            u = r.top,
            i = r.left,
            d = t.pageY,
            s = t.pageX;
          t.changedTouches &&
            ((s = t.changedTouches[0].pageX), (d = t.changedTouches[0].pageY));
          return (
            (n.y = Math.max(0, Math.min(1, (u - d + l) / l))),
            (n.x = Math.max(0, Math.min(1, (s - i) / o))),
            n
          );
        }),
        (t.blurNode = function (e) {
          e && e.blur && e.blur();
        }),
        (t.focusNode = function (e) {
          e && e.focus && e.focus();
        }),
        (t.hasClass = function (e, t) {
          for (var a = e.className.split(" "), n = 0; n < a.length; n++)
            if (a[n].toLowerCase() === t.toLowerCase()) return !0;
          return !1;
        });
    },
    3387: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(a(34575)),
        o = n(a(93913)),
        l = new ((function () {
          function e() {
            (0, r.default)(this, e);
          }
          return (
            (0, o.default)(e, [
              {
                key: "request",
                value: function (e) {
                  e.requestFullscreen
                    ? e.requestFullscreen()
                    : e.webkitRequestFullscreen
                    ? e.webkitRequestFullscreen()
                    : e.mozRequestFullScreen
                    ? e.mozRequestFullScreen()
                    : e.msRequestFullscreen && e.msRequestFullscreen();
                },
              },
              {
                key: "exit",
                value: function () {
                  document.exitFullscreen
                    ? document.exitFullscreen()
                    : document.webkitExitFullscreen
                    ? document.webkitExitFullscreen()
                    : document.mozCancelFullScreen
                    ? document.mozCancelFullScreen()
                    : document.msExitFullscreen && document.msExitFullscreen();
                },
              },
              {
                key: "addEventListener",
                value: function (e) {
                  document.addEventListener("fullscreenchange", e),
                    document.addEventListener("webkitfullscreenchange", e),
                    document.addEventListener("mozfullscreenchange", e),
                    document.addEventListener("MSFullscreenChange", e);
                },
              },
              {
                key: "removeEventListener",
                value: function (e) {
                  document.removeEventListener("fullscreenchange", e),
                    document.removeEventListener("webkitfullscreenchange", e),
                    document.removeEventListener("mozfullscreenchange", e),
                    document.removeEventListener("MSFullscreenChange", e);
                },
              },
              {
                key: "isFullscreen",
                get: function () {
                  return (
                    document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.mozFullScreenElement ||
                    document.msFullscreenElement
                  );
                },
              },
              {
                key: "enabled",
                get: function () {
                  return (
                    document.fullscreenEnabled ||
                    document.webkitFullscreenEnabled ||
                    document.mozFullScreenEnabled ||
                    document.msFullscreenEnabled
                  );
                },
              },
            ]),
            e
          );
        })())();
      t.default = l;
    },
    43453: function (e, t, a) {
      "use strict";
      var n = a(95318);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatTime = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e,
            a = Math.floor(e % 60),
            n = Math.floor((e / 60) % 60),
            r = Math.floor(e / 3600),
            o = Math.floor((t / 60) % 60),
            l = Math.floor(t / 3600);
          (i(e) || e === 1 / 0) && ((r = "-"), (n = "-"), (a = "-"));
          return (
            (r = r > 0 || l > 0 ? "".concat(r, ":") : ""),
            (n = "".concat((r || o >= 10) && n < 10 ? "0".concat(n) : n, ":")),
            (a = a < 10 ? "0".concat(a) : a),
            r + n + a
          );
        }),
        (t.isVideoChild = function (e) {
          if (e.props && e.props.isVideoChild) return !0;
          return "source" === e.type || "track" === e.type;
        }),
        (t.mergeAndSortChildren = function (e, t, a) {
          var n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1,
            r = u.default.Children.toArray(t),
            i = (a.order, (0, l.default)(a, ["order"]));
          return r
            .filter(function (e) {
              return !e.props.disabled;
            })
            .concat(
              e.filter(function (e) {
                return !d(r, function (t) {
                  return s(t, e);
                });
              })
            )
            .map(function (t) {
              var a = d(e, function (e) {
                  return s(e, t);
                }),
                n = a ? a.props : {},
                r = (0, o.default)({}, i, n, t.props);
              return u.default.cloneElement(t, r, t.props.children);
            })
            .sort(function (e, t) {
              return (e.props.order || n) - (t.props.order || n);
            });
        }),
        (t.deprecatedWarning = function (e, t) {
          console.warn(
            "WARNING: "
              .concat(e, " will be deprecated soon! Please use ")
              .concat(t, " instead.")
          );
        }),
        (t.throttle = function (e, t) {
          var a = arguments,
            n = !1;
          return function () {
            n ||
              (e.apply(void 0, (0, r.default)(a)),
              (n = !0),
              setTimeout(function () {
                n = !1;
              }, t));
          };
        }),
        (t.mediaProperties = void 0);
      var r = n(a(319)),
        o = n(a(60693)),
        l = n(a(6479)),
        u = n(a(67294)),
        i =
          Number.isNaN ||
          function (e) {
            return e !== e;
          };
      var d = function (e, t) {
          return e.filter(t)[0];
        },
        s = function (e, t) {
          var a = e.type,
            n = t.type;
          return "string" === typeof a || "string" === typeof n
            ? a === n
            : "function" === typeof a &&
                "function" === typeof n &&
                a.displayName === n.displayName;
        };
      t.mediaProperties = [
        "error",
        "src",
        "srcObject",
        "currentSrc",
        "crossOrigin",
        "networkState",
        "preload",
        "buffered",
        "readyState",
        "seeking",
        "currentTime",
        "duration",
        "paused",
        "defaultPlaybackRate",
        "playbackRate",
        "played",
        "seekable",
        "ended",
        "autoplay",
        "loop",
        "mediaGroup",
        "controller",
        "controls",
        "volume",
        "muted",
        "defaultMuted",
        "audioTracks",
        "videoTracks",
        "textTracks",
        "width",
        "height",
        "videoWidth",
        "videoHeight",
        "poster",
      ];
    },
  },
]);
