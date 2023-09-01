import { styled } from 'styled-components'

import colors from '../../styles/constants/colors'
import { fontSizes } from '../../styles/constants/fontSize'

export const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  padding: 20px;
  font-size: ${fontSizes.medium};
  font-weight: bold;
  text-align: center;
  background-color: ${({ theme }) => theme.boxColor};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${colors.border};
`
