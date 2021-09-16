interface IRoutes {
  path: string;
  component?: string;
  name?: string;
  key: string;
  exact: boolean;
  redirect?: string;
}

const routes: IRoutes[] = [
  {
    path: '/',
    redirect: '/index',
    exact: true,
    key: 'redirect'
  },
  {
    path: '/index',
    component: 'index',
    name: '主页',
    key: 'index',
    exact: true
  },
];

export { routes, IRoutes };
