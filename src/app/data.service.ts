
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class DataSharedService {
  public notify = new Subject<any>();
  /**
   * Observable string streams
   */
  public notifyObservable$ = this.notify.asObservable();
  // public logo: string = '';
  constructor() { }

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }
}
