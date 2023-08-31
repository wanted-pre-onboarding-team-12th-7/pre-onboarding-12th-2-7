import styled from 'styled-components'
import { colors } from './../../styles/constants/colors'
import { flex } from '../../styles/constants/flex'
import { fontSizes } from '../../styles/constants/fontSize'

export const Wrapper = styled.div``

export const SelectWrapper = styled.form`
  ${flex.flexColumnCenter}
  gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.boxColor};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
export const FromRow = styled.div`
  ${flex.flexBetweenCenter}
  width: 100%;
`
export const FormTitle = styled.div`
  display: block;
  width: 80px;
  flex-shrink: 0;
`
export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${colors.border};
  padding: 0 14px;
  border-radius: 4px;
`
export const FormButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.primaryButtonColor};
  border-radius: 4px;
  color: ${({ theme }) => theme.primaryButtonTextColor};
  font-weight: 500;
  cursor: pointer;
`
export const IssueListWrapper = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.boxColor};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
export const IssueListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  border-bottom: 1px solid ${colors.border};
`
export const IssueListItemNumber = styled.div`
  width: fit-content;
  padding: 4px 10px;
  background-color: ${({ theme }) => theme.primaryButtonColor};
  border-radius: 4px;
  color: ${({ theme }) => theme.primaryButtonTextColor};
  font-weight: 700;
  font-size: ${fontSizes.small};
`
export const IssueListItemTitle = styled.div`
  font-weight: 500;
`
export const IssueListItemUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: ${fontSizes.small};
  color: ${({ theme }) => theme.subTextColor};
`
export const IssueListAdBox = styled.div`
  ${flex.flexCenter}
  padding: 20px;
  border-bottom: 1px solid ${colors.border};
`
export const loadingWrapper = styled.div`
  ${flex.flexCenter}
  padding: 20px;
  font-weight: bold;
`
