import { SlArrowRight } from "react-icons/sl";

function BodyTitle({ title }) {
    return (
        <div className="body-title d-flex justify-content-center align-items-center flex-column">
            <div className="body-title-text">
                <h2>{title}</h2>
            </div>
            <div className="body-title-option">
                <a href="/">Home</a>
                <SlArrowRight style={{ marginRight: "15px" }} />
                <span>{title}</span>
            </div>
        </div>
    );
}

export default BodyTitle;
