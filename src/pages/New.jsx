import { useNavigate } from "react-router-dom"
import Button from "../component/Button"
import Header from "../component/Header"

const New = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    return (
       <div>
           New
       </div>
    )
}

export default New