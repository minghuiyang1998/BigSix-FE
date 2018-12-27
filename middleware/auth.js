export default function({ store, route, error, redirect }) {
  const isLogin = store.state.user.isLogin;
  if (!isLogin) {
    if (route.path !== '/' && route.path !== '/login' && route.path !== '/regist') {
      redirect("/login");
    }
  } else if (route.path === '/login' || route.path === '/regist') {
    redirect('/')
  }
}
