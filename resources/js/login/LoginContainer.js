import React from 'react';

class LoginComponent extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src="http://edgeup.asus.com/wp-content/uploads/2015/07/PCPARTPICKER.png" id="icon" alt="User Icon" />
                    </div>

                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="username"></input>
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"></input>
                        <input type="submit" className="fadeIn fourth" value="Log In"></input>
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">Home</a>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default LoginComponent;