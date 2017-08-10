import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { HomeService } from './../service/home.service';
import { ToastComponent } from './../../shared/toast/toast.component';

import { Department } from './../model/department.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  deps: Department[];
  isLoading = true;

  dep = {};
  isEditing = false;

  addCatForm: FormGroup;

  constructor(private http: Http,
              private homeService: HomeService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllDeps();

    this.addCatForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getAllDeps(){
    this.homeService.getAllDeps().subscribe(
      data => this.deps = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
}
