import { styled } from 'styled-components'
import { IssueDTO } from '../../apis/issue'
import { useIssueListContext } from '../../hooks/useIssueListContext'
import { ReactNode } from 'react'

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

  return (
    <>
      {issueList?.map((issue: IssueDTO, idx: number) => (
        <div key={issue.number}>
          <IssuesWrapper>
            <div>
              <span>Number: </span>
              {issue.number}
            </div>
            <div>
              <span>Title: </span>
              {issue.title}
            </div>
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
          </IssuesWrapper>
          {isAdPosition(idx, adInterval) && AdElement}
        </div>
      ))}
    </>
  )
}

const IssuesWrapper = styled.div`
  margin: 20px 0;
`

export default IssueList
