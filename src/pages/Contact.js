import React from 'react';
import Menu from "../Menu";

const Contact = () => {
    return (
        <div>
            <Menu/>
            <h1>Contact</h1>
            <p>Si jamais vous voulez me contacter, vous êtes sur la bonne page.</p>
            <p>Vous avez bien sûr plusieurs moyen de me contacter:</p>
            <h2>De manières traditionnelles</h2>
            <ul>
                <li>Par téléphone : +32474190867</li>
                <li>Par mail : pokesyl@hotmail.com</li>
                <li>Par courrier: Avenue Maurice Dekeyser, numéro 25 boite 10, 1090 Jette</li>
            </ul>
            <h2>De manières moins conventionnelles</h2>
            <ul>
                <li>Venir te follow sur ma page twitch et me parler :silver_james</li>
                <li>Sur mon instagram : Sylvain Roselaer</li>
                <li>Par courrier: Avenue Maurice Dekeyser, numéro 25 boite 10, 1090 Jette</li>
            </ul>
        </div>
    );
};

export default Contact;