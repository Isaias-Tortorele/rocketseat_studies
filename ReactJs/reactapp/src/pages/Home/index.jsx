import './styles.css';

import { Card } from '../../components/card';

export function Home() {
  return (
    <div className='container'>
      <h1 >Lista de presença</h1>
      <input type="text" placeholder="Digite seu nome..." />
      <button type="button">Adicionar</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="Isaias" time="11:57:20" />
    </div>
  )
}
