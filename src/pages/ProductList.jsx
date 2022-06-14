import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProductList extends Component {
  render() {
    return (
      <>
        <div className="header">
          <header>
            <h1>Product List</h1>
          </header>

          <Link className="add-product-btn" to="/add-product">
            <button>ADD</button>
          </Link>

          <button className="delete-product-btn">MASS DELETE</button>
        </div>
        <hr />
        <div className="product-list">
          <div className="product-list__card">
            <input type="checkbox" name="" className="delete-checkbox" />
            <h2>sku</h2>
            <h2>name</h2>
            <h2>prise</h2>
            <h2>Attributes:</h2>
          </div>
          <div className="product-list__card">
            <input type="checkbox" name="" className="delete-checkbox" />
            <h2>sku</h2>
            <h2>name</h2>
            <h2>prise</h2>
            <h2>Attributes:</h2>
          </div>
          <div className="product-list__card">
            <input type="checkbox" name="" className="delete-checkbox" />
            <h2>sku</h2>
            <h2>name</h2>
            <h2>prise</h2>
            <h2>Attributes:</h2>
          </div>
          <div className="product-list__card">
            <input type="checkbox" name="" className="delete-checkbox" />
            <h2>sku</h2>
            <h2>name</h2>
            <h2>prise</h2>
            <h2>Attributes:</h2>
          </div>
          <div className="product-list__card">
            <input type="checkbox" name="" className="delete-checkbox" />
            <h2>sku</h2>
            <h2>name</h2>
            <h2>prise</h2>
            <h2>Attributes:</h2>
          </div>
          <div className="product-list__card">
            <input type="checkbox" name="" className="delete-checkbox" />
            <h2>sku</h2>
            <h2>name</h2>
            <h2>prise</h2>
            <h2>Attributes:</h2>
          </div>

          <div className="product-list__card">
            <input type="checkbox" name="" className="delete-checkbox" />
            <h2>sku</h2>
            <h2>name</h2>
            <h2>prise</h2>
            <h2>Attributes:</h2>
          </div>
          <div className="product-list__card">
            <input type="checkbox" name="" className="delete-checkbox" />
            <h2>sku</h2>
            <h2>name</h2>
            <h2>prise</h2>
            <h2>Attributes:</h2>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
