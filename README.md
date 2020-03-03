# Webcomponent Library by DCTS

- Demo of all WebComponents hosted here: https://webcomponent-library.firebaseapp.com/

### Switch
```js
mySwitch = document.querySelector("dcts-switch");
mySwitch.on();     // turns switch on
mySwitch.off();    // turns switch off
mySwitch.toggle(); // toggles switch
// Display Data
console.log(mySwitch.status);  // => "on" or "off"
```

### Activity Calendar
**WORK IN PROGRESS**
```js
myCal = document.querySelector("dcts-activity-calendar");
myCal.randomize(); // randomly assign values for each day
```

### Goal Tracker
```js
const myTracker = document.getElementById("myGoalTrackerWater");
myTracker.title = "WATER";
myTracker.unit = "liter";
myTracker.color = "#10316b";
myTracker.max = 3;
myTracker.step = 0.25;
myTracker.current = 0;

myTracker.increase(); // increase the progress bar by 1 step
myTracker.decrease(); // decrease the progress bar by 1 step
```

# Hosting
webcomponents library is hosted via firebase. Url: https://webcomponent-library.firebaseapp.com/

### push to production
```bash
firebase login # login to redingstreet@gmail.com google account and select project
firebase deploy --only hosting # push to production
```
