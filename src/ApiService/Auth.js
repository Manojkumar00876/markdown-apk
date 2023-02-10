import { GetuserData } from "./Storage"


export const isAutent = () => {
    return GetuserData()!=null?true:false;
}