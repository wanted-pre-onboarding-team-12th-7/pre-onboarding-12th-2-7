import * as S from '../components/Error/Error.styled'

export default function ServerErrorPage() {
  return (
    <S.Wrapper>
      <S.Title>SERVER ERROR</S.Title>
      <S.Button to="/">메인으로 이동</S.Button>
    </S.Wrapper>
  )
}
