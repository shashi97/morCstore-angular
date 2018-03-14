import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EntityModel } from './entity.model';

@Injectable()
export class NodeService {
  private node: Subject<Node> = new BehaviorSubject<Node>(null);
  private title: Subject<string> = new BehaviorSubject<string>(null);
  private entityHeader: Subject<string> = new BehaviorSubject<string>(null);
  private entityHeaderType: Subject<string> = new BehaviorSubject<string>(null);
  private isEntityClose: Subject<boolean> = new BehaviorSubject<boolean>(null);

  private entities: Subject<EntityModel> = new BehaviorSubject<EntityModel>(null);

  node$ = this.node.asObservable();
  title$ = this.title.asObservable();
  entityHeader$ = this.entityHeader.asObservable();
  entityHeaderType$ = this.entityHeaderType.asObservable();
  isEntityClose$ = this.isEntityClose.asObservable();
  entities$ = this.entities.asObservable();

  addNode(data: Node) {
    this.node.next(data);
  }
  addTitle(title: string) {
    this.title.next(title);
  }
  addEntityHeader(entityHeader: string) {
    this.entityHeader.next(entityHeader);
  }
  addEntityHeaderType(entityHeaderType: string) {
    this.entityHeaderType.next(entityHeaderType);
  }
  closeEntity(isEntityClose: boolean) {
    this.isEntityClose.next(isEntityClose);
  }

  openEntity(entity: EntityModel) {
    this.entities.next(entity);
    
  }
}
