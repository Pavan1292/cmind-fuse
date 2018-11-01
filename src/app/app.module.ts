import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { RegisterModule } from './main/register/register.module';
import { LoginModule } from './main/login/login.module';
import { DashboardModule } from './main/dashboard/dashboard.module';
import { ForgotPasswordModule } from './main/forgot-password/forgot-pasword.module';
import { ConnectionsComponent } from './main/connections/connections.component';



const appRoutes: Routes = [

    {
        path      : '**',
        redirectTo: 'login'
    },

    {
        path      : 'dashboard',
        redirectTo: 'dashboard'
    },
    {
        path      : 'register',
        redirectTo: 'register'

    },
    {
        path      : 'settings',
        redirectTo: 'sample'
    },
    {
        path       : 'forgot-password',
        redirectTo : 'forgot-password'
    },
    {
        path       : 'connections',
        redirectTo : 'connections'
    }

   
];

@NgModule({
    declarations: [
        AppComponent,
        ConnectionsComponent,      
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        RegisterModule,
        LoginModule,
        DashboardModule,
        ForgotPasswordModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
