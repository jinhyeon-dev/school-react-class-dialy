import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

// http://localhost:3000/diary?sort=latest
const Diary = () => {
    const [useSearchParams, setSearchParams] = useSearchParams()
    // const id = useParams()
    console.log(useSearchParams.get("sort"))

    // console.log(id)
    return (
       <div>
           Diary
       </div>
    )
}

export default Diary