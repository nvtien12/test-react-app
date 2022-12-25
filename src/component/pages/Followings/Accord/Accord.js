import React from 'react';
import Navbars from './Navbarsp';
import Accordnt from './Accordnt/Accordnt';
import Accordnoi from './Accordnoi/Accordnoi';
import Engine from './Accordvanhanh/Engine';
import Safe from './Accordsafe/Safe';
import Pk from './AccordPK/Pk';
import Specifications from './Specifications/Specifications';
import Footers from '../../Footers';




import Carousel from 'react-bootstrap/Carousel';
import './accord.css';

export default function Accord() {
    return (
        <div className="card" >
            <Navbars />
            <img className="img" src="../assets/banner.jpg" alt="banner" />

            <Carousel id="thongdiep">
                <Carousel.Item className="img-backgound" >
                    
                        <h5>Thông điệp</h5>
                        <h3>
                            GIÁC QUAN KHAI PHÁ
                            <br />
                            KHÍ CHẤT DẪN ĐẦU
                        </h3>
                       
                        <p>
                        Trên hành trình khai phá và kiến tạo đỉnh cao, những người Tiên Phong cần một giác
                                        quan nhạy bén bên mình.
                                        <br/>
                                        Hãy để Honda Accord đồng hành bên bạn trên hành trình
                                        chinh phục thách thức.
                        </p>
                    <img src="/assets/car-back.png" alt="First slide" />
                </Carousel.Item>
                    
                <Carousel.Item className="img-backgound">
                        <h5>Thông điệp</h5>
                        <h3>
                            GIÁC QUAN KHAI PHÁ
                            <br />
                            KHÍ CHẤT DẪN ĐẦU
                        </h3>
                       
                        <p>
                        Với Honda SENSING cùng những đường nét thiết kế năng động và động cơ VTEC Turbo,
                                        Honda Accord là hiện thân 
                                        <br/>
                                        của những người tiên phong tràn đầy khí chất,
                                        luôn dẫn đầu xu hướng và kiến tạo tương lai
                           
                        </p>
                    
                    <img  src="/assets/car-front.png" alt="Second slide" />
                </Carousel.Item>
            </Carousel>
            <Accordnt/>
            <Accordnoi/>
            <Engine/>
            <Safe/>
            <Pk/>
           <Specifications/>
           <Footers/>
        </div>
    );
}
