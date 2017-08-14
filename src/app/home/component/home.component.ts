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

  department: Department = new Department();

  deps = [];
  isLoading = true;

  dep = {};
  isEditing = false;

  departments = [
    {name: '早班', id: '1'},
    {name: '晚班', id: '2'}
  ];

  addDepartmentForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    workType: new FormControl('', Validators.required),
    toWork: new FormControl('', Validators.required),
    offWork: new FormControl('', Validators.required),
    attendance: new FormControl('', Validators.required),
    remark: new FormControl('', Validators.required)
  });

  constructor(private http: Http,
              private homeService: HomeService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllDeps();

    this.addDepartmentForm = this.formBuilder.group({
      name: this.department.name,
      workType: this.department.workType,
      toWork: this.department.toWork,
      offWork: this.department.offWork,
      attendance: this.department.attendance,
      remark: this.department.remark
    });
  }

  getAllDeps(){
    this.homeService.getAllDeps().subscribe(
      data => this.deps = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addDep(){
    this.homeService.addDep(this.addDepartmentForm.value).subscribe(
      res => {
        const newDep = res.json();
        this.deps.push(newDep);
        this.addDepartmentForm.reset();
        this.toast.setMessage('Cat Added Successfully.', 'success');
      },
      error => console.log(error)
    );
  }
}
