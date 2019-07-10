import React,{Component} from 'react';

class Detail  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <div className="row row-home">
            <div className="card col-md-4 card-home">
              <img className="card-img-top" src=''/>
              <div className="card-body">
                <p className="card-text">
                  Name: || Age:
                </p>
                <p className="card-text">Hobby:</p>
              </div>
            </div>
          }
         
        </div>
      </div>
     );
  }
}
 
export default Detail;