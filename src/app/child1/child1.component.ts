import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChildModel } from './child.model';
import { DataSharedService } from '../data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  employeeDetails: ChildModel = new ChildModel();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataservice: DataSharedService
  ) { }

  ngOnInit() {
  }

  saveEmployeeDetails(): void {
    this.dataservice.notifyOther(this.employeeDetails);
    // this.router.navigate(['/parent/child_1/child_2']);

  }

  goBack() {
    this.router.navigate(['/parent']);

  }
}
