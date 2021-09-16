import React, { useState, useEffect } from "react";
import "./App.css";

const images = [
  { id: 1, imageName: "img1.jpg", tag: "free" },
  { id: 2, imageName: "img2.jpg", tag: "new" },
  { id: 3, imageName: "img3.jpg", tag: "pro" },
  { id: 4, imageName: "img4.jpg", tag: "free" },
  { id: 5, imageName: "img5.jpg", tag: "new" },
  { id: 6, imageName: "img6.jpg", tag: "pro" },
  { id: 7, imageName: "img7.jpg", tag: "free" },
  { id: 8, imageName: "img8.jpg", tag: "new" },
  { id: 9, imageName: "img9.jpg", tag: "pro" },
  { id: 10, imageName: "img10.jpg", tag: "free" },
  { id: 11, imageName: "img11.jpg", tag: "new" },
  { id: 12, imageName: "img12.jpg", tag: "pro" },
  { id: 13, imageName: "img13.jpg", tag: "free" },
  { id: 14, imageName: "img14.jpg", tag: "new" },
  { id: 15, imageName: "img15.jpg", tag: "pro" },
  { id: 16, imageName: "img16.jpg", tag: "pro" },
];

function App() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="App">
      <TagButton name="all" handleSetTag={setTag} />
      <TagButton name="free" handleSetTag={setTag} />
      <TagButton name="new" handleSetTag={setTag} />
      <TagButton name="pro" handleSetTag={setTag} />
      <div className="container">
        {filteredImages.map((image) => (
          <div key={image.id}>
            <img className="image" src={`/imgs/${image.imageName}`} alt="" />
            {images.imageName}
          </div>
        ))}
      </div>
    </div>
  );
}
const TagButton = ({ name, handleSetTag }) => {
  return (
    <button onClick={() => handleSetTag(name)}>{name.toUpperCase()}</button>
  );
};

export default App;
