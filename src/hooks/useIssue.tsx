import { useState } from 'react'
import { IssueDTO, getIssuesRequest } from '../apis/issue'

const useIssue = () => {
  const [owner, setOwner] = useState<string>('facebook')
  const [repo, setRepo] = useState<string>('react')
  const [issueList, setIssueList] = useState<IssueDTO[] | undefined>()
  const [isError, setIsError] = useState<boolean>(false)

  const getIssuesApiCall = async () => {
    try {
      setIsError(false)
      const res = await getIssuesRequest(owner, repo, 1)
      if (res.status === 200) {
        return setIssueList(res.data)
      }
      throw Error
    } catch (err) {
      setIsError(true)
      console.error(err)
      return
    }
  }

  return {
    owner,
    setOwner,
    repo,
    setRepo,
    issueList,
    setIssueList,
    isError,
    setIsError,
    getIssuesApiCall,
  }
}

export default useIssue
