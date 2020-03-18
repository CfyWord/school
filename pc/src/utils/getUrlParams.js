const res={
    getStrUrlParams(str,key){
        let startIndex = str.indexOf('?');
        if (startIndex===-1){
            return {};
        }
        let paramsStr = str.substr(startIndex+1);
        let arr = paramsStr.split('&');
        let res = {};
        for (let index in arr){
            let forData = arr[index].split('=');
            res[forData[0]] = forData[1];
        }
        return key?res[key]:res;
    }
};
export default res;