import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Gif from "./components/Gif";
import Input from "./components/Input";
import PostContainer from "./components/PostContainer";

function App() {
  const [id, setId] = useState("");
  const [postData, setPostData] = useState([]);
  const [gifImage, setGifImage] = useState([]);
  const [btnVal, setBtnVal] = useState(false);
  const [gifInput, setGifInput] = useState();
  const [textInput, setTextInput] = useState();
  // const [imgUrl, setImgUrl] = useState("");
  const [textVal, setTextVal] = useState("");
  const [gifVal, setGifVal] = useState("");
  const placeholderComment = "Enter Your Comment Here";
  const placeholderGif = "Search Gif here";
  const style = {
    width: "80%",
  };
  let imgUrl = "";
  function handlePost() {
    if (id && gifImage.length !== 0) {
      imgUrl = gifImage.images.downsized.url;
    }
    const inputVal = textVal;
    if (imgUrl || inputVal) setPostData([...postData, { imgUrl, inputVal }]);
    imgUrl = "";
    setTextVal("");
    // setImgUrl("");
    setGifImage([]);
    setBtnVal(false);
  }

  useEffect(() => {
    if (btnVal) {
      fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=lGZ3ZLBnAaDLtrFOtStLXdWDjhbazK0O&limit=20&rating=g"
      )
        .then((res) => res.json())
        .then((response) => {
          setGifImage(response.data);
        });
    } else {
      setGifImage([]);
    }
  }, [btnVal]);
  useEffect(() => {
    if (gifInput) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=lGZ3ZLBnAaDLtrFOtStLXdWDjhbazK0O&q=${gifInput}&limit=20&offset=0&rating=g&lang=en`
      )
        .then((res) => res.json())
        .then((responseData) => {
          setGifImage(responseData.data);
          console.log(responseData);
        });
    }
  }, [gifInput]);
  useEffect(() => {
    if (id) {
      fetch(
        `https://api.giphy.com/v1/gifs/${id}?api_key=lGZ3ZLBnAaDLtrFOtStLXdWDjhbazK0O`
      )
        .then((res) => res.json())
        .then((response) => {
          setGifImage(response.data);
          // setImgUrl(response.data.images.downsized.url);
          console.log(Array.isArray(response.data));
        });
    }
  }, [id]);
  console.log(id);
  return (
    <div className="App">
      <h1>Post Comments</h1>
      <Input
        placeholder={placeholderComment}
        style={style}
        setInput={setTextInput}
        input={textInput}
        val={textVal}
        setVal={setTextVal}
      />
      <Input
        placeholder={placeholderGif}
        display="flex"
        btn="true"
        setInput={setGifInput}
        input={gifInput}
        setBtnVal={setBtnVal}
        btnVal={btnVal}
        val={gifVal}
        setVal={setGifVal}
      />
      <Gif data={gifImage} setId={setId} setGifImage={setGifImage} id={id} />
      <Button handleSubmit={handlePost} />

      <PostContainer data={postData} />
    </div>
  );
}

export default App;
