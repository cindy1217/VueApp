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
				"shopOutNo":"TM_64652332",
				"shopName":"esprit官方旗舰店",
				"dataList":[
					{
						"dataTime":1539054695000,
						"onSaleCount":9,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1539054695000,
						"onSaleCount":15,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1539054695000,
						"onSaleCount":5,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1539054695000,
						"onSaleCount":8,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1539054695000,
						"onSaleCount":7,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1539054695000,
						"onSaleCount":2,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1539054695000,
						"onSaleCount":3,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
				],
				"selfShop":true
			},
			{
				"shopId":12701,
				"shopOutNo":"TM_61773004",
				"shopName":"veromoda官方旗舰店",
				"dataList":[
					{
						"dataTime":1538968295000,
						"onSaleCount":8,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1538968295000,
						"onSaleCount":8,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1538968295000,
						"onSaleCount":8,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1538968295000,
						"onSaleCount":8,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1538968295000,
						"onSaleCount":8,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1538968295000,
						"onSaleCount":8,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},
					{
						"dataTime":1538968295000,
						"onSaleCount":8,
						"toNewCount":1,
						"discountRate":1,
						"stockCount":1,
						"averagePrice":1
					},

				],
				"selfShop":false
			},
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