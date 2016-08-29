import {Component} from 'angular2/core';

@Component({
  selector: 'contacts-detail',
  template: `
    <h2>{{contact.name}}</h2>
  `
})
export class DetailComponent {

    constructor(){

    }
}