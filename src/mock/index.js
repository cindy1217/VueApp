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
Mock.mock(/\/login/,'get', loginData)
Mock.mock(/\/loginOut/,'get', loginData)
Mock.mock(/\/permission/,'get', jurisdictionData)
Mock.mock(/\/userInfo/,'get', userInfoData)
export default Mock