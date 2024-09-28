// src/components/ProductModal/ProductModal.js

import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Logo from "../../assets/telugu1 Logo Main-01 (1).png";
import { getPriceForSize } from "../../../utility/utils"; // Import your utility function

const ProductModal = ({
  showModal,
  closeModal,
  selectedProduct,
  addCart,
  quantity,
  setQuantity,
  price,
  handleWeightSelection,
  handleMaterialSelection,
  selectedWeight,
  selectedMaterial,
  incrementQuantity,
  decrementQuantity,
}) => {
  useEffect(() => {
    if (selectedProduct) {
      const initialSize = selectedProduct.sizes[0];
      handleWeightSelection(initialSize);
      setQuantity(1);
    }
  }, [selectedProduct, handleWeightSelection, setQuantity]);

  return (
    <Modal show={showModal} onHide={closeModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={Logo} alt="" width="px" height="70px" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedProduct && (
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Col md={4}>
              <img src={selectedProduct.image} alt="" className="img-fluid" />
            </Col>
            <Col md={8}>
              <div>
                <h4 className="py-1">{selectedProduct.name}</h4>
                <p>
                  <span className="fw-bold">Ingredients:</span>{" "}
                  {selectedProduct.ingredients}
                </p>
                <p>
                  <span className="fw-bold">Description:</span>{" "}
                  {selectedProduct.description}
                </p>
                <p>
                  <span className="fw-bold">Shelf Life:</span>{" "}
                  {selectedProduct.shelfLife}
                </p>
                <div className="d-flex flex-wrap align-items-center">
                  {/* Sizes */}
                  {selectedProduct.sizes.map((size, index) => (
                    <div key={index} className="m-1">
                      <Button
                        variant={
                          selectedWeight === size
                            ? "primary"
                            : "outline-secondary"
                        }
                        onClick={() => handleWeightSelection(size)}
                        className="m-1 d-flex align-items-center justify-content-center"
                        style={{
                          height: "30px",
                          borderColor:
                            selectedWeight === size ? "black" : "#4e1100",
                          backgroundColor:
                            selectedWeight === size
                              ? "#4e1100"
                              : "transparent",
                          color:
                            selectedWeight === size ? "white" : "inherit",
                          minWidth: "70px",
                        }}
                      >
                        {size}
                      </Button>
                    </div>
                  ))}
                </div>
                {/* Material */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <p className="fw-bold" style={{ marginBottom: 0 }}>
                    Material:
                  </p>
                  <Button
                    variant={
                      selectedMaterial === "garlic"
                        ? "primary"
                        : "outline-primary"
                    }
                    onClick={() => handleMaterialSelection("garlic")}
                    className="m-1 d-flex align-items-center justify-content-center"
                    style={{
                      height: "30px",
                      borderColor:
                        selectedMaterial === "garlic" ? "black" : "#4e1100",
                      backgroundColor:
                        selectedMaterial === "garlic"
                          ? "#4e1100"
                          : "transparent",
                      color:
                        selectedMaterial === "garlic" ? "white" : "inherit",
                    }}
                  >
                    Garlic
                  </Button>
                  <Button
                    variant={
                      selectedMaterial === "without garlic"
                        ? "primary"
                        : "outline-primary"
                    }
                    onClick={() => handleMaterialSelection("without garlic")}
                    className="m-1 d-flex align-items-center justify-content-center"
                    style={{
                      height: "30px",
                      borderColor:
                        selectedMaterial === "without garlic"
                          ? "black"
                          : "#4e1100",
                      backgroundColor:
                        selectedMaterial === "without garlic"
                          ? "#4e1100"
                          : "transparent",
                      color:
                        selectedMaterial === "without garlic"
                          ? "white"
                          : "inherit",
                    }}
                  >
                    Without Garlic
                  </Button>
                </div>
                <div>
                  <div className="d-flex align-items-center mt-2">
                    <Button
                      variant="outline-secondary"
                      style={{ height: "25px" }}
                      className="d-flex align-items-center justify-content-center fw-bold"
                      onClick={() => decrementQuantity(selectedProduct.id)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{quantity}</span>
                    <Button
                      variant="outline-secondary"
                      style={{ height: "25px" }}
                      className="d-flex align-items-center justify-content-center fw-bold"
                      onClick={() => incrementQuantity(selectedProduct.id)}
                    >
                      +
                    </Button>
                  </div>
                  <p className="fw-bold fs-5 mt-3">₹ {quantity * price}</p>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Col md={12} className="my-3 d-flex justify-content-end">
          <Button className="custom-button mx-2" onClick={addCart}>
            Add to Cart
          </Button>
        </Col>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
