import axios from 'axios'

export function request(config){
  const instance1=axios.create({
    timeout:5000
  })
  return instance1(config);
}

export function request2(config){
  const instance2=axios.create({
    baseURL:'/api',
    timeout:10000
  })
  return instance2(config);
}