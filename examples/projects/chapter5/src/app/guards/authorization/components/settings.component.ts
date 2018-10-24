import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-settings',
    template: `
    <div style="display: flex; flex-direction: column; align-items: center; border: 1px dashed #333; padding: 10px;">
        <h1>Settings</h1>
        <img width="71px" src="assets/settings.png">
    </div>
    `
})
export class SettingsComponent {

}
