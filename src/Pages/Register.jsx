import { LoginForm } from "@/components/login-form";
import React from "react";

const Register = () => {
  const data = {
    title: "create an account",
    button:'Create Account',
    inputs: [
      { Label: "username", type: "text", placeholder: "username" },
      { Label: "email", type: "email", placeholder: "m@example.com" },
      { Label: "password", type: "password", placeholder: "your password" },
    ],
    footer:{
        redirectPath: "/login",
        redirectText: "Already have an account?",
        text:'Login'
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm data={data} />
      </div>
    </div>
  );
};

export default Register;
