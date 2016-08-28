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

    render() {
        const percent = this.getAttribute("percent");
        if (percent !== null) {
            this.querySelector("#lb-number").innerText = percent;
            this.querySelector(".lb-fill").style.width = percent + "%";
        }
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() { return ["percent"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "percent":
                this.render();
                break;
        }
    }

}

customElements.define("rebel-progress-bar", RebelProgressBar);









