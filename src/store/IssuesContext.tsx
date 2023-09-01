import { createContext, PropsWithChildren } from 'react'

import { IssueDTO } from '../apis/issue'
import useIssue from '../hooks/useIssue'

export interface IssuesContextType {
  owner: string
  setOwner: React.Dispatch<React.SetStateAction<string>>
  repo: string
  setRepo: React.Dispatch<React.SetStateAction<string>>
  issueList: IssueDTO[] | undefined
  setIssueList: React.Dispatch<React.SetStateAction<IssueDTO[]>>
  isError: boolean
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  isPageEnd: boolean
  getIssuesApiCall: (mode: string) => Promise<void>
}

export const IssuesContext = createContext<IssuesContextType | null>(null)

export function IssuesProvider({ children }: PropsWithChildren) {
  const issueState = useIssue()
  return <IssuesContext.Provider value={{ ...issueState }}>{children}</IssuesContext.Provider>
}
