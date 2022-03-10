import axios from 'axios';
const data_URL="http://localhost:8090/demo/data";

class Service1
{
    getData(){
        return axios.get(data_URL);
    }
    getDataById(id){
        return axios.get(data_URL+"/"+id);
    }
    updateData(data,dataid){
        return axios.put(data_URL+"/"+dataid,data);
    }
}
export default new Service1();