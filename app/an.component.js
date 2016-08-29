System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var anComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            anComponent = (function () {
                function anComponent() {
                    this.counterChange = new core_1.EventEmitter();
                    this.str = 'Child Part';
                }
                anComponent.prototype.sendTop = function () {
                    this.toChild.a++;
                    this.counterChange.emit({
                        value: {
                            a: this.toChild.a,
                            b: this.toChild.b
                        }
                    });
                };
                Object.defineProperty(anComponent.prototype, "zzz", {
                    get: function () {
                        return this._zzz;
                    },
                    set: function (zzz) {
                        this._zzz = this.toChild.b;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Output('change'), 
                    __metadata('design:type', Object)
                ], anComponent.prototype, "counterChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], anComponent.prototype, "toChild", void 0);
                anComponent = __decorate([
                    core_1.Component({
                        selector: 'an',
                        template: "\n        <h3>{{str}}</h3>\n        <ul>\n            <li *ngFor=\"#el of toChild.b; #idx = index\">\n                {{el}}\n            </li>\n        </ul>\n        <button (click)=\"sendTop()\">send vverh!</button>\n        <h2>{{toChild.a}}</h2>\n        <h3>{{str}}</h3>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], anComponent);
                return anComponent;
            }());
            exports_1("anComponent", anComponent);
        }
    }
});
//# sourceMappingURL=an.component.js.map