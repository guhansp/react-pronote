import React, { Component } from 'react';
import './Editor.css'

class Editor extends Component {
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.resetState= this.resetState.bind(this);
        this.state =
        {
            value:''

        };
        this.baseState=this.state;

    }
    handleChange(e){
        this.setState({value: e.target.value});
    }

    resetState()
    {
        this.setState(this.baseState);
    }
    
    
    
    
    render() {
        return (
            
            <div className="container">
                
                <div className="input">
                    <h3>Input</h3> 
                    
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                    <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/50-512.png" alt="RESET BUTTON" id="reset-btn" onClick={this.resetState}/>

                </div>

                
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">
                        {this.state.value}


                    </div>
                </div>                
            </div>
        );
    }
}

export default Editor;