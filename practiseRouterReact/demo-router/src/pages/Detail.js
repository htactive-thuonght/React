import React,{Component} from 'react';

class Detail  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    console.log(this.props)
  }

  render() { 
    const flower = this.props.match
    const flower_id = flower.match.params.id
    const flowers =this.props.listDetail
    const listFlower = flowers.find(item => item.id === parseInt(flower_id))
    return ( 
      <div>
        <div className="row row-home">
            <div className="card col-md-4 card-detail">
              <img className="card-img-top" src={listFlower.image} alt=''/>
              <div className="card-body">
                <p className="card-text">
                  Name:{listFlower.name} || Age: {listFlower.age}
                </p>
                <p className="card-text">Hobby: {listFlower.title}</p>
              </div>
            </div>
            <div className=" col-md-7 detail">
            <p>{listFlower.des}</p>
            </div>
          
         
        </div>
      </div>
     );
  }
}
 
export default Detail;