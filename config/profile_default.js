/*
* 如需配置【复制】此文件，改名为profile.js
* 暂未做热更新，修改完毕请重启yunzai
* */

/*
* Enka面板服务API配置
*
* 【Enka官网】：https://enka.network/
*
* 感谢Enka提供的面板查询服务
* https://github.com/yoimiya-kokomi/miao-plugin/issues/63#issuecomment-1199348789
* 如果可以的话，也可考虑在Patreon上支持Enka，或提供闲置的原神账户，具体可在Discord联系
*
* 如Enka服务访问不稳定，可尝试更换MiniGrayGay大佬提供的中转服务
* 【广州节点】：https://enka.microgg.cn/
* 【上海节点】：https://enka.minigg.cn/
* 推荐使用【广州】或【上海】节点，如访问enka官网相对稳定的话推荐优先使用官方地址
* 感谢@MiniGrayGay 大佬提供的服务(Github: https://github.com/MiniGrayGay)
*
* 使用代理(科学上网)可以配置proxyAgent
* 例如: http://127.0.0.1:1080
* */

export const profileApi = ({ uid, Miao, Enka, diyCfg }) => {
  let token = diyCfg?.miaoApi?.token
  if (token && token.length === 32) {
    return Miao
  }
  return Enka
}

export const miaoApi = {
  url: 'http://49.232.91.210/profile',
  token: 'miao-token',
  listApi: ({ url, uid, token }) => {
    return `${url}/data?uid=${uid}&token=${token}`
  }
}

export const enkaApi = {
  url: 'https://enka.network/',
  userAgent: 'Miao-Plugin/3.0',
  listApi: ({ url, uid }) => {
    return `${url}u/${uid}/__data.json`
  }
}

/* 请求面板的冷却时间，单位分钟 */
export const requestInterval = 5
