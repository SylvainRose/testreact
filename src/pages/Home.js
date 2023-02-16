import React from 'react';
import Menu from "../Menu";
import image2 from '../sitecalcule.jpg';
const Home = () => {
    return (
        <div>
            <Menu/>
            <h1>Accueil</h1>
            <div>
            <p>Bienvenue sur mon premier site fais avec React, je suis en pleine apprentissage et je vous partage mes premiers pas.</p>
            <p>Pour la suite je vais mettre un peu de Lorem ipsum pour me facilité le remplissage des pages, un petit paragraphe bien pratique qui peut vous aider vous aussi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            <img src={image2}/>
            </div>
        </div>
    );
};

export default Home;