import { useState } from 'react'

import { useIssueListContext } from '../../hooks/useIssueListContext'

import * as S from './Issues.styled'

function Select() {
  const { getIssuesApiCall } = useIssueListContext()
  const [localOwner, setLocalOwner] = useState('facebook')
  const [localRepo, setLocalRepo] = useState('react')

  return (
    <S.SelectWrapper>
      <S.FromRow>
        <S.FormTitle>owner: </S.FormTitle>
        <S.FormInput
          type="text"
          value={localOwner}
          onChange={(e) => setLocalOwner(e.target.value)}
        />
      </S.FromRow>
      <S.FromRow>
        <S.FormTitle>repo: </S.FormTitle>
        <S.FormInput type="text" value={localRepo} onChange={(e) => setLocalRepo(e.target.value)} />
      </S.FromRow>
      <S.FormButton type="button" onClick={() => getIssuesApiCall(localOwner, localRepo)}>
        조회
      </S.FormButton>
    </S.SelectWrapper>
  )
}

export default Select
