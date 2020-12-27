import { User } from '../model/User';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from './../service/auth.service';
import { FormArray } from '@angular/forms';




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  _user: User;
  

  get f() { return this.loginForm.controls; }
  
  constructor(private fb: FormBuilder,private router: Router, private _auth: AuthService) { }

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
    });

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //this._user.username = this.f.username.value;
    //this._user.password = this.f.password.value;
    this._auth.login(this.loginForm.value);
    console.log(this.loginForm.value);
   
  }

  onReset(){
    //this.submitted = false;
    this.loginForm.reset();
  }

  fClearUsername(){
    this.f.username.setValue("");
    console.log("username clear");
  }

  fClearPassword(){
    this.f.password.setValue("");
    console.log("password clear");
  }

}
