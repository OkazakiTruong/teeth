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
        <p>Cấp cứu 24/24</p>
      </div>
      <section className="service-section">
        <div className="section-heading">DỊCH VỤ CẤP CỨU 24/24</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/service-img/cap-cuu-24.png" alt="" />
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
            Khi thú cưng của bạn gặp phải các tình huống khẩn cấp, nguy hiểm
            như khó đẻ, nuốt dị vật, ngộ độc, tai nạn, cắn nhau,… hãy liên hệ
            ngay với chi nhánh Petpals gần bạn nhất để nhận được các hỗ trợ y tế
            kịp thời. Dịch vụ cấp cứu thú cưng của chúng tôi hoạt động 24/24 tất
            cả các ngày bao gồm cả các ngày cuối tuần và lễ, tết. Dưới đây là
            thông tin liên hệ của các chi nhánh Petpals, vì tính cấp bách hãy
            liên hệ ngay tới hotline chi nhánh gần bạn nhất để nhận được hỗ trợ
            kịp thời:
          </p>
          <p>
            Để đảm bảo rằng thú cưng của bạn luôn nhận được sự chăm sóc tốt
            nhất. Petpals có đội ngũ bác sĩ thú y giàu kinh nghiệm, được đào tạo
            bài bản, chuyên sâu luôn sẵn sàng đáp ứng mọi tình huống khẩn cấp,
            cấp cứu liên quan đến sức khỏe của thú cưng của bạn.
          </p>
          <p>
            Bên cạnh đó, hệ thống không ngừng nâng cấp và đầu tư các trang thiết
            bị y tế hiện đại và công nghệ tiên tiến giúp chẩn đoán chính xác và
            điều trị hiệu quả. Sử dụng các dụng cụ và thiết bị y tế hàng đầu
            trong ngành thú y để đảm bảo khả năng chẩn đoán nhanh chóng và xử lý
            các tình huống khẩn cấp một cách chính xác.
          </p>
          <div>
            <p>
              Với dịch vụ cấp cứu thú cưng 24/24 của Petpals, bạn có thể yên tâm
              vì:
            </p>
            <ul>
              <li>
                Dịch vụ hoạt động 24/24 tất cả các ngày trong tuần bao gồm cả
                các ngày nghỉ và lễ tết.
              </li>
              <li>
                Đội ngũ bác sĩ và nhân viên luôn sẵn sàng túc trực, với kinh
                nghiệm và kiến thức chuyên môn, họ sẽ đưa ra những quyết định
                nhanh chóng và chính xác để cứu sống, cải thiện tình trạng sức
                khỏe cho thú cưng của bạn.
              </li>
              <li>
                Petpals hiểu rằng trong mọi tình huống khẩn cấp, thú cưng của
                bạn cận có sự chăm sóc và điều trị ngay lập tức. Do vậy, chúng
                tôi đặt sự ưu tiên cao nhất cho các trường hợp này, đảm bảo thú
                cưng của bạn nhận được sự chăm sóc và điều trị ngay khi được
                tiếp nhận.
              </li>
              <li>
                Các thiết bị máy móc, vật tư y tế và dụng cụ hỗ trợ quá trình
                cấp cứu luôn sẵn sàng.
              </li>
              <li>
                Chúng tôi luôn tận dụng tối đa mọi nguồn lực để tiết kiệm chi
                phí cho khách hàng, bạn có thể yên tâm rằng sẽ luôn nhận được
                chất lượng dịch vụ tốt nhất với chi phí phù hợp.
              </li>
            </ul>
            Đội ngũ Petpals sẽ đồng hành cùng bạn và thú cưng của mình trong mọi
            tình huống khẩn cấp, cấp cứu. Chúng tôi luôn sẵn sàng để hỗ trợ và
            đảm bảo rằng thú cưng của bạn nhận được sự chăm sóc y tế tốt nhất,
            bất kể khung thời gian hay tình huống khẩn cấp nào.
          </div>
        </div>
      </section>
    </main>
  );
}
