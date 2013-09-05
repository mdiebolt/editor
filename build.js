(function() {
  var _base;

  this.HAMLjr || (this.HAMLjr = {});

  (_base = this.HAMLjr).templates || (_base.templates = {});

  this.HAMLjr.templates["actions"] = function(data) {
    return (function() {
      var actions, __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;
      _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;
      __push(document.createDocumentFragment());
      __element = document.createElement("div");
      __push(__element);
      __attribute(__element, "class", "actions");
      actions = this;
      Object.keys(actions).each(function(name) {
        __element = document.createElement("button");
        __push(__element);
        __element = document.createTextNode('');
        __text(__element, name.titleize());
        __push(__element);
        __pop();
        __on("click", actions[name]);
        return __pop();
      });
      __pop();
      return __pop();
    }).call(data);
  };

}).call(this);

(function() {
  var _base;

  this.HAMLjr || (this.HAMLjr = {});

  (_base = this.HAMLjr).templates || (_base.templates = {});

  this.HAMLjr.templates["editor"] = function(data) {
    return (function() {
      var __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;
      _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;
      __push(document.createDocumentFragment());
      __element = document.createElement("div");
      __push(__element);
      __attribute(__element, "class", "editor-wrap");
      __element = document.createElement("div");
      __push(__element);
      __attribute(__element, "class", "editor");
      __pop();
      __pop();
      return __pop();
    }).call(data);
  };

}).call(this);

(function() {
  var _base;

  this.HAMLjr || (this.HAMLjr = {});

  (_base = this.HAMLjr).templates || (_base.templates = {});

  this.HAMLjr.templates["errors"] = function(data) {
    return (function() {
      var __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;
      _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;
      __push(document.createDocumentFragment());
      __element = document.createElement("div");
      __push(__element);
      __attribute(__element, "class", "console-wrap");
      __element = document.createElement("pre");
      __push(__element);
      __attribute(__element, "class", "errors");
      __each(this.errors, function(error) {
        __element = document.createTextNode('');
        __text(__element, error);
        __push(__element);
        return __pop();
      });
      __pop();
      __element = document.createElement("pre");
      __push(__element);
      __attribute(__element, "class", "notices");
      __each(this.notices, function(notice) {
        __element = document.createTextNode('');
        __text(__element, notice);
        __push(__element);
        return __pop();
      });
      __pop();
      __pop();
      return __pop();
    }).call(data);
  };

}).call(this);

(function() {
  var _base;

  this.HAMLjr || (this.HAMLjr = {});

  (_base = this.HAMLjr).templates || (_base.templates = {});

  this.HAMLjr.templates["filetree"] = function(data) {
    return (function() {
      var selectedFile, __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;
      _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;
      __push(document.createDocumentFragment());
      __element = document.createElement("ul");
      __push(__element);
      __attribute(__element, "class", "filetree");
      selectedFile = this.selectedFile;
      __each(this.files, function(file) {
        __element = document.createElement("li");
        __push(__element);
        __element = document.createTextNode('');
        __text(__element, file.path);
        __push(__element);
        __pop();
        __on("click", function() {
          return selectedFile(file);
        });
        return __pop();
      });
      __pop();
      return __pop();
    }).call(data);
  };

}).call(this);

(function() {
  var _base;

  this.HAMLjr || (this.HAMLjr = {});

  (_base = this.HAMLjr).templates || (_base.templates = {});

  this.HAMLjr.templates["gist_list"] = function(data) {
    return (function() {
      var __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;
      _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;
      __push(document.createDocumentFragment());
      __element = document.createElement("ul");
      __push(__element);
      __attribute(__element, "class", "gists");
      __each(this.gists, function(gist) {
        __element = document.createElement("li");
        __push(__element);
        __element = document.createTextNode('');
        __text(__element, gist.id);
        __push(__element);
        __pop();
        __on("click", function() {
          return alert(gist.id);
        });
        return __pop();
      });
      __pop();
      return __pop();
    }).call(data);
  };

}).call(this);

(function() {
  var _base;

  this.HAMLjr || (this.HAMLjr = {});

  (_base = this.HAMLjr).templates || (_base.templates = {});

  this.HAMLjr.templates["github_status"] = function(data) {
    return (function() {
      var __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;
      _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;
      __push(document.createDocumentFragment());
      __element = document.createElement("div");
      __push(__element);
      __attribute(__element, "class", "status");
      if (this.request && this.request.getAllResponseHeaders().match(/X-RateLimit-Limit: 5000/)) {
        __element = document.createTextNode('');
        __text(__element, "Authenticated Scopes:\n");
        __push(__element);
        __pop();
        __element = document.createTextNode('');
        __text(__element, this.request.getResponseHeader("X-OAuth-Scopes"));
        __push(__element);
        __pop();
        __element = document.createElement("br");
        __push(__element);
        __pop();
        __element = document.createTextNode('');
        __text(__element, "Rate Limit Remaining:\n");
        __push(__element);
        __pop();
        __element = document.createTextNode('');
        __text(__element, this.request.getResponseHeader("X-RateLimit-Remaining"));
        __push(__element);
        __pop();
        __element = document.createTextNode('');
        __text(__element, " / 5000");
        __push(__element);
        __pop();
      } else {
        __element = document.createElement("button");
        __push(__element);
        __element = document.createTextNode('');
        __text(__element, "Auth\n");
        __push(__element);
        __pop();
        __on("click", Gistquire.auth);
        __pop();
      }
      __pop();
      return __pop();
    }).call(data);
  };

}).call(this);

(function() {
  var _base;

  this.HAMLjr || (this.HAMLjr = {});

  (_base = this.HAMLjr).templates || (_base.templates = {});

  this.HAMLjr.templates["main"] = function(data) {
    return (function() {
      var __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;
      _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;
      __push(document.createDocumentFragment());
      __element = document.createElement("div");
      __push(__element);
      __attribute(__element, "class", "main");
      __element = document.createTextNode('');
      __text(__element, HAMLjr.templates.actions(this.actions));
      __push(__element);
      __pop();
      __element = document.createTextNode('');
      __text(__element, HAMLjr.templates.filetree(this.filetree));
      __push(__element);
      __pop();
      __element = document.createTextNode('');
      __text(__element, HAMLjr.templates.errors(this));
      __push(__element);
      __pop();
      __pop();
      return __pop();
    }).call(data);
  };

}).call(this);

