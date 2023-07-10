import { Outlet, useRouteProps } from 'umi';
import { StyleProvider } from '@ant-design/cssinjs';

export default function Layout() {

  return (
      <StyleProvider hashPriority="high">
        <Outlet />
      </StyleProvider>
  );
}
