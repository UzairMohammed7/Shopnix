import { Component } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import "./index.css";

class SetUpTheStore extends Component {
  state = {
    nameOfStore: "",
    storeTitle: "",
    email: "",
    phoneNumber: "",
    isChecked: false,
    imageSrc: null,
    isImageSelected: false
  };
  onChangeNameOfStore = (event) => {
    this.setState({ nameOfStore: event.target.value });
  };
  onChangeStoreTitle = (event) => {
    this.setState({ storeTitle: event.target.value });
  };
  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  onChangePhone = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };
  onChangeCheckbox = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  };

  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.setState({ imageSrc: event.target.result, isImageSelected: true });
      };
      reader.readAsDataURL(file);
    }
  };

  render() {
    const { nameOfStore, storeTitle, email, phoneNumber, isChecked, imageSrc, isImageSelected } =
      this.state;
    return (
      <>
        <div className="main-container">
          <h1 className="main-heading">Lets Customise your Shopnix Store</h1>
          <h2 className="sub-heading">Add your First Product</h2>

          <div className="sub-container">
            <div className="left-container">
              <div className="header">Basic Details</div>
              <div className="form-group">
                <label for="store-name">Name of the Store</label>
                <input
                  type="text"
                  id="store-name"
                  placeholder="e.g., Trial"
                  onChange={this.onChangeNameOfStore}
                  value={nameOfStore}
                />
              </div>
              <div className="form-group">
                <label for="store-title">Store Title</label>
                <input
                  type="text"
                  id="store-title"
                  placeholder="e.g., Trial online store"
                  onChange={this.onChangeStoreTitle}
                  value={storeTitle}
                />
              </div>

              <div className="image-containers">
                <div className="form-group">
                  <img
                    src="https://via.placeholder.com/50x50?text=No+Photo+Available"
                    alt="Logo Preview"
                  />
                  <label for="store-logo">Add Logo</label>
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={this.handleImageChange}
                    />
                  </div>
                  <p>
                    Supported: JPEG, PNG & WEBP. Image height: 150px, width:
                    200px
                  </p>
                </div>

                <div className="form-group">
                  <img
                    src="https://via.placeholder.com/50x50?text=No+Photo+Available"
                    alt="Favicon Preview"
                  />
                  <label for="store-favicon">Add Favicon</label>
                  <input type="file" id="store-favicon" accept="image/*" />
                  <p>
                    Image format: .icon only. Image height: 32px, width: 32px
                  </p>
                </div>
              </div>

              <div className="check-and-label">
                <input
                  type="checkbox"
                  id="contact"
                  onChange={this.onChangeCheckbox}
                />
                <label for="contact">Add Support details</label>
              </div>
              {isChecked && (
                <>
                  <div className="form-group">
                    <label for="email">Support Email Address</label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Add Email Address"
                      value={email}
                      onChange={this.onChangeEmail}
                    />
                  </div>
                  <div className="form-group">
                    <label for="ph">Support Phone Number</label>
                    <input
                      type="text"
                      id="ph"
                      placeholder="Add Phone Number"
                      value={phoneNumber}
                      onChange={this.onChangePhone}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="right">
              <div className="image-title">
                <img
                  src={isImageSelected ? imageSrc: "https://via.placeholder.com/150"}
                  alt="Selected"
                  style={{ marginTop: "20px", maxWidth: "100%" }}
                />
                <div className="store-and-title">
                  <p>{nameOfStore}</p>
                  <p>{storeTitle}</p>
                </div>
              </div>
              <div className="info">
                <div className="contact-gc">
                  <MdEmail />
                  <p>{email}</p>
                </div>
                <div className="contact-gc">
                  <FaPhoneAlt />
                  <p>{phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <Link to="/add-product">
              <button className="back">Back</button>
            </Link>
            <Link to="/review-page">
              <button className="finish">Review and finish</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default SetUpTheStore;
