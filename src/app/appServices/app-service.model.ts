import { EntityModel,EntityTypeDecorator, EntityTypes } from "../shared/entity.model";


@EntityTypeDecorator(EntityTypes.AppServices)
export class AppServiceModel extends EntityModel {
    public EmailId:string;
    public City:string;
    public Mobile:string;
}