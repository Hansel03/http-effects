import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListaComponent } from "./lista/lista.component";
import { UsuarioComponent } from "./usuario/usuario.component";

const component = [ListaComponent, UsuarioComponent];

@NgModule({
  declarations: [...component],
  imports: [CommonModule],
  exports: [...component]
})
export class UsuariosModule {}
