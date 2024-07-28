import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-title *ngIf="destruir"></app-title>
  <button (click) = "destruirComponent()">Destruir Component</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public destruir: boolean = true;

  construtor(){}

  public destruirComponent() {
    this.destruir = false;
  }

  ngOnInit(): void {
    setTimeout( ()=> {
      console.log('ngOnInit app-root');
    }, 5000)
  }
}
