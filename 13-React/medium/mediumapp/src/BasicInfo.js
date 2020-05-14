import React from 'react';

class BasicInfo extends React.Component {

    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <h4>{this.props.number}</h4>
                <h4>{this.props.birth}</h4>
            </div>
        )
    }
}

export default BasicInfo;