"use client";
import "./style.scss";
import React from "react";
import { Pagination } from "antd";

export const Paginate = () => {
  return (
    <Pagination
      className="pagination"
      defaultCurrent={1}
      total={100}
      showLessItems={true}
      showSizeChanger={false}
    />
  );
};
