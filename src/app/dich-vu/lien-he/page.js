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
        <p>Liên hệ</p>
      </div>
      <section className="contact-section">
        <div className="section-heading">THÔNG TIN LIÊN HỆ</div>
        <div className="contact-wrapper">
          <div className="contact-item contact-item-small">
            <div>
              <img src="/icon/fluent_person-support-20-filled.svg" alt="" />
              <h3>LIÊN HỆ</h3>
            </div>
            <p>0977354956</p>
          </div>
          <div className="contact-item">
            <div>
              <img src="/icon/lets-icons_map-fill.svg" alt="" />
              <h3>ĐỊA CHỈ</h3>
            </div>
            <p>96 P. Định Công, Định Công, Hoàng Mai, Hà Nội, Việt Nam</p>
          </div>
          <div className="contact-item contact-item-small">
            <div>
              <img src="/icon/material-symbols_mail.svg" alt="" />
              <h3>EMAIL</h3>
            </div>
            <p>Petpals@gmail.com</p>
          </div>
        </div>
      </section>
      <section className="form-contact-section">
        <div className="section-heading">GỬI THÔNG TIN CHO CHÚNG TÔI</div>
        <div className="form-wrapper">
          <div className="left">
            <div className="left-wrapper">
              <div className="item">
                <img src="/icon/mdi_company.svg" alt="" />
                <h3>BỆNH VIỆN THÚ Y PETPALS</h3>
              </div>
              <div className="item">
                <img src="/icon/bxs_map.svg" alt="" />
                <p>
                  Số 96 P. Định Công, Định Công, Hoàng Mai, Hà Nội, Việt Nam
                </p>
              </div>
              <div className="row">
                <div className="item">
                  <img src="/icon/material-symbols_mail.svg" alt="" />
                  <p>petpals@gmail.com</p>
                </div>
                <div className="item">
                  <img src="/icon/tabler_world.svg" alt="" />
                  <p>www.petpals.com</p>
                </div>
              </div>
              <div className="line"></div>
              <h3>FORM LIÊN HỆ</h3>
              <form action="">
                <input type="text" placeholder="Họ và tên (*)" />
                <div className="input-group">
                  <input type="text" placeholder="Số điện thoại (*)" />
                  <input type="text" placeholder="Địa chỉ email (*)" />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Nhập nội dung"
                ></textarea>
                <button>GỬI THÔNG TIN</button>
              </form>
            </div>
          </div>
          <div className="right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2677313645713!2d105.82854697471322!3d20.98190238938748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac5f17bd8c43%3A0x665ed8e8059205c3!2zOTYgUC4gxJDhu4tuaCBDw7RuZywgxJDhu4tuaCBDw7RuZywgSG_DoG5nIE1haSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1712664841746!5m2!1svi!2s"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
