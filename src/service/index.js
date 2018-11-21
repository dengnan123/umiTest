import request from '../helpers/request';

export async function getList(params) {
  return request('https://api.github.com/repos/dengnan123/Daily-record/issues', {
    method: 'GET',
    body: params,
  });
}
