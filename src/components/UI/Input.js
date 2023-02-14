import classes from './Input.module.css'

const Input = props => {
    return (
    <div className={classes.input}>
    <label htmFor={props.input.id}> {props.label}</label>
    <input {...props.input} />
    </div>
    )
}

export default Input