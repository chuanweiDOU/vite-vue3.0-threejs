export interface UserState {
  token: string;
  userInfo: Object;
  test: String;
}

export interface RouterPromesState {
  routePath: string[],
  activeRoute: string
}

export interface storeState {
  user: UserState,
  routerPromes: RouterPromesState
}