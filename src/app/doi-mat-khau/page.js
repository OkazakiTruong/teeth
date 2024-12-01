"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { toast } from "react-toastify";

export default function Page() {
  const [eye, setEye] = useState(false);
  const [eyeOld, setEyeOld] = useState(false);
  const [eyeRepass, setEyeRepass] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [rePasswordError, setRePasswordError] = useState(null);
  const [oldPasswordError, setOldPasswordError] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      let flag = true;
      let loginUser = localStorage.getItem("login-user");
      let users = localStorage.getItem("users");
      users = JSON.parse(users) || [];
      loginUser = JSON.parse(loginUser);
      users?.map((user) => {
        if (user.email === loginUser.email) {
          if (user.password === oldPassword) {
            user.password = password;
          } else {
            flag = "false";
          }
        }
      });
      if (flag) {
        setTimeout(() => {
          localStorage.setItem("users", JSON.stringify(users));
          localStorage.removeItem("login-user");
          toast.success("Đổi mật khẩu thành công!");
        }, 1000);
        setTimeout(() => {
          window.location.href = "/dang-nhap";
        }, 1500);
      } else {
        toast.error("Mật khẩu bạn nhập không chính xác!");
      }
    }
  }, [loading, setLoading]);

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
  const handleOldPasswordChange = (e) => {
    setOldPasswordError(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(
        e.target.value
      )
        ? null
        : "** Mật khẩu phải có ít nhất 8 ký tự, 1 chữ in hoa, 1 chũ số và 1 ký tự đặc biệt"
    );
    setOldPassword(e.target.value);
  };
  const handleRePasswordChange = (e) => {
    if (
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(
        e.target.value
      )
    ) {
      if (e.target.value !== password) {
        setRePasswordError("** Mật khẩu nhập lại không trùng khớp");
      } else {
        setRePasswordError(null);
      }
    } else {
      setRePasswordError(
        "** Mật khẩu phải có ít nhất 8 ký tự, 1 chữ in hoa, 1 chũ số và 1 ký tự đặc biệt"
      );
    }

    setRePassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (oldPassword === "") {
      setOldPasswordError("** Không được bỏ trống!!");
    }
    if (password === "") {
      setPasswordError("** Không được bỏ trống!!");
      flag = false;
    }
    if (rePassword === "") {
      setRePasswordError("** Không được bỏ trống!!");
      flag = false;
    }
    if (
      flag &&
      password !== null &&
      rePassword !== null &&
      oldPassword !== null
    ) {
      setLoading(true);
    }
  };

  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Thay đổi mật khẩu</p>
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
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-heading">Thay đổi mật khẩu</h1>
            <div className="input-group">
              <label htmlFor="">Mật khẩu cũ:</label>
              <div className="custom-eye">
                <input
                  type={eyeOld ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  className={passwordError ? "input-err" : ""}
                  onChange={handleOldPasswordChange}
                />
                <img
                  src={eye ? `/icon/eye-btn-close.svg` : `/icon/eye-btn.svg`}
                  alt=""
                  onClick={() => {
                    setEyeOld(!eyeOld);
                  }}
                />
              </div>
              <p className="error">{oldPasswordError}</p>
            </div>
            <div className="input-group">
              <label htmlFor="">Mật khẩu mới:</label>
              <div className="custom-eye">
                <input
                  type={eye ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  className={passwordError ? "input-err" : ""}
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
            <div className="input-group">
              <label htmlFor="">Xác nhận lại mật khẩu:</label>
              <div className="custom-eye">
                <input
                  type={eyeRepass ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  className={rePasswordError ? "input-err" : ""}
                  onChange={handleRePasswordChange}
                />
                <img
                  src={
                    eyeRepass ? `/icon/eye-btn-close.svg` : `/icon/eye-btn.svg`
                  }
                  alt=""
                  onClick={() => {
                    setEyeRepass(!eyeRepass);
                  }}
                />
              </div>
              <p className="error">{rePasswordError}</p>
            </div>
            <button>
              {loading ? (
                <img src="/loading/rooling_loading.gif" alt="" />
              ) : (
                `XÁC NHẬN THAY ĐỔI MẬT KHẨU`
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
