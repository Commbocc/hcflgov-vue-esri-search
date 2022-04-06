/* debounce */
export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout = 500
) {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}
