import AppHeader from "../components/common/Header";
import Footer from "../components/common/Footer";

import { Layout } from "antd";

const { Header, Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout className="mainLayout" style={{ height: "100vh" }}>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: "#f0f2f5",
        }}
      >
        <AppHeader />
      </Header>
      <Content style={{ padding: "50px 50px" }}>
        <div
          style={{
            padding: 24,
            background: "white",
            minHeight: 800,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
