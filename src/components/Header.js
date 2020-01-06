import React from "react";


class Header extends React.Component{
    render(){
        const days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date();
        let day = date.getDay();
        
        return(
            <div>
            <span className="header-title">{days[day]}</span> <br></br>
        <span> {months[day]} {date.getFullYear()}</span>
            </div>
                


            
        )
    }
}
export default Header;