import { PropsWithChildren, useContext, useEffect } from 'react'
import { styled } from 'styled-components'
import useIssue from '../hooks/useIssue'
import { createContext } from 'react'
import { IssueDTO } from '../apis/issue'
import IssueList from '../components/Issues/IssueList'
export interface IssuesContextType {
  owner: string
  setOwner: React.Dispatch<React.SetStateAction<string>>
  repo: string
  setRepo: React.Dispatch<React.SetStateAction<string>>
  issueList: IssueDTO[] | undefined
  setIssueList: React.Dispatch<React.SetStateAction<IssueDTO[] | undefined>>
  isError: boolean
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
  getIssuesApiCall: () => Promise<void>
  isAdvView: (idx: number) => boolean
  handleAdvClick: () => void
}

const IssuesContext = createContext<IssuesContextType | null>(null)

export function IssuesProvider({ children }: PropsWithChildren) {
  const issueState = useIssue()
  return <IssuesContext.Provider value={{ ...issueState }}>{children}</IssuesContext.Provider>
}

export const useFormContext = () => {
  const context = useContext(IssuesContext)
  if (context === null) {
    throw Error('FormContext is null!')
  }
  return context
}

export default function IssuesPage() {
  const { getIssuesApiCall } = useFormContext()

  useEffect(() => {
    getIssuesApiCall()
  }, [])

  return (
    <Wrapper>
      <div>
        <label htmlFor="repoSelect">Repositiory 선택 : </label>
        <select id="repoSelect" name="repoSelect">
          <option value="facebook/react">facebook / react</option>
          <option value="wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7">
            wanted-pre-onboarding-team-12th-7 / pre-onboarding-12th-1-7
          </option>
        </select>
      </div>
      <IssueList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`
