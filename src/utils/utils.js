//防抖函数
export function debounce(func, delay = 20) {
  let timer = null;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      //调用函数需要用apply 至于为什么要this，我也不知道
      func.apply(this);
    }, delay);
  };
}
