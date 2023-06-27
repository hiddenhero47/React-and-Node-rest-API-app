const arrangeContent = (data) => {
    let newData = [];

  for (let i = 0; i < data.length; i++) {
    const obj = data[i].toJSON();
    const newObj = {};

    for (let key in obj) {
      if (key !== "content") {
        newObj[key] = obj[key];
      } else {
        const content = obj[key];

        if (Array.isArray(content)) {
          newObj[key] = content.map((item) => item.Url);
        } else if (typeof content === "object") {
          newObj[key] = content.Url;
        } else {
          newObj[key] = content;
        }
      }
    }

    newData.push(newObj);
  }

    return newData;
};

const arrangeStoredContent = (data) => {
  const obj = data.toJSON();
  const newObj = {};

  for (let key in obj) {
    if (key !== "content") {
      newObj[key] = obj[key];
    } else {
      const content = obj[key];

      if (Array.isArray(content)) {
        newObj[key] = content.map((item) => item.Path);
      } else if (typeof content === "object") {
        newObj[key] = content.Path;
      } else {
        newObj[key] = content;
      }
    }
  }

  return newObj;
};

const arrangeStoredUrl = (data) => {
  const obj = data.toJSON();
  const newObj = {};

  for (let key in obj) {
    if (key !== "content") {
      newObj[key] = obj[key];
    } else {
      const content = obj[key];

      if (Array.isArray(content)) {
        newObj[key] = content.map((item) => item.Url);
      } else if (typeof content === "object") {
        newObj[key] = content.Url;
      } else {
        newObj[key] = content;
      }
    }
  }

  return newObj;
};

module.exports = {arrangeContent, arrangeStoredContent, arrangeStoredUrl};
