import React from 'react';

import {
  ethereumIcon,
  clockIcon,
  viewIcon,
  avatar,
  equil,
} from '../../constants/images';

const Card = () => {
  return (
    <div className="card bg-card-bg rborder">
      <div className="card__img rborder">
        <div className="card__img-hover">
          <img src={viewIcon} alt="eye" width="20px" />
        </div>

        <img src={equil} alt="equil" />
      </div>
      <h1 className="card-h1 font-bold text-white">Equilibrium #3429</h1>
      <p className="card-p fw-light text-soft-blue">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="card__info ">
        <div className="card__info__price flex" style={{ '--gap': '.5rem' }}>
          <img src={ethereumIcon} alt="ethereum coin" />
          <p className="card__info__price-p text-cyan">0.0041 ETH</p>
        </div>
        <div
          className="card__info__time flex items-center"
          style={{ '--gap': '.5rem' }}
        >
          <img src={clockIcon} alt="clock" />
          <div className="card__info__time-p fw-regular text-soft-blue">
            3 days left
          </div>
        </div>
      </div>
      <div className="card-line bg-line"></div>
      <div className="card__person flex items-center">
        <div className="card__person__image">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="card__person__by ">
          <p className="text-soft-blue fw-regular">
            Creation of <span className="text-white">Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
