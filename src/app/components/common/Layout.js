import React from 'react'



import FlexView from 'react-flexview';


export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMenu: 0
        };

    }

    render() {
        return (
            <FlexView column style={{height: "100%"}}>
                <FlexView>
                    Menu
                </FlexView>
                <FlexView grow >
                    {this.props.children}
                </FlexView>
            </FlexView>
        );
    }
}