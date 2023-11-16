import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Bar } from 'components/Bar/Bar';

export const Layout = () => {
  return (
    <div>
      <Bar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
