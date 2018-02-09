import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
logs:{
  id:string,
  text:string,
  date:any
}[];
  constructor() { }

  ngOnInit() {
  this.logs = [{id:'1',text: 'Generated Component', date: new Date('12/26/2017 12:54:23')},
  {id:'2',text: 'Second Component', date: new Date('12/27/2017 14:54:23')},
  {id:'1',text: 'third Component', date: new Date('12/28/2017 15:54:23')}
]
  }

}
