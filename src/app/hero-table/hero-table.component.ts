import { Component, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.scss']
})
export class HeroTableComponent {
  heroes: Hero[] = [];

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'id'},
    { field: 'name'},
  ];

  rowData = [
    {id: 'test', name: 'test'},
    {id: 'test2', name: 'test2'},
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  constructor(private heroService: HeroService) {}

  onGridReady(params: GridReadyEvent): void {
    // this.getHeroes();
  }
  getHeroes(): void {
    // this.rowData$ =  this.heroService.getHeroes();
    // this.rowData$ = this.rowData;
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
