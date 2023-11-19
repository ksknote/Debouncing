import { CopyBlock, dracula } from "react-code-blocks";
import styled from "styled-components";

function CodeBlockContainer() {
  const codeText = `
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
