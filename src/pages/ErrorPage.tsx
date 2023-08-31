import * as S from '../components/Error/Error.styled'

export default function ErrorPage() {
  return (
    <S.Wrapper>
      <S.Title>404 Not Found</S.Title>
      <S.Button to="/">메인으로 이동</S.Button>
    </S.Wrapper>
  )
}
