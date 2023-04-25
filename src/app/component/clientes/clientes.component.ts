import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from 'src/app/services/clientes.service';
import { clientes } from '../Interfaces/Clientes';






@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  
  list_Clientes: clientes[] = [
    {numero: 1, nombreyapellido: 'Silvia Perez', email: 'asdasd@hotmail', telefono: 353624354, direccion: 'av carcano 243'},
    {numero: 2, nombreyapellido: 'Roque Toclay', email: 'ewrd@hotmail', telefono: 3516456, direccion: 'jujuy 234'},
    {numero: 3, nombreyapellido: 'Jonathan Sosa', email: 'asert@hotmail', telefono: 353634534, direccion: 'asalta 3534'},
  ];


  displayedColumns: string[] = ['numero', 'nombreyapellido', 'email','telefono','direccion','acciones'];
  dataSource = new MatTableDataSource(this.list_Clientes);

  constructor(private _clientesService:ClientesService){}

  

 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
