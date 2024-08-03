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
const Inferences = lazy(() => import("@/pages/home/InferencesPage"));
const Trainings = lazy(() => import("@/pages/home/TrainingsPage"));

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
              element={<Navigate to={PAGE_URL.Inferences} replace />}
            />
            <Route path={PAGE_URL.Privacy} element={<Privacy />} />
            <Route path={PAGE_URL.Inferences} element={<Inferences />} />
            <Route path={PAGE_URL.Trainings} element={<Trainings />} />
          </Route>
        </Routes>
      </AuthRouter>
    </RootRouter>
  </Suspense>
);

export default PageRouter;
