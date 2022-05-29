import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router) { }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if([401, 403].indexOf(err.status) !== -1) {
                this.authService.logout().subscribe({
                    next: data => {
                        this.router.navigate(['/login']);
                    }
                });
            }

            const error = err.error.message || err.statusText;
            return throwError(() => error);
        }));
    }

}