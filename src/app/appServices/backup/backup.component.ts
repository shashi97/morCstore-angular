import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackupModel } from './backup.model';
import { DataSharedService } from '../../data.service';
import { AppServiceModel } from '../app-service.model';
import { NodeService } from './../../shared/node.service';
@Component({
  selector: 'app-service-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class AppServiceBackupComponent implements OnInit {
  employeeDetails: BackupModel = new BackupModel();
  entity: AppServiceModel;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataservice: DataSharedService,
    private nodeService: NodeService
  ) {
    nodeService.entities$.subscribe(n => this.entity = n as AppServiceModel);
  }

  ngOnInit() {
    console.log('backup child');
    console.log(this.entity);
    this.route.parent.params.subscribe((c) => {
      console.log(c['user']);
    });
  }

  saveEmployeeDetails(): void {
    this.dataservice.notifyOther(this.employeeDetails);
    // this.router.navigate(['/parent/child_1/child_2']);

  }

  goBack() {
    this.router.navigate(['/appservices']);

  }
}
