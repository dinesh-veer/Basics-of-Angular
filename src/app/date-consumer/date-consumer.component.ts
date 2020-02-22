import { Component, OnInit } from '@angular/core';
import { DateService } from '../service/date.service';

@Component({
  selector: 'app-date-consumer',
  templateUrl: './date-consumer.component.html',
  styleUrls: ['./date-consumer.component.css']
})
export class DateConsumerComponent implements OnInit {
  date: Date;
  service:string;
  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.date=this.dateService.showDate();
    this.service=this.dateService.showService;
  }

}
