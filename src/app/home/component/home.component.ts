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

  deps = [];
  isLoading = true;

  dep = {};
  isEditing = false;

  name = new FormControl('', Validators.required);
  classType = new FormControl('', Validators.required);
  workType = new FormControl('', Validators.required);
  toWork = new FormControl('', Validators.required);
  offWork = new FormControl('', Validators.required);
  attendance = new FormControl('', Validators.required);
  remark = new FormControl('', Validators.required);

  addDepartmentForm: FormGroup;

  constructor(private http: Http,
              private homeService: HomeService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllDeps();

    this.addDepartmentForm = this.formBuilder.group({
      name: this.name,
      classType: this.classType,
      workType: this.workType,
      toWork: this.toWork,
      offWork: this.offWork,
      attendance: this.attendance,
      remark: this.remark
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
