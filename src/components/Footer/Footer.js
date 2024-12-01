import { Socialicon } from "../Socialicon/Socialicon";
import "./style.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="row row-1">
        <div className="logo">
          <img src="/img/dentis/logo-footer.png" alt="" />
        </div>
        <div className="working-time">Thời gian làm việc</div>
        <div className=" contact-info">Thông tin liên hệ</div>
      </div>
      <div className="row">
        <div className="about">
          Hệ thống Dental Clinic, nơi quy tụ dội ngũ bác sĩ hàng đầu trong lĩnh
          vực nha khoa giúp khách hàng lấy lại nụ cười tự tin.
        </div>
        <ul className="working-time-more">
          <li>Chúng tôi mở cửa tất cả các ngày trong tuần</li>
          <li>Khung giờ mở cửa 08:00-21:00</li>
          <li>Trực đêm từ 21:00</li>
        </ul>
        <ul className="contact-info-more">
          <li className="contact-item">
            <span>
              <img src="/icon/material-symbols_mail-outline.svg" alt="" />
            </span>
            dentalclinic@gmail.com
          </li>
          <li className="contact-item">
            <span>
              <img src="/icon/ph_phone-fill.svg" alt="" />
            </span>
            0977354956
          </li>
          <li className="contact-item">
            <span>
              <img src="/icon/mdi_location.svg" alt="" />
            </span>
            Số 96, Định Công, Hà Nội
          </li>
          <li className="contact-item">
            <span>
              <img src="/icon/mdi_earth.svg" alt="" />
            </span>
            www.dentalclinic.com
          </li>
        </ul>
      </div>
      <hr />
      <div className="footer-bottom">
        <Socialicon />
        <div>Copyright @ 2024 Dental Clinic. All Rights Reserved</div>
      </div>
    </footer>
  );
};
