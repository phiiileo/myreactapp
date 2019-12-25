import React from 'react'

export default function CalButtons(props) {

    return (
        <div className="buttons">
            <input
                type="button"
                onClick={props.handleClick}
                value="7" />
            <input
                onClick={props.handleClick}
                type="button"
                value="8" />
            <input
                type="button"
                onClick={props.handleClick}
                value="9" />
            <input
                type="button"
                onClick={props.handleClick}
                value="C" id="delete" name="delete" />
            <input
                type="button"
                onClick={props.handleClick}
                value="CA" id="delete" name="reset" />
            <input
                type="button"
                onClick={props.handleClick}
                value="4" />
            <input
                type="button"
                onClick={props.handleClick}
                value="5" />
            <input
                type="button"
                onClick={props.handleClick}
                value="6" />
            <input
                type="button"
                onClick={props.handleClick}
                value="*" />
            <input
                type="button"
                onClick={props.handleClick}
                value="1" />
            <input
                type="button"
                onClick={props.handleClick}
                value="2" />
            <input
                type="button"
                onClick={props.handleClick}
                value="3" />
            <input
                type="button"
                onClick={props.handleClick}
                value="/" />
            <input
                type="button"
                onClick={props.handleClick}
                value="." />
            <input
                type="button"
                onClick={props.handleClick}
                value="0" />
            <input
                type="button"
                onClick={props.handleClick}
                value="+" />
            <input
                type="button"
                onClick={props.handleClick}
                value="-" />
            <input
                type="button"
                onClick={props.handleSubmit}
                value="=" id="submit" />
            

        </div>
    )
}
