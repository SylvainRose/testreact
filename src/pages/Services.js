import React from 'react';
import Menu from "../Menu";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../serpent.jpg';
import image2 from "../sitecalcule.jpg";
import image3 from "../phenix.jpg";
    const responsive = {
      superLargeDesktop: {
        breakpoint:{ max: 4000, min: 3000},
        items: 5
      },
      desktop: {
        breakpoint:{ max: 3000, min: 1024},
        items: 3
      },
      tablet: {
        breakpoint:{ max: 1024, min: 464},
        items: 2
      },
      mobile: {
        breakpoint:{ max: 464, min: 0},
        items: 1
    
      },
    };
const Services = () => {
    return (
        <div>
            <Menu/>
            <h1>Services</h1>
            <p>Donc si vous m'engagez,vous gagnez une personne qui est techinicien Pc et donc qui peut résoudre les problème de pc, un developper Web même s'il y a encore beaucoup de chose à apprendre et un pâtissier qui peut parfois ramener de bonne pâtisserie. </p>
            <p>Voilà j'ai fini mais je pense que si vous êtes un bon patron ou une bonne patronne il ne vous reste qu'un choix c'est de m'engager alors je vous dis à bientôt!!</p>
            <Carousel responsive={responsive}>
                <div><img className='ser' src={image1} /></div>
                <div><img className='ser' src={image2} /></div>
                <div><img className='ser' src={image3} /></div>
                <div><img className='ser' src={image1} /></div>
            </Carousel>
        </div>
    );
};

export default Services;