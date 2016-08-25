/**
 * Created by Leon Revill (@RevillWeb) on 25/08/2016.
 */
class RebelProgressBar extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `
            <style>
                .lb-container {
                    height: 60px;
                    background-color: #f5f5f5;
                    border-radius: 5px;
                    box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
                    overflow: hidden;
                }
                .lb-percent {
                    position: absolute;
                    z-index: 100;
                    width: 100%;
                    line-height: 60px;
                    text-align: center;
                    font-size: 22px;
                    color: #333;                    
                }
                .lb-fill {
                    position: relative;
                    z-index: 99;
                    height: 60px;
                    float: left;
                    transition: width 0.5s ease;
                    width: 0;
                    background-color: #5cb85c;
                }
            </style>
            <div class="lb-container">
                <div class="lb-fill"></div>
                <div class="lb-percent"><span id="lb-number">0</span>%</div>
            </div>
        `;
    }

    /**
     * Method which updates the components DOM accordingly
     */
    render() {
        const percent = this.getAttribute("percent");
        if (percent !== null) {
            this.querySelector("#lb-number").innerText = percent;
            this.querySelector(".lb-fill").style.width = percent + "%";
        }
    }

    /**
     * Method to initiate the initial render when this DOM element is added to the DOM
     */
    connectedCallback() {
        this.render();
    }

    /**
     * Method which specifies which element attributes to observe
     * @returns {string[]}
     */
    static get observedAttributes() { return ["percent"]; }

    /**
     * Watch for attribute value changes on the observed attributes
     * @param name
     * @param oldValue
     * @param newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

customElements.define("rebel-progress-bar", RebelProgressBar);