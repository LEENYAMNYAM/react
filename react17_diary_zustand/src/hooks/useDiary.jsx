import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useDiaryStore from "../store/useDiaryStore.jsx";

const useDiary = (id) => {
    const data = useDiaryStore((state) => state.DiaryList)
    const [diary, setDiary] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const matchDiary = data.find((it) => String(it.id) === String(id));
        if(matchDiary) {
            setDiary(matchDiary);
        }else{
            alert("일기가 존재하지 않습니다.")
            navigate("/", {replace: true})
        }
    }, [id]);
    return diary;
}
export default useDiary