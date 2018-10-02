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
                id       : 'settings',
                title    : 'Settings',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'settings',
                url      : '/settings'
               
            }
        ]
    }
];
