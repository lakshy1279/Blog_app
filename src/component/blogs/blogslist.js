import React from "react";
import fetch from "isomorphic-fetch";
import BlogListItem from "./bloglistitem";
class Bloglist extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
    };
  }
  componentWillMount() {
    fetch("https://strapilakshy.herokuapp.com/blogs")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Bad response from the server");
        }
        return res.json();
      })
      .then((blogs) => {
        // console.log(blogs);
        this.setState({
          blogs: blogs,
        });
      });
  }
  render() {
    const { id, blogtitle, content, image, categories } = this.state.blogs;
    console.log(this.state.blogs);
    return (
      <div>
        {this.state.blogs.map(
          ({ id, blogtitle, content, image, categories }) => {
            return (
              <div className="container">
                <div className="row">
                  {/* <h1>{image[0].formats}</h1> */}
                  <BlogListItem
                    key={id}
                    blogtitle={blogtitle}
                    blogcontent={content}
                    image={image}
                    categories={categories}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    );
  }
}

export default Bloglist;
