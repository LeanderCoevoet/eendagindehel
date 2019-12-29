import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from "ng2-date-countdown";
import { ComponentsComponent } from './components.component';
import { InfoComponent } from './info/info.component';
import { PartnersComponent } from './partners/partners.component';
import { countdownCustomComponent } from './countdownCustom/countdownCustom.component';
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        CountdownModule ,
        NgVerticalTimelineModule
    ],
    declarations: [
        InfoComponent,
        ComponentsComponent,
        PartnersComponent,
        countdownCustomComponent,   
],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
