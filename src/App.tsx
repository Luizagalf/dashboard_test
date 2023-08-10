import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "components/ErrorBoundary";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ListPage = lazy(() => import("./pages/ListPage"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
