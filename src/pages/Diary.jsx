import { useParams } from "react-router-dom"

const Diary = () => {
    const id = useParams()
    console.log(id)
    return (
       <div>
           Diary
       </div>
    )
}

export default Diary