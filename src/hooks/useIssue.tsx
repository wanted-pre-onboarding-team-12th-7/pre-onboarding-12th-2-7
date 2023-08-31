import { useState } from 'react'
import { IssueDTO, getIssuesRequest } from '../apis/issue'

const useIssue = () => {
  const [owner, setOwner] = useState<string>('facebook')
  const [repo, setRepo] = useState<string>('react')
  const [issueList, setIssueList] = useState<IssueDTO[]>([])
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pageNum, setPageNum] = useState<number>(1)
  const [isPageEnd, setIsPageEnd] = useState(false)

  const getIssuesApiCall = async () => {
    try {
      setIsError(false)
      setIsLoading(true)
      const res = await getIssuesRequest(owner, repo, pageNum)
      if (res.status === 200) {
        setIsLoading(false)
        // FIXME: 다른 owner, repo를 조회할 때는 기존 배열에 추가하면 안 됨
        setIssueList(res.data)
        setIsPageEnd(res.data.length < 30 ? true : false)
        setPageNum(pageNum + 1)
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
    isPageEnd,
    getIssuesApiCall,
    isAdvView,
    handleAdvClick,
  }
}

export default useIssue
