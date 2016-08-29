import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'an',
    template: `
        <h3>{{str}}</h3>
        <ul>
            <li *ngFor="#el of toChild.b; #idx = index">
                {{el}}
            </li>
        </ul>
        <button (click)="sendTop()">send vverh!</button>
        <h2>{{toChild.a}}</h2>
        <h3>{{str}}</h3>
    `,
})


export class anComponent {
    
    @Output('change') counterChange = new EventEmitter();
    

    sendTop(){
        this.toChild.a++;
        this.counterChange.emit({
            value: {
                    a: this.toChild.a,
                    b: this.toChild.b
                }
        })
    }

    
    
    @Input() toChild;
    
    set zzz(zzz){
        this._zzz = this.toChild.b;
    }

    get zzz(){
        return this._zzz;
    }
    
    constructor(){
          
    }
    str = 'Child Part';
    _zzz;

}