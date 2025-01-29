import { POSTGRES_ERRORS } from './constants.js'
import { STATUS_CODES } from 'node:http'
import { auto } from './lib.js'

export function handleExpressError (err, req, res, next) {
  /* This is to ensure we dont send the headers again because it fails the HTTP request in express server */
  if (res.headersSent) return next(err)

  let statusCode = err.status || err.statusCode || err.code || 500
  if (statusCode === 'ETIMEDOUT') statusCode = 408
  const httpError = STATUS_CODES[statusCode]
  const postgresError = POSTGRES_ERRORS[statusCode]

  const errorMessage = err.message || httpError || postgresError || 'Internal Error'

  res.status(httpError ? statusCode : 500).json({ error: err, message: errorMessage })
}

export function autoCatch (handlers) {
  if (typeof handlers === 'function') return auto(handlers)

  return Object.keys(handlers).reduce((autoHandlers, key) => {
    autoHandlers[key] = auto(handlers[key])
    return autoHandlers
  }, {})
}
