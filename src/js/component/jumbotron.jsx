import React from "react";


export function Jumbotron () {
    return (
        <div className="container my-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold text-center text-md-start">A WARM WELCOME!</h1>
            <p className="col-md-8 fs-4 mx-auto mx-md-0">
                Ekologiški maisto produktai: sveikatai ir aplinkai naudinga pasirinktis Kas yra ekologiški maisto produktai?
                Ekologiški maisto produktai yra tie, kurie yra auginti arba pagaminti be pesticidų, sintetinių trąšų ar cheminių medžiagų. Šie
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <button className="btn btn-primary btn-lg" type="button">CALL TO ACTION</button>
            </div>
          </div>
        </div>
      </div>
    );
};
