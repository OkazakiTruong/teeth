import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Dịch vụ</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Điều trị sâu răng</p>
      </div>
      <section
        className="service-section"
        style={{
          marginTop: "30px",
        }}
      >
        <div className="introduce-service">
          <div className="title">
            <div>Bảng giá điều trị sâu răng</div>
            <hr/>
          </div>
        </div>
        <div className="content">
          <div>
            Dưới đây là bảng giá tham khảo cho các dịch vụ điều trị sâu răng tại Dental Clinic, bao gồm các quy trình như hàn trám, điều trị tủy và bọc răng sứ.
            Giá có thể thay đổi tùy vào tình trạng răng, loại vật liệu sử dụng.
          </div>
          <div>
            <div className="table-area">
              <table>
                <thead>
                  <tr>
                    <th>Stt</th>
                    <th>Dịch vụ</th>
                    <th>Giá miễn phí</th>
                    <th>Giá ưu đãi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Khám và tư vấn điều trị sâu răng</td>
                    <td>Miễn phí</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Hàn trám răng sâu (Composite)</td>
                    <td>200.000 - 500.000</td>
                    <td>x</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Hàn trám răng sâu (GIC)</td>
                    <td>150.000 - 400.000</td>
                    <td>x</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Điều trị tủy răng (Răng trước)</td>
                    <td>800.000 - 1.500.000</td>
                    <td>500.000- 1.200.000</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Điều trị tủy răng (Răng hàm)</td>
                    <td>1.200.000 - 3.000.000</td>
                    <td>1.000.000 - 2.800.000</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Bọc răng sứ sau điều trị sâu răng</td>
                    <td>1.500.000 - 8.000.000</td>
                    <td>x</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Điều trị sâu răng sữa cho trẻ em</td>
                    <td>100.000 - 300.000</td>
                    <td>x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div>Lưu ý:</div>
            <div>
              <ul>
                <li>Thời gian điều trị: Có thể thay đổi tùy theo tình trạng răng và mức độ sâu răng của mỗi bệnh nhân.</li>
                <li>Vật liệu sử dụng: Giá trám và bọc răng sẽ khác nhau tùy vào chất liệu. Chất liệu cao cấp sẽ có giá thành cao hơn nhưng đảm bảo 
                được độ bền và thẩm mỹ.</li>
                <li>Chế độ bảo hành: Đến với Dental Clinic quý khách hàng sẽ được bảo hành cho các dịch vụ trám và bọc răng, đặc biệt là bọc sứ, 
                giúp bệnh nhân yên tâm hơn sau khi điều trị.</li>
              </ul>
            </div>
            <div className="img-row">
            <img src="/img/dentis/dieutrisaurang.png" alt="" className="img-service"/>
            </div>
            <div>
              <div>Dental Clinic cam kết đem đến dịch vụ chăm sóc sức khỏe răng miệng chất lượng cao nhất và minh bạch về giá cả. </div>
              <div>Nếu bạn có bất kỳ thắc mắc nào hoặc cần hỗ trợ về bảng giá dịch vụ của Dental Clinic vui lòng liên hệ 
              qua hotline: 19008886 để được tư vấn và hỗ trợ nhanh nhất!</div>
              <div style={{
                fontStyle:"italic"
              }}>Dental Clinic hân hạnh được phục vụ!</div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
