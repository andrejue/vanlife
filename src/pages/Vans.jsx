import React, { useState } from 'react';
//import VansData from '../VansData';
import "../server";
import './Vans.css';

export default function Vans() {
const [vans, setVans] = useState([])
React.useEffect(() => {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
}, [])

const vanElements = vans.map(van => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} alt='Van img'/>
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
</div>
   ))

  return (
    <main className='main'>
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vanElements}
      </div>
    </main>
  )
}
