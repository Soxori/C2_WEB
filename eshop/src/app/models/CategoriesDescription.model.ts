import {Categories} from './Categories.model';
import {Products} from './Products.model';

export class CategoriesDescription {
    constructor(public categories: Categories, public currentPage: number, public pagesCount: number, public products: Products[]) {

    }
}