import image from "../../img/presentation.jpg";
import "./css.css";
const Presentation = () => {
    return (
        <div className="presentation">
            <div className="presentation__wrapper">
                <img className="presentation__img" src={image} alt="Nouveau !" />
            </div>
            <p className="presentation__description">
                Voyage d'Asie, that's the name of this Chinese restaurant that gives pride of place to fresh noodles made by hand before your eyes. Between noodle soups and fried noodles, dumplings and other typical Chinese dishes, you will love it. Want to make yourself an affordable and delicious Chinese restaurant? We introduce you to Voyage d'Asie, this great gourmet spot which, as its name suggests, is located in Paris, a stone's throw from the Eiffel Tower.
                <br /> <b>
                Asia Travel Owner</b>
            </p>
        </div>
    );
};

export default Presentation;
