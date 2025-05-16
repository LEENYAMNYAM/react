export default function PhoneItem({id,name,phone,addr, deletePhone}){
    return(
        <div>
            <div> id : {id}</div>
            <div> name : {name}</div>
            <div> phone : {phone}</div>
            <div> addr : {addr}</div>
            <button onClick={()=>deletePhone(id)}>삭제</button>
            <hr/>
        </div>
    )
}