/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */
  perTouch: false,

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled'
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: " + msg);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}

/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toFloat(value) {
  return parseFloat(value);
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isArray(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */
function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}

/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function sortKeys(obj) {
  return Object.keys(obj).sort().reduce(function (r, k) {
    r[k] = obj[k];

    return r[k], r;
  }, {});
}

/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */
function mergeOptions(defaults, settings) {
  var options = _extends({}, defaults, settings);

  // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.
  if (settings.hasOwnProperty('classes')) {
    options.classes = _extends({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBus = function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }

  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  createClass(EventsBus, [{
    key: 'on',
    value: function on(event, handler) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }
      }

      // Create the event's object if not yet created
      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      }

      // Add the handler to queue
      var index = this.events[event].push(handler) - 1;

      // Provide handle back for removal of event
      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }

    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: 'emit',
    value: function emit(event, context) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }
      }

      // If the event doesn't exist, or there's no handlers in queue, just leave
      if (!this.hop.call(this.events, event)) {
        return;
      }

      // Cycle through events queue, fire!
      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);
  return EventsBus;
}();

var Glide = function () {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Glide);

    this._c = {};
    this._t = [];
    this._e = new EventsBus();

    this.disabled = false;
    this.selector = selector;
    this.settings = mergeOptions(defaults, options);
    this.index = this.settings.startAt;
  }

  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  createClass(Glide, [{
    key: 'mount',
    value: function mount$$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }

    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */

  }, {
    key: 'mutate',
    value: function mutate() {
      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (isArray(transformers)) {
        this._t = transformers;
      } else {
        warn('You need to provide a array on `mutate()`');
      }

      return this;
    }

    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: 'update',
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.settings = mergeOptions(this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }

    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: 'go',
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }

    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: 'move',
    value: function move(distance) {
      this._c.Transition.disable();
      this._c.Move.make(distance);

      return this;
    }

    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }

    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: 'play',
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }

    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: 'pause',
    value: function pause() {
      this._e.emit('pause');

      return this;
    }

    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;

      return this;
    }

    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;

      return this;
    }

    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: 'on',
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }

    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: 'isType',
    value: function isType(name) {
      return this.settings.type === name;
    }

    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: 'settings',
    get: function get$$1() {
      return this._o;
    }

    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set$$1(o) {
      if (isObject(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }

    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: 'index',
    get: function get$$1() {
      return this._i;
    }

    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set$$1(i) {
      this._i = toInt(i);
    }

    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: 'type',
    get: function get$$1() {
      return this.settings.type;
    }

    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: 'disabled',
    get: function get$$1() {
      return this._d;
    }

    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set$$1(status) {
      this._d = !!status;
    }
  }]);
  return Glide;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },


    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        Glide.disable();

        this.move = move;

        Events.emit('run.before', this.move);

        this.calculate();

        Events.emit('run', this.move);

        Components.Transition.after(function () {
          if (_this.isStart()) {
            Events.emit('run.start', _this.move);
          }

          if (_this.isEnd()) {
            Events.emit('run.end', _this.move);
          }

          if (_this.isOffset('<') || _this.isOffset('>')) {
            _this._o = false;

            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);

          Glide.enable();
        });
      }
    },


    /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction;


      var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

      switch (direction) {
        case '>':
          if (steps === '>') {
            Glide.index = length;
          } else if (this.isEnd()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = 0;
            }
          } else if (countableSteps) {
            Glide.index += Math.min(length - Glide.index, -toInt(steps));
          } else {
            Glide.index++;
          }
          break;

        case '<':
          if (steps === '<') {
            Glide.index = 0;
          } else if (this.isStart()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = length;
            }
          } else if (countableSteps) {
            Glide.index -= Math.min(Glide.index, toInt(steps));
          } else {
            Glide.index--;
          }
          break;

        case '=':
          Glide.index = steps;
          break;

        default:
          warn('Invalid direction pattern [' + direction + steps + '] has been used');
          break;
      }
    },


    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index === 0;
    },


    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index === this.length;
    },


    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset(direction) {
      return this._o && this.move.direction === direction;
    }
  };

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },


    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      var step = value.substr(1);

      this._m = {
        direction: value.substr(0, 1),
        steps: step ? toInt(step) ? toInt(step) : step : 0
      };
    }
  });

  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length;

      // If the `bound` option is acitve, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });

  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });

  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */
function throttle(func, wait, options) {
  var timeout = void 0,
      context = void 0,
      args = void 0,
      result = void 0;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};

function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },


    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;

        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };

  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return toInt(Glide.settings.gap);
    }
  });

  define(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * (Components.Sizes.length - 1);
    }
  });

  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;

      return Gaps.value * (perView - 1) / perView;
    }
  });

  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */
  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));

  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });

  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    var n = node.parentNode.firstChild;
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}

/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */
function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}

var TRACK_SELECTOR = '[data-glide-el="track"]';

function Html (Glide, Components) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.cloneSlide);
      });
    }
  };

  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },


    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(r) {
      if (isString(r)) {
        r = document.querySelector(r);
      }

      if (exist(r)) {
        Html._r = r;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });

  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },


    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(t) {
      if (exist(t)) {
        Html._t = t;
      } else {
        warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
      }
    }
  });

  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });

  return Html;
}

function Peek (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };

  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },


    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });

  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });

  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */
  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });

  return Peek;
}

function Move (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },


    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;

      Events.emit('move', {
        movement: this.value
      });

      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };

  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },


    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });

  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });

  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });

  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */
  Events.on(['build.before', 'run'], function () {
    Move.make();
  });

  return Move;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var width = this.slideWidth + 'px';
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
      }
    },


    /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper(dimention) {
      Components.Html.wrapper.style.width = this.wrapperSize + 'px';
    },


    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };

  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });

  define(Sizes, 'width', {
    /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.root.offsetWidth;
    }
  });

  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });

  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });

  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */
  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });

  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Sizes.remove();
  });

  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');

      this.typeClass();
      this.activeClass();

      Events.emit('build.after');
    },


    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.activeSlide);

        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    },


    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var classes = Glide.settings.classes;

      Components.Html.root.classList.remove(classes[Glide.settings.type]);

      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(classes.activeSlide);
      });
    }
  };

  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */
  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });

  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */
  Events.on(['resize', 'update'], function () {
    Build.mount();
  });

  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */
  Events.on('move.after', function () {
    Build.activeClass();
  });

  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },


    /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes;


      var peekIncrementer = +!!Glide.settings.peek;
      var part = perView + peekIncrementer;
      var start = slides.slice(0, part);
      var end = slides.slice(-part);

      for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
        for (var i = 0; i < start.length; i++) {
          var clone = start[i].cloneNode(true);

          clone.classList.add(classes.cloneSlide);

          items.push(clone);
        }

        for (var _i = 0; _i < end.length; _i++) {
          var _clone = end[_i].cloneNode(true);

          _clone.classList.add(classes.cloneSlide);

          items.unshift(_clone);
        }
      }

      return items;
    },


    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;


      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half, items.length);
      var width = Components.Sizes.slideWidth + 'px';

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = width;
      }
    },


    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;


      for (var i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }
  };

  define(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });

  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */
  Events.on('destroy', function () {
    Clones.remove();
  });

  return Clones;
}

var EventsBinder = function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }

  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  createClass(EventsBinder, [{
    key: 'on',
    value: function on(events, el, closure) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;

        el.addEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */

  }, {
    key: 'off',
    value: function off(events, el) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      delete this.listeners;
    }
  }]);
  return EventsBinder;
}();

function Resize (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },


    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };

  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */
  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });

  return Resize;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};

function Direction (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },


    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },


    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },


    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },


    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };

  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },


    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });

  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */
  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });

  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */
  Events.on('update', function () {
    Direction.mount();
  });

  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */
  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });

  return Direction;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Rtl (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Gaps.value * Glide.index;
    }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Grow (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Peeking (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Focusing (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function mutator (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        var transformer = TRANSFORMERS[i];

        if (isFunction(transformer) && isFunction(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          warn('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }
  };
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = mutator(Glide, Components).mutate(value);

      Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
    },


    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    }
  };

  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */
  Events.on('move', function (context) {
    var gap = Components.Gaps.value;
    var length = Components.Sizes.length;
    var width = Components.Sizes.slideWidth;

    if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(width * (length - 1));
      });

      return Translate.set(-width - gap * length);
    }

    if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(0);
      });

      return Translate.set(width * length + gap * length);
    }

    return Translate.set(context.movement);
  });

  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Translate.remove();
  });

  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;

  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
      }

      return property + ' 0ms ' + settings.animationTimingFunc;
    },


    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

      Components.Html.wrapper.style.transition = this.compose(property);
    },


    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },


    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },


    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;

      this.set();
    },


    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;

      this.set();
    }
  };

  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });

  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */
  Events.on('move', function () {
    Transition.set();
  });

  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });

  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */
  Events.on('run', function () {
    Transition.enable();
  });

  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Transition.remove();
  });

  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */

var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });

  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var supportsPassive$1 = supportsPassive;

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

function Swipe (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;
  var capture = supportsPassive$1 ? { passive: true } : false;

  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },


    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();

        var swipe = this.touches(event);

        swipeSin = null;
        swipeStartX = toInt(swipe.pageX);
        swipeStartY = toInt(swipe.pageY);

        this.bindSwipeMove();
        this.bindSwipeEnd();

        Events.emit('swipe.start');
      }
    },


    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function move(event) {
      if (!Glide.disabled) {
        var _Glide$settings = Glide.settings,
            touchAngle = _Glide$settings.touchAngle,
            touchRatio = _Glide$settings.touchRatio,
            classes = _Glide$settings.classes;


        var swipe = this.touches(event);

        var subExSx = toInt(swipe.pageX) - swipeStartX;
        var subEySy = toInt(swipe.pageY) - swipeStartY;
        var powEX = Math.abs(subExSx << 2);
        var powEY = Math.abs(subEySy << 2);
        var swipeHypotenuse = Math.sqrt(powEX + powEY);
        var swipeCathetus = Math.sqrt(powEY);

        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation();

          Components.Move.make(subExSx * toFloat(touchRatio));

          Components.Html.root.classList.add(classes.dragging);

          Events.emit('swipe.move');
        } else {
          return false;
        }
      }
    },


    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function end(event) {
      if (!Glide.disabled) {
        var settings = Glide.settings;

        var swipe = this.touches(event);
        var threshold = this.threshold(event);

        var swipeDistance = swipe.pageX - swipeStartX;
        var swipeDeg = swipeSin * 180 / Math.PI;
        var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

        this.enable();

        if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
          // While swipe is positive and greater than threshold move backward.
          if (settings.perTouch) {
            steps = Math.min(steps, toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('<' + steps));
        } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
          // While swipe is negative and lower than negative threshold move forward.
          if (settings.perTouch) {
            steps = Math.max(steps, -toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('>' + steps));
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make();
        }

        Components.Html.root.classList.remove(settings.classes.dragging);

        this.unbindSwipeMove();
        this.unbindSwipeEnd();

        Events.emit('swipe.end');
      }
    },


    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var _this = this;

      var settings = Glide.settings;

      if (settings.swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }

      if (settings.dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }
    },


    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
    },


    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function bindSwipeMove() {
      var _this2 = this;

      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
        _this2.move(event);
      }, Glide.settings.throttle), capture);
    },


    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
    },


    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function bindSwipeEnd() {
      var _this3 = this;

      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
        _this3.end(event);
      });
    },


    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },


    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function touches(event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },


    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function threshold(event) {
      var settings = Glide.settings;

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },


    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;

      Components.Transition.enable();

      return this;
    },


    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function disable() {
      disabled = true;

      Components.Transition.disable();

      return this;
    }
  };

  /**
   * Add component class:
   * - after initial building
   */
  Events.on('build.after', function () {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });

  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });

  return Swipe;
}

