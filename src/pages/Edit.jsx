import { useNavigate, useParams } from "react-router-dom"
import useDiary from "../hooks/useDiary"
import Header from "../component/Header"
import Button from "../component/Button"
import { DiaryDispatchContext } from "../App"
import { useContext } from "react"


const Edit = () => {
    const { id } = useParams()
    const data = useParams(id)

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const { onDelete } = useContext(DiaryDispatchContext)

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요?")) {
            onDelete(id)
            navigate('/', { replace: true })
        }
    }

    const onSubmit = (date) => {
        if(window.confirm('일기를 정말 수정할까요?')) {
            const (date, content, emotionId)
            onSubmit(id, date, content, emotionId)
            navigate('/', { replace: true })
        }
    }

    if (!data) return <div>일기를 불러오고 있습니다.</div>
    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button text={'< 뒤로가기'} onClick={goBack} />}
                rightChild={<Button text={'삭제하기'} type={"negative"} />}
            />
        </div>
    )
}

export default Edit