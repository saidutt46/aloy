import { Injectable, InjectionToken } from '@angular/core';
import { MatSnackBar } from '@angular/material';

export let NOTIFICATION_SERV_TOKEN = new InjectionToken('NotificationServiceImpl');

export interface INotificationService {
    pop(msg?: any, action?: undefined, duration?: any): void;
}

@Injectable({
    providedIn: 'root'
})
export class SnackBarService implements INotificationService {

    constructor(public snack: MatSnackBar) { }

    public pop(msg?: any, action?: undefined, duration = 3000): void {
        this.snack.open(msg, action, { duration });
    }
}
