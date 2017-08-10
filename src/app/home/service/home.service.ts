import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http) {}

  // Get all posts from the API
  getAllDeps(): Observable<any> {
    return this.http.get('assets/data/department.json').map(res => res.json());
  }

}
