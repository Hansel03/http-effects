import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import { CargarUsuario } from "src/app/store/actions";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.scss"]
})
export class UsuarioComponent implements OnInit {
  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params[`id`];
      this.store.dispatch(new CargarUsuario(id));
    });
  }
}
