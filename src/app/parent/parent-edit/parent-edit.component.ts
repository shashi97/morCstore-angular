import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuModule, MenuItem } from 'primeng/primeng';
import { NodeService } from './../../shared/node.service';

@Component({
  selector: 'app-edit',
  templateUrl: './parent-edit.component.html',
  styleUrls: ['./parent-edit.component.css'],
})
export class ParentEditComponent implements OnInit {

  entityHeader: string = '';
  entityHeaderType: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
    private nodeService: NodeService
  ) {
    nodeService.entityHeader$.subscribe(n => this.entityHeader = n);
    nodeService.entityHeaderType$.subscribe(n => this.entityHeaderType = n);
  }

  ngOnInit() {

  }

  goSearch(): void {
    this.router.navigate(['parent/edit/Parent/child_1']);
  }

  goBack() {
    this.nodeService.closeEntity(true);
    this.router.navigate(['/parent']);
  }
}
