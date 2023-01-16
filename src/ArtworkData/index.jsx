import React, { useEffect, useState } from "react";

const ArtworkData = () => {
  const [artworkData, setArtworkData] = useState();

  useEffect(() => {
    if (!artworkData) {
      const fetchArtworks = async () => {
        const response = await fetch(
          "https://api.artic.edu/api/v1/artworks?page=1&limit=10"
        );
        const { data } = await response.json();
        setArtworkData(data);
      };
      fetchArtworks();
    }
  }, [artworkData]);

  if (!artworkData?.length) return <p>loading</p>;

  return (
    <ul>
      {artworkData.map((artwork) => {
        return <li key={artwork.id}>{artwork.title}</li>;
      })}
    </ul>
  );
};

export default ArtworkData;
