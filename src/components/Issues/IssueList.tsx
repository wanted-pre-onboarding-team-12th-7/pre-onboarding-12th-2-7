import { styled } from 'styled-components'
import { IssueDTO } from '../../apis/issue'
import { useFormContext } from '../../pages/IssuesPage'

function IssueList() {
  const { issueList, isAdvView, handleAdvClick } = useFormContext()
  const ADV_IMG_SRC =
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
  const ADV_IMG_ALT = 'wanted_banner'

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
          {isAdvView(idx) && (
            <AdvImage alt={ADV_IMG_ALT} src={ADV_IMG_SRC} onClick={handleAdvClick} />
          )}
        </div>
      ))}
    </>
  )
}

const IssuesWrapper = styled.div`
  margin: 20px 0;
`

const AdvImage = styled.img`
  cursor: pointer;
`

export default IssueList
