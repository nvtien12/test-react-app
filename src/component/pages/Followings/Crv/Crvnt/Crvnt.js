import React from 'react';
import './crvnt.css';
import Images from './Slider';








export default function Crvnt() {
    return (
        <div className="box_pro_ngoai_that" id="ngoaithat">
           <div className="card text-bg-dark">
            <img src="../assets/crv/exterior_bg.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay" >
              <div className='card-overlay'>
                <h3 className="card-title">NGOẠI THẤT</h3>
                <h2 className='text-card'>CẢM NHẬN
                    <br />
                    KHÍ CHẤT DẪN ĐẦU
                </h2>
              
                <p className="card-text">Với đường nét thiết kế mạnh mẽ và đầy uy lực sang trọng và đầy tinh tế.<br/>
                Honda CR-V tỏa sức hấp dẫn, khơi dậy khí chất dẫn đầu của chủ sở hữu</p>
            </div>    
            </div>
            </div>
            <div className="box_content_pro">
                <figure className="table">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/crv/exterior_headlight.jpg"
                                    >
                                        <img src="../assets/crv/exterior_headlight.jpg" alt="" />
                                        <figcaption>
                                        Cụm đèn trước Full LED thiết kế sắc sảo, là điểm nhấn cho diện mạo hiện đại
                                        mà đầy uy lực (L/G).
                                    </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/crv/exterior_taillight_cluster.jpg"
                                    >
                                        <img src="../assets/crv/exterior_taillight_cluster.jpg" alt="" />
                                        <figcaption>
                                        Cụm đèn hậu LED với những đường nét tinh xảo đầy kiêu hãnh.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/crv/fog_lights.png"
                                    >
                                        <img src="../assets/crv/fog_lights.png" alt="" />
                                        <figcaption>
                                        Cản trước nổi bật với đèn sương mù dạng LED tinh tế.
                                        </figcaption>
                                    </figure>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
                <figure className="table">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/crv/mirror.png"
                                    >
                                        <img src="../assets/crv/mirror.png" alt="" />
                                        <figcaption>
                                        Gương chiếu hậu gập điện tích hợp đèn báo rẽ LED.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/crv/sensor_handle.png"
                                    >
                                        <img src="../assets/crv/sensor_handle.png" alt="" />
                                        <figcaption>
                                        Tay nắm cửa phía trước đóng mở bằng cảm biến tiện lợi.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                    >
                                        <img src="../assets/crv/la_zang.png" alt="" />
                                        <figcaption>
                                            
                                        La-zăng thiết kế phá cách tôn lên sự vững chãi cho chiếc xe.
                    
                                        </figcaption>
                                    </figure>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
                <figure className="table">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                    >
                                        <img src="../assets/crv/front-bumper.png" alt="" />
                                        <figcaption>
                                        Thiết kế cản trước mới mạnh mẽ và đầy tinh tế.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/crv/dual_exhaust_pipes.png"
                                    >
                                        <img src="../assets/crv/dual_exhaust_pipes.png" alt="" />
                                        <figcaption>
                                        Cản sau thiết kế mới với ống xả kép tăng chất thể thao cho chiếc xe.
                                    </figcaption>
                                    </figure>
                                </td>
                           
                               <td>
                               <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/crv/shark.jpg"
                                    >
                                        <img src="../assets/crv/shark.png" alt="" />
                                        <figcaption>
                                        Ăng-ten vây cá mập tạo điểm nhấn cá tính.
                                    </figcaption>
                                    </figure>
                                </td> 
                            </tr>
                        </tbody>
                    </table>
                </figure>
            </div>
        <Images/>
        </div>
    );
}
