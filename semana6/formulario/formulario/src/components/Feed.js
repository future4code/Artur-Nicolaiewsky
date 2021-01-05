import React from 'react';

class Feed extends React.Component {
    render() {
        return(
            <div>
                <li>{this.props.mensagemValue}</li>
            </div>
        )
    }
}

export default Feed