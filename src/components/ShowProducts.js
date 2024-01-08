import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-card-info">
      {products.map((product, index) => (
        <Card
          className="m-2 rounded shadow-lg "
          style={{ width: "18rem" }}
          key={index}
        >
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Button variant="primary">Show Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ShowProducts;
