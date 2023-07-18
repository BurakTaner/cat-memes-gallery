import Meme from "../Meme/Meme";
import "./gallery.css";
import catmemes from "../../../data/catmemes.json";

export default function Gallery() {
  return (
    <section className="gallery-sec">
      {catmemes.map((meme, i) => 
      <Meme img={meme.img} title={meme.title} key={i}/>
      )}
    </section>
  );
}
