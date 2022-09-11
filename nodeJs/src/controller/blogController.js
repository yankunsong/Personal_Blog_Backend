const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: "t1",
      content: "content1",
      author: "jack",
      createTime: "2019-01-01",
    },
    {
      id: 2,
      title: "t2",
      content: "content2",
      author: "rose",
      createTime: "2022-01-01",
    },
  ];
};

const getDetail = (id) => {
  return {
    id: 1,
    title: "t1",
    content: "content1",
    author: "jack",
    createTime: "2019-01-01",
  };
};

const newBlog = (blogData = {}) => {
  return { id: 3 };
};

const updateBlog = (id, blogData = {}) => {
  console.log(id, blogData);
  return true;
};

const delBlog = (id) => {return true;};

module.exports = { getList, getDetail, newBlog, updateBlog,delBlog };
