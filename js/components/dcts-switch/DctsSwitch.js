class DctsSwitch extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this._status = "off";
  }

  get status() {
    return this._status;
  }

  // switch handling
  on() {
    this.shadow.querySelector(".trigger-grey").classList.add("activated");
    this.shadow.querySelector(".trigger-grey").classList.add("invisible");
    this.shadow.querySelector(".trigger-green").classList.add("activated");
    this.shadow.querySelector(".trigger-green").classList.remove("invisible");
    this.shadow.querySelector(".trigger-checkmark").classList.add("activated");
    this.shadow.querySelector(".trigger-checkmark").classList.remove("invisible");
    this.shadow.querySelector(".switch").dataset.status = "on";
    this._status = "on"
  };
  off() {
    this.shadow.querySelector(".trigger-grey").classList.remove("activated");
    this.shadow.querySelector(".trigger-grey").classList.remove("invisible");
    this.shadow.querySelector(".trigger-green").classList.remove("activated");
    this.shadow.querySelector(".trigger-green").classList.add("invisible");
    this.shadow.querySelector(".trigger-checkmark").classList.remove("activated");
    this.shadow.querySelector(".trigger-checkmark").classList.add("invisible");
    this.shadow.querySelector(".switch").dataset.status = "off";
    this._status = "off"
  };
  toggle() {
    if (this.status === "on") {
      this.off();
    } else if (this.status === "off") {
      this.on();
    }
  }

  connectedCallback() {
    var template = `
      <style>
        .switch {
          width: 40px;
          height: 21px;
          border-radius: 5px;
          box-shadow: 0 0 4px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
        }
        .trigger {
          width: 17px;
          height: 17px;
          border-radius: 3px;
          margin-left: 2px;
          margin-right: 2px;
          transition: all 0.2s ease;
          position: absolute;
          left: 0;
        }
        .trigger-grey {
          background-color: #E5E5E5;
        }
        .trigger-green {
          background-color: #77C44C;
        }
        .invisible {
          opacity: 0;
        }
        .activated {
          left: 19px;
        }
      </style>
      <div class="switch" data-status="off">
        <div class="trigger trigger-grey"></div>
        <div class="trigger trigger-green invisible"></div>
        <img class="trigger trigger-checkmark invisible" src="js/components/dcts-switch/checkmark-white.svg">
      </div>
    `;
    this.shadow.innerHTML = template;

    this.shadow.querySelector(".switch").addEventListener("click", (el) => {
      this.toggle();
    });
  }
}

window.customElements.define('dcts-switch', DctsSwitch);
