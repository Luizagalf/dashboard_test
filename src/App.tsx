import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "components/ErrorBoundary";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ListPage = lazy(() => import("./pages/ListPage"));

const App: React.FC = () => {
  return (
    <HashRouter>
      <ErrorBoundary
        fallback={
          <div>Упс! Что-то пошло не так. Пожалуйста, обновите страницу.</div>
        }
      >
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            <Route index path="/" element={<DashboardPage />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </HashRouter>
  );
};

export default App;
