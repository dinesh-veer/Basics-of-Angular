import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'powser-booster',
  templateUrl: './powser-booster.component.html',
  styleUrls: ['./powser-booster.component.css']
})
export class PowserBoosterComponent implements OnInit {

  power =5;
  factor =1;
  array =[1,2,3,4,5]
  lastNumber:number=0;
  
  counter$;
  count=0;
  id:any;
  id1:any;

  constructor(private activatedRoute :ActivatedRoute) {   
  //read paramter
  this.id = this.activatedRoute.snapshot.params.id;
  this.id1= this.activatedRoute.snapshot.paramMap.get('id');
  }
  ngOnInit() {

      this.counter$= new Observable(obeserver=>{
      let value=0;
      setInterval(()=>{
        obeserver.next(value++);
      },1000)
    })

    this.count = this.counter$.subscribe(
          data=>{
            return this.count= data;
          }
    )

     }

  addValue(addedValue){
    this.lastNumber=Number(addedValue);
    this.array.push(Number(addedValue));
  }
   interval :Observable<number>  = new Observable(observer => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);
    }, 1000);
  });
  
//this.interval.subscribe(value => console.log(value));
  
  
}
