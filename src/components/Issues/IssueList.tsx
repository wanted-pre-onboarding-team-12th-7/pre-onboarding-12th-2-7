import { styled } from 'styled-components'
import { IssueDTO } from '../../apis/issue'
import { useFormContext } from '../../pages/IssuesPage'

function IssueList() {
  const { issueList } = useFormContext()

  return (
    <>
      {issueList?.map((issue: IssueDTO, idx: number) => (
        <div key={idx}>
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
              {issue.user.login}
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
        </div>
      ))}
    </>
  )
}

const IssuesWrapper = styled.div`
  margin: 20px 0;
`

export default IssueList
