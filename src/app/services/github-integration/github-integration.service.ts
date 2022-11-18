
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GitHubProfile } from './models/github-profile';
import { GitHubRepository } from './models/github-repository';

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

  constructor(
    private readonly http: HttpClient
  ) {
    this.repos$.subscribe(console.log)
  }

}
