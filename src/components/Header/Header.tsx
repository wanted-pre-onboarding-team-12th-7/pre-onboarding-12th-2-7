import { useEffect, useState } from 'react'

import { useIssueListContext } from '../../hooks/useIssueListContext'

import * as S from './Header.styled'

export default function Header() {
  const { owner, repo, isSelected } = useIssueListContext()
  const [headerOwner, setHeaderOwner] = useState<string>(owner)
  const [headerRepo, setHeaderRepo] = useState<string>(repo)

  useEffect(() => {
    setHeaderOwner(owner)
    setHeaderRepo(repo)
  }, [isSelected])

  return (
    <S.Header>
      <h1>
        {headerOwner} / {headerRepo}
      </h1>
    </S.Header>
  )
}
