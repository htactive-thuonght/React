import React,{Component} from "react";
import { BrowserRouter as  Route, NavLink } from "react-router-dom";

import "../App.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        { id: 1, name: "Cao Thi Thuy", age: 20, title: "watching TV", image:"https://cdn-images-1.medium.com/max/1200/0*A7tUtrEeIMVTSp49.jpg" },
        { id: 2, name: "Nguyen P.Nhung", age: 20, title: "MakeUp",image:"http://dienhoathanglong.vn/sites/d/dh/dhtl/uploads/ckfinder/images/Products/Hinh_dai_dien/bo-hoa-hong-do-tang-nguoi-yeu.jpg" },
        { id: 3, name: "Nguyen My Trang", age: 23, title: "Traveling",image:"http://cayvahoa.net/wp-content/uploads/2016/08/hoa-hong-do-3.jpg" },
        { id: 4, name: "Nguyen Thu Huong", age: 20, title: "Gossiping",image:"http://happyflower.vn/wp-content/uploads/2019/04/Dau_Ferrero_Baby_Small-1200x1200.jpg"},
        { id: 5, name: "Doan Thi Ly", age: 20, title: "Typing",image:"https://muahoaonline.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/h/o/hong_trang_cat_tuong_trang2.jpg" },
        { id: 6, name: "Hoang Thi Thuong", age: 20, title: "Sleep",image:"https://vn-test-11.slatic.net/p/4feb27273b93640a10621be1ffd96e21.jpg"}
      ],
      aboutList:[
        {name: 'Thuong Hoang', birthday: '20-12-1999', address: '101B Le Huu Trac-Son Tra-Da Nang', des1: 'My hometown is Quang Binh. Quang Binh is a province in the west of VietNam. There is a lot of tourism here. Quang Binh is a great place. I really like it because it is a place where I was born. This is a friendly and beautiful place. There are many mountains here. For tourists, there are a lot of caves sush as Phong Nha, Thien Duong, Son Doong, etc. Here, there are many local specialties, for example: soup, sizziling cake, khoai deo, ect. Beside, the scenery here is very romantic and pretty. My favorite places are the beach and the mountains. I often go to Da Nhay and Nhat Le beach with my family. I am feeling comfortable and funny when I go to there. My hometown is very developed. Now, it has got many company, apartment and attracting many tourists. . It is 200 kilometres from Da Nang city.', des2: 'Every people has also a childhooh though it is sad or happy. For me, sometimes I want to come back to my childhooh to live whith my happy memories. To day, I am going talk about my first day at school. My mother accompanied me to school on the first day. Other parents accompanied their children as well. I and my mother met my friend. Her father accompanied her to school. I felt happy and fun when I met and talked with her. Then we went to school yard and waited in front of the school office. Soon a teacher came and led us to some classrooms. There we were put into 2 separate classes. I cried because my mother did not allowed into the classroom. My teacher managed to coax me to stop crying. Then, I did not cry and played together. Finally the bell rang for us to go home. Then, I came back home with my friends. It had been a wonderful first day at school and I will never forget it.', des3: 'Today, I am going to talk about my sister. Her name is Hanh, she is 28 years old. She is a teacher. She has got long black hair and oval eyes. She has got thin eyebrows and long nose. She has got round mouth and slim. I and she often go to church and go to the cinema. She always help to everyone, so I think, she is very friendly and caring people. In my family, she ususlly do housework, she cleans the floor and cooks for my family so she never complains anythings. So, I think she is very careful and tolerant. She always helps me do homework and also gives me homework. She is a my friend, who always shares and gives me a feeling of comfort and safe. But she is very intolerant person when I talk her boyfriend. She is quite serious when she is working, she do not like other bother and noisy. My parents always compare me and her. Because, I am a naughty girl, but she is very gentle. I really love her.'}
      ]
     }
     
  }
  render() { 
    console.log("list",this.state.list);
    console.log("object",this.state.aboutList);
    return ( 
    
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink 
            to={{
              pathname: "/",
              state: this.state.list
            }}
            className="link"
          >
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to={{pathname: "/about", data: this.state.aboutList}} className="link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/topics" className="link">
                  Topics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="link">
                  Login
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

      </div>
   
     );
  }
}
 
export default Header;

