function PhoneItem({data , onRemove}){

    const onClickDelete = () => {
        onRemove(data.id);
    }

    return(
        <div>
            <div> id : {data.id}</div>
            <div> name : {data.name}</div>
            <div> phone : {data.phone}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}
export default PhoneItem