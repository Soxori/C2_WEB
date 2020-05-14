import {Picture} from './Picture.model';

export class Products {
    constructor(public id: number, public title: string, description: string, public unitsInStock: number,
         public price: number, public parameters: string, public images: Picture[]) {

    }
}