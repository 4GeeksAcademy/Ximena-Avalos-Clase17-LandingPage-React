import React from "react";

 
export function Card () {
    return (
        <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title">Card title 1</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary btn-block mt-2">Button 1</button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Card title 2</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary btn-block mt-2">Button 2</button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Card title 3</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary btn-block mt-2">Button 3</button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card 4" />
              <div className="card-body">
                <h5 className="card-title">Card title 4</h5>
                <p className="card-text">This is a card with supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary btn-block mt-2">Button 4</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

