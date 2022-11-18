
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GitHubProfile } from './models/github-profile';
import { GitHubRepository } from './models/github-repository';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RepositoryInfo } from './models/repository-info';

@Injectable({
    providedIn: 'root'
})
export class GithubIntegrationService {
  private name: string = "dakodaw"
  private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/vnd.github.v3+json'
      })
    };

  public profile$ = this.http.get<GitHubProfile>(`https://api.github.com/users/${this.name}`, this.httpOptions);
  public repos$ = this.http.get<GitHubRepository[]>(`https://api.github.com/users/${this.name}/repos`, this.httpOptions);
  public repoNames$ = this.repos$.pipe(map(x => x.map(repo => repo.name)));

  // Probably do some shared replay above to not make a bunch of repos calls.
  public parsedRepoInfos$: Observable<RepositoryInfo[]> = this.repos$.pipe (
    map(gitHubRepos => {
      return gitHubRepos.map(githubRepo => this.mapGithubRepositoryToInternal(githubRepo))
    }),
  )

  constructor(
    private readonly http: HttpClient
  ) {
    this.repos$.subscribe(console.log)
    this.repoNames$.subscribe(console.log)
  }

  public getRepoTechnologies(repo: RepositoryInfo) {
    return this.http.get(repo.TechnologiesUrl, this.httpOptions);
  }

  private mapGithubRepositoryToInternal(gitHubRepo: GitHubRepository): RepositoryInfo {
    const repo: RepositoryInfo = {
      Description: gitHubRepo.description,
      Name: gitHubRepo.name,
      LinkToCode: gitHubRepo.html_url,
      Language: gitHubRepo.language,
      TechnologiesUrl: gitHubRepo.languages_url
    }

    if (gitHubRepo.homepage) {
      repo.LinkToSite = gitHubRepo.homepage;
    }

    return repo;
  }
}
