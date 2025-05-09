import { useAuth } from "@/context/AuthProvider";
import { toast } from "sonner";
import { Axios } from "./Axios";

export const useLogin = async (e) => {
  e.preventDefault();
  const { email, password } = e.target.elements;
  try {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    const response = await Axios.post("/login", {
      email,
      password,
    });

    console.log(response);
  } catch (err) {
    toast.error("Login Failed!", {
      description: err.response.data.message,
    });
  }
};
