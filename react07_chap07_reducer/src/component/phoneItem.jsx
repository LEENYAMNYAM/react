function PhoneItem({id, name, phone , onRemove, createDate}){

    const onClickDelete = () => {
        onRemove(id);
    }

    return(
        <div>
            <div> id : {id}</div>
            <div> name : {name}</div>
            <div> phone : {phone}</div>
            {createDate && <div> createDate : {new Date(createDate).toLocaleDateString()}</div>}


            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}
export default PhoneItem