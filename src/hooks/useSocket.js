import { io } from "socket.io-client";
import { useCheckQuery } from "../store/api/authApiSlice";
import { useRef } from "react";

export default function useSocket() {
  const { data: user } = useCheckQuery();

  const socketRef = useRef(null);

  const connectionSocket = () => {
    if (!socketRef.current) {
      socketRef.current = io("http://localhost:9090", {
        query: { userId: user?._id },
      });
      socketRef.current.connect();
      console.log("connected socket from app component");
    }
  };

  const disconnectSocket = () => {
    if (socketRef.current?.connected) {
      socketRef.current.disconnect();
      socketRef.current = null;
      console.log("disconnected socket from app component");
    }
  };
  const checkValidtionCopoun = (code) => {
    if (socketRef.current?.connected) {
      console.log("connected socket to validation coupon")


      socketRef.current.emit("check_discount", code);
      socketRef.current.once("discount_valid", (data) => {
        console.log(data);
      });
      socketRef.current.once("discount_invalid", (data) => {
        console.log(data);
      })
    }
  }
  return {
    connectionSocket,
    disconnectSocket,
    socketRef,
    checkValidtionCopoun
  };
}
