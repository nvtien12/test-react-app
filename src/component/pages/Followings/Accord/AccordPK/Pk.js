import React from 'react';
import './pk.css';

export default function Pk() {
    return (
        <div className="box_pro_pk" id="pk">
            <div className="pro_detail_title">
                <label className="pro_detail_title_text">
                    <h2> PHỤ KIỆN </h2>
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
                                        href="../assets/nep-buoc-chan-phat-sang-phia-truoc-sau-phu-kien-rk1sortd.jpg"
                                    >
                                        <img
                                            src="../assets/nep-buoc-chan-phat-sang-phia-truoc-sau-phu-kien-rk1sortd.jpg"
                                            alt=""
                                        />
                                        <figcaption>
                                            <p>Nẹp bước chân phát sáng phía trước sau </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/trai-cop-sau-phu-kien-oiigzdqp.jpg"
                                    >
                                        <img src="../assets/trai-cop-sau-phu-kien-oiigzdqp.jpg" alt="" />
                                        <figcaption>
                                            <p>Trải cốp sau </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Accord - "
                                        href="../assets/vien-che-mua-phu-kien-oyvng3v9.jpg"
                                    >
                                        <img src="../assets/vien-che-mua-phu-kien-oyvng3v9.jpg" alt="" />
                                        <figcaption>
                                            <p>Viền che mưa </p>
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
                                        href="../assets/tham-trai-san-phu-kien-dychxnon.jpg"
                                    >
                                        <img src="../assets/tham-trai-san-phu-kien-dychxnon.jpg" alt="" />
                                        <figcaption>
                                            <p>Thảm trải sàn </p>
                                        </figcaption>
                                    </figure>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
            </div>
        </div>
    );
}
