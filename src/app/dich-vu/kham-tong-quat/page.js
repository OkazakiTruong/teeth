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
        <p>Khám tổng quát răng miệng</p>
      </div>
      <section className="service-section">
        <div className="section-heading">KHÁM TỔNG QUÁT RĂNG MIỆNG</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/dentis/chamsocrangmieng1.png" alt="" />
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
                <div className="content">dentalclinic@gmail.com</div>
              </div>
              <div className="row">
                <div className="heading">Website:</div>
                <div className="content">www.dentalclinic.com</div>
              </div>
              <div className="row">
                <div className="heading">Fanpage:</div>
                <div className="content">fb.com/dentalclinic</div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content">
          <p>
            Dịch vụ khám tổng quát răng miệng tại Dental Clinic bao gồm các bước
            như sau:
          </p>
          <p>1. Khám tổng quát và kiểm tra tình trạng răng miệng:</p>
          <ul>
            <li>
              Nha sĩ sẽ kiểm tra tổng thể khoang miệng, bao gồm răng, nướu, và
              xương hàm để phát hiện các vấn đề về sâu răng, viêm nướu, hoặc
              những bất thường khác. Điều này bao gồm việc kiểm tra màu sắc,
              hình dạng, và vị trí của từng chiếc răng cũng như tình trạng chung
              của nướu.
            </li>
          </ul>
          <p>2. Chụp X-quang (nếu cần thiết):</p>
          <ul>
            <li>
              Trong một số trường hợp, nha sĩ sẽ yêu cầu chụp X-quang để kiểm
              tra sâu hơn các cấu trúc bên dưới nướu, giúp phát hiện những vấn
              đề không thể nhìn thấy bằng mắt thường như răng sâu ẩn, răng khôn
              mọc lệch, hay những dấu hiệu của bệnh lý xương hàm.
            </li>
          </ul>
          <p>3. Tư vấn về vệ sinh và chăm sóc răng miệng:</p>
          <ul>
            <li>
              Sau khi kiểm tra, nha sĩ sẽ tư vấn về cách chăm sóc răng miệng tại
              nhà như cách chải răng đúng cách, sử dụng chỉ nha khoa, và chế độ
              ăn uống phù hợp để duy trì sức khỏe răng miệng tốt.
            </li>
          </ul>
          <p>4. Lên kế hoạch điều trị (nếu phát hiện vấn đề)</p>
          <ul>
            <li>
              Nếu phát hiện ra các vấn đề cần điều trị, nha sĩ sẽ lên kế hoạch
              chi tiết về các bước điều trị tiếp theo, ví dụ như hàn răng, làm
              sạch cao răng, hoặc thậm chí là nhổ răng khôn. Các bước này sẽ
              được thảo luận kỹ với bệnh nhân để đảm bảo phù hợp với tình trạng
              răng miệng và mong muốn cá nhân của họ.
            </li>
          </ul>
          <p>5. Tư vấn và nhắc nhở lịch tái khám:</p>
          <ul>
            <li>
              Nha sĩ sẽ khuyên bệnh nhân nên tái khám định kỳ, thường là mỗi 6
              tháng để đảm bảo sức khỏe răng miệng được duy trì tốt và phát hiện
              sớm các vấn đề tiềm ẩn.
            </li>
          </ul>
          <p>
            Đến với Dental Clinic không chỉ giúp đảm bảo sức khỏe răng miệng mà
            còn mang lại sự an tâm cho bệnh nhân thông qua quá trình chăm sóc
            chu đáo và tư vấn tận tình từ các bác sĩ có tay nghề cao.
          </p>
        </div>
      </section>
    </main>
  );
}
