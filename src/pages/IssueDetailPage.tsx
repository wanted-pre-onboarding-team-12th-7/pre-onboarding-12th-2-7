import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'

import { IssueDTO, issueAPI } from '../apis/issue'
import { useIssueListContext } from '../hooks/useIssueListContext'
import { flex } from '../styles/constants/flex'
import IssueTitle from '../components/Issues/IssueTitle'
import Loading from '../components/Issues/Loading'
import IssueBody from '../components/Issues/IssueBody'

export default function IssueDetailPage() {
  const { owner, repo } = useIssueListContext()
  const [item, setItem] = useState<IssueDTO>()

  const params = useParams()

  const getIssueDetailApiCall = async () => {
    if (params.number) {
      const res = await issueAPI.getIssueDetail(owner, repo, params.number)

      setItem({
        number: res.number,
        title: res.title,
        body: res.body,
        created_at: res.created_at,
        comments: res.comments,
        user: {
          login: res.user.login,
          avatar_url: res.user.avatar_url,
        },
        pull_request: res.pull_request,
      })
    }
  }

  useEffect(() => {
    getIssueDetailApiCall()
  }, [])

  return item ? (
    <OuterWrapper>
      <InnerWrapper>
        <IssueTitle item={item} />
        <IssueBody item={item} />
      </InnerWrapper>
    </OuterWrapper>
  ) : (
    <Loading />
  )
}

const OuterWrapper = styled.div`
  ${flex.flexCenter}
  width: 100%;
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 18px 25px;
  border: 0.5px solid gray;
  border-radius: 10px;
  background-color: white;
`
