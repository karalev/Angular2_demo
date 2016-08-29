import {Component} from 'angular2/core'
import {LolService} from './lol.service'
import {anComponent} from './an.component'

@Component({
    selector: 'lol',
    template: `
        <p>parent starts here!</p>
        <button (click)="showHide()">SHOW-HIDE</button>
            
            <an *ngIf="des" [toChild]='objectToSend' (change)="myValueChange($event);"></an>
            <h1> {{sss}} </h1>
            
        <input type="text" #inp>
        <button (click)="addToArray(inp.value)">SEND to Array</button>
    `,
    providers: [LolService],
    directives: [anComponent]
})
export class LolComponent {
    objectToSend = {
        a: 0,
        b: []
    };
    constructor(lolService: LolService){
        this.lolService = lolService;
        this.objectToSend.a = 1;
        this.objectToSend.b = this.lolService.getLol();
        
    }
    myValueChange(olo){
        console.log(olo);
        this.objectToSend = olo.value;
    }
    get sss(){
        console.log('get sss ' + this.objectToSend.a);
        return this.objectToSend.a;
    }
    addToArray(myInput) {
        this.lolService.addLol(myInput);
    }
    showHide(){
        this.des = !this.des;
    }
    lolService;
    
    des = true;
}