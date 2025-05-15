import {useEffect} from "react";

function BoardList({datas}){

    return(
        <div>
            <h3>BoardList</h3>
            <div>
                <table border="1" width="100%" cellPadding="3" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                        {
                            datas.map((data) => {
                                return (
                                    <tbody>
                                        <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td>{data.title}</td>
                                            <td>{new Date(data.createDate).toLocaleDateString()}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>{data.content}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                </table>
            </div>

        </div>
    )
}
export default BoardList
