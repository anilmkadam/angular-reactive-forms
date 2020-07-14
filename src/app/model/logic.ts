import { Product } from "./app.product.model";

export class Logic {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>();
  }

  isPresent(productId: string): boolean {
    if (
      this.products.filter((product) => product.ProductId === productId)
        .length > 0
    )
      return true;
    return false;
  }

  getProducts(): Array<Product> {
    this.products.push(
      new Product(1, "Prd001", "Laptop", "Electronics", "HP", "Gaming", 120000)
    );
    this.products.push(
      new Product(
        2,
        "Prd002",
        "Iron",
        "Electrical",
        "Bajaj",
        "Cotton Friendly",
        3000
      )
    );
    this.products.push(
      new Product(3, "Prd003", "Biscuts", "Food", "Parle", "Glucose", 10)
    );
    return this.products;
  }

  addProduct(prd: Product): Array<Product> {
    this.products.push(prd);
    return this.products;
  }
  deleteProduct(productId: string): Array<Product> {
    if (this.isPresent(productId)) {
      this.products = this.products.filter(
        (item) => item.ProductId != productId
      );
      return this.products;
    }
    console.log("Product not present...");
    this.products;
  }
}
