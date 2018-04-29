import { UserService } from './Services/UserService';
import { UtilService } from './Services/UtilService';
import { AFilterComponent } from './util/filters/a-filter/a-filter.component';
import { ContentTypeInterceptor } from './Interceptors/ContentTypeInterceptor';
import { LoginService } from './Services/LoginService';
import { AuthInterceptor } from './Interceptors/AuthInterceptor';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { TweetFormComponent } from './forms/tweet-form/tweet-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { TweetComponent } from './models/tweet/tweet.component';
import { UserComponent } from './models/user/user.component';
import { TweetUserPairComponent } from './models/tweet-user-pair/tweet-user-pair.component';

import { FeedComponent } from './MainPages/feed/feed.component';
import { TweetPageComponent } from './MainPages/tweet-page/tweet-page.component';
import { UserPageComponent } from './MainPages/user-page/user-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FilteredListComponent } from './util/filtered-list/filtered-list.component';
import { HeaderComponent } from './header/header.component';
import { UserSearchComponent } from './MainPages/user-search/user-search.component';
import { UserSearchFormComponent } from './forms/user-search-form/user-search-form.component';
import { UtilModule } from './UtilModule/util.module';
import { TweetUserListComponent } from './util/tweet-user-list/tweet-user-list.component';
import { FeedService } from './Services/FeedService';
import { TweetService } from './Services/TweetService';
import { PairCardComponent } from './models/pair-card/pair-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TweetFormComponent,
    RegisterFormComponent,
    TweetComponent,
    UserComponent,
    TweetUserPairComponent,
    FeedComponent,
    TweetPageComponent,
    UserPageComponent,
    AFilterComponent,
    FilteredListComponent,
    HeaderComponent,
    UserSearchComponent,
    UserSearchFormComponent,
    TweetUserListComponent,
    PairCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    UtilModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ContentTypeInterceptor,
    multi: true,
  },
  UtilService,
  LoginService,
  FeedService,
  TweetService,
  UserService
],
  bootstrap: [AppComponent],
  entryComponents: [TweetComponent]
})
export class AppModule { }
