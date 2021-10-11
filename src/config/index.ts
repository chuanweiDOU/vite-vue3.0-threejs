
type GETEWAYinterface = {
  user: string;
}

type CONFIGinterface = {
  baseURL: string;
}

export const GETEWAY: GETEWAYinterface = {
  user: '/user'
}

const env = process.env.NODE_ENV

let config: CONFIGinterface = {
  baseURL: env === `development`? 'https://douchuanwei.com' : ''
}

export {
  GETEWAYinterface,
  CONFIGinterface
}

export default config