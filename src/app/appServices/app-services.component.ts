import { Component, ElementRef, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharedService } from '../data.service';
import { NodeService } from './../shared/node.service';
import { AppServiceModel } from './app-service.model';
import { DataTable } from 'primeng/primeng';
import { EntityModel } from '../shared/entity.model';

@Component({
  selector: 'app-services',
  templateUrl: './app-services.component.html',
  styleUrls: ['./app-services.component.css']
})
export class AppServicesComponent implements OnInit {
  returnUrl: string;
  cars: any[];
  DataTable: Array<AppServiceModel> = [];
  brands: any[];
  EditRowID: any = '';
  tierContent: boolean = false;
  innerContentTier: boolean = true;
  title: string = '';
  // divWidth = 0;
  @ViewChild('widgetParentDiv') parentDiv: ElementRef;
  @ViewChild('setSimulate') childDiv: ElementRef;
  @HostListener('window:resize') onResize() {
    // guard against resize before view is rendered
    if (this.parentDiv) {
      let divWidth = this.parentDiv.nativeElement.clientWidth;
      console.log(this.innerContentTier);
      // this.tierview(divWidth);
      if (divWidth < 875) {
        if (this.childDiv.nativeElement.children.length > 1) {
          this.tierContent = false;
          this.innerContentTier = false;
        } else {
          this.tierContent = true;
          this.innerContentTier = true;
        }
        // this.check();
      } else if (divWidth >= 876) {
        this.tierContent = true;
        this.innerContentTier = true;
      }
    }
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataSharedService,
    private nodeService: NodeService
  ) {
    this.nodeService.title$.subscribe(n => this.title = n);
    this.nodeService.isEntityClose$.subscribe(n => this.tierContent = !n);

    this.DataTable = new Array<AppServiceModel>();
    this.DataTable.push({Id: 1, Description:'Ravi Description', Name: 'Ravi', Mobile: '8010452134', EmailId: 'ravi.chauhan@conqsys.com', City: 'Etawah' },
      { Id: 2,  Description:'Ravi Description',Name: 'Debanjan', Mobile: '1111111', EmailId: 'debanjan@conqsys.com', City: 'Kolkata' },
      { Id: 3, Description:'Ravi Description', Name: 'Hemant', Mobile: '2222222', EmailId: 'hemant@conqsys.com', City: 'Jalandhar' },
      { Id: 4, Description:'Ravi Description', Name: 'Shashi', Mobile: '3333333', EmailId: 'shashi@conqsys.com', City: 'Patna' },
      { Id: 2,  Description:'Ravi Description',Name: 'Debanjan', Mobile: '1111111', EmailId: 'debanjan@conqsys.com', City: 'Kolkata' },
      { Id: 3, Description:'Ravi Description', Name: 'Hemant', Mobile: '2222222', EmailId: 'hemant@conqsys.com', City: 'Jalandhar' },
      { Id: 4, Description:'Ravi Description', Name: 'Shashi', Mobile: '3333333', EmailId: 'shashi@conqsys.com', City: 'Patna' },
      { Id: 2,  Description:'Ravi Description',Name: 'Debanjan', Mobile: '1111111', EmailId: 'debanjan@conqsys.com', City: 'Kolkata' },
      { Id: 3, Description:'Ravi Description', Name: 'Hemant', Mobile: '2222222', EmailId: 'hemant@conqsys.com', City: 'Jalandhar' },
      { Id: 4, Description:'Ravi Description', Name: 'Shashi', Mobile: '3333333', EmailId: 'shashi@conqsys.com', City: 'Patna' },
      { Id: 2,  Description:'Ravi Description',Name: 'Debanjan', Mobile: '1111111', EmailId: 'debanjan@conqsys.com', City: 'Kolkata' },
      { Id: 3, Description:'Ravi Description', Name: 'Hemant', Mobile: '2222222', EmailId: 'hemant@conqsys.com', City: 'Jalandhar' },
      { Id: 4, Description:'Ravi Description', Name: 'Shashi', Mobile: '3333333', EmailId: 'shashi@conqsys.com', City: 'Patna' },
      { Id: 2,  Description:'Ravi Description',Name: 'Debanjan', Mobile: '1111111', EmailId: 'debanjan@conqsys.com', City: 'Kolkata' },
      { Id: 3, Description:'Ravi Description', Name: 'Hemant', Mobile: '2222222', EmailId: 'hemant@conqsys.com', City: 'Jalandhar' },
      { Id: 4, Description:'Ravi Description', Name: 'Shashi', Mobile: '3333333', EmailId: 'shashi@conqsys.com', City: 'Patna' },
      { Id: 2,  Description:'Ravi Description',Name: 'Debanjan', Mobile: '1111111', EmailId: 'debanjan@conqsys.com', City: 'Kolkata' },
      { Id: 3, Description:'Ravi Description', Name: 'Hemant', Mobile: '2222222', EmailId: 'hemant@conqsys.com', City: 'Jalandhar' },
      { Id: 4, Description:'Ravi Description', Name: 'Shashi', Mobile: '3333333', EmailId: 'shashi@conqsys.com', City: 'Patna' },
      { Id: 2,  Description:'Ravi Description',Name: 'Debanjan', Mobile: '1111111', EmailId: 'debanjan@conqsys.com', City: 'Kolkata' },
      { Id: 3, Description:'Ravi Description', Name: 'Hemant', Mobile: '2222222', EmailId: 'hemant@conqsys.com', City: 'Jalandhar' },
      { Id: 4, Description:'Ravi Description', Name: 'Shashi', Mobile: '3333333', EmailId: 'shashi@conqsys.com', City: 'Patna' },
      { Id: 2,  Description:'Ravi Description',Name: 'Debanjan', Mobile: '1111111', EmailId: 'debanjan@conqsys.com', City: 'Kolkata' },
      { Id: 3, Description:'Ravi Description', Name: 'Hemant', Mobile: '2222222', EmailId: 'hemant@conqsys.com', City: 'Jalandhar' },
      { Id: 4, Description:'Ravi Description', Name: 'Shashi', Mobile: '3333333', EmailId: 'shashi@conqsys.com', City: 'Patna' },
      { Id: 2,  Description:'Ravi Description',Name: 'Debanjan', Mobile: '1111111', EmailId: 'debanjan@conqsys.com', City: 'Kolkata' },
      { Id: 3, Description:'Ravi Description', Name: 'Hemant', Mobile: '2222222', EmailId: 'hemant@conqsys.com', City: 'Jalandhar' },
      { Id: 4, Description:'Ravi Description', Name: 'Shashi', Mobile: '3333333', EmailId: 'shashi@conqsys.com', City: 'Patna' },
      { Id: 2,  Description:'Ravi Description',Name: 'Debanjan', Mobile: '1111111', EmailId: 'debanjan@conqsys.com', City: 'Kolkata' },
      { Id: 3, Description:'Ravi Description', Name: 'Hemant', Mobile: '2222222', EmailId: 'hemant@conqsys.com', City: 'Jalandhar' },
      { Id: 4, Description:'Ravi Description', Name: 'Shashi', Mobile: '3333333', EmailId: 'shashi@conqsys.com', City: 'Patna' }
    )
  

    // this.dataService.notifyObservable$.subscribe(
    //   data => {
    //     this.DataTable.splice(this.DataTable, -1, data);
    //     console.log(data);
    //     // this.DataTable = data;
    //   }
    // );
  }

  ngOnInit() {
    //this.tierContent = true;
  }


  edit(id): void {
    this.EditRowID = id;
  }

  openChild(entity): void {
    entity ? this.nodeService.openEntity(entity) : this.nodeService.openEntity(new EntityModel());

    this.router.navigate(['appservices/' + entity.Id + '/edit']);
    // this.tierview();
    setTimeout(() => {
      this.tierContent = true;
    }, .400);

  }

  check(): void {
    console.log(this.tierContent);
    //this.nodeService.isEntityClose$.subscribe(n => this.tierContent = !n);
  }

  goBack() {
    this.router.navigate(['']);
  }
  tierview(divWidth) {
    let setSimulateSize = this.parentDiv.nativeElement.querySelector("#setSimulate").children.length;
    if (setSimulateSize > 1) {
      this.tierContent = true;
    } else {
      this.tierContent = false;
      // if (divWidth && divWidth < 880) {
      //   this.tierContent = false;
      // } else if (divWidth && divWidth >= 881) {
      //   this.tierContent = true;
      // }
    }
  }
}
