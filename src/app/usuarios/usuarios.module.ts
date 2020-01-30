import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListaComponent } from "./lista/lista.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { RouterModule } from "@angular/router";

const component = [ListaComponent, UsuarioComponent];

@NgModule({
  declarations: [...component],
  imports: [CommonModule, RouterModule],
  exports: [...component]
})
export class UsuariosModule {}
