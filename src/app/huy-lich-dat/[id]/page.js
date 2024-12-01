import "./style.scss";
export default function page({ params }) {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Hủy lịch đặt</p>
      </div>
      <div className="done-wrapper">
        <img
          src="/icon/lets-icons_done-ring-round-fill.svg"
          alt=""
          style={{ marginBottom: "20px" }}
        />
        <h2 style={{ marginBottom: "50px" }}>Hủy lịch đặt thành công !</h2>

        <p style={{ marginBottom: "14px" }}>
          Bạn đã hủy thành công lịch đặt có mã là:{" "}
          <span style={{ fontSize: "24px" }}>{params.id}</span>
        </p>
        <p style={{ marginBottom: "30px" }}>
          Mọi thắc mắc xin hãy liên hệ tới hotline (0977354956) của Petpals để
          được hỗ trợ sớm nhất nhé !
        </p>

        <p>
          <b>Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi !</b>
        </p>
        <a className="btn prev-btn" href="/">
          Quay về trang chủ
        </a>
      </div>
    </main>
  );
}
