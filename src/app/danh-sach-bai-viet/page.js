import { Paginate } from "@/components/Paginate/Paginate";
import "./style.scss";
import { ArticleList } from "@/components/ArticleList/ArticleList";

const listArticleFull = [
  {
    img: "/img/dentis/baiviet1.png",
    date: "20/04/2024",
    author: "Minh Thanh",
    title: "Hàn răng bao lâu thì được ăn & 4 lưu ý để tăng độ bền của vết trám",
    detail:
      "Hàn răng là một một kỹ thuật nha khoa giúp phục hồi lại những tổn thương trên răng, bảo vệ răng khỏi sự xâm hại của vi khuẩn.",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/baiviet2.png",
    date: "08/12/2023",
    author: "Minh Thanh",
    title: "10 dấu hiệu niềng răng hỏng bạn nên biết",
    detail:
      "Niềng răng hỏng là tình trạng có thể xảy ra nếu khách hàng thực hiện ở các cơ sở nha khoa kém chất lượng, tay nghề bác sĩ yếu kém...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/baiviet3.png",
    date: "01/10/2023",
    author: "Minh Thanh",
    title:
      "Viêm nha chu có nguy hiểm không? Nguyên nhân triệu chứng & Cách điều trị ",
    detail:
      "Viêm nha chu là một bệnh lý răng miệng thường gặp, không chỉ gây ảnh hưởng đến thẩm mỹ mà còn có thể gây tổn thương xương...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/baiviet4.png",
    date: "11/09/2023",
    author: "Minh Thanh",
    title: "Bọc răng sứ mất từ 2 – 7 ngày? Chi tiết 6 bước thực hiện",
    detail:
      "Nụ cười rạng rỡ, nhan sắc thăng hạng chỉ sau vài ngày nhờ bọc răng sứ là cảm nhận của nhiều khách hàng khi bọc răng sứ tại Dental Clinic...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham1.png",
    date: "11/09/2023",
    author: "Minh Thanh",
    title: "7 Điều kiện để trồng răng Implant “phải biết",
    detail:
      "Trồng răng implant là một trong những giải pháp hiệu quả để khôi phục lại một hay nhiều chiếc răng đã mất, giúp đảm bảo chức năng...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham2.png",
    date: "10/08/2023",
    author: "Minh Thanh",
    title: "Niềng răng có ảnh hưởng đến thần kinh, sức khỏe không? ",
    detail:
      "Về bản chất, niềng răng chỉ tác động lực để điều chỉnh sai lệch về răng và khớp cắn, không tác động đến dây thần kinh nằm sâ...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham3.png",
    date: "06/03/2023",
    author: "Minh Thanh",
    title:
      "20 tuổi niềng răng bao lâu? 5 yếu tố ảnh hưởng tới thời gian chỉnh nha",
    detail:
      "Niềng răng càng sớm càng tốt và đạt hiệu quả cao. Ở độ tuổi 20 niềng răng khắc phục tốt các vấn đề về răng như hô, móm, răng...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham4.png",
    date: "11/05/2023",
    author: "Minh Thanh",
    title: "Cắt lợi là gì & Có nên cắt lợi không? Giá từ 2.000.000 VNĐ",
    detail:
      "Cắt lợi (hay cắt nướu) là một thủ thuật nha khoa giúp loại bỏ phần nướu thừa, để khắc phục tình trạng cười hở lợi...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham5.png",
    date: "10/05/2023",
    author: "Minh Thanh",
    title: "3 Thành phần cấu tạo Implant “Quan trọng” không thể thiếu",
    detail:
      "Răng implant có hình thể và màu sắc tương tự như răng thật, đảm bảo chức năng ăn nhai và thẩm mỹ hiệu quả. Điều này là nhờ răng...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham6.png",
    date: "10/03/2023",
    author: "Minh Thanh",
    title: "Cấy ghép Implant all on 6 toàn hàm? 5 ưu điểm nổi bật",
    detail:
      "Cấy ghép implant all on 6 là giải pháp trồng răng cố định, chắc chắn và hiệu quả cho các trường hợp mất răng toàn hàm. Phương pháp này giúp bạn...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham7.png",
    date: "10/02/2023",
    author: "Minh Thanh",
    title: "Nhổ răng khôn có được bảo hiểm y tế không? Chi phí thế nào?",
    detail:
      "Răng khôn đa phần dễ bị mọc lệch, mọc ngầm nên chi phí phẫu thuật thường khá cao. Chính vì thế, nhiều người thắc mắc rằng liệu...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham8.png",
    date: "09/01/2023",
    author: "Minh Thanh",
    title: "Răng số 8 bị sâu vỡ phải làm sao? Có nguy hiểm không?",
    detail:
      "Với các trường hợp răng số 8 bị sâu vỡ, biện pháp khắc phục hiệu quả nhất là nhổ răng để ngăn chặn các biến chứng xấu có thể xảy ra...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham9.png",
    date: "12/12/2022",
    author: "Minh Thanh",
    title: "Hàn răng bằng composite có hiệu quả không? Chi phí bao nhiêu?",
    detail:
      "Hàn răng bằng composite là phương pháp giúp cải thiện tính thẩm mỹ của răng. Tuy nhiên nhiều người vẫn lo lắng không biết hàn răng...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham10.png",
    date: "01/12/2022",
    author: "Minh Thanh",
    title: "Cách sử dụng miếng dán trắng răng đạt hiệu quả tối đa",
    detail:
      "Miếng dán trắng răng là giải pháp “cứu cánh” để khắc phục những khiếm khuyết về màu sắc của răng giúp bạn sở hữu hàm răng trắng...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham11.png",
    date: "11/11/2022",
    author: "Minh Thanh",
    title: "Mất răng có bị lệch mặt không? Giải đáp từ chuyên gia ",
    detail:
      "Mất răng có thể dẫn tới tình trạng bị lệch mặt. Bởi vì răng không chỉ đảm nhiệm chức năng ăn nhai mà còn ảnh hưởng tới cấu trúc tổng thể...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/dentis/thamkham12.png",
    date: "11/11/2022",
    author: "Minh Thanh",
    title: "Mất răng có bị lệch mặt không? Giải đáp từ chuyên gia ",
    detail:
      "Mất răng có thể dẫn tới tình trạng bị lệch mặt. Bởi vì răng không chỉ đảm nhiệm chức năng ăn nhai mà còn ảnh hưởng tới cấu trúc tổng thể...",
    link: "danh-sach-bai-viet/chi-tiet-bai-viet",
  },
];
export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Danh sách bài viết</p>
      </div>
      <div className="section-heading">Danh sách bài viết</div>
      <ArticleList listArticle={listArticleFull} />
      <Paginate />
    </main>
  );
}
