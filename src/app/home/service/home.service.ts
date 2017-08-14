import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}

  // Get all posts from the API
  getAllDeps(): Observable<any> {
    return this.http.get('assets/data/department.json').map(res => res.json());
  }


  addDep(dep): Observable<any> {
    return this.http.post('assets/data/department.json', JSON.stringify(dep), this.options);
  }

}
