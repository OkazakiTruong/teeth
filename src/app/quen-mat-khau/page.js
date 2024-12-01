"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Page() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  const form = useRef();

  useEffect(() => {
    if (loading) {
      emailjs
        .sendForm("service_8ggpacb", "template_nu5snx3", form.current, {
          publicKey: "Xr5h3v9aPlpzM-OB9",
        })
        .then(
          () => {
            toast.success(
              "Xác nhận quên mật khẩu đã được gửi đến email của bạn!"
            );
            setLoading(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setLoading(false);
          }
        );
    }
  }, [loading, setLoading]);

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmailError(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)
        ? null
        : "** Vui lòng nhập đúng định dạng Email!"
    );

    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (email === "") {
      setEmailError("** Không được bỏ trống!!");
      flag = false;
    }
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);
      users?.map((user) => {
        if (user.email === email) {
          setId(user.id);
        }
      });
    }
    if (flag && email !== null) {
      console.log(id);
      setLoading(true);
    }
  };

  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Đăng ký</p>
      </div>
      <div className="wrapper">
        <div className="img">
          <div className="overlay"></div>
          <div className="content">
            <img src="/img/logo_am_ban.svg" alt="" />
            <h3>{"CHỮA LÀNH TỪ TRÁI TIM"}</h3>
          </div>
        </div>
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit} ref={form}>
            <h1 className="form-heading">QUÊN MẬT KHẨU</h1>
            <div className="input-group">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                placeholder="Nhập Email..."
                onChange={handleEmailChange}
                className={emailError ? "input-err" : ""}
                name="user_email"
              />
              <p className="error">{emailError}</p>
            </div>
            <input
              type="text"
              value={`${process.env.NEXT_PUBLIC_WEB_LOCAL}/quen-mat-khau/${id}`}
              name="reset_link"
              style={{ display: "none" }}
            />
            <button>
              {loading ? (
                <img src="/loading/rooling_loading.gif" alt="" />
              ) : (
                `LẤY LẠI MẬT KHẨU`
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
