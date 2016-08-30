System.register(['angular2/core', './lol.service', './an.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lol_service_1, an_component_1;
    var LolComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lol_service_1_1) {
                lol_service_1 = lol_service_1_1;
            },
            function (an_component_1_1) {
                an_component_1 = an_component_1_1;
            }],
        execute: function() {
            let LolComponent = class LolComponent {
                constructor(lolService) {
                    this.objectToSend = {
                        a: 0,
                        b: []
                    };
                    this.des = true;
                    this.lolService = lolService;
                    this.objectToSend.a = 1;
                    this.objectToSend.b = this.lolService.getLol();
                }
                myValueChange(olo) {
                    console.log(olo);
                    this.objectToSend = olo.value;
                }
                get sss() {
                    console.log('get sss ' + this.objectToSend.a);
                    return this.objectToSend.a;
                }
                addToArray(myInput) {
                    this.lolService.addLol(myInput);
                }
                showHide() {
                    this.des = !this.des;
                }
            };
            LolComponent = __decorate([
                core_1.Component({
                    selector: 'lol',
                    template: `
        <p>parent starts here!</p>
        <button (click)="showHide()">SHOW-HIDE</button>
            
            <an *ngIf="des" [toChild]='objectToSend' (change)="myValueChange($event);"></an>
            <h1> {{sss}} </h1>
            
        <input type="text" #inp>
        <button (click)="addToArray(inp.value)">SEND to Array</button>
    `,
                    providers: [lol_service_1.LolService],
                    directives: [an_component_1.anComponent]
                }), 
                __metadata('design:paramtypes', [lol_service_1.LolService])
            ], LolComponent);
            exports_1("LolComponent", LolComponent);
        }
    }
});
//# sourceMappingURL=lol.component.js.map