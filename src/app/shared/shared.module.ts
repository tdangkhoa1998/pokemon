import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ViewPokemonDetailComponent } from "../modules/pokemon/components/view-pokemon-detail/view-pokemon-detail.component";
import { NgZorroAntdModule } from "./ng-zorro-antd.module";
import { SafePipe } from "./pipe/safe.pipe";

@NgModule({
  declarations: [
    ViewPokemonDetailComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    ViewPokemonDetailComponent,
    SafePipe
  ],
})
export class AppSharedModule { }
