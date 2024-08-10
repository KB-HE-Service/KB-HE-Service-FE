import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  PAGE_URL,
  getUserInfo,
  useDataStore,
  MainSocketService,
  DecSocketService,
} from "@/shared";

const AuthRouter = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const modelId = useDataStore((state) => state.modelId);
  const { onOpen: mainSocketOn } = MainSocketService();
  const { onOpen: decSocketOn } = DecSocketService();

  useEffect(() => {
    if (!getUserInfo()) navigate(PAGE_URL.Privacy);
  }, []);

  useEffect(() => {
    if (!modelId) return;

    mainSocketOn(modelId);
    decSocketOn(modelId);
  }, [modelId]);

  return <>{children}</>;
};

export default AuthRouter;
