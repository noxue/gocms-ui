import request from '@/utils/request'

export function getArticle (type, article) {
  return request({
    url: '/article/' + type + '/' + article,
    method: 'get'
  })
}

export function getChapter (type, article, chapter) {
  return request({
    url: '/article/' + type + '/' + article + '/' + chapter,
    method: 'get'
  })
}

export function getArticles (params) {
  return request({
    url: '/articles',
    method: 'get',
    params
  })
}
