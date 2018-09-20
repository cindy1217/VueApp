import $http from './'
export  const login = (userInfo) => {
	return $http.post('/User/Register/local_web', userInfo)
}

export const getAuthCode = (userInfo) => {
	return $http.get('/User/AuthCode',{
		params:userInfo
	})
}