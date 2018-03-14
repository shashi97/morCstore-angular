import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuModule, MenuItem } from 'primeng/primeng';
import { NodeService } from './../../shared/node.service';
import { AppServiceModel } from '../app-service.model';

@Component({
  selector: 'app-service-edit',
  templateUrl: './app-service-edit.component.html',
  styleUrls: ['./app-service-edit.component.css'],
})
export class AppServiceEditComponent implements OnInit {

  entity: AppServiceModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
    private nodeService: NodeService
  ) {
    nodeService.entities$.subscribe(n => this.entity = n as AppServiceModel);
  }

  ngOnInit() {
    console.log(this.entity);

    this.route.params.subscribe(params => {
      console.log(params['user']); // --> Name must match wanted parameter
    });
  }

  goSearch(title): void {
    this.router.navigate(['appservices/' + this.entity.Id + '/edit/' + title]);
  }

  goBack() {
    this.nodeService.closeEntity(true);
    this.router.navigate(['/appservices']);
  }
}
