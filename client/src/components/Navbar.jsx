import { NavLink } from "react-router-dom";

function NavLogo() {
  return (
    <NavLink
      className="flex items-center gap-1 cursor-pointer text-rose-600"
      to="/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 lg:w-8 lg:h-8"
      >
        <path
          fillRule="evenodd"
          d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>

      <h1 className="text-lg lg:text-xl xl:text-2xl font-extrabold font-wix_madefort-">
        Da Auth
      </h1>
    </NavLink>
  );
}
function LoginButton() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-3 h-3 md:w-4 md:h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
      <p className="text-[10px] md:text-xs lg:text-sm">Login</p>
    </>
  );
}
function RegisterButton() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-3 h-3 md:w-4 md:h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <p className="text-[10px] md:text-xs lg:text-sm">Register</p>
    </>
  );
}

const AUTH_BUTTONS = [
  {
    id: 1,
    elem: <LoginButton />,
    link: "/login",
  },
  {
    id: 2,
    elem: <RegisterButton />,
    link: "/register",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-6xl mx-auto px-3 py-4 lg:py-6 flex items-center justify-between">
        <NavLogo />
        <div className="flex gap-4 lg:gap-7">
          {AUTH_BUTTONS.map((btn) => (
            <NavLink
              to={btn.link}
              className="flex items-center gap-1 bg-rose-600 hover:opacity-95 font-semibold px-2 lg:px-4 py-2 rounded-sm transition"
              key={btn.id}
            >
              <>{btn.elem}</>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
