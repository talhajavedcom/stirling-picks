const PageTitle = ({ children, className }) => {
  return (
    <div className={`mb-6 sm:mb-8 ${className || ""}`}>
      <h1 className="text-lg sm:text-xl font-bold text-white font-orbitron inline-block">
        {children}
      </h1>
      <div className="w-20 sm:w-24 h-1 bg-sp-btn-primary mt-2" />
    </div>
  );
};

export default PageTitle;
