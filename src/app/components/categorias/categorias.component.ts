import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public columnasMostradas: string[] = ['id', 'nombre', 'descripcion', 'actualizar', 'eliminar'];
  public categorias: Categoria[] = [];
  public categoria: Categoria = new Categoria();

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.listar().subscribe(categorias => this.categorias = categorias);
  }

  public eliminar(categoria: Categoria): void {
    this.categoriaService.eliminar(categoria.id).subscribe(response => {
      this.categorias = this.categorias.filter(c => c !== categoria)
    });
  }

}