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
      <h2>{recipe.name}</h2>
      <div className="card-container ">
        <div className="wrapper">
          <div className="card front-face">
            <img src={recipe.imagelink} />
          </div>
          <div className="card back-face">
            <img src={recipe.flag} />
          </div>
        </div>
        <div className="detail">
          <div className="info">{recipe.name}</div>
          <div className="info">{recipe.author}</div>
          <div className="info">{recipe.country}</div>
          <div className="info">{recipe.description}</div>
          <div className="info">{recipe.quantities}</div>
          <div className="info">{recipe.ingredients}</div>
          <div className="info">{recipe.instruction}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
