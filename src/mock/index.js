const Mock = require('mockjs')
const Random = Mock.Random
const loginData = (opt) => {
	//let login = {};
	//for(let i = 0 ; i< 1; i++) {
		let data = {
			title:Random.csentence(5,30),
			pic:Random.dataImage(),
			autorName:Random.cname(),
			date:Random.date(),
			email:Random.email(),
			name:Random.cname()
		}
	//	login.push(data)
	//}
	return {data:data}
}
const userInfoData = (opt) =>{
	let data = {
		name:'admin',
		id:11111111111,
		role:1,
		sex:'女'
	}
	return {data:data}
}
const loginOutData = () => {
	let data = {
		msg:'suscess'
	}
	return {data:data}
}
const jurisdictionData = () => {
	let data = {
		role:1
	}
	return {data:data}
}
const baoziData = () => {
	let data = {
		"success":true,
		"data":[
			{
				"shopId":14148,
				"shopName":"esprit官方旗舰店",
				"shopOutNo":"TM_64652332",
				"flowSource":240,
				"flowSourceStr":"付费流量",
				"flowList":[
					{
						"dataTime":1538942063000,
						"flow":0
					},
					{
						"dataTime":1539028463000,
						"flow":0
					}
				]
			},
			{
				"shopId":14148,
				"shopName":"esprit官方旗舰店",
				"shopOutNo":"TM_64652332",
				"flowSource":247,
				"flowSourceStr":"自主访问",
				"flowList":[
					{
						"dataTime":1538942063000,
						"flow":0
					},
					{
						"dataTime":1539028463000,"flow":0
					}
				]
			},
			{
				"shopId":14148,
				"shopName":"esprit官方旗舰店",
				"shopOutNo":"TM_64652332",
				"flowSource":311,
				"flowSourceStr":"淘外APP",
				"flowList":[
					{
						"dataTime":1538942063000,
						"flow":0
					},
					{
						"dataTime":1539028463000,
						"flow":0
					}
				]
			},
			{
				"shopId":14148,
				"shopName":"esprit官方旗舰店",
				"shopOutNo":"TM_64652332",
				"flowSource":330,
				"flowSourceStr":"淘外网站",
				"flowList":[
					{
						"dataTime":1538942063000,
						"flow":50
					},
					{
						"dataTime":1539028463000,
						"flow":50
					}
				]
			},
			{
				"shopId":14148,
				"shopName":"esprit官方旗舰店",
				"shopOutNo":"TM_64652332",
				"flowSource":360,
				"flowSourceStr":"站外投放",
				"flowList":[
					{
						"dataTime":1538942063000,
						"flow":0
					},
					{
						"dataTime":1539028463000,
						"flow":0
					}
				]
			},
			{
				"shopId":14148,
				"shopName":"esprit官方旗舰店",
				"shopOutNo":"TM_64652332",
				"flowSource":413,
				"flowSourceStr":"其它来源",
				"flowList":[
					{
						"dataTime":1538942063000,
						"flow":1
					},
					{
						"dataTime":1539028463000,
						"flow":1
					}
				]
			}
		],
		"respCode":"00000",
		"respMsg":"成功"
	}
	return data
}
Mock.mock(/\/login/,'get', loginData)
Mock.mock(/\/loginOut/,'get', loginData)
Mock.mock(/\/permission/,'get', jurisdictionData)
Mock.mock(/\/userInfo/,'get', userInfoData)
Mock.mock(/\/baoziEcharts/,'get', baoziData)
export default Mock

