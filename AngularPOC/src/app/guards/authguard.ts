import { CanActivate } from '@angular/router';

export class AuthGuard implements CanActivate {
    canActivate() {
        console.log("This is Restricted page");
        return false;
    }
}