import request from '@/utils/request'

const baseUrl = 'https://10010com.gimcyun.com/gimc-subentry-wechat-webapp/'
export default {
  // 获取微信配置
  getWXJsConfig(params) {
    return request({
      url: baseUrl + "wechat/getJsConfig",
      method: 'get',
      params
    })
  },
  // 联通
  // 发送验证码
  sendCaptcha(authId,data) {
    return request({
      url: `/openapi/unicom/gz/captcha/send?authId=${authId}`,
      method: 'post',
      data
    })
  },
  // 订单提交
  submit(authId,data, code) {
    return request({
      url: `/openapi/unicom/gz/order/submit?authId=${authId}${code ? '&code=' + code : ''}`,
      method: 'post',
      data
    })
  },
  // 手机号查询
  getPhoneList(authId,params) {
    return request({
      url: `/openapi/unicom/gz/phone/list?authId=${authId}`,
      method: 'get',
      params
    })
  },
  // 查询地域信息
  getRegionList() {
    return request({
      url: '/openapi/unicom/gz/region/tree',
      method: 'get'
    })
  },
  // 移动
  // 号码归属地查询
  getNumberRegionList(params) {
    return request({
      url: '/openapi/mobile/number/region/tree',
      method: 'get',
      params
    })
  },
  // 手机号查询
  getNumberList(params) {
    return request({
      url: '/openapi/mobile/number/list',
      method: 'get',
      params
    })
  },
  // 快递地址查询
  getExpressRegionList(params) {
    return request({
      url: '/openapi/mobile/express/region/tree',
      method: 'get',
      params
    })
  },
  // OAO订单提交接口
  mobileOaoSubmit(data, authId, code) {
    return request({
      url: `/openapi/mobile/order/oao/submit?authId=${authId}${code ? '&code=' + code : ''}`,
      method: 'post',
      data
    })
  },
  // 身份证和免冠照片上传
  uploadCertification(data, authId) {
    return request({
      url: `/openapi/mobile/user/certification/upload?authId=${authId}`,
      method: 'post',
      data
    })
  },
  // 身份证和免冠照片检查
  checkCertification(data, authId) {
    return request({
      url: `/openapi/mobile/user/certification/check?authId=${authId}`,
      method: 'post',
      data
    })
  },
  // 盲投订单提交接口
  mobileMtSubmit(data, authId) {
    return request({
      url: `/openapi/mobile/order/mt/submit?authId=${authId}`,
      method: 'post',
      data
    })
  }
}
