import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.flexColumnCenter}
  height: 100vh;
  padding: 20px;
  gap: 50px;
`
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
`
export const Button = styled(Link)`
  ${({ theme }) => theme.flex.flexCenter}
  width: 260px;
  height: 50px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  transition: 200ms;

  &:hover {
    opacity: 0.9;
  }
`
