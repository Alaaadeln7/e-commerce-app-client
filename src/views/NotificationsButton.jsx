import { useState } from "react";
import { Bell } from "lucide-react";
import { useGetNotificationQuery } from "../store/api/notificationApiSlice";

const NotificationsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: notes, isLoading } = useGetNotificationQuery();
  const notifications = notes?.data;
    if(isLoading){
      return (
            <div className="relative p-2 rounded-full">
        <Bell className="size-5 animate-pulse" />
      </div>
      )
    }
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full"
      >
        <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        {notifications?.length > 0 && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 dark:bg-gray-900 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="p-3 border-b dark:border-gray-700 flex justify-between items-center">
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              Notifications
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-primary hover:underline"
            >
              Close
            </button>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {notifications?.length > 0 ? (
              notifications?.map((notif) => (
                <div
                  key={notif.id}
                  className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <p className="text-sm text-gray-800 dark:text-gray-300 ">
                    {notif.message}
                  </p>
                  <span className="text-xs text-gray-500">
                    {new Date(notif.updatedAt).toLocaleString()}
                  </span>
                </div>
              ))
            ) : (
              <p className="p-4 text-center text-sm text-gray-500">
                No new notifications
              </p>
            )}
          </div>

          <div className="p-3 border-t dark:border-gray-700 text-center">
            <button className="text-sm text-primary hover:underline">
              View all
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsButton;
