
const Field = (props) => {
const {
    className,
    id,
    placeholder,
    type = 'text',
    value,
    onInput,
} = props;
    return (
        <div className={`field ${className}`}>
            <label className="field__label visually-hidden" htmlFor={id} />
            <input
                className ="field__input"
                id ={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onInput={onInput}
            />
        </div>
    );
};

export default Field;