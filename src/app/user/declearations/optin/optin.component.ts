import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

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
  @Input('skillOptIn') skillOptIn: boolean;
  @Input('chatbotOptIn') chatbotOptIn: boolean;
  @Input('voiceChatbotOptIn') voiceChatbotOptIn: boolean;
  @Input('optOut') optOut: boolean;
  
  @Input ('userDetails') userDetails :any;

  @Input('form') form:FormGroup;

  @Output() submitTheForm = new EventEmitter<any>();
  @Output() changeAdv = new EventEmitter<any>();
  @Output() changeAnb = new EventEmitter<any>();
  @Output() changeGrd = new EventEmitter<any>();
  @Output() chageDoc = new EventEmitter<any>();
  @Output() chandeShl = new EventEmitter<any>();
  @Output() changeHsn = new EventEmitter<any>();
  @Output() changeskillOptIn = new EventEmitter<any>();
  @Output() changechatbotOptIn = new EventEmitter<any>();
  @Output() changevoiceChatbotOptIn = new EventEmitter<any>();
  @Output() changeoptOut = new EventEmitter<any>();

  checkOptOutAll: boolean;
  catCheckFlag: boolean = false;
  
  constructor() { }

  ngOnInit() {

  }

  public submitForm() {

    if (!this.checkAdv && !this.checkAnb && !this.checkGrd && !this.checkDoc && !this.checkHsn && !this.checkShl && !this.optOut) {
      this.catCheckFlag = true;
    } else {
      this.submitTheForm.emit();
    }
  }


  submitAdv(){
      this.checkAdv=!this.checkAdv
      this.changeAdv.emit(this.checkAdv);
      this.catCheckFlag = false;
  }

  submitAnb(){
      this.checkAnb=!this.checkAnb;
      this.changeAnb.emit(this.checkAnb);
      this.catCheckFlag = false;
  }
  submitGrd(){
      this.checkGrd=!this.checkGrd;
      this.changeGrd.emit(this.checkGrd);
      this.catCheckFlag = false;
  }
  submitDoc(){
      this.checkDoc=!this.checkDoc;
      this.chageDoc.emit(this.checkDoc);
      this.catCheckFlag = false;
  }
  submitShl(){
      this.checkShl=!this.checkShl;
      this.chandeShl.emit(this.checkShl);
      this.catCheckFlag = false;
  }
  submitHsn(){
      this.checkHsn=!this.checkHsn;
      this.changeHsn.emit(this.checkHsn);
      this.catCheckFlag = false;
  }

  submitskillOptIn(){
      this.skillOptIn=!this.skillOptIn;
      this.changeskillOptIn.emit(this.skillOptIn);
      this.checkIfBothOptOut();
      this.catCheckFlag = false;
  }

  submitchatbotOptIn(){
    this.chatbotOptIn=!this.chatbotOptIn;
    this.changechatbotOptIn.emit(this.chatbotOptIn);
    this.checkIfBothOptOut();
    this.catCheckFlag = false;
  }

  checkOptOut() {
    this.optOut = !this.optOut;
    this.changeoptOut.emit(this.optOut);
    if (this.optOut !== false) {
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
      this.skillOptIn = false;
      this.changeskillOptIn.emit(this.skillOptIn);
      this.chatbotOptIn = false;
      this.changechatbotOptIn.emit(this.chatbotOptIn);
      this.voiceChatbotOptIn = false;
      this.changevoiceChatbotOptIn.emit(this.voiceChatbotOptIn);
    }
    this.catCheckFlag = false;
  }

  checkOptIn() {
    this.voiceChatbotOptIn = !this.voiceChatbotOptIn;
    this.changevoiceChatbotOptIn.emit(this.voiceChatbotOptIn);
    if (this.voiceChatbotOptIn) {
      this.optOut = false;
      this.changeoptOut.emit(this.optOut);
      this.skillOptIn = true;
      this.changeskillOptIn.emit(this.skillOptIn);
      this.chatbotOptIn = true;
      this.changechatbotOptIn.emit(this.chatbotOptIn);
    } else {
      this.skillOptIn = false;
      this.changeskillOptIn.emit(this.skillOptIn);
      this.chatbotOptIn = false;
      this.changechatbotOptIn.emit(this.chatbotOptIn);
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
    this.catCheckFlag = false;
  }

  checkIfBothOptIn() {
    if (this.skillOptIn && this.chatbotOptIn) {
      this.voiceChatbotOptIn = true;
      this.changevoiceChatbotOptIn.emit(this.voiceChatbotOptIn);
    } else {
      this.voiceChatbotOptIn = false;
      this.changevoiceChatbotOptIn.emit(this.voiceChatbotOptIn);
    }
    this.catCheckFlag = false;
  }

  checkIfBothOptOut() {
    if (!this.skillOptIn && !this.chatbotOptIn) {
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
    this.catCheckFlag = false;
  }
}
