import {Component} from 'angular2/core';
import {LolComponent} from './lol.component'

@Component({
    selector: 'my-app',
    template: `
        <script src="http://vk.com/js/api/openapi.js" type="text/javascript"></script>
        <script type="text/javascript">
            VK.init({
                apiId: 5606143
            });
            
        </script>
        <h1>My First Angular 2 App</h1>
        <lol></lol>
    `,
    directives: [LolComponent]
})
export class AppComponent {
    
 }