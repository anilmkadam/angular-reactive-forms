import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Product } from "../model/app.product.model";
import { Logic } from "../model/logic";
import { Categories, Manufacturers } from "../model/app.constants";
import { CustomValidators } from "./app.custom.validators";
@Component({
  selector: "app-productreactiveform-component",
  templateUrl: "./app.productreactiveform.component.html",
})
export class ProductReactiveFormComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  private logic: Logic;
  headers: Array<string>;

  categories = Categories;
  manufacturers = Manufacturers;

  productForm: FormGroup;
  customValidator: CustomValidators;
  constructor() {
    this.product = new Product(0, "", "", "", "", "", 0);
    this.products = new Array<Product>();
    this.logic = new Logic();
    this.headers = new Array<string>();
    this.customValidator = new CustomValidators();

    this.productForm = new FormGroup({
      ProductRowId: new FormControl(
        this.product.ProductRowId,
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(8),
          Validators.pattern("[0-9]+"),
        ])
      ),

      ProductId: new FormControl(
        this.product.ProductId,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(8),
          CustomValidators.IsUnique,
        ])
      ),

      ProductName: new FormControl(
        this.product.ProductName,
        Validators.compose([Validators.required, Validators.minLength(2)])
      ),

      CategoryName: new FormControl(
        this.product.CategoryName,
        Validators.compose([Validators.required])
      ),

      Manufacturer: new FormControl(
        this.product.Manufacturer,
        Validators.compose([Validators.required])
      ),

      Description: new FormControl(
        this.product.Description,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ])
      ),

      BasePrice: new FormControl(
        this.product.BasePrice,
        Validators.compose([Validators.required, CustomValidators.IsNegative])
      ),
    });
  }
  ngOnInit() {
    for (let p in this.product) {
      this.headers.push(p);
    }
    this.products = this.logic.getProducts();
  }

  clear(): void {
    this.product = new Product(0, "", "", "", "", "", 0);
  }
  getSelectedProduct(product: Product): void {
    this.productForm.setValue(product);
  }
  save(): void {
    this.product = this.productForm.value;
    this.products = this.logic.addProduct(this.product);
    console.log(JSON.stringify(this.products));
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(
      (item) => item.ProductId != product.ProductId
    );
  }
}
