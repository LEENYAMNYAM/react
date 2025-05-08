import {Component} from "react";

class PhoneInfo extends Component{
    //삭제
    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id)
    }

    render(){
        const {id, name, phone} = this.props.info;
        return(
            <div>
                <div>id : {id} </div>
                <div>name : {name} </div>
                <div>phone : {phone} </div>
                <button onClick={this.handleRemove}> 삭제 </button>
            </div>
        )
    }
}
export default PhoneInfo;