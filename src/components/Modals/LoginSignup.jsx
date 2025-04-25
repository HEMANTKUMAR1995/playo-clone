import React, { useState } from "react";
import Modal from "./Modal";

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");

  const renderForm = () => (
    <form className="flex flex-col gap-4 mt-4">
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 ring-blue-500"
      />
      {activeTab === "signup" && (
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 ring-blue-500"
        />
      )}
      <button className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition">
        {activeTab === "login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          {activeTab === "login" ? "Welcome Back!" : "Create an Account"}
        </h2>
        <p className="text-sm text-gray-500">
          {activeTab === "login"
            ? "Login to continue"
            : "Sign up to get started"}
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "login" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "signup" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {renderForm()}
      </div>
    </Modal>
  );
};

export default LoginSignupModal;