/*global setImmediate: false, setTimeout: false, console: false */
(function () {

    var async = {};

    // global on the server, window in the browser
    var root, previous_async;

    root = this;
    if (root != null) {
      previous_async = root.async;
    }

    async.noConflict = function () {
        root.async = previous_async;
        return async;
    };

    function only_once(fn) {
        var called = false;
        return function() {
            if (called) throw new Error("Callback was already called.");
            called = true;
            fn.apply(root, arguments);
        }
    }

    //// cross-browser compatiblity functions ////

    var _each = function (arr, iterator) {
        if (arr.forEach) {
            return arr.forEach(iterator);
        }
        for (var i = 0; i < arr.length; i += 1) {
            iterator(arr[i], i, arr);
        }
    };

    var _map = function (arr, iterator) {
        if (arr.map) {
            return arr.map(iterator);
        }
        var results = [];
        _each(arr, function (x, i, a) {
            results.push(iterator(x, i, a));
        });
        return results;
    };

    var _reduce = function (arr, iterator, memo) {
        if (arr.reduce) {
            return arr.reduce(iterator, memo);
        }
        _each(arr, function (x, i, a) {
            memo = iterator(memo, x, i, a);
        });
        return memo;
    };

    var _keys = function (obj) {
        if (Object.keys) {
            return Object.keys(obj);
        }
        var keys = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };

    //// exported async module functions ////

    //// nextTick implementation with browser-compatible fallback ////
    if (typeof process === 'undefined' || !(process.nextTick)) {
        if (typeof setImmediate === 'function') {
            async.nextTick = function (fn) {
                // not a direct alias for IE10 compatibility
                setImmediate(fn);
            };
            async.setImmediate = async.nextTick;
        }
        else {
            async.nextTick = function (fn) {
                setTimeout(fn, 0);
            };
            async.setImmediate = async.nextTick;
        }
    }
    else {
        async.nextTick = process.nextTick;
        if (typeof setImmediate !== 'undefined') {
            async.setImmediate = setImmediate;
        }
        else {
            async.setImmediate = async.nextTick;
        }
    }

    async.each = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        _each(arr, function (x) {
            iterator(x, only_once(function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback(null);
                    }
                }
            }));
        });
    };
    async.forEach = async.each;

    async.eachSeries = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        var iterate = function () {
            iterator(arr[completed], function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback(null);
                    }
                    else {
                        iterate();
                    }
                }
            });
        };
        iterate();
    };
    async.forEachSeries = async.eachSeries;

    async.eachLimit = function (arr, limit, iterator, callback) {
        var fn = _eachLimit(limit);
        fn.apply(null, [arr, iterator, callback]);
    };
    async.forEachLimit = async.eachLimit;

    var _eachLimit = function (limit) {

        return function (arr, iterator, callback) {
            callback = callback || function () {};
            if (!arr.length || limit <= 0) {
                return callback();
            }
            var completed = 0;
            var started = 0;
            var running = 0;

            (function replenish () {
                if (completed >= arr.length) {
                    return callback();
                }

                while (running < limit && started < arr.length) {
                    started += 1;
                    running += 1;
                    iterator(arr[started - 1], function (err) {
                        if (err) {
                            callback(err);
                            callback = function () {};
                        }
                        else {
                            completed += 1;
                            running -= 1;
                            if (completed >= arr.length) {
                                callback();
                            }
                            else {
                                replenish();
                            }
                        }
                    });
                }
            })();
        };
    };


    var doParallel = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.each].concat(args));
        };
    };
    var doParallelLimit = function(limit, fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [_eachLimit(limit)].concat(args));
        };
    };
    var doSeries = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.eachSeries].concat(args));
        };
    };


    var _asyncMap = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (err, v) {
                results[x.index] = v;
                callback(err);
            });
        }, function (err) {
            callback(err, results);
        });
    };
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = function (arr, limit, iterator, callback) {
        return _mapLimit(limit)(arr, iterator, callback);
    };

    var _mapLimit = function(limit) {
        return doParallelLimit(limit, _asyncMap);
    };

    // reduce only has a series version, as doing reduce in parallel won't
    // work in many situations.
    async.reduce = function (arr, memo, iterator, callback) {
        async.eachSeries(arr, function (x, callback) {
            iterator(memo, x, function (err, v) {
                memo = v;
                callback(err);
            });
        }, function (err) {
            callback(err, memo);
        });
    };
    // inject alias
    async.inject = async.reduce;
    // foldl alias
    async.foldl = async.reduce;

    async.reduceRight = function (arr, memo, iterator, callback) {
        var reversed = _map(arr, function (x) {
            return x;
        }).reverse();
        async.reduce(reversed, memo, iterator, callback);
    };
    // foldr alias
    async.foldr = async.reduceRight;

    var _filter = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.filter = doParallel(_filter);
    async.filterSeries = doSeries(_filter);
    // select alias
    async.select = async.filter;
    async.selectSeries = async.filterSeries;

    var _reject = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (!v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.reject = doParallel(_reject);
    async.rejectSeries = doSeries(_reject);

    var _detect = function (eachfn, arr, iterator, main_callback) {
        eachfn(arr, function (x, callback) {
            iterator(x, function (result) {
                if (result) {
                    main_callback(x);
                    main_callback = function () {};
                }
                else {
                    callback();
                }
            });
        }, function (err) {
            main_callback();
        });
    };
    async.detect = doParallel(_detect);
    async.detectSeries = doSeries(_detect);

    async.some = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (v) {
                    main_callback(true);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(false);
        });
    };
    // any alias
    async.any = async.some;

    async.every = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (!v) {
                    main_callback(false);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(true);
        });
    };
    // all alias
    async.all = async.every;

    async.sortBy = function (arr, iterator, callback) {
        async.map(arr, function (x, callback) {
            iterator(x, function (err, criteria) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, {value: x, criteria: criteria});
                }
            });
        }, function (err, results) {
            if (err) {
                return callback(err);
            }
            else {
                var fn = function (left, right) {
                    var a = left.criteria, b = right.criteria;
                    return a < b ? -1 : a > b ? 1 : 0;
                };
                callback(null, _map(results.sort(fn), function (x) {
                    return x.value;
                }));
            }
        });
    };

    async.auto = function (tasks, callback) {
        callback = callback || function () {};
        var keys = _keys(tasks);
        if (!keys.length) {
            return callback(null);
        }

        var results = {};

        var listeners = [];
        var addListener = function (fn) {
            listeners.unshift(fn);
        };
        var removeListener = function (fn) {
            for (var i = 0; i < listeners.length; i += 1) {
                if (listeners[i] === fn) {
                    listeners.splice(i, 1);
                    return;
                }
            }
        };
        var taskComplete = function () {
            _each(listeners.slice(0), function (fn) {
                fn();
            });
        };

        addListener(function () {
            if (_keys(results).length === keys.length) {
                callback(null, results);
                callback = function () {};
            }
        });

        _each(keys, function (k) {
            var task = (tasks[k] instanceof Function) ? [tasks[k]]: tasks[k];
            var taskCallback = function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (args.length <= 1) {
                    args = args[0];
                }
                if (err) {
                    var safeResults = {};
                    _each(_keys(results), function(rkey) {
                        safeResults[rkey] = results[rkey];
                    });
                    safeResults[k] = args;
                    callback(err, safeResults);
                    // stop subsequent errors hitting callback multiple times
                    callback = function () {};
                }
                else {
                    results[k] = args;
                    async.setImmediate(taskComplete);
                }
            };
            var requires = task.slice(0, Math.abs(task.length - 1)) || [];
            var ready = function () {
                return _reduce(requires, function (a, x) {
                    return (a && results.hasOwnProperty(x));
                }, true) && !results.hasOwnProperty(k);
            };
            if (ready()) {
                task[task.length - 1](taskCallback, results);
            }
            else {
                var listener = function () {
                    if (ready()) {
                        removeListener(listener);
                        task[task.length - 1](taskCallback, results);
                    }
                };
                addListener(listener);
            }
        });
    };

    async.waterfall = function (tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor !== Array) {
          var err = new Error('First argument to waterfall must be an array of functions');
          return callback(err);
        }
        if (!tasks.length) {
            return callback();
        }
        var wrapIterator = function (iterator) {
            return function (err) {
                if (err) {
                    callback.apply(null, arguments);
                    callback = function () {};
                }
                else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    var next = iterator.next();
                    if (next) {
                        args.push(wrapIterator(next));
                    }
                    else {
                        args.push(callback);
                    }
                    async.setImmediate(function () {
                        iterator.apply(null, args);
                    });
                }
            };
        };
        wrapIterator(async.iterator(tasks))();
    };

    var _parallel = function(eachfn, tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor === Array) {
            eachfn.map(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            eachfn.each(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.parallel = function (tasks, callback) {
        _parallel({ map: async.map, each: async.each }, tasks, callback);
    };

    async.parallelLimit = function(tasks, limit, callback) {
        _parallel({ map: _mapLimit(limit), each: _eachLimit(limit) }, tasks, callback);
    };

    async.series = function (tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor === Array) {
            async.mapSeries(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            async.eachSeries(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.iterator = function (tasks) {
        var makeCallback = function (index) {
            var fn = function () {
                if (tasks.length) {
                    tasks[index].apply(null, arguments);
                }
                return fn.next();
            };
            fn.next = function () {
                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
            };
            return fn;
        };
        return makeCallback(0);
    };

    async.apply = function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(
                null, args.concat(Array.prototype.slice.call(arguments))
            );
        };
    };

    var _concat = function (eachfn, arr, fn, callback) {
        var r = [];
        eachfn(arr, function (x, cb) {
            fn(x, function (err, y) {
                r = r.concat(y || []);
                cb(err);
            });
        }, function (err) {
            callback(err, r);
        });
    };
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);

    async.whilst = function (test, iterator, callback) {
        if (test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.whilst(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.doWhilst = function (iterator, test, callback) {
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            if (test()) {
                async.doWhilst(iterator, test, callback);
            }
            else {
                callback();
            }
        });
    };

    async.until = function (test, iterator, callback) {
        if (!test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.until(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.doUntil = function (iterator, test, callback) {
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            if (!test()) {
                async.doUntil(iterator, test, callback);
            }
            else {
                callback();
            }
        });
    };

    async.queue = function (worker, concurrency) {
        if (concurrency === undefined) {
            concurrency = 1;
        }
        function _insert(q, data, pos, callback) {
          if(data.constructor !== Array) {
              data = [data];
          }
          _each(data, function(task) {
              var item = {
                  data: task,
                  callback: typeof callback === 'function' ? callback : null
              };

              if (pos) {
                q.tasks.unshift(item);
              } else {
                q.tasks.push(item);
              }

              if (q.saturated && q.tasks.length === concurrency) {
                  q.saturated();
              }
              async.setImmediate(q.process);
          });
        }

        var workers = 0;
        var q = {
            tasks: [],
            concurrency: concurrency,
            saturated: null,
            empty: null,
            drain: null,
            push: function (data, callback) {
              _insert(q, data, false, callback);
            },
            unshift: function (data, callback) {
              _insert(q, data, true, callback);
            },
            process: function () {
                if (workers < q.concurrency && q.tasks.length) {
                    var task = q.tasks.shift();
                    if (q.empty && q.tasks.length === 0) {
                        q.empty();
                    }
                    workers += 1;
                    var next = function () {
                        workers -= 1;
                        if (task.callback) {
                            task.callback.apply(task, arguments);
                        }
                        if (q.drain && q.tasks.length + workers === 0) {
                            q.drain();
                        }
                        q.process();
                    };
                    var cb = only_once(next);
                    worker(task.data, cb);
                }
            },
            length: function () {
                return q.tasks.length;
            },
            running: function () {
                return workers;
            }
        };
        return q;
    };

    async.cargo = function (worker, payload) {
        var working     = false,
            tasks       = [];

        var cargo = {
            tasks: tasks,
            payload: payload,
            saturated: null,
            empty: null,
            drain: null,
            push: function (data, callback) {
                if(data.constructor !== Array) {
                    data = [data];
                }
                _each(data, function(task) {
                    tasks.push({
                        data: task,
                        callback: typeof callback === 'function' ? callback : null
                    });
                    if (cargo.saturated && tasks.length === payload) {
                        cargo.saturated();
                    }
                });
                async.setImmediate(cargo.process);
            },
            process: function process() {
                if (working) return;
                if (tasks.length === 0) {
                    if(cargo.drain) cargo.drain();
                    return;
                }

                var ts = typeof payload === 'number'
                            ? tasks.splice(0, payload)
                            : tasks.splice(0);

                var ds = _map(ts, function (task) {
                    return task.data;
                });

                if(cargo.empty) cargo.empty();
                working = true;
                worker(ds, function () {
                    working = false;

                    var args = arguments;
                    _each(ts, function (data) {
                        if (data.callback) {
                            data.callback.apply(null, args);
                        }
                    });

                    process();
                });
            },
            length: function () {
                return tasks.length;
            },
            running: function () {
                return working;
            }
        };
        return cargo;
    };

    var _console_fn = function (name) {
        return function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);
            fn.apply(null, args.concat([function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (typeof console !== 'undefined') {
                    if (err) {
                        if (console.error) {
                            console.error(err);
                        }
                    }
                    else if (console[name]) {
                        _each(args, function (x) {
                            console[name](x);
                        });
                    }
                }
            }]));
        };
    };
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    /*async.info = _console_fn('info');
    async.warn = _console_fn('warn');
    async.error = _console_fn('error');*/

    async.memoize = function (fn, hasher) {
        var memo = {};
        var queues = {};
        hasher = hasher || function (x) {
            return x;
        };
        var memoized = function () {
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            var key = hasher.apply(null, args);
            if (key in memo) {
                callback.apply(null, memo[key]);
            }
            else if (key in queues) {
                queues[key].push(callback);
            }
            else {
                queues[key] = [callback];
                fn.apply(null, args.concat([function () {
                    memo[key] = arguments;
                    var q = queues[key];
                    delete queues[key];
                    for (var i = 0, l = q.length; i < l; i++) {
                      q[i].apply(null, arguments);
                    }
                }]));
            }
        };
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
    };

    async.unmemoize = function (fn) {
      return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
      };
    };

    async.times = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.map(counter, iterator, callback);
    };

    async.timesSeries = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.mapSeries(counter, iterator, callback);
    };

    async.compose = function (/* functions... */) {
        var fns = Array.prototype.reverse.call(arguments);
        return function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            async.reduce(fns, args, function (newargs, fn, cb) {
                fn.apply(that, newargs.concat([function () {
                    var err = arguments[0];
                    var nextargs = Array.prototype.slice.call(arguments, 1);
                    cb(err, nextargs);
                }]))
            },
            function (err, results) {
                callback.apply(that, [err].concat(results));
            });
        };
    };

    var _applyEach = function (eachfn, fns /*args...*/) {
        var go = function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            return eachfn(fns, function (fn, cb) {
                fn.apply(that, args.concat([cb]));
            },
            callback);
        };
        if (arguments.length > 2) {
            var args = Array.prototype.slice.call(arguments, 2);
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };
    async.applyEach = doParallel(_applyEach);
    async.applyEachSeries = doSeries(_applyEach);

    async.forever = function (fn, callback) {
        function next(err) {
            if (err) {
                if (callback) {
                    return callback(err);
                }
                throw err;
            }
            fn(next);
        }
        next();
    };

    // AMD / RequireJS
    if (typeof define !== 'undefined' && define.amd) {
        define([], function () {
            return async;
        });
    }
    // Node.js
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = async;
    }
    // included directly via <script> tag
    else {
        root.async = async;
    }

}());

