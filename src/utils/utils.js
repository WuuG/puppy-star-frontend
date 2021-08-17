/**
 * 防抖函数
 * @func 需要进行防抖的函数
 * @delay 防抖的延迟时间
 */
export const debounce = (func, delay = 500) => {
  let timer;
  return function () {
    let args = arguments;
    if (timer) {
      clearTimeout(timer)
    }
    let callNow = !timer;
    timer = setTimeout(() => {
      timer = null
    }, delay);
    if (callNow) func.apply(this, args);
  }
}