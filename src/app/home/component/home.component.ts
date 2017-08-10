import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { HomeService } from './../service/home.service';
import { ToastComponent } from './../../shared/toast/toast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading = true;

  constructor(private http: Http,
              private homeService: HomeService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
