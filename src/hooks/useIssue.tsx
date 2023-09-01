import { useEffect, useState } from 'react'

import { ISSUES_PER_PAGE, IssueDTO, issueAPI } from '../apis/issue'

const useIssue = () => {
  const [owner, setOwner] = useState<string>('facebook')
  const [repo, setRepo] = useState<string>('react')
  const [issueList, setIssueList] = useState<IssueDTO[]>([])
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pageNum, setPageNum] = useState<number>(1)
  const [isPageEnd, setIsPageEnd] = useState(false)

  const filterPureIssue = (data: IssueDTO[]) => data.filter((issue) => !issue.pull_request)
  const updateIssueList = (newData: IssueDTO[]) => {
    setIssueList([...issueList, ...newData])
    return
  }
  const getIssueList = (data: IssueDTO[]) => {
    setIssueList(data)
    return
  }

  const getIssuesApiCall = async () => {
    try {
      setIsError(false)
      setIsLoading(true)
      const res = await issueAPI.getIssueList(owner, repo, pageNum)
      if (res.status === 200) {
        setIsLoading(false)
        // FIXME: 다른 owner, repo를 조회할 때는 기존 배열에 추가하면 안 됨
        if (pageNum !== 1) {
          updateIssueList(filterPureIssue(res.data))
        } else {
          getIssueList(filterPureIssue(res.data))
        }
        setIsPageEnd(res.data.length < ISSUES_PER_PAGE)
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

  useEffect(() => {
    getIssuesApiCall()
  }, [])

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
