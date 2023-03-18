import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpForm: FormGroup;
 
  msg: string;
  errMsg: string;

  constructor(public signup: UsersService, public router: Router, public pdtSer: ProductsService) {

  }
  ngOnInit(): void {
    $('.toggle').click(() => {
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"

      }, "slow");
    });
    this.signUpForm = new FormGroup({
      'Username': new FormControl('', Validators.required),
      'Password': new FormControl('', Validators.required)

    });
  }

  // get f() {return this.signUpForm.controls;}

  get unameCopy() {
    return this.signUpForm.get('Username')

  }
  get unamePass() {
    return this.signUpForm.get('Password')
  }
  doSignUp() {
    // console.log(this.signUpForm.value);
    this.signup.logInData(this.signUpForm.value).subscribe({
      next: (data: string) => {
        if (data.length === 0) {

          this.msg = 'invalid login'
        } else {

          localStorage.setItem('logged user', data);
          this.pdtSer.updateCart.next('test');
          this.router.navigateByUrl('/');
        }

        //  if(this.signup.isLoggedUser()){
        //  this.pdtSer.updateCart.next('test');
        //  }
      }

    })

    this.signUpForm.reset();
  }

  doReg(formVal: NgForm) {
    this.signup.regInData(formVal.value).subscribe({
      next: (data: string) => {
        //  console.log(data);
        this.msg = data;
        formVal.reset();

      },
      error: (error: any) => {
        console.log(error);
        this.errMsg = 'Something went wrong'
      }
    })

  }
}
