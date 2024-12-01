"use-client";
import "./style.scss";
import Link from "next/link";
// import { Link } from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import PetComponent from "./PetComponent";
import { Checkbox } from "antd";
import emailjs from "@emailjs/browser";
import { Button } from "antd";
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
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userDay, setUserDay] = useState("");
  const [userTime, setUserTime] = useState("");
  const [numberPet, setNumberPet] = useState(1);
  const [pets, setPets] = useState([]);

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
    let petList = _.cloneDeep(pets);
    if (current?.pets) {
      current.pets.map((pet) => {
        petList.push(pet);
      });
    }
    setPets(petList);
  }, [setPets]);

  useEffect(() => {
    let current = localStorage.getItem("current_booking");
    current = current ? JSON.parse(current) : null;
    setCurrentBooking(current);
  }, [setCurrentBooking]);

  const handleChangePet = (pets) => {
    setPets(pets);
    console.log("pets", pets);
  };

  const handlePrevClick = () => {
    if (step === 1) {
      changeCurrent(0);
    }
    if (step === 2) {
      changeCurrent(1);
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

  const handleAddNewPet = () => {
    let petList = _.cloneDeep(pets);
    let pet = {
      petId: uuidv4(),
      petName: "",
      petSpecies: "Chó",
      petType: "",
      petOld: "",
      petGender: true,
      note: "",
    };
    petList.push(pet);
    setPets(petList);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, userPhone, userEmail, userDay, userTime);
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
          localStorage.setItem("current_booking", JSON.stringify(booking));
        }
        changeCurrent(1);
      }
    }
    if (step === 1) {
      let booking = localStorage.getItem("current_booking");
      if (booking) {
        booking = JSON.parse(booking);
        booking.pets = _.cloneDeep(pets);
        localStorage.setItem("current_booking", JSON.stringify(booking));
        setCurrentBooking(booking);
      }
      changeCurrent(2);
    }
    if (step === 2) {
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

      changeCurrent(3);
    }
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
      <form onSubmit={handleSubmit}>
        {pets.map((item, index) => {
          return (
            <>
              <PetComponent
                item={item}
                pets={pets}
                setPets={handleChangePet}
                index={index}
              />
              <hr />
            </>
          );
        })}
        <button
          className="add-new-pet-btn"
          onClick={handleAddNewPet}
          type="button"
        >
          + Thêm thú cưng
        </button>
        <hr />
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
    );
  }
  if (step === 2) {
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
                <div className="table-col">Loại lịch hẹn</div>
                <div className="table-col">LỊCH KHÁM</div>
              </div>
              <div className="table-row">
                <div className="table-col">Ngày đặt</div>
                <div className="table-col">{currentBooking.date}</div>
              </div>
              <div className="table-row table-row--brown">
                <div className="table-col">Giờ đặt</div>
                <div className="table-col">{currentBooking.time}</div>
              </div>
              <div className="table-row">
                <div className="table-col">Số lượng thú cưng</div>
                <div className="table-col">{currentBooking.pets.length}</div>
              </div>
            </div>
            <div className="table">
              <div className="table-row table-row--brown">
                <div className="table-col">Họ và tên</div>
                <div className="table-col">{currentBooking.userName}</div>
              </div>
              <div className="table-row">
                <div className="table-col">Số điện thoại</div>
                <div className="table-col">{currentBooking.userPhone}</div>
              </div>
              <div className="table-row table-row--brown">
                <div className="table-col">Email</div>
                <div className="table-col">{currentBooking.userEmail}</div>
              </div>
            </div>
          </div>
          <h3>Danh sách thú cưng</h3>
          <div className="table">
            <div className="table-row table-row--brown">
              <div className="table-col">Stt</div>
              <div className="table-col">Tên thú cưng</div>
              <div className="table-col">Chủng loại</div>
              <div className="table-col">Giới tính</div>
              <div className="table-col">Tuổi</div>
              <div className="table-col">Giống loài</div>
              <div className="table-col">Loại dịch vụ</div>
              <div className="table-col">Ghi chú</div>
            </div>
            {currentBooking.pets.map((pet, index) => {
              return (
                <div key={index} className="table-row">
                  <div className="table-col">{index + 1}</div>
                  <div className="table-col">{pet.petName}</div>
                  <div className="table-col">{pet.petSpecies}</div>
                  <div className="table-col">
                    {pet.petGender ? "Đực" : "Cái"}
                  </div>
                  <div className="table-col">{pet.petOld}</div>
                  <div className="table-col">{pet.petType}</div>
                  <div className="table-col">{pet.petService}</div>
                  <div className="table-col">{pet.note}</div>
                </div>
              );
            })}
          </div>
          <Checkbox style={{ marginTop: "20px" }}>
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
  if (step === 3) {
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
          Mọi thắc mắc xin hãy liên hệ tới hotline (0977354956) của Petpals để
          được hỗ trợ sớm nhất nhé !
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
