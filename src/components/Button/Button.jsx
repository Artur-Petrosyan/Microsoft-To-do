const Button = (props) => {
    const { children } = props
    return (
        <button type="button">{children}</button>
    )
}

export default Button;