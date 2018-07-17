var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var barr = [{ name: "Q", title: ["Heater 1", "Chord 1"], s1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", s2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" }, { name: "W", title: ["Heater 2", "Chord 2"], s1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", s2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" }, { name: "E", title: ["Heater 3", "Chord 3"], s1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", s2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" }, { name: "A", title: ["Heater 4", "Shaker"], s1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", s2: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" }, { name: "S", title: ["Clap", "Open HH"], s1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", s2: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" }, { name: "D", title: ["Open HH", "Closed HH"], s1: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", s2: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" }, { name: "Z", title: ["Kick n' Hat", "Pucnchy Kick"], s1: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", s2: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" }, { name: "X", title: ["Kick", "Side Stick"], s1: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", s2: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" }, { name: "C", title: ["Closed HH", "Snare"], s1: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", s2: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }];

var Display = function (_React$Component) {
  _inherits(Display, _React$Component);

  function Display(props) {
    _classCallCheck(this, Display);

    var _this = _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));

    _this.state = { display: "..." };
    return _this;
  }

  _createClass(Display, [{
    key: "setDisplay",
    value: function setDisplay(val) {
      this.setState({ display: this.props.switch ? barr[val].title[0] : barr[val].title[1] });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "display" },
        React.createElement(
          "h1",
          null,
          "Play Drum!"
        ),
        React.createElement(
          "p",
          null,
          this.state.display
        )
      );
    }
  }]);

  return Display;
}(React.Component);

var Pads = function (_React$Component2) {
  _inherits(Pads, _React$Component2);

  function Pads(props) {
    _classCallCheck(this, Pads);

    var _this2 = _possibleConstructorReturn(this, (Pads.__proto__ || Object.getPrototypeOf(Pads)).call(this, props));

    _this2.state = { switch: true };
    _this2.displayRef = React.createRef();
    _this2.handleClick = _this2.handleClick.bind(_this2);
    return _this2;
  }

  _createClass(Pads, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      // console.log(e.target.id);
      // passing value with Refs!!!
      this.displayRef.current.setDisplay(e.target.id);
      e.target.children[0].play();
    }
  }, {
    key: "toggleSwitch",
    value: function toggleSwitch() {
      this.setState({ switch: this.state.switch ? false : true });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var pads = barr.map(function (item, i) {
        return React.createElement(
          "a",
          { className: "drum-pad", onClick: _this3.handleClick, accessKey: item.name.toLowerCase(), key: i, id: i, href: "#" },
          item.name,
          React.createElement("audio", { className: "clip", id: item.name, type: "audio/mp3", src: _this3.state.switch ? item.s1 : item.s2 })
        );
      });
      return React.createElement(
        "div",
        null,
        React.createElement(Display, { ref: this.displayRef, "switch": this.state.switch }),
        React.createElement(
          "div",
          { id: "pads" },
          pads
        ),
        React.createElement(Bank, { "switch": this.state.switch, onClickHandler: this.toggleSwitch.bind(this) })
      );
    }
  }]);

  return Pads;
}(React.Component);

;

var Bank = function (_React$Component3) {
  _inherits(Bank, _React$Component3);

  function Bank(props) {
    _classCallCheck(this, Bank);

    return _possibleConstructorReturn(this, (Bank.__proto__ || Object.getPrototypeOf(Bank)).call(this, props));
  }

  _createClass(Bank, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.props.onClickHandler();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "bank" },
        React.createElement(
          "h3",
          null,
          "Bank"
        ),
        React.createElement("input", { type: "checkbox", className: "check", onClick: this.handleClick.bind(this), id: "checkid_ajob" }),
        React.createElement("label", { className: "label", htmlFor: "checkid_ajob" })
      );
    }
  }]);

  return Bank;
}(React.Component);

ReactDOM.render(React.createElement(
  "div",
  { id: "drum-machine" },
  React.createElement(Pads, null)
), document.getElementById("app"));