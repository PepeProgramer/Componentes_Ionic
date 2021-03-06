import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    componentes: Componente[] = [{
        icon: 'american-football',
        name: 'Action Sheet',
        redirectTo: '/action-sheet'
    },
        {
            icon: 'appstore',
            name: 'Alert',
            redirectTo: '/alert'
        },
        {
            icon: 'beaker',
            name: 'Avatar',
            redirectTo: '/avatar'
        },
        {
            icon: 'radio-button-on',
            name: 'botones y Router',
            redirectTo: '/botones'
        },
        {
            icon: 'card',
            name: 'Cards',
            redirectTo: '/card'
        },
        {
            icon: 'checkmark-circle-outline',
            name: 'Checkbox',
            redirectTo: '/check'
        },
        {
            icon: 'calendar',
            name: 'Datetime',
            redirectTo: '/datetime'
        },
        {
            icon: 'car',
            name: 'Fabs',
            redirectTo: '/fab'
        },
        {
            icon: 'grid',
            name: 'Grid',
            redirectTo: '/grid'
        },
        {
            icon: 'infinite',
            name: 'Infinite scroll',
            redirectTo: '/infinite-scroll'
        }, {
            icon: 'hammer',
            name: 'Input - Forms',
            redirectTo: '/input'
        },
        {
            icon: 'list',
            name: 'Listas - Sliding',
            redirectTo: '/list'
        }];

    constructor() {
    }

    ngOnInit() {
    }

}

interface Componente {
    icon: string;
    name: string;
    redirectTo: string;

}
