
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {


  return (
      // <dev style={{width : '480px', height : '480px', display : 'flex'}}>
      //   <Card src='https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' discriptions='گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت' price='51,489,000' discount='2' realPrice='52,700,000'/>
      //   <Card src='https://dkstatics-public.digikala.com/digikala-products/33cc19680d37b40f3030752c36978e0d76ea980b_1656430769.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' discriptions='گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت ۱ترابایت و رم 6 گیگابایت' price='75,500,000' discount='0' realPrice=''/>
      //   <Card src='https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423242.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' discriptions='گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت' price='38,700,000' discount='10' realPrice='42,900,000'/>
      //   <Card src='https://dkstatics-public.digikala.com/digikala-products/84659452543771896593b266884e8289dde2436d_1648691856.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' discriptions='کاور مدل ژله ای کپسول دار مناسب برای گوشی موبایل اپل IPHONE 13 PRO MAX / 13PROMAX / 13 PROMAX / 13PRO' price='36,600' discount='0' realPrice=''/>

      // </dev>

      <Card style={{ width: '18rem' ,margin : '20px'}}>
      <Card.Img variant="top" src="https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423242.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" />
      <Card.Body>
        <Card.Title>iphone 13</Card.Title>
        <Card.Text>
        گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت
        </Card.Text>
        <a href='https://www.digikala.com/product/dkp-6459793/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%A7%D9%BE%D9%84-%D9%85%D8%AF%D9%84-iphone-13-a2634-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-128-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%D9%88-%D8%B1%D9%85-4-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA/'><Button variant="primary">خرید</Button></a>
      </Card.Body>
    </Card>
      

  );
}

export default App
