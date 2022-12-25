import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footers() {
  return (
    <MDBFooter  bgColor='dark' className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/vtmbmt1125/' className='me-4 text-reset'>
            <MDBIcon color='white'  icon="fa-brands fa-facebook" />
          </a>
          <a href='https://www.instagram.com/nguyenvantien727/' className='me-4 text-reset'>
            <MDBIcon color='white'  icon='instagram' />
          </a>
          <a href='https://github.com/nvtien12' className='me-4 text-reset'>
            <MDBIcon color='white'  icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' color='white' className='ms-2 d-none d-lg-block'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon  icon='gem' className='me-3' />
                CÔNG TY:
              </h6>
              <h4 >
                HONDA ÔTÔ ĐẮK LẮK
              </h4>
            </MDBCol>

            

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 me-1'>
              <h6 className=' text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <a href="https://goo.gl/maps/9T5kjsxW6gZfRfJk6" className ='text-reset text-decoration-none' >
                <MDBIcon color='white' icon='home' className='me-2' />
                145 Nguyễn Chí Thanh, Tp Buôn Ma Thuột, Đắk Lắk
                </a>
              </p>
              <p>
                <a href='https://mail.google.com/mail/u/1/?ogbl#inbox'className ='text-reset text-decoration-none' >
                <MDBIcon color='white' icon='envelope' className='me-3' />
                vtmbmt11231111@gmail.com
                </a>
              </p>
              <p>
              <a href='0941992552'className ='text-reset text-decoration-none' >
                <MDBIcon color='white' icon='phone' className='me-3' /> 0941992552
              </a>
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https:// hondaoto.io/'>
          hondaoto.io
        </a>
      </div>
    </MDBFooter>
  );
}