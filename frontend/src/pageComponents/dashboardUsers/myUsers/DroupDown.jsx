import React, { useEffect, useRef, useState } from "react";
import { Menu, Tooltip } from "./Users.style";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import BubbleSlide from "../../../components/loaders/bubbles/BubbleSlide";

function DroupDown({ user, handelEdit, handelDelete, isLoading, isLoadingX, isSuccess, isSuccessX }) {
  const menuRef = useRef(null);
  const [isDrouping, setIsDrouping] = useState(false);
  const [action, setAction] = useState("edit");

  useEffect(() => {
   if (isSuccess || isSuccessX) {
    setIsDrouping(false);
   }
  }, [isSuccess, isSuccessX]);
  
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsDrouping(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const toggle = (data) => {
    setIsDrouping(true);
    setAction(data);
  };

  const close = () => {
    setIsDrouping(false);
  };
  return (
    <Tooltip>
      <div className="btnBox">
        <span onClick={() => toggle("edit")}>
          <FaEdit />
        </span>
        <span onClick={() => toggle("delete")}>
          <MdDeleteSweep />
        </span>
      </div>

      {isDrouping && (
        <Menu ref={menuRef}>
          <i className="close" onClick={close}>
            <IoMdCloseCircle />
          </i>

          {action === "edit" && (
            <>
              <p>Warning are you sure you want to update user role</p>

              <button
                disabled={isLoadingX}
                onClick={() => handelEdit(user?._id)}
                type="button"
                className="submitBtn"
              >
                {isLoadingX ? (
                  <span className="appLoader">
                    <BubbleSlide />
                  </span>
                ) : (
                  <span>Make user an admin</span>
                )}
              </button>
            </>
          )}

          {action === "delete" && (
            <>
              <p>Warning are you sure you want to delete user</p>

              <button
                disabled={isLoading}
                onClick={() => handelDelete(user?._id)}
                type="button"
                className="submitBtn"
              >
                {isLoading ? (
                  <span className="appLoader">
                    <BubbleSlide />
                  </span>
                ) : (
                  <span>Delete User</span>
                )}
              </button>
            </>
          )}
        </Menu>
      )}
    </Tooltip>
  );
}

export default DroupDown;
