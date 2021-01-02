import {request2} from './request'
export function getPictures(keyword,page){
  return request2({
    url:`pictures/${keyword}/${page}/1000`
  })
}