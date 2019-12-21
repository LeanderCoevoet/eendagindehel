import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ComponentsComponent } from './components.component';
import { InfoComponent } from './info/info.component';
import { PartnersComponent } from './partners/partners.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownModule } from 'ngx-countdown';
 

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        CountdownModule 
    ],
    declarations: [
        InfoComponent,
        ComponentsComponent,
        PartnersComponent,
        CountdownComponent,   
],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
