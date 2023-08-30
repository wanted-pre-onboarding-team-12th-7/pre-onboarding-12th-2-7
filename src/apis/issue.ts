import { Instance } from './instance'

export interface IssueDTO {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  user: UserDTO
}

export interface UserDTO {
  login: string
  avatar_url: string
}

export const ISSUES_PER_PAGE = 20

export const getIssuesRequest = async (owner: string, repo: string, pageNo: number) => {
  const { status, data } = await Instance.get(`/repos/${owner}/${repo}/issues`, {
    params: {
      state: 'open',
      sort: 'comments',
      per_page: ISSUES_PER_PAGE,
      page: pageNo,
    },
  })

  return { status, data }
}

export const getIssueDetailRequest = async (issueNo: number) => {
  const { data } = await Instance.get<IssueDTO>(`/repos/facebook/react/issues/${issueNo}`)

  return data
}
