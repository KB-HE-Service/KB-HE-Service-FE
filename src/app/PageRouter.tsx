import { Suspense, lazy } from "react";
import {
  BrowserRouter as RootRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AppStyles from "./AppStyles";
import AuthRouter from "./AuthRouter";

import { Loading } from "@/entities";

const Privacy = lazy(() => import("@/pages/privacy/PrivacyPage"));
const Inference = lazy(() => import("@/pages/home/InferencePage"));
const Training = lazy(() => import("@/pages/home/TrainingPage"));

import { PAGE_URL } from "@/shared";

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter>
      <AppStyles />
      <AuthRouter>
        <Routes>
          <Route>
            <Route
              index
              element={<Navigate to={PAGE_URL.Inference} replace />}
            />
            <Route path={PAGE_URL.Privacy} element={<Privacy />} />
            <Route path={PAGE_URL.Inference} element={<Inference />} />
            <Route path={PAGE_URL.Training} element={<Training />} />
          </Route>
        </Routes>
      </AuthRouter>
    </RootRouter>
  </Suspense>
);

export default PageRouter;
