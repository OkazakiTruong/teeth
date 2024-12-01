import Link from "next/link";
import "./style.scss";
import { BookingItem } from "@/components/BookingItem/BookingItem";
import { Carousel } from "@/components/Carousel/Carousel";
import { ImgStore } from "@/components/ImgStore/ImgStore";
import { ArticleList } from "@/components/ArticleList/ArticleList";
import { PhoneOutlined } from "@ant-design/icons";
const listBookingItem = [
  {
    img: "/img/dentis/dichvu1.jpg",
    name: "Đặt Lịch Khám",
    title:
      "Khi tới bệnh viện bạn sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng. ",
    link: "/dat-lich/kham-benh",
  },
  {
    img: "/img/dentis/dichvu2.png",
    name: "Đặt lịch chăm sóc răng miệng",
    title:
      "Tại Dental Clinic, mọi quy trình đều đảm bảo theo tiêu chuẩn quốc tế, từ thăm khám, tư vấn đến phác đồ điều trị. ",
    link: "/dat-lich/spa-grooming",
  },
  {
    img: "/img/dentis/dichvu3.jpg",
    name: "Đặt lịch thẩm mỹ răng",
    title:
      "Tại Dental Clinic, mọi quy trình đều đảm bảo theo tiêu chuẩn quốc tế, từ thăm khám, tư vấn đến phác đồ điều trị.",
    link: "/dat-lich/khach-san-thu-cung",
  },
];
const listArticle = [
  {
    img: "/img/dentis/baiviet1.png",
    date: "20/04/2024",
    author: "Minh Thanh",
    title: "Hàn răng bao lâu thì được ăn & 4 lưu ý để tăng độ bền của vết trám",
    detail:
      "Hàn răng là một một kỹ thuật nha khoa giúp phục hồi lại những tổn thương trên răng, bảo vệ răng khỏi sự xâm hại của vi khuẩn.",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet2.png",
    date: "08/12/2023",
    author: "Minh Thanh",
    title: "10 dấu hiệu niềng răng hỏng bạn nên biết",
    detail:
      "Niềng răng hỏng là tình trạng có thể xảy ra nếu khách hàng thực hiện ở các cơ sở nha khoa kém chất lượng, tay nghề bác sĩ yếu kém...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet3.png",
    date: "01/10/2023",
    author: "Minh Thanh",
    title:
      "Viêm nha chu có nguy hiểm không? Nguyên nhân triệu chứng & Cách điều trị ",
    detail:
      "Viêm nha chu là một bệnh lý răng miệng thường gặp, không chỉ gây ảnh hưởng đến thẩm mỹ mà còn có thể gây tổn thương xương...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet4.png",
    date: "11/09/2023",
    author: "Minh Thanh",
    title: "Bọc răng sứ mất từ 2 – 7 ngày? Chi tiết 6 bước thực hiện",
    detail:
      "Nụ cười rạng rỡ, nhan sắc thăng hạng chỉ sau vài ngày nhờ bọc răng sứ là cảm nhận của nhiều khách hàng khi bọc răng sứ tại Dental Clinic...",
    link: "#",
  },
];
const listArticleFull = [
  {
    img: "/img/dentis/baiviet1.png",
    date: "20/04/2024",
    author: "Minh Thanh",
    title: "Hàn răng bao lâu thì được ăn & 4 lưu ý để tăng độ bền của vết trám",
    detail:
      "Hàn răng là một một kỹ thuật nha khoa giúp phục hồi lại những tổn thương trên răng, bảo vệ răng khỏi sự xâm hại của vi khuẩn.",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet2.png",
    date: "08/12/2023",
    author: "Minh Thanh",
    title: "10 dấu hiệu niềng răng hỏng bạn nên biết",
    detail:
      "Niềng răng hỏng là tình trạng có thể xảy ra nếu khách hàng thực hiện ở các cơ sở nha khoa kém chất lượng, tay nghề bác sĩ yếu kém...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet3.png",
    date: "01/10/2023",
    author: "Minh Thanh",
    title:
      "Viêm nha chu có nguy hiểm không? Nguyên nhân triệu chứng & Cách điều trị ",
    detail:
      "Viêm nha chu là một bệnh lý răng miệng thường gặp, không chỉ gây ảnh hưởng đến thẩm mỹ mà còn có thể gây tổn thương xương...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet4.png",
    date: "11/09/2023",
    author: "Minh Thanh",
    title: "Bọc răng sứ mất từ 2 – 7 ngày? Chi tiết 6 bước thực hiện",
    detail:
      "Nụ cười rạng rỡ, nhan sắc thăng hạng chỉ sau vài ngày nhờ bọc răng sứ là cảm nhận của nhiều khách hàng khi bọc răng sứ tại Dental Clinic...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "11/09/2023",
    author: "Minh Thanh",
    title: "7 Điều kiện để trồng răng Implant “phải biết",
    detail:
      "Trồng răng implant là một trong những giải pháp hiệu quả để khôi phục lại một hay nhiều chiếc răng đã mất, giúp đảm bảo chức năng...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "10/08/2023",
    author: "Minh Thanh",
    title: "Niềng răng có ảnh hưởng đến thần kinh, sức khỏe không? ",
    detail:
      "Về bản chất, niềng răng chỉ tác động lực để điều chỉnh sai lệch về răng và khớp cắn, không tác động đến dây thần kinh nằm sâ...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "06/03/2023",
    author: "Minh Thanh",
    title:
      "20 tuổi niềng răng bao lâu? 5 yếu tố ảnh hưởng tới thời gian chỉnh nha",
    detail:
      "Niềng răng càng sớm càng tốt và đạt hiệu quả cao. Ở độ tuổi 20 niềng răng khắc phục tốt các vấn đề về răng như hô, móm, răng...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "11/05/2023",
    author: "Minh Thanh",
    title: "Cắt lợi là gì & Có nên cắt lợi không? Giá từ 2.000.000 VNĐ",
    detail:
      "Cắt lợi (hay cắt nướu) là một thủ thuật nha khoa giúp loại bỏ phần nướu thừa, để khắc phục tình trạng cười hở lợi...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "10/05/2023",
    author: "Minh Thanh",
    title: "3 Thành phần cấu tạo Implant “Quan trọng” không thể thiếu",
    detail:
      "Răng implant có hình thể và màu sắc tương tự như răng thật, đảm bảo chức năng ăn nhai và thẩm mỹ hiệu quả. Điều này là nhờ răng...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "10/03/2023",
    author: "Minh Thanh",
    title: "Cấy ghép Implant all on 6 toàn hàm? 5 ưu điểm nổi bật",
    detail:
      "Cấy ghép implant all on 6 là giải pháp trồng răng cố định, chắc chắn và hiệu quả cho các trường hợp mất răng toàn hàm. Phương pháp này giúp bạn...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "10/02/2023",
    author: "Minh Thanh",
    title: "Nhổ răng khôn có được bảo hiểm y tế không? Chi phí thế nào?",
    detail:
      "Răng khôn đa phần dễ bị mọc lệch, mọc ngầm nên chi phí phẫu thuật thường khá cao. Chính vì thế, nhiều người thắc mắc rằng liệu...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "09/01/2023",
    author: "Minh Thanh",
    title: "Răng số 8 bị sâu vỡ phải làm sao? Có nguy hiểm không?",
    detail:
      "Với các trường hợp răng số 8 bị sâu vỡ, biện pháp khắc phục hiệu quả nhất là nhổ răng để ngăn chặn các biến chứng xấu có thể xảy ra...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "12/12/2022",
    author: "Minh Thanh",
    title: "Hàn răng bằng composite có hiệu quả không? Chi phí bao nhiêu?",
    detail:
      "Hàn răng bằng composite là phương pháp giúp cải thiện tính thẩm mỹ của răng. Tuy nhiên nhiều người vẫn lo lắng không biết hàn răng...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "01/12/2022",
    author: "Minh Thanh",
    title: "Cách sử dụng miếng dán trắng răng đạt hiệu quả tối đa",
    detail:
      "Miếng dán trắng răng là giải pháp “cứu cánh” để khắc phục những khiếm khuyết về màu sắc của răng giúp bạn sở hữu hàm răng trắng...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet1.png",
    date: "11/11/2022",
    author: "Minh Thanh",
    title: "Mất răng có bị lệch mặt không? Giải đáp từ chuyên gia ",
    detail:
      "Mất răng có thể dẫn tới tình trạng bị lệch mặt. Bởi vì răng không chỉ đảm nhiệm chức năng ăn nhai mà còn ảnh hưởng tới cấu trúc tổng thể...",
    link: "#",
  },
];
export default function Home() {
  return (
    <main>
      <section className="banner">
        <div className="overlay"></div>
        <div className="banner-content">
          <h2 className="banner-heading">HỆ THỐNG DENTAL CLINIC</h2>
          <h2 className="banner-main-heading">
            TỎA SÁNG <br /> NỤ CƯỜI VIỆT
          </h2>
          <div className="group-btn">
            <a href="/ve-chung-toi" className="banner-button">
              <span className="icon">
                <img src="/icon/el_group.svg" alt="" className="el_group" />
              </span>
              Về chúng tôi
            </a>
            <a href="/dich-vu/lien-he" className="banner-button">
              <PhoneOutlined style={{ fontSize: "26px" }} />
              Liên hệ
            </a>
          </div>
        </div>
      </section>
      <section className="booking-option">
        <h2 className="section-heading">ĐẶT LỊCH DỊCH VỤ</h2>
        <div className="booking-list">
          {listBookingItem.map((item, index) => {
            return <BookingItem key={index} item={item} />;
          })}
        </div>
      </section>
      <section className="about-section">
        <h2 className="section-heading">VÌ SAO NÊN CHỌN DENTAL CLINIC ?</h2>
        <div className="section-content">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              <p>
                Trong suốt quá trình hình thành và phát triển, Dental Clinic
                luôn tự hào là địa chỉ nha khoa tin cậy của mọi khách hàng Việt.
                Với hệ thống 9 cơ sở phòng khám nha khoa tại Hà Nội – Quảng Ninh
                – Bắc Ninh, chúng tôi hướng đến sự lâu dài về chăm sóc sức khỏe
                răng miệng với sự hài lòng, an tâm tuyệt đối của khách hàng.
                Dental Clinic luôn nỗ lực không ngừng với phương châm “Mỗi khách
                hàng ra về đều cảm thấy hài lòng với nụ cười tự tin”.
              </p>
              <p>
                Nhằm mang đến chất lượng dịch vụ nha khoa tốt nhất và đảm bảo sự
                hài lòng cho khách hàng, Dental Clinic luôn chú trọng đầu tư
                trang thiết bị hiện đại. Hầu hết hệ thống trang thiết bị phục vụ
                cho việc thăm khám, điều trị và chăm sóc sức khỏe răng miệng tại
                Dental Clinic đều được nhập khẩu 100% từ nước ngoài như:
              </p>
              <ul>
                <li
                  style={{
                    listStyleType: "circle",
                    marginLeft: "20px",
                  }}
                >
                  Máy chụp X-quang
                </li>
                <li
                  style={{
                    listStyleType: "circle",
                    marginLeft: "20px",
                  }}
                >
                  Máy quét dấu hàm Scan iTero 5D – Công nghệ lấy dấu răng hiện
                  đại nhất thế giới
                </li>
                <li
                  style={{
                    listStyleType: "circle",
                    marginLeft: "20px",
                  }}
                >
                  Phần mềm Clincheck
                </li>
                <li
                  style={{
                    listStyleType: "circle",
                    marginLeft: "20px",
                  }}
                >
                  Phần mềm thiết kế nụ cười DSD
                </li>
              </ul>
              <h3>SỨ MỆNH CỦA CHÚNG TÔI</h3>
              <div className="mission-item">
                <p>
                  Petpals luôn mang đến những dịch vụ chất lượng, uy tín, chuyên
                  nghiệp. Là địa chỉ tin cậy để khách hàng đồng hành trong hành
                  trình nuôi dưỡng, yêu thương và chăm sóc các bạn thú cưng của
                  mình.
                </p>
              </div>
              <div className="mission-item">
                <p>
                  Coi trọng phát triển nguồn nhân lực cũng như nghĩa vụ đối với
                  cộng đồng và xã hội là nhiệm vụ không thể tách rời với việc
                  gia tăng giá trị của cổ đông.
                </p>
              </div>
              <div className="mission-item">
                <p>
                  Xây dựng môi trường làm việc văn minh, lịch sự, tử tế, yêu
                  thương, trách nhiệm.
                </p>
              </div>
            </div>
            <div className="about-img"></div>
          </div>
        </div>
      </section>
      <section className="our-service-section">
        <h2 className="section-heading">DỊCH VỤ CHÚNG TÔI CUNG CẤP</h2>
        <div className="our-service-container">
          <Carousel type="service" />
        </div>
      </section>
      <section className="doctor-section">
        <h2 className="section-heading">ĐỘI NGŨ BÁC SĨ CỦA CHÚNG TÔI</h2>
        <div className="doctor-container">
          <Carousel type="doctor" />
        </div>
      </section>
      <section className="store-img">
        <h2 className="section-heading">BỘ SƯU TẬP HÌNH ẢNH</h2>
        <ImgStore />
      </section>
      <section className="article-section">
        <h2 className="section-heading">BÀI VIẾT NỔI BẬT</h2>
        <ArticleList listArticle={listArticle} />
        <Link className="watch-more" href="/danh-sach-bai-viet">
          Xem thêm...
        </Link>
      </section>
    </main>
  );
}
