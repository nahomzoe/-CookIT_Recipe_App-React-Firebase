import React from "react";
import { Link } from "react-router-dom";

const Recipecard = ({ recipe }) => {
  return (
    <div>
      <div className="grid">
        <div className="card-container ">
          <div className="wrapper">
            <div className="card front-face">
              <img src={recipe.imagelink} />
            </div>
            <div className="card back-face">
              <img src={recipe.imagelink} />
              <div className="info">
                <div className="title">{recipe.name}</div>
                <p>{recipe.description}</p>
              </div>
              <Link className="card-link" to={`/allrecipes/${recipe.id}`}>
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipecard;
