import { CopyBlock, dracula } from "react-code-blocks";
import styled from "styled-components";

function CodeBlock() {
  const codeText = `
  `;
  return (
    <CodeBlockContainer>
      <CopyBlock
        language="tsx"
        text={codeText}
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
    </CodeBlockContainer>
  );
}

export default CodeBlock;

const CodeBlockContainer = styled.div`
  width: 100%;
  max-width: 700px;
  font-family: "Fira Code", monospace;
`;