function Images (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },


    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },


    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function dragstart(event) {
      event.preventDefault();
    }
  };

  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Images.unbind();
    Binder.destroy();
  });

  return Images;
}

function Anchors (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */
  var detached = false;

  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */
  var prevented = false;

  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');

      this.bind();
    },


    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },


    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('click', Components.Html.wrapper);
    },


    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function click(event) {
      if (prevented) {
        event.stopPropagation();
        event.preventDefault();
      }
    },


    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;

          this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

          this.items[i].removeAttribute('href');
        }

        detached = true;
      }

      return this;
    },


    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;

          this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
        }

        detached = false;
      }

      return this;
    }
  };

  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });

  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */
  Events.on('swipe.move', function () {
    Anchors.detach();
  });

  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */
  Events.on('swipe.end', function () {
    Components.Transition.after(function () {
      Anchors.attach();
    });
  });

  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */
  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });

  return Anchors;
}

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

function Controls (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var capture = supportsPassive$1 ? { passive: true } : false;

  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

      this.addBindings();
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },


    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },


    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      if (item) {
        item.classList.add(settings.classes.activeNav);

        siblings(item).forEach(function (sibling) {
          sibling.classList.remove(settings.classes.activeNav);
        });
      }
    },


    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      var item = controls[Glide.index];

      if (item) {
        item.classList.remove(Glide.settings.classes.activeNav);
      }
    },


    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },


    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function removeBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children);
      }
    },


    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function bind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.on('click', elements[i], this.click);
        Binder.on('touchstart', elements[i], this.click, capture);
      }
    },


    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function unbind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },


    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in driection precised in
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {Void}
     */
    click: function click(event) {
      event.preventDefault();

      Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
    }
  };

  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._c;
    }
  });

  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */
  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });

  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });

  return Controls;
}

function Keyboard (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },


    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('keyup', document, this.press);
    },


    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('keyup', document);
    },


    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function press(event) {
      if (event.keyCode === 39) {
        Components.Run.make(Components.Direction.resolve('>'));
      }

      if (event.keyCode === 37) {
        Components.Run.make(Components.Direction.resolve('<'));
      }
    }
  };

  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */
  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });

  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */
  Events.on('update', function () {
    Keyboard.mount();
  });

  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Keyboard;
}

function Autoplay (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },


    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function start() {
      var _this = this;

      if (Glide.settings.autoplay) {
        if (isUndefined(this._i)) {
          this._i = setInterval(function () {
            _this.stop();

            Components.Run.make('>');

            _this.start();
          }, this.time);
        }
      }
    },


    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function stop() {
      this._i = clearInterval(this._i);
    },


    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function bind() {
      var _this2 = this;

      Binder.on('mouseover', Components.Html.root, function () {
        _this2.stop();
      });

      Binder.on('mouseout', Components.Html.root, function () {
        _this2.start();
      });
    },


    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }
  };

  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function get() {
      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return toInt(autoplay);
      }

      return toInt(Glide.settings.autoplay);
    }
  });

  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */
  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });

  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */
  Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });

  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */
  Events.on(['run.after', 'play', 'swipe.end'], function () {
    Autoplay.start();
  });

  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */
  Events.on('update', function () {
    Autoplay.mount();
  });

  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Autoplay;
}

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */
function sortBreakpoints(points) {
  if (isObject(points)) {
    return sortKeys(points);
  } else {
    warn('Breakpoints option must be an object');
  }

  return {};
}

function Breakpoints (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */
  var settings = Glide.settings;

  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */
  var points = sortBreakpoints(settings.breakpoints);

  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */
  var defaults = _extends({}, settings);

  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (var point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }
  };

  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */
  _extends(settings, Breakpoints.match(points));

  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */
  Binder.on('resize', window, throttle(function () {
    Glide.settings = mergeOptions(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));

  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */
  Events.on('update', function () {
    points = sortBreakpoints(points);

    defaults = _extends({}, settings);
  });

  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Binder.off('resize', window);
  });

  return Breakpoints;
}

var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,

  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide$1 = function (_Core) {
  inherits(Glide$$1, _Core);

  function Glide$$1() {
    classCallCheck(this, Glide$$1);
    return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
  }

  createClass(Glide$$1, [{
    key: 'mount',
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
    }
  }]);
  return Glide$$1;
}(Glide);

/* harmony default export */ __webpack_exports__["default"] = (Glide$1);


/***/ }),

/***/ "./src/blocks/accordion-item/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/accordion-item/edit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _accordions_components_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../accordions/components/InputLabel */ "./src/blocks/accordions/components/InputLabel.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/accordion-item/editor.scss");






 // Block types that cann be added to

const ALLOWED_BLOCKS = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)(`${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}.accordion_allowed_blocks`, ['core/image', 'core/heading', 'core/paragraph', 'core/list'] // Default value.
); // Set up props for InnerBlocks component.

const innerBlocksProps = {
  allowedBlocks: ALLOWED_BLOCKS
};
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @author WebDevStudios
 * @since 2.0.0
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement} Element to render.
 */

function Edit(props) {
  const {
    attributes: {
      title
    },
    setAttributes,
    className,
    clientId
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_accordions_components_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Section Title ', 'wdsblocks'),
    req: "true"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h3",
    role: "button",
    tabIndex: "0",
    className: `${className}__title`,
    onChange: value => setAttributes({
      title: value
    }),
    value: title ? title : '',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('WDS Accordion Title', 'wdsblocks'),
    "aria-expanded": "false",
    "aria-controls": `${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}-${clientId}`,
    allowedFormats: ['core/bold', 'core/italic']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_accordions_components_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Section Content ', 'wdsblocks'),
    req: "true"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className}__content`,
    "aria-hidden": "true",
    tabIndex: "-1",
    id: `${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}-${clientId}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className}__content--inner`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, innerBlocksProps))));
}

/***/ }),

/***/ "./src/blocks/accordion-item/index.js":
/*!********************************************!*\
  !*** ./src/blocks/accordion-item/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/accordion-item/save.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _frontend_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frontend/style.scss */ "./src/blocks/accordion-item/frontend/style.scss");






const BLOCKNAME = 'accordion';
/**
 * Register block type definition.
 *
 * @author WebDevStudios
 * @since 2.0.0
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(`wdsblocks/${BLOCKNAME}`, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Accordion', 'wdsblocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An expand and collaspe editible content section.', 'wdsblocks'),
  icon: 'sort',
  category: 'wds-blocks',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('accordion', 'wdsblocks')],
  supports: {
    html: false,
    anchor: true
  },
  parent: ['wdsblocks/accordion-group'],
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: `.wp-block-${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}-${BLOCKNAME}__title`
    },
    clientId: {
      type: 'string',
      default: `${BLOCKNAME}-item`
    }
  },
  example: {
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.')
      }
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/blocks/accordion-item/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/accordion-item/save.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);



/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @author WebDevStudios
 * @since 2.0.0
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement} Element to render.
 */

function Save(props) {
  const {
    attributes: {
      title,
      clientId
    }
  } = props;
  const className = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockDefaultClassName)('wdsblocks/accordion');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h3",
    role: "button",
    tabIndex: "0",
    className: `${className}__title`,
    value: title,
    "aria-expanded": "false",
    "aria-controls": clientId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className}__content`,
    "aria-hidden": "true",
    tabIndex: "-1",
    id: clientId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className}__content--inner`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
}

/***/ }),

/***/ "./src/blocks/accordions/components/InputLabel.js":
/*!********************************************************!*\
  !*** ./src/blocks/accordions/components/InputLabel.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const InputLabel = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-label"
  }, props.label, props.req && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "req"
  }, "*"));
};

/* harmony default export */ __webpack_exports__["default"] = (InputLabel);

/***/ }),

/***/ "./src/blocks/accordions/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/accordions/edit.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _utils_components_preview_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/components/preview-toggle */ "./src/utils/components/preview-toggle/index.js");
/* harmony import */ var _utils_hooks_use_preview_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/hooks/use-preview-toggle */ "./src/utils/hooks/use-preview-toggle/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/accordions/editor.scss");
/* harmony import */ var _components_InputLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/InputLabel */ "./src/blocks/accordions/components/InputLabel.js");
/* harmony import */ var _accordions_frontend___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../accordions/frontend/ */ "./src/blocks/accordions/frontend/index.js");













 // Block types that cann be added to `InnerBlocks` component

const ALLOWED_BLOCKS = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.applyFilters)(`${_utils_config__WEBPACK_IMPORTED_MODULE_7__.PREFIX}.accordion_group_allowed_blocks`, ['wdsblocks/accordion'] // Default value.
); // Block template for `InnerBlocks` component

const BLOCK_TEMPLATE = [['wdsblocks/accordion', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Accordion Title', 'wdsblocks')
}, [['core/paragraph', {
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Accordion content here…', 'wdsblocks'),
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Accordion content here…', 'wdsblocks')
}]]]]; // Set up props for InnerBlocks component.

const innerBlocksProps = {
  allowedBlocks: ALLOWED_BLOCKS,
  template: BLOCK_TEMPLATE
};
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @author WebDevStudios
 * @since 2.0.0
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement} Element to render.
 */

function Edit(props) {
  const {
    attributes: {
      title,
      desc,
      openFirst,
      toggle
    },
    setAttributes,
    className,
    fontColor,
    setFontColor,
    backgroundColor,
    setBackgroundColor
  } = props;
  const {
    showPreview,
    togglePreview,
    doubleClick
  } = (0,_utils_hooks_use_preview_toggle__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const showTitle = title && title[0] !== undefined ? true : false;
  const showDesc = desc && desc[0] !== undefined ? true : false;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Trigger `init` on state update.
    if (showPreview) {
      _accordions_frontend___WEBPACK_IMPORTED_MODULE_12__["default"].init();
    }
  }, [showPreview, openFirst, toggle]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Color Settings', 'wdsblocks'),
    colorSettings: [{
      value: fontColor === null || fontColor === void 0 ? void 0 : fontColor.color,
      onChange: setFontColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text Color', 'wdsblocks')
    }, {
      value: backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor.color,
      onChange: setBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Background Color', 'wdsblocks')
    }]
  }, 'web' === _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Platform.OS && !!(fontColor !== null && fontColor !== void 0 && fontColor.color) && !!(backgroundColor !== null && backgroundColor !== void 0 && backgroundColor.color) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ContrastChecker, {
    backgroundColor: backgroundColor.color,
    textColor: fontColor.color
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Settings', 'wdsblocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Expand First Accordion', 'wdsblocks'),
    id: "wds-expand-first",
    help: "Automatically expand the first accordion in this group on initial page load."
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Yes - Expand First Accordion', 'accordion-blocks'),
    checked: openFirst,
    onChange: value => setAttributes({
      openFirst: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Toggle Others', 'wdsblocks'),
    id: "wds-toggle-others",
    help: "Collaspe open accordions when expanding another."
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Yes - Toggle Others', 'accordion-blocks'),
    checked: toggle,
    onChange: value => setAttributes({
      toggle: value
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, showPreview ? 'preview-mode' : 'edit-mode'),
    style: {
      color: fontColor === null || fontColor === void 0 ? void 0 : fontColor.color,
      backgroundColor: backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor.color
    },
    "data-open-first": openFirst,
    "data-toggle": toggle,
    onDoubleClick: doubleClick
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: _utils_config__WEBPACK_IMPORTED_MODULE_7__.CONTAINER_CLASS
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InputLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Title (optional)', 'wdsblocks')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h2",
    type: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(`${className}__title`, !showTitle ? 'input-hidden' : ''),
    onChange: value => setAttributes({
      title: value
    }),
    value: title ? title : '',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Enter a title…', 'wdsblocks'),
    allowedFormats: ['core/bold', 'core/italic']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InputLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Short Description (optional)', 'wdsblocks')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(`${className}__desc`, !showDesc ? 'input-hidden' : ''),
    onChange: value => setAttributes({
      desc: value
    }),
    value: desc ? desc : '',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Enter a short description…', 'wdsblocks')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className}__content`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_preview_toggle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    showPreview: showPreview,
    togglePreview: togglePreview
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, innerBlocksProps)))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.withColors)({
  fontColor: 'color',
  backgroundColor: 'background-color'
})])(Edit));

