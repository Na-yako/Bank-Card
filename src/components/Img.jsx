import "./Img.css";


export default function Img(props) {
    return (
        <div className="image">
            <img src={props.img} alt="image" className="img-img"/>
        </div>
    )
}