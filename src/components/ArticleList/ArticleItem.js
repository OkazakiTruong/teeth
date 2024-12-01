import Link from "next/link";
export const ArticleItem = ({ item }) => {
  return (
    <div className="article-item">
      <div className="article-img">
        <img src={item.img} alt="" />
      </div>
      <div className="article-introduce">
        <div className="article-date">
          <img src="/icon/mdi_calendar.svg" alt="" />
          <p>{item.date}</p>
        </div>
        <div className="article-author">
          <span>Đăng bởi: </span>
          {item.author}
        </div>
      </div>
      <div className="article-content">
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
      </div>
      <a href={item.link} className="watch-detail">{`Xem chi tiết >>`}</a>
    </div>
  );
};
