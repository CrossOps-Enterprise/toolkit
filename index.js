import { POSTGRES_ERRORS } from './constants'
import { STATUS_CODES } from 'node:http'

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
