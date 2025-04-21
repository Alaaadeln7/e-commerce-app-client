import { useNavigate } from "react-router-dom";
import {
  useCheckQuery,
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useUpdateProfileMutation,
} from "../store/api/authApiSlice";
import toast from "react-hot-toast";

export default function useAuth() {
  const { data: user, isLoading: userLoading } = useCheckQuery();
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
  const [signup, { isLoading: isSigningUp }] = useSignupMutation();
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();

  const [updateProfile, { isLoading: updateProfileLoading }] =
    useUpdateProfileMutation();

  const navigate = useNavigate();

  const handleSignup = async (values) => {
    try {
      await signup(values).unwrap();
      toast.success("Signup is successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.data?.message || "Signup failed. Try again!");
    }
  };

  const handleLogin = async (values) => {
    try {
      await login(values).unwrap();
      toast.success("Login is successful");
      navigate("/");
    } catch (error) {
      toast.error(error.data?.message || "Login failed");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      toast.error("An error occurred during logout");
      console.error(error);
    }
  };

  return {
    user: user?.data,
    userLoading,
    handleSignup,
    logout,
    isLoggingOut,
    handleLogout,
    signup,
    isSigningUp,
    login,
    handleLogin,
    isLoggingIn,
    updateProfileLoading,
    updateProfile,
  };
}
