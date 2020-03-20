import Mock from 'mockjs';
import ApiPath from '../ApiPath';
import DetaIls from './product/Details.js';
import CataList from './CateList.js';
import CommonConfig from './CommonConfig.js';
import ProList from './product/list.js';
import Notice from './home/notice.js';
import AdList from './home/ad.js';

/*-------------------------分类start-------------------------------*/
Mock.mock(RegExp(ApiPath.category.getList + ".*"), 'get',CataList);
/*-------------------------分类end-------------------------------*/

/*-------------------------头部Nav start-------------------------------*/
Mock.mock(RegExp(ApiPath.common.config + ".*"), 'get',CommonConfig);
/*-------------------------头部Nav end-------------------------------*/

/*-------------------------Home start-------------------------------*/
//公告
Mock.mock(RegExp(ApiPath.home.notice + ".*"), 'get',Notice);

//广告
Mock.mock(RegExp(ApiPath.home.adList + ".*"), 'get',AdList);

/*-------------------------Home end-------------------------------*/


/*--------------产品start-----------------*/
//产品列表
Mock.mock(RegExp(ApiPath.product.getProList + ".*"), 'get',(params)=>{ return ProList(params)});
// 产品详情
Mock.mock(RegExp(ApiPath.product.getProDetails + ".*"), 'get',DetaIls);

/*--------------产品end-----------------*/