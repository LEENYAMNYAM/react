import usePhoneStore from "../store/usePhoneStore.jsx";
import {useState} from "react";

export default function PhoneItem({id, name, phone, createDate}){
    const onRemove = usePhoneStore((state) => state.onRemove);
    const onUpdate = usePhoneStore((state) => state.onUpdate);
    const [isEdit, setIsEdit] = useState(false);
    const [editPhone, setEditPhone] = useState({
        id,
        name,
        phone,
        createDate
    });
    const toggleEdit = () => {
        setIsEdit(!isEdit);
        setEditPhone({
            id,
            name,
            phone,
            createDate
        })
    }
    const onChange = (e) => {
        setEditPhone({
            ...editPhone,
            [e.target.name] : e.target.value
        })
    }
    const onClickDelete = () => {
        onRemove(id);
    }
    const onClickUpdate = () => {
        onUpdate(editPhone);
        setIsEdit(!isEdit);
    }

    return(
        <div>
            {
                isEdit ? (
                    <div>
                        <div> id : {id} </div>
                        name : <input name={'name'} value= {editPhone.name} onChange={onChange}/>
                        <br/>
                        phone : <input name={"phone"} value= {editPhone.phone} onChange={onChange}/>
                        {createDate && <div> createDate : {new Date(createDate).toLocaleDateString()}</div>}
                    </div>
                ): (
                    <div>
                        <div> id : {id}</div>
                        <div> name : {name}</div>
                        <div> phone : {phone}</div>
                        {createDate && <div> createDate : {new Date(createDate).toLocaleDateString()}</div>}
                    </div>
                )
            }
            <button onClick={onClickDelete}>삭제</button>
            {
                isEdit ? (
                    <button onClick={onClickUpdate}>저장</button>
                ) : (
                    <button onClick={toggleEdit}>수정</button>
                )
            }
        </div>
    )
}