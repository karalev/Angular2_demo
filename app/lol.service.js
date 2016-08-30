System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LolService;
    return {
        setters:[],
        execute: function() {
            class LolService {
                constructor() {
                    this.mas = ['Boris the Blade', 'Doug the Head', 'Tommy'];
                }
                getLol() {
                    console.log(this.mas);
                    return this.mas;
                }
                addLol(str) {
                    this.mas.push(str);
                    console.log(str);
                    console.log(this.mas);
                }
            }
            exports_1("LolService", LolService);
        }
    }
});
//# sourceMappingURL=lol.service.js.map