import  SnackbarUtils  from '@/content/snackbar';
import { Router } from 'next/router';


export const Check_Authentication = async (response:any) => {
    if (response?.status === 401 && response?.data?.message === "UnAuthenticated" || response?.data?.message === "Unauthenticated.") {
      
      localStorage.clear();
      eraseCookie("_Secure-GUARD")
      SnackbarUtils.error("Session Expired",false)
    //   Router.push('/');
    }
    else if(response?.status === 500) {
      SnackbarUtils.error(response?.statusText + " Status Code: " + response?.status,false);
      SnackbarUtils.error("Backend Error: "+response?.data?.message ? response?.data?.message : response?.data?.msg,false);
      // Router.push("/status/maintenance")
    }
    else if(response?.status === 422 && response?.data?.msg === "Email already exist. Enter new email") 
    {
      SnackbarUtils.info(response?.data?.msg,false);
    }
    else{
      let obj :any= [];
      const tes = Object?.values(response?.data)
      let final = tes?.map((item,index) => {
          const ab:any = tes[index]
          obj?.push(ab[0])
      })
       
      response?.data?.message || response?.data?.msg ?
      SnackbarUtils.error(response?.data?.message ? response?.data?.message : response?.data?.msg  + " Status Code: " + response?.status,false) :
      obj.map((item:any,ind:any) => 
      SnackbarUtils.error(item + " Status Code: " + response?.status,false)
      )
    }
  };export function eraseCookie(name:any) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  
  export const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
  export const IsParsable = (data:any) => {
    try {
          JSON.parse(data);
         } catch (e) {
          return false;
        }
     return true;
  }
    