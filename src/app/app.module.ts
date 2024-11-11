import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, MicrosoftLoginProvider } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('1051565301045-varl9sqoris71n985upj02dvn8mffdp8.apps.googleusercontent.com',
              {
                // scopes : environment.auth.scopes,
                prompt: 'select_account'   // '' | 'none' | 'consent' |  'select_account'
              }),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('540137445389745')
          },
          // {
          //   id: XLoginProvider.PROVIDER_ID,  // Replace with actual provider class if available
          //   provider: new XLoginProvider('YOUR_TWITTER_CLIENT_ID')
          // },
          {
            id: MicrosoftLoginProvider.PROVIDER_ID,
            provider: new MicrosoftLoginProvider('YOUR_MICROSOFT_CLIENT_ID')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
