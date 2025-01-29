export function auto (handler) {
  return (req, res, next) =>
    Promise.resolve(handler(req, res, next)).catch(next)
}
