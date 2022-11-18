import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubIntegrationService } from 'src/app/services/github-integration/github-integration.service';
import { RepositoryInfo } from 'src/app/services/github-integration/models/repository-info';

@Component({
  selector: 'app-github-integration',
  templateUrl: './github-integration.component.html',
  styleUrls: ['./github-integration.component.scss']
})
export class GithubIntegrationComponent implements OnInit {

  public routedRepo$: Observable<RepositoryInfo> =
    combineLatest([this.gitHubIntegration.parsedRepoInfos$, this.route.params])
    .pipe(
      map(([repoInfos, params]) => {
        const route = params.repoName;
        return repoInfos.find(x => x.Name === route);
      })
    );

  constructor(
    private readonly gitHubIntegration: GithubIntegrationService,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.routedRepo$.subscribe(console.log)
  }

}