(function() {
  // Lookup arrays for base64 conversions
  var enc64List, dec64List;
  // Load the lookup arrays once
  (function() {
      enc64List = new Array();
      dec64List = new Array();
      var i;
      for (i = 0; i < 26; i++) {
          enc64List[enc64List.length] = String.fromCharCode(65 + i);
      }
      for (i = 0; i < 26; i++) {
          enc64List[enc64List.length] = String.fromCharCode(97 + i);
      }
      for (i = 0; i < 10; i++) {
          enc64List[enc64List.length] = String.fromCharCode(48 + i);
      }
      enc64List[enc64List.length] = "+";
      enc64List[enc64List.length] = "/";
      for (i = 0; i < 128; i++) {
          dec64List[dec64List.length] = -1;
      }
      for (i = 0; i < 64; i++) {
          dec64List[enc64List[i].charCodeAt(0)] = i;
      }
  })();

  window.Base64 = {
    encode: function(str) {
        var c, d, e, end = 0;
        var u, v, w, x;
        var ptr = -1;
        var input = str.split("");
        var output = "";
        while(end == 0) {
            c = (typeof input[++ptr] != "undefined") ? input[ptr].charCodeAt(0) :
                ((end = 1) ? 0 : 0);
            d = (typeof input[++ptr] != "undefined") ? input[ptr].charCodeAt(0) :
                ((end += 1) ? 0 : 0);
            e = (typeof input[++ptr] != "undefined") ? input[ptr].charCodeAt(0) :
                ((end += 1) ? 0 : 0);
            u = enc64List[c >> 2];
            v = enc64List[(0x00000003 & c) << 4 | d >> 4];
            w = enc64List[(0x0000000F & d) << 2 | e >> 6];
            x = enc64List[e & 0x0000003F];

            // handle padding to even out unevenly divisible string lengths
            if (end >= 1) {x = "=";}
            if (end == 2) {w = "=";}

            if (end < 3) {output += u + v + w + x;}
        }
        return output;
    },

    decode: function(str) {
        var c=0, d=0, e=0, f=0, i=0, n=0;
        var input = str.split("");
        var output = "";
        var ptr = 0;
        do {
            f = input[ptr++].charCodeAt(0);
            i = dec64List[f];
            if ( f >= 0 && f < 128 && i != -1 ) {
                if ( n % 4 == 0 ) {
                    c = i << 2;
                } else if ( n % 4 == 1 ) {
                    c = c | ( i >> 4 );
                    d = ( i & 0x0000000F ) << 4;
                } else if ( n % 4 == 2 ) {
                    d = d | ( i >> 2 );
                    e = ( i & 0x00000003 ) << 6;
                } else {
                    e = e | i;
                }
                n++;
                if ( n % 4 == 0 ) {
                    output += String.fromCharCode(c) +
                              String.fromCharCode(d) +
                              String.fromCharCode(e);
                }
            }
        }
        while (typeof input[ptr] != "undefined");
        output += (n % 4 == 3) ? String.fromCharCode(c) + String.fromCharCode(d) :
                  ((n % 4 == 2) ? String.fromCharCode(c) : "");
        return output;
    }
  };
}());

