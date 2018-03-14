import { Component, ElementRef, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharedService } from '../data.service';
import { NodeService } from './../shared/node.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  returnUrl: string;
  cars: any[];
  DataTable: any = [];
  brands: any[];
  EditRowID: any = '';
  tierContent: boolean = false;
  innerContentTier: boolean = true;
  title: string = '';
  // divWidth = 0;
  @ViewChild('widgetParentDiv') parentDiv: ElementRef;
  @ViewChild('setSimulate') childDiv: ElementRef;
  @HostListener('window:resize', ['$event']) onResize(event) {
    // guard against resize before view is rendered
    if (this.parentDiv) {
      let divWidth = this.parentDiv.nativeElement.clientWidth;
      console.log(this.innerContentTier);
      // this.tierview(divWidth);
      if (divWidth < 880) {
        if (this.childDiv.nativeElement.children.length > 1) {
          this.tierContent = false;
          this.innerContentTier = false;
        } else {
          this.tierContent = true;
          this.innerContentTier = true;
        }
        // this.check();
      } else if (divWidth >= 881) {
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

    this.DataTable = [
      { id: 1, Name: 'Ravi', Mobile: 8010452134, Email_ID: 'ravi.chauhan@conqsys.com', City: 'Etawah' },
      { id: 2, Name: 'Debanjan', Mobile: 1111111, Email_ID: 'debanjan@conqsys.com', City: 'Kolkata' },
      { id: 3, Name: 'Hemant', Mobile: 2222222, Email_ID: 'hemant@conqsys.com', City: 'Jalandhar' },
      { id: 4, Name: 'Shashi', Mobile: 3333333, Email_ID: 'shashi@conqsys.com', City: 'Patna' },
      { id: 1, Name: 'Ravi', Mobile: 8010452134, Email_ID: 'ravi.chauhan@conqsys.com', City: 'Etawah' },
      { id: 2, Name: 'Debanjan', Mobile: 1111111, Email_ID: 'debanjan@conqsys.com', City: 'Kolkata' },
      { id: 3, Name: 'Hemant', Mobile: 2222222, Email_ID: 'hemant@conqsys.com', City: 'Jalandhar' },
      { id: 4, Name: 'Shashi', Mobile: 3333333, Email_ID: 'shashi@conqsys.com', City: 'Patna' },
      { id: 1, Name: 'Ravi', Mobile: 8010452134, Email_ID: 'ravi.chauhan@conqsys.com', City: 'Etawah' },
      { id: 2, Name: 'Debanjan', Mobile: 1111111, Email_ID: 'debanjan@conqsys.com', City: 'Kolkata' },
      { id: 3, Name: 'Hemant', Mobile: 2222222, Email_ID: 'hemant@conqsys.com', City: 'Jalandhar' },
      { id: 4, Name: 'Shashi', Mobile: 3333333, Email_ID: 'shashi@conqsys.com', City: 'Patna' },
      { id: 1, Name: 'Ravi', Mobile: 8010452134, Email_ID: 'ravi.chauhan@conqsys.com', City: 'Etawah' },
      { id: 2, Name: 'Debanjan', Mobile: 1111111, Email_ID: 'debanjan@conqsys.com', City: 'Kolkata' },
      { id: 3, Name: 'Hemant', Mobile: 2222222, Email_ID: 'hemant@conqsys.com', City: 'Jalandhar' },
      { id: 4, Name: 'Shashi', Mobile: 3333333, Email_ID: 'shashi@conqsys.com', City: 'Patna' },
      { id: 1, Name: 'Ravi', Mobile: 8010452134, Email_ID: 'ravi.chauhan@conqsys.com', City: 'Etawah' },
      { id: 2, Name: 'Debanjan', Mobile: 1111111, Email_ID: 'debanjan@conqsys.com', City: 'Kolkata' },
      { id: 3, Name: 'Hemant', Mobile: 2222222, Email_ID: 'hemant@conqsys.com', City: 'Jalandhar' },
      { id: 4, Name: 'Shashi', Mobile: 3333333, Email_ID: 'shashi@conqsys.com', City: 'Patna' },
    ];

    this.dataService.notifyObservable$.subscribe(
      data => {
        this.DataTable.splice(this.DataTable, -1, data);
        console.log(data);
        // this.DataTable = data;
      }
    );
  }

  ngOnInit() {
    this.tierContent = true;
  }


  edit(id): void {
    this.EditRowID = id;
  }

  openChild(data): void {
    if (data) {
      this.nodeService.addEntityHeader(data.Name);
    } else {
      this.nodeService.addEntityHeader('New');
    }
    this.router.navigate(['parent/edit/Parent']);
    // this.tierview();
    setTimeout(() => {
      this.tierContent = true;
    }, .400);

  }

  check(): void {
    console.log(this.tierContent);
    this.nodeService.isEntityClose$.subscribe(n => this.tierContent = !n);
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
