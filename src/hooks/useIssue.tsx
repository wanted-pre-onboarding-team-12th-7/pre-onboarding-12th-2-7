import { useEffect, useState } from 'react'

import { ISSUES_PER_PAGE, IssueDTO, issueAPI } from '../apis/issue'

const useIssue = () => {
  const [owner, setOwner] = useState<string>('facebook')
  const [repo, setRepo] = useState<string>('react')
  const [issueList, setIssueList] = useState<IssueDTO[]>([])
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pageNo, setpageNo] = useState<number>(1)
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

  const isSelectClick = () => {
    setpageNo(1)
    return 1
  }

  const getIssuesApiCall = async (mode: string) => {
    try {
      setIsError(false)
      setIsLoading(true)

      const requestPageNo = mode === 'select' ? isSelectClick() : pageNo

      const res = await issueAPI.getIssueList(owner, repo, requestPageNo)
      if (res.status === 200) {
        setIsLoading(false)
        setIsPageEnd(res.data.length < ISSUES_PER_PAGE)

        if (requestPageNo !== 1) {
          updateIssueList(filterPureIssue(res.data))
        } else {
          getIssueList(filterPureIssue(res.data))
        }
        setpageNo(pageNo + 1)
        return
      }
      throw Error
    } catch (err) {
      setIsError(true)
      setIssueList([])

      console.error(err)
      return
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getIssuesApiCall('scroll')
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
