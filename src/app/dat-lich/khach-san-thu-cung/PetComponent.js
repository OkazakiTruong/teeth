"use client";
import React, { useState } from "react";
import { Select, Space } from "antd";

export default function PetComponent({ item, pets, setPets, index }) {
  const handlePetNameChange = (e) => {
    // setPetName(e.target.value);
    pets.map((pet, i) => {
      if (index === i) {
        pet.petName = e.target.value;
      }
      return pet;
    });
    setPets(pets);
  };
  const handlePetSpeciesChange = (value) => {
    pets.map((pet, i) => {
      if (index === i) {
        pet.petSpecies = value;
      }
      return pet;
    });
    setPets(pets);
  };
  const handlePetTypeChange = (e) => {
    pets.map((pet, i) => {
      if (index === i) {
        pet.petType = e.target.value;
      }
      return pet;
    });
    setPets(pets);
  };
  const handlePetGenderChange = (e) => {
    pets.map((pet, i) => {
      if (index === i) {
        pet.petGender = e.target.value;
      }
      return pet;
    });
    setPets(pets);
  };
  const handleNoteChange = (e) => {
    pets.map((pet, i) => {
      if (index === i) {
        pet.note = e.target.value;
      }
      return pet;
    });
    setPets(pets);
  };
  const handlePetOld = (e) => {
    pets.map((pet, i) => {
      if (index === i) {
        pet.petOld = e.target.value;
      }
      return pet;
    });
    setPets(pets);
  };
  const handlePetFeedChange = (value) => {
    pets.map((pet, i) => {
      if (index === i) {
        pet.petFeed = value;
      }
      return pet;
    });
    setPets(pets);
  };

  return (
    <div className="pet-item">
      <h3>Thông tin thú cưng (Danh sách thứ {index + 1}):</h3>
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="">Tên thú cưng của bạn: </label>
          <input
            type="text"
            placeholder="Nhập tên thú cưng"
            value={pets[index].petName}
            onChange={handlePetNameChange}
          />
          <div className="error">{}</div>
        </div>
        <div className="input-group">
          <label htmlFor="">Chủng loại</label>
          <Select
            value={pets[index]?.petSpecies ? pets[index]?.petSpecies : ""}
            style={{
              width: "100%",
              height: "56px",
            }}
            onChange={handlePetSpeciesChange}
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
                value: "bunny",
                label: "Thỏ",
              },
              {
                value: "other",
                label: "Khác",
              },
            ]}
          />
          <div className="error">{}</div>
        </div>
      </div>
      <div className="form-row">
        <div className="input-group">
          <p>Giới tính</p>
          <div className="form-row">
            <div className="gender">
              <div>
                <input
                  type="radio"
                  name={`gender${index}`}
                  id="male"
                  value={true}
                  onChange={handlePetGenderChange}
                  defaultChecked
                />
                <label htmlFor="">Đực</label>
              </div>
              <div>
                <input
                  type="radio"
                  name={`gender${index}`}
                  id="female"
                  value={false}
                  onChange={handlePetGenderChange}
                />
                <label htmlFor="">Cái</label>
              </div>
            </div>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="">Chọn loại dịch vụ spa</label>
          <Select
            defaultValue="Tự cung cấp thức ăn"
            style={{
              width: "100%",
              height: "56px",
            }}
            onChange={handlePetFeedChange}
            options={[
              {
                value: "Tự cung cấp thức ăn",
                label: "Tự cung cấp thức ăn",
              },
              {
                value: "Petpals cung cấp thức ăn",
                label: "Petpals cung cấp thức ăn",
              },
            ]}
          />
          <div className="error">{}</div>
        </div>
      </div>

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="">Tuổi: </label>
          <input
            type="text"
            placeholder="Không bắt buộc"
            onChange={handlePetOld}
            value={pets[index]?.petOld ? pets[index]?.petOld : ""}
          />
          <div className="error">{}</div>
        </div>
        <div className="input-group">
          <label htmlFor="">Giống loài: </label>
          <input
            type="text"
            placeholder="Không bắt buộc"
            onChange={handlePetTypeChange}
            value={pets[index]?.petType ? pets[index]?.petType : ""}
          />
          <div className="error">{}</div>
        </div>
      </div>
      <div className="form-row">
        <div className="note">
          <label htmlFor="">Ghi chú:</label>
          <textarea
            name=""
            id=""
            placeholder="Nhập nội dung ghi chú..."
            onChange={handleNoteChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
