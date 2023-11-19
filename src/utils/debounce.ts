let timer: NodeJS.Timeout | null = null; //지연 호출을 관리할 타이머 선언

export default function debounce(
  func: Function,
  wait: number,
  immediate: boolean
) {
  const debounced = (...args: any[]) => {
    console.log(timer);
    if (timer) {
      console.log("타이머 있음");
      cancel(); //새로운 함수 호출이 들어올 때마다 타이머 리셋
      console.log("타이머 있음 리셋");
    }
    if (immediate) {
      cancel();
      return Promise.resolve(func(...args));
    }

    return new Promise((resolve) => {
      console.log("타이머 설정");
      timer = setTimeout(() => {
        resolve(func(...args)); //새로운 타이머 설정 delay밀리초 후에 func함수 호출
        console.log("함수 실행");
      }, wait);
    });
  };

  const cancel = () => {
    console.log("캔슬메서드 실행");
    if (!timer) return;
    console.log("클리어 타임아웃");
    clearTimeout(timer); //새로운 함수 호출이 들어올 때마다 타이머 리셋
    timer = null;
  };
  return { debounced, cancel };
}
