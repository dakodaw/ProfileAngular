import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wgu-mobile',
  templateUrl: './wgu-mobile.component.html',
  styleUrls: ['./wgu-mobile.component.css']
})
export class WguMobileComponent implements OnInit {
  public summaryTitle: string = "WGU Mobile App";
  public summaryPart1: string = "Technologies Used: C#, XAML and SQLLite";
  public summaryPart2: string = "This is a Cross Platform Mobile App built to host add," 
  + " update and delete courses, and semesters from a school schedule system.";
  public linkToCode : string = "https://github.com/dakodaw/Appointment-Scheduler";
  constructor() { }

  ngOnInit() {
  }

}
