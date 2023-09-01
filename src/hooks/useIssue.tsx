import { useEffect, useState } from 'react'

import { ISSUES_PER_PAGE, IssueDTO, issueAPI } from '../apis/issue'

const useIssue = () => {
  const [ownerInHook, setOwner] = useState<string>('facebook')
  const [repoInHook, setRepo] = useState<string>('react')
  const [issueList, setIssueList] = useState<IssueDTO[]>([])
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pageNum, setPageNum] = useState<number>(1)
  const [isPageEnd, setIsPageEnd] = useState(false)

  const filterPureIssue = (data: IssueDTO[]) => data.filter((issue) => !issue.pull_request)
  const updateIssueList = (newData: IssueDTO[], revoked: boolean) => {
    setIssueList([...(revoked ? [] : issueList), ...newData])
    return
  }
  const getIssueList = (data: IssueDTO[]) => {
    setIssueList(data)
    return
  }

  const getIssuesApiCall = async (owner: string, repo: string) => {
    try {
      setIsError(false)
      setIsLoading(true)
      const revokeCachedData = ownerInHook !== owner || repoInHook !== repo
      const res = await issueAPI.getIssueList(owner, repo, revokeCachedData ? 1 : pageNum)
      if (res.status === 200) {
        setIsLoading(false)
        if (pageNum !== 1) {
          updateIssueList(filterPureIssue(res.data), revokeCachedData)
        } else {
          getIssueList(filterPureIssue(res.data))
        }
        setOwner(owner)
        setRepo(repo)
        setIsPageEnd(res.data.length < ISSUES_PER_PAGE)
        setPageNum(revokeCachedData ? 2 : pageNum + 1)
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
    getIssuesApiCall('facebook', 'react')
  }, [])

  return {
    owner: ownerInHook,
    setOwner,
    repo: repoInHook,
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
