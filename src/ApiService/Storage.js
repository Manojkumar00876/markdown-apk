export const Storage = (data)  => {
    localStorage.setItem('idToken',data)
   }

export const GetuserData = () => {
   return  localStorage.getItem('idToken');
}