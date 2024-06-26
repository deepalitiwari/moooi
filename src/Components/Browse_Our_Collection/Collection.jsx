import React from "react";
import "./Collection.css";
import { Link } from "react-router-dom";
function Collection() {
  const userCollection = [
    {
      id: 1,
      src: "https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2Fabda67d918%2Fbedding_-_bath.png&w=640&q=80",
      alt: "Bedding & Bath",
      title: "Bedding & Bath",
    },
    {
      id: 2,
      src: "https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2Fee7c645333%2Ffurniture.png&w=640&q=80",
      alt: "Furniture",
      title: "Furniture",
    },
    {
      id: 3,
      src: "https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2F2397b1f28c%2Flighting.png&w=640&q=80",
      alt: "Lighting",
      title: "Lighting",
    },
    {
      id: 4,
      src: "https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2F952491ecdc%2Fhome_accessories.png&w=640&q=80",
      alt: "Home Accessories",
      title: "Home Accessories",
    },
    {
      id: 5,
      src: "https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2Fda11bb5c7b%2Fwall_-_floor.png&w=640&q=80",
      alt: "Wall & Floor",
      title: "Wall & Floor",
    },
    {
      id: 6,
      src: "https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F588x468%2Fdc507ca56e%2Fbody_-_beauty.png&w=640&q=80",
      alt: "Body & beauty",
      title: "Body & beauty",
    },
  ];
  return (
    <div className="collection">
      <h3 className="heading">Browse our Collection</h3>
      <div className="Collectioncarts">
        {userCollection.map((item, index) => (
          <Link to={item.title} key={index}>
            <div className="collectioncart" key={index}>
              <div className="collectionImg">
                <img src={item.src} alt={item.alt} />
              </div>
              <div className="collectionTitle">{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Collection;
