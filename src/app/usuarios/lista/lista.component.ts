import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/usuario.service";
import { Usuario } from "../../models/usuario.model";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.scss"]
})
export class ListaComponent implements OnInit {
  public usuarios: Usuario[] = [];

  constructor() {}

  ngOnInit() {}
}
