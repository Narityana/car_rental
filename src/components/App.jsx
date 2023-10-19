import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Catalog = lazy(() => import('../pages/CatalogPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
