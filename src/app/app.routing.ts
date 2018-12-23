import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PictureComponent } from './picture/picture.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ThanksComponent } from './thanks/thanks.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pictures', component: PictureComponent },
    { path: 'whoarewe', component: WhoareweComponent },
    { path: 'subscribe', component: SubscriptionComponent },
    { path: 'thanks', component: ThanksComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {
}
