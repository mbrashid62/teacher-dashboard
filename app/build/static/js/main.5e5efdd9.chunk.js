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
        o = n.n(i),
        c = n(4),
        s = n(7),
        l = n(12),
        u = n(10),
        d = n(8),
        p = n.n(d),
        m = 'CREATE_EXAM_ENTRY',
        h = 'UPDATE_EXAM_ENTRY',
        E = 'DELETE_EXAM_ENTRY',
        f = 'OPEN_EDIT',
        y = 'CLOSE_EDIT',
        g = 'SAVE_EDIT',
        v = function() {
          return { type: y, payload: {} };
        },
        b = { isOpen: !1, entry: {} },
        O = Object(s.c)({
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
              case h:
              case m:
                return Object(u.a)(
                  {},
                  e,
                  Object(l.a)(
                    {},
                    t.payload.id,
                    Object(u.a)({}, t.payload.data, { id: t.payload.id })
                  )
                );
              case E:
                return Object(u.a)(
                  {},
                  Object(d.reject)(e, function(e) {
                    return e.id === t.payload.id;
                  })
                );
              default:
                return e;
            }
          },
          edit: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : b,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case f:
                return {
                  isOpen: !0,
                  entry: {
                    id: t.payload.id,
                    name: t.payload.name,
                    grade: t.payload.grade,
                  },
                };
              case g:
              case y:
                return { isOpen: !1, entry: {} };
              default:
                return e;
            }
          },
        }),
        j = n(20);
      n(32);
      var C = n(1),
        N = n(2),
        S = n(5),
        w = n(3),
        k = n(6),
        I = (n(34), n(36), { ENTER: 13 }),
        R = (function(e) {
          function t() {
            var e, n;
            Object(C.a)(this, t);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((n = Object(S.a)(
                this,
                (e = Object(w.a)(t)).call.apply(e, [this].concat(r))
              )).nameInputRef = null),
              (n.gradInputRef = null),
              (n.state = { name: '', grade: null, number: 1 }),
              (n.onStudentSubmitAttempt = function() {
                n.isValidInput() ? n.createStudent() : n.showError();
              }),
              (n.onNameType = function(e) {
                e.keyCode === I.ENTER && n.onStudentSubmitAttempt(),
                  n.setState({ name: e.target.value });
              }),
              (n.onKeyDown = function(e) {
                e.keyCode === I.ENTER && n.onStudentSubmitAttempt();
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
            Object(k.a)(t, e),
            Object(N.a)(t, [
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
      R.displayName = 'src/components/StudentInput';
      var D = Object(c.b)(null, {
          dispatchCreateExamEntry: function(e, t) {
            return { type: m, payload: { id: e, data: t } };
          },
        })(R),
        T = n(21),
        _ = n.n(T),
        A = (n(39),
        (function(e) {
          function t() {
            var e, n;
            Object(C.a)(this, t);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((n = Object(S.a)(
                this,
                (e = Object(w.a)(t)).call.apply(e, [this].concat(r))
              )).onDeleteClick = function(e) {
                n.props.entryInEditState.id === e &&
                  n.props.dispatchCloseEdit(),
                  n.props.dispatchDeleteEntry(e);
              }),
              (n.onGradeClick = function(e, t, a) {
                n.props.dispatchOpenEdit(e, t, a);
              }),
              n
            );
          }
          return (
            Object(k.a)(t, e),
            Object(N.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    'div',
                    { className: 'exam-list' },
                    p.a.map(this.props.entries, function(t, n) {
                      return r.a.createElement(
                        'div',
                        {
                          className: _()('entry-container', {
                            failing: t.grade <= 65,
                          }),
                          key: n,
                        },
                        r.a.createElement('p', null, t.name),
                        r.a.createElement(
                          'p',
                          {
                            onClick: function() {
                              return e.onGradeClick(t.id, t.name, t.grade);
                            },
                            className: 'grade',
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
      (A.displayName = 'src/EntryList'),
        (A.defaultProps = {
          entries: {},
          dispatchDeleteEntry: function() {},
          dispatchOpenEdit: function() {},
        });
      var x = Object(c.b)(
          function(e) {
            return { entries: e.examEntries, entryInEditState: e.edit.entry };
          },
          {
            dispatchDeleteEntry: function(e) {
              return { type: E, payload: { id: e } };
            },
            dispatchOpenEdit: function(e, t, n) {
              return { type: f, payload: { id: e, name: t, grade: n } };
            },
            dispatchCloseEdit: v,
          }
        )(A),
        G = (function(e) {
          function t() {
            var e, n;
            Object(C.a)(this, t);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((n = Object(S.a)(
                this,
                (e = Object(w.a)(t)).call.apply(e, [this].concat(r))
              )).state = { min: 0, max: 0, mean: 0 }),
              n
            );
          }
          return (
            Object(k.a)(t, e),
            Object(N.a)(
              t,
              [
                {
                  key: 'render',
                  value: function() {
                    return p.a.isEmpty(this.props.entries)
                      ? null
                      : r.a.createElement(
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
                      ? Object(u.a)(
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
      G.displayName = 'src/components/Stats';
      var M = Object(c.b)(function(e) {
          return { entries: e.examEntries };
        })(G),
        X = (n(41),
        (function(e) {
          function t() {
            var e, n;
            Object(C.a)(this, t);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((n = Object(S.a)(
                this,
                (e = Object(w.a)(t)).call.apply(e, [this].concat(r))
              )).state = { grade: '' }),
              (n.inputEditRef = {}),
              (n.onGradeEdit = function(e) {
                var t = parseInt(e.target.value);
                t < 0 || t > 100
                  ? (n.inputEditRef.value = n.state.grade)
                  : n.setState({ grade: t });
              }),
              (n.onSave = function() {
                var e = { name: n.props.studentName, grade: n.state.grade };
                n.props.dispatchUpdateEntry(n.props.id, e),
                  n.props.dispatchCloseModal();
              }),
              n
            );
          }
          return (
            Object(k.a)(t, e),
            Object(N.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return this.props.isOpen
                    ? (console.log('in Render: ', this.state.grade),
                      r.a.createElement(
                        'div',
                        { className: 'edit-modal' },
                        r.a.createElement(
                          'p',
                          null,
                          'Edit ',
                          this.props.studentName,
                          "'s exam:"
                        ),
                        r.a.createElement('input', {
                          onChange: this.onGradeEdit,
                          ref: function(t) {
                            return (e.inputEditRef = t);
                          },
                          className: 'grade-input',
                          type: 'number',
                          min: '0',
                          max: '100',
                          placeholder: this.props.initialGrade,
                        }),
                        r.a.createElement(
                          'button',
                          {
                            onClick: this.onSave,
                            disabled:
                              !this.state.grade ||
                              this.state.grade === this.props.initialGrade,
                          },
                          'Save'
                        ),
                        r.a.createElement(
                          'button',
                          { onClick: this.props.dispatchCloseModal },
                          'Close'
                        )
                      ))
                    : null;
                },
              },
            ]),
            t
          );
        })(a.Component));
      X.displayName = 'app/src/components/EditModal';
      var L = Object(c.b)(
          function(e) {
            return {
              isOpen: e.edit.isOpen,
              id: e.edit.entry.id,
              studentName: e.edit.entry.name,
              initialGrade: e.edit.entry.grade,
            };
          },
          {
            dispatchCloseModal: v,
            dispatchUpdateEntry: function(e, t) {
              return { type: h, payload: { id: e, data: t } };
            },
          }
        )(X),
        P = (function(e) {
          function t() {
            return (
              Object(C.a)(this, t),
              Object(S.a)(this, Object(w.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(k.a)(t, e),
            Object(N.a)(t, [
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
                    r.a.createElement(D, null),
                    r.a.createElement(L, null),
                    r.a.createElement(x, null),
                    r.a.createElement(M, null)
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
      var V = (function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || s.d;
        return Object(s.e)(O, e, t(Object(s.a)(j.a)));
      })({});
      o.a.render(
        r.a.createElement(c.a, { store: V }, r.a.createElement(P, null)),
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
//# sourceMappingURL=main.5e5efdd9.chunk.js.map
