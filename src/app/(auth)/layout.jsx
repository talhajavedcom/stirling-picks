const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
