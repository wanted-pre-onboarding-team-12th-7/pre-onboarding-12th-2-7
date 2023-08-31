import { styled } from 'styled-components'

import { IssueDTO } from '../../apis/issue'
import { flex } from '../../styles/constants/flex'
import { fontSizes } from '../../styles/constants/fontSize'

interface TitleType {
  item: IssueDTO
}

function IssueTitle({ item }: TitleType) {
  return (
    <OuterWrapper>
      <NumberBadge>#{item.number}</NumberBadge>
      <Title>{item.title}</Title>

      <InnerWrapper>
        <Avatar src={item.user.avatar_url} />
        <NameAndDate>
          <b>{item.user.login}</b> opened this issue on {item.created_at.slice(0, 10)}
        </NameAndDate>

        <Comment>{item.comments} comments</Comment>
      </InnerWrapper>

      <HR />
    </OuterWrapper>
  )
}

const OuterWrapper = styled.div`
  ${flex.flexStart}
  flex-direction: column;
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const HR = styled.hr`
  width: 100% !important;
  margin: 16px 0;
`

const NumberBadge = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 4px 8px;
  border-radius: 100px;
  background-color: black;
  color: white;
`

const Title = styled.p`
  margin: 12px 0;
  font-size: ${fontSizes.large};
`

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 100%;
`

const NameAndDate = styled.p`
  margin-left: 4px;
  color: gray;

  b {
    color: black;
  }
`

const Comment = styled.p`
  margin-left: auto;
`

export default IssueTitle
