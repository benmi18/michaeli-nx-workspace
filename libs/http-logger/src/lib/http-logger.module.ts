import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptor } from './logger.interceptor';
import { HttpLoggerConfig } from './http-logger-config.type';
import { HTTP_LOGGER_CONFIG } from './token';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
      multi: true,
    },
  ],
})
export class HttpLoggerModule {
  static init(config: HttpLoggerConfig): ModuleWithProviders<HttpLoggerModule> {
    return {
      ngModule: HttpLoggerModule,
      providers: [
        {
          provide: HTTP_LOGGER_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
