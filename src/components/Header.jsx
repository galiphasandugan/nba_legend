import { Image } from "react-bootstrap"
import  Container  from "react-bootstrap/Container"
import logo from "../assets/nba-logo.png"


const Header = ()=>{
    return(
        <Container className="te">
           <Image src={logo} width="200px" />
           <h1 className="my-2">NBA Legends</h1>
        </Container>
    )
}
export default Header