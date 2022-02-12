import { InjectionToken } from '@angular/core';
import { HttpLoggerConfig } from './http-logger-config.type';

export const HTTP_LOGGER_CONFIG = new InjectionToken<HttpLoggerConfig>(
  'Http Logger'
);
