import {useEffect, useState} from "react";
import Header from "../component/Header.jsx";
import Button from "../component/Button.jsx";
import DiaryList from "../component/DiaryList.jsx";
import {getMonthRangeByDate} from "../util.jsx";
import useDiaryStore from "../store/useDiaryStore.jsx";

export default function Home() {
    const data = useDiaryStore((state) => state.DiaryList)
    const [pivotDate, setPivotDate] = useState(new Date());
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`

    const [filteredData, setFilteredData] = useState([])
    useEffect(() => {
        console.log("Home data : ", data)
        if(data.length >= 1) {
            const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate)
            setFilteredData(
                data.filter(it => it.date >= beginTimeStamp && it.date <= endTimeStamp)
            )
        }else{
            setFilteredData([])
        }

    }, [pivotDate]);

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }
  return (
      <div>
          <Header title={headerTitle}
                  leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                  rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}/>
          <DiaryList data={filteredData}/>
      </div>
  );
}