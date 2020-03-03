class DctsActivityCalendar extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this._startDate = "2020-01-01"; // date starting
    this._activity = [0,0,10,12,42,5,2,1,5,2,526,2,3,13];
    this._color = "slateblue";
  }

  get startDate() {return this._startDate }
  get activity() { return this._activity }
  get color() { return this._activity }

  set color(newCol) {
    this._color = newCol;
    this.shadow.querySelectorAll(".calendar-grid-item-box").forEach(box => {
      box.setAttribute("style", `opacity: ${Math.random()}; background-color: ${this._color}`);
    });
  }



  initialize() {
    let max = -100000000;
    [0,0,10,12,42,5,2,1,5,2,526,2,3,13].forEach(num => {
      if (num > max) max = num;
    });
    this._activityMax = max;
  }

  randomize() {
    this.shadow.querySelectorAll(".calendar-grid-item-box").forEach(box => {
      box.setAttribute("style", `opacity: ${Math.random()}; background-color: ${this._color}`);
    });
  }

  connectedCallback() {
    var template = `
      <style>
        .calendar-grid-container {
          display: grid;
          grid-template-rows: 16px 16px 16px 16px 16px 16px 16px;
          grid-auto-rows: 16px;
          grid-auto-columns: 16px;
          grid-auto-flow: column;
        }
        .calendar-grid-item {
          border: 1px solid rgba(0,0,0,0.2);
          max-width: 16px;
          max-height: 16px;
        }
        .calendar-grid-item-box {
          width: 14px;
          height: 14px;
          background-color: red;
        }
      </style>

      <div class="calendar-grid-container">
        <div class="calendar-grid-item">
          <div class="calendar-grid-item-box">
          </div>
        </div>
        <div class="calendar-grid-item">
          <div class="calendar-grid-item-box">
          </div>
        </div>
        <div class="calendar-grid-item">
          <div class="calendar-grid-item-box">
          </div>
        </div>
        <div class="calendar-grid-item">
          <div class="calendar-grid-item-box">
          </div>
        </div>
        <div class="calendar-grid-item">
          <div class="calendar-grid-item-box">
          </div>
        </div>
        <div class="calendar-grid-item">
          <div class="calendar-grid-item-box">
          </div>
        </div>
        <div class="calendar-grid-item">
          <div class="calendar-grid-item-box">
          </div>
        </div>
        <div class="calendar-grid-item">
          <div class="calendar-grid-item-box">
          </div>
        </div>
        <div class="calendar-grid-item">
          <div class="calendar-grid-item-box">
          </div>
        </div>
        <div class="calendar-grid-item">
          <div class="calendar-grid-item-box">
          </div>
        </div>
      </div>
    `;
    this.shadow.innerHTML = template;


    // initialize component
    this.randomize();
  }
}

window.customElements.define('dcts-activity-calendar', DctsActivityCalendar);
