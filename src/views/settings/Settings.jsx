import { MoveLeft } from "lucide-react";
import Theme from "./Theme";
import { useNavigate } from "react-router-dom";
export default function Settings() {
  const navigate = useNavigate();
  return (
    <div className="mt-20 text-center">
      <div className="flex gap-5 mt-40 justify-center">
        <button
          className="btn hover:bg-primary hover:text-white"
          onClick={() => navigate(-1)}
        >
          <MoveLeft className="size-4" />
        </button>
        <h1 className="text-3xl font-semibold">your settings</h1>
      </div>
      <Theme />
    </div>
  );
}
