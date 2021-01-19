import React from 'react'; // quand on n'indique rien sur le path, on fait ref à node_modules

const Menbre = (props) => {

    return (  
        <>
            <h2>Membre : {props.nom}</h2>
        </>
    );
}

//const Membre = () => (
//    <h2>Membre de la famille</h2>
//)

//const Membre = () => (
//    return <h2>Membre de la famille</h2>
//)
 
export default Menbre;