import React from "react";
import "./style.scss";
import { Carousel } from "@/components/Carousel/Carousel";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Về chúng tôi</p>
      </div>
      <section className="about-section">
        <h2 className="section-heading">VỀ CHÚNG TÔI</h2>
        <div className="section-content">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              <p>Dental Clinic - Thành công từ những nụ cười.</p>
              <p>
                Dental Clinic hiểu rằng, mỗi khách hàng đến với chúng tôi luôn
                có 1 câu chuyện riêng, một nhu cầu và mong muốn riêng. 
              </p>
              <p>
                Thấu hiểu được tâm lý đó Dental Clinic lựa chọn giải pháp tối ưu
                cho khách hàng trong quá trình tư vấn nha khoa thẩm mỹ. Đặc
                biệt, chúng tôi tự hào rằng các kỹ thuật thẩm mỹ nha của Dental
                Clinic được cập nhật thường xuyên, là công nghệ tiên tiến và mới
                nhất trên thế giời, bảo toàn răng gốc tối đa, an toàn, bêng vững
                theo thời gian. Hữu xạ tự nhiên hương đó cũng là lý do vì sao
                Dental Clinic lại có tỷ lệ giới thiệu khách hàng từ khách hàng
                cũ cao nhất trong giới nha khoa thẩm mỹ.
              </p>
              <p>
                Với mong muốn đồng hành cùng nụ cười doanh nhân, Dental Clinic
                luôn đặt quan điểm khách hàng là trọng tâm của sự phát triển,
                trách nhiệm, sự bền vững và uy tín nhằm mang đến vẻ đẹp an toàn,
                bền vững cho khách hàng.
              </p>
              <p style={{ textAlign: "right" }}>
                Thân ái, đội ngũ Dental Clinic
              </p>
            </div>
            <div className="about-img"></div>
          </div>
        </div>
      </section>
      <section className="mission-section">
        <h2 className="section-heading">
          TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ CỐT LÕI
        </h2>
        <div className="content-wrapper">
          <div className="content-left">
            <h3>TẦM NHÌN:</h3>
            <div className="mission-item">
              <p>
                Trờ thành hệ thống chăm sóc thú cưng chất lương hàng đầu Việt
                Nam
              </p>
            </div>
            <h3>SỨ MỆNH CỦA CHÚNG TÔI:</h3>
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
                cộng đồng và xã hội là nhiệm vụ không thể tách rời với việc gia
                tăng giá trị của cổ đông.
              </p>
            </div>
            <div className="mission-item">
              <p>
                Xây dựng môi trường làm việc văn minh, lịch sự, tử tế, yêu
                thương, trách nhiệm.
              </p>
            </div>
            <h3>GIÁ TRỊ CỐT LÕI:</h3>
            <div className="mission-item">
              <p>
                Coi nhân sự là yếu tố then chốt để xây dựng và phát triển doanh
                nghiệp. Đào tạo nhân sự về năng lực chuyên môn và văn hóa ứng xử
              </p>
            </div>
            <div className="mission-item">
              <p>
                Sự tin cậy đến từ những cam kết được thể hiện qua những giá trị
                thiết thực chúng tôi mang lại cho khách hàng, nhà đầu tư và đối
                tác.
              </p>
            </div>
            <div className="mission-item">
              <p>
                Để đạt được mục tiêu của mình Tropicpet luôn coi trọng và đề cao
                trách nhiệm với khách hàng, đối tác, cổ đông, người lao động và
                cộng đồng.
              </p>
            </div>
          </div>
          <div className="content-right"></div>
        </div>
      </section>
      <section className="doctor-section">
        <h2 className="section-heading">ĐỘI NGŨ BÁC SĨ CỦA CHÚNG TÔI</h2>
        <div className="doctor-container">
          <Carousel type="doctor" />
        </div>
      </section>
    </main>
  );
}
