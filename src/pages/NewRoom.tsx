import { Link } from 'react-router-dom';

// Importando as images
import illustrationsImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

// Importando Button
import { Button } from "../components/Button";
import { useAuth } from '../hooks/useAuth';

// Importando o css
import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth();

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
          <form>
            <input
            type="text"
            placeholder="Nome da sala"
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
