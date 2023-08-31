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

const getIssuesRequest = async <T>(
  owner: string,
  repo: string,
  pageNo: number,
  perPage = ISSUES_PER_PAGE
) => {
  const { status, data } = await Instance.get(`/repos/${owner}/${repo}/issues`, {
    params: {
      state: 'open',
      sort: 'comments',
      per_page: perPage,
      page: pageNo,
    },
  })

  return { status, data: data as T }
}

const getIssueDetailRequest = async (issueNo: number) => {
  const { data } = await Instance.get<IssueDTO>(`/repos/facebook/react/issues/${issueNo}`)

  return data
}

export const issueAPI = {
  getIssueList: getIssuesRequest,
  getIssueDetail: getIssueDetailRequest,
}
