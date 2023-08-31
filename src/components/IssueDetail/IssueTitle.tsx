import { IssueDetailType } from './type'

import * as S from './IssueDetail.styled'

function IssueTitle({ item }: IssueDetailType) {
  return (
    <S.OuterWrapper>
      <S.NumberBadge>#{item.number}</S.NumberBadge>
      <S.Title>{item.title}</S.Title>

      <S.InnerWrapper>
        <S.Avatar src={item.user.avatar_url} />
        <S.NameAndDate>
          <b>{item.user.login}</b> opened this issue on {item.created_at.slice(0, 10)}
        </S.NameAndDate>

        <S.Comment>{item.comments} comments</S.Comment>
      </S.InnerWrapper>

      <S.HR />
    </S.OuterWrapper>
  )
}

export default IssueTitle
