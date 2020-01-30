import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuariosActions from "../actions";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";

@Injectable({
  providedIn: "root"
})
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    public usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(ofType(usuariosActions.CARGAR_USUARIOS)).pipe(
      switchMap(() => {
        return this.usuarioService.getUsers().pipe(
          map(users => new usuariosActions.CargarUsuariosSuccess(users)),
          catchError(error => of(new usuariosActions.CargarUsuariosFail(error)))
        );
      })
    )
  );
}
