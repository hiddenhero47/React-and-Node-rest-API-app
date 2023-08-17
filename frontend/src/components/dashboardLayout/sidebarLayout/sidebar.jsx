import React from "react";
import { Container } from "./sidebar.style";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../../features/auth/authSlice";
import { FaSignOutAlt, FaTasks } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { RiHomeFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { TbSubtask } from "react-icons/tb";
import { GrDocumentStore } from "react-icons/gr";

function Side() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const ADMIN = "admin";

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Container>
      <div className="header">
        <div className="icon">
          <BiSolidDashboard />
        </div>

        <div className="text sideBarTitle">
          <span className="firsName">{user?.name}</span>
          <span className="email">{user?.email}</span>
        </div>
      </div>

      <div className="line"></div>

      <ul className="list-wrapper">
        <li className="options">
          <Link to="/dashboard">
            <div className="icon">
              <RiHomeFill />
            </div>
            <span className="text">Dashboard lobby</span>
          </Link>
        </li>

        <li className="options">
          <Link to="/dashboard/goals">
            <div className="icon">
              <FaTasks />
            </div>
            <span className="text">Set goals</span>
          </Link>
        </li>

        {user?.role === ADMIN && (
          <>
            <li className="options">
              <Link to="/dashboard/users">
                <div className="icon">
                  <HiUsers />
                </div>
                <span className="text">Users</span>
              </Link>
            </li>

            <li className="options">
              <Link to="/dashboard/users/goals">
                <div className="icon">
                  <TbSubtask />
                </div>
                <span className="text">Users Goals</span>
              </Link>
            </li>

            <li className="options">
              <Link to="/dashboard/content">
                <div className="icon">
                  <GrDocumentStore />
                </div>
                <span className="text">App content</span>
              </Link>
            </li>
          </>
        )}
      </ul>

      <div className="line"></div>

      <button className="btn" onClick={onLogout}>
        <span className="btnBox">
          <div className="icon">
            <FaSignOutAlt />
          </div>
          <span className="text">Logout</span>
        </span>
      </button>
    </Container>
  );
}

export default Side;
