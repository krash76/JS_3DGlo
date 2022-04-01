const timer = require("./modules/timer.js");
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import forms from "./modules/forms.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import calc from "./modules/calc.js";
import sendForm from "./modules/sendForm.js";

timer("19 March 2022");
menu();
modal();
forms();
tabs();
slider();
calc(100);
sendForm({
  formId:"form1", 
  someElem: [
    {
      type: "block",
      id:"total"
    }
  ]
});
sendForm({
  formId:"form2", 
  someElem: [
    {
      type: "block",
      id:"total"
    }
  ]
});
sendForm({
  formId:"form3", 
  someElem: [
    {
      type: "block",
      id:"total"
    }
  ]
});