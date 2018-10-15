import request from '@/utils/request'

export function getTypes (params) {
  return request({
    url: '/article-types',
    method: 'get',
    params
  })
}

export function getType (typeName) {
  return request({
    url: '/article-type/' + typeName,
    method: 'get'
  })
}
