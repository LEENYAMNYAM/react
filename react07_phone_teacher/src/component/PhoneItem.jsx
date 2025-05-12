function PhoneItem({id, name, phone , onRemove}){

    const onClickDelete = () => {
        onRemove(id);
    }

    return(
        <div>
            <div> id : {id}</div>
            <div> name : {name}</div>
            <div> phone : {phone}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}
export default PhoneItem