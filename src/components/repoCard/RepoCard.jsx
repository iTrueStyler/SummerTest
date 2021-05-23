import React from "react";

const RepoCard = (props) => {
  const repo = props.repos;
  console.dir(repo);
  return (
    <div className="repocard">
      <div className="repocard-header">
        <div className="repocard-header-name">{repo.name}</div>
      </div>
      <a href={repo.html_url} className="repocard-link">
        Ссылка на репозиторий
      </a>
    </div>
  );
};

export default RepoCard;
