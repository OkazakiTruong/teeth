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
        <p>Spa-grooming</p>
      </div>
      <section className="service-section">
        <div className="section-heading">SPA-GROOMING</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/spa-grooming/spa-grooming-1.jpg" alt="" />
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
            Chúng tôi hiểu rằng cơ thể sạch sẽ là một phần quan trọng giúp bảo
            vệ sức khỏe của thú cưng. Quy trình Spa – Grooming chuyên nghiệp tại
            Petpals được đội ngũ chuyên viên giàu kinh nghiệm của chúng tôi là
            những người được đào tạo bài bản tại các trung tâm hàng đầu tại Hà
            Nội thực hiện. Họ không chỉ là những người yêu thú cưng mà còn là
            những chuyên gia trong việc chăm sóc và làm đẹp cho các bé.
          </p>
          <p>
            Từ việc vệ sinh, tắm gội, cắt tỉa lông đến làm móng, mỗi dịch vụ đều
            được thực hiện kỹ lưỡng với sự tận tâm và chuyên nghiệp. Chúng tôi
            cam kết sẽ mang lại cho thú cưng của bạn không chỉ là vẻ ngoài sạch
            sẽ, xinh xắn mà còn là tinh thần thư thái và hạnh phúc. Đến với
            Tropicpet, bạn sẽ hoàn toàn yên tâm và hài lòng với dịch vụ chăm sóc
            Spa – Grooming cao cấp dành cho thú cưng của bạn.
          </p>
          <p>
            Petpals cung cấp sẵn các gói combo spa, làm đẹp để khách hàng dễ
            dàng lựa chọn gói dịch vụ cho các bé cún miu nhà mình. Gói combo tắm
            làm sạch 8 bước, gói combo cạo tắm 9 bước, gói combo cắt tỉa 10
            bước. Tất cả đều sử dụng các sản phẩm sữa tắm, dưỡng lông chất lượng
            cao và an toàn, cùng với hệ thống máy sưởi, máy sấy và dụng cụ,
            thiết bị hỗ trợ chuyên dụng.
          </p>
          <p>
            Bên cạnh các gói combo có sẵn khách hàng có thể lựa chọn thêm các
            dịch vụ ngoài như: Tắm với sữa tắm nấm, sữa tắm trị rận, nhuộm lông,
            cạo lông không tắm…
          </p>
          <div className="table">
            <div className="row row-heading">
              <div style={{ width: "48px", height: "41px" }}>Stt</div>
              <div style={{ width: "505px", height: "41px" }}>Hạng mục</div>
              <div style={{ width: "196px", height: "41px" }}>
                Combo Tắm (200K)
              </div>
              <div style={{ width: "175px", height: "41px" }}>
                Combo Cạo Tắm (250k)
              </div>
              <div style={{ width: "175px", height: "41px" }}>
                Combo Cắt Tỉa (350K)
              </div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>1</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Đón tiếp, xin thông tin và tư vấn`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>2</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Kiểm tra sức khỏe lâm sàng`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>3</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Nhổ lông tai, vệ sinh tai, cạo bàn`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>4</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Cắt móng, mài móng`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>5</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Vắt tuyến hôi`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>6</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Tắm sạch sẽ & Massage`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>7</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Sấy khô, vệ sinh tai lại, chải lông`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>8</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Xịt nước hoa, dưỡng lông`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>9</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Chải & làm bông lông`}
              </div>
              <div style={{ width: "196px", height: "41px" }}></div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>10</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Cắt tạo kiểu theo yêu cầu`}
              </div>
              <div style={{ width: "196px", height: "41px" }}></div>
              <div style={{ width: "175px", height: "41px" }}></div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
          </div>
          <p>
            Khác với các đơn vị chỉ làm Spa, chúng tôi có đội ngũ y bác sĩ là
            những là chuyên gia hàng đầu tại Hà Nội trong lĩnh vực thăm khám và
            chăm sóc sức khỏe thú cưng. Do vậy khi cho bé đến Spa – Grooming tại
            Petpals trong bước tiếp đón và khám lâm sàng, thú cưng của bạn sẽ
            được tư vẫn miễn phí các vấn đề về dinh dưỡng, sức khỏe. Giúp phát
            hiện sớm các biểu hiện gây bệnh và được tư vấn phương pháp điều trị
            kịp thời để các bé luôn được khỏe mạnh, chủ nuôi sẽ tiết kiệm chi
            phí và cơ hội điều trị hơn so với khi thú cưng đã phát bệnh.
          </p>
          <p>
            Petpals mang đến cho thú cưng của bạn dịch vụ Spa – Grooming chất
            lượng cao và sự chăm sóc tận tâm, không chỉ là sắc đẹp mà còn là sức
            khỏe, yếu tố then chốt giúp các bé có được một cuộc sống khỏe mạnh,
            hạnh phúc. Hãy đến và trải nghiệm dịch vụ Spa – Grooming tại
            Tropicpet ngay hôm nay để thú cưng của bạn được tận hưởng một buổi
            Spa thư giãn thả ga và dịch vụ chăm sóc toàn diện chuyên nghiệp.
          </p>
          <p>Petpals – Đồng hành cùng sức khỏe của thú cưng.</p>
        </div>
      </section>
    </main>
  );
}
