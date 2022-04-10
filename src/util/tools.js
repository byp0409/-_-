// 时间戳转换，使用moment插件
import moment from 'moment';
export const Timestamp = data => moment().format(' YYYY-MM-DD HH:MM');

// 千分位转换
export const commafy = num => (num + '').replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');

//数字增减符号
export const sign = num => (num > 0 ? '+' + num : num);
