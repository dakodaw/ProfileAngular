import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public summaryTitle: string = "About Me";
  public summaryPart1: string = "I love to learn and grow, and work hard to contribute my best at any task I'm working on. I\'ve worked on projects in C#, JavaScript, JQuery, HTML, CSS, Angular, and Powershell.";
  public summaryPart2: string = "There are projects that I've done at work, school, and on the side at home. I will provide links to some hosted web projects that I\'ve worked on, links to the code on GitHub, and provide a summary and instructions on how to use them.";
  constructor() { }

  ngOnInit() {
  }

}