(function() {
  this.Builder = function() {
    var build, buildStyle, compileTemplate;
    compileTemplate = function(source, name) {
      var ast;
      if (name == null) {
        name = "test";
      }
      ast = HAMLjr.parser.parse(source);
      return HAMLjr.compile(ast, {
        name: name,
        compiler: CoffeeScript
      });
    };
    build = function(fileData) {
      var errors, main, models, templates;
      templates = [];
      models = [];
      main = "";
      errors = [];
      fileData.each(function(_arg) {
        var content, error, name, path, source;
        path = _arg.path, content = _arg.content;
        name = path.split('/').last();
        source = content;
        try {
          if (name.extension() === "haml") {
            return templates.push(compileTemplate(source, name.withoutExtension()));
          } else if (name.extension() === "js") {
            if (name === "main.js") {
              return main = source;
            } else if (name === "build.js") {

            } else {
              return models.push(source);
            }
          } else if (name.extension() === "coffee") {
            if (name === "main.coffee") {
              return main = CoffeeScript.compile(source);
            } else {
              return models.push(CoffeeScript.compile(source));
            }
          }
        } catch (_error) {
          error = _error;
          return errors.push(error.stack);
        }
      });
      return {
        errors: errors,
        result: "" + (templates.join("\n")) + "\n" + (models.join("\n")) + "\n" + main
      };
    };
    buildStyle = function(fileData) {
      var errors, styles;
      styles = [];
      errors = [];
      fileData.each(function(_arg) {
        var content, error, path;
        path = _arg.path, content = _arg.content;
        try {
          if (path.extension() === "styl") {
            return styles.push(styl(content, {
              whitespace: true
            }).toString());
          }
        } catch (_error) {
          error = _error;
          return errors.push(error.stack);
        }
      });
      return {
        errors: errors,
        result: styles.join("\n")
      };
    };
    return {
      build: function(fileData, callback) {
        var collectedErrors, compileResult, errors, fileMap, result, _ref, _ref1;
        _ref = build(fileData), collectedErrors = _ref.errors, compileResult = _ref.result;
        _ref1 = buildStyle(fileData), errors = _ref1.errors, result = _ref1.result;
        collectedErrors = collectedErrors.concat(errors);
        if (compileResult.trim() !== "") {
          fileData.push({
            path: "build.js",
            content: compileResult,
            type: "blob"
          });
        }
        if (result !== "") {
          fileData.push({
            path: "style.css",
            content: result,
            type: "blob"
          });
        }
        if (collectedErrors.length) {
          return typeof this.errors === "function" ? this.errors(collectedErrors) : void 0;
        } else {
          fileMap = fileData.eachWithObject({}, function(file, hash) {
            return hash[file.path] = file;
          });
          return callback(fileMap);
        }
      },
      standAloneHtml: function(fileMap) {
        var content, entryPoint, program;
        content = $('script.env').map(function() {
          return this.outerHTML;
        }).get();
        entryPoint = "build.js";
        program = fileMap[entryPoint].content;
        content.push("<body><script>\n  Function(\"ENV\", " + (JSON.stringify(program)) + ")({\n    files: " + (JSON.stringify(fileMap)) + "\n  });\n<\/script>");
        return content.join("\n");
      }
    };
  };

}).call(this);

(function() {
  this.File = function(I) {
    var self;
    if (I == null) {
      I = {};
    }
    if (I.path == null) {
      I.path = I.filename;
    }
    if (I.filename == null) {
      I.filename = I.path.split("/").last();
    }
    self = Model(I).observeAll();
    self.extend({
      extension: function() {
        return self.filename().extension();
      },
      mode: function() {
        var extension;
        switch (extension = self.extension()) {
          case "js":
            return "javascript";
          default:
            return extension;
        }
      }
    });
    return self;
  };

}).call(this);

(function() {
  this.Filetree = function(I) {
    var self;
    if (I == null) {
      I = {};
    }
    Object.defaults(I, {
      files: []
    });
    self = Model(I).observeAll();
    self.attrObservable("selectedFile");
    self.extend({
      load: function(fileData) {
        var files;
        files = Object.keys(fileData).map(function(name) {
          return File(fileData[name]);
        });
        return self.files(files);
      },
      data: function() {
        return self.files.map(function(file) {
          return {
            path: file.filename(),
            mode: "100644",
            content: file.content(),
            type: "blob"
          };
        });
      }
    });
    return self;
  };

}).call(this);