/***/ }),

/***/ "./src/blocks/accordions/frontend/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/accordions/frontend/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordionsClass = 'wp-block-wdsblocks-accordions';
const accordionClass = 'wp-block-wdsblocks-accordion';
const buttonClass = `${accordionClass}__title`;
const expandedClass = 'is-expanded';
const collapseClass = 'will-collapse';
const wdsBlocksAccordion = {
  init: () => {
    // Get all accordions.
    const accordions = document.querySelectorAll(`.${accordionClass}`);

    if (!accordions) {
      return false; // Exit.
    } // Loop all accordions.


    [...accordions].forEach(accordion => {
      const button = accordion.querySelector(`.${buttonClass}`);

      if (button) {
        button.addEventListener('click', wdsBlocksAccordion.click);
        button.addEventListener('keypress', function (event) {
          // Enter/Return click
          if (13 === event.which || 13 === event.keyCode) {
            wdsBlocksAccordion.click(event);
          }
        });
      }
    }); // Get all accordion groups.

    const accordionGroups = document.querySelectorAll(`.${accordionsClass}`);

    if (!accordionGroups) {
      return false; // Exit.
    } // Loop all accordion groups.


    [...accordionGroups].forEach(group => {
      wdsBlocksAccordion.setToggles(group);
      wdsBlocksAccordion.openFirst(group);
    });
  },
  click: e => {
    e.preventDefault();
    const button = e.currentTarget;
    const props = {
      container: button.parentNode,
      button,
      content: button.parentNode.querySelector(`.${accordionClass}__content`)
    };

    if (props.container.classList.contains(expandedClass) || props.container.parentNode.classList.contains(expandedClass)) {
      wdsBlocksAccordion.collapse(props);
    } else {
      // Close open accordion when `will-collapse` class is active.
      if (button.classList.contains(collapseClass)) {
        wdsBlocksAccordion.closeActive(props.container);
      }

      wdsBlocksAccordion.expand(props, true);
    }
  },
  expand: (props, moveFocus = true) => {
    props.container.classList.add(expandedClass);
    props.button.setAttribute('aria-expanded', true);
    props.content.setAttribute('aria-hidden', false); // Get first inner div

    const child = props.content.querySelector('div:first-child'); // Set height on content div

    props.content.style.height = child.clientHeight + 'px'; // Delay and add focus

    setTimeout(function () {
      if (moveFocus) {
        props.content.focus();
      }
    }, 200);
  },
  collapse: props => {
    props.container.classList.remove(expandedClass);
    props.button.setAttribute('aria-expanded', false);
    props.content.setAttribute('aria-hidden', true);
    props.content.style.height = '0px';
  },
  openFirst: group => {
    if (!group) {
      return false;
    } // Get data attribute.


    const openFirst = group.dataset.openFirst ? group.dataset.openFirst : false;
    const firstButton = group.querySelector(`.${buttonClass}`);

    if (!firstButton) {
      return false;
    }

    const props = {
      container: firstButton.parentNode,
      button: firstButton,
      content: firstButton.parentNode.querySelector(`.${accordionClass}__content`)
    };

    if ('true' === openFirst) {
      wdsBlocksAccordion.expand(props, false);
    } else {
      // Used in the Block Editor only.
      wdsBlocksAccordion.collapse(props, false);
    }
  },
  setToggles: group => {
    if (!group) {
      return false;
    }

    const toggle = group.dataset.toggle ? group.dataset.toggle : false;
    const buttons = group.querySelectorAll(`.${buttonClass}`);

    if (!buttons) {
      return false;
    }

    [...buttons].forEach(button => {
      // Need to conditional if/else here for Block Editor integration.
      if ('true' === toggle) {
        button.classList.add(collapseClass);
      } else {
        button.classList.remove(collapseClass);
      }
    });
  },
  closeActive: container => {
    if (!container) {
      return false;
    } // Get active accordion from container parent or parent parent (Block editor integration).


    const active = container.parentNode.querySelector(`.${expandedClass}`) || container.parentNode.parentNode.querySelector(`.${expandedClass}`);

    if (!active) {
      return false;
    }

    const button = active.querySelector(`.${buttonClass}`);

    if (!button) {
      return false;
    }

    button.click(); // Trigger click on button.
  }
};
/* harmony default export */ __webpack_exports__["default"] = (wdsBlocksAccordion);

/***/ }),

/***/ "./src/blocks/accordions/index.js":
/*!****************************************!*\
  !*** ./src/blocks/accordions/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordions/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/accordions/save.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _frontend_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frontend/style.scss */ "./src/blocks/accordions/frontend/style.scss");






const BLOCKNAME = 'accordions';
/**
 * Register block type definition.
 *
 * @author WebDevStudios
 * @since 2.0.0
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(`wdsblocks/${BLOCKNAME}`, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Accordions (WDS)', 'wdsblocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Adds a group of expand/collapse blocks with optional headline and description fields.', 'wdsblocks'),
  icon: 'list-view',
  category: 'wds-blocks',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('accordion', 'accordions', 'wdsblocks')],
  supports: {
    align: ['full'],
    default: 'none',
    html: false,
    anchor: true
  },
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: `.wp-block-${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}-${BLOCKNAME}__title`,
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter a title…', 'wdsblocks')
    },
    desc: {
      type: 'array',
      source: 'children',
      selector: `.wp-block-${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}-${BLOCKNAME}__desc`,
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter a short description…', 'wdsblocks')
    },
    openFirst: {
      type: 'boolean',
      default: false
    },
    toggle: {
      type: 'boolean',
      default: false
    },
    fontColor: {
      type: 'string',
      default: undefined
    },
    customFontColor: {
      type: 'string',
      default: undefined
    },
    backgroundColor: {
      type: 'string',
      default: undefined
    },
    customBackgroundColor: {
      type: 'string',
      default: undefined
    }
  },
  example: {
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.')
      }
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/blocks/accordions/save.js":
/*!***************************************!*\
  !*** ./src/blocks/accordions/save.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _utils_components_with_background_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/components/with-background-color */ "./src/utils/components/with-background-color/index.js");
/* harmony import */ var _utils_components_with_font_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/components/with-font-color */ "./src/utils/components/with-font-color/index.js");







/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @author WebDevStudios
 * @since 2.0.0
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement} Element to render.
 */

