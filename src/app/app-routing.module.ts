import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { UserPageComponent } from './MainPages/user-page/user-page.component';
import { TweetPageComponent } from './MainPages/tweet-page/tweet-page.component';
import { FeedComponent } from './MainPages/feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { UserSearchComponent } from './MainPages/user-search/user-search.component';
//import { AuthGuard } from './Services/Guards/AuthGuard';

const appRoutes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: '',
      //canActivate: [AuthGuard],
      children: [
        { path: 'feed', component: FeedComponent },
        { path: 'tweet/:id', component: TweetPageComponent},
        { path: 'user/:username', component: UserPageComponent},
        { path: 'user/search/:username', component: UserSearchComponent}
      ]
    }
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            //{ enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}