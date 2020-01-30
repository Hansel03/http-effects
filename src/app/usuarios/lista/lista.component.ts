import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../models/usuario.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import * as usuariosActions from "../../store/actions";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.scss"]
})
export class ListaComponent implements OnInit {
  public usuarios: Usuario[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new usuariosActions.CargarUsuarios());
  }
}
