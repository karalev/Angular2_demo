import {Component} from 'angular2/core';
import {LolComponent} from './lol.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <lol></lol>
    `,
    directives: [LolComponent]
})
export class AppComponent {
    
 }