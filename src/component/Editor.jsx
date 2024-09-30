import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emotionList, getFormattedDate } from '../util'
import './Editor.css'
import Button from './Button'

const Editor = ({ initData, onSubmit }) => {
    const navigate = useNavigate()

    // 새로운 일기 작성시 초기값
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: ""
    })

    // 날짜 변동시 변경사항을 상태에 저장
    const handleChange = (e) => {
        setState({
            ...state,
            date: e.target.value
        })
    }

    // 일기의 내용 변동시 변경을 상태에 저장
    const handleChangeContent = (e) => {
        setState({
            ...state,
            date: e.target.value
        })
    }

    // 작성완료 : 일기 저장
    const handleSubmit = () => {
        onSubmit(state)
    }

    // 취소버튼 눌렀을 때 뒤로가기
    const handleOnGoBack = () => {
        navigate(-1)
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
                <h4>오늘의 기분</h4>
                <div className='input_wrapper emotion_list_wrapper'>
                    {emotionList.map((it) => (
                        <img key={it.id} alt={`emotion${it.id}`} src={it.img} />
                    ))}
                </div>
            </div>
            <div className='editor_section'>
                {/* Diary */}
                <h4>오늘의 일기</h4>
                <div className='input_wrapper'>
                    <textarea
                        value={state.content}
                        onChange={handleChangeContent} />
                </div>
            </div>
            <div className='editor_section bottom_section'>
                {/* 작성완료 또는 취소 */}
                <Button text={'취소하기'} onClick={handleOnGoBack} />
                <Button text={'작성완료'} type={'positive'} onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default Editor