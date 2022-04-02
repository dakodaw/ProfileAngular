import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.scss']
})
export class AppointmentSchedulerComponent implements OnInit {
  public summaryTitle: string = "Appointment Scheduler";
  public summaryPart1: string = "Technologies Used: C# and MySQL";
  public summaryPart2: string = "This is a Windows Form App designed to schedule appointments"
  + " with counselors who live in different time zones" ;
  public linkToCode : string = "https://github.com/dakodaw/WGUMobileProject";
  constructor() { }

  ngOnInit() {
  }

}
