import React, { Component } from "react";
import Button from 'react-bootstrap/Button'; 



class BulbTask extends Component {
    state = {
        Data: [],  
        loading: false, 
    }

   
    clickHandler = () => {
        const newData = { 
            src: "src/bulbtask/pic_bulboff.gif", 
            name: `Bulb ${this.state.Data.length + 1}`,
            isOn: false 
        };
        const updatedData = [...this.state.Data, newData];

        this.setState({
            Data: updatedData,
        });
    }

  
    removeHandler = (index) => {
        const filteredData = this.state.Data.filter((_, id) => id !== index);
        this.setState({
            Data: filteredData,
        });
    }

    
    toggleBulb = (index) => {
        const updatedData = this.state.Data.map((item, idx) => {
            if (idx === index) {
                return {
                    ...item,
                    src: item.isOn ? "src/bulbtask/pic_bulboff.gif" : "src/bulbtask/pic_bulbon.png", // Toggle the image
                    isOn: !item.isOn 
                };
            }
            return item;
        });

        this.setState({ Data: updatedData });
    }

    
    countGlowingBulbs = () => {
        return this.state.Data.filter(item => item.isOn).length;
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.clickHandler}>Add Bulb</Button> 
                <div className="container mt-5">
                    <div className="row">
                       
                            <>
                                <h3>Glowing Bulbs: {this.countGlowingBulbs()}</h3> 
                                {this.state.Data.map((each, index) => (
                                    <div className="col-sm-4" key={index}>
                                        <div className="bulb-card">
                                            <h5>{each.name}</h5>
                                           
                                            <img
                                                src={each.src}
                                                alt={`Bulb ${index + 1}`} 
                                                onClick={() => this.toggleBulb(index)}  
                                                style={{ cursor: 'pointer', width: '200px' }}  
                                            />
                                            <br />
                                            <Button
                                          
                                                onClick={() => this.removeHandler(index)}
                                            >
                                                Remove Bulb
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </>
                  
                    </div>
                </div>
            </>
        );
    }
}

export default BulbTask;