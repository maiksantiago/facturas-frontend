import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasFormComponent } from './components/categorias/categorias-form.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesFormComponent } from './components/clientes/clientes-form.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FacturasFormComponent } from './components/facturas/facturas-form.component';
import { ProductosFormComponent } from './components/productos/productos-form.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'clientes' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: ClientesFormComponent },
  { path: 'clientes/form/:id', component: ClientesFormComponent },
  { path: 'facturas/form/:idCliente', component: FacturasFormComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/form', component: ProductosFormComponent },
  { path: 'productos/form/:id', component: ProductosFormComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/form', component: CategoriasFormComponent },
  { path: 'categorias/form/:id', component: CategoriasFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }