import React, { useState } from "react";

import "./App.css";

import contacts from "./contacts.json";

function App() {

//Iteration 2:
  const [ironContacts, setIronContacts] = useState([
    {
      "name": "Idris Elba",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      "popularity": 11.622713,
      "id": "11731993-0604-4bee-80d5-67ad845d0a38",
      "wonOscar": true,
      "wonEmmy": true
    },
    {
      "name": "Johnny Depp",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      "popularity": 15.656534,
      "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
      "wonOscar": false,
      "wonEmmy": false
    },
    {
      "name": "Monica Bellucci",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
      "popularity": 16.096436,
      "id": "0ad5e441-3084-47a1-9e9b-b917539bba71",
      "wonOscar": false,
      "wonEmmy": false
    },
    {
      "name": "Gal Gadot",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
      "popularity": 10.049256,
      "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
      "wonOscar": false,
      "wonEmmy": false
    },
    {
      "name": "Ian McKellen",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
      "popularity": 10.070132,
      "id": "0067ae32-97b6-4431-898e-eb1c10150abb",
      "wonOscar": false,
      "wonEmmy": false
    }
  ])

//Iteration 3:
  const addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    setIronContacts([...ironContacts, randomContact])
  }

//Iteration 4:
  const sortByName =() => {
    const sortedName = ironContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    setIronContacts([...sortedName])
  }

  const sortByPopularity = () => {
    const sortedByPopularity = ironContacts.sort((a, b) => {
      return  b.popularity - a.popularity;
    })
    setIronContacts([...sortedByPopularity])
  }

//Iteration 5:
  const clickToDelete = (contact) => {
    const filteredContacts = ironContacts.filter((item) => {
      return item !== contact
    })
    setIronContacts([...filteredContacts])
  }


  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={ () => addRandomContact()}>Add Random Contact</button>
      <button onClick={ () => sortByPopularity()}>Sort By Popularity</button>
      <button onClick={ () => sortByName()}>Sort By Name</button>
      <table>
        <tr>
          <td>
            <strong>Picture</strong>s
          </td>
          <td>
            <strong>Name</strong>
          </td>
          <td>
            <strong>Popularity</strong>
          </td>
          <td>
            <strong>Won Oscar</strong>
          </td>
          <td>
            <strong>Won Emmy</strong>
          </td>
          <td>
            <strong>Action</strong>
          </td>
        </tr>
        {ironContacts.map((contact) => {
          return (
            <tr>
              <td><img src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && '🏆'}</td>
              <td>{contact.wonEmmy && '🏆'}</td>
              <td><button onClick={() => clickToDelete(contact)}>Delete</button></td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
export default App;
