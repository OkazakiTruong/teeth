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
        <p>Đỡ đẻ - hộ sinh</p>
      </div>
      <section className="service-section">
        <div className="section-heading">DỊCH VỤ ĐỠ ĐẺ - HỘ SINH</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/service-img/ho_sinh.jpg" alt="" />
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
            Bạn là một người yêu thích chó mèo và luôn muốn tạo ra những kỷ niệm
            đáng nhớ trong cuộc sống của chúng? Bạn đang lên kế hoạch cho quá
            trình sinh đẻ của những chú chó mèo nhỏ của mình và muốn đảm bảo mọi
            thứ diễn ra an toàn và suôn sẻ? Hãy để Petpals trở thành địa điểm
            đáng tin cậy cho dịch vụ hỗ trợ sinh đẻ và chăm sóc chó mèo.
          </p>
          <p>
            Tại Petpals, chúng tôi cam kết bạn và thú cưng sẽ hài lòng tuyệt đối
            bởi:
          </p>
          <div>
            <ul>
              <li>
                Sự tận tâm và chuyên nghiệp: Đội ngũ bác sĩ giàu kinh nghiệm và
                yêu động vật của chúng tôi sẽ đảm bảo rằng mẹ chó mèo và con non
                của bạn được chăm sóc tận tâm và chuyên nghiệp. Chúng tôi hiểu
                rằng quá trình đẻ là một giai đoạn quan trọng và nhạy cảm, vì
                vậy chúng tôi sẽ đồng hành cùng bạn từ khi chuẩn bị cho đến khi
                chào đón các bé con đáng yêu.
              </li>
              <li>
                An toàn và hiện đại: Chúng tôi tuân thủ các quy trình đỡ đẻ và
                hộ sinh an toàn, sử dụng thiết bị và công nghệ tiên tiến nhất.
                Petpals cam kết đảm bảo rằng mẹ chó mèo và con non của bạn sẽ
                không gặp rủi ro từ ngạt thở, nhiễm trùng hay những tác động
                tiêu cực khác. Sự an toàn của thú cưng luôn là ưu tiên hàng đầu
                của chúng tôi.
              </li>
              <li>
                Môi trường chăm sóc tốt nhất: Tại Petpals, chúng tôi hiểu rằng
                sự thoải mái và không gây stress cho mẹ chó mèo là rất quan
                trọng để đảm bảo quá trình đẻ suôn sẻ. Chúng tôi tạo ra một môi
                trường thân thiện, ấm cúng và thoải mái, nơi chó mèo mẹ có thể
                tìm thấy sự yên tĩnh và sự bảo vệ để sinh con một cách tự nhiên
                và an toàn.
              </li>
              <li>
                Chăm sóc tận tâm sau đẻ: Dịch vụ đỡ đẻ, hộ sinh tại Petpals
                không chỉ kết thúc khi quá trình đẻ thành công. Chúng tôi cũng
                cung cấp sự hỗ trợ sau sinh tận tâm, bao gồm các lời khuyên chăm
                sóc và dinh dưỡng cho mẹ chó mèo và con non. Chúng tôi luôn sẵn
                lòng giúp bạn xử lý bất kỳ khó khăn nào trong việc nuôi dưỡng và
                chăm sóc thú cưng.
              </li>
            </ul>
          </div>
          <p>
            Hãy để Petpals đồng hành cùng bạn trong hành trình đẻ đáng nhớ của
            chó mèo yêu quý của bạn. Đội ngũ chuyên gia của chúng tôi sẽ đảm bảo
            rằng bạn và chó mèo của bạn nhận được sự chăm sóc tốt nhất trong
            suốt quá trình này.
          </p>
          <p>
            Liên hệ với Petpals chi nhánh gần nhất ngay hôm nay để biết thêm
            thông tin chi tiết và đặt lịch hỗ trợ đỡ đẻ cho chó mèo của bạn.
            Chúng tôi cam kết mang đến sự an toàn và thành công cho quá trình đẻ
            của thú cưng của bạn.
          </p>
        </div>
      </section>
    </main>
  );
}
