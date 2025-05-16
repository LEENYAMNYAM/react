import PhoneItem from "./PhoneItem.jsx";

export default function PhoneList({phoneList, deletePhone}){
    return(
        <div>
            <h3>List</h3>
            {
                phoneList && phoneList.map((phone) => {
                    return(
                        <PhoneItem key={phone.id}
                                   {...phone} deletePhone={deletePhone} />
                    )
                })
            }
        </div>
    )
}