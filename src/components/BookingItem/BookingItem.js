import "./style.scss";
export const BookingItem = ({ item }) => {
  return (
    <div className="booking-item">
      <div className="booking-img">
        <img src={item.img} alt="" />
        <h3 className="booking-name">{item.name}</h3>
      </div>
      <div>
        <div className="booking-content">
          <p className="content">{item.title}</p>
          <a href={item.link} className="btn">
            Đặt lịch ngay
          </a>
        </div>
      </div>
    </div>
  );
};
