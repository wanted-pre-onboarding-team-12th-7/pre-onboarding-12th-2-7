import { useState } from 'react'
import { IssueDTO, issueAPI } from '../apis/issue'

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
      const res = await issueAPI.getIssueList<IssueDTO[]>(owner, repo, pageNum)
      if (res.status === 200) {
        setIsLoading(false)
        // FIXME: 다른 owner, repo를 조회할 때는 기존 배열에 추가하면 안 됨
        setIssueList((prev) => {
          const pureNewIssues = res.data
            .filter((issue) => !issue.pull_request)
            .filter((issue) => !prev.find((prevIssue) => prevIssue.number === issue.number))
          return prev.concat(pureNewIssues)
        })
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
  }
}

export default useIssue
