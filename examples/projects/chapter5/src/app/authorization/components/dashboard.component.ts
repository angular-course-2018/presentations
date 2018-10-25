import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `
        <div style="display: flex; flex-direction: column; align-items: center; border: 1px dashed #333; padding: 10px;">
            <h1>Dashboard Page</h1>
            <img  width="100px" src="assets/dashboard.png">
        </div>
    `
})
export class DashboardComponent {

}
