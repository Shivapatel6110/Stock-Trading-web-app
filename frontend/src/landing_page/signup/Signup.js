import React from "react";

function Signup() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  text-center">
        <h3 style={{ fontWeight: "medium", color: "black" }}>
          Open a free demat and trading account online
        </h3>
        <h5 className="mt-3" style={{ color: "gray" }}>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h5>
      </div>

      <div className="row p-3 mt-3 ">
        <div className="col-8">
          <img src="/media/images/account_open.svg" alt="Account Open" />

        </div>

        <div className="col-4">
          <h4>Signup now</h4>
          <h5 className="mt-3 text-muted">
            Or track your existing application
          </h5>
          <div className="mb-3 ">
            <div
              className="input-group border bg-light"
              style={{ width: "350px", height: "70px" }}
            >
              <span
                className="input-group-text"
                style={{
                  backgroundImage: "url('')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                +91{" "}
              </span>

              <input
                type="tel"
                class="form-control"
                id="mobile"
                name="mobile"
                placeholder="Enter 10-digit mobile number"
                pattern="[6-9][0-9]{9}"
                maxlength="10"
                required
              />
            </div>
          </div>
          <button
            className="p-2 mt-3 btn btn-primary fs-5 mb-5"
            style={{
              width: "65%",
              margin: "0 auto",
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Get OTP
          </button>

          <p className="mt-1 text-muted">
            By proceeding, you agree to the Trading
            <a href="#"> terms & privacy policy</a>
          </p>
        </div>
      </div>
      <div className="row text-center">
        <h1 className="mt-5">Open a Trading account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup for Free
        </button>
      </div>
    </div>
  );
}

export default Signup;
