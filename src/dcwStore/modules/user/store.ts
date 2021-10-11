export const createState = () => {
  const store = {
    loding: true,
    token: '',
    userInfo: {}
  }
  return store
}
// 类型推到
export type userState = ReturnType< typeof createState>