import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


export class RequestLogger implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('== Outgoing request details ==');
        console.log('Request Method: %s | Request Url: %s', req.method, req.url);
        return next.handle(req);
    }
}