import React, { useState, useEffect } from 'react';
import './styles.css';

function DevForm({ onSubmit }){
    
    const [ latitude, setLatitude ] = useState('')
    const [ longitude, setLongitude ] = useState('')
    const [ github_username, setGithub_username ] = useState('')
    const [ techs, setTechs ] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
    
    
          (position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude)
            setLongitude(longitude)
            
          },
          (err) => {
            console.log(err);
          },
          {
            timeout: 30000,
          }
          );
    
      }, [])
    async function handleAddSubmit(e){
        e.preventDefault();
        
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
          });

          setGithub_username('');
          setTechs('');
    }

    return (
    <form onSubmit={handleAddSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" onChange={e => setGithub_username(e.target.value) } id="github_username" value={github_username} required/>
        </div>
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" onChange={e => setTechs(e.target.value) } value={techs} required/>
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" type="number" onChange={e => setLatitude(e.target.value)}  id="latitude" value={latitude} required/>
            </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" type="number" onChange={e => setLongitude(e.target.value) } id="longitude" value={longitude} required/>
          </div>
        </div>
    <button type="submit">Salvar</button>
    </form>
    
    );
}

export default DevForm;