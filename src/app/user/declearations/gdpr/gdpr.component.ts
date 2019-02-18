import { Component, OnInit, Input, Output, EventEmitter,NgModule } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.css']
})
export class GdprComponent implements OnInit {
	@Input('checkGdpr') gdprStatus: boolean;
  @Output() sendToPrivacy = new EventEmitter<any>();
  @Input('parentForm') parentForm : FormGroup;
  
  constructor() { }

  ngOnInit() {
    
  }

  public moveToPrivacy(){
  	this.sendToPrivacy.emit(this.gdprStatus);
  }

  onGdprChange(){
    this.gdprStatus=!this.gdprStatus;
  }
}
