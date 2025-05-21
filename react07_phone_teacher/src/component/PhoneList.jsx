import PhoneItem from "./PhoneItem.jsx";

function PhoneList({datas, onRemove, onUpdate}){
    return(
        <div>
            <h1>PhoneList</h1>
            {datas.map((data) => {
                return (
                    <PhoneItem key={data.id}
                               {...data}
                               onRemove={onRemove}
                               onUpdate={onUpdate}/>)}
                )}
        </div>
    )
}
export default PhoneList