import React, {useEffect} from 'react'
class PROJECT extends React.Component{
    state={
        avocado:0
    }
    render() {
    return(
        <div>
            <h1>{this.state.avocado}</h1>
            {this.state.avocado%6===0 &&}
        </div>
    )
    }
}