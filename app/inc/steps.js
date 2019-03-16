import { today } from "user-activity";
import document from "document";

export default class Steps {
  
  constructor() {
    const txtSteps = document.getElementById('txt_steps');

    txtSteps.text = (today.local.steps || 0);
  }
  
 }
