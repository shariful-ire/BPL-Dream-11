import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      toast.warning("Please enter your email address!", {
        closeOnClick: true,
        onClose: () => console.log("Toast closed"),
      });
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Please enter a valid email address!", {
        closeOnClick: true,
      });
      return;
    }

    toast.success("Subscribed successfully! 🎉", {
      closeOnClick: true,
    });
    setEmail("");
  };

  return (
    <>
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 w-[80%] mx-auto">
        <h3 className="text-xl mb-2 text-white">Subscribe to our Newsletter</h3>
        <p className="text-sm text-gray-400 mb-5">
          Get the latest updates and news right in your inbox!
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex gap-3 flex-wrap sm:flex-nowrap"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 w-full sm:w-auto min-w-[200px] px-4 py-3 border-2 border-gray-700 rounded-lg bg-[#2a2a3e] text-white text-sm focus:outline-none focus:border-yellow-400 placeholder:text-gray-500 transition-colors duration-300"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-yellow-400 text-[#1a1a2e] border-none rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-yellow-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(255,215,0,0.3)] active:translate-y-0"
          >
            Subscribe
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        onClick={() => console.log("Toast clicked")}
      />
    </>
  );
};

export default Subscribe;
