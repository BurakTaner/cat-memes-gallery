import "./meme.css";
export interface Props {
  img:string;
  title:string
}
export default function Meme(props:Props) {
  return (
  <div>
      <div className="img-container">
              <img src={props.img} alt="A cat"/>
      </div>
      <h2 className="img-title">{props.title}</h2>
  </div>
  );
}
