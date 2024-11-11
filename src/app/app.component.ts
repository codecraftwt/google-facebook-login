import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider, } from '@abacritt/angularx-social-login';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  faFacebook = faFacebook;
  faGoogle = faGoogle;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = user != null;
    //   console.log(this.socialUser);
    // });
  }

  onLogin(data: any) { }

  signWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}