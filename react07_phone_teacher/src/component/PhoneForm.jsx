import {useRef, useState} from "react";

function PhoneForm({onCreate}){
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    let [data, setData] = useState({
        name : '',
        phone : ''
    })

    const handleSubmit = (e) => {
        console.log('PhoneForm handleSubmit : ' + data)
        e.preventDefault()
        onCreate(data)
        data = {
            id : 0,
            name : '',
            phone : ''
        }
        inputRef1.current.value = ''
        inputRef2.current.value = ''
        inputRef1.current.focus()

    }

    const handleChange = (e) => {
        console.log('PhoneForm handleChange : ' + e.target.name + ', ' + e.target.value)
        e.preventDefault()
        setData({
            ...data,
            [e.target.name] : e.target.value
        })

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='이름'
                       name='name'
                       onChange={handleChange}
                       ref={inputRef1}
                       />
                <input placeholder='전화번호'
                       name='phone'
                       onChange={handleChange}
                       ref={inputRef2}
                       />
                <button type='submit'>등록</button>
            </form>
        </div>
    )
}
export default PhoneForm