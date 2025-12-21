import Footer from "@/theme/footer/Footer";
import Topbar from "@/theme/topbar/Topbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-sp-green">
      <Topbar />
      <main className="flex flex-col">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
