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
            LolComponent = (function () {
                function LolComponent(lolService) {
                    this.objectToSend = {
                        a: 0,
                        b: []
                    };
                    this.des = true;
                    this.lolService = lolService;
                    this.objectToSend.a = 1;
                    this.objectToSend.b = this.lolService.getLol();
                }
                LolComponent.prototype.myValueChange = function (olo) {
                    console.log(olo);
                    this.objectToSend = olo.value;
                };
                Object.defineProperty(LolComponent.prototype, "sss", {
                    get: function () {
                        console.log('get sss ' + this.objectToSend.a);
                        return this.objectToSend.a;
                    },
                    enumerable: true,
                    configurable: true
                });
                LolComponent.prototype.addToArray = function (myInput) {
                    this.lolService.addLol(myInput);
                };
                LolComponent.prototype.showHide = function () {
                    this.des = !this.des;
                };
                LolComponent = __decorate([
                    core_1.Component({
                        selector: 'lol',
                        template: "\n        <p>parent starts here!</p>\n        <button (click)=\"showHide()\">SHOW-HIDE</button>\n            \n            <an *ngIf=\"des\" [toChild]='objectToSend' (change)=\"myValueChange($event);\"></an>\n            <h1> {{sss}} </h1>\n            \n        <input type=\"text\" #inp>\n        <button (click)=\"addToArray(inp.value)\">SEND to Array</button>\n    ",
                        providers: [lol_service_1.LolService],
                        directives: [an_component_1.anComponent]
                    }), 
                    __metadata('design:paramtypes', [lol_service_1.LolService])
                ], LolComponent);
                return LolComponent;
            }());
            exports_1("LolComponent", LolComponent);
        }
    }
});
//# sourceMappingURL=lol.component.js.map