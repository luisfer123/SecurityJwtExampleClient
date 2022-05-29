import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const principal = this.authService.principalValue;
        let activateRoute: boolean = false;

        if(principal) {
            if(route.data['roles'] && route.data['roles'].length > 0) {
                for(let role of route.data['roles']) {
                    if(principal.roles.indexOf(role) !== -1) {
                        // Principal has the Role to be authorized
                        return true;
                    }
                }
            }

            // Do not have the Role to be authorized
            return false;
        }
        
        // Is not logged in
        this.router.navigate(['/login'], {queryParams: {requestedUrl: state.url}});
        return false;
    }
}