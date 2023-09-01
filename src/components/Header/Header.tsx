import { useIssueListContext } from '../../hooks/useIssueListContext'

import * as S from './Header.styled'

export default function Header() {
  const { owner, repo } = useIssueListContext()
  return (
    <S.Header>
      <h1>
        {owner} / {repo}
      </h1>
    </S.Header>
  )
}
