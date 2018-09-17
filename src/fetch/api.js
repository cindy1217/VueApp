import $http from './'
export  const login = () => {
	return $http.get('/inquiry/outpatientInfo/getOutpatientInfos',{
	  params:{
	    size:10,
	    page:1,
	    code:'MZ00010'
	  }
	})
}