import { useState } from 'react'
import { IssueDTO, getIssuesRequest } from '../apis/issue'

const useIssue = () => {
  const [owner, setOwner] = useState<string>('facebook')
  const [repo, setRepo] = useState<string>('react')
  const [issueList, setIssueList] = useState<IssueDTO[] | undefined>()
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getIssuesApiCall = async () => {
    try {
      setIsError(false)
      setIsLoading(true)
      const res = await getIssuesRequest(owner, repo, 1)
      if (res.status === 200) {
        setIsLoading(false)
        setIssueList(res.data)
        return
      }
      throw Error
    } catch (err) {
      setIsError(true)
      console.error(err)
      return
    } finally {
      setIsLoading(false)
    }
  }

  const isAdvView = (idx: number) => {
    return (idx + 1) % 5 === 0
  }

  const handleAdvClick = () => {
    const ADV_LINK_URL = 'https://www.wanted.co.kr/'
    window.open(ADV_LINK_URL)
    return
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
    isLoading,
    setIsLoading,
    getIssuesApiCall,
    isAdvView,
    handleAdvClick,
  }
}

export default useIssue
