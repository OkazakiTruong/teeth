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
        <p>Siêu âm, x-quang, xét nghiệm</p>
      </div>
      <section className="service-section">
        <div className="section-heading">
          DỊCH VỤ SIÊU ÂM, X-QUANG, XÉT NGHIỆM
        </div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/service-img/sieu_am.jpg" alt="" />
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
            Bạn quan tâm đến sức khỏe và chăm sóc cho thú cưng của mình? Hãy để
            Petpals đảm nhận vai trò chăm sóc y tế toàn diện cho bạn. Với dịch
            vụ siêu âm, chụp X-quang và xét nghiệm, chúng tôi cam kết đem lại
            chẩn đoán chính xác và điều trị tối ưu cho thú cưng của bạn.
          </p>

          <div>
            <ul>
              <li>
                <b>Siêu âm:</b> Để đảm bảo thú cưng của bạn luôn khỏe mạnh,
                chúng tôi cung cấp dịch vụ siêu âm chuyên sâu. Bằng phương pháp
                này, chúng tôi có thể đánh giá tình trạng sức khỏe, chẩn đoán
                các vấn đề mang thai, khối u, và các vấn đề khác liên quan đến
                vùng bụng.
              </li>
              <li>
                <b>Chụp X-quang:</b> Chúng tôi sở hữu máy chụp X-quang hiện đại,
                giúp phát hiện các vấn đề về xương khớp, khối u, cũng như các
                vật thể lạ trong cơ thể thú cưng. Chụp X-quang còn là công cụ
                quan trọng để chẩn đoán nhiều loại bệnh khác nhau.
              </li>
              <li>
                <b>Xét nghiệm:</b> Đội ngũ chuyên gia y tế của chúng tôi cung
                cấp đa dạng các loại xét nghiệm, bao gồm xét nghiệm máu, xét
                nghiệm virus, xét nghiệm kháng thể dại, xét nghiệm nước tiểu,
                xét nghiệm da, xét nghiệm phân và kháng sinh đồ. Nhờ vào các xét
                nghiệm chất lượng, chúng tôi đảm bảo bạn sẽ có thông tin đầy đủ
                về sức khỏe của thú cưng, từ đó đưa ra quyết định điều trị chính
                xác.
              </li>
            </ul>
          </div>
          <p>
            Chúng tôi cam kết đặt sức khỏe và sự an toàn của thú cưng lên hàng
            đầu. Đội ngũ bác sĩ thú y chuyên môn cao sẽ tận tâm và chu đáo trong
            từng quy trình khám và xử lý. Chúng tôi luôn lắng nghe và tư vấn với
            tình yêu và sự quan tâm, đảm bảo rằng quyết định điều trị dựa trên
            lợi ích tốt nhất cho em pet của bạn.
          </p>
        </div>
      </section>
    </main>
  );
}
