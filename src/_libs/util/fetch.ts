import * as Sentry from '@sentry/nextjs';
import { LostarkAPIError } from './errors';

export const http = {
  GET: <Res>(url: string, headers?: HeadersInit) =>
    Sentry.startSpan(
      {
        name: 'GET',
        op: url,
      },
      async () => f<undefined, Res>(url, 'GET', headers)
    ),
  POST: <Req, Res>(url: string, headers?: HeadersInit, body?: Req) =>
    Sentry.startSpan(
      {
        name: 'POST',
        op: url,
      },
      async () => await f<Req, Res>(url, 'POST', headers, body)
    ),
  PUT: <Req, Res>(url: string, headers?: HeadersInit, body?: Req) =>
    Sentry.startSpan(
      {
        name: 'PUT',
        op: url,
      },
      async () => await f<Req, Res>(url, 'PUT', headers, body)
    ),
  DELETE: <Res>(url: string, headers?: HeadersInit) =>
    Sentry.startSpan(
      {
        name: 'DELETE',
        op: url,
      },
      async () => await f<undefined, Res>(url, 'DELETE', headers)
    ),
};

async function f<Req, Res = unknown>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  headers?: HeadersInit,
  body?: Req
): Promise<Res> {
  const response = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
  if (!response.ok) {
    throw new LostarkAPIError(response);
  } else {
    const data = await response.json();

    if (typeof data === 'undefined' || data === null) {
      throw new LostarkAPIError(response);
    } else return data;
  }
}
