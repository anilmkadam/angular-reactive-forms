import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductReactiveFormComponent } from "./productreactiveform/ProductReactiveFormComponent";

@NgModule({
  declarations: [AppComponent, ProductReactiveFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
