import { Component, OnInit, Input, ViewChild, AfterViewInit  } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ToastrService, Toast } from 'ngx-toastr';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder } from '@angular/forms';
import { loginService, GetuserNameService } from '../../services/login/login.service';
import { Key } from 'protractor';
import { SignupService } from '../../services/signup/signup.service';


@Component({
  selector: 'app-login',
  templateUrl: './login/login.component.html',
  styleUrls: ['./login/login.component.css'], 
})
export class LoginComponent {

  constructor(private _loginservice: loginService, private _GetuserNameService: GetuserNameService, private _bottomSheet: MatBottomSheet, private bottomSheetRef: MatBottomSheetRef<LoginComponent>, private toastr: ToastrService) { }
  public User = [];
  public errorMsg; 
  login(user):void{   
    this._loginservice.CheckUser(user.emailId,user.Password)    
      .subscribe(data => {
        this.User.push(data);     
        this.User = JSON.parse(this.User[0]);       
        for (let key in this.User) {
          if(this.User['Status']== '0')
          {
            this.toastr.error('Username and password is Invalid','',{             
              positionClass:'toast-bottom-right',
              timeOut: 2000,
            });   
            this.dismissBottomSheet();
            return;
          }
          else{
            this.setUserName(user.emailId)                    
          }    
          sessionStorage.setItem(key, this.User[key]);
          this.dismissBottomSheet();
        }     
      }, error => this.errorMsg = error)
  }
  setUserName(value) {
    this._GetuserNameService.setUser(value);
  }
  openLink(event: MouseEvent): void {
    this.dismissBottomSheet();
  }
  openBottomSignupSheet(): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    this._bottomSheet.open(SignupComponent);
  }
  dismissBottomSheet(): void{
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}




@Component({
  selector: 'app-signup',
  templateUrl: './signup/signup.component.html',
  styleUrls: ['./signup/signup.component.css']
})
export class SignupComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<SignupComponent>, private _signupService: SignupService, private toastr: ToastrService) {  }
  status=[];
  signup(user): void {
    this._signupService.SignupUser(user.name, user.emailId, user.cpassword)
      .subscribe(data => {
        this.status.push(data);
        this.status = JSON.parse(this.status[0]);
        for (let key in this.status) {
          if (this.status['Status'] == '0') {
            this.toastr.error('EmailId is not valid', '', {
              positionClass: 'toast-bottom-right',
              timeOut: 2000,
            });
            this.dismissBottomSheet();
            return;
          }
          else
          {
            this.toastr.success('Registration completed', '', {
              positionClass: 'toast-bottom-right',
              timeOut: 2000,
            });
            this.dismissBottomSheet();
            return;
          }
        }
      });
    }
  dismissBottomSheet(): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
  openLink(event: MouseEvent): void {
    this.dismissBottomSheet();
  }
}






@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit, AfterViewInit {

  public userLoginStatus= false;
  constructor(private bottomSheet: MatBottomSheet, private _GetuserNameService: GetuserNameService) { }
  userName;
  logout(){
    debugger;
     window.sessionStorage.setItem('Status','0');
     this.userLoginStatus = false;
    this.userName ="Login/Signup"
  }
  ngAfterViewInit() {
    this._GetuserNameService.getUser$.subscribe(
      data => {
        if(data.length != 0)
        {
          this.userName = data;
          this.userLoginStatus = true;   
        }
        else
        {
          this.userLoginStatus= false;          
        }        
      });
  }
  ngOnInit() {
    this.userName = "Login/Signup"
  }
  openBottomSheet(): void {
    this.bottomSheet.open(LoginComponent);
  }
}