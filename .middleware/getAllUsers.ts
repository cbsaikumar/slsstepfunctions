'use strict';

import { Context } from 'aws-lambda';
    
type MiddlewareContext<TResult = any> = Context & { end: () => void, prev: TResult };
type Handler<TEvent = any, TResult = any> = (
  event: TEvent,
  context: MiddlewareContext,
) => Promise<TResult>;
    
import * as src_controllers_user from '../src/controllers/user';

export const handler: Handler = (event, context) => {
  let end = false;
  context.end = () => end = true;

  const wrappedHandler = (handler: Handler) => (prev: any): Promise<any> => {
    if (end) return prev;
    context.prev = prev;
    return handler(event, context);
  };

  return Promise.resolve()
    .then(wrappedHandler(src_controllers_user.getAllUsers.bind(src_controllers_user)));
};