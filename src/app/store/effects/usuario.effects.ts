import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuarioActions from "../actions";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { UsuarioService } from "../../services/usuario.service";

@Injectable({
  providedIn: "root"
})
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    public usuarioService: UsuarioService
  ) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(ofType(usuarioActions.CARGAR_USUARIO)).pipe(
      switchMap(accion => {
        const id = accion[`id`];
        return this.usuarioService.getUserById(id).pipe(
          map(user => new usuarioActions.CargarUsuarioSuccess(user)),
          catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
        );
      })
    )
  );
}
