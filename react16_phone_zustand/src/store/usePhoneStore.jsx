import {create} from "zustand";

const mockDatas =[
    {
        id : 0,
        name : '홍길동',
        phone : '010-1111-1111',
        createDate : new Date().getTime()

    },{
        id : 1,
        name : '이순신',
        phone : '010-2222-2222',
        createDate : new Date().getTime()
    }
]

const usePhoneStore = create(set => ({
    phoneList : mockDatas,
    addPhone : (newPhone) => set ((state) => ({
        phoneList : [...state.phoneList, newPhone]
    })),
    onRemove : (id) => set((state)=> ({
        phoneList : state.phoneList.filter((onePhone) => onePhone.id !== id)
    })),
    onUpdate : (editPhone) => set((state)=>({
        phoneList : state.phoneList.map((onePhone)=> onePhone.id === editPhone.id ? {
            ...onePhone,
            name : editPhone.name,
            phone : editPhone.phone
        } : onePhone)
    }))

}))
export default usePhoneStore;