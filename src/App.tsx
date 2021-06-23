import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importando as paginas
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

// O Switch nao inclui duas rotas na mesma pagina
// O exact precisa ser incluída porque se nao a condição valida a primeira que achar

export default App;
