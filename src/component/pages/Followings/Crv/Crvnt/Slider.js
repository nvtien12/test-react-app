import React, { Component } from "react";
import ThreeSixty from "react-360-view";




export default class Images extends Component {
  state = {
    imgSrc: "../assets/crv-black/",
    id: 1,
    flag: 0,
    logID: ""
  };

 carList = [
    {
      id: 1,
      img: "../assets/crv/color-black.jpg",
      srcImg: "/crv-black/"
    },
    {
      id: 2,
      img: "../assets/crv/trang.jpg",

      srcImg: "/crv-white/"
    },
    {
      id: 3,
      img: "../assets/crv/ghi.jpg",
      srcImg: "/crv-silver/"
    },
    {
      id: 4,
      img: "../assets/crv/titan.jpg",
      srcImg: "/crv-titan/"
    },
    {
      id: 5,
      img: "../assets/crv/red.jpg",
      srcImg: "/crv-red/"
    },
    {
      id: 6,
      img: "../assets/crv/blue.jpg",
      srcImg: "/crv-blue/"
    },
    {
      id: 7,
      img: "../assets/crv/black.png",
      srcImg: "/crv-especially/"
    },
   
  ];
  handleChangeColor = (cid) => {
    const { id, flag, logID } = this.state;
    this.setState({
      id: cid
    });
    document.getElementById("carDefault").style.display = "none";
    if (flag === 0) {
      this.setState({
        flag: 1,
        logID: cid
      });
    } else {
      document.getElementById(`c${logID}`).style.display = "none";
      this.setState({
        logID: cid
      });
    }
    document.getElementById(`c${cid}`).style.display = "block";
  };
  renderCar360 = () => {
    return this.carList.map((car) => {
      return (
        <div
          className="carContent pt-20"
          id={`c${car.id}`}
          style={{ display: "none" }}
        >
          <ThreeSixty
            amount={8}
            imagePath={`../assets/${car.srcImg}`}
            fileName="car-{index}.png"  
          />
        </div>
      );
    });
  };
  render() {
    const { id } = this.state;

    return (
      <div className="container-fluid pt-20">
        <div className="row">
          <div className="col-7">
            <div className="car">
              {this.renderCar360()}
              <div id="carDefault">
                <ThreeSixty
                  amount={6}
                  imagePath={`../assets/crv-blue`}
                  fileName="car-{index}.png"
                />
              </div>
            </div>
          </div>
          <div className="col-4 pt-20">
            <div className="card">
              <div className="card-header text-primary">MÀU XE</div>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(2)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/crv/trang.jpg" boderRadius="50%" width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      TRẮNG NGÀ TINH TẾ
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(1)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/crv/color-black.jpg" boderRadius="50%"  width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      ĐEN ÁNH ĐỘC TÔN
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(3)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/crv/ghi.jpg" boderRadius="50%"  width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      GHI BẠC THỜI TRANG
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(4)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/crv/titan.jpg" boderRadius="50%" width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                     TITAN MẠNH MẼ
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(5)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/crv/red.jpg" boderRadius="50%"  width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                     ĐỎ CÁ TÍNH
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(6)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/crv/xanh.jpg" boderRadius="50%"  width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      XANH ĐẬM CÁ TÍNH
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(7)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/crv/black.png" boderRadius="50%"  width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                    ĐEN ÁNH ĐỘC TÔN- PHIÊN BẢN ĐẶC BIỆT
                    </div>
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
