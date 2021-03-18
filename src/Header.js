import "./Header.css"

function Header(props){
    return (
        <header className="header">
            <h1>Header {props.number}</h1>
        </header>
    )
}

export default Header;