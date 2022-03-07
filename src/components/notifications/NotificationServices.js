import { createContext, useState } from "react";
import { NavLink } from "react-router-dom";

const Notification = ({
  message = "Message",
  severity,
  dismissNotification,
}) => {
  if (message === "") {
    return null;
  }
  return (
    <div className="absolute top-5 right-5 z-50 border-gray-400 shadow-lg flex justify-center rounded-lg w-1/7 px-16 py-4 backdrop-blur-sm bg-gray-300/10">
      <div className="flex flex-col gap-4">
        <div> {message}</div>
        <div className="flex w-full justify-around text-sm font-light">
          <NavLink
            to={"/cart"}
            onClick={() => dismissNotification()}
            className={({ isActive }) =>
              isActive
                ? "transition duration-500 ease-in-out border-b border-black"
                : "transition duration-500 ease-in-out border-b hover:border-black opacity-50 hover:opacity-100"
            }
          >
            Go to cart
          </NavLink>
          <button
            className="transition duration-500 ease-in-out border-b hover:border-black opacity-50 hover:opacity-100"
            onClick={() => dismissNotification()}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const [message, setMessage] = useState();
  const [severity, setSeverity] = useState();

  const setNotification = (message, severity) => {
    setMessage(message);
    setSeverity(severity);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const dismissNotification = () => {
    setMessage("");
  };

  return (
    <NotificationContext.Provider value={setNotification}>
      <Notification
        message={message}
        severity={severity}
        dismissNotification={dismissNotification}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
