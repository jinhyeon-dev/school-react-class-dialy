import { useParams } from "react-router-dom"
import useDiary from "../hooks/useDiary"

const Diary = () => {
    const { id } = useParams()
    const data = useDiary(id)

    return (
        <div>
            Diary
        </div>
    )
}

export default Diary