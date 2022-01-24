import React, {Component}from 'react';

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks:this.props.age,
            show:true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }


    render() {

        return <div>
            <h1>
                {this.props.firstName} {this.props.lastName}
            </h1>
            <div>
                {this.state.clicks}
            </div>
            <div>
                {this.props.hairColor}
            </div>
            <button onClick={this.IncrementItem}>Birthday</button>
            </div>;
    }
};

export default PersonCard;
