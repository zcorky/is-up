import fz from '@zcorky/fz';
import * as engine from 'isomorphic-fetch';

const STATUS_CODES = {
  isUp: 1,
  // isDown: 2,
  invalidDomain: 3,
};

export const isUp = async (url: string) => {
  const _url = encodeURIComponent(url.replace(/^(?:https?:)?\/\//, ''));
  const { status_code: statusCode } = await fz.get(`https://isitup.org/${_url}.json`, {
    engine,
    headers: {
      userAgent: 'https://github.com/zcorky/is-up',
    },
  }).json() as any;

  if (statusCode === STATUS_CODES.invalidDomain) {
    throw new Error('Invalid domain');
  }

  return statusCode === STATUS_CODES.isUp;
}

export default isUp;

// module.exports = isUp;