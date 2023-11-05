import { useEffect, useState } from 'react';
import { DataMemes } from './DataMemes';

export default function Form() {
  const [allMems, setAllMemes] = useState([]);
  const [memes, setMemes] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bhw.jpg"
  });
  // console.log(memes)

  function handleRandom(e) {
    e.preventDefault();
    let randomMemes = Math.floor(Math.random() * allMems.length);
    const url = allMems[randomMemes].url;
    setMemes(memes => ({ ...memes, randomImage: url}))
  }

  function handleChange(e) {
    setMemes(memes => {
      return {
        ...memes,
        [e.target.name]: e.target.value
      }
    })
  }
  useEffect(() => {
    async function getMemes(){
      const response = await fetch("https://api.imgflip.com/get_memes")
      const data = await response.json()
      setAllMemes(data.data.memes)
    }
    getMemes()
  }, [])

  return (
    <div>
      <form onSubmit={handleRandom}>
        <input
          type='text'
          placeholder="Top Text"
          value={memes.topText}
          name='topText'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder="Buttom Text"
          value={memes.bottomText}
          name='bottomText'
          onChange={handleChange}
        />
        <button>Get a new meme image 📸</button>
      </form>

      <div className='image'>
        <img src={memes.randomImage} />
        <h2>{memes.topText}</h2>
        <h2>{memes.bottomText}</h2>
      </div>
    </div>
  )
}
