import styling from ".Map.css";
import mapImage from "../../assets/Map.png";

export default function map() {
 return (
    <div class={"container m-auto"}>
        <img class="rounded-md" src={mapImage} alt="" />
        <h1>Map Component</h1>
        <p>Paragraph</p>
    </div>
 )
}

