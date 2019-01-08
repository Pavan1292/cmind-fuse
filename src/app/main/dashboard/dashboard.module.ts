import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { DashboardComponent, DocDetailsModal, CategoryModal, UploadModal } from './dashboard.component';
import {CategoryServices} from './Categories.Services';
import {AuthenticationService} from '../login/Authentication.Service';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { DocumentService } from '../documents/documents.service';



const routes = [
    {
        path     : 'dashboard',
        component: DashboardComponent
    }
 
];

@NgModule({
    declarations: [
        DashboardComponent,
        DocDetailsModal,
        CategoryModal,
        UploadModal,
        FileSelectDirective
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        FormsModule,
        FuseSharedModule
    ],

    providers: [CategoryServices, AuthenticationService, DocumentService],
    entryComponents: [DocDetailsModal, CategoryModal, UploadModal]

})
export class DashboardModule
{
}
