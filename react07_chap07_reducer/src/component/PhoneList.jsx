import PhoneItem from "./phoneItem.jsx";

export default function PhoneList({phoneList, onRemove}){
    return(
        <div>
            <h1>PhoneList</h1>
            {phoneList.map((data) => {
                return (
                    <PhoneItem key={data.id}
                               {...data}
                               onRemove={onRemove}/>)}
            )}
        </div>
    )
}