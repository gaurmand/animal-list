import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {animalDB} from './mammals.js';

// ========================================
function AnimalTitle(props) {
  return (
    <h3>{props.animal.CommonName}</h3>
  );
}

function AnimalInfo(props) {
  return (
    <ul>
      <li> <b>Scientific Name:</b> {props.animal.ScientificName} </li>
      <li> <b>Status:</b> {props.animal.Status} </li>
      <li> <b>Range:</b> {props.animal.Range} </li>
      <li> <b>Description:</b> {props.animal.Description} </li>
    </ul>
  );
}

function AnimalItem(props) {
  return (
    <div>
      <AnimalTitle animal = {props.animal}/>
      <AnimalInfo animal = {props.animal}/>
    </div>
  );
}

function AnimalList(props) {
  const animalList = props.animals.map((anim, index) =>
    <AnimalItem key = {index} animal = {anim.doc}/>
  );
  return animalList;
}

function RenderAnimalList(animals){
  ReactDOM.render(
    <AnimalList animals = {animals}/>,
    document.getElementById('root')
  );
}

//get array of all animals from animalDB and render animalList
animalDB.allDocs({include_docs: true, descending: true}, function(err, doc) {
  RenderAnimalList(doc.rows)
});

//clear database
animalDB.destroy();
