import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {

  public categoria: Categoria = new Categoria();
  public errores: string[];

  constructor(private categoriaService: CategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.categoriaService.ver(id).subscribe((categoria) => this.categoria = categoria)
      }
    });
  }

  public crear(): void {
    this.categoriaService.crear(this.categoria).subscribe(categoria => {
      this.router.navigate(['/categorias'])
    }, e => {
      this.errores = e.error as string[];
      console.log(e.error);
    });
  }

  public actualizar(): void {
    this.categoriaService.actualizar(this.categoria).subscribe(categoria => {
      this.router.navigate(['/categorias'])
    }, e => {
      this.errores = e.error as string[];
      console.log(e.error);
    });
  }

}