System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LolService;
    return {
        setters:[],
        execute: function() {
            LolService = (function () {
                function LolService() {
                    this.mas = ['olo', 'aza', 'wawa', 'pish'];
                }
                LolService.prototype.getLol = function () {
                    console.log(this.mas);
                    return this.mas;
                };
                LolService.prototype.addLol = function (str) {
                    this.mas.push(str);
                    console.log(str);
                    console.log(this.mas);
                };
                return LolService;
            }());
            exports_1("LolService", LolService);
        }
    }
});
//# sourceMappingURL=lol.service.js.map