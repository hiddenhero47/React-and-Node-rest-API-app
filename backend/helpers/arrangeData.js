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

module.exports = {arrangeContent};
