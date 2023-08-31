import { styled } from 'styled-components'
import { useIssueListContext } from '../../hooks/useIssueListContext'

function Select() {
  const { getIssuesApiCall, owner, setOwner, repo, setRepo } = useIssueListContext()

  return (
    <Wrapper>
      <div>
        <span>owner: </span>
        <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
      </div>
      <div>
        <span>repo: </span>
        <input type="text" value={repo} onChange={(e) => setRepo(e.target.value)} />
      </div>
      <button type="button" onClick={getIssuesApiCall}>
        조회
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  margin: 20px 0;
`

export default Select
