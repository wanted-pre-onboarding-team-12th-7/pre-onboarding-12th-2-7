import { useEffect, useCallback, useRef } from 'react'
import { styled } from 'styled-components'
import Select from '../components/Issues/Select'
import IssueListError from '../components/Issues/IssueListError'
import Loading from '../components/Issues/Loading'
import { useIssueListContext } from '../hooks/useIssueListContext'
import ImageBanner from '../components/Issues/ImageBanner'
import IssueList from '../components/Issues/IssueList'
import { ADVERTISEMENT } from '../components/Issues/constant'

export default function IssuesPage() {
  const { getIssuesApiCall, isError, isLoading, issueList, isPageEnd } = useIssueListContext()

  useEffect(() => {
    getIssuesApiCall()
  }, [])

  const handleObserver = useCallback(
    async ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
        await getIssuesApiCall()
        observer.observe(entry.target)
      }
    },
    [issueList]
  )
  const loadMoreRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!loadMoreRef.current) return
    const observer = new IntersectionObserver(handleObserver)
    loadMoreRef.current && observer.observe(loadMoreRef.current)
    return () => observer && observer.disconnect()
  }, [handleObserver])

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
      <Select />
      {isError && <IssueListError />}
      <IssueList
        AdElement={
          <ImageBanner
            alt={ADVERTISEMENT.ISSUE_LIST.IMG_ALT}
            link={ADVERTISEMENT.ISSUE_LIST.LINK_URL}
            src={ADVERTISEMENT.ISSUE_LIST.IMG_SRC}
          />
        }
        adInterval={5}
      />
      {isLoading && <Loading />}
      {isPageEnd && <div ref={loadMoreRef}>observer</div>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`
