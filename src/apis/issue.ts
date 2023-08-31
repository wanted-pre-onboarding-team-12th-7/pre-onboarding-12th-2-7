import { Instance } from './instance'

export interface IssueDTO {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  user: UserDTO
  pull_request: object
}

export interface UserDTO {
  login: string
  avatar_url: string
}

export const ISSUES_PER_PAGE = 20

const getIssuesRequest = async (
  owner: string,
  repo: string,
  pageNo: number,
  perPage = ISSUES_PER_PAGE
) => {
  const { status, data } = await Instance.get<IssueDTO[]>(`/repos/${owner}/${repo}/issues`, {
    params: {
      state: 'open',
      sort: 'comments',
      per_page: perPage,
      page: pageNo,
    },
  })

  return { status, data }
}

const getIssueDetailRequest = async (owner: string, repo: string, issueNo: string) => {
  const { data } = await Instance.get<IssueDTO>(`/repos/${owner}/${repo}/issues/${issueNo}`)

  return data
}

export const issueAPI = {
  getIssueList: getIssuesRequest,
  getIssueDetail: getIssueDetailRequest,
}
