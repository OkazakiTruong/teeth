"use client";
import React, { useState } from "react";
import "./style.scss";
import { toast } from "react-toastify";

export default function Page() {
  const [bookingId, setBookingId] = useState("");
  const [inputError, setInputError] = useState(null);

  const handleChange = (e) => {
    setBookingId(e.target.value);
    setInputError(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookingId === "") {
      setInputError("** Không được bỏ trống!!");
      return;
    }
    let flag = true;
    let listBooing = localStorage.getItem("list-booking");
    listBooing = listBooing ? JSON.parse(listBooing) : null;
    if (listBooing) {
      listBooing.map((booking) => {
        if (booking?.id.trim() === bookingId.trim()) {
          window.location.href = `/chi-tiet-lich-dat/${bookingId.trim()}`;
          flag = false;
        }
      });
      if (flag) {
        toast.error("Mã lịch đặt không chính xác!");
      }
    }
  };
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Tìm lịch đặt</p>
      </div>
      <div className="section-heading">TRA CỨU LỊCH ĐẶT</div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="">Mã lịch đặt: </label>
          <input
            type="text"
            placeholder="Nhập vào mã lịch đặt..."
            onChange={handleChange}
          />
          <div className="error">{inputError}</div>
        </div>
        <button type="submit">Tra cứu lịch đặt</button>
      </form>
    </main>
  );
}
