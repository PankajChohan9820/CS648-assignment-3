class ProductList extends React.Component {
  constructor() {
    super(); // this.state = { products: [] };

    this.state = {
      products: []
    };
    this.addProduct = this.addProduct.bind(this);
  }

  async load() {
    const query = `
        query {
            productList {
                product_id
                product_name
                product_category
                product_price
                product_image
            }
        }`;
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(res => res.json()).then(result => this.setState({
      products: result.data.productList
    })).catch(error => console.error(error));
  }

  componentDidMount() {
    this.load();
  }

  addProduct(product) {
    product.id = new Date().getTime();
    const newProducts = this.state.products.slice();
    newProducts.push(product);
    this.setState({
      products: newProducts
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      title: "Inner Div"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "headerClass"
    }, " My Company Inventory "), /*#__PURE__*/React.createElement("h2", {
      className: "headerClass"
    }, " Showing all available products "), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductTable, {
      products: this.state.products
    }), /*#__PURE__*/React.createElement("h2", null, "Add a new product to the inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductAdd, {
      addProduct: this.addProduct
    }));
  }

}

function ProductTable(props) {
  const productRows = props.products.map(product => /*#__PURE__*/React.createElement(ProductRow, {
    key: product.id,
    product: product
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image")), /*#__PURE__*/React.createElement("tbody", null, productRows)));
}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAddForm;
    const price = form.productPrice.value;
    const product = {
      product_name: form.productName.value,
      product_price: price.substring(1, price.length),
      product_category: form.productCategory.value,
      product_image: form.productImage.value
    };
    const query = JSON.stringify({
      query: `mutation {
                addProduct(
                    product_name: "${product.name}"
                    product_category: ${product.product_category}
                    product_price: ${product.product_price}
                    product_image: ${product.product_image})
                }
            `
    });
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(res => res.json()).then(result => this.props.addProduct(product)).catch(error => console.error(error));
    form.productName.value = "";
    form.productPrice.value = "$";
    form.productImage.value = "";
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      name: "productAddForm",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "column"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "addFormTitle"
    }, "Product Category"), /*#__PURE__*/React.createElement("select", {
      name: "productCategory"
    }, /*#__PURE__*/React.createElement("option", null, "Shirts"), /*#__PURE__*/React.createElement("option", null, "Jeans"), /*#__PURE__*/React.createElement("option", null, "Jackets"), /*#__PURE__*/React.createElement("option", null, "Sweaters"), /*#__PURE__*/React.createElement("option", null, "Accessories")), /*#__PURE__*/React.createElement("h4", {
      className: "addFormTitle"
    }, "Product Name"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "productName",
      placeholder: "Product Name"
    })), /*#__PURE__*/React.createElement("div", {
      className: "column"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "addFormTitle"
    }, "Product Price"), /*#__PURE__*/React.createElement("input", {
      defaultValue: "$",
      type: "text",
      name: "productPrice"
    }), /*#__PURE__*/React.createElement("h4", {
      className: "addFormTitle"
    }, "Image URL"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "productImage",
      placeholder: "Product Image"
    }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", null, "Add Product")));
  }

}

function ProductRow(props) {
  const product = props.product;
  console.log(product);
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, product.product_name), /*#__PURE__*/React.createElement("td", null, "$", product.product_price), /*#__PURE__*/React.createElement("td", null, product.product_category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: product.product_image,
    target: "_blank"
  }, "View")));
}

;
const element = /*#__PURE__*/React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('root'));