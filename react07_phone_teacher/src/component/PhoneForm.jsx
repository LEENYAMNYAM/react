import {useEffect, useRef, useState} from "react";
import {Button} from "react-bootstrap";

function PhoneForm({onCreate, initData}){
    const inputRef = useRef();
    let [data, setData] = useState({
        id: '',
        name: '',
        phone: ''
    })

    useEffect(() => {
        if(initData) {
            setData(initData)
        }else {
            setData({
                id: '',
                name: '',
                phone: ''
            })
        }
    }, [initData])


    const handleSubmit = (e) => {
        console.log('PhoneForm handleSubmit : ' + data)
        console.log('PhoneForm handleSubmit : ' + data.id)
        console.log('PhoneForm handleSubmit : ' + data.name)
        console.log('PhoneForm handleSubmit : ' + data.phone)
        e.preventDefault()
        onCreate(data)
        setData ({
            id : 0,
            name : '',
            phone : ''
        });
        inputRef.current.focus()

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
                       value={data.name || ''}
                       ref={inputRef}
                       />
                <input placeholder='전화번호'
                       name='phone'
                       onChange={handleChange}
                       value={data.phone || ''}
                       />
                {/*<button type='submit'>등록</button>*/}
                <Button variant={'primary'} type={'submit'}>
                    {initData ? '수정' : '추가'}
                </Button>
            </form>
        </div>
    )
}
export default PhoneForm