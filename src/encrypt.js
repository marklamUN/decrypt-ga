import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8'


export const encrypt = (text) => {
  return Base64.stringify(Utf8.parse(text));
};

export const decrypt = (data) => {
  return Base64.parse(data).toString(Utf8);
};