import { useNavigate,useParams } from "react-router-dom";
import { useContext } from "react";
import useDiary from "../hooks/useDiary";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
const {id} = useParams()
const data = useDiary(id)

const navigate = useNavigate()

const goBack = () => {
    navigate(-1)
}

const {onUpdate,onDelete} = useContext(DiaryDispatchContext)

const onClickDelete = () => {
    if(window.confirm("일기를 정말 삭제할까요?")) {
    onDelete(id)
    navigate('/', {replace: true})
    }
}

const onSubmit = (data) => {
    if(window.confirm("일기를 정말 수정할까요?")) {
    const {date, content, emotionId} = data
    onUpdate(id, date, content,emotionId)
    navigate('/', {replace: true})
    }
}

if(!data) return <div>일기를 불러오고 있습니다.</div>
return(
    <div>
    <Header title={"일기수정하기"} 
    leftChild={<Button text={"뒤로가기"} onClick={goBack} />} 
    rightChild={<Button text={"삭제하기"} type={"negative"} onClick={onClickDelete}/>} />
    <Editor initData={data} onSubmit={onSubmit}/>
    </div>
);
}

export default Edit;