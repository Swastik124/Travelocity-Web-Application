import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from 'react';
import './Home.css';
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  CardHeader,
} from '@chakra-ui/react';
import Help1 from '../assets/help1.png'
import Help2 from '../assets/help2.png'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


function Home() {
  const [hotels, setHotels] = useState([]);
  function perfect(){
    window.location.href = "/PerfectTrip";
  }
  useEffect(() => {
    fetch('http://localhost:3000/hotels')
      .then(response => response.json())
      .then(data => setHotels(data));
  }, []);
  function detail() {
    window.location.href = "/DestinationDetails";
  }

  return (
    <>
    <div><Header></Header></div>
    <div><Navbar></Navbar></div>
      <div className='mainBody'>
        <h2 style={{
          fontSize: ' 1.75rem',
          fontWeight: ' 500',
          lineHeight: '2rem',
          margin: '0.8%',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        }}>Recommended stays for you</h2>

        <div>
          <Carousel responsive={responsive} infinite arrows>
            {hotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card" style={{
                objectFit: "cover",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0.2rem",
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                borderRadius: "5%",
                overflow: "hidden"
              }}>
                <img onClick={detail} src={hotel.image[0].image} alt={hotel.name}
                  style={{ width: "100%", height: "8rem", objectFit: "cover" }} />

                <h3 onClick={detail} style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
                  {hotel.name}
                </h3>

                <span style={{ fontSize: "small", fontWeight: "bold" }}>
                  {hotel.rating}/5 ({hotel.reviews})
                </span>
              </div>
            ))}
          </Carousel>
        </div>

        <h2 style={{
          margin: '0.8%',
          fontSize: ' 1.75rem',
          fontWeight: ' 500',
          lineHeight: '2rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        }}>Explore stays in trending destinations</h2>

        <div>
          <Carousel responsive={responsive} infinite arrows>
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card" style={{
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "0.2rem",
              boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
              borderRadius: "5%",
              overflow: "hidden"
            }}>
              <img onClick={detail} src={hotel.location.img} alt={hotel.location.city}
                style={{ width: "100%", height: "9rem", objectFit: "cover" }} />

              <h2 onClick={detail} style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
                {hotel.location.city}
              </h2>

              <p style={{ fontSize: "1rem" }}>{hotel.location.country}</p>
            </div>
          ))}
          </Carousel>
        </div>

        <SimpleGrid templateColumns='repeat(3, minmax(5rem, 2fr))' marginBottom='2%'>
          <Card className='three_card' width={'25rem'} style={{ gap: '0', margin: '0', padding: '0' }} >
            <CardBody padding={0} margin={0} onClick={perfect}>
              <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7JbNhTcBtFD4oRv7Z-nAgKVcmlYMs6myR4wQchvUp_ib_2nw8' alt='find your perfect trip' style={{
                width: '100%',
                height: '8rem',
                objectFit: 'cover',
                borderRadius: '10px',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,2) 70%)', 
                filter:'brightness(80%)',
              }} />
              <div className='bottom-left'>Find your perfect trip</div>
              <CardFooter style={{
                fontSize:'small',
                padding:'0',
                marginLeft:'0.7%',
                marginBottom:'5%',
              }}>
              Plan a trip for the whole family-from family travel tips to family-friendly filters, our tools make it easy.
              </CardFooter>
            </CardBody>
          </Card>
          <Card className='three_card' width={'25rem'}>
            <CardBody padding={0} margin={0}>
              <img src='https://c.stocksy.com/a/am2400/z9/964012.jpg' style={{
                width: '100%',
                height: '8rem',
                objectFit: 'cover',
                borderRadius: '10px',
                margin: '0',
                filter:'brightness(80%)',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,2) 70%)', 
              }} /><div className='bottom-left'>Book with flexibility</div>
              <CardFooter style={{
                fontSize:'small',
                padding:'0',
                marginLeft:'0.7%',
                marginBottom:'5%',
              }}>
              Looking for a change of scenery,but want something flexible? With free cancellation on most hotels, you can book with peace of mind.
              </CardFooter>
            </CardBody>
          </Card>
          <Card className='three_card' width={'25rem'}>
            <CardBody padding={0} margin={0}>
              <img src='https://blog.evolv.ai/hubfs/211014-blog-friction-social.jpg' style={{
                width: '100%',
                height: '8rem',
                objectFit: 'cover',
                borderRadius: '10px',
                filter:'brightness(80%)',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,2) 70%)', 
              }} /><div className='bottom-left'>We've got your back</div>
              <CardFooter style={{
                fontSize:'small',
                padding:'0',
                marginLeft:'0.7%',
                marginBottom:'5%',
              }}>
              Need more help along your journey? We offer 27/7 support on social and through virtual agent onsite .
              </CardFooter>
            </CardBody>
          </Card>
        </SimpleGrid>

 {/* ------------------------------------------------------------------------------------ */}

        <SimpleGrid templateColumns='repeat(2, minmax(5rem, 2fr))'  marginBottom='2%' border='0' shadow='0'>
        <Card className='view_details' width={'196%'} >
        <CardBody padding={0} margin={0}>
          <img src='https://img.freepik.com/free-photo/umbrella-chair-around-swimming-pool_74190-2157.jpg?size=626&ext=jpg&ga=GA1.1.39043540.1693853883&semt=ais_user' style={{ filter: 'brightness(50%)' }} />
          <div className='textInside' style={{
          position: 'absolute',
          top: '34%',
          left: '13%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontFamily:'font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
          }}>
            <h2 style={{fontSize:'x-large', fontWeight:'650', textAlign:'left'}}>All-inclusive resorts</h2>
            <p >Think of nothing beyond having a</p>
            <p style={{textAlign: 'left'}}> great time with your family</p>
            <button onClick={detail}
              style={{
                backgroundColor: 'white',
                color: '#0d5ab9',
                position: 'absolute',
                left: '5%',
                borderRadius: '20px',
                height: '45%',
                width: '35%',
                fontSize:'small',
                fontWeight:'500',
                
              }}> view details
            </button>
          </div>
          </CardBody>
          </Card>
          <Card className='view_details'  width={'196%'} left={'7%'}>
        <CardBody padding={0} margin={0}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLBrEXKYOSq2Vt8Z_hS2g1KwGp14AqmkTse6GoCiiQ7P0S8-G' style={{ filter: 'brightness(70%)' }} />
          <div className='textInside' style={{
          position: 'absolute',
          top: '34%',
          left: '13%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontFamily:' -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
          }}>
           <h2 style={{fontSize:'x-large', fontWeight:'650', textAlign:'left'}}>All-inclusive resorts</h2>
            <p >Think of nothing beyond having a</p>
            <p style={{textAlign: 'left'}}> great time with your family</p>
            <button onClick={detail}
              style={{
                backgroundColor: 'white',
                color: '#0d5ab9',
                position: 'absolute',
                left: '5%',
                borderRadius: '20px',
                height: '45%',
                width: '35%',
                fontSize:'small',
                fontWeight:'500',
                
              }}> view details </button>
              
          </div>
          </CardBody>
          </Card>
          </SimpleGrid>



        
        <SimpleGrid templateColumns='repeat(3, minmax(5rem, 2fr))' paddingBottom={'2%'} paddingTop={'2%'}>
          <Card className='three_card' width={'24rem'} style={{ gap: '0', margin: '0', padding: '0' }} >
            <CardBody padding={0} margin={0}>
              <img src='https://4.imimg.com/data4/NW/NC/GLADMIN-8409764/2-500x500.png' style={{
                width: '100%',
                height: '8rem',
                objectFit: 'cover',
                borderRadius: '10px',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,2) 70%)', 
                filter:'brightness(80%)',
              }} />
              <div className='bottom-left'>Beaches</div>
            </CardBody>
          </Card>

          <Card className='three_card' width={'24rem'}>
            <CardBody padding={0} margin={0}>
              <img src='https://experitour.com/wp-content/uploads/2018/11/WJT15-768x308.jpg' style={{
                width: '100%',
                height: '8rem',
                objectFit: 'cover',
                borderRadius: '10px',
                margin: '0',
                filter:'brightness(80%)',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,2) 70%)', 
              }} /><div className='bottom-left'>Adventure</div>
              
            </CardBody>
          </Card>

          <Card className='three_card' width={'24rem'}>
            <CardBody padding={0} margin={0}>
              <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDk41hGn7vGhuj7kjadLA-xxlxs7pruyc-HS7CbD-Rjw6VSwLr' style={{
                width: '100%',
                height: '8rem',
                objectFit: 'cover',
                borderRadius: '10px',
                filter:'brightness(80%)',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,2) 70%)', 
              }} /><div className='bottom-left'>Culture</div>
            </CardBody>
          </Card>
          </SimpleGrid>
      </div><br /><br />
      <div style={{marginLeft:'6%'}}><img src={Help1} alt="Help1" /></div><br />
      <div style={{marginLeft:'6%'}}><img src={Help2} alt="Help2" /></div><br />
      <div ><Footer/></div>
      
    </>
  );
}

export default Home;