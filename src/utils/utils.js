/**
 * 防抖函数
 * @func 需要进行防抖的函数
 * @delay 防抖的延迟时间
 */
export function debounce(func, delay = 20) {
  let timer = null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this);
    }, delay);
  };
}
