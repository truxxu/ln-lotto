import React from "react";

const Jumbotron = () => {
  return (
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">Lightning Lottery</h1>
        <br />
        <p class="lead fw-normal">Play and win up to 100x</p>
        <br />
        <a class="btn btn-outline-secondary" href="#">
          Buy Tickets
        </a>
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  );
};

export { Jumbotron };
