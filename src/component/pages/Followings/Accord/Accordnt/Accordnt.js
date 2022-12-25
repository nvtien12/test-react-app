import React from 'react';
import './accordnt.css';
import Images from './Slider';








export default function Accordnt() {
    return (
        <div className="box_pro_ngoai_that" id="ngoaithat">
            <div className="pro_detail_title">
                <label className="pro_detail_title_text">
                    <h2> NGOẠI THẤT </h2>
                </label>
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
                                        href="../assets/cum_den_truoc.jpg"
                                    >
                                        <img src="../assets/cum_den_truoc.jpg" alt="" />
                                        <figcaption>Cụm đèn trước full LED thiết kế sắc sảo và hiện đại</figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/Cum_den_hau.jpg"
                                    >
                                        <img src="../assets/Cum_den_hau.jpg" alt="" />
                                        <figcaption>Cụm đèn hậu với những đường nét tinh xảo</figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/ang_ten.jpg"
                                    >
                                        <img src="../assets/ang_ten.jpg" alt="" />
                                        <figcaption>Ăng-ten vây cá mập tạo điểm nhấn</figcaption>
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
                                        href="../assets/Tay_nam_cua.jpg"
                                    >
                                        <img src="../assets/Tay_nam_cua.jpg" alt="" />
                                        <figcaption>Tay nắm cửa phía trước đóng mở bằng cảm biến tiện lợi</figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/den_suong_mu.jpg"
                                    >
                                        <img src="../assets/den_suong_mu.jpg" alt="" />
                                        <figcaption>Đèn sương mù dạng LED</figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                    >
                                        <img src="../assets/guong_chieu_hau_chinh_dien.jpg" alt="" />
                                        <figcaption>
                                            Gương chiếu hậu chỉnh điện, gập định tích hợp đèn báo rẽ LED, tự động gập
                                            khi khoá và tự động cụp khi lùi
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
                                        <img src="../assets/La_zang.jpg" alt="" />
                                        <figcaption>La-zăng 18 inch thiết kế phá cách tôn lên sữ vững chãi</figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/ong_xa_kep.jpg"
                                    >
                                        <img src="../assets/ong_xa_kep.jpg" alt="" />
                                        <figcaption>Ống xả kép hiện đại và thể thao</figcaption>
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
