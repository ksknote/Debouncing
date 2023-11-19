import { CopyBlock, dracula } from "react-code-blocks";
import styled from "styled-components";

function CodeBlockContainer() {
  const codeText = `
  function useDebounce(func: Function, wait: number, immediate?: boolean) {
  
    const debounced = (...args: any[]) => {
      //즉시 실행 옵션 true 일 경우 타이머 취소하고 즉시 실행하여 retrun
      if (immediate) {
        cancel();
        return Promise.resolve(func(...args));
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
  
  `;
  return (
    <CodeBlockWrapper>
      <CopyBlock
        language="tsx"
        text={codeText}
        showLineNumbers={true}
        theme={dracula}
      />
    </CodeBlockWrapper>
  );
}

export default CodeBlockContainer;

const CodeBlockWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  font-family: "Fira Code", monospace;
`;
