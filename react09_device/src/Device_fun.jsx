import {useEffect, useState} from "react";
import axios from "axios";

function Device_fun({children}){
    const [datas, setDatas] = useState([])

    const getMyData = async () => {
        const {
            data: {myDeviceData},
        } = await axios.get('https://www.everdevel.com/ReactJS/output-axios-data/jsonKey/');
        setDatas(myDeviceData);
    }

    useEffect(()=>{
        getMyData();
    }, [])

    return(
        <div>
            <h4>Device_fun : {children}</h4>
            {
                datas.map((item)=>(
                    <p key={item.key}>
                        name : {item.name} <br/>
                        HomeButton : {String(item.HomeButton)} <br/>
                    </p>
                ))
            }
        </div>
    )
}
export default Device_fun;