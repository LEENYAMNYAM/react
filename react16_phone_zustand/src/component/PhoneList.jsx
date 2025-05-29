import usePhoneStore from "../store/usePhoneStore.jsx";
import PhoneItem from "./PhoneItem.jsx";

export default function PhoneList(){
    const phoneList = usePhoneStore((state)=>state.phoneList)
    console.log('PhoneList phoneList : ', phoneList)
    return(
        <div>
            <h1>PhoneList</h1>
            {
                phoneList.map(onePhone=> {
                    return(
                        <PhoneItem key={onePhone.id} {...onePhone} />
                    )
                })
            }
        </div>
    )
}