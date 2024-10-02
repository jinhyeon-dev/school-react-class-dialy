import Button from "../component/Button"
import Header from "../component/Header"
import Editor from "../component/Editor"

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
            <Editor
                initData={{ 
                    data: new Date().getTime(), emotionId: 1, content: "이전에 작성했던 일기" 
                }}
                onSubmit={() => {
                    alert('작성완클릭')
                }} />







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