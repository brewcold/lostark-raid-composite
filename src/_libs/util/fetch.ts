import * as Sentry from '@sentry/nextjs';
import env from 'src/env';
import { LostarkAPIError } from './errors';

export const http = {
  GET: <Res>(url: string) =>
    Sentry.startSpan(
      {
        name: 'GET',
        op: url,
      },
      async () => await f<undefined, Res>(url, 'GET')
    ),
  POST: <Req, Res>(url: string, body: Req) =>
    Sentry.startSpan(
      {
        name: 'POST',
        op: url,
      },
      async () => await f<Req, Res>(url, 'POST', body)
    ),
  PUT: <Req, Res>(url: string, body: Req) =>
    Sentry.startSpan(
      {
        name: 'PUT',
        op: url,
      },
      async () => await f<Req, Res>(url, 'PUT', body)
    ),
  DELETE: <Res>(url: string) =>
    Sentry.startSpan(
      {
        name: 'DELETE',
        op: url,
      },
      async () => await f<undefined, Res>(url, 'DELETE')
    ),
};

async function f<Req, Res = unknown>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  body?: Req
): Promise<Res> {
  const isServer = typeof window !== 'undefined';
  const headers = isServer
    ? new Headers({ Authorization: `bearer ${env.larkKey}`, accept: 'application/json' })
    : new Headers({ accept: 'application/json' });

  try {
    const response = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
    if (!response.ok) throw new LostarkAPIError(response);

    return await response.json();
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
}
