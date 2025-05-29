import './DiaryList.css'
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import DiaryItem from "./DiaryItem.jsx";
import {useEffect, useState} from "react";
const sortOptionList = [
    {
        value : "latest",
        name : "최신순"
    },
    {
        value: "oldest",
        name : "오래된순"
    }
]

const DiaryList = ({data}) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const [sortedData, setSortedData] = useState([]);
    useEffect(() => {
        const compare = (a, b) => {
            if(sortType === "latest") {
                return Number(b.date) - Number(a.date)
            }else if(sortType === "oldest") {
                return Number(a.date) - Number(b.date);
            }
        }
        // JSON형태로 파싱
        const copyList = JSON.parse(JSON.stringify(data));
        console.log("copyList : ", copyList)
        //
        copyList.sort(compare);
        setSortedData(copyList)
    }, [sortType, data]);
    const onClickNew = () => {
        navigate("/new");
    }
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }
    return (
        <div className={"DiaryList"}>
            <div className={"menu_wrapper"}>
                <div className={"left_col"}>
                    <select onChange={onChangeSortType} value={sortType}>
                        {
                            sortOptionList.map((item, index) => (
                                <option key={index} value={item.value}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={"right_col"}>
                    <Button type={"positive"} text={"새 일기쓰기"}  onClick={onClickNew} />
                </div>
            </div>
            <div className={"list_wrapper"}>
                {
                    sortedData.map(item => (
                        <DiaryItem key={item.id} {...item}/>
                    ))
                }
            </div>

        </div>
    )
}
export default DiaryList