import { today } from "user-activity";
import document from "document";

export default class Calories {
  
  constructor() {
    const txtCalories = document.getElementById('txt_calories');

    txtCalories.text = (today.local.calories || 0);
  }
  
 }
