const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-sp-gray-800 text-white">
      <header className="border-b border-white/10 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="font-orbitron font-bold text-lg sm:text-xl">
          Admin Portal
        </div>
        <span className="text-xs sm:text-sm text-white/70">Stirling Picks</span>
      </header>
      <main className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-10">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