function Save(props) {
  const {
    attributes: {
      title,
      desc,
      fontColor,
      customFontColor,
      backgroundColor,
      customBackgroundColor,
      openFirst,
      toggle
    }
  } = props;
  const className = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockDefaultClassName)(`${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}/accordions`); // Define props for wrapping component.

  const wrapProps = {
    className,
    'data-open-first': openFirst,
    'data-toggle': toggle
  }; // Define HOCs to be composed.

  const composeHOCs = []; // Display accordion with custom font color.

  if (fontColor || customFontColor) {
    composeHOCs.push(_utils_components_with_font_color__WEBPACK_IMPORTED_MODULE_6__["default"]);
    wrapProps.fontColor = fontColor;
    wrapProps.customFontColor = customFontColor;
  } // Display accordion with custom background color.


  if (backgroundColor || customBackgroundColor) {
    composeHOCs.push(_utils_components_with_background_color__WEBPACK_IMPORTED_MODULE_5__["default"]);
    wrapProps.backgroundColor = backgroundColor;
    wrapProps.customBackgroundColor = customBackgroundColor;
  }

  const AccordionComponent = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)(composeHOCs)('div'); // eslint-disable-line @wordpress/no-unused-vars-before-return

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AccordionComponent, wrapProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: _utils_config__WEBPACK_IMPORTED_MODULE_4__.CONTAINER_CLASS
  }, title && title[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    className: `${className}__title`,
    value: title
  }), desc && desc[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: `${className}__desc`,
    value: desc
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className}__content`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
}

/***/ }),

/***/ "./src/blocks/carousel-slide/components/Settings.js":
/*!**********************************************************!*\
  !*** ./src/blocks/carousel-slide/components/Settings.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_components_background_settings_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/components/background-settings-panel */ "./src/utils/components/background-settings-panel/index.js");
/* harmony import */ var _utils_components_overlay_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/components/overlay-panel */ "./src/utils/components/overlay-panel/index.js");






/**
 * The Settings component displays settings for the Slide block via Inspector Controls.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */

function Settings(props) {
  const {
    fontColor,
    setFontColor,
    backgroundType,
    backgroundColor,
    setBackgroundColor,
    backgroundImage,
    backgroundVideo,
    overlayColor,
    setOverlayColor,
    overlayOpacity,
    setAttributes
  } = props;
  const hasMediaBackground = 'image' === backgroundType || 'video' === backgroundType;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color settings', 'wdsblocks'),
    colorSettings: [{
      value: fontColor,
      onChange: setFontColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Color', 'wdsblocks')
    }]
  }, 'web' === _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Platform.OS && 'color' === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ContrastChecker, {
    backgroundColor: backgroundColor,
    textColor: fontColor
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_background_settings_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    backgroundType: backgroundType,
    setBackgroundType: value => setAttributes({
      backgroundType: value
    }),
    backgroundColor: backgroundColor,
    setBackgroundColor: setBackgroundColor,
    backgroundImage: backgroundImage,
    setBackgroundImage: value => setAttributes({
      backgroundImage: value
    }),
    backgroundVideo: backgroundVideo,
    setBackgroundVideo: value => setAttributes({
      backgroundVideo: value
    })
  }), hasMediaBackground && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_overlay_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    overlayColor: overlayColor,
    setOverlayColor: setOverlayColor,
    overlayOpacity: overlayOpacity,
    setOverlayOpacity: value => setAttributes({
      overlayOpacity: value
    })
  }));
}

/***/ }),

/***/ "./src/blocks/carousel-slide/components/Slide.js":
/*!*******************************************************!*\
  !*** ./src/blocks/carousel-slide/components/Slide.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slide; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _utils_components_with_background_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/components/with-background-color */ "./src/utils/components/with-background-color/index.js");
/* harmony import */ var _utils_components_with_background_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/components/with-background-image */ "./src/utils/components/with-background-image/index.js");
/* harmony import */ var _utils_components_with_background_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/components/with-background-video */ "./src/utils/components/with-background-video/index.js");
/* harmony import */ var _utils_components_with_overlay_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/components/with-overlay-color */ "./src/utils/components/with-overlay-color/index.js");
/* harmony import */ var _utils_components_with_font_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/components/with-font-color */ "./src/utils/components/with-font-color/index.js");








/**
 * The Slide component displays an individual carousel slide.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */

function Slide(props) {
  const {
    className,
    style,
    fontColor,
    customFontColor,
    backgroundType,
    backgroundColor,
    customBackgroundColor,
    backgroundImage,
    backgroundVideo,
    overlayColor,
    customOverlayColor,
    overlayOpacity,
    children
  } = props;
  /**
   * Display slide child content with wrapping container div.
   *
   * @author WebDevStudios
   * @since  2.0.0
   * @return {WPElement} Element to render.
   */

  function SlideContent() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: _utils_config__WEBPACK_IMPORTED_MODULE_2__.CONTAINER_CLASS
    }, children);
  } // Define props for wrapping component.


  const wrapProps = {
    className,
    style
  }; // Define HOCs to be composed.

  const composeHOCs = []; // Display slide with custom font color.

  if (fontColor || customFontColor) {
    composeHOCs.push(_utils_components_with_font_color__WEBPACK_IMPORTED_MODULE_7__["default"]);
    wrapProps.fontColor = fontColor;
    wrapProps.customFontColor = customFontColor;
  } // Determine HOC and extra props according to background type.


  switch (backgroundType) {
    // Display slide with color background.
    case 'color':
      composeHOCs.push(_utils_components_with_background_color__WEBPACK_IMPORTED_MODULE_3__["default"]);
      wrapProps.backgroundColor = backgroundColor;
      wrapProps.customBackgroundColor = customBackgroundColor;
      break;
    // Display slide with image background.

    case 'image':
      composeHOCs.push(_utils_components_with_background_image__WEBPACK_IMPORTED_MODULE_4__["default"]);
      wrapProps.backgroundImage = backgroundImage;
      break;
    // Display slide with video background.

    case 'video':
      composeHOCs.push(_utils_components_with_background_video__WEBPACK_IMPORTED_MODULE_5__["default"]);
      wrapProps.backgroundVideo = backgroundVideo;
  } // Add overlay for image or video background.


  if ('image' === backgroundType || 'video' === backgroundType) {
    composeHOCs.push(_utils_components_with_overlay_color__WEBPACK_IMPORTED_MODULE_6__["default"]);
    wrapProps.overlayColor = overlayColor;
    wrapProps.customOverlayColor = customOverlayColor;
    wrapProps.overlayOpacity = overlayOpacity;
  }

  const SlideComponent = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)(composeHOCs)('div'); // eslint-disable-line @wordpress/no-unused-vars-before-return
  // Display default slide.

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SlideComponent, wrapProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SlideContent, null));
}

/***/ }),

/***/ "./src/blocks/carousel-slide/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/carousel-slide/edit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Settings */ "./src/blocks/carousel-slide/components/Settings.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Slide */ "./src/blocks/carousel-slide/components/Slide.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/config */ "./src/blocks/carousel-slide/utils/config.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/carousel-slide/editor.scss");








/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement}      Element to render.
 */

function Edit(props) {
  const {
    attributes,
    className,
    setAttributes,
    fontColor,
    setFontColor,
    backgroundColor,
    setBackgroundColor,
    overlayColor,
    setOverlayColor
  } = props; // Define props relating to block background settings.

  const backgroundProps = { ...attributes,
    backgroundColor: backgroundColor.color,
    overlayColor: overlayColor.color
  }; // Define props relating to slide settings.

  const slideProps = { ...backgroundProps,
    className,
    fontColor: fontColor === null || fontColor === void 0 ? void 0 : fontColor.slug,
    customFontColor: fontColor.color,
    backgroundColor: backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor.slug,
    customBackgroundColor: backgroundColor.color,
    overlayColor: overlayColor === null || overlayColor === void 0 ? void 0 : overlayColor.slug,
    customOverlayColor: overlayColor.color
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_Settings__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, backgroundProps, {
    fontColor: fontColor.color,
    setFontColor: setFontColor,
    setBackgroundColor: setBackgroundColor,
    setOverlayColor: setOverlayColor,
    setAttributes: setAttributes
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_Slide__WEBPACK_IMPORTED_MODULE_5__["default"], slideProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_config__WEBPACK_IMPORTED_MODULE_6__.INNER_BLOCKS_PROPS, {
    __experimentalTagName: 'div',
    __experimentalPassedProps: {
      className: 'slide-content'
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)({
  fontColor: 'color',
  backgroundColor: 'background-color',
  overlayColor: 'background-color'
})])(Edit));

/***/ }),

/***/ "./src/blocks/carousel-slide/index.js":
/*!********************************************!*\
  !*** ./src/blocks/carousel-slide/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/carousel-slide/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/carousel-slide/save.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _frontend_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frontend/style.scss */ "./src/blocks/carousel-slide/frontend/style.scss");






/**
 * Register block type definition.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(`${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}/carousel-slide`, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slide', 'wdsblocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An individual carousel slide with optional title, content, and CTA button(s).', 'wdsblocks'),
  icon: 'cover-image',
  category: 'wds-blocks',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('carousel, slide', 'wdsblocks')],
  attributes: {
    fontColor: {
      type: 'string',
      default: undefined
    },
    customFontColor: {
      type: 'string',
      default: undefined
    },
    backgroundType: {
      type: 'string',
      default: 'none'
    },
    backgroundColor: {
      type: 'string',
      default: undefined
    },
    customBackgroundColor: {
      type: 'string',
      default: undefined
    },
    backgroundImage: {
      type: 'object',
      default: undefined
    },
    backgroundVideo: {
      type: 'object',
      default: undefined
    },
    overlayColor: {
      type: 'string',
      default: undefined
    },
    customOverlayColor: {
      type: 'string',
      default: undefined
    },
    overlayOpacity: {
      type: 'number',
      default: 40
    }
  },
  usesContext: [`${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}/carousel/showPreview`],
  supports: {
    html: false
  },
  parent: [`${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}/carousel`],

  /**
   * Get edit wrapper props.
   *
   * @since 2.0.0
   * @return {string} The slide class.
   */
  getEditWrapperProps() {
    return {
      className: 'glide__slide'
    };
  },

  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/blocks/carousel-slide/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/carousel-slide/save.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Slide */ "./src/blocks/carousel-slide/components/Slide.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");





/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement}      Element to render.
 */

function Save(props) {
  const {
    attributes
  } = props; // Define props relating to slide settings.

  const slideProps = { ...attributes,
    className: `${(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockDefaultClassName)(`${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}/carousel-slide`)} glide__slide`
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Slide__WEBPACK_IMPORTED_MODULE_3__["default"], slideProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slide-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
}

/***/ }),

/***/ "./src/blocks/carousel-slide/utils/config.js":
/*!***************************************************!*\
  !*** ./src/blocks/carousel-slide/utils/config.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INNER_BLOCKS_PROPS": function() { return /* binding */ INNER_BLOCKS_PROPS; }
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/config */ "./src/utils/config.js");



/**
 * Filter props for slide InnerBlocks.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {Object} [props] InnerBlocks props.
 */

const INNER_BLOCKS_PROPS = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)(`${_utils_config__WEBPACK_IMPORTED_MODULE_2__.PREFIX}.carouselSlide.innerBlocksProps`, {
  allowedBlocks: ['core/heading', 'core/paragraph', 'core/buttons'],
  template: [['core/heading', {
    content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Title', 'wdsblocks'),
    level: 4,
    align: 'center'
  }], ['core/paragraph', {
    content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide Content', 'wdsblocks'),
    align: 'center'
  }], ['core/buttons', {
    align: 'center'
  }, [['core/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read More', 'wdsblocks')
  }]]]]
});

/***/ }),

/***/ "./src/blocks/carousel/components/Slider.js":
/*!**************************************************!*\
  !*** ./src/blocks/carousel/components/Slider.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/config */ "./src/utils/config.js");




/**
 * The Slider component displays a carousel slider wrapper.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */

function Slider(props) {
  const {
    slideCount,
    isAdmin = false,
    children
  } = props;
  const dots = []; // Generate dot buttons per slide count.

  for (let i = 0; i < slideCount; i++) {
    dots.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "glide__bullet slider-dot",
      "data-glide-dir": `=${i}`,
      key: i
    }));
  }
  /**
   * Filter previous slide button text.
   *
   * @author WebDevStudios
   * @since  2.0.0
   * @param {Array} [buttonText] Previous slide button text.
   */


  const previousButtonText = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(`${_utils_config__WEBPACK_IMPORTED_MODULE_3__.PREFIX}.carousel.previousSlideButtonText`, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Previous', 'wdsblocks'));
  /**
   * Filter next slide button text.
   *
   * @author WebDevStudios
   * @since  2.0.0
   * @param {Array} [buttonText] Next slide button text.
   */

  const nextButtonText = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(`${_utils_config__WEBPACK_IMPORTED_MODULE_3__.PREFIX}.carousel.nextSlideButtonText`, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Next', 'wdsblocks'));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "glide__track slider-track",
    "data-glide-el": "track"
  }, children), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "glide__arrows slider-arrows",
    "data-glide-el": "controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `glide__arrow glide__arrow--left slider-arrow slider-arrow-left ${isAdmin ? 'wp-block-button__link' : ''}`,
    "data-glide-dir": "<"
  }, previousButtonText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `glide__arrow glide__arrow--right slider-arrow slider-arrow-right ${isAdmin ? 'wp-block-button__link' : ''}`,
    "data-glide-dir": ">"
  }, nextButtonText)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "glide__bullets slider-dots",
    "data-glide-el": "controls[nav]"
  }, dots));
}

/***/ }),

/***/ "./src/blocks/carousel/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/carousel/edit.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Slider */ "./src/blocks/carousel/components/Slider.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/config */ "./src/blocks/carousel/utils/config.js");
/* harmony import */ var _utils_modules_backgroundVideo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/modules/backgroundVideo */ "./src/utils/modules/backgroundVideo.js");
/* harmony import */ var _utils_components_preview_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/components/preview-toggle */ "./src/utils/components/preview-toggle/index.js");
/* harmony import */ var _utils_hooks_use_preview_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/hooks/use-preview-toggle */ "./src/utils/hooks/use-preview-toggle/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/carousel/editor.scss");













/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement}      Element to render.
 */

function Edit(props) {
  const {
    attributes: {
      slideCount: slideCountAttr
    },
    className,
    clientId,
    setAttributes,
    slideCount
  } = props;
  const {
    showPreview,
    togglePreview,
    doubleClick
  } = (0,_utils_hooks_use_preview_toggle__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"](`#block-${clientId}`, _utils_config__WEBPACK_IMPORTED_MODULE_7__.GLIDE_SETTINGS);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Mount or unmount glide functionality.
    if (showPreview) {
      slider.mount();
    } else {
      slider.destroy();
    } // Mute all background videos.


    _utils_modules_backgroundVideo__WEBPACK_IMPORTED_MODULE_8__["default"].init(); // Update showPreview attribute on state change.

    setAttributes({
      showPreview
    });
  }, [showPreview]); // Update slide count attr on prop change.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      slideCount
    });
  }, [slideCount]); // Check if this is a new block.

  const isNewBlock = !slideCountAttr; // If new/empty block, switch to edit mode.

  if (isNewBlock && showPreview) {
    togglePreview();
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_utils_components_preview_toggle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    showPreview: showPreview,
    togglePreview: togglePreview
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `${className} ${showPreview ? 'preview-mode' : 'edit-mode'}`,
    onDoubleClick: doubleClick
  }, showPreview ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_Slider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    slideCount: slideCount,
    isAdmin: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_config__WEBPACK_IMPORTED_MODULE_7__.INNER_BLOCKS_PROPS, {
    __experimentalTagName: 'ul',
    __experimentalPassedProps: {
      className: 'glide__slides slider-slides'
    },
    renderAppender: false
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, _utils_config__WEBPACK_IMPORTED_MODULE_7__.INNER_BLOCKS_PROPS)));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, props) => {
  const {
    clientId
  } = props; // Get current child block (slide) clientId values.

  const slideCount = select('core/block-editor').getBlockOrder(clientId).length;
  return {
    slideCount
  };
})])(Edit));

