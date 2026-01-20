import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const PortfolioPage = lazy(() => import('../pages/portfolio/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
const EnterpriseBudgetPage = lazy(() => import('../pages/projects/enterprise-budget/page'));
const LogisticsDashboardPage = lazy(() => import('../pages/projects/logistics-dashboard/page'));
const SqlAnalyticsPage = lazy(() => import('../pages/projects/sql-analytics/page'));
const TechFlowSaasPage = lazy(() => import('../pages/projects/techflow-saas/page'));
const PromptingCasebookPage = lazy(() => import('../pages/prompting-casebook/page'));
const ProductLedGrowthPage = lazy(() => import('../pages/projects/product-led-growth/page'));
const SkodaSmartFlowPage = lazy(() => import('../pages/projects/skoda-smartflow/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PortfolioPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/projects/product-led-growth',
    element: <ProductLedGrowthPage />,
  },
  {
    path: '/projects/skoda-smartflow',
    element: <SkodaSmartFlowPage />,
  },
  {
    path: '/projects/enterprise-budget',
    element: <EnterpriseBudgetPage />,
  },
  {
    path: '/projects/logistics-dashboard',
    element: <LogisticsDashboardPage />,
  },
  {
    path: '/projects/sql-analytics',
    element: <SqlAnalyticsPage />,
  },
  {
    path: '/projects/techflow-saas',
    element: <TechFlowSaasPage />,
  },
  {
    path: '/prompting-casebook',
    element: <PromptingCasebookPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
