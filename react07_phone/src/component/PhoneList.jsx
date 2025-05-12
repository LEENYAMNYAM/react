import PhoneItem from "./PhoneItem.jsx";
import {useEffect, useState} from "react";

function PhoneList({datas, onRemove}){
    const [search, setSearch] = useState('');
    const [searchDatas, setSearchDatas] = useState(datas);
    useEffect(() => {
        setSearchDatas(search === "" ? datas
            : datas.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()) ||
                                     data.phone.toLowerCase().includes(search.toLowerCase()) ||
                                     data.id.toString().includes(search)))
    }, [search]);


    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    // const getSearchResult = () => {
    //     return search === "" ? datas : datas.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()) ||
    //                                                           data.phone.toLowerCase().includes(search.toLowerCase()) ||
    //                                                           data.id.toString().includes(search))
    //                 }

    return(
        <div>
            <h1>PhoneList</h1>
            <input className="searchbar"
                   placeholder="검색어를 입력하세요." value={search} onChange={onChangeSearch} />/

            {/* 검색추가 전 */}
            {/*{datas.map((data => {*/}
            {/*    return (*/}
            {/*        <PhoneItem key={data.id}*/}
            {/*                   data={data}*/}
            {/*                   onRemove={onRemove}/>)}*/}
            {/*    ))}*/}

            {/* 검색추가 후 */}
            {/*{*/}
            {/*    getSearchResult().map((data => {*/}
            {/*        return (*/}
            {/*            <PhoneItem key={data.id}*/}
            {/*                       data={data}*/}
            {/*                       onRemove={onRemove}/>*/}
            {/*        )*/}
            {/*    }))*/}
            {/*}*/}

            {searchDatas.map((data => {
                    return (
                        <PhoneItem key={data.id}
                                   data={data}
                                   onRemove={onRemove}/>)}
            ))}



        </div>
    )
}
export default PhoneList