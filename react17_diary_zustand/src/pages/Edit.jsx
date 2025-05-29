import Header from "../component/Header.jsx";
import Editor from "../component/Editor.jsx";
import {useNavigate, useParams} from "react-router-dom";
import Button from "../component/Button.jsx";
import useDiary from "../hooks/useDiary.jsx";
import useDiaryStore from "../store/useDiaryStore.jsx";

const Edit = () => {
    const onUpdate = useDiaryStore((state) => state.onUpdate)
    const onDelete = useDiaryStore((state) => state.onDelete)
    const navigate = useNavigate();
    const {id} = useParams();
    const data = useDiary(id)
    const goBack = () => {
        navigate(-1)
    }
    const onclickDelete = () => {
        if(confirm("정말 삭제할까요? 다시 복구되지 않아요!!!")){
            onDelete(id)
            navigate("/")
        }
    }
    //수정
    const onSubmit = (data) => {
        if(confirm('일기를 정말 수정할까요?')){
            onUpdate(data)
            navigate("/", {replace: true})
        }
    }

    return (
        <div>
            <Header title={"일기 수정하기"}
                    leftChild={<Button text={"<뒤로 가기"}
                                       onClick={goBack}/> }
                    rightChild={<Button type={"negative"} text={"삭제"}
                                        onClick={onclickDelete}/>}/>
            <Editor initData={data} onSubmit={onSubmit}/>
        </div>
    )
}
export default Edit