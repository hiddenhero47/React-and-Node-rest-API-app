import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/dashboardLayout/mainLayout/layout";
import Content from "../pageComponents/dashboardContent/appContents/Content";
import ContentForm from "../pageComponents/dashboardContent/form/ContentForm";
import DeleteContent from "../pageComponents/dashboardContent/deleteContent/DeleteContent";

function DashboardContent() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [subPage, setSubPage] = useState("contents");

  const [currentContent, setCurrentContent] = useState({});

  const changeSubPage = (text) => {
    setSubPage(text);
  };

  const options = [
    {
      name: "contents",
      keyword: "contents",
    },
    {
      name: "content form",
      keyword: "contentForm",
    },
    {
      name: "delete",
      keyword: "delete",
    },
  ];
  return (
    <DashboardLayout
      options={options}
      subPage={subPage}
      setSubPage={setSubPage}
    >
      {subPage === "contents" && (
        <Content
          currentContent={currentContent}
          setCurrentContent={setCurrentContent}
          setSubPage={changeSubPage}
        />
      )}

      {subPage === "contentForm" && (
        <ContentForm
          currentContent={currentContent}
          setCurrentContent={setCurrentContent}
          setSubPage={changeSubPage}
        />
      )}

      {subPage === "delete" && (
        <DeleteContent
          currentContent={currentContent}
          setCurrentContent={setCurrentContent}
          setSubPage={changeSubPage}
        />
      )}
    </DashboardLayout>
  );
}

export default DashboardContent;
