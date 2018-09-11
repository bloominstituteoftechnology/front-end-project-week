import React from "react";

class Email extends React.Component {

    render() {
        const {
            email,
            onChange,
            handleEmailUpdate
        } = this.props;

        return (
            <div>
                <label htmlFor="email">Email:</label>
                    <input type="email" name="email" autoComplete="email" value={email} placeholder="email" onChange={onChange}/>
                <a className="button" onClick={handleEmailUpdate}>Save</a>
            </div>
        );
    }
}

export default Email;