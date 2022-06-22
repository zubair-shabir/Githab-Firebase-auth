import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private htttp: HttpClient) { }

  getUserDetails(userName: string) {
    return this.htttp.get(`https://api.github.com/users/${userName}`);
  }

  getRepos(repoUrl: string) {
    return this.htttp.get(repoUrl)
  }
}
