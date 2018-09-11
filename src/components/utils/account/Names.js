import React from "react";

class Names extends React.Component {

    render() {
        const {
            onChange,
            handleNamesUpdate,
            firstName,
            lastName,
        } = this.props;

        return (
            <div>
                <h3>Names</h3>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" autoComplete="given-name" value={firstName} placeholder="First Name" onChange={onChange}/>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" autoComplete="family-name" value={lastName} placeholder="Last Name" onChange={onChange}/>
                <a className="button" onClick={handleNamesUpdate}>Save</a>
            </div>
        );
    }
}

export default Names;