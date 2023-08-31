import { styled } from 'styled-components'

import { flex } from '../../styles/constants/flex'
import { fontSizes } from '../../styles/constants/fontSize'

export const OuterWrapper = styled.div`
  ${flex.flexStart}
  flex-direction: column;
`

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const HR = styled.hr`
  width: 100% !important;
  margin: 16px 0;
`

export const NumberBadge = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 4px 8px;
  border-radius: 100px;
  background-color: black;
  color: white;
`

export const Title = styled.p`
  margin: 12px 0;
  font-size: ${fontSizes.large};
`

export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 100%;
`

export const NameAndDate = styled.p`
  margin-left: 4px;
  color: gray;

  b {
    color: black;
  }
`

export const Comment = styled.p`
  margin-left: auto;
`

export const Wrapper = styled.div`
  .markdown > * {
    all: revert;
  }
`
