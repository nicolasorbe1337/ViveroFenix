import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { VentasComponent } from '../ventas/ventas.component';
import { ComprasComponent } from '../compras/compras.component';
import { StockComponent } from '../stock/stock.component';
import { ClientesComponent } from '../clientes/clientes.component';
import { SettingsComponent } from '../settings/settings.component';
import { InicioComponent } from '../inicio/inicio.component';


//RUTAS PARA REDIRECCIONAR HACIA LOS COMPONENTES

const routes: Routes = [
{path: '', component: DashboardComponent, children:
[   {path: '', component: InicioComponent },
    {path: 'ventas', component: VentasComponent },
    {path: 'compras', component: ComprasComponent },
    {path: 'stock', component: StockComponent },
    {path: 'clientes', component: ClientesComponent },
    {path: 'settings', component: SettingsComponent },

 ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
