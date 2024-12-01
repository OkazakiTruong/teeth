import { Button, Result } from "antd";
export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Xin lỗi trang bạn tìm không tồn tại."
      extra={
        <Button href="/" type="primary">
          Về trang chủ
        </Button>
      }
    />
  );
}
