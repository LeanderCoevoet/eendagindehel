import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';

import { ComponentsComponent } from './components.component';
import { InfoComponent } from './info/info.component';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { PartnersComponent } from './partners/partners.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownModule } from 'ngx-countdown';
 

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JWBootstrapSwitchModule,
        VerticalTimelineModule,       
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
