
import React from 'react';
import './specifications.scss';


export default function Specifications() {
    return (
        <div>
                <div style={{textAlign:"center"}}>
                    
                <h2>THÔNG SỐ KỸ THUẬT</h2>
                </div>
            <div className='table-wrapper-scroll-y my-custom-scrollbar'>
                <table className='table table-bordered table-striped mb-0'>
                   

                    <tbody>
                        <tr >
                           
                            <th scope="col-4 ">DANH MỤC</th>
                            <th scope="col-4">HONDA ACCORD</th>
                        </tr>
                        <tr >
                            <div className='specification'>
                                
                            <h6><b>ĐỘNG CƠ/HỘP SỐ</b></h6>
                            </div>

                            </tr>
                       
                        <tr>
                            
                            <td>Kiểu động cơ</td>
                            <td>1.5L DOHC VTEC TURBO, 4 xi lanh thẳng hàng, 16 van</td>
                        </tr>
                        <tr>
                            
                            <td>Dung tích xi lanh (cm3)</td>
                            <td>1.498</td>
                        </tr>
                        <tr>
                           
                            <td>Công suất cực đại (Hp/rpm)</td>
                            <td>188(140KW)/5.500</td>
                        </tr>
                        <tr>
                            
                            <td>Mô men xoắn cực đại (Nm/rpm)</td>
                            <td>260/1.600-5.000</td>
                        </tr>
                        <tr>
                           
                            <td>Dung tích thùng nhiên liệu (lít)</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            
                            <td>Dung tích khoang hành lý (lít)</td>
                            <td>573</td>
                           
                        </tr>
                        <tr>
                            
                            <td>Hệ thống nhiên liệu</td>
                            <td>Phun xăng trực tiếp/PGM-FI</td>
                        </tr>
                      
                            <div className='consumption'>
                                
                            <h6><b>Mức tiêu thụ nhiên liệu</b></h6>
                            <p>Được thử nghiệm bởi Trung tâm Thử nghiệm khí thải phương tiện cơ giới đường bộ (NETC), Cục Đăng kiểm Việt Nam theo tiêu chuẩn Phụ lục QTCVN 6785:2015.
                            <br/>
                            Được kiểm tra và cấp giấy chứng nhận bởi Phòng Chứng nhận Chất lượng xe cơ giới (VAQ), Cục Đăng kiểm Việt Nam.
                            <br/>
                            Mức độ tiêu thụ nhiên liệu thực tế có thể thay đổi do điều kiện sử dụng, kỹ năng lái xe và tình trạng bảo dưỡng kỹ thuật của xe.</p>
                            </div>
                       
                        <tr>
                           
                            <td>Mức tiêu thụ nhiên liệu chu trình tổ hợp (lít/100km)</td>
                            <td>6,4</td>
                        </tr>
                        <tr>
                            
                            <td>Mức tiêu thụ nhiên liệu chu trình đô thị cơ bản (lít/100km)</td>
                            <td>8,44</td>
                        </tr>
                        <tr>
                           
                            <td>Mức tiêu thụ nhiên liệu chu trình đô thị phụ (lít/100km)</td>
                            <td>5,3</td>
                        </tr>
                        <tr>
                        <div className='specification'>
                           <h6><b>KÍCH THƯỚC/TRỌNG LƯỢNG</b></h6>
                        </div>
                            
                        </tr>
                        <tr>
                           
                            <td>Số chỗ ngồi</td>
                            <td>5,3</td>
                        </tr>
                        <tr>
                           
                            <td>Dài x Rộng x Cao (mm)</td>
                            <td>4.901 x 1.862 x 1.450</td>
                        </tr>
                        <tr>
                           
                            <td>Chiều dài cơ sở (mm)</td>
                            <td>2.830</td>
                        </tr>
                        <tr>
                           
                            <td>Chiều rộng cơ sở (trước/sau) (mm)</td>
                            <td>1.591/1.603</td>
                        </tr>
                        <tr>
                           
                           <td>Cỡ lốp</td>
                           <td>18 inch</td>
                       </tr>
                       <tr>
                          
                           <td>Khoảng sáng gầm xe (mm)</td>
                           <td>131</td>
                       </tr>
                       <tr>
                          
                           <td>Trọng lượng không tải (kg)</td>
                           <td>1.488</td>
                       </tr>
                       <tr>
                          
                           <td>Trọng lượng toàn tải (kg)</td>
                           <td>2.000</td>
                       </tr>
                       <tr>
                        <div className='specification'>
                            <h6><b>HỆ THỐNG TREO</b></h6>
                        </div>
                        </tr>
                       <tr>
                           <td>Hệ thống treo trước</td>
                           <td>Kiểu MacPherson</td>
                       </tr>
                       <tr>
                          
                           <td>Hệ thống treo sau</td>
                           <td>Đa liên kết</td>
                       </tr>
                       <tr>
                       <div className='specification'>
                        <h6> <b>HỆ THỐNG PHANH</b></h6>
                        </div> 
                        </tr>
                       <tr>
                          
                           <td>Phanh trước</td>
                           <td>Đĩa tản nhiệt</td>
                       </tr>
                       <tr>
                          
                           <td>Phanh sau</td>
                           <td>Phanh đĩa</td>
                       </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
