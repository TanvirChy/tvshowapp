import { useContext, useEffect } from "react";

import ShowsContext from "../context/shows/showsContext";

const Singlepage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);

  useEffect(() => {
    getSingleShow(match.params.id);
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="singleshow">
          <img
            src={
                singleShow.image
                ? singleShow.image.medium
                : "https://imgk.timesnownews.com/story/Shah_Rukh_Khan_Twitter.png?tr=w-400,h-300,fo-auto"
            }
            alt={singleShow.name}
          />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong>
              {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>
              {singleShow.rating ? singleShow.rating.average : "No Rating"}
            </p>
            <p>
              <strong>Offical Site:</strong>
              {singleShow.officalSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                ></a>
              ) : (
                "No Offical Site"
              )}
            </p>
            <p>
              {singleShow.summary && removeTags(singleShow.summary)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Singlepage;
