(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    22: function(e, t, n) {
      e.exports = n(43);
    },
    32: function(e, t, n) {},
    34: function(e, t, n) {},
    36: function(e, t, n) {},
    39: function(e, t, n) {},
    41: function(e, t, n) {},
    43: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(18),
        c = n.n(i),
        o = n(4),
        l = n(7),
        u = n(12),
        s = n(8),
        d = n(11),
        p = n.n(d),
        m = 'CREATE_EXAM_ENTRY',
        E = 'DELETE_EXAM_ENTRY',
        h = 'OPEN_EDIT',
        f = 'CLOSE_EDIT',
        b = { edit: { isOpen: !1, entry: {} } },
        y = Object(l.c)({
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
                  : b,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case m:
                return Object(s.a)(
                  {},
                  e,
                  Object(u.a)(
                    {},
                    t.payload.id,
                    Object(s.a)({}, t.payload.data, { id: t.payload.id })
                  )
                );
              case E:
                return Object(s.a)(
                  {},
                  Object(d.reject)(e, function(e) {
                    return e.id === t.payload.id;
                  })
                );
              case h:
                return Object(s.a)({}, e, {
                  edit: {
                    isOpen: !0,
                    entry: { id: t.payload.id, grade: t.payload.grade },
                  },
                });
              case f:
                return Object(s.a)({}, e, { edit: { isOpen: !1, entry: {} } });
              default:
                return e;
            }
          },
        }),
        g = n(20);
      n(32);
      var O = n(1),
        v = n(2),
        j = n(5),
        w = n(3),
        N = n(6),
        C = (n(34), n(36), { ENTER: 13 }),
        S = (function(e) {
          function t() {
            var e, n;
            Object(O.a)(this, t);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((n = Object(j.a)(
                this,
                (e = Object(w.a)(t)).call.apply(e, [this].concat(r))
              )).nameInputRef = null),
              (n.gradInputRef = null),
              (n.state = { name: '', grade: null, number: 1 }),
              (n.onStudentSubmitAttempt = function() {
                n.isValidInput() ? n.createStudent() : n.showError();
              }),
              (n.onNameType = function(e) {
                e.keyCode === C.ENTER && n.onStudentSubmitAttempt(),
                  n.setState({ name: e.target.value });
              }),
              (n.onKeyDown = function(e) {
                e.keyCode === C.ENTER && n.onStudentSubmitAttempt();
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
            Object(N.a)(t, e),
            Object(v.a)(t, [
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
      S.displayName = 'src/components/StudentInput';
      var k = Object(o.b)(null, {
          dispatchCreateExamEntry: function(e, t) {
            return { type: m, payload: { id: e, data: t } };
          },
        })(S),
        I = n(21),
        x = n.n(I),
        D = (n(39),
        (function(e) {
          function t() {
            var e, n;
            Object(O.a)(this, t);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((n = Object(j.a)(
                this,
                (e = Object(w.a)(t)).call.apply(e, [this].concat(r))
              )).onDeleteClick = function(e) {
                n.props.dispatchDeleteEntry(e);
              }),
              (n.onGradeClick = function(e, t) {
                n.props.dispatchOpenEdit(e, t);
              }),
              n
            );
          }
          return (
            Object(N.a)(t, e),
            Object(v.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return p.a.values(this.props.entries).length <= 1
                    ? null
                    : r.a.createElement(
                        'div',
                        { className: 'exam-list' },
                        p.a.map(this.props.entries, function(t, n) {
                          return r.a.createElement(
                            'div',
                            {
                              className: x()('entry-container', {
                                failing: t.grade <= 65,
                              }),
                              key: n,
                            },
                            r.a.createElement('p', null, t.name),
                            r.a.createElement(
                              'p',
                              {
                                onClick: function() {
                                  return e.onGradeClick(t.id, t.grade);
                                },
                              },
                              t.grade
                            ),
                            r.a.createElement(
                              'p',
                              {
                                className: 'delete-link',
                                onClick: function() {
                                  return e.onDeleteClick(t.id);
                                },
                              },
                              'X'
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
      (D.displayName = 'src/EntryList'),
        (D.defaultProps = {
          entries: {},
          dispatchDeleteEntry: function() {},
          dispatchOpenEdit: function() {},
        });
      var T = Object(o.b)(
          function(e) {
            return { entries: e.examEntries };
          },
          {
            dispatchDeleteEntry: function(e) {
              return { type: E, payload: { id: e } };
            },
            dispatchOpenEdit: function(e, t) {
              return { type: h, payload: { id: e, grade: t } };
            },
          }
        )(D),
        R = (function(e) {
          function t() {
            var e, n;
            Object(O.a)(this, t);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((n = Object(j.a)(
                this,
                (e = Object(w.a)(t)).call.apply(e, [this].concat(r))
              )).state = { min: 0, max: 0, mean: 0 }),
              n
            );
          }
          return (
            Object(N.a)(t, e),
            Object(v.a)(
              t,
              [
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
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    var n = Object.values(e.entries);
                    return n.length
                      ? Object(s.a)(
                          {},
                          t,
                          (function(e) {
                            for (
                              var t = 0, n = e[0].grade, a = e[0].grade, r = 0;
                              r < e.length;
                              r++
                            )
                              e[r].grade < n && (n = e[r].grade),
                                e[r].grade > a && (a = e[r].grade),
                                (t += e[r].grade);
                            return {
                              min: n,
                              max: a,
                              mean: Math.round(t / e.length),
                            };
                          })(n)
                        )
                      : null;
                  },
                },
              ]
            ),
            t
          );
        })(r.a.Component);
      R.displayName = 'src/components/Stats';
      var _ = Object(o.b)(function(e) {
          return { entries: e.examEntries };
        })(R),
        A = (n(41),
        (function(e) {
          function t() {
            return (
              Object(O.a)(this, t),
              Object(j.a)(this, Object(w.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(N.a)(t, e),
            Object(v.a)(t, [
              {
                key: 'render',
                value: function() {
                  return this.props.isOpen
                    ? r.a.createElement(
                        'div',
                        { className: 'edit-modal' },
                        r.a.createElement(
                          'p',
                          null,
                          'Edit the following Exam:'
                        ),
                        r.a.createElement('input', {
                          className: 'grade-input',
                          type: 'number',
                          min: '0',
                          max: '100',
                          placeholder: this.props.gradeToEdit,
                        }),
                        r.a.createElement('button', null, 'Save'),
                        r.a.createElement('button', null, 'Close')
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(a.Component));
      A.displayName = 'app/src/components/EditModal';
      var G = Object(o.b)(
          function(e) {
            return {
              isOpen: e.examEntries.edit.isOpen,
              gradeToEdit: e.examEntries.edit.entry.grade,
              id: e.examEntries.edit.entry.id,
            };
          },
          {
            dispatchCloseModal: function() {
              return { type: f, payload: {} };
            },
          }
        )(A),
        M = (function(e) {
          function t() {
            return (
              Object(O.a)(this, t),
              Object(j.a)(this, Object(w.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(N.a)(t, e),
            Object(v.a)(t, [
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
                    r.a.createElement(k, null),
                    r.a.createElement(G, null),
                    r.a.createElement(T, null),
                    r.a.createElement(_, null)
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
      var L = (function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || l.d;
        return Object(l.e)(y, e, t(Object(l.a)(g.a)));
      })({});
      c.a.render(
        r.a.createElement(o.a, { store: L }, r.a.createElement(M, null)),
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
//# sourceMappingURL=main.e957b95b.chunk.js.map
