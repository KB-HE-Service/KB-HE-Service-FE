import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PAGE_URL, getUserInfo, useDataStore } from "@/shared";

import { createSnowflake } from "@/utils";

const AuthRouter = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const snowflacke = createSnowflake();
  const setClientId = useDataStore((state) => state.setClientId);

  useEffect(() => {
    console.log(snowflacke());
    setClientId(snowflacke());
    if (!getUserInfo()) navigate(PAGE_URL.Privacy);
  }, []);

  return <>{children}</>;
};

export default AuthRouter;
