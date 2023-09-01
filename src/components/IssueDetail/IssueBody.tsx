import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { IssueDetailType } from './type'

import * as S from './IssueDetail.styled'

function IssueBody({ item }: IssueDetailType) {
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  )
}

export default IssueBody
