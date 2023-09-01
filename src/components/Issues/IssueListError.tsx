import { styled } from 'styled-components'

function IssueListError() {
  return <Wrapper>Issue List Get Error! Please check owner and repo</Wrapper>
}

const Wrapper = styled.div`
  margin: 20px 0;
`

export default IssueListError
