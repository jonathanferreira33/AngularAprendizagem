import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-table-material',
  standalone: true,
  imports: [],
  templateUrl: './table-material.component.html',
  styleUrl: './table-material.component.scss'
})
export class TableMaterialComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['day', 'qntProcessamentoAprovado', 'qntProcessamentoRecusado'];
  expandedElement: ProcessamentoQnt | null | undefined;

  constructor() {
  }

  ngOnInit() {
  }
}

export interface ProcessamentoQnt {
  day: number;
  username: string;
  qntProcessamentoAprovado: number;
  qntProcessamentoRecusado: number;
  qntProcessamentoTotal?: number;
}

const ELEMENT_DATA: ProcessamentoQnt[] = [
  {
    username: 'Fulano',
    day: 1,
    qntProcessamentoAprovado: 10,
    qntProcessamentoRecusado: 20,
  }, 
];