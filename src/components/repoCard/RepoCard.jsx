import React from "react";
import "./RepoCard.scss";

const RepoCard = (props) => {
  const repo = props.repos;

  console.dir(repo);
  return (
    <div className="repocard">
      <div className="repocard__namelink">
        <a target="_blank" href={repo.html_url}>
          {repo.name}
        </a>
      </div>
      <div className="repocard__decription">{repo.description}</div>
      {/* <div></div>
      <div className="repocard-header">
        <div className="repocard-header-name">{repo.name}</div>
      </div>
      <a href={repo.html_url} className="repocard-link">
        Ссылка на репозиторий
      </a> */}
    </div>
  );
};

export default RepoCard;
