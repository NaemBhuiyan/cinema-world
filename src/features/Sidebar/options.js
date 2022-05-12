import { PRIVATE_ROUTE } from '@/router';
import DashboardIcon from './assets/darhboard-icon.svg?component';
import BlankPage from './assets/page.svg?component';

const options = [
  {
    key: PRIVATE_ROUTE.HOME,
    label: 'Dashboard',
    LeftIcon: DashboardIcon,
    exact: true,
  },
  {
    key: PRIVATE_ROUTE.DEMO_PAGE,
    LeftIcon: BlankPage,
    label: 'Demo Page',
  },
];
export default options;
