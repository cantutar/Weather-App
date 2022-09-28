import BackgroundImage from "./BackgroundImage";
import Navbar from "./Navbar";
import classes from "./Card.module.scss";

export default function MainPage(props) {
  return (
    <div>
      <BackgroundImage />
      <>
        <div className="row d-flex justify-content-end flex-equal">
          <div className="text-white col-8 bg-danger d-flex flex-column justify-content-between">
            <Navbar />
            <div className="row d-flex justify-content-evenly align-items-center Screen Index-1 pb-5 ms-5">
              <h1 className="ScreenText">16°C</h1>
              <h2>London</h2>
            </div>
          </div>
          <div className={`col-4 ${classes.Card}`}>
            <div className="container-fluid">
              <div className="card bg-white">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
