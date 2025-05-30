import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App.jsx";
import Header from "../component/Header.jsx";
import Button from "../component/Button.jsx";
import DiaryList from "../component/DiaryList.jsx";
import {getMonthRangeByDate, setPageTitle} from "../util.jsx";

export default function Home() {
    // DiaryStateContext의 value값인 data를 가져옴(MockData)
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`

    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        setPageTitle("403 빅데이터의 감정 일기장")
    }, []);

    useEffect(() => {
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