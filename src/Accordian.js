import React, { Component } from 'react';

export default class Accordian extends Component {
    static defaultProps = {
        sections: []
    }

    state = {
        tabIndex: null
    }

    handleClick(index) {        
        this.setState({
            tabIndex: index
        })
    }
    
    renderButtons = () => {
        return this.props.sections.map((section, index) => 
            <li key={index}>
                <button onClick={() => this.handleClick(index)}>
                    {section.title}
                </button>
                <p>
                    { (this.state.tabIndex === index) && section.content}
                </p>
            </li>)
    }

    render() {        
        return (
            <div>
                <ul>
                    {this.renderButtons()}
                </ul>
            </div>
        )
    }
}





