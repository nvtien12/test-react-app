import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbarsp';
import './crv.css';
import Crvnt from './Crvnt/Crvnt';
import Crvnoi from './Crvnoi/Crvnoi';


export default function Crv() {
  return (
    <div>
        <Navbar/>
        <img className="img" src="../assets/crv/crv-banner.jpg" alt="banner" />

            <Carousel id="thongdiep">
                <Carousel.Item>
            <div className="card text-bg-dark">
            <img src="../assets/crv/wake-up-senses.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay">
              <div className='text'>
                <h3 className="card-title">THÔNG ĐIỆP</h3>
                <h4 className='text-card'>KHAI PHÁ
                    <br />
                    GIÁC QUAN THỨ SÁU
                </h4>
              
                <p className="card-text">Khi giới hạn không thể ngăn lối thành công,
                    cùng Honda CR-V <br />đánh thức
                    và cảm nhận mọi giác quan trong bạn <br />
                    để chạm đến đỉnh vinh quang.</p>
                    </div>    
            </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="card text-bg-dark">
            <img src="../assets/crv/wake-up-senses-two.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay" >
                <div className='text-img'>
                <h3 className="card-title">THÔNG ĐIỆP</h3>
                <p className="card-text">Cuốn hút và mạnh mẽ trong từng chuyển động với động cơ 1.5L VTEC TURBO, tiện nghi và cao cấp với <br />  thiết kế 7 chỗ, kết hợp cùng với Hệ thống công nghệ hỗ trợ lái xe an toàn tiên tiến Honda SENSING,<br />  Honda CR-V khai phóng mọi giác quan của bạn, để bạn tự tin tận hưởng trên mọi hành trình.</p>
                </div> 
            </div>
            </div>
            </Carousel.Item>
            </Carousel>
        <Crvnt/>
        <Crvnoi/>
    </div>
  );
}