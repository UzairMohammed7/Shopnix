import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class AddProduct extends Component {
  state = {
    titleName: "",
    descriptioin: "",
    listPrice: "",
    discountPercentage: "",
    gst: "",
    shippingCharges: "",
    stockLevel: "",
    netPrice: "",
    displayPricingDetials: false,
    includeGST: false,
    imageSrc: null,
    isImageSelected: false,
    errorMsg: "",
  };

  onChangeTitleName = (event) => {
    this.setState({ titleName: event.target.value });
  };
  onChangeDescription = (event) => {
    this.setState({ descriptioin: event.target.value });
  };
  onChangeListPrice = (event) => {
    this.setState({ listPrice: event.target.value });
  };
  onChangeDiscountPercentage = (event) => {
    this.setState({ discountPercentage: event.target.value });
  };
  onChangeGST = (event) => {
    this.setState({ gst: event.target.value });
  };
  onChangeShippingCharges = (event) => {
    const {shippingCharges} = this.state
    if (shippingCharges === "") {
      this.setState({ errorMsg: "Please Enter a Valid Value" });
    } else {
      this.setState({ shippingCharges: event.target.value });
    }
  };

  onChangeStockLevel = (event) => {
    this.setState({ stockLevel: event.target.value });
  };

  onDisplayPricingDetails = () => {
    const { displayPricingDetials } = this.state;
    this.setState({ displayPricingDetials: !displayPricingDetials });
  };

  onChangeIncludeGST = () => {
    const { includeGST } = this.state;
    this.setState({ includeGST: !includeGST });
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
    const {
      titleName,
      descriptioin,
      listPrice,
      discountPercentage,
      gst,
      shippingCharges,
      stockLevel,
      displayPricingDetials,
      includeGST,
      imageSrc,
      isImageSelected,
      errorMsg,
    } = this.state;

    const discountAmount = (listPrice * discountPercentage) / 100;

    // Calculate final amount after applying discount
    let finalAmount = listPrice - discountAmount;
    const gstAmount = finalAmount + Number(gst) / 100;

    let shippingAmount = finalAmount + Number(shippingCharges);

    if (shippingCharges >= 0) {
      finalAmount = shippingAmount;
    }

    return (
      <>
        <div className="add-prod-container">
          <h1 className="main-heading">Lets Customise your Shopnix Store</h1>
          <h2 className="sub-heading">Add your First Product</h2>

          <div className="sub-container">
            <div className="left-container">
              <h1 className="header">Basic Details</h1>

              <div className="title-lableName">
                <label for="product-name" className="label-name">
                  Product Name
                </label>
                <input
                  type="text"
                  id="product-name"
                  placeholder="e.g.., Antony Book"
                  className="input-container"
                  onChange={this.onChangeTitleName}
                  value={titleName}
                />
              </div>

              <h3 className="prod-desc">Product Description</h3>
              <div className="text-editor">
                <div className="toolbar">
                  <button>
                    <b>B</b>
                  </button>
                  <button>
                    <i>I</i>
                  </button>
                  <button>
                    <u>U</u>
                  </button>
                  <button>
                    <s>S</s>
                  </button>
                  <button>&bull;</button>
                  <button>&#35;</button>
                  <select>
                    <option>System Font</option>
                  </select>
                  <input
                    type="number"
                    size="12"
                    min="8"
                    max="36"
                    className="font-input"
                  />
                  <select>
                    <option>Paragraph</option>
                  </select>
                  <button>...</button>
                </div>
                <textarea
                  className="editor"
                  row="4"
                  cols="20"
                  onChange={this.onChangeDescription}
                  value={descriptioin}
                ></textarea>
              </div>

              <label for="product-image">Add Image(s)</label>
              <p>
                Upload a product image here. Supported formats jpeg, png, webp.
                You can upload upto 6 images.
              </p>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={this.handleImageChange}
                />
              </div>

              <label for="sku-code">SKU code</label>
              <input
                type="text"
                id="sku-code"
                placeholder="e.g., PROD00001"
                disabled
              />

              <div className="check-label">
                <input
                  type="checkbox"
                  id="sac"
                  onChange={this.onDisplayPricingDetails}
                />
                <label for="sac">This Product has HSA/SAC Code</label>
              </div>

              <hr />
              {displayPricingDetials && (
                <>
                  <h1 className="header">Pricing Details</h1>
                  <div className="check-label">
                    <input
                      type="checkbox"
                      id="gst"
                      onChange={this.onChangeIncludeGST}
                    />
                    <label for="gst">Price Inclusive GST</label>
                  </div>

                  <div className="container-pricing">
                    <form>
                      <div className="pricing-form-group">
                        <label for="list-price">List Price</label>
                        <input
                          type="text"
                          id="list-price"
                          placeholder="e.g. 100"
                          onChange={this.onChangeListPrice}
                          value={listPrice}
                        />
                      </div>
                      <div className="pricing-form-group">
                        <label for="discount-percentage">
                          Discount Percentage
                        </label>
                        <input
                          type="text"
                          id="discount-percentage"
                          placeholder="e.g. 40"
                          onChange={this.onChangeDiscountPercentage}
                          value={discountPercentage}
                        />
                      </div>
                      <div className="pricing-form-group">
                        <label for="gst-rate">GST Rate</label>
                        <input
                          type="text"
                          id="gst-rate"
                          placeholder="e.g. 20"
                          onChange={this.onChangeGST}
                          value={gst}
                        />
                      </div>
                      <div className="pricing-form-group">
                        <label for="shipping-charges">
                          Shipping Charges (if any)
                        </label>
                        <input
                          type="text"
                          id="shipping-charges"
                          placeholder="e.g. 40"
                          onChange={this.onChangeShippingCharges}
                          value={shippingCharges}
                        />
                        <p>{errorMsg}</p>
                      </div>
                      <div className="pricing-form-group">
                        <label for="net-price">Net Price</label>
                        <input
                          type="text"
                          id="net-price"
                          placeholder="100"
                          value={finalAmount}
                        />
                      </div>
                      <div className="pricing-form-group">
                        <label for="stock-level">Stock Level</label>
                        <input
                          type="text"
                          id="stock-level"
                          placeholder="1"
                          value={stockLevel}
                          onChange={this.onChangeStockLevel}
                        />
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>

            <div className="preview-section">
              <img
                src={
                  isImageSelected ? imageSrc : "https://via.placeholder.com/150"
                }
                alt="Product-Image"
                id="preview-image"
                style={{ marginTop: "20px", maxWidth: "100%" }}
              />
              <div className="product-details">
                <h3>{titleName}</h3>
                <p>{descriptioin}</p>
                <div className="amount">
                  {includeGST && (
                    <p className="include-gst">Rs. {finalAmount + gstAmount}</p>
                  )}
                  <p>Rs. {finalAmount}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <Link to="/add-category">
              <button className="back">Back</button>
            </Link>
            <Link to="/set-store">
              <button className="next">Next</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default AddProduct;
