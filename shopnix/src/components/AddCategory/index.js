import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class AddCategory extends Component {
  state = {
    bookInput: "",
    bookCategory: "",
    bookSubCategory: "",
    showPopup: false,
  };

  onChangeBooks = (event) => {
    this.setState({ bookInput: event.target.value });
  };
  onChangeCategory = (event) => {
    this.setState({ bookCategory: event.target.value });
  };
  onChangeSubCategory = (event) => {
    this.setState({ bookSubCategory: event.target.value });
  };

  // onSubmit = (event) => {
  //   const {history} = this.props
  //   const { bookInput, bookCategory, bookSubCategory } = this.state;
  //   event.preventDefault();
  //   if (bookInput === "" || bookCategory === "" || bookSubCategory === "") {
  //     alert("Fill The Form Compeletly");
  //   } else {
  //     this.setState({ showPopup: true });
  //     setTimeout(() => {
  //       this.setState({ showPopup: false });
  //     }, 3000);
  //     history.push("/add-product");
  //     // <Redirect to="/add-product" />;
  //   }
  // };

  render() {
    const { bookInput, bookCategory, bookSubCategory, showPopup } = this.state;
    return (
      <>
        <div className="add-category-container">
          <h1 className="main-heading">Lets Customise your Shopnix Store</h1>
          <h2 className="sub-heading">Add a Type, Category and Sub-Category</h2>
          <div className="form-and-diagram">
            <div className="form-group">
              <label for="product-type">Add a Product type</label>
              <input
                type="text"
                id="product-type"
                placeholder="e.g., books"
                onChange={this.onChangeBooks}
                value={bookInput}
              />
              <label for="category">Add a Category (optional)</label>
              <input
                type="text"
                id="category"
                placeholder="e.g., Academic book"
                onChange={this.onChangeCategory}
                value={bookCategory}
              />
              <label for="sub-category">Add a Sub-Category (optional)</label>
              <input
                type="text"
                id="sub-category"
                placeholder="e.g., medical book"
                onChange={this.onChangeSubCategory}
                value={bookSubCategory}
              />
            </div>
            <div className="diagram">
              <div className="flow-chart">
                <div className="box product-type">Product Type</div>
                <div className="arrow">↓</div>
                <div className="box category">Category</div>
                <div className="arrow">↓</div>
                <div className="box sub-category">Sub-Category</div>
                <div className="arrow">↓</div>
                <div className="box product">Product</div>
              </div>
            </div>
          </div>

          <div className="buttons">
            <Link to="/">
              <button className="back">Back</button>
            </Link>
            <Link to="/add-product">
              <button className="next" onClick={this.onSubmit}>
                Next
              </button>
            </Link>
            {showPopup && (
              <div className="popup">
                <p>Type Category added Successfully!</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default AddCategory;
