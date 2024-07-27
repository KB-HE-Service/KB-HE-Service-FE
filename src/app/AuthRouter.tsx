import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PAGE_URL, getUserInfo } from "@/shared";

const AuthRouter = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    //if (!getUserInfo()) navigate(PAGE_URL.Privacy);
  }, []);

  return <>{children}</>;
};

export default AuthRouter;
