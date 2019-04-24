import { Component, AfterViewChecked } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';
import { Product } from '../shared/product';

declare let paypal: any;


@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class Checkout implements AfterViewChecked {

    isLikeButton: boolean = false;
    constructor(public data: DataService, public router: Router) {
    }

    errorMessage: string = "";
    quantity: number = 1;
    addScript: boolean = false;
    paypalLoad: boolean = true;
    finalAmount: number = 1;


    paypalConfig = {
        env: 'sandbox',
        client: {
            sandbox: 'AbySzvPZfn-aZnNvXy-iGaxiN3bJIHY-wrr7L3PxYlAyMVoN9MxVDS8aMuKwrJ6z3_iUmoc84jGeSMG7',
            production: '<production-id>'
        },
        commit: true,
        payment: (data, actions) => {
            return actions.payment.create({
                payment: {
                    transactions: [
                        { amount: { total: this.finalAmount, currency: 'USD' } }
                    ]
                }
            })
        },
        onAuthorize: (data, actions) => {
            return actions.payment.execute().then((payment) => {

            });
        }
    }

    ngAfterViewChecked(): void {
        if (!this.addScript) {
            this.addPaypalScript().then(() => {
                paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
                this.paypalLoad = false;
            })
        }
    }

    addPaypalScript() {
        this.addScript = true;
        return new Promise((resolve, reject) => {
            let scriptTagElement = document.createElement('script');
            scriptTagElement.src = "https://www.paypalobjects.com/api/checkout.js";
            scriptTagElement.onload = resolve;
            document.body.appendChild(scriptTagElement);
        })
    }

    onCheckout() {
        this.data.checkout()
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["/"]);
                }
            }, err => this.errorMessage = "Failed to save order");
    }


    likeButton(y) {
        this.isLikeButton = !this.isLikeButton;
    }

    plusButton(product: Product) {
        debugger;
        
    }

    minusButton() {
        this.quantity--;
    }
}