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
        <p>Tiêm phòng vaccine</p>
      </div>
      <section className="service-section">
        <div className="section-heading">DỊCH VỤ TIÊM VACCINE</div>
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
            Hiện tại tiêm phòng vaccine vẫn là biện pháp hữu hiệu nhất để bảo vệ
            thú cưng khỏi các bệnh truyền nhiễm nguy hiểm và nguy cơ lây lan.
            Petpals cung cấp dịch vụ tiêm phòng vaccine uy tín và chất lượng cho
            thú cưng của bạn. Tiêm phòng đầy đủ sẽ tạo ra hệ miễn dịch chủ động
            và phòng ngừa nguy cơ tử vong do mắc các bệnh truyền nhiễm nguy hiểm
            cho thú cưng. Khi được tiêm vaccine, cơ thể thú cưng sẽ tự sản xuất
            kháng thể để chống lại các virus gây bệnh. Điều này đảm bảo sức khỏe
            và tính mạng của thú cưng được bảo vệ một cách hiệu quả.
          </p>
          <p>
            Tại Petpals, chúng tôi không chỉ đảm bảo tuân thủ lịch tiêm vaccine
            chính xác, mà còn cung cấp dịch vụ tư vấn chuyên nghiệp trước và hỗ
            trợ sau khi tiêm. Đội ngũ bác sĩ thú y giàu kinh nghiệm sẽ tư vấn và
            giải đáp mọi thắc mắc và đảm bảo bạn hiểu rõ về quy trình và tác
            dụng của Vaccine.
          </p>
          <p>
            Bên cạnh đó, hệ thống không ngừng nâng cấp và đầu tư các trang thiết
            bị y tế hiện đại và công nghệ tiên tiến giúp chẩn đoán chính xác và
            điều trị hiệu quả. Sử dụng các dụng cụ và thiết bị y tế hàng đầu
            trong ngành thú y để đảm bảo khả năng chẩn đoán nhanh chóng và xử lý
            các tình huống khẩn cấp một cách chính xác.
          </p>
          <p>
            Chúng tôi luôn đặt sức khỏe thú cưng lên hàng đầu và đảm bảo quy
            trình tiêm phòng an toàn. Trước khi tiêm vaccine, chúng tôi tư vấn
            về các biện pháp chuẩn bị cần thiết, như tẩy giun và kiểm tra sức
            khỏe tổng quát của thú cưng. Sau khi tiêm vaccine, chúng tôi sẽ
            hướng dẫn bạn về cách chăm sóc sau tiêm, giúp thú cưng của bạn đạt
            được hiệu quả cao nhất và hồi phục nhanh chóng. Dưới đây là lịch
            trình tiêm vaccine được sử dụng tại Petpals
          </p>
          <div>
            <h3>Lịch tiêm vaccine chó</h3>
            <ul>
              <li>
                Chó 2 tháng tuổi: Tiêm vaccine tổng hợp 5 bệnh như Bệnh Care,
                Bệnh  Parvo, Bệnh viêm gan truyền nhiễm, Bệnh ho cũi chó và Bệnh
                phó cúm.
              </li>
              <li>
                Sau mũi 1 21 ngày: Tiêm mũi 2 vaccine tổng hợp 7 bệnh, bao gồm
                cả Bệnh Leptospirosis và Bệnh Corona.
              </li>
              <li>
                Sau mũi 2 28 ngày: Tiêm mũi 3 vaccine tổng hợp 7 bệnh để đảm bảo
                sự bảo vệ toàn diện cho chó yêu quý của bạn.
              </li>
              <li>
                Chó 3 tháng tuổi trở lên: Tiêm 1 mũi vaccine phòng bệnh dại.
              </li>
              <li>
                Chó đã chích ngừa đầy đủ cũng cần tiêm nhắc lại định kỳ hàng
                năm: 1 mũi vaccine tổng hợp 7 bệnh và 1 mũi vaccine phòng bệnh
                dại.
              </li>
            </ul>
          </div>
          <div>
            <h3>Lịch tiêm vaccine mèo:</h3>
            <ul>
              <li>
                Mèo từ 2 tháng tuổi: Tiêm vaccine tổng hợp 4 bệnh như Bệnh Giảm
                bạch cầu, Bệnh Viêm mũi – khí quản truyền nhiễm và Bệnh Hô hấp
                do Herpevirus.
              </li>
              <li>
                Sau mũi 1 28 ngày: Tiêm mũi 2 vaccine tổng hợp 4 bệnh để đảm bảo
                hiệu quả phòng ngừa bệnh tốt nhất.
              </li>
              <li>
                Sau mũi 2 28 ngày: Tiêm mũi 3 vaccine tổng hợp 4 bệnh để bảo vệ
                sức khỏe mèo yêu của bạn.
              </li>
              <li>
                Mèo từ 3 tháng tuổi trở lên có thể tiêm vaccine phòng bệnh dại.
              </li>
              <li>
                Nên hoàn thành việc tiêm vaccine trước khi mèo tròn 1 năm tuổi.
                Sau đó, tiêm nhắc lại hàng năm với tất cả các loại vaccine.
              </li>
            </ul>
          </div>
          <div>
            <h3>Tại Tropicpet, chúng tôi cam kết:</h3>
            <ul>
              <li>
                Đội ngũ bác sĩ thú y giàu kinh nghiệm, tận tâm và yêu động vật.
              </li>
              <li>
                Sử dụng vaccine chất lượng cao từ các nhà sản xuất của Mỹ và
                Châu Âu
              </li>
              <li>
                Đảm bảo tiêm vaccine đúng lịch trình và an toàn tuyệt đối cho
                thú cưng của bạn.
              </li>
              <li>
                Tư vấn chuyên nghiệp về lịch trình vaccine và các vấn đề liên
                quan đến sức khỏe của thú cưng.
              </li>
              <li>
                Tạo môi trường thân thiện, an toàn và thoải mái cho thú cưng của
                bạn.
              </li>
            </ul>
          </div>
          <p>
            Hãy đến với Petpals chi nhánh gần nhất ngay hôm nay và đặt lịch tiêm
            vaccine cho thú cưng của bạn! Chúng tôi sẵn sàng đồng hành cùng bạn
            trong việc bảo vệ sức khỏe và hạnh phúc của thú cưng yêu quý.
          </p>
        </div>
      </section>
    </main>
  );
}
