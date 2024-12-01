"use client";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import React, { useCallback, useEffect, useState } from "react";
import { Steps } from "antd";
import StepItem from "./StepItem";
import _ from "lodash";
let currentUser = null;
if (typeof window !== "undefined") {
  currentUser = localStorage.getItem("login-user");
}

export default function Page() {
  const [bookingInfo, setBookingInfo] = useState({
    id: "",
    type: "datLichKs",
    userId: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    date: "",
    dateBack: "",
    time: "",
    pets: [],
    bookingStatus: "pending",
  });
  const [current, setCurrent] = useState(0);
  const [loginUser, setLoginUser] = useState(
    currentUser ? JSON.parse(currentUser) : null
  );
  useEffect(() => {
    let booking = _.cloneDeep(bookingInfo);
    booking.id = uuidv4();
    if (loginUser?.pets) {
      loginUser.pets.map((pet) => {
        booking.pets.push(pet);
      });
    }
    setBookingInfo(booking);
    booking.userId = loginUser?.id;
    localStorage.setItem("current_booking", JSON.stringify(booking));
  }, [setBookingInfo]);

  const changeCurrent = useCallback(
    (current) => {
      setCurrent(current);
    },
    [setCurrent]
  );
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Đặt lịch</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Khách sạn thú cưng</p>
      </div>
      <section className="booking-section">
        <div className="section-heading">ĐẶT LỊCH KHÁCH SẠN THÚ CƯNG</div>
        <div className="booking-wrapper">
          <Steps
            style={{ marginBottom: "60px" }}
            current={current}
            items={[
              {
                title: "Bước 1",
                description: "Thông tin lịch đặt",
              },
              {
                title: "Bước 2",
                description: "Thông tin thú cưng",
              },
              {
                title: "Bước 3",
                description: "Xác nhận lịch hẹn",
              },
              {
                title: "Bước 4",
                description: "Chờ liên hệ lại",
              },
            ]}
          />
          <StepItem
            step={current}
            changeCurrent={changeCurrent}
            loginUser={loginUser}
          />
        </div>
      </section>
    </main>
  );
}
