import {create} from "zustand";

const useCountStore = create(set=>({
    count : 0,
    initCount : (newCount) => set({count : newCount}),
    upCount : () =>  set((state) => ({
        count : state.count + 1
    })),
    downCount : () => set((state) => ({
        count : state.count > 0 ? state.count - 1 : 0
    })),
    resetCount : () => set({count : 0}),
    changeCount : (newCount) => set(()=>({count : newCount})),
    addCount : (addCount) => set((state)=> ({count : state.count + addCount}))
}))

export default useCountStore