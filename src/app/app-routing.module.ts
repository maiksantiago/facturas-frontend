import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasFormComponent } from './components/categorias/categorias-form.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesFormComponent } from './components/clientes/clientes-form.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FacturasFormComponent } from './components/facturas/facturas-form.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ProductosFormComponent } from './components/productos/productos-form.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'facturas' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: ClientesFormComponent },
  { path: 'clientes/form/:id', component: ClientesFormComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'facturas/form', component: FacturasFormComponent },
  { path: 'facturas/form/:id', component: FacturasFormComponent },
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