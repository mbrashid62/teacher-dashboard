(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    22: function(e, t, n) {
      e.exports = n(41);
    },
    32: function(e, t, n) {},
    34: function(e, t, n) {},
    36: function(e, t, n) {},
    39: function(e, t, n) {},
    41: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(18),
        c = n.n(i),
        o = n(4),
        u = n(7),
        l = n(11),
        s = n(9),
        d = n(12),
        p = n.n(d),
        m = 'CREATE_EXAM_ENTRY',
        h = 'DELETE_EXAM_ENTRY',
        f = Object(u.c)({
          app: function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { isSetup: !0 };
            arguments.length > 1 && arguments[1];
            return e;
          },
          examEntries: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case m:
                return Object(s.a)(
                  {},
                  e,
                  Object(l.a)(
                    {},
                    t.payload.id,
                    Object(s.a)({}, t.payload.data, { id: t.payload.id })
                  )
                );
              case h:
                return Object(s.a)(
                  {},
                  Object(d.reject)(e, function(e) {
                    return e.id === t.payload.id;
                  })
                );
              default:
                return e;
            }
          },
        }),
        E = n(20);
      n(32);
      var b = n(1),
        g = n(2),
        v = n(5),
        y = n(3),
        O = n(6),
        j = (n(34), n(36), { ENTER: 13 }),
        w = (function(e) {
          function t() {
            var e, n;
            Object(b.a)(this, t);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(r))
              )).nameInputRef = null),
              (n.gradInputRef = null),
              (n.state = { name: '', grade: null, number: 1 }),
              (n.onStudentSubmitAttempt = function() {
                n.isValidInput() ? n.createStudent() : n.showError();
              }),
              (n.onNameType = function(e) {
                e.keyCode === j.ENTER && n.onStudentSubmitAttempt(),
                  n.setState({ name: e.target.value });
              }),
              (n.onKeyDown = function(e) {
                e.keyCode === j.ENTER && n.onStudentSubmitAttempt();
              }),
              (n.onGradeChange = function(e) {
                var t = parseInt(e.target.value);
                t < 0 || t > 100
                  ? (n.gradInputRef.value = n.state.grade)
                  : n.setState({ grade: t });
              }),
              (n.isValidInput = function() {
                return n.state.grade && n.state.name;
              }),
              (n.createStudent = function() {
                n.props.dispatchCreateExamEntry(n.state.number, {
                  name: n.state.name,
                  grade: n.state.grade,
                }),
                  n.resetInput();
              }),
              (n.showError = function() {
                console.log('Error!');
              }),
              (n.resetInput = function() {
                n.setState({ name: '', grade: null, number: ++n.state.number }),
                  (n.nameInputRef.value = ''),
                  (n.gradInputRef.value = '');
              }),
              n
            );
          }
          return (
            Object(O.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    'div',
                    { className: 'student-input-container' },
                    r.a.createElement('input', {
                      ref: function(t) {
                        return (e.nameInputRef = t);
                      },
                      className: 'name-input',
                      type: 'text',
                      onKeyDown: this.onNameType,
                      placeholder: 'Joe Smith',
                    }),
                    r.a.createElement('input', {
                      ref: function(t) {
                        return (e.gradInputRef = t);
                      },
                      className: 'grade-input',
                      type: 'number',
                      min: '0',
                      max: '100',
                      onChange: this.onGradeChange,
                      onKeyDown: this.onKeyDown,
                      placeholder: '100',
                    }),
                    r.a.createElement(
                      'button',
                      {
                        onClick: this.onStudentSubmitAttempt,
                        disabled: !this.isValidInput(),
                      },
                      'Enter Grade'
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component);
      w.displayName = 'src/components/StudentInput';
      var S = Object(o.b)(null, {
          dispatchCreateExamEntry: function(e, t) {
            return { type: m, payload: { id: e, data: t } };
          },
        })(w),
        N = n(21),
        C = n.n(N),
        k = (n(39),
        (function(e) {
          function t() {
            var e, n;
            Object(b.a)(this, t);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(r))
              )).onDeleteClick = function(e) {
                n.props.dispatchDeleteEntry(e);
              }),
              n
            );
          }
          return (
            Object(O.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return this.props.entries === {}
                    ? null
                    : r.a.createElement(
                        'div',
                        { className: 'exam-list' },
                        p.a.map(this.props.entries, function(t, n) {
                          return r.a.createElement(
                            'div',
                            {
                              className: C()('entry-container', {
                                failing: t.grade <= 65,
                              }),
                              key: n,
                            },
                            r.a.createElement('p', null, t.name),
                            r.a.createElement('p', null, t.grade),
                            r.a.createElement(
                              'p',
                              {
                                className: 'delete-link',
                                onClick: function() {
                                  return e.onDeleteClick(t.id);
                                },
                              },
                              'x'
                            )
                          );
                        })
                      );
                },
              },
            ]),
            t
          );
        })(a.Component));
      (k.displayName = 'src/EntryList'),
        (k.defaultProps = { entries: {}, dispatchDeleteEntry: function() {} });
      var I = Object(o.b)(
          function(e) {
            return { entries: e.examEntries };
          },
          {
            dispatchDeleteEntry: function(e) {
              return { type: h, payload: { id: e } };
            },
          }
        )(k),
        R = (function(e) {
          function t() {
            var e, n;
            Object(b.a)(this, t);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((n = Object(v.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(r))
              )).state = { min: 0, max: 0, mean: 0 }),
              (n.getComputedStats = function(e) {
                for (
                  var t = 0, n = e[0].grade, a = e[0].grade, r = 0;
                  r < e.length;
                  r++
                )
                  e[r].grade < n && (n = e[r].grade),
                    e[r].grade > a && (a = e[r].grade),
                    (t += e[r].grade);
                return { min: n, max: a, mean: Math.round(t / e.length) };
              }),
              n
            );
          }
          return (
            Object(O.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentDidUpdate',
                value: function(e, t, n) {
                  if (this.props.entries !== e.entries) {
                    var a = Object.values(this.props.entries);
                    a.length &&
                      this.setState(Object(s.a)({}, this.getComputedStats(a)));
                  }
                },
              },
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'div',
                    { className: 'stats-container' },
                    r.a.createElement(
                      'p',
                      null,
                      'Class Average: ',
                      this.state.mean
                    ),
                    r.a.createElement(
                      'p',
                      null,
                      'Lowest Score: ',
                      this.state.min
                    ),
                    r.a.createElement(
                      'p',
                      null,
                      'Highest Score: ',
                      this.state.max
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component);
      R.displayName = 'src/components/Stats';
      var x = Object(o.b)(function(e) {
          return { entries: e.examEntries };
        })(R),
        D = (function(e) {
          function t() {
            return (
              Object(b.a)(this, t),
              Object(v.a)(this, Object(y.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(O.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'div',
                    { className: 'app' },
                    r.a.createElement(
                      'header',
                      { className: 'app-header' },
                      r.a.createElement(
                        'p',
                        { className: 'greeting' },
                        'Welcome! Enter Grades Below.'
                      )
                    ),
                    r.a.createElement(S, null),
                    r.a.createElement(I, null),
                    r.a.createElement(x, null)
                  );
                },
              },
            ]),
            t
          );
        })(a.Component);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var A = (function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || u.d;
        return Object(u.e)(f, e, t(Object(u.a)(E.a)));
      })({});
      c.a.render(
        r.a.createElement(o.a, { store: A }, r.a.createElement(D, null)),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
  },
  [[22, 2, 1]],
]);
//# sourceMappingURL=main.d38657ed.chunk.js.map
