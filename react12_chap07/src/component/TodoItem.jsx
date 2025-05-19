import './TodoItem.css'
import {useState} from "react";
export default function TodoItem({id, content, isDone, createdDate, onUpdate, onDelete, onChangeContent}) {
    const [isEdit, setIsEdit] = useState(false);
    const [editContent, setEditContent] = useState(content);

    // 수정모드 전환
    const toggleEdit = () => {
        setIsEdit(!isEdit);
        setEditContent(content); // 현재 content로 초기화
    }

    // 저장
    const handleSave = () => {
        if (editContent.trim().length < 1) {
            alert("내용을 입력하세요!");
            return;
        }
        onChangeContent(id, editContent); // 부모로 값 전달
        setIsEdit(false); // 수정 모드 종료
    }

    return(
        <div className={'TodoItem'}>
            <div className={'checkbox_col'}>
                <input type={'checkbox'} checked={isDone} onChange={()=>onUpdate(id)}/>
            </div>
            <div className={'title_col'} onClick={toggleEdit}>
                {
                    isEdit ? (
                        <input
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                        />
                    ) : (
                        content
                    )
                }
            </div>
            <div className={'date_col'}>
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className={'btn_col'}>
                {
                    isEdit ? (
                        <button onClick={handleSave}>저장</button>
                    ) : (
                        <button onClick={toggleEdit}>수정</button>
                    )
                }
            </div>
            <div className={'btn_col'}>
                <button onClick={()=>onDelete(id)}>삭제</button>
            </div>

        </div>
    )
}
