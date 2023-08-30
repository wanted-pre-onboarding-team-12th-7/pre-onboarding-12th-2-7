import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export default function ErrorPage() {
  return (
    <Wrapper>
      <h2>404 Not Found</h2>
      <Link to="/">목록으로 이동</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
