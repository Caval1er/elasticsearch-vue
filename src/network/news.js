import {request2} from './request'
export function getNews(keyword,page){
  return request2({
    url:`news/${keyword}/${page}/10`
  })
}