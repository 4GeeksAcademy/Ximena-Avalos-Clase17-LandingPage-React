import React from "react";

export function Card() {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {[1, 2, 3, 4].map((num) => (
          <div className="col" key={num}>
            <div className="card h-100">
              <img src={`https://via.placeholder.com/150`} className="card-img-top" alt={`Card ${num}`} />
              <div className="card-body">
                <h5 className="card-title">Card title {num}</h5>
                <p className="card-text">
                  {num % 2 === 0
                    ? "This card has supporting text below as a natural lead-in to additional content."
                    : "This is a wider card with supporting text below as a natural lead-in to additional content."}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary w-100 mt-2">Button {num}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
