import {useReducer, useRef} from "react";

function reducer(state, action){
    switch (action.type) {
        case 'CHANGE':
            console.log("PhoneForm onChange action.changePhone : ", action.changePhone)
            return action.changePhone;
        case 'SUBMIT':
            console.log("PhoneForm onSubmit action.newPhone : ", action.newPhone)
            return action.newPhone;
        default : {
            return state;
        }
    }
}

export default function PhoneForm({onCreate}) {
    const initialPhone = {
        name: '',
        phone: ''
    }
    const [phone , dispatch] = useReducer(reducer, initialPhone)
    const inputRef1 = useRef();

    // onChange
    const onChange = (e) => {
        console.log("PhoneForm onChange, e.target.name : ", e.target.name, " e.target.value : ", e.target.value)
        e.preventDefault()
        dispatch({
            type : 'CHANGE',
            changePhone : {
                ...phone,
                [e.target.name] : e.target.value
            }
        })
    }

    // onSubmit
    const onSubmit = (e) => {
        console.log("PhoneForm onSubmit : ", phone)
        e.preventDefault()
        onCreate(phone)
        dispatch({
            type : 'SUBMIT',
            newPhone : {
                name : '',
                phone : '',
            }
        })
        inputRef1.current.focus()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder='이름'
                       name='name'
                       onChange={onChange}
                       value={phone.name}
                       ref={inputRef1}
                />
                <input placeholder='전화번호'
                       name='phone'
                       onChange={onChange}
                       value={phone.phone}
                />
                <button type='submit'>등록</button>
            </form>
        </div>
    )

}
