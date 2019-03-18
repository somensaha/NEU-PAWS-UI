import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-optin',
  templateUrl: './optin.component.html',
  styleUrls: ['./optin.component.css']
})
export class OptinComponent implements OnInit {

  @Input('checkAdv') checkAdv: boolean;
  @Input('checkDoc') checkDoc: boolean;
  @Input('checkAnb') checkAnb: boolean;
  @Input('checkShl') checkShl: boolean;
  @Input('checkGrd') checkGrd: boolean;
  @Input('checkHsn') checkHsn: boolean;
  
  @Input ('userDetails') userDetails :any;

  @Input('form') form:FormGroup;

  @Output() submitTheForm = new EventEmitter<any>();
  @Output() changeAdv = new EventEmitter<any>();
  @Output() changeAnb = new EventEmitter<any>();
  @Output() changeGrd = new EventEmitter<any>();
  @Output() chageDoc = new EventEmitter<any>();
  @Output() chandeShl = new EventEmitter<any>();
  @Output() changeHsn = new EventEmitter<any>();

  checkOptOutAll: boolean;

  
  constructor() { }

  ngOnInit() {

  }

  public submitForm() {
    if (!this.checkAdv && !this.checkAnb && !this.checkGrd && !this.checkDoc && !this.checkHsn && !this.checkShl && !this.checkOptOutAll) {

    } else {
      this.submitTheForm.emit();
    }
  }

  submitAdv(){
      this.checkAdv=!this.checkAdv
      this.changeAdv.emit(this.checkAdv);
  }

  submitAnb(){
      this.checkAnb=!this.checkAnb;
      this.changeAnb.emit(this.checkAnb);
  }
  submitGrd(){
      this.checkGrd=!this.checkGrd;
      this.changeGrd.emit(this.checkGrd);
  }
  submitDoc(){
      this.checkDoc=!this.checkDoc;
      this.chageDoc.emit(this.checkDoc);
  }
  submitShl(){
      this.checkShl=!this.checkShl;
      this.chandeShl.emit(this.checkShl);
  }
  submitHsn(){
      this.checkHsn=!this.checkHsn;
      this.changeHsn.emit(this.checkHsn);
  }

  checkOptOut() {
    this.checkOptOutAll = !this.checkOptOutAll;
    if (this.checkOptOutAll !== false) {
      this.checkAdv = false;
      this.changeAdv.emit(this.checkAdv);
      this.checkAnb = false;
      this.changeAnb.emit(this.checkAnb);
      this.checkGrd = false;
      this.changeGrd.emit(this.checkGrd);
      this.checkDoc = false;
      this.chageDoc.emit(this.checkDoc);
      this.checkShl = false;
      this.chandeShl.emit(this.checkShl);
      this.checkHsn = false;
      this.changeHsn.emit(this.checkHsn);
    }
  }


}
