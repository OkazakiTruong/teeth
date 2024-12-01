import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Dịch vụ</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Khám sức khỏe</p>
      </div>
      <section className="service-section">
        <div className="section-heading">DỊCH VỤ KHÁM SỨC KHỎE</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/service-img/tiem-vaccine.jpg" alt="" />
          </div>
          <div className="information-table">
            <div className="information-heading">
              <h2>THÔNG TIN LIÊN HỆ</h2>
              <p>Liên hệ với chúng tôi để được hỗ trợ một cách sớm nhất nhé!</p>
            </div>
            <div className="table">
              <div className="row">
                <div className="heading">Địa Chỉ:</div>
                <div className="content">
                  Số 96 Định Công, Hoàng Mai, Hà Nội
                </div>
              </div>
              <div className="row">
                <div className="heading">Hotline:</div>
                <div className="content">0977354956</div>
              </div>
              <div className="row">
                <div className="heading">Email:</div>
                <div className="content">petpals@gmail.com</div>
              </div>
              <div className="row">
                <div className="heading">Website:</div>
                <div className="content">www.petpals.com</div>
              </div>
              <div className="row">
                <div className="heading">Fanpage:</div>
                <div className="content">fb.com/Petpals</div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content">
          <p>
            Khi bạn nuôi thú cưng, chắc hẳn sẽ có lúc các bé gặp phải vấn đề về
            sức khoẻ? Bạn mới đón thú cưng về và muốn kiểm tra xem bé có đang
            gặp phải vấn đề gì về sức khoẻ không? Hoặc đơn giản là bạn muốn kiểm
            tra, tầm soát sức khoẻ hàng năm cho bé thú cưng của mình? Hãy đến
            với Hệ Thống Thú Y Petpals, chúng tôi cung cấp các gói dịch vụ Khám
            Sức Khỏe cho các bé cún miu từ cơ bản đến chuyên sâu. Với chuyên
            môn, kinh nghiệm, sự tận tâm và chuyên nghiệp của đội ngũ bác sĩ thú
            y hàng đầu Hà Nội, chúng tôi cam kết đem đến cho thú cưng của bạn
            một trải nghiệm khám sức khỏe chất lượng. Nhằm phát hiện sớm, chẩn
            đoán chính xác tình trạng sức khoẻ hiện tại và cung cấp giải pháp
            hiệu quả và an toàn cho các bé, giúp các bé có được một cuộc sống
            khỏe mạnh.
          </p>
          <h3>Gói khám sức khoẻ cho các bé cún miu tại hệ thống Petpals:</h3>
          <div className="table">
            <div className="row row-heading">
              <div style={{ width: "48px", height: "41px" }}>Stt</div>
              <div style={{ width: "596px", height: "41px" }}>Hạng mục</div>
              <div style={{ width: "139px", height: "41px" }}>Cơ bản</div>
              <div style={{ width: "158px", height: "41px" }}>Tổng quát</div>
              <div style={{ width: "158px", height: "41px" }}>Chuyên sâu</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>1</div>
              <div style={{ width: "596px", height: "41px" }}>
                {`Khám lâm sàng (Nhiệt độ, hô hấp, mắt, răng miệng, lông, da, vận động) `}
              </div>
              <div style={{ width: "139px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>2</div>
              <div style={{ width: "596px", height: "41px" }}>
                {`Xét nghiệm kiểm tra tai và da liễu (Theo phương pháp nhuộm mẫu Giemsa)`}
              </div>
              <div style={{ width: "139px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>3</div>
              <div style={{ width: "596px", height: "41px" }}>
                {`Kiểm tra tầm soát ký sinh trùng đường tiêu hoá`}
              </div>
              <div style={{ width: "139px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>4</div>
              <div style={{ width: "596px", height: "41px" }}>
                {`Siêu âm chuyên sâu ổ bụng (Tầm soát sức khoẻ các nội quan) `}
              </div>
              <div style={{ width: "139px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>5</div>
              <div style={{ width: "596px", height: "41px" }}>
                {`Xét nghiệm máu tổng quát (18 chỉ số sinh lý, các chỉ số chức năng gan thận)`}
              </div>
              <div style={{ width: "139px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>6</div>
              <div style={{ width: "596px", height: "41px" }}>
                {`Tư vấn chế độ dinh dưỡng`}
              </div>
              <div style={{ width: "139px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>7</div>
              <div style={{ width: "596px", height: "41px" }}>
                {`Xét nghiệm bệnh truyền nhiễm`}
              </div>
              <div style={{ width: "139px", height: "41px" }}></div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>8</div>
              <div style={{ width: "596px", height: "41px" }}>
                {`Xét nghiệm ký sinh trùng đường máu và xét nghiệm tế bào học`}
              </div>
              <div style={{ width: "139px", height: "41px" }}></div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>9</div>
              <div style={{ width: "596px", height: "41px" }}>
                {`Chụp X – Quang (Xương khớp, xoang bụng, xoang ngực)`}
              </div>
              <div style={{ width: "139px", height: "41px" }}></div>
              <div style={{ width: "158px", height: "41px" }}></div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>10</div>
              <div style={{ width: "596px", height: "41px" }}>
                {`Xét nghiệm nước tiểu`}
              </div>
              <div style={{ width: "139px", height: "41px" }}></div>
              <div style={{ width: "158px", height: "41px" }}></div>
              <div style={{ width: "158px", height: "41px" }}>x</div>
            </div>
          </div>
          <p>
            Cùng với chuyên môn, kinh nghiệm của các bác sĩ tại Petpals là hệ
            thống máy móc thiết bị hỗ trợ hiện đại, đầu tư bài bản cho kết quả
            nhanh, hiệu quả, chính xác. Các gói khám từ cơ bản đến chuyên sâu
            chúng tôi cung cấp bên trên sẽ giúp kiểm tra và đánh giá 
          </p>
          <div>
            <ul>
              <li>
                <b>Khám tổng quát:</b> Đo cân nặng, đo huyết áp, đo nhiệt độ,
                kiểm tra lông, da, tai, mắt, mũi, họng…
              </li>
              <li>
                <b>Siêu âm:</b> Kiểm tra tim, ổ bụng, gan, thận bằng phương pháp
                siêu âm.
              </li>
              <li>
                <b>Chụp X-quang:</b> Xác định tình trạng tim phổi, xương – khớp,
                hệ tiêu hóa, bàng quang và phát hiện khối u trong cơ thể.
              </li>
              <li>
                <b>Tư vấn chăm sóc:</b> Bác sĩ sẽ tư vấn về chế độ dinh dưỡng,
                chăm sóc, huấn luyện thú cưng để thú cưng của bạn phát triển một
                cách tốt nhất.
              </li>
            </ul>
          </div>

          <p>
            Dịch vụ khám lâm sàng sức khỏe cho thú cưng giúp phát hiện sớm các
            vấn đề sức khỏe tiềm ẩn, như nhiễm trùng, vi khuẩn, virus và các
            bệnh lý khác. Ngoài ra, nó cũng giúp xác định các chỉ số cơ bản của
            thú cưng như trọng lượng, chức năng nội tạng, và mức độ hoạt động.
            Với dịch vụ khám sức khỏe cho thú cưng, bạn có thể yên tâm và đảm
            bảo rằng thú cưng của bạn đang được theo dõi và chăm sóc một cách
            toàn diện. Chúng tôi sẽ đưa ra các khuyến nghị và giải pháp điều trị
            phù hợp nếu phát hiện bất kỳ vấn đề sức khỏe nào. Tại Petpals, chúng
            tôi không chỉ mang đến cho thú cưng của bạn những dịch vụ y tế hàng
            đầu, mà còn xây dựng mối quan hệ đáng tin cậy và gắn kết với chủ
            nuôi. Đội ngũ bác sĩ và nhân viên chuyên môn tận tâm, yêu động vật,
            sẽ luôn lắng nghe và tư vấn cho bạn về chăm sóc sức khỏe thú cưng
            một cách tốt nhất..
          </p>
          <p>
            Hãy đặt lịch hẹn ngay và đưa thú cưng của bạn đến chi nhánh Petpals
            gần nhất để trải qua dịch vụ Khám Sức Khỏe. Đảm bảo rằng thú cưng
            của bạn sẽ được kiểm tra một cách kỹ lưỡng và hưởng một cuộc sống
            khỏe mạnh, tràn đầy năng lượng.
          </p>
        </div>
      </section>
    </main>
  );
}