/***/ }),

/***/ "./src/blocks/carousel/index.js":
/*!**************************************!*\
  !*** ./src/blocks/carousel/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/carousel/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/carousel/save.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _frontend_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frontend/style.scss */ "./src/blocks/carousel/frontend/style.scss");






/**
 * Register block type definition.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(`${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}/carousel`, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Carousel', 'wdsblocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('A carousel with a call to action for each slide.', 'wdsblocks'),
  icon: 'slides',
  category: 'wds-blocks',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('carousel, slider', 'wdsblocks')],
  attributes: {
    showPreview: {
      type: 'boolean',
      default: true
    },
    slideCount: {
      type: 'number',
      default: 0
    }
  },
  providesContext: {
    [`${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}/carousel/showPreview`]: 'showPreview'
  },
  supports: {
    align: ['wide', 'full'],
    default: 'wide',
    html: false
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/blocks/carousel/save.js":
/*!*************************************!*\
  !*** ./src/blocks/carousel/save.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Slider */ "./src/blocks/carousel/components/Slider.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");





/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement}      Element to render.
 */

function Save(props) {
  const {
    attributes: {
      slideCount
    }
  } = props; // Define props relating to slider settings.

  const sliderProps = {
    slideCount
  };
  const className = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockDefaultClassName)(`${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}/carousel`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className} glide`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], sliderProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "glide__slides slider-slides"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
}

/***/ }),

/***/ "./src/blocks/carousel/utils/config.js":
/*!*********************************************!*\
  !*** ./src/blocks/carousel/utils/config.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLIDE_SETTINGS": function() { return /* binding */ GLIDE_SETTINGS; },
/* harmony export */   "INNER_BLOCKS_PROPS": function() { return /* binding */ INNER_BLOCKS_PROPS; }
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/config */ "./src/utils/config.js");


/**
 * Filter (GlideJS) carousel settings.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {Object} [settings] Carousel settings.
 */

const GLIDE_SETTINGS = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)(`${_utils_config__WEBPACK_IMPORTED_MODULE_1__.PREFIX}.carousel.glideSettings`, {
  autoplay: 5000,
  focusAt: 'center',
  gap: 0,
  type: 'carousel'
});
/**
 * Filter props for carousel InnerBlocks.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {Object} [props] InnerBlocks props.
 */

const INNER_BLOCKS_PROPS = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)(`${_utils_config__WEBPACK_IMPORTED_MODULE_1__.PREFIX}.carousel.innerBlocksProps`, {
  allowedBlocks: [`${_utils_config__WEBPACK_IMPORTED_MODULE_1__.PREFIX}/carousel-slide`],
  template: [[`${_utils_config__WEBPACK_IMPORTED_MODULE_1__.PREFIX}/carousel-slide`, {}]]
});

/***/ }),

/***/ "./src/blocks/starter/edit.js":
/*!************************************!*\
  !*** ./src/blocks/starter/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/config */ "./src/blocks/starter/utils/config.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_components_preview_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/components/preview-toggle */ "./src/utils/components/preview-toggle/index.js");
/* harmony import */ var _utils_hooks_use_preview_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/hooks/use-preview-toggle */ "./src/utils/hooks/use-preview-toggle/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/starter/editor.scss");












/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement}      Element to render.
 */

function Edit(props) {
  const {
    attributes: {
      title,
      contentStyle,
      backgroundStyle,
      blockCount: blockCountAttr
    },
    className,
    setAttributes,
    blockCount
  } = props;
  const {
    showPreview,
    togglePreview,
    doubleClick
  } = (0,_utils_hooks_use_preview_toggle__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Update inner block count attr on prop change.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      blockCount
    });
  }, [blockCount]); // Check if this is a new block.

  const isNewBlock = !blockCountAttr; // If new/empty block, switch to edit mode.

  if (isNewBlock && showPreview) {
    togglePreview();
  }

  const onChangeTitle = newTitle => {
    setAttributes({
      title: newTitle
    });
  };

  const onChangeTextColor = newColor => {
    const newColorValue = newColor === undefined ? 'none' : newColor;
    setAttributes({
      contentStyle: {
        color: newColorValue,
        textAlign: contentStyle.textAlign
      }
    });
  };

  const onChangeBackgroundColor = newBgcolor => {
    const newBgcolorValue = newBgcolor === undefined ? 'none' : newBgcolor;
    setAttributes({
      backgroundStyle: {
        backgroundColor: newBgcolorValue
      }
    });
  };

  const onChangeAlignment = newAlignment => {
    const alignmentValue = newAlignment === undefined ? 'none' : newAlignment;
    setAttributes({
      contentStyle: {
        color: contentStyle.color,
        textAlign: alignmentValue
      }
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: contentStyle.textAlign,
    onChange: onChangeAlignment
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_utils_components_preview_toggle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    showPreview: showPreview,
    togglePreview: togglePreview
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Color Settings', 'wdsblocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Choose a text color.', 'wdsblocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    value: contentStyle.color,
    onChange: onChangeTextColor
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Choose a background color.', 'wdsblocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    value: backgroundStyle.backgroundColor,
    onChange: onChangeBackgroundColor
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `${className} ${showPreview ? 'preview-mode' : 'edit-mode'}`,
    onDoubleClick: doubleClick
  }, showPreview ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `${className} starter`,
    style: backgroundStyle,
    blockCount: blockCount,
    isAdmin: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "block-title",
    tagName: "h2",
    formattingControls: [],
    style: contentStyle,
    value: title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_config__WEBPACK_IMPORTED_MODULE_6__.INNER_BLOCKS_PROPS, {
    __experimentalTagName: 'div',
    __experimentalPassedProps: {
      className: 'inner-blocks'
    },
    renderAppender: false
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `${className} starter`,
    style: backgroundStyle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "block-title",
    tagName: "h2",
    formattingControls: [],
    style: contentStyle,
    onChange: onChangeTitle,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Block Title', 'wdsblocks'),
    keepPlaceholderOnFocus: true,
    value: title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, _utils_config__WEBPACK_IMPORTED_MODULE_6__.INNER_BLOCKS_PROPS))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, props) => {
  const {
    blockId
  } = props; // Get current child block (innerblocks) blockId values.

  const blockCount = select('core/block-editor').getBlockOrder(blockId).length;
  return {
    blockCount
  };
})])(Edit));

/***/ }),

/***/ "./src/blocks/starter/index.js":
/*!*************************************!*\
  !*** ./src/blocks/starter/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/starter/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/starter/save.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");
/* harmony import */ var _frontend_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frontend/style.scss */ "./src/blocks/starter/frontend/style.scss");






/**
 * Register block type definition.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(`${_utils_config__WEBPACK_IMPORTED_MODULE_4__.PREFIX}/starter`, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Starter Block', 'wdsblocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('A starter block with a RichText heading and color options.', 'wdsblocks'),
  icon: 'admin-network',
  category: 'wds-blocks',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('starter block, richtext', 'wdsblocks')],
  attributes: {
    showPreview: {
      type: 'boolean',
      default: true
    },
    align: {
      type: 'string',
      default: 'full'
    },
    title: {
      type: 'array',
      source: 'children',
      selector: 'h2'
    },
    contentStyle: {
      type: 'object',
      default: {
        color: '#000000',
        textAlign: 'left'
      }
    },
    backgroundStyle: {
      type: 'object',
      default: {
        backgroundColor: 'transparent'
      }
    }
  },
  supports: {
    align: ['full', 'wide', 'left', 'center', 'right'],
    anchor: true,
    html: false
  },
  example: {
    attributes: {
      backgroundStyle: {
        backgroundColor: '#40403F'
      },
      contentStyle: {
        color: '#F47C48',
        textAlign: 'center'
      },
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Starter Block', 'wdsblocks')
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/blocks/starter/save.js":
/*!************************************!*\
  !*** ./src/blocks/starter/save.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/config */ "./src/utils/config.js");




/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement}      Element to render.
 */

function Save(props) {
  const {
    attributes: {
      title,
      contentStyle,
      backgroundStyle
    }
  } = props;
  const className = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockDefaultClassName)(`${_utils_config__WEBPACK_IMPORTED_MODULE_3__.PREFIX}/starter`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className} starter`,
    style: backgroundStyle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "block-title",
    style: contentStyle,
    tagName: "h2",
    value: title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/starter/utils/config.js":
