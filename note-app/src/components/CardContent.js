import React from 'react';

import { Link } from 'react-router-dom';

const cardContent = () => {
    return (
        <div>
            <div classname='contentContainer'>
            <div className='editLink'>
            <Link to='/edit'>
                <p className='edit'>edit</p>
                </Link>
                </div>
                <div className='deleteLink'>
            <Link to='/delete'>
                <p className='delete'>delete</p>
                </Link>
                </div>
        <h4>Note Name</h4>
        <p>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
        <p>Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.</p>
        </div>
        </div>
    )
}

export default cardContent;