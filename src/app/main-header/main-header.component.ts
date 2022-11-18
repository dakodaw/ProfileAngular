import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubIntegrationService } from '../services/github-integration/github-integration.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  public showNavOptions: boolean = false;
  public showBudgetSubOptions: boolean = false;
  public showMoreSubOptions: boolean = false;
  public moreOptions$: Observable<string[]> = this.gitHubIntegration.repoNames$;

  constructor(private readonly gitHubIntegration: GithubIntegrationService) { }

  public ngOnInit() {
  }

  public openNav(){
    this.showNavOptions = true;
  }

  public closeNav(){
    this.showNavOptions = false;
    this.showBudgetSubOptions = false;
    this.showMoreSubOptions = false;
  }

  public showHideBudgetOptions() {
    this.showBudgetSubOptions = !this.showBudgetSubOptions;
  }

  public showHideMoreOptions() {
    this.showMoreSubOptions = !this.showMoreSubOptions;
  }

}
