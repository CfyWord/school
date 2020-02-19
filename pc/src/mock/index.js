import Mock from 'mockjs'
import MyInfo from './MyInfo.js';
Mock.mock('/main.php?cid=1', 'get', MyInfo)