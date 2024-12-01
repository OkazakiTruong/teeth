"use client";
import "./style.scss";
import React, { useEffect, useCallback, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ServiceItem } from "../ServiceItem/ServiceItem";
import { DoctorItem } from "../DoctorItem/DoctorItem";

const serviceList = [
  {
    img: "/img/dentis/khamtongquatrangmieng.png",
    name: "Khám tổng quát răng miệng",
    detail:
      "Nha sĩ sẽ kiểm tra tổng thể khoang miệng, bao gồm răng, nướu, và xương hàm để phát hiện các vấn đề về sâu răng,...",
    link: "/dich-vu/kham-tong-quat-rang-mieng",
  },
  {
    img: "/img/dentis/dieutrisaurang.png",
    name: "Điều trị sâu răng ",
    detail:
      "Dịch vụ điều trị sâu răng là một trong những dịch vụ cơ bản và phổ biến tại các phòng khám nha khoa, giúp khắc phục các tổn thương do sâu răng gây ra,...",
    link: "/dich-vu/dieu-tri-sau-rang",
  },
  {
    img: "/img/dentis/viemnhachu.png",
    name: "Viêm nha chu",
    detail:
      "Viêm nha chu là một bệnh lý răng miệng thường gặp, không chỉ gây ảnh hưởng đến thẩm mỹ mà còn có thể gây tổn thương xương quanh răng, dẫn đến răng lung la...",
    link: "/dich-vu/viem-nha-chu",
  },
  {
    img: "/img/dentis/tramrang.png",
    name: "Trám răng",
    detail:
      "Nụ cười rạng rỡ là điểm cộng cho sự tự tin và thành công của mỗi người trong giao tiếp. Tuy nhiên, những vấn đề về răng miệng như sâu răng, răng mẻ, răng thưa… ",
    link: "/dich-vu/tram-rang",
  },
  {
    img: "/img/dentis/taytrangrang.png",
    name: "Tẩy trắng răng",
    detail:
      "Tẩy trắng răng là phương pháp không xâm lấn giúp làm sáng bề mặt răng xỉn màu bằng cách sử dụng các hợp chất oxy hóa và năng lượng từ ánh sáng (halogen hoặc la...",
    link: "/dich-vu/tay-trang-rang",
  },
  {
    img: "/img/dentis/laycaorang.png",
    name: "Lấy cao răng",
    detail:
      "Lấy cao răng là thủ thuật nha khoa để loại bỏ những mảng bám, vôi răng, cao răng bám trên bề mặt răng, giúp bạn lấy lại nụ cười trắng sáng và khỏe mạnh...",
    link: "/dich-vu/lay-cao-rang",
  },
  {
    img: "/img/dentis/dansuveneer.png",
    name: "Dán sứ Veneer",
    detail:
      "Dán răng sứ Veneer là sử dụng miếng dán sứ mỏng, gắn cố định lên bề mặt ngoài của răng, giúp cải thiện màu sắc, hình dáng và kích thước răng để mang đến cho...",
    link: "/dich-vu/dan-su-veneer",
  },
  {
    img: "/img/dentis/bocrangsuceramill.png",
    name: "Bọc răng sứ Ceramill",
    detail:
      "Răng sứ Ceramill là loại răng làm hoàn toàn từ sứ, có nguồn gốc xuất xứ từ Đức, được sản xuất dựa trên công nghệ CAD/CAM tự động, giúp khách hàng khắc phục răng...",
    link: "/dich-vu/boc-rang-su-ceramill",
  },
  {
    img: "/img/dentis/niengrangmaccai.png",
    name: "Niềng răng mắc cài",
    detail:
      " Niềng răng mắc cài kim loại mang đến hiệu quả chỉnh nha cao, với mọi tình trạng răng, đảm bảo lực siết ổn định, giúp nâng cao hiệu quả...",
    link: "/dich-vu/nieng-rang-mac-cai",
  },
  {
    img: "/img/dentis/trongrangimplant.png",
    name: "Trồng răng implant",
    detail:
      "Trì hoãn quá lâu việc trồng răng có thể dẫn đến hậu quả nghiêm trọng đối với sức khỏe răng miệng như: giảm chức năng ăn nhai, mất tính thẩm mỹ, xương hàm tiêu hõm, tụt lợi, hàm xô lệch...",
    link: "/dich-vu/trong-rang-implant",
  },
  {
    img: "/img/dentis/khamtongquatrangmieng.png",
    name: "Khám tổng quát răng miệng",
    detail:
      "Nha sĩ sẽ kiểm tra tổng thể khoang miệng, bao gồm răng, nướu, và xương hàm để phát hiện các vấn đề về sâu răng,...",
    link: "/dich-vu/kham-tong-quat-rang-mieng",
  },
  {
    img: "/img/dentis/dieutrisaurang.png",
    name: "Điều trị sâu răng ",
    detail:
      "Dịch vụ điều trị sâu răng là một trong những dịch vụ cơ bản và phổ biến tại các phòng khám nha khoa, giúp khắc phục các tổn thương do sâu răng gây ra,...",
    link: "/dich-vu/dieu-tri-sau-rang",
  },
];
const doctorList = [
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
export const Carousel = ({ type }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  let [currentDot, setCurrentDot] = useState(0);

  const onSelect = useCallback((emblaApi) => {
    setCurrentDot(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  if (type === "service") {
    return (
      <>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {serviceList.map((item, index) => {
              if (index % 3 === 0 || index === 0) {
                return (
                  <div className="embla__slide" key={index}>
                    <ServiceItem item={item} />
                    <ServiceItem item={serviceList[index + 1]} />
                    <ServiceItem item={serviceList[index + 2]} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="dot-list">
          {serviceList.map((item, index) => {
            if (index % 3 === 0) {
              return (
                <div
                  key={index}
                  className={
                    currentDot === index / 3 ? "dot dot-active" : "dot"
                  }
                  onClick={() => {
                    emblaApi.scrollTo(index / 3);
                  }}
                ></div>
              );
            }
          })}
        </div>
      </>
    );
  }
  if (type === "doctor") {
    return (
      <>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {doctorList.map((item, index) => {
              if (index % 3 === 0 || index === 0) {
                return (
                  <div className="embla__slide" key={index}>
                    <DoctorItem item={item} />
                    <DoctorItem item={doctorList[index + 1]} />
                    <DoctorItem item={doctorList[index + 2]} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="dot-list">
          {doctorList.map((item, index) => {
            if (index % 3 === 0) {
              return (
                <div
                  key={index}
                  className={
                    currentDot === index / 3 ? "dot dot-active" : "dot"
                  }
                  onClick={() => {
                    emblaApi.scrollTo(index / 3);
                  }}
                ></div>
              );
            }
          })}
        </div>
      </>
    );
  }
};
