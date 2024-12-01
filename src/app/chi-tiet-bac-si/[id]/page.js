"use client";
import React, { useState } from "react";
import "./style.scss";
const data = [
  {
    id: "fe090a69-9d7f-4dad-a398-56556be0658e",
    img: "/img/dentis/bacsi1.png",
    name: "TS BSCKI Trịnh Việt Trang",
    position: "Chủ tịch HĐQT",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "01e7d51c-58c9-4086-a240-d6bda2ea610f",
    img: "/img/dentis/bacsi2.png",
    name: "Dr. Phạm Văn Quân",
    position: "Phó ban Implant",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "92095615-91ba-49da-8240-8259b96b65ec",
    img: "/img/dentis/bacsi3.png",
    name: "Dr.Nguyễn Mạnh Trường",
    position: "Phó ban Implant",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "959da571-b7e0-42e4-ab2e-61bbf69b198f",
    img: "/img/dentis/bacsi4.png",
    name: "Dr.Minh Hanh",
    position: "Bác sĩ điều trị",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "f9f21422-2ead-48b2-b423-b0ab943c6e27",
    img: "/img/dentis/bacsi5.png",
    name: "Dr.Hoàng Duyên",
    position: "Bác sĩ điều trị",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "c8dfb81c-ac62-4d28-8a88-bae510ed9ad8",
    img: "/img/dentis/bacsi6.png",
    name: "Dr.Bùi Thảo",
    position: "Bác sĩ điều trị",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
];

export default function Page({ params }) {
  const [doctor, setDoctor] = useState(null);
  useState(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      const doctorData = data.find((doctor) => doctor.id === resolvedParams.id);
      setDoctor(doctorData);
    };

    fetchParams();
  }, [params]);
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Thông tin bác sĩ</p>
      </div>
      <section className="doctor-information-section">
        <div className="information-wrapper">
          <div className="col-right">
            <div className="information">
              <h3>Thông tin bác sĩ</h3>
              <p className="doctor-name">{doctor?.name}</p>
              <p className="doctor-position">{doctor?.position}</p>
            </div>
            <div className="contact-info">
              <h4>Thông tin liên hệ:</h4>
              <div className="contact-item">
                <img src="/icon/ph_phone.svg" alt="" />
                <p>0977354956</p>
              </div>
              <div className="contact-item">
                <img src="/icon/MailOutlined.svg" alt="" />
                <p>trinhviettrang0605@gmail.com</p>
              </div>
              <div className="social-media">
                <div className="social-media-icon">
                  <img src="/img/dentis/facebookiconblue.svg" alt="" />
                </div>
                <div className="social-media-icon">
                  <img src="/img/dentis/youtubeiconblue.svg" alt="" />
                </div>
                <div className="social-media-icon">
                  <img src="/img/dentis/instaiconblue.svg" alt="" />
                </div>
                <div className="social-media-icon">
                  <img src="/img/dentis/titokiconblue.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="doctor-img">
            <img src={doctor?.img} alt="" />
          </div>
        </div>
        <div className="degree-wrapper">
          <h2>Trình độ / Chứng chỉ</h2>
          <div className="table">
            <div className="row row-brown">
              <div className="col">2006</div>
              <div className="col">
                Tốt nghiệp MBA tại Đại học IBUS (Đan Mạch), Tốt nghiệp bác sĩ
                chuyên khoa Răng Hàm Mặt – Trường Đại học Y Hà Nội
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
