import { useContext } from 'react'

import { IssuesContext } from '../store/IssuesContext'

export const useIssueListContext = () => {
  const context = useContext(IssuesContext)
  if (context === null) {
    throw Error('IssueList Context is null!')
  }
  return context
}
