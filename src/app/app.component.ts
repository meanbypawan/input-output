import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  totalProducts:number|any;
  newData:any
  constructor(private cd:ChangeDetectorRef){}

  public searchData(){
    let data = [
      {id: 1, name: 'Pen'},
      {id: 2, name: 'Pencil'},
      {id: 3, name: 'Note Book'},
      {id: 4, name: 'Sketch Pen'}
    ];
    this.data = data;

  }
  public getData(total:number){
    this.totalProducts = total;
  }
  public addNewData(){
    this.data.push({id: 5, name: "Ereaser"})
  }
}
