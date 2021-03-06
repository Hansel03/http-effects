import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import { CargarUsuario } from "src/app/store/actions";
import { Usuario } from "../../models/usuario.model";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.scss"]
})
export class UsuarioComponent implements OnInit {
  public user: Usuario;
  public loading: boolean;
  public error: {
    status: string;
    message: string;
    url: string;
  };

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params[`id`];
      this.store.dispatch(new CargarUsuario(id));
    });

    // obtener la data del usuario
    this.store.select("usuario").subscribe(usuario => {
      this.user = usuario.user;
      this.loading = usuario.loading;
      this.error = usuario.error;
    });
  }
}
