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
        <p>Khách sạn thú cưng</p>
      </div>
      <section className="service-section">
        <div className="section-heading">DỊCH VỤ KHÁCH SẠN THÚ CƯNG</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/petHotel/noi-tru-khach-san-1.jpg" alt="" />
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
            Thú cưng là thành viên quan trọng trong gia đình và bạn muốn cho
            chúng một cuộc sống tốt nhất, nhưng đôi khi bạn và gia đình lại có
            việc đi xa, đi công tác, đi du lịch, về quê… mà không tiện mang thú
            cưng theo hoặc đơn giản là bận một vài ngày nên không có thời gian
            chăm sóc. Nếu không thể gửi nhờ nhà bạn bè, người thân thì nhu cầu
            gửi các bé đến một địa chỉ chăm sóc chuyên nghiệp, uy tín là điều vô
            cùng rất cần thiết.
          </p>
          <p>
            Đừng lo lắng, Tại Petpals chúng tôi cung cấp dịch vụ khách sạn thú
            cưng: chăm sóc tận tâm, chuyên nghiệp với chế độ dinh dưỡng và điều
            kiện tốt nhất cho các bé.
          </p>
          <h3>Chế độ chăm sóc hàng ngày:</h3>
          <div>
            <ul>
              <li>
                Hệ thống lưu trú độc lập: Mỗi bé sẽ có một chuồng riêng, đảm bảo
                không gian riêng tư và thoải mái nhất.
              </li>
              <li>
                Thú cưng được ăn uống, vệ sinh sạch sẽ, chuồng và môi trường
                được khử khuẩn kỹ càng hàng ngày.
              </li>
              <li>
                Hệ thống sưởi ấm, điều hòa và thông gió đảm bảo nhiệt độ và lưu
                thông khí trong phòng.
              </li>
              <li>
                Đặc biệt, chúng tôi sẽ dắt các bé đi vệ sinh và đi dạo ngày 2
                lần để các bé có thể vui đùa thoải mái nhất.
              </li>
              <li>
                {`Chế độ dinh dưỡng tối ưu cho các bé: Chúng tôi cung cấp thực đơn đa dạng bao gồm cơm, thịt gà, thịt lợn, pate, hạt dinh dưỡng,… tuỳ theo chế độ ăn của từng bé (dựa trên thông tin mà bạn cung cấp khi gửi bé đến).`}
              </li>
              <li>
                Nếu bạn muốn gửi kèm thức ăn của thú cưng, chúng tôi sẽ bảo quản
                và hâm nóng trước mỗi bữa ăn để đảm bảo các bé có thể tiếp tục
                thưởng thức thức ăn quen thuộc.
              </li>
              <li>
                Miễn phí combo tắm 8 bước chuẩn Hàn Quốc trước khi về cho các bé
                đã gửi trên 5 ngày.
              </li>
            </ul>
          </div>
          <h3>Lưu ý quan trọng:</h3>
          <div>
            <ul>
              <li>
                Dịch vụ này chúng tôi chỉ nhận các bé cún, miu khỏe mạnh đã tiêm
                phòng đầy đủ vaccine phòng bệnh. Vì vậy, khi gửi các bé ở
                Petpals, bạn sẽ không phải lo lắng việc thú cưng của mình bị lây
                nhiễm bệnh từ các bạn thú cưng khác.
              </li>
              <li>
                Bạn có thể gửi kèm đồ chơi và thức ăn quen thuộc của bé để làm
                cho thời gian lưu trú của bé tại Petpals trở nên thú vị và thoải
                mái hơn.
              </li>
            </ul>
          </div>
          <p>
            Petpals – Nơi mà thú cưng của bạn được yêu thương và chăm sóc như
            gia đình. Chúng tôi là lựa chọn tin cậy khi bạn không thể ở bên cạnh
            chăm sóc cho thú cưng của mình. Liên hệ với Tropicpet chi nhánh gần
            nhất ngay hôm nay để biết thêm thông tin chi tiết và đặt khách sạn
            cho bé bạn nhé.
          </p>
        </div>
      </section>
    </main>
  );
}
