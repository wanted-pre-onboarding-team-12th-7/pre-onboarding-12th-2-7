# 프리온보딩 7팀 GITHUB ISSUE

![logo](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/93248349/7ccac592-cabe-4652-8df8-53ee7b7814b1)

7팀의 협업은 이렇게 진행되고 있어요! [궁금하다면 클릭!](https://www.notion.so/sonicrok/7-5fcce41bb3594680b16862082dd0324d)

## 프로젝트 소개

원티드 프리온보딩 프론트엔드 - 2주차 과제 내용을 구현한 Github Issue 프로젝트입니다!

[목표] [특정 깃헙 레파지토리](https://github.com/facebook/react)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

## 팀원 소개

| <img src="https://avatars.githubusercontent.com/wisdomin121" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/anyl92" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/SeungrokYoon" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/5unk3n" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/salmontaker" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/JangHyunjeong" width="130" height="130"> |
| :------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
|                                       **김민지**                                       |                                 **안유림 (서기)**                                 |                                    **윤승록 (서기)**                                    |                                    **이선근**                                     |                                   **이승원 (팀장)**                                    |                                        **장현정**                                        |
|                     [@wisdomin121](https://github.com/wisdomin121)                     |                       [@anyl92](https://github.com/anyl92)                        |                    [@SeungrokYoon](https://github.com/SeungrokYoon)                     |                       [@5unk3n](https://github.com/5unk3n)                        |                     [@salmontaker](https://github.com/salmontaker)                     |                    [@JangHyunjeong](https://github.com/JangHyunjeong)                    |

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=for-the-badge&logo=nodedotjs"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>

### Convention

<img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/lint staged-white?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

### Network & Route

<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/react markdown-brown?style=for-the-badge&logo=npm">

## 프로젝트 실행 방법

다음 명령어를 사용하여 프로젝트를 clone 하시거나 (git이 설치되어 있어야 합니다.)

우측 상단의 `Code` 버튼 -> `Download ZIP` 를 눌러 프로젝트를 다운로드 하실 수 있습니다.

```shell
git clone https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7.git
```

프로젝트 다운로드가 끝났다면, 해당 디렉토리로 이동하여 프로젝트 실행에 필요한 패키지를 설치합니다.

```shell
npm install
```

본 프로젝트는 GitHub의 [REST API](https://docs.github.com/en/rest/issues/issues)를 사용하고 있으므로, GitHub Personal Access Token이 없는 요청은 시간당 60회로 제한됩니다.<br>로컬에서의 원활한 실행을 위해 토큰 생성 후, `.env` 파일을 다음과 같이 설정해 주세요.

```
// .env

REACT_APP_API_KEY = 발급받은 토큰
```

패키지 설치가 끝났다면, 다음 명령어를 사용하여 프로젝트를 실행하실 수 있습니다!

```shell
npm start
```

## 배포 링크 및 데모 영상

배포 링크: [https://pre-onboarding-12th-2-7.vercel.app/](https://pre-onboarding-12th-2-7.vercel.app/)

배포는 `Vercel` 서비스를 사용했습니다.

## 아키텍쳐

### 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂Error
 ┃ ┣ 📂Header
 ┃ ┣ 📂IssueDetail
 ┃ ┣ 📂Issues
 ┃ ┗ 📂Layout
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂store
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┗ 📂constants
```

### 페이지 구성

- IssuesPage: [https://pre-onboarding-12th-2-7.vercel.app/](https://pre-onboarding-12th-2-7.vercel.app/)
- IssueDetailPage: https://pre-onboarding-12th-2-7.vercel.app/:IssueNo

## Best Practice 논의

### 1. 이슈 목록 화면

- 1-1) 이슈 목록 불러오기

> 팀원들 모두가 Github API 문서 중 어떤 엔드포인트를 사용해야 하는지 조사했습니다.
>
> [특정 레포지토리의 이슈리스트를 불러오기](https://docs.github.com/en/rest/issues/issuesapiVersion=2022-11-28#list-repository-issues)
>
> [하나의 이슈정보만 불러오기](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#get-an-issue)
> 공식문서를 살펴보니 한 가지 함정이 있었는데요, 깃헙에서는 풀 리쿼스트까지 이슈로 간주해, 응답 데이터에는 순수한 이슈 뿐 아니라, 풀 리퀘스트도 응답값으로 함께 들어왔습니다.
>
> 그래서 팀에서는 이슈 리스트를 호출하고 나서, 그 응답값을 `pull_request` 키 기준으로 필터링하여 전역 상태에 업데이트를 했습니다.
>
> `Axios`를 사용하고 있는 팀원들이 많아, Octokit 대신 Axios를 선택하였습니다.

- 1-2) 리스폰스 데이터의 타입지정

> 타입지정 - Octokit을 사용하는 경우에는 @octokit/types 타입 패키지를 통해 리스폰스 타이핑을 진행하였고, Axios를 사용한 팀원들은 Github API 공식문서를 확인하여 필요한 데이터만 인터페이스를 통해 타입지정하여 사용하였습니다.
>
> 팀에서는 Axios사용을 합의하여, 합의된 인터페이스로 리스폰스 타입지정 후 응답값을 사용하였습니다.
>
> ![image](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/44149596/c2b0cf5c-00ee-425d-a710-9ec7ff722bbe)

- 1-2) 무한 스크롤

  > 팀원들이 시도했던 방법은 `스크롤 이벤트 + Throttle` , `IntersectionObserver API` 크게 두 가지였습니다.
  > 논의 결과 스크롤 이벤트로 구현하는 방식은 `순회하는 특정 요소` 의 개수가 많아질수록, 스크롤과 연관된 후속 로직이 복잡할 수록, 스크롤 이벤트가 자주 발생할수록 이벤트 콜백이 많이 생겨 페이지의 반응성에 악영향을 줄 가능성이 높겠다 판단했습니다. 그래서 `IntersectionObserver API` 를 통해 무한 스크롤을 구현하는 것으로 결정했습니다.
  >
  > ![image](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/44149596/8d28363b-6722-4255-ba7a-01adee84cda3)

- 1-3) 광고 넣기

  > 이미 전역 데이터에는 순수한 이슈들만 남아있었기에, 리스트로 렌더링해주는 부분에서 `Array.proptotype.map` 을 실행하여 4번째 이슈 아이템 아래에 광고 배너를 추가하였습니다.
  > 그 결과 이슈 리스트의 5번째 항목마다 광고가 나타나게 됩니다.
  >
  > ![image](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/44149596/7daee255-3811-4527-992a-c52e7555cacc)

### 2. 이슈 상세 화면

- 2-1) 상세 데이터 불러오기

  > 이슈 리스트 페이지에서 이슈가 클릭이 되면, 클릭된 컴포넌트에서 지니고 있던 `issueNumber` 에 따라 `issues/:issueNumber` 경로로 이동하게 됩니다.
  >
  > 페이지 이동 이후, `useParams()` 훅을 이용해 `URL 동적 파라미터`인 issueNumber 를 활용하여
  > 특정 이슈에 대한 정보를 호출해 왔습니다.
  >
  > ![image](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/44149596/bb0ec0d2-146b-476a-ab88-69f5223e92d0)

- 2-2) 마크다운

  > [ReactMarkdown](https://github.com/remarkjs/react-markdown) 라이브러리를 이용했습니다. 라이브러리를 사용하며, 다음과 같은 문제에 봉착했고, 아래 방법으로 해결할 수 있었습니다.
  >
  > 1. HTML 요소가 적용되지 않는 이슈
  >    해당 라이브러리의 경우, XSS 공격등의 노출을 피하기 위해 HTML요소를 텍스트 형태로만 출력해주었습니다. 하지만 HTML로 구현된 마크다운도 img태그 등의 주요 요소가 포함되어 있기에, 잘 보일수 있어야한다고 판단했습니다. `rehype-raw` 플러그인을 추가했고, 정상적인 HTML 스타일을 노출할 수 있었습니다.
  > 2. react-markdown이 적용되지 않는 이슈
  >    프로젝트 리셋 스타일과 마크다운 스타일이 중첩되어, 마크다운의 스타일이 적용되지 않는 이슈가 발생했었습니다. 마크다운 컴포넌트에 하단의 스타일을 추가하여 해당 이슈를 해결하였습니다.
  >    `.markdown > * { all: revert; }`
  > 3. Table 등 디자인 요소가 적용되지 않는 이슈
  >    마크다운한 Table 등 일부 요소가 구현되지 않는 이슈가 있었습니다. 해당 문제는 `remark-gfm` 플러그인을 추가하여 해결했습니다.
  >
  > ![image](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/44149596/a1b3e1b9-9f76-4b83-8d24-ce7b05329ca2)

### 3. 공통 헤더(Header UI)

> 기존 요구사항 구현을 위해서 `facebook` , `react` 문자열을 상수로 관리하였습니다.
> 그러던 와중 다른 레포지토리의 이슈들도 검색할 수 있으면 좋겠다는 논의가 이루어져,
> 변수로 관리하게 되었습니다.
>
> ![스크린샷 2023-09-01 오후 10 15 03](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/44149596/49f0ab59-196b-4a4b-be86-5a0f0d3a4a3a)

### 4. 에러 화면

> 라우팅 에러, 데이터 fetching 과정에서의 에러처리
>
> 1. 라우팅 에러
>    잘못된 주소 기입으로 인한 에러는, `Router` 에서 `path="*"` 를 적용하여 에러 컴포넌트를 노출시켜 주었습니다.
> 2. 데이터 fetching 과정의 에러
>
> 1) 이슈리스트
>    데이터 호출 시, `try - catch` 문을 이용하여 에러 여부를 판단했습니다.
>    에러 상태는 `UseState` 에러를 판단하는 _`IsError` 를_ 사용하여, 데이터의 성공 여부에 따라 `에러 컴포넌트`를 노출시켜주었습니다.
> 2) 이슈 디테일
>    데이터 호출 과정에서 발생하는 에러는 `interceptors` 를 사용하였습니다. 데이터 호출 시, `errorState` 가 `500`번 혹은 `600`번 이라면 미리 제작해 > 둔, `에러페이지`로 리다이렉트 해주었습니다.
>
> ![image](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/44149596/8f6f4eda-5c51-4156-a0fe-7aaefdae9076)

### 5. 리스트에서 상세 페이지로 넘어갈 때

> `Router` 의 동적 파라미터로 `issue*.*number` 을 추가하여 페이지 각 이슈에 해당하는 페이지로
> 이동하도록 처리했습니다.
>
> 이슈 상세 페이지 → 이슈 리스트 페이지 이동시 에도, 이전 페이지에서 요청했던 `이슈 리스트 데이터` 가 유지되면 불필요한 비동기 함수 호출을 줄일 수 있을 것이라 판단했습니다. `ContextAPI` 를 이용하여 이슈 리스트 데이터를 전역으로 관리하며,
> 불필요한 비동기 함수 호출을 > 줄이고, 이전 이슈 리스트를 유지하며 사용성을 올릴 수 있었습니다.
>
> ![image](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/44149596/47c0fcd7-5179-41b5-8133-2892b346c933)

### staged된 파일만 신경 쓰고싶어요 😢 - lint-staged

기존에 저희 팀은 husky로 [GitHook을 설정](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7/issues/4)하여 레포지토리에 올라가는 코드들을 커밋 전에 포매팅하고, 푸쉬 전에 린트 규칙을 검사하도록 하여 소스코드 관리를 하고 있었습니다.

```shell
# .husky/pre-commit

npx prettier --cache --write . && git add .
```

```shell
# .husky/pre-push

npx eslint --cache .
```

그러나 기존에 사용하던 자동화 스크립트가 위와 같았기 때문에, 커밋할 예정이 아닌 파일들 또한 Staging Area에 올라가버리고,

결과적으로 모든 파일에 린트 규칙을 적용하게 되어버려 원격 저장소에 푸쉬를 하기 위해서는

```
1. 커밋 예정이 아닌 파일도 포매팅이 되어버리고, 린트 규칙이 적용되어 수정해줘야 한다.
2. 작업 상황을 나누어 커밋하고 싶은데 할 수 없다.
```

라는 문제점이 생겼습니다. 따라서 이 문제를 해결하기위해 프로젝트에 [lint-staged](https://github.com/okonet/lint-staged)를 적용 하였습니다!

```shell
# .husky/pre-commit

npx lint-staged
```

```json
// .lintstagedrc

{
  "*.{json,html,css,scss,js,jsx,ts,tsx}": "prettier --cache --write"
}
```

lint-staged 적용 후, pre-commit 설정은 위와 같이 바뀌어 Staging Area에 올라온 파일만 포매팅 하도록 변경되었고,

```shell
# .husky/pre-push

npx eslint --cache
```

pre-push 설정은 위와 같이 바뀌어 pre-commit 단계에서 포매팅이 끝난 파일들만 린트 규칙을 적용하도록 하여 위 문제들을 해결할 수 있었습니다!

### 팀장 : "자동화 덕분에 레포 지킴이로부터 해방 되었습니다" 👍 - Github Actions

저희 팀은 Github Issue, Projects 기능을 이용해 이슈관리, 일정관리를 하고 있었지만 크나큰 문제점이 하나 발생했습니다.

|                                                                   문제상황                                                                    |                                                                                                                                               |
| :-------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/93248349/239693ce-8ed2-41fc-9d2c-57057d98d455"> | <img src="https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/93248349/51223980-d4d8-4d7b-b43b-297a6bd834b5"> |
|                                                           우측위의 설정 버튼을 눌러                                                           |                                                       "Manually"하게 설정해줘야 합니다.                                                       |

`매번 이슈와 PR을 생성할 때 마다` Asignees, Reviewer, Project등을 직접 손으로 추가 해주어야 Project의 칸반보드와 연동된다는 점이었습니다.

```yml
# .github/workflows/main.yml

on:
  pull_request:
    types: [opened]
  issues:
    types: [opened]

jobs:
  assign:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ github.event.issue }}
        uses: actions-cool/issues-helper@v3
        with:
          actions: 'add-assignees'
          assignees: ${{ github.event.issue.user.login }}
          token: ${{ secrets.TOKEN }}

      - if: ${{ github.event.pull_request }}
        uses: hkusu/review-assign-action@v1
        with:
          assignees: ${{ github.event.pull_request.user.login }}
          reviewers: ${{ vars.REVIEWERS }}
          github-token: ${{ secrets.TOKEN }}

  project:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/add-to-project@main
        with:
          project-url: ${{ vars.PROJECT_URL }}
          github-token: ${{ secrets.TOKEN }}
```

이 문제를 해결하기 위해 위와 같이 GitHub Actions를 설정하여

<img src="https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/93248349/8ddc7c37-ca1e-4559-91ab-200be5457ed7" width="500" >

```
- Issue & Pull Request가 Open 되었을때 : 해당 Issue & Pull Request를 작성한 사람에게 자동으로 Asignee를 할당하고 Project에 등록
- Pull Request의 경우 해당 Pull Request를 작성한 사람을 제외한 모두를 Reviewer로 등록
```

기존의 작업들을 위와 같이 자동화 하는데에 성공하였고.

<img src="https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-2-7/assets/93248349/4d723185-fc20-4e22-8d3b-bfdda864daae" width="500" >

Repository Variable을 사용하여 추후 다른 레포지토리에서도 쉽게 해당 Actions를 사용할 수 있게 하였습니다!