/*!********************************************!*\
  !*** ./src/blocks/starter/utils/config.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INNER_BLOCKS_PROPS": function() { return /* binding */ INNER_BLOCKS_PROPS; }
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/config */ "./src/utils/config.js");

 // import { __ } from '@wordpress/i18n';

/**
 * Filter props for starter InnerBlocks.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {Object} [props] InnerBlocks props.
 */

const INNER_BLOCKS_PROPS = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)(`${_utils_config__WEBPACK_IMPORTED_MODULE_1__.PREFIX}.starter.innerBlocksProps`, {
  allowedBlocks: ['core/paragraph', 'core/buttons', 'core/image'],
  template: [
    /** Sample core block template structure
      [
      'core/heading',
      {
      content: __( 'Title', 'wdsblocks' ),
      level: 3,
      align: 'center',
      },
      ],
      [
      'core/paragraph',
      {
      content: __( 'Content', 'wdsblocks' ),
      align: 'center',
      },
      ],
      [
      'core/buttons',
      { align: 'center' },
      [ [ 'core/button', { text: __( 'Read More', 'wdsblocks' ) } ] ],
      ],
     */
  ]
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_accordions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/accordions */ "./src/blocks/accordions/index.js");
/* harmony import */ var _blocks_accordion_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/accordion-item */ "./src/blocks/accordion-item/index.js");
/* harmony import */ var _blocks_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/carousel */ "./src/blocks/carousel/index.js");
/* harmony import */ var _blocks_carousel_slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/carousel-slide */ "./src/blocks/carousel-slide/index.js");
/* harmony import */ var _blocks_starter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/starter */ "./src/blocks/starter/index.js");
/* harmony import */ var _variations_cover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variations/cover */ "./src/variations/cover/index.js");
/* harmony import */ var _variations_columns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./variations/columns */ "./src/variations/columns/index.js");
/**
 * WDS Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */




 // Block Variations




/***/ }),

/***/ "./src/utils/components/background-settings-panel/index.js":
/*!*****************************************************************!*\
  !*** ./src/utils/components/background-settings-panel/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BackgroundSettingsPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _color_palette_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color-palette-control */ "./src/utils/components/color-palette-control/index.js");
/* harmony import */ var _media_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media-control */ "./src/utils/components/media-control/index.js");





/**
 * The BackgroundSettingsPanel component displays a panel of controls to toggle between different background options.
 *
 * @author WebDevStudios
 * @since  2.1.0
 * @param {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */

function BackgroundSettingsPanel(props) {
  const {
    backgroundType,
    setBackgroundType,
    backgroundOptions = ['color', 'image', 'video'],
    description = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remember: image and video files should be compressed and optimized with tools like ImageOptim (https://imageoptim.com/online) and Handbrake (https://handbrake.fr/) prior to upload. For best results, background media should be at least 1280x720.', 'wdsblocks'),
    backgroundColor,
    setBackgroundColor,
    backgroundImage,
    setBackgroundImage,
    backgroundVideo,
    setBackgroundVideo
  } = props; // Define background type options.

  const options = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wdsblocks'),
    value: 'none'
  }]; // Add color option if specified in props.

  if (backgroundOptions.includes('color')) {
    options.push({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wdsblocks'),
      value: 'color'
    });
  } // Add image option if specified in props.


  if (backgroundOptions.includes('image')) {
    options.push({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wdsblocks'),
      value: 'image'
    });
  } // Add video option if specified in props.


  if (backgroundOptions.includes('video')) {
    options.push({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Video', 'wdsblocks'),
      value: 'video'
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background settings', 'wdsblocks'),
    className: "block-editor-panel-color-gradient-settings"
  }, description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "description"
  }, description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background type', 'wdsblocks'),
    value: backgroundType,
    options: options,
    onChange: setBackgroundType
  }), 'color' === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_palette_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: backgroundColor,
    setColor: setBackgroundColor,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'wdsblocks')
  }), 'image' === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_media_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    media: backgroundImage,
    setMedia: setBackgroundImage,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background image', 'wdsblocks'),
    addLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add image', 'wdsblocks'),
    removeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove image', 'wdsblocks')
  }), 'video' === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_media_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    media: backgroundVideo,
    setMedia: setBackgroundVideo,
    type: "video",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background video', 'wdsblocks'),
    addLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add video', 'wdsblocks'),
    removeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove video', 'wdsblocks')
  }));
}

/***/ }),

/***/ "./src/utils/components/color-palette-control/index.js":
/*!*************************************************************!*\
  !*** ./src/utils/components/color-palette-control/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ColorPaletteControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




/**
 * The ColorPaletteControl component displays a control with label for selecting a color.
 *
 * @author WebDevStudios
 * @since  2.1.0
 * @param {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */

function ColorPaletteControl(props) {
  const {
    color,
    setColor,
    label
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-editor-color-gradient-control__color-indicator"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl.VisualLabel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, label, !!color && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: color,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
    /* translators: current color value name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('(Color: %s)'), color)
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    value: color,
    onChange: setColor
  })));
}

/***/ }),

/***/ "./src/utils/components/media-control/index.js":
/*!*****************************************************!*\
  !*** ./src/utils/components/media-control/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MediaControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Display media preview according to type.
 *
 * @author WebDevStudios
 * @since  2.1.0
 * @param {Object} [props] Properties passed to the component.
 * @return {Element} Media preview.
 */

function Preview(props) {
  const {
    type,
    media,
    label
  } = props;
  const className = 'components-responsive-wrapper__content';

  switch (type) {
    case 'video':
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
        className: className,
        autoPlay: true,
        muted: true,
        loop: true,
        "aria-hidden": "true"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
        src: media === null || media === void 0 ? void 0 : media.url,
        type: media === null || media === void 0 ? void 0 : media.mime
      }));

    default:
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: className,
        src: media === null || media === void 0 ? void 0 : media.url,
        alt: label
      });
  }
}
/**
 * The MediaControl component displays a control to select a media item and display a preview.
 *
 * @author WebDevStudios
 * @since  2.1.0
 * @param {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */


function MediaControl(props) {
  const {
    media,
    setMedia,
    type = 'image',
    allowedTypes = [type],
    label,
    addLabel,
    removeLabel
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "components-base-control__label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    title: label,
    onSelect: value => setMedia(value),
    allowedTypes: allowedTypes,
    value: media,
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open,
      className: !media ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'
    }, !media && addLabel, !!media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ResponsiveWrapper, {
      naturalWidth: media === null || media === void 0 ? void 0 : media.width,
      naturalHeight: media === null || media === void 0 ? void 0 : media.height
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Preview, {
      media: media,
      label: label,
      type: type
    })))
  })), !!media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setMedia(undefined),
    isLink: true,
    isDestructive: true
  }, removeLabel))));
}

/***/ }),

/***/ "./src/utils/components/overlay-panel/index.js":
/*!*****************************************************!*\
  !*** ./src/utils/components/overlay-panel/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OverlayPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _color_palette_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color-palette-control */ "./src/utils/components/color-palette-control/index.js");




/**
 * The OverlayPanel component displays a panel of controls for background overlay.
 *
 * @author WebDevStudios
 * @since  2.1.0
 * @param {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */

function OverlayPanel(props) {
  const {
    overlayColor,
    setOverlayColor,
    overlayOpacity,
    setOverlayOpacity
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay settings', 'wdsblocks'),
    className: "block-editor-panel-color-gradient-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_palette_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: overlayColor,
    setColor: setOverlayColor,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wdsblocks')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Opacity', 'wdsblocks'),
    value: overlayOpacity,
    onChange: value => setOverlayOpacity(value),
    min: 0,
    max: 100
  }));
}

/***/ }),

/***/ "./src/utils/components/preview-toggle/index.js":
/*!******************************************************!*\
  !*** ./src/utils/components/preview-toggle/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreviewToggle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



/**
 * The PreviewToggle component displays a toolbar button to toggle between "edit" and "preview" block modes.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {Object} [props] Properties passed to the component.
 * @return {WPElement}      Element to render.
 */

function PreviewToggle(props) {
  const {
    togglePreview,
    showPreview = true
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, showPreview ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "edit",
    label: "Switch to Edit",
    onClick: () => togglePreview()
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "welcome-view-site",
    label: "Switch to Preview",
    onClick: () => togglePreview()
  })));
}

/***/ }),

/***/ "./src/utils/components/with-background-color/index.js":
/*!*************************************************************!*\
  !*** ./src/utils/components/with-background-color/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withBackgroundColor; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



/**
 * A HOC for displaying a component with background color.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {WPElement} WrappedComponent The wrapped component to display.
 * @return {Function}                   A function that accepts a single param, `props`, to display the wrapped component.
 */

function withBackgroundColor(WrappedComponent) {
  /**
   * @author WebDevStudios
   * @since  2.0.0
   * @param {Object} [props] Properties passed to the component.
   * @return {Element}        Element to render.
   */
  return function (props) {
    const {
      backgroundColor,
      customBackgroundColor,
      className,
      style,
      children,
      ...passthruProps
    } = props;
    const classes = [className],
          styles = { ...style
    }; // Add background color classes.

    classes.push(backgroundColor || customBackgroundColor ? 'has-background' : null);
    classes.push(backgroundColor ? (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('background-color', backgroundColor) : null); // Add custom background color style.

    styles.backgroundColor = customBackgroundColor ? customBackgroundColor : undefined;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(WrappedComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes.filter(Boolean).join(' '),
      style: styles
    }, passthruProps), children);
  };
}

/***/ }),

/***/ "./src/utils/components/with-background-image/index.js":
/*!*************************************************************!*\
  !*** ./src/utils/components/with-background-image/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withBackgroundImage; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * A HOC for displaying a component with a background image.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {WPElement} WrappedComponent The wrapped component to display.
 * @return {Function}                   A function that accepts a single param, `props`, to display the wrapped component.
 */
function withBackgroundImage(WrappedComponent) {
  /**
   * @author WebDevStudios
   * @since  2.0.0
   * @param {Object} [props] Properties passed to the component.
   * @return {Element}        Element to render.
   */
  return function (props) {
    const {
      backgroundImage,
      children,
      style,
      ...passthruProps
    } = props;
    const styles = { ...style
    }; // Add background image styles.

    if (backgroundImage && backgroundImage.hasOwnProperty('url')) {
      styles.backgroundImage = `url(${backgroundImage.url})`;
      styles.backgroundSize = 'cover';
      styles.backgroundPosition = 'center';
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(WrappedComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: styles
    }, passthruProps), children);
  };
}

