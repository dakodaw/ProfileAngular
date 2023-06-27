import { Component, OnInit, HostListener } from '@angular/core';
import { GithubIntegrationService } from 'src/app/services/github-integration/github-integration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  public summaryTitle: string = "About Me";
  public summaryPart1: string = "I love to learn and grow, and work hard to contribute my best at any task I'm working on. I\'ve worked on Windows Forms, Web Apps and scripts, using C#, JavaScript, JQuery, HTML, CSS, Angular, React and Powershell.";
  public summaryPart2: string = "There are projects that I've done at work, school, and on the side at home. I will provide links to some hosted web projects that I\'ve worked on, links to the code on GitHub, and provide a summary and instructions on how to use them.";
  public linkToCode: string = "https://github.com/dakodaw/PortfolioAngular";
  public profile$ = this.github.profile$;

  private screenHeight : number;
  private screenWidth : number;
  constructor(private readonly github: GithubIntegrationService) {
    this.onResize();
    this.profile$.subscribe(profile => console.log(profile));
   }

  ngOnInit() {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}
