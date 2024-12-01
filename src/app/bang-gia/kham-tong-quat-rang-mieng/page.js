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
      <section
        className="service-section"
        style={{
          marginTop: "30px",
        }}
      >
        <div className="introduce-service">
          <div className="content-w">
            <p>
              Bảng giá dịch vụ khám tổng quát răng miệng tại Dental Clinic bao
              gồm các dịch vụ cơ bản như khám tổng quát, lấy cao răng, tẩy
              trắng, chụp X-quang, và tư vấn.
            </p>
            <h2>1. Khám tổng quát răng miệng</h2>
            <p>Giá: Thường miễn phí hoặc từ 50.000 - 200.000 VNĐ</p>
            <p>
              Mô tả: Bác sĩ thực hiện kiểm tra tổng quát tình trạng răng miệng,
              xem xét các vấn đề về sâu răng, viêm nướu, hay các bệnh lý khác.
            </p>
            <h2>2. Chụp X-quang răng</h2>
            <p>Giá: Từ 100.000 - 300.000 VNĐ mỗi phim</p>
            <p>
              Mô tả: Chụp X-quang để đánh giá rõ hơn các vấn đề như răng ngầm,
              sâu răng, và cấu trúc xương hàm.
            </p>
            <h2>3. Nhổ răng</h2>
            <p>
              Giá: Từ 200.000 - 1.500.000 VNĐ tùy loại răng và mức độ phức tạp
            </p>
            <p>
              Mô tả: Nhổ các răng bị sâu nặng hoặc răng khôn mọc lệch gây đau
              nhức
            </p>
            <h2>4. Vệ sinh răng miệng</h2>
            <p> Giá: Từ 200.000 - 300.000 VNĐ</p>

            <h2>5. Tư vấn kế hoạch điều trị</h2>
            <p> Giá: Thường miễn phí hoặc từ 100.000 - 200.000 VNĐ</p>
            <p>
              Mô tả: Bác sĩ tư vấn về các phương án điều trị phù hợp với tình
              trạng răng miệng cụ thể của bệnh nhân.
            </p>
            <p>
              Dental Clinic cam kết đem đến dịch vụ chăm sóc sức khỏe răng miệng
              chất lượng cao nhất và minh bạch về giá cả. Nếu bạn có bất kỳ thắc
              mắc nào hoặc cần hỗ trợ về bảng giá dịch vụ của Dental Clinic vui
              lòng liên hệ qua hotline: 19008886 để được tư vấn và hỗ trợ nhanh
              nhất! Dental Clinic hân hạnh được phục vụ!
            </p>
          </div>
          <div className="service-img">
            <img src="/img/dentis/thamkham1.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
