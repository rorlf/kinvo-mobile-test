import React, { Component } from "react";
import ProductApi from "../../services/ProductApi";
import Presentational from "./presentational";
import { formatMoney, formatProfitability } from "../../shared/utils/formatter";
// import ProductType from "../../shared/enums/productType";
import ProductType from "../../common/enums/ProductType";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],  
      isFetching: false,
      filteredProducts: [],
      searchText: "",
      error: false
    };
  }

  async componentDidMount() {
    await this.getProducts();
  }

  getProducts = async () => {
    this.setState(prevState => ({
      ...prevState,
      isFetching: true
    }));
    try {
      const httpResponse = await ProductApi.getProducts();
      const apiResponse = httpResponse.data;
      const rawProducts = apiResponse.data;

      const products = this.formatProducts(rawProducts);

      await this.setState({
        //  mudar para products
        products: products,
        filteredProducts: products,
        isFetching: false,
        searchText: ""
      });
    } catch (error) {
      this.handleError();
    }
  };

  handleError = () => {
    this.setState(prevState => ({
      ...prevState,
      error: true
    }));
  };

  formatProducts = products => {
    let formattedProducts = [];

    products.map(product => {
      const formattedProduct = this.formatProduct(product);
      formattedProducts.push(formattedProduct);
    });

    return formattedProducts;
  };

  formatProduct = product => ({
    key: product.portfolioProductId.toString(),
    productTypeId: product.productTypeId,
    productName: product.productName,
    financialInstitutionName: product.financialInstitutionName,
    equity: formatMoney(product.equity),
    profitability: formatProfitability(product.profitability),
    colorOfProduct: ProductType.get(product.productTypeId).color
  })
  

  onRefreshProductsList = () => {
    this.clearSearchText();
    this.getProducts();
  };

  clearSearchText = () => {
    this.setState(prevState => ({
      ...prevState,
      searchText: ""
    }));
  };

    filterProducts = function(searchText) {
    const { products } = this.state;

    matchesSearch = product => {
      const productName = product.productName.toUpperCase();

      const searchedText = searchText.toUpperCase();

      const productMatch = productName.indexOf(searchedText) > -1;
      return productMatch;
    };

    const filteredProducts = products.filter(matchesSearch);

    this.setState(prevState => ({
      ...prevState,
      filteredProducts,
      searchText
    }));
  };

  render() {
    const { filterProducts, onRefreshProductsList } = this;

    return React.createElement(Presentational, {
      ...this.state,
      filterProducts,
      onRefreshProductsList
    });
  }
}
