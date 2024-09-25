import './Button.css'

const Button = ({text, type, onClick}) => {
    return (
        <button className='Button' onClick={() => alert('hi')}>버튼</button>
    )
}

export default Button