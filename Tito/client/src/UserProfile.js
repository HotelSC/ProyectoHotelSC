
import prof from './img/employeeIcon.png'
import logo from './img/logo.png'

export default function Profile(props) {
    return (
        <div className="container-profile container">
                <img className="logo" src={logo}/>
                <img className="pic" src={prof}/>
                <h1>LOREM IPSUM</h1>
            <div className="userInfo">
                <span>Nombre/s</span>
                <p>LOREM IPSUM</p>
                <span>Apellido/s</span>
                <p>LOREM IPSUM</p>
                <span>Telefono</span>
            </div>
        </div>
    )
}