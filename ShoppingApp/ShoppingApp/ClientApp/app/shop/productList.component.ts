﻿import { Component, OnInit } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Product } from '../shared/product';


@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: [ "productList.component.css" ]
})
export class ProductList implements OnInit{

    
    constructor(private dataService: DataService) {
       
    }

    public products: Product[] = [];

    async ngOnInit(): Promise<any> {
        await this.dataService.loadProducts();
        this.products = this.dataService.products;
    }

    addProduct(product: Product) {
        this.dataService.AddToOrder(product);
    }
}