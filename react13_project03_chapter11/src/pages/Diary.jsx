import Header from "../component/Header.jsx";
import Button from "../component/Button.jsx";
import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary.jsx";
import Viewer from "../component/Viewer.jsx";
import {getFormattedDate, setPageTitle} from "../util.jsx";
import {useEffect} from "react";

const Diary = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const data = useDiary(id)

    useEffect(() => {
        setPageTitle(`${id}번 일기`);
    }, []);

    const goBack = () => {
        navigate(-1)
    }
    const goEdit = () => {
        navigate(`/edit/${id}`)
    }
    if(!data){
        return (
            <div> 일기를 불러오고 있습니다...</div>
        )
    }else{
        const{date, content, emotionId} = data
        const title = `${getFormattedDate(new Date(date))} 기록`
        return (
            <div>
                <Header leftChild={ <Button text={"< 뒤로가기"} onClick={goBack}/> }
                        title={title}
                        rightChild={ <Button text={"수정하기 >"} onClick={goEdit}/> } />
                <Viewer content={content} emotionId={emotionId} />
            </div>
        )
    }



}
export default Diary