export const setCredintial=(response)=>{
localStorage.setItem('userName',response.data.data.userName)
}