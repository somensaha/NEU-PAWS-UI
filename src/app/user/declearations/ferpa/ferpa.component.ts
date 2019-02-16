import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ferpa',
  templateUrl: './ferpa.component.html',
  styleUrls: ['./ferpa.component.css']
})
export class FerpaComponent implements OnInit {
  @Input('checkFerpa') checkFerpa: boolean;
  constructor() { }

  ngOnInit() {
    console.log(this.checkFerpa);
  }

}
