import type { FC } from "react";
import { useNavigate } from "react-router";

const Login: FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("chatUserId", "tempUser");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-xl text-center border border-[#333333] max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-white">Login</h2>
        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white font-medium py-2.5 px-6 rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
