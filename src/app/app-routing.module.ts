import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComprasComponent } from './component/compras/compras.component';
import { VentasComponent } from './component/ventas/ventas.component';
import { SettingsComponent } from './component/settings/settings.component';
import { StockComponent } from './component/stock/stock.component';
import { HeaderComponent } from './component/header/header.component';
import { ClientesComponent } from './component/clientes/clientes.component';


//Rutas de navegacion

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./component/dashboard/dashboard.module').then(x => x.DashboardModule)},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'compras', component: ComprasComponent },
  { path: 'ventas', component:VentasComponent },
  { path: 'clientes', component:ClientesComponent },
  { path: 'settings', component:SettingsComponent },
  { path: 'stock', component:StockComponent },
  { path: 'header', component:HeaderComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
