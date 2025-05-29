import {create} from "zustand/react";
import diary from "../pages/Diary.jsx";
import Diary from "../pages/Diary.jsx";

const mockData = [
    {
        id: 1,
        date: new Date().getTime() - 1,
        content: "mock1",
        emotionId: 1,
    },
    {
        id: 2,
        date: new Date().getTime() - 2,
        content: "mock2",
        emotionId: 2,
    },
    {
        id: 3,
        date: new Date().getTime() - 3,
        content: "mock3",
        emotionId: 3,
    },
];

const useDiaryStore = create(set=>({
    DiaryList : mockData,
    onCreate : (newDiary) => set((state)=> ({
        DiaryList : [...state.DiaryList, newDiary]
    })),
    onUpdate : (updateDiary) => set((state)=> ({
        DiaryList : state.DiaryList.map((oneDiary) => oneDiary.id === updateDiary.id ? {
            ...oneDiary,
            date : new Date(updateDiary.date).getTime(),
            content : updateDiary.content,
            emotionId : updateDiary.emotionId
        } : oneDiary)
    })),
    onDelete : (targetId) => set((state)=> ({
        DiaryList : state.DiaryList.filter((oneDiary))
    }))

}))
export default useDiaryStore