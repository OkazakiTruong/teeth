"use client";
import React, { useState } from "react";
import "./style.scss";
import { ImgStoreItem } from "./ImgStoreItem";

const listSeeADoctor = [
  { img: "/img/dentis/thamkham1.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham2.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham3.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham4.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham5.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham6.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham7.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham8.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham9.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham10.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham11.png", name: "Thăm khám" },
  { img: "/img/dentis/thamkham12.png", name: "Thăm khám" },
];
const listSpaGrooming = [
  { img: "/img/dentis/chamsocrangmieng1.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng2.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng3.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng4.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng5.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng6.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng7.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng8.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng9.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng10.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng11.png", name: "Chăm sóc răng miệng" },
  { img: "/img/dentis/chamsocrangmieng12.png", name: "Chăm sóc răng miệng" },
];
const listPetHotel = [
  { img: "/img/dentis/thammyrang1.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang2.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang3.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang4.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang5.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang6.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang7.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang8.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang9.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang10.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang11.png", name: "Thẩm mỹ răng" },
  { img: "/img/dentis/thammyrang12.png", name: "Thẩm mỹ răng" },
];

export const ImgStore = () => {
  const [currentList, setCurrentList] = useState(listSeeADoctor);
  const [currentOption, setCurrentOption] = useState(0);
  return (
    <div className="img-store">
      <div className="btn-group">
        <button
          className={`btn ${currentOption === 0 ? "active" : ""}`}
          onClick={() => {
            setCurrentList(listSeeADoctor);
            setCurrentOption(0);
          }}
        >
          THĂM KHÁM
        </button>
        <button
          className={`btn ${currentOption === 1 ? "active" : ""}`}
          onClick={() => {
            setCurrentList(listSpaGrooming);
            setCurrentOption(1);
          }}
        >
          CHĂM SÓC RĂNG MIỆNG
        </button>
        <button
          className={`btn ${currentOption === 2 ? "active" : ""}`}
          onClick={() => {
            setCurrentList(listPetHotel);
            setCurrentOption(2);
          }}
        >
          THẨM MỸ RĂNG
        </button>
      </div>
      <div className="list-img">
        {currentList?.map((item, index) => {
          return <ImgStoreItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
};
