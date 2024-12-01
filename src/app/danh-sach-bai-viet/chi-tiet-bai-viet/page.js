import React from "react";
import "./style.scss";
import TinyArticle from "@/components/TinyArticle/TinyArticle";

const listArticle = [
  {
    img: "/img/dentis/baiviet1.png",
    date: "20/04/2024",
    author: "Minh Thanh",
    title: "Hàn răng bao lâu thì được ăn & 4 lưu ý để tăng độ bền của vết trám",
    detail:
      "Hàn răng là một một kỹ thuật nha khoa giúp phục hồi lại những tổn thương..",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet2.png",
    date: "08/12/2023",
    author: "Minh Thanh",
    title: "10 dấu hiệu niềng răng hỏng bạn nên biết",
    detail: "Niềng răng hỏng là tình trạng có thể xảy ra nếu khách hàng ...",
    link: "#",
  },
  {
    img: "/img/dentis/baiviet3.png",
    date: "01/10/2023",
    author: "Minh Thanh",
    title:
      "Viêm nha chu có nguy hiểm không? Nguyên nhân triệu chứng & Cách điều trị ",
    detail:
      "Viêm nha chu là một bệnh lý răng miệng thường gặp, không chỉ gây ...",
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
export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Danh sách bài viết</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Chi tiết bài viết</p>
      </div>
      <div className="article-section">
        <div className="article-section-left">
          <h1 className="article-title">
            Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất
          </h1>
          <div className="article-author-time">
            <div className="article-item">
              <img src="/icon/ph_user.svg" alt="" />
              <p>Tác giả: Minh thanh</p>
            </div>
            <div className="article-item">
              <img src="/icon/clarity_date-line.svg" alt="" />
              <p>11/05/2024</p>
            </div>
          </div>
          <div className="menu">
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img src="/icon/hamberger.svg" alt="" style={{ width: "14px" }} />
              <p style={{ fontSize: "16px", fontWeight: "500" }}>
                MỤC LỤC BÀI VIẾT
              </p>
            </div>
            <p style={{ fontWeight: "500", margin: "20px 0" }}>
              Cách chăm sóc mèo con chu đáo nhất cho người nuôi
            </p>
            <ul style={{ listStyle: "inside" }}>
              <li>
                <a href="#title-1">Hàn răng bao lâu thì được ăn?</a>
              </li>
              <li>
                <a href="#title-2">
                  Thực phẩm nên và không nên ăn khi hàn răng
                </a>
              </li>
              <li>
                <a href="#title-3">Sau khi hàn răng 2 tiếng</a>
              </li>
              <li>
                <a href="#title-4">Sau khi hàn răng 1-2 ngày</a>
              </li>
              <li>
                <a href="#title-5">Sau khi hàn răng 1 tháng</a>
              </li>
              <li>
                <a href="#title-6">4 lưu ý để tăng độ bền khi hàn răng</a>
              </li>
              <li>
                <a href="#title-7">Hàn răng ở đâu an toàn và uy tín?</a>
              </li>
            </ul>
          </div>
          <div className="content">
            <p>
              Hàn răng là một một kỹ thuật nha khoa giúp phục hồi lại những tổn
              thương trên răng, bảo vệ răng khỏi sự xâm hại của vi khuẩn.
              Vậy hàn răng bao lâu thì được ăn và nên ăn/nên kiêng những thực
              phẩm gì? Hãy cùng đi tìm câu trả lời với Nha khoa Quốc Tế Việt
              Pháp và lựa chọn cho mình chế độ ăn phù hợp giúp nâng cao độ bền
              của vết trám. 
            </p>
            <img src="/img/dentis/thamkham1.png" alt="" />

            <h2 id="title-1"> Hàn răng bao lâu thì được ăn?</h2>
            <p>
              Thông thường sau khi hàn răng 1 – 2 tiếng là bạn đã có thể ăn các
              món ăn lỏng, mềm như cháo, súp, v.vv.. Trong một số trường hợp bạn
              có thể phải chờ lâu hơn hoặc có thể ăn uống ngay sau khi thực
              hiện. Hàn răng bao lâu được ăn phụ thuộc vào nhiều yếu tố như: vật
              liệu hàn, công nghệ hàn và tay nghề bác sĩ. 
            </p>
            <p>
              Vật liệu hàn: Nếu hàn răng bằng các vật liệu dẻo như amalgam hay
              composite, bạn có thể phải kiêng khoảng 1 – 2 giờ để miếng hàn bám
              chắc vào răng rồi sau đó mới ăn. Còn nếu trám răng bằng sứ thì bạn
              có thể phải chờ lâu hơn từ 3 – 5 giờ  để ăn uống.
            </p>
            <p>
              Công nghệ hàn: Với các công nghệ hàn răng bằng máy móc hiện đại
              giúp quy trình hàn nhanh chóng, miếng hàn bám chắc vào răng nên
              bạn sẽ không cần lo lắng, kiêng khem ăn uống sau khi hàn răng.
            </p>
            <p>
              Tay nghề bác sĩ: Hiệu quả hàn răng phụ thuộc khá nhiều vào tay
              nghề bác sĩ. Nếu quá trình hàn được thực hiện bởi bác sĩ có trình
              độ cao, nhiều kinh nghiệm vết hàn được thực hiện tốt, độ phủ cho
              những vết sâu phù hợp nên  bạn có thể ăn uống ngay sau khi hàn. 
            </p>
            <h2 id="title-2">Thực phẩm nên và không nên ăn khi hàn răng</h2>
            <p>
              Để vết trám bám chắc vào răng, độ bền cao thì bạn cần lưu ý về các
              thực phẩm nên và không nên ăn sau khi hàn răng. Cụ thể: 
            </p>
            <h3 id="title-3">Sau khi hàn răng 2 tiếng </h3>
            <p>
              Thực phẩm nên ăn: Nên ăn những thực phẩm mềm, dễ nuốt để hạn chế
              phải nhai và tác động đến miếng hàn như: Cháo, súp, canh, sữa
              chua, sinh tố v.vv…. 
            </p>
            <p>
              Thực phẩm nên ăn: Nên ăn những thực phẩm mềm, dễ nuốt để hạn chế
              phải nhai và tác động đến miếng hàn như: Cháo, súp, canh, sữa
              chua, sinh tố v.vv…. 
            </p>
            <p>
              Thực phẩm không nên ăn: Không nên ăn những đồ ăn dai, cứng như
              mía, đá, khô mực, gân bò v.vv.. vì có thể làm ảnh hưởng và gây
              bong miếng hàn. Bên cạnh đó, bạn không nên ăn những đồ quá nóng
              hoặc quá lạnh vì chúng kích thích miếng trám trở nên nhạy cảm, làm
              giảm độ bền của miếng trám.
            </p>
            <h3 id="title-4">Sau khi hàn răng 1 – 2 ngày </h3>
            <p>
              Thực phẩm nên ăn: Bạn vẫn ưu tiên những đồ ăn mềm, nguội hoặc ấm. 
            </p>
            <p>
              Thực phẩm không nên ăn: Không nên ăn những đồ ăn dai, cứng quá
              nóng hoặc quá lạnh như đá, khô mực, gân bò v.vv.. Bởi vì thời điểm
              này, bạn vẫn mới hàn, trám răng và độ bám chắc chưa ổn định. 
            </p>
            <h3 id="title-5">Sau khi hàn răng 1 tuần </h3>
            <p>
              Thực phẩm nên ăn: Bạn có thể ăn hầu hết các loại thực phẩm yêu
              thích. Tuy nhiên, bạn vẫn nên chú ý khi ăn thực phẩm dai, cứng như
              mía, thịt bò, cá khô v.vv..
            </p>
            <p>
              Thực phẩm không nên ăn: Hạn chế ăn đồ ngọt vì có thể làm tăng nguy
              cơ sâu răng. Hạn chế đồ uống có gas, bia, thuốc lá vì có thể gây ố
              vàng, mất tính thẩm mỹ của răng, miếng trám răng. 
            </p>
            <h3 id="title-6">Sau khi hàn răng 1 tháng </h3>
            <p>
              Đây là thời điểm miếng hàn đã bám chắc vào răng, bạn cũng dần “làm
              quen” và không còn cảm thấy cộm khi ăn nhai. Bạn có thể ăn uống
              như bình thường trở lại. Tuy nhiên, vẫn nên hạn chế đồ ngọt, đồ
              uống có gas, cà phê, thuốc lá để bảo vệ răng miệng tốt hơn. 
            </p>
            <h2 id="title-7">4 Lưu ý để tăng độ bền khi hàn răng</h2>
            <p>
              Để hàn răng có độ bền cao và hiệu quả bảo vệ răng tốt bạn cần lưu
              ý những vấn đề sau:
            </p>
            <p>
              Lựa chọn địa chỉ uy tín: Địa chỉ nha khoa uy tín sẽ giúp bạn kiểm
              tra và đánh giá chính xác tình trạng răng, đưa ra phương pháp hàn
              răng phù hợp. Cùng với chất liệu hàn cao cấp, bác sĩ tay nghề cao
              sẽ thực hiện quy trình hàn răng chuẩn, đảm bảo hiệu quả cao.
            </p>
            <p>
              Chế độ vệ sinh, chăm sóc răng miệng: Bạn nên thực hiện chải răng
              ít nhất 2 lần mỗi ngày bằng bàn chải lông mềm. Sử dụng thêm nước
              súc miệng, chỉ nha khoa, tăm nước để làm sạch các kẽ răng. 
            </p>
            <p>
              Khám định kỳ: Bạn nên đi khám nha khoa định kỳ 6 tháng/lần để kiểm
              tra tình trạng răng miệng và phát hiện sớm các vấn đề nha khoa.
            </p>
            <p>
              Đeo máng bảo vệ răng khi ngủ: Nếu bạn thường nghiến răng khi ngủ,
              hãy đeo máng bảo vệ răng để tránh làm hỏng miếng trám.
            </p>
            <h2 id="title-8">Hàn răng ở đâu an toàn và uy tín</h2>
            <p>
              Để lựa chọn được địa chỉ nha khoa uy tín, bạn cần dựa vào các yếu
              tố như: cơ sở vật chất khang trang, máy móc, công nghệ hiện đại,
              đội ngũ bác sĩ giỏi chuyên môn, giàu kinh nghiệm và chi phí dịch
              vụ rõ ràng, chính sách bảo hành minh bạch. Điển hình như Dental
              Clinic – một trong những cơ sở nha khoa uy tín hàng đầu, hội tụ
              đầy đủ các yếu tố về một đơn vị cung cấp dịch vụ chất lượng
            </p>

            <img src="/img/dentis/chamsocrangmieng2.png" alt="" />
          </div>
        </div>
        <div className="article-section-right">
          <div className="right-heading">BÀI VIẾT LIÊN QUAN</div>
          <div className="list-article">
            {listArticle.map((article, index) => {
              return <TinyArticle article={article} key={index} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
