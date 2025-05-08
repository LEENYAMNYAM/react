import {Component} from "react";
import PhoneInfo from "./PhoneInfo.jsx";

class PhoneList extends Component{
    render(){
        const {data, onRemove} = this.props; /* 부모로 부터 받아올때는 props를 사용함 */

        return(
            <div>
                <h3>[[PhoneList]]</h3>
                {
                 data.map((info)=>{
                     return(
                         <PhoneInfo info = {info}
                                    key = {info.id}
                                    onRemove = {onRemove}/>
                     )
                 })
                }
            </div>
        )
    }
}
export default PhoneList;