import { Footer } from "@/components/Footer/Footer";
import "./global.scss";
import { Header } from "@/components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, ConfigProvider, Space } from "antd";

export const metadata = {
  title: "Dental Clinic - Toả sáng nụ cười Việt",
  description: "Dental Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ToastContainer />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#60B8D6",
              fontFamily: "Roboto",
            },
            components: {
              DatePicker: {
                inputFontSize: 16,
              },
              Menu: {
                itemBg: "transparent",
                subMenuItemBg: "transparent",
                activeBarBorderWidth: 0,
                itemSelectedBg: "rgba(145, 26, 29, 0.05)",
                itemBorderRadius: 0,
              },
            },
          }}
        >
          {children}
        </ConfigProvider>
        <Footer />
      </body>
    </html>
  );
}
