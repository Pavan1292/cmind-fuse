import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableModule, MatTableDataSource, MatPaginatorModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { DocumentsComponent} from './documents.component';
import { DocumentService } from './documents.service';
import { AuthenticationService } from '../login/Authentication.Service';
import { HttpModule } from '@angular/http';

const routes = [
    {
        path     : 'documents',
        component: DocumentsComponent
    },
];

@NgModule({
    declarations: [
        DocumentsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        FuseSharedModule,
        MatPaginatorModule,
        HttpModule,
    ],
    providers: [DocumentService , AuthenticationService ],
    entryComponents: [ ]
})
export class DocumentsModule
{
}
