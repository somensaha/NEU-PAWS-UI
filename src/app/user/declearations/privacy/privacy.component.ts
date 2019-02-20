import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  @Input('checkPrivacy') privacyStatus: boolean;
  @Output() sendToOptin = new EventEmitter<any>();
  @Input('parentForm') parentForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
    
  }

  public moveToOptin() {
  	this.sendToOptin.emit(this.privacyStatus);
  }

  onPrivacyChange() {
    this.privacyStatus = !this.privacyStatus;
  }
}
