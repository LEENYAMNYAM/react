import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App.jsx";
import Header from "../component/Header.jsx";
import Button from "../component/Button.jsx";
import DiaryList from "../component/DiaryList.jsx";
import {getMonthRangeByDate} from "../util.jsx";

export default function Home() {
    // DiaryStateContext의 value값인 data를 가져옴(MockData)
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`

    const [filteredData, setFilteredData] = useState([])
    useEffect(() => {
        if (data.length >= 1) {
            const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate)
            console.log('beginTimeStamp : ', beginTimeStamp)
            console.log('endTimeStamp : ', endTimeStamp)
            console.log ('begin time : ' , `${pivotDate.getMonth()}`)
            console.log ('end time : ', `${pivotDate.getMonth()+1}` )

            setFilteredData(() => {
                 const filtered = data.filter(it => {
                     const itemDate = new Date(it.date);
                     return(
                         itemDate.getMonth() === pivotDate.getMonth() &&
                         itemDate.getFullYear() === pivotDate.getFullYear()
                     );
                 });
                 setFilteredData(filtered)
                // data.filter((it) => (`${pivotDate.getMonth()}` <= it.date.getMonth()) && (it.date.getMonth() <= `${pivotDate.getMonth()+1}`))
            })
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