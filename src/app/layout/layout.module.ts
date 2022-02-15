import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, MenuComponent],
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
})
export class LayoutModule { }
