import { CodeBlock, dracula } from "react-code-blocks";
import styled from "styled-components";

function CodeBlockContainer() {
  const codeText = `//지연 호출을 관리할 타이머 선언
let timer: NodeJS.Timeout | null = null;

function useDebounce(
  func: Function,
  wait: number = 0,
  immediate: boolean = false
) {

  const debounced = (...args: any[]) => {
    //즉시 실행 옵션 true 일 경우 타이머 취소하고 즉시 실행하여 retrun
    if (immediate) {
      cancel();
      return new Promise((resolve, reject) => {
        try {
          const result = func(...args);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      });
    }

    // 타이머가 있는 상태에서 새로운 함수 호출이 들어올 때마다 타이머 리셋
    if (timer) {
      cancel();
    }

    // 새로운 타이머 설정 delay밀리초 후에 func함수 호출
    return new Promise((resolve, reject) => {
      timer = setTimeout(() => {
        try {
          const result = func(...args);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      }, wait);
    });
  };

  // 타이머 취소
  const cancel = () => {
    if (!timer) {
      return;
    }
    clearTimeout(timer);
    timer = null;
  };

  return { debounced, cancel };
}
  `;
  return (
    <div>
      <h3>사용된 useDebounce 커스텀 훅</h3>
      <CodeBlockWrapper>
        <CodeBlock
          language="tsx"
          text={codeText}
          showLineNumbers={true}
          theme={dracula}
        />
      </CodeBlockWrapper>
    </div>
  );
}

export default CodeBlockContainer;

const CodeBlockWrapper = styled.div`
  width: 100%;
  font-family: "Fira Code", monospace;
`;
