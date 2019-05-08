import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from "./product";
import { Order, OrderItem } from "./order";
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    private token: string = "";
    private tokenExpiration: Date;
    public products: Product[] = [];
    public orders: Order[] = [];
    public order: Order = new Order();

    loadProducts = async (): Promise<boolean> => {
        var response = await this.http.get("/api/products").toPromise();

        if (response != null) {
            this.products = response as Product[];
        }

        return true;
    }

    loadOrders = async (): Promise<boolean> => {
        debugger;
        var headers = new HttpHeaders();
        headers.set('Authorization', 'Bearer ' + localStorage.getItem("TOKEN"));
        var response = await this.http.get("/api/orders").toPromise();
        if (response != null) {
            this.orders = response as Order[];
        }

        return true;
    }


    loadCart = async (): Promise<boolean> => {
        var headers = new HttpHeaders();
        headers.set('Authorization', 'Bearer ' + localStorage.getItem("TOKEN"));
        var response = await this.http.get("/api/get-cart", { headers: headers }).toPromise();
        if (response != null) {
            this.products = response as Product[];
        }

        return true;
    }   

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    login(creds): Observable<boolean> {
        return this.http.post("/account/createtoken", creds)
            .pipe(map((data: any) => {
                localStorage.setItem("TOKEN",data.token);
                this.token = data.token;
                this.tokenExpiration = data.expiration;
                return true;
            }));           
    }

    //    login = async (creds: any): Promise<boolean> => {
    //    var response = await this.http.post("/account/createtoken", creds).toPromise();

    //    if (response != null) {
    //        this.token = response['token'];
    //        this.tokenExpiration = response['expiration'];
    //    }
    //    return true;
    //}

    public AddToOrder(newProduct: Product) {


        let item: OrderItem = this.order.items.find(i => i.productId == newProduct.id);

        if (item) {
            item.quantity++;
        } else {
            item = new OrderItem();
            item.productId = newProduct.id;
            item.productCategory = newProduct.category;
            item.productTitle = newProduct.title;
            item.productSize = newProduct.size;
            item.unitPrice = newProduct.price;
            item.quantity = 1;
            this.order.items.push(item);
        }

    }

    public checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new HttpHeaders().set("Authorization", "Bearer" + this.token)
        })
            .pipe(map(response => {
                this.order = new Order();
                return true;
            }));
    }
}