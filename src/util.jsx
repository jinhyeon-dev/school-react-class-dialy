import emotion1 from './img/png/emotion1.png';
import emotion2 from './img/png/emotion2.png';
import emotion3 from './img/png/emotion3.png';
import emotion4 from './img/png/emotion4.png';
import emotion5 from './img/png/emotion5.png';

export const getEmotionImgById = (emotionId) => { 
    const targetId = String(emotionId);

    switch (targetId) {
        case '1': 
            return emotion1;
        case '2':
            return emotion2;
        case '3':
            return emotion3;
        case '4':
            return emotion4;
        case '5':
            return emotion5;
        default:
            return null; 
    }
}

export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear()
    let month = targetDate.getMonth() + 1
    let date = targetDate.getDate()

    if(month < 10) month = `0${month}`
    if(date < 10) date = `0${date}`

    return `${year}-${month}-${date}`
}