import usePhoneStore from "../store/usePhoneStore.jsx";
import {useRef, useState} from "react";

export default function PhoneForm(){
    const [newPhone, setPhone] = useState({
        name: '',
        phone: ''
    })
    const idRef = useRef(2)
    const inputRef = useRef()
    const addPhone = usePhoneStore((state) => state.addPhone);

    // onChange
    const onChange = (e) => {
        e.preventDefault()
        setPhone({
            ...newPhone,
            [e.target.name] : e.target.value
        })
        console.log("PhoneForm onChange, Phone.id : ", newPhone.id)
        console.log("PhoneForm onChange, Phone.name : ", newPhone.name)
        console.log("PhoneForm onChange, Phone.phone : ", newPhone.phone)
    }

    // onSubmit
    const onSubmit = (e) => {
        e.preventDefault();

        if(newPhone.name==='' || newPhone.phone===''){
            inputRef.current.focus()
            return;
        }

        const phoneToAdd ={
            ...newPhone,
            id: idRef.current++,
            createDate: new Date().getTime()
        }

        console.log("PhoneForm onSubmit, Phone.id : ", newPhone.id)
        console.log("PhoneForm onSubmit, Phone.name : ", newPhone.name)
        console.log("PhoneForm onSubmit, Phone.phone : ", newPhone.phone)
        addPhone(phoneToAdd)
        setPhone({ name: '', phone: '' });
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder={'이름'}
                       name={'name'}
                       onChange={onChange}
                       value={newPhone.name}
                       ref={inputRef}
                />
                <input placeholder={'전화번호'}
                       name={'phone'}
                       onChange={onChange}
                       value={newPhone.phone}
                />
                <button type='submit'>등록</button>
            </form>
        </div>
    )
}