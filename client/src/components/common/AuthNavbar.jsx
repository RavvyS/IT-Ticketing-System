import useLogout from "../../hooks/useLogout";

const AuthNavbar = () => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="mx-auto">
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="flex flex-col items-center py-5">
          <nav className="items-center mb-5">
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Blog
            </a>
            <a onClick={handleLogout}
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Log-Out
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default AuthNavbar;
