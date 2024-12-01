"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { Checkbox } from "antd";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Page() {
  const [eye, setEye] = useState(false);
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("users")) {
      let users = localStorage.getItem("users");
      setUsers(JSON.parse(users));
    }
  }, [setUsers]);

  useEffect(() => {
    if (loading) {
      let flag = true;
      users?.map((user) => {
        if (user.email === email && user.password === password) {
          flag = false;
          localStorage.setItem("login-user", JSON.stringify(user));
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        }
      });
      if (flag) {
        setTimeout(() => {
          toast.error("Tài khoản hoặc mật khẩu không chính xác !!");
          setLoading(false);
        }, 1000);
      }
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

  const handlePasswordChange = (e) => {
    setPasswordError(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(
        e.target.value
      )
        ? null
        : "** Mật khẩu phải có ít nhất 8 ký tự, 1 chữ in hoa, 1 chũ số và 1 ký tự đặc biệt"
    );
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (email === "") {
      setEmailError("** Không được bỏ trống!!");
      flag = false;
    }
    if (password === "") {
      setPasswordError("** Không được bỏ trống!!");
      flag = false;
    }

    if (flag) {
      setLoading(true);
    }
  };

  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Đăng nhập</p>
      </div>
      <div className="wrapper">
        <div className="img">
          <div className="overlay"></div>
          <div className="content">
            <img src="/img/dentis/logo-footer.png" alt="" />
            <h3>{`"TỎA NẮNG NỤ CƯỜI VIỆT"`}</h3>
          </div>
        </div>
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-heading">Đăng nhập</h1>
            <div className="input-group">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                placeholder="Nhập Email..."
                onChange={handleEmailChange}
                className={emailError ? "input-err" : ""}
              />
              <p className="error">{emailError}</p>
            </div>
            <div className="input-group">
              <label htmlFor="">Mật khẩu:</label>
              <div className="custom-eye">
                <input
                  type={eye ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  onChange={handlePasswordChange}
                />
                <img
                  src={eye ? `/icon/eye-btn-close.svg` : `/icon/eye-btn.svg`}
                  alt=""
                  onClick={() => {
                    setEye(!eye);
                  }}
                />
              </div>
              <p className="error">{passwordError}</p>
            </div>
            <div className="option-group">
              <Checkbox onChange={() => {}}>Ghi nhớ thông tin</Checkbox>
              <Link href="/quen-mat-khau">Quên mật khẩu?</Link>
            </div>
            <button>
              {loading ? (
                <img src="/loading/rooling_loading.gif" alt="" />
              ) : (
                `ĐĂNG NHẬP`
              )}
            </button>
          </form>
          <div className="other-line">
            <div className="line"></div>
            <p>hoặc</p>
            <div className="line"></div>
          </div>
          <div className="social-option">
            <img src="/icon/gg_ic.svg" alt="" />
            <img src="/icon/logos_facebook.svg" alt="" />
            <img src="/icon/formkit_twitter.svg" alt="" />
          </div>
          <div className="other-option-link">
            Bạn đã có tài khoản? <Link href="/dang-ky">Đăng ký</Link> ngay!
          </div>
        </div>
      </div>
    </main>
  );
}
