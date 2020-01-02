import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Injectable()
export class MyIntercepter implements HttpInterceptor {

    constructor(private adal: MsAdalAngular6Service) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // retrieve resource from endpoints configuration
        const resource = this.adal.GetResourceForEndpoint(request.url);
        if (!resource) {
            return next.handle(request);
        }
        if (!this.adal.isAuthenticated) {
            throw new Error('Cannot send request to registered endpoint if the user is not authenticated.');
        }

        // acquire and inject token
        return this.adal.acquireToken(resource)
            .pipe(
                mergeMap((token: string) => {
                    // clone the request and replace the original headers with
                    // cloned headers, updated with the authorization
                    const authorizedRequest = request.clone({
                        headers: request.headers.set('Authorization', 'Bearer ' + token),
                    });
                    return next.handle(authorizedRequest);
                }
                )
            );
    }

}
