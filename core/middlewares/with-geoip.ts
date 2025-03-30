import { type MiddlewareFactory } from './compose-middlewares';
import { geolocation } from '@vercel/functions';

export const withGeoip: MiddlewareFactory = (next) => {
  return async (request, event) => {
    const { country } = geolocation(request);
    request.headers.set('x-country', country ?? 'ES');

    return next(request, event);
  };
};
