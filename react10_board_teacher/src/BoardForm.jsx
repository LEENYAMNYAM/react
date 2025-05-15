import {useState} from "react";

export default function BoardForm({insertBoard}) {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });
    const submitBoard =(e) => {
        e.preventDefault();
        insertBoard(formData)
    }
    const formChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <h3>BoardForm</h3>
            <input type="text" placeholder={'제목'}
                   name='title' onChange={formChange} value={formData.title}/>
            <br/><br/>
            <textarea name='content'
                      cols={60} rows={5}
                      onChange={formChange} value={formData.content}></textarea>
            <br/>
            <button onClick={submitBoard}> 입력 </button>
        </div>
    )
}