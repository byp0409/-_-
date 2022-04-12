// 当数据无法请求到(次数达到上限)启用mock数据
import Mock from 'mockjs';
// 引入数据
import ChinaData from './ChinaData.json';
import Ncov from './Ncov.json';
import HistoryData from './HistoryData.json';
// Mock.mock('url',数据)

Mock.mock('/mock/ChinaData', ChinaData);
Mock.mock('/mock/Ncov', Ncov);
Mock.mock('/mock/HistoryData', HistoryData);
