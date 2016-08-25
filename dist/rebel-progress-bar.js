"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Leon Revill (@RevillWeb) on 25/08/2016.
 */
var RebelProgressBar = function (_HTMLElement) {
    _inherits(RebelProgressBar, _HTMLElement);

    function RebelProgressBar() {
        _classCallCheck(this, RebelProgressBar);

        var _this = _possibleConstructorReturn(this, (RebelProgressBar.__proto__ || Object.getPrototypeOf(RebelProgressBar)).call(this));

        _this.innerHTML = "\n            <style>\n                .lb-container {\n                    height: 60px;\n                    background-color: #f5f5f5;\n                    border-radius: 5px;\n                    box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\n                    overflow: hidden;\n                }\n                .lb-percent {\n                    position: absolute;\n                    z-index: 100;\n                    width: 100%;\n                    line-height: 60px;\n                    text-align: center;\n                    font-size: 22px;\n                    color: #333;                    \n                }\n                .lb-fill {\n                    position: relative;\n                    z-index: 99;\n                    height: 60px;\n                    float: left;\n                    transition: width 0.5s ease;\n                    width: 0;\n                    background-color: #5cb85c;\n                }\n            </style>\n            <div class=\"lb-container\">\n                <div class=\"lb-fill\"></div>\n                <div class=\"lb-percent\"><span id=\"lb-number\">0</span>%</div>\n            </div>\n        ";
        return _this;
    }

    /**
     * Method which updates the components DOM accordingly
     */


    _createClass(RebelProgressBar, [{
        key: "render",
        value: function render() {
            var percent = this.getAttribute("percent");
            if (percent !== null) {
                this.querySelector("#lb-number").innerText = percent;
                this.querySelector(".lb-fill").style.width = percent + "%";
            }
        }

        /**
         * Method to initiate the initial render when this DOM element is added to the DOM
         */

    }, {
        key: "connectedCallback",
        value: function connectedCallback() {
            this.render();
        }

        /**
         * Method which specifies which element attributes to observe
         * @returns {string[]}
         */

    }, {
        key: "attributeChangedCallback",


        /**
         * Watch for attribute value changes on the observed attributes
         * @param name
         * @param oldValue
         * @param newValue
         */
        value: function attributeChangedCallback(name, oldValue, newValue) {
            this.render();
        }
    }], [{
        key: "observedAttributes",
        get: function get() {
            return ["percent"];
        }
    }]);

    return RebelProgressBar;
}(HTMLElement);

customElements.define("rebel-progress-bar", RebelProgressBar);
