import React from "react";
import { NavStyle } from "./smallHeader.style";
// import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { useScreenSize } from "../../../appHelpers/screenSize";
// import { logout, reset } from "../../../features/auth/authSlice";
import {
  TimeCircle,
  Instagram,
  FaceBook,
  Twitter,
  Pinterest,
} from "../../icons/socialMedia";
import { Logo, LogoText } from "../../icons/appLogo";
import { Mail, Call } from "../../icons/mail&CallIcon";
// import { BiSolidDashboard } from "react-icons/bi";

function SmallHeader() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);

  const phoneNumber = "+01 569 896 654";
  const email = "satnacontractors.com";
  const alink = "https://web.facebook.com/login/?_rdc=1&_rdr";

//   const onLogout = () => {
//     dispatch(logout());
//     dispatch(reset());
//     navigate("/");
//   };

  const screenSize = useScreenSize();

  return (
    <header style={{ width: "100%", height: "164px" }}>
      <NavStyle>
        <div className="navBody">
          <div className="navTop">
            <div className="boxHeader">
              <div className="box">
                <i>
                  <TimeCircle width={24} height={24} />
                </i>
                <i className="timeText">Mon - Sat 08:00 to 05:00</i>
              </div>

              <div className="box">
                <span className="socialIcon">
                  <a href={alink}>
                    <Instagram width={17.5} height={17.5} />
                  </a>
                  <a href={alink}>
                    <FaceBook width={17.5} height={17.5} />
                  </a>
                  <a href={alink}>
                    <Twitter width={17.5} height={17.5} />
                  </a>
                  <a href={alink}>
                    <Pinterest width={17.5} height={17.5} />
                  </a>
                </span>

                {/* <ul className="nav-options login">
                  {user ? (
                    <>
                      <li className="list listTop">
                        <button onClick={onLogout}>
                          <FaSignOutAlt /> Logout
                        </button>
                      </li>
                      <li className="list listTop">
                        <Link className="exText" to="/dashboard">
                          <BiSolidDashboard /> DashBoard
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="list listTop">
                        <Link to="/login">
                          <FaSignInAlt /> Login
                        </Link>
                      </li>
                      <li className="list listTop">
                        <Link to="/register">
                          <FaUser /> Register
                        </Link>
                      </li>
                    </>
                  )}
                </ul> */}
              </div>
            </div>

            <div className="navBox">
              <div className="box">
                <div>
                  {screenSize.width >= 558 && (
                    <Link to="/" className="logo_small">
                      <Logo width={35} height={29.93} />
                      <LogoText width={230} height={23} />
                    </Link>
                  )}

                  {screenSize.width >= 370 && screenSize.width < 558 ? (
                    <Link to="/" className="logo_small">
                      <Logo width={30} height={24.93} />
                      <LogoText width={190} height={18} />
                    </Link>
                  ) : (
                    ""
                  )}

                  {screenSize.width < 370 && (
                    <Link to="/" className="logo_small">
                      <Logo width={30} height={24.93} />
                      <LogoText width={160} height={15} />
                    </Link>
                  )}
                </div>
              </div>

              <div className="box end">
                <div className="middle">
                  <a href={`mailto:${email}`} className="middleIcon">
                    {screenSize.width >= 370 ? (
                       <Mail width={53} height={53} />
                    ): (
                        <Mail width={43} height={43} />  
                    )}
                  </a>
                </div>

                <div className="middle">
                  <a href={`tel:${phoneNumber}`} className="middleIcon">
                    {screenSize.width >= 370 ? (
                       <Call width={53} height={53} />
                    ): (
                        <Call width={43} height={43} />  
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="navBottom">
            <div className="navBox">
              <ul className="nav-options">
                {screenSize.width >= 558 && (
                  <li className="list nowrap">
                    <Link to="/">
                      <i>Home</i>
                    </Link>
                  </li>
                )}

                <li className="list nowrap">
                  <Link to="/about-us">
                    <i>About us</i>
                  </Link>
                </li>
                <li className="list nowrap">
                  <Link to="/portfolio">
                    <i>Portfolio</i>
                  </Link>
                </li>
                <li className="list nowrap">
                  <Link to="/services">
                    <i>Services</i>
                  </Link>
                </li>
                <li className="list nowrap">
                  <Link to="/contact-us">
                    <i>Contact us</i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </NavStyle>
    </header>
  );
}

export default SmallHeader;
