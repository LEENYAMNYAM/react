import {useState} from "react";

const InputSample = () => {
    let [inputs, setInputs] = useState({
        name : '',
        nickName : '',
        phone : ''
    })
    let onChangeInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }
    let onReset = () => {
        setInputs({
            name : '',
            nickName : '',
            phone : ''
        })
    }
    const {name, nickName, phone} = inputs

    return(
        <div>
            <input name="name" placeholder="name"
                   onChange={onChangeInputs}/>
            <input name="nickName" placeholder="닉네임"
                   onChange={onChangeInputs}/>
            <input name="phone" placeholder="전화번호"
                   onChange={onChangeInputs}/>
            <button onClick={onReset}>초기화</button>
            <div>
                 <b> 소개 </b>
                 {inputs.name} // {inputs.nickName} // {inputs.phone} <br/>
                 <b> 소개 </b>
                 {name} // {nickName} // {phone}
            </div>
        </div>
    )

}


// const InputSample = () => {
//     let [name, setName] = useState('')     /* ''이 초기값*/
//     let [nickname, setNickname] = useState('')
//     let [phone, setPhone] = useState('')
//
//     const onChangeName = (e) =>{
//         setName(e.target.value)
//     }
//     const onChangeNickName = (e) =>{
//         setNickname(e.target.value)
//     }
//     const onChangePhone = (e) =>{
//         setPhone(e.target.value)
//     }
//     const onReset = () =>{
//         setName('')
//         setNickname('')
//         setPhone('')
//     }
//
//     return (
//         <div>
//             <input name="name" placeholder="name" value={name}
//                    onChange={onChangeName}/>
//             <input name="nickname" placeholder="nickname" value={nickname}
//                     onChange={onChangeNickName}/>
//             <input name="phone" placeholder="전화번호" value={phone}
//                     onChange={onChangePhone}/>
//             <button onClick={onReset}>초기화</button>
//             <div>
//                 <b> 소개 </b>
//                 {name} // {nickname} // {phone}
//             </div>
//         </div>
//     )
// }
export default InputSample