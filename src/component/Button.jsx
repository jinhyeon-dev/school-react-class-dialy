import './Button.css'

const Button = ({text, type, onClick}) => {
    return (
        <button className='Button' onClick={{onClick}}>{text}</button>
    )
}

export default Button