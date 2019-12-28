import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscribe } from 'app/model/subscribe.model';
import { FirebaseService} from 'app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

    public subscribeForm: FormGroup;
    public newSubscription: Subscribe;
    constructor(private firebaseService: FirebaseService,
        private formBuilder: FormBuilder,
        private router: Router
        ) {
    }

    ngOnInit() {
        this.newSubscription = new Subscribe();
        this.subscribeForm = this.formBuilder.group({
            firstName: ["", Validators.required], 
            lastName: ["", Validators.required],   
            email: ["", [Validators.required, Validators.email]],   
            phoneNumber: ["", [Validators.required, Validators.minLength(10)]],   
            streetName: ["", Validators.required],
            streetNumber: ["", Validators.required],               
            postalcode: ["", [Validators.required, Validators.pattern("[0-9]{4}")]],               
            city: ["", Validators.required],               
        });
    }
    save() {
        if (this.subscribeForm.valid){
            alert(this.subscribeForm.value);
          /*  this.firebaseService.createSubscribe(this.subscribeForm.value);
            this.router.navigate(['thanks'])*/
        } else {
            this.subscribeForm.markAllAsTouched()
        }
    }
}
