import { Link } from "react-router-dom";

const HERO_BUTTONS = [
  {
    id: 1,
    text: "login",
    link: "/login",
  },
  {
    id: 2,
    text: "register",
    link: "/register",
  },
];

const Hero = () => {
  return (
    <div className="w-[40rem] rounded-md border border-zinc-800 bg-zinc-900 shadow shadow-zinc-900">
      <div className="px-3 md:px-4 lg:px-5 py-4 md:py-5 lg:py-6">
        <h1 className="text-lg font-bold">About Da Auth</h1>
        <p className="mt-3 text-[13px] text-gray-400">
          Experience the power of MERN stack authentication with our demo app. A
          robust, secure, and intuitive authentication system that delivers a
          seamless user experience.
        </p>

        <div className="flex gap-4">
          {HERO_BUTTONS.map((btn) => (
            <Link
              to={btn.link}
              key={btn.id}
              type="button"
              className={`mt-4 rounded-sm ${
                btn.text === "login" ? "bg-indigo-600" : "bg-green-600"
              } px-3 lg:px-4 py-2 text-xs lg:text-sm capitalize font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition`}
            >
              {btn.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
