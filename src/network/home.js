import {request} from './request'
export function getIconList(){
  return request({
    url:"js/iconList.json"
  })
}

export function getBackList(){
  return request({
    url:"js/background.json"
  })
}