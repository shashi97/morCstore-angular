import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuModule, MenuItem } from 'primeng/primeng';
import { NodeService } from './../shared/node.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  returnUrl: string;
  userMenu: MenuItem[];
  mainMenuBtn: boolean = true;
  isShowBreadcrumbs: boolean = true;
  isShowSearch: boolean = false;
  isShowSetting: boolean = false;
  title: string = '';
  @ViewChild('wrapper') parentDiv: ElementRef;
  @HostListener('window:resize') onResize() {
    // guard against resize before view is rendered
    if (this.parentDiv) {
      let divWidth = this.parentDiv.nativeElement.clientWidth;
      if (divWidth < 880) {
        this.mainMenuBtn = false;
      } else if (divWidth >= 881) {
        this.mainMenuBtn = true;
      }
    }
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nodeService: NodeService
  ) {
  }


  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.userMenu = [
      { label: 'Sign Out', icon: 'fa-refresh' },
      { label: 'Change Password', icon: 'fa-refresh' },
      { label: 'My Permissions', icon: 'fa-refresh' },
    ];
  }

  goSearch(title): void {
    // this.title = title;
    this.nodeService.addTitle(title);
    this.nodeService.closeEntity(true);
    this.router.navigate(['/'+title]);

  }
  // handleMainMenu() {

  //   this.mainMenuBtn = !this.mainMenuBtn;
  //   // if (this.mainMenuBtn) {

  //   //   this.el.nativeElement.querySelector("#wrapper").classList.add('OpenMenu');
  //   // } else {
  //   //   this.el.nativeElement.querySelector("#wrapper").classList.remove('OpenMenu');
  //   // }
  // }


}
