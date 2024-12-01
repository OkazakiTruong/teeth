"use client";
import "./style.scss";
import { Socialicon } from "../Socialicon/Socialicon";
import { useEffect, useRef, useState } from "react";
import {
  CaretDownOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
export const Header = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const [bellActive, setBellActive] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    let current = localStorage.getItem("login-user");
    if (current) {
      current = JSON.parse(current);
      setLoginUser(current);
    }
  }, [setLoginUser]);

  const handleFocus = () => {
    setSearchFocus(true);
  };
  const handleBlur = () => {
    setSearchFocus(false);
  };
  return (
    <header>
      <div>
        <div className="wrap top-header">
          <p>Dental Clinic - Tỏa sáng nụ cười Việt</p>
          <div className="social-connect">
            <p>Ghé thăm chúng tôi tại</p>
            <Socialicon />
          </div>
        </div>
      </div>
      <div>
        <div className="wrap main-header">
          <div>
            <a href="/" className="petpals-logo">
              <img src="/img/dentis/logo.png" alt="logo-dental" />
            </a>
          </div>
          <div className="header-main-right">
            <div className="search-input">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <div className="icon-item">
                {!searchFocus ? (
                  <SearchOutlined />
                ) : (
                  <img
                    src="/icon/mingcute_close-fill.svg"
                    alt=""
                    onClick={handleBlur}
                  />
                )}
              </div>
            </div>
            {loginUser ? (
              <>
                <div
                  className="icon-bell"
                  onClick={() => {
                    setBellActive(true);
                  }}
                >
                  <img src="/icon/Bell_ic.svg" alt="" />
                  <div className={`number-bell`}>{loginUser?.noti.length}</div>
                  <div
                    className={`overlay  ${bellActive ? "overlay-active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setBellActive(false);
                      console.log(bellActive);
                    }}
                  ></div>
                  <div
                    className={`menu-bell ${
                      bellActive ? "menu-bell-active" : ""
                    }`}
                  >
                    <h3>Thông báo</h3>
                    <div className="container">
                      {loginUser?.noti.map((noti, index) => {
                        return (
                          <a href={noti.link} className="menu-item" key={index}>
                            <span className="content">{noti.content}</span>
                            <span className="time">{noti.date}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="user-login-controller">
                  <span className="user-img">
                    <img src="/img/user_avatar.jpg" />
                  </span>
                  <p
                    style={{
                      width: "112px",
                      textOverflow: "ellipsis",
                      textWrap: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {loginUser.name}
                  </p>
                  <span>
                    <img src="/icon/flowbite_caret-down-solid.svg" alt="" />
                  </span>
                  <ul className="sub-nav" style={{ width: "267px" }}>
                    <li className="sub-nav-item">
                      <a href="/thong-tin-tai-khoan">Thông tin tài khoản</a>
                    </li>
                    <li className="sub-nav-item">
                      <a href="/doi-mat-khau">Đổi mật khẩu</a>
                    </li>
                    <li
                      className="sub-nav-item"
                      onClick={() => {
                        localStorage.removeItem("login-user");
                        setLoginUser(null);
                        window.location.href = "/";
                      }}
                    >
                      <span>Đăng xuất</span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="btn-group">
                <a href="/dang-ky" className="btn">
                  Đăng ký
                </a>
                <a href="/dang-nhap" className="btn">
                  Đăng nhập
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <ul className="nav">
        <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
          <a href="/">Trang chủ</a>
        </li>
        <li
          className={`nav-item ${pathname === "/ve-chung-toi" ? "active" : ""}`}
        >
          <a href="/ve-chung-toi">Giới thiệu</a>
        </li>
        <li
          className={`nav-item ${pathname.match(/dat-lich/) ? "active" : ""}`}
        >
          <a href="/dat-lich">Đặt lịch</a>
        </li>
        <li className={`nav-item ${pathname.match(/dich-vu/) ? "active" : ""}`}>
          <span>Dịch vụ</span>
          <span>
            <DownOutlined style={{ fontSize: "12px", paddingLeft: "6px" }} />
          </span>
          <ul className="sub-nav" style={{ width: "267px" }}>
            <li
              className={`sub-nav-item ${
                pathname.match(
                  /cap-cuu-24-24|do-de-ho-sinh|kham-benh|lay-cao-rang|phau-thuat-ngoai-khoa|sieu-am-x-quang-xet-nghiem|tiem-phong-vaccine|triet-san/
                )
                  ? "sub-nav-item-active"
                  : ""
              }`}
            >
              <span>Thăm khám răng</span>
              <span>
                <DownOutlined
                  style={{ fontSize: "12px", paddingLeft: "6px" }}
                />
              </span>
              <ul className="sub-nav nav-2" style={{ width: "359px" }}>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/kham-tong-quat"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/kham-tong-quat">
                    Khám tổng quát răng miệng
                  </a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/dieu-tri-sau-rang"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/dieu-tri-sau-rang">Điều trị sâu răng</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/viem-nha-chu"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/viem-nha-chu">Viêm nha chu</a>
                </li>
              </ul>
            </li>
            <li
              className={`sub-nav-item ${
                pathname.match(
                  /cap-cuu-24-24|do-de-ho-sinh|kham-benh|lay-cao-rang|phau-thuat-ngoai-khoa|sieu-am-x-quang-xet-nghiem|tiem-phong-vaccine|triet-san/
                )
                  ? "sub-nav-item-active"
                  : ""
              }`}
            >
              <span>Chăm sóc răng sâu</span>
              <span>
                <DownOutlined
                  style={{ fontSize: "12px", paddingLeft: "6px" }}
                />
              </span>
              <ul className="sub-nav nav-2" style={{ width: "359px" }}>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/tram-rang"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/tram-rang">Trám răng</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/tay-trang-rang"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/tay-trang-rang">Tẩy trắng răng</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/lay-cao-rang"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/lay-cao-rang">Lấy cao răng</a>
                </li>
              </ul>
            </li>
            <li
              className={`sub-nav-item ${
                pathname.match(
                  /trong-rang-implant|nieng-rang-mac-cai|boc-rang-su-ceramill|dan-su-veneer/
                )
                  ? "sub-nav-item-active"
                  : ""
              }`}
            >
              <span>Thẩm mỹ răng</span>
              <span>
                <DownOutlined
                  style={{ fontSize: "12px", paddingLeft: "6px" }}
                />
              </span>
              <ul className="sub-nav nav-2" style={{ width: "359px" }}>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/dan-su-veneer"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/dan-su-veneer">Trám răng</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/boc-rang-su-ceramill"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/boc-rang-su-ceramill">Tẩy trắng răng</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/nieng-rang-mac-cai"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/nieng-rang-mac-cai">Lấy cao răng</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/trong-rang-implant"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/trong-rang-implant">Lấy cao răng</a>
                </li>
              </ul>
            </li>

            <li className="sub-nav-item">
              <a href="/dich-vu/lien-he">Liên Hệ</a>
            </li>
          </ul>
        </li>
        <li
          className={`nav-item ${pathname === "/tim-lich-dat" ? "active" : ""}`}
        >
          <a href="/tim-lich-dat">Tìm lịch đặt</a>
        </li>
        <li
          className={`nav-item ${
            pathname === "/danh-sach-bai-viet" ? "active" : ""
          }`}
        >
          <a href="/danh-sach-bai-viet">Bài viết</a>
        </li>
        <li
          className={`nav-item ${pathname.match(/bang-gia/) ? "active" : ""}`}
        >
          <span>Bảng giá</span>
          <span>
            <DownOutlined style={{ fontSize: "12px", paddingLeft: "6px" }} />
          </span>
          <ul className="sub-nav" style={{ width: "267px" }}>
            <li className="sub-nav-item">
              <a href="/bang-gia/kham-tong-quat-rang-mieng">
                Khám tổng quát răng miệng
              </a>
            </li>
            <li className="sub-nav-item">
              <a href="#">Điều trị sâu răng</a>
            </li>
            <li className="sub-nav-item">
              <a href="#">Trám răng</a>
            </li>
            <li className="sub-nav-item">
              <a href="#">Tẩy trắng răng</a>
            </li>
            <li className="sub-nav-item">
              <a href="#">Lấy cao răng</a>
            </li>
            <li className="sub-nav-item">
              <a href="#">Bọc răng sứ</a>
            </li>
            <li className="sub-nav-item">
              <a href="#">Niềng răng</a>
            </li>
            <li className="sub-nav-item">
              <a href="#">Trồng răng implant</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};
