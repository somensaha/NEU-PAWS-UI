import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';

@Component({
  selector: 'app-ferpa',
  templateUrl: './ferpa.component.html',
  styleUrls: ['./ferpa.component.css']
})
export class FerpaComponent implements OnInit {
  @Input('checkFerpa') ferpaStatus: boolean;
  @Output() sendToGdpr = new EventEmitter<any>();
  

  constructor( ) { }

  ngOnInit() {
    
  }

  moveToGdpr(){
  	this.sendToGdpr.emit(this.ferpaStatus);
  }

  onFerpaChange(){
    this.ferpaStatus=!this.ferpaStatus;
  }


}
