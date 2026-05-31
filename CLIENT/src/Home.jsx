import React, { useEffect, useState } from "react";
import ViewJobs from "./seeker/ViewJobs";
import AdminSignIn from "./admin/AdminSignIn";
import SignIn from "./seeker/SignIn";
import CompanySignIn from "./company/CompanySignIn";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  // useEffect(() => {
  //     if (showAdminSignIn) {
  //       setShhowUserSignIn(false);
  //       setShowCompanySignIn(false);
  //     } else if (showUserSignIn) {
  //       setShowAdminSignIn(false);
  //       setShowCompanySignIn(false);
  //     } else if (showCompanySignIn) {
  //       setShowAdminSignIn(false);
  //       setShhowUserSignIn(false);
  //     }
  //   }, [showAdminSignIn, showUserSignIn, showCompanySignIn]);

  return (
    <div>
      <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <Link className="navbar-brand mx-3 ">
          JOBQUEST: NAVIGATING YOUR CARRER JOURNEY FULL STACK MERN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              {/* <Link className="nav-link">
                <i />
                <marquee behavior="alternate" direction="left" scrollAmount="8">
                  Welcome to JOB portal
                </marquee>

                <span className="sr-only">(current)</span>
              </Link> */}
            </li>
          </ul>

          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="submit">Search</button>
          </form> */}

          <ul className="navbar-nav" style={{ marginLeft: "500px" }}>
            <li className="nav-item active">
              <Link className="nav-link" onClick={() => setActiveComponent(null)}>
                <i className="fa fa-home" />
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                onClick={() => handleButtonClick("user")}
              >
                <i className="fa fa-solid fa-graduation-cap"></i>
                Student
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link
                className="nav-link"
                onClick={() => handleButtonClick("company")}
              >
                <i className="fa fa-solid fa-id-badge"></i>
                Employer
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link
                className="nav-link"
                onClick={() => handleButtonClick("admin")}
              >
                <i className="fa fa-solid fa-user-tie"></i>
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── HERO — only shows when no button is clicked ── */}
      {!activeComponent && (
        <div
          style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #ff6b35 0%, #ff3cac 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 24px",
            textAlign: "center",
            paddingTop: "80px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1.5,
                padding: "8px 22px",
                borderRadius: 50,
                marginBottom: 28,
                textTransform: "uppercase",
              }}
            >
              🚀 India's #1 Job Portal for Students
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.15,
                margin: "0 0 20px",
                textShadow: "0 2px 20px rgba(0,0,0,0.15)",
              }}
            >
              Find Your Dream Job
              <br />
              Navigate Your Career
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.9)",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
                fontWeight: 600,
              }}
            >
              Connect students with top employers. Discover thousands of
              opportunities tailored for freshers and experienced professionals.
            </p>
          </div>
        </div>
      )}

      {activeComponent === "admin" && <AdminSignIn />}
      {activeComponent === "user" && <SignIn />}
      {activeComponent === "company" && <CompanySignIn />}
    </div>
  );
};

export default Home;
