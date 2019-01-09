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
import { RegisterModule } from './main/register/register.module';
import { LoginModule } from './main/login/login.module';
import { DashboardModule } from './main/dashboard/dashboard.module';
import { ForgotPasswordModule } from './main/forgot-password/forgot-pasword.module';
import { DocumentsModule } from './main/documents/documents.module';
import { ConnectionsModule } from './main/connections/connections.module';
import { CategoriesModule } from './main/categories/categories.module';

/* Add newly added components routes here */


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
        redirectTo: 'dashboard'
    },
    {
        path       : 'forgot-password',
        redirectTo : 'forgot-password'
    },

    {
        path      : 'documents',
        redirectTo: 'documents'
    },
    {
        path      : 'connections',
        redirectTo: 'connections' 
    }   
   
];

@NgModule({
    declarations: [
        AppComponent,
       
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
        RegisterModule,
        LoginModule,
        ForgotPasswordModule,
        DashboardModule,
        DocumentsModule,
        ConnectionsModule,
        CategoriesModule       
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
