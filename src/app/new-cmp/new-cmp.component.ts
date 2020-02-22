import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  title:String="Dinesh";
  newcomponent = "Entered in new component created";

  names:any[]=['Dinesh','veer','swapnil','eeee'];
  available=false;
  switchValue="switch"
  person:String;
  angular7Logo="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";
  constructor() { }

  //pipes
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
  toggle:boolean = true;

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat(){
      this.toggle=!this.toggle;
    }

  ngOnInit() {
  }
  onChange(event){
    console.log("selected value = " +event.target.value );
    this.person=event.target.value;
  }
  withChangeModel(selected){
    console.log("With model change Selcted value "+ selected.value)
  }
  onClick(){
    console.log("Button is clicked...")
    this.available= !this.available;
  }
  onDivClick(){
    console.log("DIv is clicked...");
  }

}
