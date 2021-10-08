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
    redirect: '/chat-index',
    exact: true,
    key: 'redirect'
  },
  {
    path: '/chat-index',
    component: 'chat-index',
    name: '主页',
    key: 'chat-index',
    exact: true
  },
];

export { routes, IRoutes };