(function() {
  this.Gistquire = {
    accessToken: null,
    auth: function() {
      var scope, url;
      scope = "gist,repo,user:email";
      url = "https://github.com/login/oauth/authorize?client_id=bc46af967c926ba4ff87&scope=" + scope;
      return window.location = url;
    },
    onload: function() {
      var code, _ref,
        _this = this;
      if (code = (_ref = window.location.href.match(/\?code=(.*)/)) != null ? _ref[1] : void 0) {
        $.getJSON("https://hamljr-auth.herokuapp.com/authenticate/" + code, function(data) {
          var token;
          if (token = data.token) {
            _this.accessToken = token;
            return localStorage.authToken = token;
          }
        });
      }
      if (localStorage.authToken) {
        return this.accessToken = localStorage.authToken;
      }
    },
    update: function(id, _arg) {
      var data, error, success, url;
      data = _arg.data, success = _arg.success, error = _arg.error;
      url = "https://api.github.com/gists/" + id;
      if (this.accessToken) {
        url += "?access_token=" + this.accessToken;
      }
      return $.ajax({
        url: url,
        type: "PATCH",
        dataType: 'json',
        data: JSON.stringify(data),
        success: success,
        error: error
      });
    },
    create: function(data, callback) {
      var url;
      url = "https://api.github.com/gists";
      if (this.accessToken) {
        url += "?access_token=" + this.accessToken;
      }
      return $.ajax({
        url: url,
        type: "POST",
        dataType: 'json',
        data: JSON.stringify(data),
        success: callback
      });
    },
    get: function(id, callback) {
      return this.api("gists/" + id, {
        success: callback
      });
    },
    api: function(path, options) {
      var url;
      if (options == null) {
        options = {};
      }
      if (path.match(/^http/)) {
        url = path;
      } else {
        url = "https://api.github.com/" + path;
      }
      options.headers || (options.headers = {});
      if (this.accessToken) {
        options.headers["Authorization"] = "token " + this.accessToken;
      }
      options = Object.extend({
        url: url,
        type: "GET",
        dataType: 'json'
      }, options);
      return $.ajax(options);
    },
    initPagesBranch: function(_arg) {
      var branch, error, owner, repo, success;
      owner = _arg.owner, repo = _arg.repo, success = _arg.success, error = _arg.error;
      if (success == null) {
        success = function() {};
      }
      if (error == null) {
        error = function() {};
      }
      branch = "gh-pages";
      if (!(owner && repo)) {
        throw Error("Must pass in an owner and a repo");
      }
      return Gistquire.api("repos/" + owner + "/" + repo + "/git/trees", {
        type: "POST",
        data: JSON.stringify({
          tree: [
            {
              mode: "1006444",
              path: "tempest.txt",
              content: "created by strd6.github.io/tempest"
            }
          ]
        }),
        success: function(data) {
          return Gistquire.api("repos/" + owner + "/" + repo + "/git/commits", {
            type: "POST",
            data: JSON.stringify({
              message: "Initial gh-pages commit",
              tree: data.sha
            }),
            success: function(data) {
              return Gistquire.api("repos/" + owner + "/" + repo + "/git/refs", {
                type: "POST",
                data: JSON.stringify({
                  ref: "refs/heads/" + branch,
                  sha: data.sha
                }),
                success: success,
                error: error
              });
            },
            error: error
          });
        },
        error: error
      });
    },
    writeFile: function(_arg) {
      var branch, content, error, message, owner, path, repo, success;
      owner = _arg.owner, repo = _arg.repo, branch = _arg.branch, path = _arg.path, content = _arg.content, message = _arg.message, success = _arg.success, error = _arg.error;
      if (success == null) {
        success = function() {};
      }
      if (error == null) {
        error = function() {};
      }
      return Gistquire.api("repos/" + owner + "/" + repo + "/contents/" + path, {
        data: {
          ref: branch
        },
        success: function(data) {
          return Gistquire.api("repos/" + owner + "/" + repo + "/contents/" + path, {
            type: "PUT",
            data: JSON.stringify({
              content: content,
              sha: data.sha,
              message: message,
              branch: branch
            }),
            success: success,
            error: error
          });
        },
        error: function(request) {
          if (request.status === "404") {
            return Gistquire.api("repos/" + owner + "/" + repo + "/contents/" + path, {
              type: "PUT",
              data: JSON.stringify({
                content: content,
                message: message,
                branch: branch
              }),
              success: success,
              error: error
            });
          } else {
            return error.apply(null, arguments);
          }
        }
      });
    },
    commitTree: function(_arg) {
      var branch, error, message, owner, repo, success, tree;
      owner = _arg.owner, repo = _arg.repo, branch = _arg.branch, message = _arg.message, tree = _arg.tree, success = _arg.success, error = _arg.error;
      if (success == null) {
        success = function() {};
      }
      if (error == null) {
        error = function() {};
      }
      if (branch == null) {
        branch = "master";
      }
      if (message == null) {
        message = "Updated in browser at strd6.github.io/editor";
      }
      if (!(owner && repo && tree)) {
        throw Error("Must pass in an owner, a tree, and a repo");
      }
      return Gistquire.api("repos/" + owner + "/" + repo + "/git/refs/heads/" + branch, {
        success: function(data) {
          var latestCommitSha;
          latestCommitSha = data.object.sha;
          return Gistquire.api("repos/" + owner + "/" + repo + "/git/trees", {
            type: "POST",
            data: JSON.stringify({
              tree: tree
            }),
            success: function(data) {
              return Gistquire.api("repos/" + owner + "/" + repo + "/git/commits", {
                type: "POST",
                data: JSON.stringify({
                  parents: [latestCommitSha],
                  message: message,
                  tree: data.sha
                }),
                success: function(data) {
                  return Gistquire.api("repos/" + owner + "/" + repo + "/git/refs/heads/" + branch, {
                    type: "PATCH",
                    data: JSON.stringify({
                      sha: data.sha
                    }),
                    success: success,
                    error: error
                  });
                },
                error: error
              });
            },
            error: error
          });
        },
        error: error
      });
    },
    latestTree: function(_arg) {
      var branch, error, owner, repo, success;
      owner = _arg.owner, repo = _arg.repo, branch = _arg.branch, success = _arg.success, error = _arg.error;
      if (success == null) {
        success = function() {};
      }
      if (error == null) {
        error = function() {};
      }
      if (branch == null) {
        branch = "master";
      }
      return Gistquire.api("repos/" + owner + "/" + repo + "/git/refs/heads/" + branch, {
        success: function(data) {
          return Gistquire.api(data.object.url, {
            success: function(data) {
              return Gistquire.api("" + data.tree.url + "?recursive=1", {
                success: success,
                error: error
              });
            },
            error: error
          });
        },
        error: error
      });
    }
  };

}).call(this);

// Github.js 0.8.0
// (c) 2013 Michael Aufreiter, Development Seed
// Github.js is freely distributable under the MIT license.
// For all details and documentation:
// http://substance.io/michael/github

