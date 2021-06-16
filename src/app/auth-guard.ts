import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from './shared/service/loader.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private readonly router: Router, private loaderService: LoaderService) {
    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        const user = localStorage.getItem('aiwUserData');
        if (!user) {
            this.router.navigate(['login']);
            return false;
        } else {
            return true;
        }
    }
}
