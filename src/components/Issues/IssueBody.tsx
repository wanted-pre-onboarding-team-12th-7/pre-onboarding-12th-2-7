import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { styled } from 'styled-components'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { IssueDTO } from '../../apis/issue'

interface BodyType {
  item: IssueDTO
}

function IssueBody({ item }: BodyType) {
  return (
    <Wrapper>
      <ReactMarkdown
        className="markdown"
        components={{
          img: ({ ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt="" />,
          pre: ({ ...props }) => (
            <pre
              style={{
                maxWidth: '100%',
                padding: '8px',
                overflow: 'auto',
                border: '0.5px solid gray',
              }}
              {...props}
            />
          ),
        }}
        rehypePlugins={[rehypeRaw as any, remarkGfm]}
      >
        {item.body}
      </ReactMarkdown>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  .markdown > * {
    all: revert;
  }
`

export default IssueBody
