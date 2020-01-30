import { Component, OnInit, OnDestroy } from "@angular/core";
import { Usuario } from "../../models/usuario.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import * as usuariosActions from "../../store/actions";
import { Subscription } from "rxjs";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.scss"]
})
export class ListaComponent implements OnInit, OnDestroy {
  public usuarios: Usuario[] = [];
  loading: boolean;
  error: {
    status: string;
    message: string;
    url: string;
  };

  subcription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new usuariosActions.CargarUsuarios());
    this.subcription = this.store.select("usuarios").subscribe(users => {
      this.usuarios = users.users;
      this.loading = users.loading;
      this.error = users.error;
    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
