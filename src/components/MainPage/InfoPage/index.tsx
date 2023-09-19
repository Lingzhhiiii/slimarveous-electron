import AvatarArea from "./AvatarArea";
import Introduce from "./Introduce";
import PersonInfo from "./PersonInfo";
import './style/index.css';

const Page = () => {

    return (
        <div className="container">
            <div className="Title"> 
                <h1> Slimarveous </h1>
            </div>
            <div className="Avatar">
                <AvatarArea />
            </div>
            <div className="Introduce">
                <Introduce />
            </div>
            <div className="Info">
                <PersonInfo />
            </div>
        </div>
    )
}

const InfoPage = () => {

    return (
        <>
            <Page />
        </>
    )
}

export default InfoPage;
