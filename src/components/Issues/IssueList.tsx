import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { IssueDTO } from '../../apis/issue'
import { useIssueListContext } from '../../hooks/useIssueListContext'

import * as S from './Issues.styled'

interface IssueListProps {
  AdElement?: ReactNode | null
  adInterval: number
}

const isAdPosition = (idx: number, adInterval: number) => {
  if (adInterval <= 0) throw Error('Wrong adInterval')
  if (adInterval === 1) return true
  return (idx + 1) % (adInterval - 1) === 0
}

function IssueList({ AdElement, adInterval }: IssueListProps) {
  const { issueList } = useIssueListContext()
  const navigate = useNavigate()

  return (
    <S.IssueListWrapper>
      {issueList?.map((issue: IssueDTO, idx: number) => (
        <div
          key={issue.number}
          onClick={() => {
            navigate(`/issue/${issue.number}`)
          }}
        >
          <S.IssueListItem>
            <S.IssueListItemNumber>
              <span>Number: </span>
              {issue.number}
            </S.IssueListItemNumber>
            <S.IssueListItemTitle>
              <span>Title: </span>
              {issue.title}
            </S.IssueListItemTitle>
            <S.IssueListItemUserInfo>
              <div>
                <span>User: </span>
                {issue?.user?.login}
              </div>
              <div>
                <span>Created date: </span>
                {issue.created_at}
              </div>
              <div>
                <span>Comments count: </span>
                {issue.comments}
              </div>
            </S.IssueListItemUserInfo>
          </S.IssueListItem>

          {isAdPosition(idx, adInterval) && <S.IssueListAdBox>{AdElement}</S.IssueListAdBox>}
        </div>
      ))}
    </S.IssueListWrapper>
  )
}

export default IssueList
