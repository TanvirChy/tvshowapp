import { useContext } from "react";
import ShowsContext from "../context/shows/showsContext";

import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
const Homepage = () => {
  const { loading, shows } = useContext(ShowsContext);
  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className='homepage__list'>
          {shows.map((item) => (
           <ListItem 
            key={item.show.id}
            id={item.show.id}
            image={item.show.image ? item.show.image.medium:"https://imgk.timesnownews.com/story/Shah_Rukh_Khan_Twitter.png?tr=w-400,h-300,fo-auto"}
            name={item.show.name}
            rating={item.show.rating.average ? item.show.rating.average :"No Rating"}

            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
