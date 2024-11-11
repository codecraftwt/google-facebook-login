import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { SocialAuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider, } from '@abacritt/angularx-social-login';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  user: SocialUser;
  loggedIn: boolean | undefined;
  isLoggedin?: boolean = undefined;
  loginForm!: FormGroup;
  faGoogle = faGoogle;
  faFacebook = faFacebook;

  constructor(private router: Router, private authService: AuthService, private ssoauthService: SocialAuthService) {
  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      id: new FormControl(),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })

    this.ssoauthService.authState.subscribe((user) => {
      console.log(user, 'user');
      this.user = user;
      this.loggedIn = (user != null);
      this.isLoggedin = user != null;
      console.log("Login User = " + this.user.name + this.user.email);
    });

    this.ssoauthService.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.loggedIn = true;
        console.log('Logged in user:', user);
        this.router.navigate(['/admin/dashboard']);
      } else {
        console.log('No user is logged in');
        this.loggedIn = false;
        this.isLoggedin = false;
      }
    });
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: '1051565301045-varl9sqoris71n985upj02dvn8mffdp8.apps.googleusercontent.com',
      callback: (response: any) => this.handleGoogleSignIn(response)
    });
    google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline", size: "large" }
    );
  }

  handleGoogleSignIn(response: any) {
    console.log("Google login success", response);
    this.router.navigate(['/admin/dashboard']);
  }

  signInWithFB(): void {
    if (this.ssoauthService) {
      this.ssoauthService.signIn(FacebookLoginProvider.PROVIDER_ID)
        .then(user => {
          console.log('Facebook login success', user);
          this.router.navigate(['/admin/dashboard']);
        }).catch(error => {
          console.error('Facebook login error', error);
        });
    } else {
      console.error('SocialAuthService not initialized');
    }
  }

  signWithGoogle(): void {
    console.log(this.ssoauthService, "Attempting Google sign-in...");
    if (this.ssoauthService) {
      this.ssoauthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
        console.log('Google login success', user);
        this.router.navigate(['/admin/dashboard']);
      }).catch(error => {
        console.error('Google login error', error);
      });
    } else {
      console.error('SocialAuthService not initialized');
    }
  }

  signOut(): any {
    this.ssoauthService.signOut();
  }

  refreshToken(): void {
    this.ssoauthService.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID);
  }

  onLogin(event: Event): void {
    event.preventDefault();
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log("Form credentials:", username, password);
    }
  }

  public get f() { return this.loginForm.controls; }

  onReset() {
    this.loginForm.reset();
  }

}
