import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Importando as images
import illustrationsImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

// Importando Button
import { Button } from "../components/Button";
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

// Importando o css
import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
   event.preventDefault();
   
   if(newRoom.trim() === ''){
     return;
   }

   const roomRef = database.ref('rooms');

   const firebaseRoom = await roomRef.push({
     title: newRoom,
     authorId: user?.id,
   });

  //  redirecionar o usuário para a sala criada
  //  o key eh o id que foi inserido no banco de dados
    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id='page-auth'>
      <aside>
        <img
          src={illustrationsImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
            type="text"
            placeholder="Nome da sala"
            onChange={event => setNewRoom(event.target.value)}
            value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar numa sala existente? <Link to='/'>clique aqui</Link></p>
        </div>
      </main>
    </div>
  );
}
