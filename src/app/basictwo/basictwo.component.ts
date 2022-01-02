import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basictwo',
  templateUrl: './basictwo.component.html',
  styleUrls: ['./basictwo.component.css']
})
export class BasictwoComponent implements OnInit {

  constructor() { }

  //@Input() hero: string; // decorate the property with @Input()
  @Input()  userlist: string;
  @Input('hero') masterName = ''; // tslint:disable-line: no-input-rename

  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

  ngOnInit(): void {
  }

}
