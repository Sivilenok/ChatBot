import { createRoutesFromElements, Route } from 'react-router';
import { IUser } from 'store/types';

import { ROUTE } from './routes';

import { AdminLayout } from '../layout';
import { AdminsPage, DashboardPage, PlatformsPage, SettingsPage, SolutionsPage, UsersPage } from '../pages';
import { ProtectedAdmin } from '../components';

export const adminModule = (user: IUser) =>
  createRoutesFromElements(
    <Route id="protect-admin" element={<ProtectedAdmin user={user} />}>
      <Route id="admin-layout" path={ROUTE.ADMIN} element={<AdminLayout />}>
        <Route id="admin-dashboard" path={ROUTE.DASHBOARD} element={<DashboardPage />} />
        <Route id="admin-platforms" path={ROUTE.PLATFORMS} element={<PlatformsPage />} />
        <Route id="admin-settings" path={ROUTE.SETTINGS} element={<SettingsPage />} />
        <Route id="admin-solutions" path={ROUTE.SOLUTIONS} element={<SolutionsPage />} />
        <Route id="admins" path={ROUTE.ADMINS} element={<AdminsPage />} />
        <Route id="users" path={ROUTE.USERS} element={<UsersPage />} />
      </Route>
    </Route>,
  );
