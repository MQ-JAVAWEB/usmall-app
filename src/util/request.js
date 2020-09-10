import axios from "axios"
import qs from "qs"



axios.interceptors.request.use(config=>{
  console.log(config);
  if(config.url==="/api/login"){
    return config
  }else {
    let token = JSON.parse(sessionStorage.getItem("user")).token
    config.headers.authorization = token
    return config
  } 
})

axios.interceptors.response.use(res => {
  console.group("==========请求地址为：" + res.config.url + "===============")
  console.log(res)
  console.groupEnd()
  return res
})




// 登录
export const reqLogin = (form) => {
  return axios({
    url: "/api/login",
    method: "post",
    data: qs.stringify(form)
  })
}

// 注册
export const reqRegister = (form) => {
  return axios({
    url: "/api/register",
    method: "post",
    data: qs.stringify(form)
  })
}

// 轮播图
export const reqBanner = () => {
  return axios({
    url: "/api/getbanner",
    method: "get"
  })
}

// 获取商品信息（首页）
export const reqIndexGoodsInfo = () => {
  return axios({
    url: "/api/getindexgoods",
    method: "get"
  })
}

// 获取分类树
export const reqCateTree = () => {
  return axios({
    url: "/api/getcatetree",
    method: "get"
  })
}

// 获取一个商品信息
export const reqGoodsInfo = (id) => {
  return axios({
    url: "/api/getgoodsinfo",
    method: "get",
    params: id
  })
}

// 分类商品
export const reqGoods = (fid) => {
  return axios({
    url: "/api/getgoods",
    method: "get",
    params: fid
  })
}

// 购物车列表
export const reqCartList = (uid) => {
  return axios({
    url: "/api/cartlist",
    method:"get",
    params:uid
  })
}

// 购物车添加
export const reqCartAdd=(form)=>{
  return axios({
    url:"/api/cartadd",
    method:"post",
    data:qs.stringify(form)
  })
}

// 删除购物车
export const reqCartDel=(id)=>{
  return axios({
    url:"/api/cartdelete",
    method:"post",
    data:qs.stringify(id)
  })
}

// 修改购物车
export const reqCartEdit=(params)=>{
  return axios({
    url:"/api/cartedit",
    method:"post",
    data:params
  })
}