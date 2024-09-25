import Button from "../component/Button"
import Header from "../component/Header"

const Home = () => {
     return (
        <div>
            <Header 
                title={"Home"}
                leftChild={
                    <Button 
                    type="positive"
                    text={"긍정"}
                    onClick={() => alert('긍정')}
                />
                }
                rightChild={
                    <Button 
                    type="negative"
                    text={"부정"}
                    onClick={() => alert('부정')}
                />
                }
            />
            {/* <Button 
                text={"기본"}
                onClick={() => alert('기본')}
            /> */}
            {/* <Button 
                type="positive"
                text={"긍정"}
                onClick={() => alert('긍정')}
            /> */}
            {/* <Button 
                type="negative"
                text={"부정"}
                onClick={() => alert('부정')}
            /> */}
        </div>
     )
}

export default Home