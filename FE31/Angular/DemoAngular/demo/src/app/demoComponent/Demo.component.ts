import {Component} from '@angular/core';

// decorator của typescript
// khai báo DemoComponent là 1 component chứ không phải class thường
@Component({
    selector: 'app-demo',
    // template: ` 
    // <h1>Demo Component</h1>
    // <span>this is a demo component</span>
    // `,
    templateUrl: './Demo.component.html',
    // styles: [`
    //     h1{
    //         color: red;
    //         font-size: 40px;
    //     }
    // `]
    styleUrls: ['./Demo.component.scss'],
})
export class DemoComponent{}