"use client";
import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { toast } from "react-toastify";
import "./addnewpet.scss";

export default function AddNewPet({ popupShow, setPopupShow }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupShow(false);
    toast.success("Thêm thông tin thành công!");
  };
  return (
    <>
      <div
        className={`overlay ${popupShow && "open"}`}
        onClick={() => {
          setPopupShow(false);
        }}
      ></div>
      <form
        className={`add-new-pet-pop-up ${popupShow && "open"}`}
        onSubmit={handleSubmit}
      >
        <h2>Thêm mới một thú cưng</h2>
        <div
          className="close-icon"
          onClick={() => {
            setPopupShow(false);
          }}
        >
          <CloseOutlined />
        </div>
        <div className="col-wrapper">
          <div className="col-left">
            <img src="/img/grey-img-3.svg" alt="" />
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
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Chủng loại:</label>
                <Select
                  defaultValue="dog"
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
                <input type="text" placeholder="Giống loài" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Tuổi:</label>
                <input type="text" placeholder="Nhập tuổi" />
              </div>
              <div className="input-group">
                <label htmlFor="">Giới tính</label>
                <Select
                  defaultValue={true}
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
              setPopupShow(false);
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
