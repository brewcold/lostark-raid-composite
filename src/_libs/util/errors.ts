import * as Sentry from '@sentry/nextjs';

export class LostarkAPIError extends Error {
  status?: number;
  response: unknown;
  json: () => any;

  constructor(error: Response) {
    super(error.statusText);

    const status = (this.status = error.status || 0);
    let name = 'Lostark';

    Sentry.captureException(error);

    this.response = error;
    this.status = status;
    this.json = error.json.bind(error);

    switch (status) {
      case 400:
        this.message = 'Bad Request';
        name += 'BadRequestError';
        break;
      case 401:
        this.message = 'Unauthorized';
        name += 'UnauthorizedError';
        break;
      case 404:
        this.message = 'Not Found';
        name += 'NotFoundError';
        break;
      default:
        this.message = 'Unknown Error';
        name += 'UnknownError';
        break;
    }
  }
}
