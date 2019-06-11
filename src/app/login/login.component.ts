import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';
import { CustomValidators } from '../custom-validators';


@Component({
 selector: 'login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 firstName: FormControl;
 registerForm: FormGroup;
 submitted = false;
 value;
 elength = true;
 eucase = true;
 elcase = true;
 esymbol = true;
 enum = true;
 enablebutton;
 constructor(public router: Router, public formBuilder: FormBuilder) {

 }

 ngOnInit() {
  this.registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    password: [
      null,
      Validators.compose([
        Validators.required,
        CustomValidators.patternValidator(/\d/, {
          hasNumber: true
        }),
        Validators.minLength(8)
      ])
    ],
 });
 }
 get f() { return this.registerForm.controls; }

 store() {
   this.submitted = true;
   if (this.registerForm.invalid) {
           return;
       }

   console.log(this.registerForm.get('firstName').value);
   localStorage.setItem('username', this.registerForm.get('firstName').value);
   this.router.navigateByUrl('display');
}

}
