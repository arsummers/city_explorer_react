import React from 'react'; 

class Maps extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mapHolder: 'Map will live here. This is a section'
        }
    }

    render(){
        return(
            <div>
                {this.state.mapHolder}
            </div>
        )
    }
}

export default Maps;