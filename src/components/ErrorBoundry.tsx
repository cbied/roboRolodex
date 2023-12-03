import { Component } from 'react';

type Props = {
    children: JSX.Element
}

type MyState = {
        hasError: boolean
}

class ErrorBoundry extends Component<Props, MyState> {
    
    constructor(props:Props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() { 
        console.log('has error')
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops... Looks like there is an error</h1>
         } else {
            return this.props.children
         }
    }
}

export default ErrorBoundry;