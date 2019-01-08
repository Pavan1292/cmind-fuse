import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard'
               
            },
            
          
            {
                id       : 'documents',
                title    : 'Documents',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'bookmark',
                url      : '/documents'
               
            },

            {
                id       : 'conections',
                title    : 'Connections',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'link',
                url      : '/connections'
               
            },
            {
                id       : 'categories',
                title    : 'Categories',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'category',
                url      : '/categories'
               
            },
            {
                id       : 'settings',
                title    : 'Settings',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'settings',
                url      : '/settings'
               
            },
            

            
            
        ]
    }
];
