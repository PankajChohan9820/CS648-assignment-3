const form = props => {
  return /*#__PURE__*/React.createElement("form", {
    name: "productAdd",
    onSubmit: this.handleSubmit,
    className: "custom-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-element"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "category"
  }, "Category"), /*#__PURE__*/React.createElement("select", {
    name: "category"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Shirts"
  }, "Shirts"), /*#__PURE__*/React.createElement("option", {
    value: "Jeans"
  }, "Jeans"), /*#__PURE__*/React.createElement("option", {
    value: "Jackets"
  }, "Jackets"), /*#__PURE__*/React.createElement("option", {
    value: "Sweaters"
  }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
    value: "Accessories"
  }, "Accessories"))), /*#__PURE__*/React.createElement("div", {
    className: "form-element"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "price"
  }, "Price Per Unit"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "price",
    value: this.state.price,
    onChange: this.handlePriceChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-element"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Product Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-element"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "imageUrl"
  }, "Image URL"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "imageUrl"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "button button-dark"
  }, "Add Product"));
};