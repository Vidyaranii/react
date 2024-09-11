import { Component } from "react";
import axios from "axios";

class FakeProducts extends Component {
  state = {
    products: [],
    selectedProduct: null, 
  };

  componentDidMount() {
    this.display();
  }

  display = async () => {
    const { status, data } = await axios.get("https://fakestoreapi.com/products");
    if (status === 200) {
      this.setState({
        products: data,
      });
    }
  };

  clickHandeler = (product) => {
 
    this.setState({
      selectedProduct: product,
    });
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <div style={{ display: "flex" }}>
   
        <div style={{ flex: 1 }}>
          {this.state.products.map((each) => {
            return (
              <div
                style={{ textAlign: "left", width: 500, cursor: "pointer" }}
                key={each.id}
                onClick={() => this.clickHandeler(each)} 
              >
                <h3>{each.id}</h3>
                <img
                  src={each.image}
                  width={100}
                  height={100}
                  alt={each.title}
                />
                <h3>{each.title}</h3>
                <p>{each.description}</p>
                <p>{each.price}</p>
              </div>
            );
          })}
        </div>

        {selectedProduct && (
          <div style={{ flex: 1, padding: "0 20px" }}>
           
            <img
              src={selectedProduct.image}
              width={200}
              height={200}
             
            />
           
          </div>
        )}
      </div>
    );
  }
}

export default FakeProducts;