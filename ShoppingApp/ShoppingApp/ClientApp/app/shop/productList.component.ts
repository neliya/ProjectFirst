import { Component, OnInit } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Product } from '../shared/product';
import { Order } from '../shared/order';
import { __await } from 'tslib';


@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: [ "productList.component.css" ]
})
export class ProductList implements OnInit{

    
    constructor(private dataService: DataService) {
       
    }

    public products: Product[] = [];
    public orders: Order[] = [];

    async ngOnInit(): Promise<any> {
        await this.dataService.loadProducts();
  
        await this.dataService.loadOrders();
        this.products = this.dataService.products;
        this.orders = this.dataService.orders;
    }

    addProduct(product: Product) {
        this.dataService.AddToOrder(product);
    }
}