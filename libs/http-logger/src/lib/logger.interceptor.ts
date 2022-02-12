import {Inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {HTTP_LOGGER_CONFIG} from './token';
import {HttpLoggerConfig} from './http-logger-config.type';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor(@Inject(HTTP_LOGGER_CONFIG) private config: HttpLoggerConfig) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.group(`Application ${this.config.appName} - log output`);
    console.log(request);
    console.groupEnd();

    return next.handle(request);
  }
}
