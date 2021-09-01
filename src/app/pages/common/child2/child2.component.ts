import { Component, OnInit ,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Output() nameEvent = new EventEmitter<string>();

  userName: string = '';
  userPhone: string = '';

  onNameChange () {
    this.nameEvent.emit(this.userName);
  }


}
