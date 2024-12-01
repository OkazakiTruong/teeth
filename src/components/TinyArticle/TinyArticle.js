import React from "react";
import "./style.scss";

export default function TinyArticle({ article }) {
  return (
    <div className="tiny-article-item">
      <img src={article?.img} alt="" />
      <div className="content">
        <h3>{article?.title}</h3>
        <div className="article-author-time">
          <div className="article-item">
            <img src="/icon/ph_user.svg" alt="" />
            <p>Tác giả: {article?.author}</p>
          </div>
          <div className="article-item">
            <img src="/icon/clarity_date-line.svg" alt="" />
            <p>{article?.date}</p>
          </div>
          <p
            style={{
              color: "black",
              marginTop: "6px",
              height: "24px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              textAlign: "justify",
            }}
          >
            {article?.detail}
          </p>
        </div>
      </div>
    </div>
  );
}
