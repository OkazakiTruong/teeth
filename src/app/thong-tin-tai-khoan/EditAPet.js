"use client";
import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { toast } from "react-toastify";
import "./editapet.scss";

export default function EditAPet({ popupEditShow, setPopupEditShow, data }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupEditShow(false);
    toast.success("Chỉnh sửa thông tin thành công!");
  };
  return (
    <>
      <div
        className={`overlay ${popupEditShow && "open"}`}
        onClick={() => {
          setPopupEditShow(false);
        }}
      ></div>
      <form
        className={`add-new-pet-pop-up ${popupEditShow && "open"}`}
        onSubmit={handleSubmit}
      >
        <h2>Chỉnh sửa thông tin thú cưng</h2>
        <div
          className="close-icon"
          onClick={() => {
            setPopupEditShow(false);
          }}
        >
          <CloseOutlined />
        </div>
        <div className="col-wrapper">
          <div className="col-left">
            <img src={data?.petImg} alt="" />
            <button type="button">Thêm ảnh</button>
          </div>
          <div className="col-right">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Tên thú cưng:</label>
                <input
                  type="text"
                  placeholder="Nhập tên thú cưng"
                  style={{ width: 675, height: 40, padding: "0 20px" }}
                  value={data?.petName}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Chủng loại:</label>
                <Select
                  defaultValue={data?.petSpecies}
                  style={{
                    width: 328,
                    height: 40,
                    border: "1px solid black",
                    borderRadius: "10px",
                    padding: "2px",
                  }}
                  options={[
                    {
                      value: "dog",
                      label: "Chó",
                    },
                    {
                      value: "cat",
                      label: "Mèo",
                    },
                    {
                      value: "other",
                      label: "Khác",
                    },
                  ]}
                />
              </div>
              <div className="input-group">
                <label htmlFor="">Giống loài</label>
                <input
                  type="text"
                  placeholder="Giống loài"
                  value={data?.petType}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Tuổi:</label>
                <input
                  type="text"
                  placeholder="Nhập tuổi"
                  value={data?.petOld}
                />
              </div>
              <div className="input-group">
                <label htmlFor="">Giới tính</label>
                <Select
                  value={data?.petGender}
                  style={{
                    width: 328,
                    height: 40,
                    border: "1px solid black",
                    borderRadius: "10px",
                    padding: "2px",
                  }}
                  options={[
                    {
                      value: true,
                      label: "Đực",
                    },
                    {
                      value: false,
                      label: "Cái",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="btn-group">
          <button
            className="btn btn-cancel"
            type="button"
            onClick={() => {
              setPopupEditShow(false);
            }}
          >
            Hủy
          </button>
          <button className="btn btn-save">Lưu</button>
        </div>
      </form>
    </>
  );
}
