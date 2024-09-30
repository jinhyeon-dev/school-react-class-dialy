import { useState } from 'react'
import { getFormattedDate } from '../util'
import './Editor.css'

const Editor = ({ initData, onSubmit }) => {
    // 새로운 일기 작성시 초기값
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: ""
    })

    const handleChange = (e) => {
        setState({
            ...state,
            date: e.target.value
        })
    }

    return (
        <div className='Editor'>
            <div className='editor_section'>
                {/* Date */}
                <h4>오늘의 날짜</h4>
                <div className='input_wrapper'>
                    <input type="date" value={state.date}
                        onChange={handleChange} />
                </div>
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

export default Editor