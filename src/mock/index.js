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
Mock.mock(/\/user/,'get', loginData)

export default Mock