(function() {

  // Initial Setup
  // -------------

  var XMLHttpRequest, Base64, _;
  if (typeof exports !== 'undefined') {
      XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
      _ = require('underscore');
      Base64 = require('./lib/base64.js');
  }else{
      _ = window._;
      Base64 = window.Base64;
  }
  //prefer native XMLHttpRequest always
  if (typeof window !== 'undefined' && typeof window.XMLHttpRequest !== 'undefined'){
      XMLHttpRequest = window.XMLHttpRequest;
  }


  var API_URL = 'https://api.github.com';

  var Github = function(options) {

    // HTTP Request Abstraction
    // =======
    //
    // I'm not proud of this and neither should you be if you were responsible for the XMLHttpRequest spec.

    function _request(method, path, data, cb, raw) {
      function getURL() {
        var url = path.indexOf('//') >= 0 ? path : API_URL + path;
        return url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
      }

      var xhr = new XMLHttpRequest();
      if (!raw) {xhr.dataType = "json";}

      xhr.open(method, getURL());
      xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status >= 200 && this.status < 300 || this.status === 304) {
            cb(null, raw ? this.responseText : this.responseText ? JSON.parse(this.responseText) : true, this);
          } else {
            cb({path: path, request: this, error: this.status});
          }
        }
      };
      xhr.setRequestHeader('Accept','application/json');
      xhr.setRequestHeader('Content-Type','application/json');
      if ( (options.token) || (options.username && options.password)) {
           xhr.setRequestHeader('Authorization', options.token
             ? 'token '+ options.token
             : 'Basic ' + Base64.encode(options.username + ':' + options.password)
           );
         }
      data ? xhr.send(JSON.stringify(data)) : xhr.send();
    }

    function _requestAllPages(path, cb) {
      var results = [];
      (function iterate() {
        _request("GET", path, null, function(err, res, xhr) {
          if (err) {
            return cb(err);
          }

          results.push.apply(results, res);

          var links = (xhr.getResponseHeader('link') || '').split(/\s*,\s*/g),
              next = _.find(links, function(link) { return /rel="next"/.test(link); });

          if (next) {
            next = (/<(.*)>/.exec(next) || [])[1];
          }

          if (!next) {
            cb(err, results);
          } else {
            path = next;
            iterate();
          }
        });
      })();
    }



    // User API
    // =======

    Github.User = function() {
      this.repos = function(cb) {
        // Github does not always honor the 1000 limit so we want to iterate over the data set.
        _requestAllPages("/user/repos?type=all&per_page=1000&sort=updated", function(err, res) {
          cb(err, res);
        });
      };

      // List user organizations
      // -------

      this.orgs = function(cb) {
        _request("GET", "/user/orgs", null, function(err, res) {
          cb(err, res);
        });
      };

      // List authenticated user's gists
      // -------

      this.gists = function(cb) {
        _request("GET", "/gists", null, function(err, res) {
          cb(err,res);
        });
      };

      // List authenticated user's unread notifications
      // -------

      this.notifications = function(cb) {
        _request("GET", "/notifications", null, function(err, res) {
          cb(err,res);
        });
      };

      // Show user information
      // -------

      this.show = function(username, cb) {
        var command = username ? "/users/"+username : "/user";

        _request("GET", command, null, function(err, res) {
          cb(err, res);
        });
      };

      // List user repositories
      // -------

      this.userRepos = function(username, cb) {
        // Github does not always honor the 1000 limit so we want to iterate over the data set.
        _requestAllPages("/users/"+username+"/repos?type=all&per_page=1000&sort=updated", function(err, res) {
          cb(err, res);
        });
      };

      // List a user's gists
      // -------

      this.userGists = function(username, cb) {
        _request("GET", "/users/"+username+"/gists", null, function(err, res) {
          cb(err,res);
        });
      };

      // List organization repositories
      // -------

      this.orgRepos = function(orgname, cb) {
        // Github does not always honor the 1000 limit so we want to iterate over the data set.
        _requestAllPages("/orgs/"+orgname+"/repos?type=all&&page_num=1000&sort=updated&direction=desc", function(err, res) {
          cb(err, res);
        });
      };

      // Follow user
      // -------

      this.follow = function(username, cb) {
        _request("PUT", "/user/following/"+username, null, function(err, res) {
          cb(err, res);
        });
      };

      // Unfollow user
      // -------

      this.unfollow = function(username, cb) {
        _request("DELETE", "/user/following/"+username, null, function(err, res) {
          cb(err, res);
        });
      };

      // Create a repo
      // -------
      this.createRepo = function(options, cb) {
        _request("POST", "/user/repos", options, cb);
      };





    };


    // Repository API
    // =======

    Github.Repository = function(options) {
      var repo = options.name;
      var user = options.user;

      var that = this;
      var repoPath = "/repos/" + user + "/" + repo;

      var currentTree = {
        "branch": null,
        "sha": null
      };


      // Delete a repo
      // --------

      this.deleteRepo = function(cb) {
        _request("DELETE", repoPath, options, cb);
      };

      // Uses the cache if branch has not been changed
      // -------

      function updateTree(branch, cb) {
        if (branch === currentTree.branch && currentTree.sha) return cb(null, currentTree.sha);
        that.getRef("heads/"+branch, function(err, sha) {
          currentTree.branch = branch;
          currentTree.sha = sha;
          cb(err, sha);
        });
      }

      // Get a particular reference
      // -------

      this.getRef = function(ref, cb) {
        _request("GET", repoPath + "/git/refs/" + ref, null, function(err, res) {
          if (err) return cb(err);
          cb(null, res.object.sha);
        });
      };

      // Create a new reference
      // --------
      //
      // {
      //   "ref": "refs/heads/my-new-branch-name",
      //   "sha": "827efc6d56897b048c772eb4087f854f46256132"
      // }

      this.createRef = function(options, cb) {
        _request("POST", repoPath + "/git/refs", options, cb);
      };

      // Delete a reference
      // --------
      //
      // repo.deleteRef('heads/gh-pages')
      // repo.deleteRef('tags/v1.0')

      this.deleteRef = function(ref, cb) {
        _request("DELETE", repoPath + "/git/refs/"+ref, options, cb);
      };

      // List all branches of a repository
      // -------

      this.listBranches = function(cb) {
        _request("GET", repoPath + "/git/refs/heads", null, function(err, heads) {
          if (err) return cb(err);
          cb(null, _.map(heads, function(head) { return _.last(head.ref.split('/')); }));
        });
      };

      // List all tags of a repository
      // -------

      this.listTags = function(cb) {
        _request("GET", repoPath + "/tags", null, function(err, tags) {
          if (err) return cb(err);
          cb(null, tags);
        });
      };

      // List all pull requests of a respository
      // -------

      this.listPulls = function(state, cb) {
        if (_.isFunction(state)) {
          cb = state;
          state = undefined;
        }

        _request("GET", repoPath + "/pulls" + (state ? '?state=' + state : ''), null, function(err, pulls) {
          if (err) return cb(err);
          cb(null, pulls);
        });
      };

      // Gets details for a specific pull request
      // -------

      this.getPull = function(number, cb) {
        _request("GET", repoPath + "/pulls/" + number, null, function(err, pull) {
          if (err) return cb(err);
          cb(null, pull);
        });
      };

      // List all issues of a respository
      // -------

      this.listIssues = function(options, cb) {
        if (_.isFunction(options)) {
          cb = options;
          options = undefined;
        }

        var params = _.map(options, function(value, key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        }).join('&');

        _request("GET", repoPath + "/issues" + (params ? "?" + params : ""), null, function(err, issues) {
          if (err) return cb(err);
          cb(null, issues);
        });
      },


      // Retrieve the changes made between base and head
      // -------

      this.compare = function(base, head, cb) {
        _request("GET", repoPath + "/compare/" + base + "..." + head, null, function(err, diff) {
          if (err) return cb(err);
          cb(null, diff);
        });
      };

      // Retrieve the contents of a blob
      // -------

      this.getBlob = function(sha, cb) {
        _request("GET", repoPath + "/git/blobs/" + sha, null, cb, 'raw');
      };

      // For a given file path, get the corresponding sha (blob for files, tree for dirs)
      // -------

      this.getSha = function(branch, path, cb) {
        if (!path || path === "") return that.getRef("heads/"+branch, cb);
        _request("GET", repoPath + "/contents/"+path, {ref: branch}, function(err, pathContent) {
          if (err) return cb(err);
          cb(null, pathContent.sha);
        });
      };

      // Retrieve the tree a commit points to
      // -------

      this.getTree = function(tree, cb) {
        _request("GET", repoPath + "/git/trees/"+tree, null, function(err, res) {
          if (err) return cb(err);
          cb(null, res.tree);
        });
      };

      // Post a new blob object, getting a blob SHA back
      // -------

      this.postBlob = function(content, cb) {
        if (typeof(content) === "string") {
          content = {
            "content": content,
            "encoding": "utf-8"
          };
        }

        _request("POST", repoPath + "/git/blobs", content, function(err, res) {
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };

      // Update an existing tree adding a new blob object getting a tree SHA back
      // -------

      this.updateTree = function(baseTree, path, blob, cb) {
        var data = {
          "base_tree": baseTree,
          "tree": [
            {
              "path": path,
              "mode": "100644",
              "type": "blob",
              "sha": blob
            }
          ]
        };
        _request("POST", repoPath + "/git/trees", data, function(err, res) {
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };

      // Post a new tree object having a file path pointer replaced
      // with a new blob SHA getting a tree SHA back
      // -------

      this.postTree = function(tree, cb) {
        _request("POST", repoPath + "/git/trees", { "tree": tree }, function(err, res) {
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };

      // Create a new commit object with the current commit SHA as the parent
      // and the new tree SHA, getting a commit SHA back
      // -------

      this.commit = function(parent, tree, message, cb) {
        var data = {
          "message": message,
          "author": {
            "name": options.username
          },
          "parents": [
            parent
          ],
          "tree": tree
        };

        _request("POST", repoPath + "/git/commits", data, function(err, res) {
          currentTree.sha = res.sha; // update latest commit
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };

      // Update the reference of your head to point to the new commit SHA
      // -------

      this.updateHead = function(head, commit, cb) {
        _request("PATCH", repoPath + "/git/refs/heads/" + head, { "sha": commit }, function(err, res) {
          cb(err);
        });
      };

      // Show repository information
      // -------

      this.show = function(cb) {
        _request("GET", repoPath, null, cb);
      };

      // Get contents
      // --------

      this.contents = function(ref, path, cb) {
        _request("GET", repoPath + "/contents/"+path, { ref: ref }, cb);
      };

      // Fork repository
      // -------

      this.fork = function(cb) {
        _request("POST", repoPath + "/forks", null, cb);
      };

      // Create pull request
      // --------

      this.createPullRequest = function(options, cb) {
        _request("POST", repoPath + "/pulls", options, cb);
      };

      // List hooks
      // --------

      this.listHooks = function(cb) {
        _request("GET", repoPath + "/hooks", null, cb);
      };

      // Get a hook
      // --------

      this.getHook = function(id, cb) {
        _request("GET", repoPath + "/hooks/" + id, null, cb);
      };

      // Create a hook
      // --------

      this.createHook = function(options, cb) {
        _request("POST", repoPath + "/hooks", options, cb);
      };

      // Edit a hook
      // --------

      this.editHook = function(id, options, cb) {
        _request("PATCH", repoPath + "/hooks/" + id, options, cb);
      };

      // Delete a hook
      // --------

      this.deleteHook = function(id, cb) {
        _request("DELETE", repoPath + "/hooks/" + id, null, cb);
      };

      // Read file at given path
      // -------

      this.read = function(branch, path, cb) {
        _request("GET", repoPath + "/contents/"+path, {ref: branch}, function(err, obj) {
          if (err && err.error === 404) return cb("not found", null, null);

          if (err) return cb(err);
          var sha = obj.sha
            , content = Base64.decode(obj.content);

          cb(null, content, sha);
        });
      };


      // Remove a file
      // -------

      this.remove = function(branch, path, cb) {
        that.getSha(branch, path, function(err, sha) {
          if (err) return cb(err);
          _request("DELETE", repoPath + "/contents/" + path, {
            message: path + " is removed",
            sha: sha,
            branch: branch
          }, cb);
        });
      };

      // Move a file to a new location
      // -------

      this.move = function(branch, path, newPath, cb) {
        updateTree(branch, function(err, latestCommit) {
          that.getTree(latestCommit+"?recursive=true", function(err, tree) {
            // Update Tree
            _.each(tree, function(ref) {
              if (ref.path === path) ref.path = newPath;
              if (ref.type === "tree") delete ref.sha;
            });

            that.postTree(tree, function(err, rootTree) {
              that.commit(latestCommit, rootTree, 'Deleted '+path , function(err, commit) {
                that.updateHead(branch, commit, function(err) {
                  cb(err);
                });
              });
            });
          });
        });
      };

      // Write file contents to a given branch and path
      // -------

      this.write = function(branch, path, content, message, cb) {
        that.getSha(branch, path, function(err, sha) {
          if (err && err.error!=404) return cb(err);
          _request("PUT", repoPath + "/contents/" + path, {
            message: message,
            content: Base64.encode(content),
            branch: branch,
            sha: sha
          }, cb);
        });
      };

    };

    // Gists API
    // =======

    Github.Gist = function(options) {
      var id = options.id;
      var gistPath = "/gists/"+id;

      // Read the gist
      // --------

      this.read = function(cb) {
        _request("GET", gistPath, null, function(err, gist) {
          cb(err, gist);
        });
      };

      // Create the gist
      // --------
      // {
      //  "description": "the description for this gist",
      //    "public": true,
      //    "files": {
      //      "file1.txt": {
      //        "content": "String file contents"
      //      }
      //    }
      // }

      this.create = function(options, cb){
        _request("POST","/gists", options, cb);
      };

      // Delete the gist
      // --------

      this.delete = function(cb) {
        _request("DELETE", gistPath, null, function(err,res) {
          cb(err,res);
        });
      };

      // Fork a gist
      // --------

      this.fork = function(cb) {
        _request("POST", gistPath+"/fork", null, function(err,res) {
          cb(err,res);
        });
      };

      // Update a gist with the new stuff
      // --------

      this.update = function(options, cb) {
        _request("PATCH", gistPath, options, function(err,res) {
          cb(err,res);
        });
      };

      // Star a gist
      // --------

      this.star = function(cb) {
        _request("PUT", gistPath+"/star", null, function(err,res) {
          cb(err,res);
        });
      };

      // Untar a gist
      // --------

      this.unstar = function(cb) {
        _request("DELETE", gistPath+"/star", null, function(err,res) {
          cb(err,res);
        });
      };

      // Check if a gist is starred
      // --------

      this.isStarred = function(cb) {
        _request("GET", gistPath+"/star", null, function(err,res) {
          cb(err,res);
        });
      };
    };

    // Top Level API
    // -------

    this.getRepo = function(user, repo) {
      return new Github.Repository({user: user, name: repo});
    };

    this.getUser = function() {
      return new Github.User();
    };

    this.getGist = function(id) {
      return new Github.Gist({id: id});
    };
  };


  if (typeof exports !== 'undefined') {
    // Github = exports;
    module.exports = Github;
  } else {
    window.Github = Github;
  }
}).call(this);

(function() {
  this.Sandbox = function(_arg) {
    var height, methods, name, sandbox, width, _ref;
    _ref = _arg != null ? _arg : {}, name = _ref.name, width = _ref.width, height = _ref.height, methods = _ref.methods;
    if (name == null) {
      name = "sandbox" + new Date;
    }
    if (width == null) {
      width = 800;
    }
    if (height == null) {
      height = 600;
    }
    if (methods == null) {
      methods = {};
    }
    sandbox = window.open("", name, "width=" + width + ",height=" + height);
    Object.extend(sandbox, methods);
    return sandbox;
  };

}).call(this);

(function() {
  this.TextEditor = function(I) {
    var editor, el, reset, self, updating;
    Object.reverseMerge(I, {
      mode: "coffee",
      text: ""
    });
    self = Model(I);
    el = I.el;
    delete I.el;
    editor = ace.edit(el);
    editor.setFontSize("16px");
    editor.setTheme("ace/theme/chrome");
    editor.getSession().setUseWorker(false);
    editor.getSession().setMode("ace/mode/" + I.mode);
    editor.getSession().setUseSoftTabs(true);
    editor.getSession().setTabSize(2);
    reset = function(content) {
      if (content == null) {
        content = "";
      }
      editor.setValue(content);
      editor.moveCursorTo(0, 0);
      return editor.session.selection.clearSelection();
    };
    reset(I.text);
    self.attrObservable("text");
    updating = false;
    editor.getSession().on('change', function() {
      updating = true;
      self.text(editor.getValue());
      return updating = false;
    });
    self.text.observe(function(newValue) {
      if (!updating) {
        return reset(newValue);
      }
    });
    self.extend({
      el: el,
      editor: editor,
      reset: reset
    });
    return self;
  };

}).call(this);

(function() {
  var commit, publish;

  publish = function(_arg) {
    var branch, builder, fileData, message, owner, path, publishBranch, repo;
    builder = _arg.builder, fileData = _arg.fileData, repo = _arg.repo, owner = _arg.owner, branch = _arg.branch;
    if (branch == null) {
      branch = "master";
    }
    message = "Built " + branch + " in browser in strd6.github.io/tempest";
    if (branch === "master") {
      path = "index.html";
    } else {
      path = "" + branch + ".html";
    }
    publishBranch = "gh-pages";
    return builder.build(fileData, function(fileMap) {
      return Gistquire.writeFile({
        repo: repo,
        owner: owner,
        path: path,
        content: Base64.encode(builder.standAloneHtml(fileMap)),
        branch: publishBranch,
        message: message
      });
    });
  };

  commit = function(_arg) {
    var branch, fileData, message, owner, repo;
    fileData = _arg.fileData, repo = _arg.repo, owner = _arg.owner, branch = _arg.branch, message = _arg.message;
    return Gistquire.commitTree({
      owner: owner,
      repo: repo,
      tree: fileData,
      message: message
    });
  };

  this.Actions = {
    save: function(params) {
      return commit(params).then(function() {
        return publish(params);
      });
    }
  };

}).call(this);

(function() {
  var $root, actions, appendError, branch, builder, errors, files, filetree, github, loadId, notices, repo, repoName, styleContent, userName, _ref, _ref1;

  files = ENV.files;

  $root = $('body');

  if (styleContent = (_ref = files["style.css"]) != null ? _ref.content : void 0) {
    $root.append($("<style>", {
      html: styleContent
    }));
  }

  Gistquire.onload();

  github = new Github({
    auth: "oauth",
    token: localStorage.authToken
  });

  branch = "master";

  userName = "STRd6";

  repoName = "editor";

  repo = null;

  builder = Builder();

  errors = Observable([]);

  notices = Observable(["Loaded!"]);

  builder.errors = errors;

  appendError = function(error) {
    console.log(error);
    if (error) {
      return errors.push(error);
    }
  };

  actions = {
    save: function() {
      notices(["Saving..."]);
      return Actions.save({
        owner: userName,
        repo: repoName,
        fileData: filetree.data(),
        builder: builder
      }).then(function() {
        return notices(["Saved and published!"]);
      });
    },
    "new": function() {
      var name;
      if (name = prompt("File Name", "newfile.coffee")) {
        return filetree.files.push(File({
          filename: name,
          content: ""
        }));
      }
    },
    run: (function() {
      notices(["Building..."]);
      return builder.build(filetree.data(), function(fileMap) {
        var config, sandbox;
        if (fileMap["pixie.json"]) {
          config = JSON.parse(fileMap["pixie.json"].content);
        } else {
          config = {};
        }
        sandbox = Sandbox({
          width: config.width,
          height: config.height
        });
        sandbox.document.open();
        sandbox.document.write(builder.standAloneHtml(fileMap));
        sandbox.document.close();
        notices(["Runnnig!"]);
        errors([]);
        return {
          error: errors
        };
      });
    }).debounce(250),
    load_repo: function() {
      var processDirectory, _ref1;
      repoName = prompt("Github repo", "STRd6/matrix.js");
      if (repoName) {
        _ref1 = repoName.split("/"), userName = _ref1[0], repoName = _ref1[1];
      } else {
        errors(["No repo given"]);
        return;
      }
      processDirectory = function(items) {
        return items.each(function(item) {
          if (!item.content) {
            return item;
          }
          item.content = Base64.decode(item.content);
          return item.encoding = "raw";
        });
      };
      return Gistquire.latestTree({
        branch: "master",
        repo: repoName,
        owner: userName,
        success: function(data) {
          var treeFiles;
          notices([]);
          treeFiles = data.tree.select(function(file) {
            return file.type === "blob";
          });
          return async.map(treeFiles, function(datum, callback) {
            return Gistquire.api(datum.url, {
              success: function(data) {
                return callback(null, Object.extend(datum, data));
              },
              error: function(error) {
                return callback(error);
              }
            });
          }, function(error, results) {
            notices(["Radical!"]);
            if (error) {
              errors([error]);
              return;
            }
            files = processDirectory(results);
            notices([files].map(function(item) {
              return JSON.stringify(item, null, 2);
            }));
            return filetree.load(files);
          });
        },
        error: function(error) {
          return errors([error]);
        }
      });
    },
    publish: function() {
      var publishBranch;
      publishBranch = "gh-pages";
      notices(["Publishing..."]);
      return builder.build(filetree.data(), {
        success: function(fileData) {
          return Gistquire.writeFile({
            repo: repoName,
            owner: userName,
            path: "" + branch + ".html",
            content: Base64.encode(builder.standAloneHtml(fileData)),
            branch: publishBranch,
            message: "Built " + branch + " in browser in strd6.github.io/tempest",
            success: function() {
              return notices(["Published"]);
            },
            error: function() {
              return errors(["Error Publishing :("]);
            }
          });
        },
        error: errors
      });
    }
  };

  filetree = Filetree();

  filetree.load(files);

  filetree.selectedFile.observe(function(file) {
    var editor, root;
    root = $root.children(".main");
    root.find(".editor-wrap").hide();
    if (file.editor) {
      return file.editor.trigger("show");
    } else {
      root.append(HAMLjr.templates.editor());
      file.editor = root.find(".editor-wrap").last();
      editor = TextEditor({
        text: file.content(),
        el: file.editor.find('.editor').get(0),
        mode: file.mode()
      });
      file.editor.on("show", function() {
        file.editor.show();
        return editor.editor.focus();
      });
      return editor.text.observe(function(value) {
        return file.content(value);
      });
    }
  });

  $root.append(HAMLjr.templates.main({
    filetree: filetree,
    actions: actions,
    notices: notices,
    errors: errors
  }));

  Gistquire.api("rate_limit", {
    complete: function(request, status) {
      return $root.append(HAMLjr.templates.github_status({
        request: request
      }));
    }
  });

  if (loadId = (_ref1 = window.location.href.match(/loadId=(\d+)/)) != null ? _ref1[1] : void 0) {
    actions.load(null, loadId);
  }

}).call(this);
