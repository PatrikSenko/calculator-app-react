import "./Button.css";

const Button = ({symbol, color, props, handleClick}) => {
    return <div 
    onClick={() => handleClick(symbol)}
    className="btn-wrapper" style={{ backgroundColor: color, width:props }} >
        {symbol}
    </div>
}


export default Button;