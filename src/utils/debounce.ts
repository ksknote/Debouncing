export default function debounce(
    func: Function,
    wait: number,
    immediate: boolean
  ) {
    let timer: NodeJS.Timeout | null = null; //지연 호출을 관리할 타이머 선언
  
    const debounced = (...args: any[]) => {
      if (timer) {
        cancel(); //새로운 함수 호출이 들어올 때마다 타이머 리셋
      }
      if (immediate) {
        cancel();
        return Promise.resolve(func(...args));
      }
  
      return new Promise((resolve) => {
        timer = setTimeout(() => {
          resolve(func(...args)); //새로운 타이머 설정 delay밀리초 후에 func함수 호출
        }, wait);
      });
    };
  
    const cancel = () => {
      if (!timer) return;
      clearTimeout(timer); //새로운 함수 호출이 들어올 때마다 타이머 리셋
      timer = null;
    };
    return { debounced, cancel };
  }
  