/***/ }),

/***/ "./src/utils/components/with-background-video/index.js":
/*!*************************************************************!*\
  !*** ./src/utils/components/with-background-video/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withBackgroundVideo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * A HOC for displaying a component with a background video.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {WPElement} WrappedComponent The wrapped component to display.
 * @return {Function}                   A function that accepts a single param, `props`, to display the wrapped component.
 */
function withBackgroundVideo(WrappedComponent) {
  /**
   * @author WebDevStudios
   * @since  2.0.0
   * @param {Object} [props] Properties passed to the component.
   * @return {Element}        Element to render.
   */
  return function (props) {
    const {
      backgroundVideo,
      children,
      ...passthruProps
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, passthruProps, backgroundVideo && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
      autoPlay: true,
      muted: true,
      loop: true,
      "aria-hidden": "true",
      className: "wp-block-cover__video-background"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      src: backgroundVideo.url,
      type: backgroundVideo.mime
    })), children);
  };
}

/***/ }),

/***/ "./src/utils/components/with-font-color/index.js":
/*!*******************************************************!*\
  !*** ./src/utils/components/with-font-color/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withFontColor; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



/**
 * A HOC for displaying a component with font color.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @param {WPElement} WrappedComponent The wrapped component to display.
 * @return {Function}                   A function that accepts a single param, `props`, to display the wrapped component.
 */

function withFontColor(WrappedComponent) {
  /**
   * @author WebDevStudios
   * @since  2.0.0
   * @param {Object} [props] Properties passed to the component.
   * @return {Element}        Element to render.
   */
  return function (props) {
    const {
      fontColor,
      customFontColor,
      className,
      style,
      children,
      ...passthruProps
    } = props;
    const classes = [className],
          styles = { ...style
    }; // Add color classes.

    classes.push(fontColor || customFontColor ? 'has-text-color' : null);
    classes.push(fontColor ? (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', fontColor) : null); // Add custom color style.

    styles.color = customFontColor ? customFontColor : undefined;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(WrappedComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes.filter(Boolean).join(' '),
      style: styles
    }, passthruProps), children);
  };
}

/***/ }),

/***/ "./src/utils/components/with-overlay-color/index.js":
/*!**********************************************************!*\
  !*** ./src/utils/components/with-overlay-color/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ withOverlayColor; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _with_background_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../with-background-color */ "./src/utils/components/with-background-color/index.js");



/**
 * A HOC for displaying a component with a background overlay color.
 *
 * @author WebDevStudios
 * @since  2.1.0
 * @param {WPElement} WrappedComponent The wrapped component to display.
 * @return {Function}                   A function that accepts a single param, `props`, to display the wrapped component.
 */

function withOverlayColor(WrappedComponent) {
  /**
   * @author WebDevStudios
   * @since  2.0.0
   * @param {Object} [props] Properties passed to the component.
   * @return {Element}        Element to render.
   */
  return function (props) {
    const {
      overlayColor,
      customOverlayColor,
      overlayOpacity,
      className,
      style,
      children,
      ...passthruProps
    } = props;
    const classes = [className],
          styles = { ...style
    };
    const hasOverlay = overlayColor || customOverlayColor; // Add overlay class.

    classes.push(hasOverlay ? 'has-background-overlay' : null); // Use withBackgroundColor component to handle shared styling/classes.

    const OverlayComponent = (0,_with_background_color__WEBPACK_IMPORTED_MODULE_2__["default"])(WrappedComponent); // eslint-disable-line @wordpress/no-unused-vars-before-return

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(OverlayComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes.filter(Boolean).join(' '),
      style: styles
    }, passthruProps, {
      backgroundColor: overlayColor,
      customBackgroundColor: customOverlayColor
    }), hasOverlay && !!overlayOpacity && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "background-overlay",
      style: {
        opacity: overlayOpacity / 100,
        backgroundColor: 'inherit',
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 1
      }
    }), children);
  };
}

/***/ }),

/***/ "./src/utils/config.js":
/*!*****************************!*\
  !*** ./src/utils/config.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PREFIX": function() { return /* binding */ PREFIX; },
/* harmony export */   "CONTAINER_CLASS": function() { return /* binding */ CONTAINER_CLASS; }
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
 // Global block prefix

const PREFIX = 'wdsblocks'; // Container Class (.container, .row, etc)

const CONTAINER_CLASS = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)(`${PREFIX}.container_class`, `container`);

/***/ }),

/***/ "./src/utils/hooks/use-preview-toggle/index.js":
/*!*****************************************************!*\
  !*** ./src/utils/hooks/use-preview-toggle/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ usePreviewToggle; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The usePreviewToggle hook handles state for toggling between "edit" and "preview" modes.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @return {Object} Object consisting of state variable and state toggle function.
 */

function usePreviewToggle() {
  const [showPreview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  /**
   * Toggle between "edit" and "preview" modes by setting `showPreview` to the boolean inverse of its current value.
   *
   * @author WebDevStudios
   * @since  2.0.0
   */

  const togglePreview = () => {
    setPreview(!showPreview);
  };
  /**
   * Toggle block to "edit" mode on double click.
   *
   * @author WebDevStudios
   * @since  2.0.0
   */


  const doubleClick = () => {
    if (showPreview) {
      togglePreview();
    }
  };

  return {
    showPreview,
    togglePreview,
    doubleClick
  };
}

/***/ }),

/***/ "./src/utils/modules/backgroundVideo.js":
/*!**********************************************!*\
  !*** ./src/utils/modules/backgroundVideo.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const videoClass = 'wp-block-cover__video-background';
/**
 * Handle functionality related to background videos.
 *
 * @author WebDevStudios
 * @since  2.0.0
 */

const wdsBlocksBackgroundVideo = {
  /**
   * Initial Background Video setup.
   *
   * @author WebDevStudios
   * @since  2.0.0
   * @return {?boolean} Return false if no videos found.
   */
  init: () => {
    // Target background video elements.
    const videos = document.querySelectorAll(`video.${videoClass}`); // Exit if no videos found.

    if (!videos.length) {
      return false;
    } // Iterate over videos.


    videos.forEach(video => {
      // Mute videos.
      video.muted = true;
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (wdsBlocksBackgroundVideo);

/***/ }),

/***/ "./src/variations/columns/index.js":
/*!*****************************************!*\
  !*** ./src/variations/columns/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/icons */ "./src/variations/utils/icons.js");


/**
 * Register block variation.
 *
 * @author JC Palmes
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

wp.blocks.registerBlockVariation('core/columns', {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('services', 'wdsblocks'),
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Services', 'wdsblocks'),
  attributes: {
    align: 'wide',
    className: 'services-column'
  },
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_1__["default"].services,
  scope: ['inserter'],
  innerBlocks: [['core/column', {}, [['core/group', {
    className: 'service-group',
    textColor: 'black'
  }, [['core/image', {
    align: 'center',
    className: 'service-image',
    url: 'https://via.placeholder.com/300x200.png/09f/fff',
    height: 200,
    width: 300
  }], ['core/heading', {
    className: 'service-title has-text-align-center',
    level: 3,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Service Name', 'wdsblocks')
  }], ['core/paragraph', {
    align: 'center',
    className: 'service-content',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Service Description', 'wdsblocks')
  }]]]]], ['core/column', {}, [['core/group', {
    backgroundColor: '',
    className: 'service-group',
    textColor: 'black'
  }, [['core/image', {
    align: 'center',
    className: 'service-image',
    url: 'https://via.placeholder.com/300x200.png/09f/fff',
    height: 200,
    width: 300
  }], ['core/heading', {
    className: 'service-title has-text-align-center',
    level: 3,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Service Name', 'wdsblocks')
  }], ['core/paragraph', {
    align: 'center',
    className: 'service-content',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Service Description', 'wdsblocks')
  }]]]]], ['core/column', {}, [['core/group', {
    backgroundColor: '',
    className: 'service-group',
    textColor: 'black'
  }, [['core/image', {
    align: 'center',
    className: 'service-image',
    url: 'https://via.placeholder.com/300x200.png/09f/fff',
    height: 200,
    width: 300
  }], ['core/heading', {
    className: 'service-title has-text-align-center',
    level: 3,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Service Name', 'wdsblocks')
  }], ['core/paragraph', {
    align: 'center',
    className: 'service-content',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Service Description', 'wdsblocks')
  }]]]]]]
});

/***/ }),

/***/ "./src/variations/cover/index.js":
/*!***************************************!*\
  !*** ./src/variations/cover/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/icons */ "./src/variations/utils/icons.js");


/**
 * Register block variation.
 *
 * @author JC Palmes
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

wp.blocks.registerBlockVariation('core/cover', {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('cta-cover', 'wdsblocks'),
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('CTA Cover', 'wdsblocks'),
  attributes: {
    align: 'full',
    backgroundType: 'image',
    className: 'cta-cover',
    contentAlign: 'center',
    url: 'https://via.placeholder.com/1280x720.png/000/fff'
  },
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_1__["default"].cta,
  innerBlocks: [['core/heading', {
    className: 'hero-title has-text-align-center',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add CTA Heading', 'wdsblocks'),
    level: 1
  }], ['core/paragraph', {
    align: 'center',
    className: 'hero-content',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Optional Content', 'wdsblocks')
  }], ['core/buttons', {
    align: 'center',
    className: 'is-content-justification-center'
  }, [['core/button', {
    className: 'hero-button is-style-outline',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Button label', 'wdsblocks'),
    textColor: 'white',
    url: '#',
    width: 75
  }]]]]
});

/***/ }),

