export class EntityModel {
    public Id: number;
    public Name: string;
    public Description: string;

    constructor() {

    }
}

export enum EntityTypes {
    AppServices,
    Departments,
    Items
}

export function EntityTypeDecorator(entityType: EntityTypes) {
    return (target: object)=> {
        
    }
}