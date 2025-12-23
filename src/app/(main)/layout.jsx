import Footer from "@/theme/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-sp-green">
      <main className="flex flex-col">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
