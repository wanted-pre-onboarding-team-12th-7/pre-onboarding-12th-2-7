export default function IssuesPage() {
  return (
    <div>
      <div>
        <label htmlFor="repoSelect">Repositiory 선택 : </label>
        <select id="repoSelect" name="repoSelect">
          <option value="facebook/react">facebook / react</option>
          <option value="wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7">
            wanted-pre-onboarding-team-12th-7 / pre-onboarding-12th-1-7
          </option>
        </select>
      </div>
      {/* TODO: IssueList 컴포넌트 */}
    </div>
  )
}
