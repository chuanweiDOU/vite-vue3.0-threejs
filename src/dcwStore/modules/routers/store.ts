
export const createRouteState = () => {
  const store = {
    isShow: true,
    path: '/'
  }
  return store
}

export type useRouteInteface = ReturnType< typeof createRouteState>

