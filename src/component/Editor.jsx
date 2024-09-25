import './Editor.css'

const Editor = () => {
    return (
        <div className='Editor'>
            <div className='editor_section'>
                {/* Date */}
                <h4>Date</h4>
            </div>
            <div className='editor_section'>
                {/* Emotion */}
                <h4>Emotion</h4>
            </div>
            <div className='editor_section'>
                {/* Diary */}
                <h4>Diary</h4>
            </div>
            <div className='editor_section'>
                {/* 작성완료 또는 취소 */}
                <h4>Submit</h4>
            </div>
        </div>
    )
}