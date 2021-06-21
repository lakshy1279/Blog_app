import React from "react";

const BlogListItem = ({ id, blogtitle, blogcontent, image, categories }) => {
  const category = categories.map((category) => {
    return category.categoryname;
  });
  return (
    <div className="col-12">
      <div className="card border-secondary mb-3">
        <div className="card-header">{category}</div>
        <div className="card-body">
          <img width="100%" src={image[0].formats.medium.url} />
          <h4 className="card-title">{blogtitle}</h4>
        </div>
      </div>
    </div>
  );
};
export default BlogListItem;
