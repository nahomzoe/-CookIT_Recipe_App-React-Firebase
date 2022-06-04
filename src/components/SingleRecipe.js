import React from "react";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const SingleRecipe = () => {
  const recipesFetchRef = collection(db, "recipes");
  const [recipe, setRecipe] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    onSnapshot(recipesFetchRef, (snapshot) => {
      const singleRecipe = snapshot.docs.find((doc) => doc.id === id);
      setRecipe({
        id: singleRecipe.id,
        viewing: false,
        ...singleRecipe.data(),
        //title: doc.data().title.toUpperCase()
      });
      //setRecipes(recipes);
      console.log(singleRecipe);
    });
  }, []);

  return (
    <div>
      <h2 className="si-name">{recipe.name}</h2>
      <div className="single-card-container ">
        <div className="single-wrapper">
          <div className="card front-face">
            <img src={recipe.imagelink} />
          </div>
        </div>
        <div className="detail">
          <div className="info">
            <span>Author:-</span> {recipe.author}
          </div>
          <div className="info">
            {" "}
            <span>Recipe is from:-</span>
            {recipe.country} <img src={recipe.flag} alt="flag" />
          </div>
          <div className="info">
            {" "}
            <span>Description:-</span>
            {recipe.description}
          </div>
          <div className="info">{recipe.quantities}</div>
          <div className="info">{recipe.ingredients}</div>
          <div className="info">{recipe.instruction}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
