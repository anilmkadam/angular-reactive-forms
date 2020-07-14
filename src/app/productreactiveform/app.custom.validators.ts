import { AbstractControl } from "@angular/forms";
import { Logic } from "../model/logic";
import { Product } from "../model/app.product.model";

export class CustomValidators {
  logic: Logic;
  static products: Array<Product>;
  constructor() {
    this.logic = new Logic();
    CustomValidators.products = this.logic.getProducts();
  }
  static IsNegative(price: AbstractControl): any {
    const value: number = parseInt(price.value);
    if (value < 0) {
      return { negative: true };
    } else {
      return null;
    }
  }
  static IsUnique(productId: AbstractControl): any {
    const id: string = productId.value;
    if (
      CustomValidators.products.filter((product) => product.ProductId === id)
        .length > 0
    ) {
      return { present: true };
    } else {
      return null;
    }
  }
}
