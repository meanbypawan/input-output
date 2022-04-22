import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList:any;
  copyList:any;
  @Output() eventEmiter = new EventEmitter<number>();

  constructor(private changeDetectorRef:ChangeDetectorRef) { }
  total:any;
  ngOnInit(): void {
  }

  public ngOnChanges(changes:SimpleChanges){

  }
  public ngDoCheck(){
    this.total = this.productList?.length;
    this.eventEmiter.emit(this.total);
  }
}
