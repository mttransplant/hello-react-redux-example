import React, {Component} from 'react'
import Hello from "../components/HelloComponent";
import {connect} from "react-redux"
import {helloWorld, reset} from "../actions";

// class HelloWorld extends Component {
//     render() {
//         return <Hello message="Hello!!!"/>
//     }
// }
// export default HelloWorld

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.helloWorld.message
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onClick: () => dispatch(helloWorld()),
        reset: () => dispatch(reset())
    }
}

const HelloWorld = connect(
    mapStateToProps,mapDispatchToProps
)(Hello)
export default HelloWorld