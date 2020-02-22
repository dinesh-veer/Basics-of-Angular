import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  showService="Service created";
  constructor() { }
  showDate(){
    return new Date();
  }
}
