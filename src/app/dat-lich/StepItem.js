"use-client";
import "./style.scss";
// import { Link } from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Checkbox } from "antd";
import emailjs from "@emailjs/browser";
import _, { set } from "lodash";

const dateList = [
  { id: 0, value: "9:00 - 10:00" },
  { id: 1, value: "10:00 - 11:00" },
  { id: 2, value: "11:00 - 12:00" },
  { id: 3, value: "12:00 - 13:00" },
  { id: 4, value: "13:00 - 14:00" },
  { id: 5, value: "14:00 - 15:00" },
  { id: 6, value: "15:00 - 16:00" },
  { id: 7, value: "16:00 - 17:00" },
  { id: 8, value: "17:00 - 18:00" },
  { id: 9, value: "18:00 - 19:00" },
  { id: 10, value: "19:00 - 20:00" },
  { id: 11, value: "20:00 - 21:00" },
];

dayjs.extend(customParseFormat);

export default function StepItem({ step, changeCurrent, loginUser }) {
  const [currentBooking, setCurrentBooking] = useState(null);
  const [userName, setUserName] = useState("Nguyen Van A");
  const [userPhone, setUserPhone] = useState("0323456789");
  const [userEmail, setUserEmail] = useState("");
  const [userDay, setUserDay] = useState("");
  const [userTime, setUserTime] = useState("");
  const [userService, setUserService] = useState("1");

  //state bắt lỗi
  const [userNameError, setUserNameError] = useState(null);
  const [userPhoneError, setUserPhoneError] = useState(null);
  const [userEmailError, setUserEmailError] = useState(null);
  const [userDayError, setUserDayError] = useState(null);
  const [userTimeError, setUserTimeError] = useState(null);

  useEffect(() => {
    console.log("login", loginUser);
    if (loginUser) {
      setUserName(loginUser?.name);
      setUserEmail(loginUser?.email);
      setUserPhone(loginUser?.phone);
    }
  }, [setUserName, setUserEmail]);

  useEffect(() => {
    let current = localStorage.getItem("current_booking");
    current = current ? JSON.parse(current) : null;
    setCurrentBooking(current);
  }, [setCurrentBooking]);

  const handlePrevClick = () => {
    if (step === 1) {
      changeCurrent(0);
    }
  };
  const disabledDate = (current) => {
    //disable những lịch từ ngày hôm qua
    return current && current < dayjs().endOf("day").subtract(1, "day");
  };
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangeUserPhone = (e) => {
    setUserPhoneError(
      /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})/.test(e.target.value)
        ? null
        : "** Vui lòng nhập đúng định dạng số điện thoại!"
    );
    setUserPhone(e.target.value);
  };
  const handleChangeUserEmail = (e) => {
    console.log(e.target.value);
    setUserEmailError(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)
        ? null
        : "** Vui lòng nhập đúng định dạng email!"
    );
    console.log(userEmailError);
    setUserEmail(e.target.value);
  };
  const handleChangeUserDay = (date, dateString) => {
    setUserDay(dateString);
  };
  const handleChangeUserTime = (e) => {
    setUserTime(e.target.value);
  };
  const handleChangeService = (value) => {
    setUserService(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, userPhone, userEmail, userDay, userTime);
    console.log("step", step);

    if (step === 0) {
      let flag = true;
      if (userName === "") {
        setUserNameError("** Không được bỏ trống!");
        flag = false;
      }
      if (userPhone === "") {
        setUserPhoneError("** Không được bỏ trống!");
        flag = false;
      }
      if (userEmail === "") {
        setUserEmailError("** Không được bỏ trống!");
        flag = false;
      }
      if (userDay === "") {
        setUserDayError("** Vui lòng chọn ngày thăm khám!");
        flag = false;
      }
      if (userTime === "") {
        setUserTimeError("** Vui lòng chọn một giờ khám cụ thể!");
        flag = false;
      }
      if (flag) {
        let booking = localStorage.getItem("current_booking");
        if (booking) {
          booking = JSON.parse(booking);
          booking.userName = userName;
          booking.userPhone = userPhone;
          booking.userEmail = userEmail;
          booking.date = userDay;
          booking.time = userTime;
          booking.service = userService;
          localStorage.setItem("current_booking", JSON.stringify(booking));
        }
        changeCurrent(1);
      }
    }
    if (step === 1) {
      let listBooking = localStorage.getItem("list-booking");
      listBooking = listBooking ? JSON.parse(listBooking) : [];

      let booking = localStorage.getItem("current_booking");
      booking = booking ? JSON.parse(booking) : null;

      if (booking) {
        listBooking.push(booking);
        localStorage.setItem("list-booking", JSON.stringify(listBooking));

        let currentU = localStorage.getItem("login-user");
        currentU = currentU ? JSON.parse(currentU) : null;

        if (currentU) {
          currentU?.noti?.unshift({
            content: `Bạn đã đăng ký lịch đặt thành công với mã: ${booking.id}`,
            date: dayjs(new Date()).format("DD/MM/YYYY"),
            link: `/chi-tiet-lich-dat/${booking.id}`,
          });
          localStorage.setItem("login-user", JSON.stringify(currentU));
          let users = localStorage.getItem("users");
          users = users ? JSON.parse(users) : null;
          if (users) {
            users = users.map((user) => {
              if (user.id === currentU.id) {
                user = currentU;
              }
              return user;
            });
          }
          localStorage.setItem("users", JSON.stringify(users));
        }

        emailjs
          .sendForm("service_8ggpacb", "template_wr6o7xm", formRef.current, {
            publicKey: "Xr5h3v9aPlpzM-OB9",
          })
          .then(
            () => {
              toast.success("Đã gửi thông tin tới email của bạn!");
            },
            (error) => {
              console.log("FAILED...", error.text);
              setLoading(false);
            }
          );
      }
      changeCurrent(2);
    }
  };
  const getService = (value) => {
    const services = {
      1: "Thăm khám răng",
      2: "Chăm sóc răng",
      3: "Thẩm mỹ răng",
    };
    return services[value] || "Thăm khám răng";
  };

  const formRef = useRef();
  if (step === 0) {
    return (
      <form onSubmit={handleSubmit}>
        <h3>Thông tin lịch đặt (Thời gian và thông tin người dùng):</h3>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="">Họ và tên: </label>
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              value={userName}
              onChange={handleChangeUserName}
            />
            <div className="error">{userNameError}</div>
          </div>
          <div className="input-group">
            <label htmlFor="">Số điện thoại(10 số):</label>
            <input
              type="text"
              placeholder="Nhập số điện thoại của bạn"
              onChange={handleChangeUserPhone}
              value={userPhone}
            />
            <div className="error">{userPhoneError}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Nhập vào email của bạn"
              value={userEmail}
              onChange={handleChangeUserEmail}
            />
            <div className="error">{userEmailError}</div>
          </div>
          <div className="input-group date-time-picker">
            <label htmlFor="">Lựa chọn ngày đặt</label>
            <DatePicker
              disabledDate={disabledDate}
              placeholder="Chọn ngày"
              onChange={handleChangeUserDay}
            />
            <div className="error">{userDayError}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="">Loại dịch vụ: </label>
            <Select
              value={userService}
              style={{
                width: "100%",
                height: "56px",
              }}
              onChange={handleChangeService}
              options={[
                {
                  value: "1",
                  label: "Thăm khám răng",
                },
                {
                  value: "2",
                  label: "Chăm sóc răng",
                },
                {
                  value: "3",
                  label: "Thẩm mỹ răng",
                },
              ]}
            />
            <div className="error">{}</div>
          </div>
        </div>
        <h3>Thông tin chi tiết thời gian đặt:</h3>
        <div className="time-select">
          <div className="error">{userTimeError}</div>
          <div className="time-detail-wrapper">
            <div className="time-detail-item">
              <div className="time-detail-status"></div>
              Thời gian quá hạn
            </div>
            <div className="time-detail-item">
              <div className="time-detail-status"></div>
              Thời gian đã đầy
            </div>
            <div className="time-detail-item">
              <div className="time-detail-status"></div>
              Thời gian đang chọn
            </div>
          </div>
          <p>Buổi sáng</p>
          <div className="form-row">
            {dateList.map((item, index) => {
              if (0 <= item.id && item.id <= 2) {
                return (
                  <div key={index}>
                    <input
                      type="radio"
                      name="time"
                      id={`item-` + item.id}
                      value={item.value}
                      disabled={index === 0 || index === 1}
                      onChange={handleChangeUserTime}
                      className="custom-radio"
                    />
                    <label
                      htmlFor={`item-` + item.id}
                      className={`custom-time ${
                        index === 1 && "custom-time-full"
                      }`}
                    >
                      {item.value}
                    </label>
                  </div>
                );
              }
            })}
          </div>
          <p>Buổi chiều</p>
          <div className="form-row">
            {dateList.map((item, index) => {
              if (3 <= item.id && item.id <= 8) {
                return (
                  <div key={index}>
                    <input
                      type="radio"
                      name="time"
                      id={`item-` + item.id}
                      value={item.value}
                      onChange={handleChangeUserTime}
                    />
                    <label htmlFor={`item-` + item.id} className="custom-time">
                      {item.value}
                    </label>
                  </div>
                );
              }
            })}
          </div>
          <p>Buổi tối</p>
          <div className="form-row">
            {dateList.map((item, index) => {
              if (9 <= item.id && item.id <= 12) {
                return (
                  <div key={index}>
                    <input
                      type="radio"
                      name="time"
                      id={`item-` + item.id}
                      value={item.value}
                      onChange={handleChangeUserTime}
                    />
                    <label htmlFor={`item-` + item.id} className="custom-time">
                      {item.value}
                    </label>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="btn-wrapper">
          <a className="btn prev-btn" href="/">
            Hủy
          </a>
          <button className="btn next-btn">Tiếp tục</button>
        </div>
      </form>
    );
  }

  if (step === 1) {
    return (
      <>
        <form action="" style={{ display: "none" }} ref={formRef}>
          <input type="text" value={userEmail} name="user_email" />
          <input type="text" value={currentBooking.id} name="booking_id" />
          <input type="text" value={currentBooking.date} name="booking_date" />
          <input type="text" value={currentBooking.time} name="booking_time" />
          <input
            type="text"
            value={process.env.NEXT_PUBLIC_WEB_LOCAL}
            name="web_url"
          />
        </form>
        <form className="confirm-info" onSubmit={handleSubmit}>
          <h3>Thông tin lịch đặt</h3>
          <div className="table-wrapper">
            <div className="table">
              <div className="table-row table-row--brown">
                <div className="table-col">Mã lịch hẹn</div>
                <div className="table-col">fc11ccdbe808</div>
              </div>
              <div className="table-row">
              <div className="table-col">Loại lịch hẹn</div>
              <div className="table-col">CHĂM SÓC RĂNG</div>
              </div>
              <div className="table-row table-row--brown">
                <div className="table-col">Trạng thái</div>
                <div className="table-col">Chờ khám</div>
              </div>
              <div className="table-row">
                <div className="table-col">Ngày đặt</div>
                <div className="table-col">19/11/2024</div>
              </div>
              <div className="table-row table-row--brown">
                <div className="table-col">Giờ đặt</div>
                <div className="table-col">9:00 - 10:00</div>
              </div>
            </div>
            <div className="table">
              <div className="table-row table-row--brown">
                <div className="table-col">Họ và tên</div>
                <div className="table-col">Đặng Thị Minh Thanh</div>
              </div>
              <div className="table-row">
                <div className="table-col">Số điện thoại</div>
                <div className="table-col">0977354956</div>
              </div>
              <div className="table-row table-row--brown">
                <div className="table-col">Email</div>
                <div className="table-col">minhthanh@gmail.com</div>
              </div>
            </div>
          </div>

          <Checkbox style={{ marginTop: "20px" }} checked>
            Tôi đồng ý với việc đăng ký thông tin để đặt lịch hẹn
          </Checkbox>
          <div className="btn-wrapper">
            <button
              className="btn prev-btn"
              type="button"
              onClick={handlePrevClick}
            >
              {"< Quay về"}
            </button>
            <button className="btn next-btn">{"Tiếp tục >"}</button>
          </div>
        </form>
      </>
    );
  }
  if (step === 2) {
    return (
      <div className="done-wrapper">
        <img
          src="/icon/lets-icons_done-ring-round-fill.svg"
          alt=""
          style={{ marginBottom: "20px" }}
        />
        <h2 style={{ marginBottom: "50px" }}>Hoàn thành</h2>

        <p style={{ marginBottom: "14px" }}>
          Số đặt lịch của bạn là:{" "}
          <span style={{ fontSize: "24px" }}>{currentBooking.id}</span>
        </p>
        <p style={{ marginBottom: "30px" }}>
          Mọi thắc mắc xin hãy liên hệ tới hotline (19008886) của Dental Clinic
          để được hỗ trợ sớm nhất nhé !
        </p>

        <p>
          <b>Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi !</b>
        </p>
        <a className="btn prev-btn" href="/">
          Quay về trang chủ
        </a>
      </div>
    );
  }
}
