import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

 
//Materiales declarados
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

//Componentes declarados

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SettingsComponent } from './component/settings/settings.component';
import { StockComponent } from './component/stock/stock.component';
import { VentasComponent } from './component/ventas/ventas.component';
import { ComprasComponent } from './component/compras/compras.component';
import { HeaderComponent } from './component/header/header.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ClientesComponent } from './component/clientes/clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SettingsComponent,
    StockComponent,
    VentasComponent,
    ComprasComponent,
    HeaderComponent,
    InicioComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
