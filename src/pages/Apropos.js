import React from 'react';
import Menu from "../Menu";

const Apropos = () => {
    return (
        <div>
            <Menu/>
            <h1>A propos</h1>
            <p>Dans cette onglet de mon site je vais me présenter au final comme si je fais un cv mais un peu différament de ce qu'on peut voir.</p>
            <h2>Mon parcours</h2>
            <p>J'ai fais mes études au CERIA dans la section Hôtellerie-Restauration. Suite à ces études, j'ai remarqué que je préfèrais travailler dans le sucré que dans le salé, je me suis donc lancé dans une formation de pâtissier.</p>
            <p>J'ai travaillé dans ce secteur, pendant 8 ans en tant que pâtissier. Puis la COVID est arrivée et avec son apparition mon envie de changement aussi j'ai donc décidé de me lancer dans une formation de Technicien Pc-Réseau qui est un autre domaine qui me passionne.</p>
            <p>J'ai donc obtenue ma certification en tant que Technicien Pc-Réseau en 2021/2022 et je me suis lancé en 2022/2023 dans une formation de developper Web car je pense qu'avoir plusieurs cordes à son arc est un atout.</p>
            <h2>Les points forts</h2>
            <ul>
                <li>La ponctualité.</li>
                <li>La Minutie.</li>
                <li>Le travail d'équipe.</li>
                <li>La résistance au stress.</li>
            </ul>
            <h2>les points faibles</h2>
            <ul>
                <li>Trop minutieux ce qui fait que je prends plus de temps, pour faire bien.</li>
                <li>Timide mais pas avec les clients mais plus avec mes colègues le temps que je les connaisse.</li>
                <li>Trop drôle.</li>
            </ul>
        </div>
    );
};

export default Apropos;