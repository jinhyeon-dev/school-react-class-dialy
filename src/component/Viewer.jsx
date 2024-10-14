import './Viewer.css'
import { emotionId, emotionList } from '../util'
import EmotionItem from './EmotionItem'

const Viewer = ({ content, emotionId }) => {
    const emotionList = emotionList.find((it) => it.id === emotionId)


    return(
        <div className='Viewer'>
            <section>
                <h4>오늘의 일기</h4>
                <div
                    className={['emotion_img_wrapper',
                    `emotion_img_wrapper_${emotionId}`,
                    ].join(" ")} >
                </div>

                <img alt={EmotionItem.name} src={EmotionItem.img} />
                <div className='emotion_descript'>{EmotionItem.name}</div>
            </section>
            <section>
                <h4>내용</h4>
                <div className='content_wrapper'> 
                    <p>{content}</p>
                </div>
            </section>
        </div>
    )
}

export default Viewer