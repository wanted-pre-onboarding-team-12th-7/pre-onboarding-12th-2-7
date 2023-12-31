import styled from 'styled-components'

export const Wrapper = styled.div``
export const SelectWrapper = styled.form`
  ${({ theme }) => theme.flex.flexColumnCenter};
  gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.boxColor};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
export const FromRow = styled.div`
  ${({ theme }) => theme.flex.flexBetweenCenter}
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
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 14px;
  border-radius: 4px;
`
export const FormButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primaryButtonColor};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primaryButtonTextColor};
  font-weight: 500;
  cursor: pointer;
`
export const IssueListWrapper = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.boxColor};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`
export const IssueListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`
export const IssueListItemNumber = styled.div`
  width: fit-content;
  padding: 4px 10px;
  background-color: ${({ theme }) => theme.colors.primaryButtonColor};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primaryButtonTextColor};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.small};
`
export const IssueListItemTitle = styled.div`
  font-weight: 500;
`
export const IssueListItemUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.subTextColor};
`
export const IssueListAdBox = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`
export const loadingWrapper = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  padding: 20px;
  font-weight: bold;
`
export const ErrorWrapper = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  background-color: ${({ theme }) => theme.colors.dimmed};
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  padding: 20px;
  text-align: center;
  line-height: 1.6em;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
`
export const CloseButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  position: absolute;
  right: 40px;
  top: 20px;
  background-color: transparent;
  cursor: pointer;
`
export const LoadMoreBox = styled.div`
  visibility: hidden;
`
