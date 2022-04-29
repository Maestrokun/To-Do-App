// import { Link } from "react-router-dom"

const Footer = ({setAbout}) => {
    return (
        <footer>
            <p>Copyright &copy; 2022</p>
            <button onClick={()=> setAbout(true)}>
                About
            </button>
        </footer>
    )
}

export default Footer