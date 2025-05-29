import Header from "../component/Header.jsx";
import Button from "../component/Button.jsx";
import Editor from "../component/Editor.jsx";
import {useRef} from "react";
import useDiaryStore from "../store/useDiaryStore.jsx";
import {useNavigate} from "react-router-dom";

export default function New() {
    const onCreate = useDiaryStore((state)=> state.onCreate)
    const navigate = useNavigate();

    const idRef = useRef(4);
    const goBack = () => {
        navigate(-1)
    }
    const onSubmit = (data) => {
        console.log("new onSubmit data : ", data)

        const newData = {
            ...data,
            id:idRef.current++
        };

        console.log("new onSubmit newData : ", newData)

        onCreate(newData);

        navigate("/", {replace: true});
    }

  return (
      <div>
          <Header title={'새 일기 쓰기'}
                  leftChild = { <Button text={'< 뒤로 가기'} onClick={goBack} /> }
                  />
          <Editor onSubmit={onSubmit} />
      </div>
  );
}