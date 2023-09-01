import { useIssueListContext } from '../../hooks/useIssueListContext'

import * as S from './Issues.styled'

function Select() {
  const { getIssuesApiCall, owner, setOwner, repo, setRepo } = useIssueListContext()

  return (
    <S.SelectWrapper>
      <S.FromRow>
        <S.FormTitle>owner: </S.FormTitle>
        <S.FormInput type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
      </S.FromRow>
      <S.FromRow>
        <S.FormTitle>repo: </S.FormTitle>
        <S.FormInput type="text" value={repo} onChange={(e) => setRepo(e.target.value)} />
      </S.FromRow>
      <S.FormButton type="button" onClick={() => getIssuesApiCall('select')}>
        조회
      </S.FormButton>
    </S.SelectWrapper>
  )
}

export default Select
