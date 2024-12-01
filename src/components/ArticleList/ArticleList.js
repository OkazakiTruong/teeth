import "./style.scss";
import { ArticleItem } from "./ArticleItem";

export const ArticleList = ({ listArticle }) => {
  return (
    <div className="article-list">
      {listArticle.map((item, index) => {
        return <ArticleItem item={item} key={index} />;
      })}
    </div>
  );
};
