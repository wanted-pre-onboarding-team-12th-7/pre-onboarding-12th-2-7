import { AiOutlineClose } from 'react-icons/ai'

import { useIssueListContext } from '../../hooks/useIssueListContext'

import * as S from './Issues.styled'

function IssueListError() {
  const { setIsError } = useIssueListContext()

  return (
    <S.ErrorWrapper>
      <S.CloseButton onClick={() => setIsError(false)}>
        <AiOutlineClose></AiOutlineClose>
      </S.CloseButton>
      <p>
        Issue List Get Error!
        <br />
        Please check owner and repo
      </p>
    </S.ErrorWrapper>
  )
}

export default IssueListError