/***/ "./src/variations/utils/icons.js":
/*!***************************************!*\
  !*** ./src/variations/utils/icons.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.cta = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  className: "custom-icon custom-icon-cta",
  enableBackground: "new 0 0 512 512",
  height: "512",
  viewBox: "0 0 512 512",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m108.533 155.743c-1.344-3.267-4.493-5.375-8.025-5.375-.003 0-.007 0-.011 0-3.536.004-6.685 2.122-8.022 5.395-.023.056-.045.112-.066.168l-19.517 51.243c-1.475 3.871.468 8.204 4.339 9.678 3.87 1.474 8.204-.469 9.678-4.339l3.021-7.932h21.004l2.985 7.91c1.134 3.003 3.987 4.854 7.019 4.854.879 0 1.775-.156 2.646-.485 3.875-1.462 5.832-5.79 4.369-9.665l-19.339-51.246c-.026-.069-.052-.138-.081-.206zm-12.889 33.837 4.837-12.701 4.793 12.701z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m408.418 216.398c3.509-1.096 5.776-4.357 5.776-8.379l-.486-50.224c-.04-4.142-3.405-7.487-7.572-7.427-4.142.04-7.467 3.43-7.427 7.572l.275 28.401-22.54-32.638c-1.865-2.7-5.269-3.875-8.403-2.898s-5.268 3.878-5.268 7.16v51.878c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-27.82l21.408 31c2.165 3.127 5.791 4.453 9.237 3.375z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m256.439 157.867v51.975c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-51.975c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m167.809 165.367c3.706 0 7.278 1.09 10.331 3.153 3.432 2.318 8.094 1.417 10.413-2.016 2.319-3.432 1.417-8.094-2.016-10.413-5.542-3.744-12.018-5.724-18.729-5.724-18.465 0-33.488 15.022-33.488 33.488 0 18.465 15.022 33.488 33.488 33.488 7.408 0 14.065-2.441 19.25-7.059 1.016-.904 1.98-1.899 2.868-2.958 2.662-3.174 2.247-7.904-.926-10.566-3.174-2.662-7.904-2.247-10.566.927-.422.503-.876.972-1.351 1.395-2.43 2.164-5.55 3.261-9.275 3.261-10.194 0-18.488-8.294-18.488-18.488s8.295-18.488 18.489-18.488z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m223.169 217.343c4.142 0 7.5-3.358 7.5-7.5v-44.475h6.91c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-28.704c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h6.794v44.475c0 4.142 3.358 7.5 7.5 7.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m283.79 183.855c0 18.465 15.022 33.488 33.487 33.488s33.488-15.022 33.488-33.488c0-18.465-15.022-33.488-33.488-33.488-18.465 0-33.487 15.023-33.487 33.488zm51.975 0c0 10.194-8.293 18.488-18.488 18.488-10.194 0-18.487-8.294-18.487-18.488s8.293-18.488 18.487-18.488c10.195 0 18.488 8.294 18.488 18.488z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m508.788 314.3-116.157-80.948c-2.386-1.663-5.519-1.796-8.038-.342s-3.97 4.234-3.723 7.132l12.024 141.069c.237 2.787 2.006 5.211 4.588 6.286s5.548.625 7.695-1.169l27.219-22.756 28.189 56.118c.927 1.845 2.574 3.226 4.551 3.818.705.211 1.429.315 2.15.315 1.304 0 2.6-.34 3.75-1.005l34.71-20.041c1.788-1.032 3.071-2.756 3.548-4.765.476-2.009.103-4.125-1.031-5.851l-34.504-52.472 33.316-12.193c2.627-.961 4.5-3.305 4.86-6.079.362-2.774-.852-5.518-3.147-7.117zm-49.073 14.557c-2.151.787-3.825 2.515-4.543 4.69-.719 2.175-.404 4.56.854 6.474l35.338 53.741-20.943 12.092-28.871-57.474c-1.028-2.047-2.936-3.512-5.179-3.977-.506-.105-1.016-.156-1.523-.156-1.743 0-3.449.608-4.811 1.746l-23.422 19.583-9.442-110.773 91.211 63.564z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m358.938 264.532h-319.374c-13.544 0-24.564-11.019-24.564-24.564v-112.226c0-13.545 11.02-24.564 24.564-24.564h416.839c13.545 0 24.564 11.02 24.564 24.564v112.226c0 6.748-2.74 13.062-7.716 17.778-3.006 2.849-3.133 7.596-.284 10.603 2.85 3.007 7.597 3.134 10.603.284 7.994-7.578 12.397-17.758 12.397-28.665v-112.226c0-21.816-17.749-39.564-39.564-39.564h-416.839c-21.815 0-39.564 17.748-39.564 39.564v112.226c0 21.816 17.749 39.564 39.564 39.564h319.373c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.499-7.5z"
})));
icons.services = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "custom-icon custom-icon-service",
  "data-name": "Service",
  viewBox: "0 0 512 512",
  width: "512",
  height: "512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M59.686,481.055A6.821,6.821,0,0,0,66.634,487h90a6.713,6.713,0,0,0,6.7-8.73l-11.514-37.714L187.691,417.9a20.77,20.77,0,0,1,15.1-1.926c.144.037.29.075.437.1l74.909,13.8a98.358,98.358,0,0,0,60.775-8.579,6.774,6.774,0,0,0,.856-.5l129.557-88.955a7,7,0,0,0,2.035-9.38,36.972,36.972,0,0,0-49.3-13.484l-1.206.651c-9.43-10.647-25.1-14.624-37.122-8.529l-.156.082-4.376,2.357a41,41,0,0,0-46.19-3.63L305.272,315h-37a52.531,52.531,0,0,1-22.743-5.22l-5.137-2.489a89.566,89.566,0,0,0-93.215,9.1c-.154.116-.3.236-.446.363L134.325,327.8a41.637,41.637,0,0,1-14.36,8.339l-6.636-21.973A7.189,7.189,0,0,0,106.634,309h-60a7.21,7.21,0,0,0-5.241,2.567,6.992,6.992,0,0,0-1.707,5.488Zm330.448-167.5c5.679-2.833,12.7-.927,17.744,3.078l-47.324,25.531-1.465.773a43.993,43.993,0,0,0-5.364-9.764Zm-50.354-1.4c.056-.03.112-.061.166-.092a26.983,26.983,0,0,1,25.213-.957l-21.9,11.8a43.891,43.891,0,0,0-12.241-5.986Zm-196.146,26.1,12.186-10.849A75.621,75.621,0,0,1,234.3,319.89l5.138,2.493A66.619,66.619,0,0,0,268.272,329H318.1a30.094,30.094,0,0,1,29.134,22.675l-34.274-1.555a217.243,217.243,0,0,0-39.563,1.825,7,7,0,0,0,1.92,13.866,203.555,203.555,0,0,1,37.01-1.71l42.5,1.923c.1,0,.211.007.316.007a7,7,0,0,0,7-7c0-.624-.021-1.244-.046-1.862l5.039-2.657,61.57-33.216a22.988,22.988,0,0,1,26.481,3.267l-122.926,84.4a84.254,84.254,0,0,1-51.612,7.14l-74.68-13.752a34.727,34.727,0,0,0-25.271,3.44c-.109.062-.218.126-.323.193l-32.8,20.735-23.53-77.179A55.652,55.652,0,0,0,143.634,338.256ZM101.45,323l45.732,150H72.832L54.539,323Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M106.918,470.721a19,19,0,1,0-19-19A19.022,19.022,0,0,0,106.918,470.721Zm0-24a5,5,0,1,1-5,5A5.006,5.006,0,0,1,106.918,446.721Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M145.328,164.843l18.994,1.831a94.052,94.052,0,0,0,9.4,22.341l-12.063,14.566A7,7,0,0,0,162.1,213l22.778,22.778a7,7,0,0,0,9.415.442l14.6-12.095a95.782,95.782,0,0,0,22.3,9.426l1.831,19.061A7.057,7.057,0,0,0,240,259h32.294a7.057,7.057,0,0,0,6.968-6.392l1.831-19.025a94.108,94.108,0,0,0,22.34-9.414L318,236.224a7,7,0,0,0,9.414-.446L350.189,213a7,7,0,0,0,.443-9.416l-12.1-14.606a95.77,95.77,0,0,0,9.428-22.307l18.716-1.827a7,7,0,0,0,6.32-6.967V125.582a7,7,0,0,0-6.328-6.968l-18.994-1.83a94.052,94.052,0,0,0-9.4-22.341l12.063-14.567a7,7,0,0,0-.41-9.382L327.442,47.715A7,7,0,0,0,318,47.242l-14.6,12.1a95.782,95.782,0,0,0-22.3-9.426l-1.831-18.79A6.824,6.824,0,0,0,272.291,25H240a6.824,6.824,0,0,0-6.968,6.121L231.2,50.01a93.917,93.917,0,0,0-22.34,9.347L194.292,47.268a7,7,0,0,0-9.415.429L162.1,70.468a7,7,0,0,0-.442,9.411l12.1,14.6a95.775,95.775,0,0,0-9.426,22.3l-19,1.831A7,7,0,0,0,139,125.582v32.293A7,7,0,0,0,145.328,164.843ZM153,131.94l17.6-1.7a7,7,0,0,0,6.169-5.488A81.95,81.95,0,0,1,188.212,97.66a7,7,0,0,0-.49-8.259L176.505,75.855l13.766-13.766,13.544,11.217a7,7,0,0,0,8.348.434A79.385,79.385,0,0,1,239.17,62.358a6.767,6.767,0,0,0,5.488-5.962l1.7-17.4h19.58l1.7,17.4a6.882,6.882,0,0,0,5.488,6.066,81.812,81.812,0,0,1,27.1,11.387,7,7,0,0,0,8.26-.517l13.513-11.2,13.535,13.7L324.278,89.4a7,7,0,0,0-.432,8.346,79.4,79.4,0,0,1,11.381,27.006,7,7,0,0,0,6.169,5.488l17.6,1.7v19.585l-17.323,1.691a7,7,0,0,0-6.162,5.487,81.929,81.929,0,0,1-11.439,27.1,7,7,0,0,0,.49,8.26L335.784,207.6l-13.766,13.766-13.545-11.217a7,7,0,0,0-8.348-.434A79.385,79.385,0,0,1,273.118,221.1a7.073,7.073,0,0,0-5.488,6.233L265.934,245h-19.58l-1.7-17.667a7.038,7.038,0,0,0-5.488-6.2,81.99,81.99,0,0,1-27.095-11.454,7,7,0,0,0-8.26.483l-13.544,11.213L176.505,207.6l11.217-13.545a7,7,0,0,0,.432-8.349A79.405,79.405,0,0,1,176.773,158.7a7,7,0,0,0-6.169-5.488l-17.6-1.7Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M256.145,211.6a69.875,69.875,0,1,0-69.875-69.874A69.953,69.953,0,0,0,256.145,211.6Zm0-125.749a55.875,55.875,0,1,1-55.875,55.875A55.939,55.939,0,0,1,256.145,85.854Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M243.656,163.094a7,7,0,0,0,9.78,0l33.506-32.713a7,7,0,1,0-9.779-10.018L248.546,148.3l-13.709-13.384a7,7,0,1,0-9.779,10.018Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/accordion-item/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/accordion-item/editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/accordion-item/frontend/style.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/accordion-item/frontend/style.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/accordions/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/accordions/editor.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/accordions/frontend/style.scss":
/*!***************************************************!*\
  !*** ./src/blocks/accordions/frontend/style.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/carousel-slide/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/carousel-slide/editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/carousel-slide/frontend/style.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/carousel-slide/frontend/style.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/carousel/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/carousel/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/carousel/frontend/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/carousel/frontend/style.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/starter/editor.scss":
/*!****************************************!*\
  !*** ./src/blocks/starter/editor.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/starter/frontend/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/starter/frontend/style.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwds_blocks"] = self["webpackChunkwds_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map