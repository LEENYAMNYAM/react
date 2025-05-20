import PhoneItem from "./phoneItem.jsx";

export default function PhoneList({phoneList, onRemove, onUpdate}){
    return(
        <div>
            <h1>PhoneList</h1>
            {phoneList.map((data) => {
                return (
                    <PhoneItem key={data.id}
                               {...data}
                               onRemove={onRemove}
                               onUpdate={onUpdate}/>)}
            )}
        </div>
    )
}