"use client";
import React from "react";

export const ImgStoreItem = ({ item }) => {
  return (
    <div className="img-store-item">
      <img src={item.img} alt="" />
      <div className="hidden">
        <div className="overlay"></div>
        <p className="img-name">{item.name}</p>
      </div>
    </div>
  );
};
