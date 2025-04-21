import { useState } from "react";
import { Camera, LogOut, Mail, Settings, User } from "lucide-react";
import LazyImage from "../../components/LazyImage";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import { GrDashboard } from "react-icons/gr";

export default function ProfilePage() {
  const [selectedImg, setSelectedImg] = useState(null);
  const {
    handleLogout,
    isLoggingOut,
    user,
    updateProfile,
    updateProfileLoading,
  } = useAuth();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ avatar: base64Image });
      toast.success("updating successfully");
    };
  };
  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300  rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold ">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <LazyImage
                src={selectedImg || user?.avatar}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4 border-base-800"
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${updateProfileLoading ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={updateProfileLoading}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {updateProfileLoading
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {user?.fullName}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {user?.email}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                role
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                {user?.role}
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                to={"/update-info"}
                className="btn btn-accent text-center text-white
                "
              >
                update info
              </Link>
              <Link to={"/settings"} className="btn btn-primary m-0">
                <Settings className="size-5 p-0 m-0" />
                settings
              </Link>

              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center gap-2 btn btn-error text-white"
              >
                {isLoggingOut ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  <>
                    <LogOut className="size-5" />
                    <span>Logout</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{user?.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
