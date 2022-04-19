import requests from './requests';
import mock from './mock';

/*************************请求真实数据*********************** */
// 请求疫情数据,key是请求数据的密钥，query参数是一个日期，通过它可以查询历史记录，能用50w次
export const reqNcov = query =>
  requests({
    url: 'http://api.tianapi.com/ncov/index?key=88857c4de15b5cfd305486ad30ac7609',
    method: 'GET',
    query,
  });

// 请求国内详细疫情信息,appid是申请接口给的id，sign是生成的密钥  每天只能用100次
export const ChinaData = () =>
  requests({
    url: 'https://yupn.api.storeapi.net/api/94/219?appid=15900&sign=0ef4dab158db0aa765fdec5ed4c5f9bb',
    method: 'GET',
  });

// 请求国内疫情历史数据，chinaDayAddList是每日新增数据，chinaDayList累计数据，第三个不知道是啥
export const reqHistory = () =>
  requests.get(
    'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,nowConfirmStatis,ProvinceCompare'
  );

// 请求全球疫情数据，里面有中国疫情详细数据、国外疫情详细数据、已经整理好的国内疫情趋势数据、全球疫情详细数据、热门数据、全球疫情趋势
export const reqGlobal = () =>
  requests.get(
    'https://yupn.api.storeapi.net/api/94/222?format=json&appid=15900&sign=437bb7237d774ae0b057c429f8c1bb7f'
  );
/********************************************************************/

// /***********************请求mock数据********************************* */
// export const reqNcov = query =>
//   mock({
//     url: '/Ncov',
//     method: 'GET',
//     query,
//   });

// // 请求国内详细疫情信息,appid是申请接口给的id，sign是生成的密钥
// export const ChinaData = () =>
//   mock({
//     url: '/ChinaData',
//     method: 'GET',
//   });

// export const reqHistory = () => mock({ url: '/HistoryData', method: 'GET' });
// export const reqGlobal = () => mock({ url: '/Global', method: 'GET' });
