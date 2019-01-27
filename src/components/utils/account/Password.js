import React from "react";

class Password extends React.Component {

    render() {
        const {
            onChange,
            handlePasswordUpdate,
            passwordChange1,
            passwordChange2,
            currentpassword,
            password,
            repeatpassword,
            showTooltip1,
            hideTooltip1,
            showTooltip2,
            hideTooltip2,
            tooltip1,
            tooltip2
        } = this.props;

        return (
            <div>
                <h3>Update Password</h3>
                    <input type="password" name="currentpassword"  autoComplete="off" value={currentpassword} placeholder="Current Password" onChange={onChange}/>
                    <div>
                        {tooltip1 ? (
                            <div className="message tooltip">
                                <p>8 characters minimum</p>
                            </div>
                        ) : (null)}
                        <input type="password" name="password" autoComplete="off" value={password} placeholder="New Password" onChange={passwordChange1} onFocus={showTooltip1} onBlur={hideTooltip1}/>
                    </div>
                    <div>
                        {tooltip2 ? (
                            <div className="message tooltip">
                                <p>8 characters minimum</p>
                            </div>
                        ) : (null)}
                        <input type="password" name="repeatpassword" autoComplete="off" value={repeatpassword} placeholder="Repeat New Password" onChange={passwordChange2} onFocus={showTooltip2} onBlur={hideTooltip2}/>
                    </div>
                    <a className="button" onClick={handlePasswordUpdate}>Save</a>
            </div>
        );
    }
}

export default Password; 

