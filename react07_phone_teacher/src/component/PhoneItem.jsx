import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import PhoneForm from "./PhoneForm.jsx";

function PhoneItem({id, name, phone , onRemove , onUpdate}){
    const onClickDelete = () => {
        onRemove(id);
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleUpdate = (updateData) => {
        onUpdate(updateData);
        handleClose();
    }
    return(
        <div>
            <div> id : {id}</div>
            <div> name : {name}</div>
            <div> phone : {phone}</div>
            {/*<button onClick={onClickDelete}>삭제</button>*/}
            <Button variant={'outline-danger'} onClick={onClickDelete}> 삭제 </Button>
            <Button variant={'outline-secondary'} onClick={handleShow} > 수정 </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>수정</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PhoneForm initData={{id, name, phone}} onCreate={handleUpdate} />
                </Modal.Body>
            </Modal>

        </div>
    )
}
export default PhoneItem