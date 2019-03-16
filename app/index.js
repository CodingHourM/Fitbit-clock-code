import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import { goals } from "user-activity";
import { today } from "user-activity";
import { HeartRateSensor } from "heart-rate";
import * as util from "../common/utils";
import { HeartRateSensor } from "heart-rate";

let hrLabel = document.getElementById("txt_hr");
 
hrLabel.text = "--";

var hrm = new HeartRateSensor();

hrm.onreading = function() {
  // Peek the current sensor values
  console.log("Current heart rate: " + hrm.heartRate);
  hrLabel.text = hrm.heartRate;
}

hrm.start();

//imports the info from the inc directory
import Steps from './inc/steps';
let steps = new Steps();
import Calories from './inc/calories';
let calories = new Calories();

//Calculates the angle of Steps/Goal and the Calories/Goal
let arc1 = document.getElementById("arc_fgs");
let arc2 = document.getElementById("arc_fgc");
let anglePercentageSteps = (today.local.steps || 0) / (goals.steps || 0);
let angleSteps = 360 * anglePercentageSteps;
let anglePercentageCalories = (today.local.calories || 0) / (goals.calories || 0);
let angleCalories = 360 * anglePercentageCalories;

//Sets the arc sweep angle
arc1.sweepAngle = angleSteps;
arc2.sweepAngle = angleCalories;

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const myMonth = document.getElementById("myMonth");
const myDay = document.getElementById("myDay");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let monthnum = today.getMonth();
  let day = today.getDate();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";  
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
let monthname = month[monthnum];
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
  myMonth.text = `${monthname}`;
  myDay.text = `${day}`; 
}
