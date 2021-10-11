import { modules } from './modules'

// 取出 M 里面的 getters, 如果存在返回 R， 如果不存在返回 unknown
type getGetter<M> = M extends { getters: infer R} ? R : unknown

// 取出getters 里面的 key
type getGetters<M> = {
  [K in keyof M]: getGetter<M[K]>
}

// 获取getters实例里面的key value 类型
type DCWGetters = getGetters<typeof modules>

// getters 的取值方式
type Addprefix<P, K> = `${P & string}/${K & string}`

/***
 * P == [user, routers]
 * keyof M == isLogin || Keyof M == isShow
 * 
 * 
 */
type GetSpliceKey<P, M> = Addprefix<P, keyof M>

/**
 * K == [user, routers]
 * M == user: {
        isLogin: (state: {
            loding: boolean;
            token: string;
            userInfo: {};
        }) => string;
    };
    routers: {
        isShow: (state: {
            isShow: boolean;
            path: string;
        }) => boolean;
    };
 *
 * M[K] == {
 *  isLogin: (state: {
        loding: boolean;
        token: string;
        userInfo: {};
    }) => string;
 * }
 */

type GetSpliceKeys<M> = {
  [K in keyof M]: GetSpliceKey<K, M[K]>
}[keyof M]


type GetFunc<T, A, B> = T[A & keyof T][B & keyof T[A & keyof T]]

type GetSpliceObj<T> = {
  [K in GetSpliceKeys<T>]: K extends `${infer A}/${infer B}` ? GetFunc<T, A, B> : unknown
}

type ModuleGetters = GetSpliceObj<DCWGetters>

type Getters = {
  [K in keyof ModuleGetters]: ReturnType<ModuleGetters[K]>
}


export { Getters }