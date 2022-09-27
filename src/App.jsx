import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import { Header } from "./components";
import NotesPage from "./pages/NotesPage";
import NewNotePage from "./pages/NewNotePage";
import NoteDetail from "./pages/NoteDetail";
import UrlErrorPage from "./pages/UrlErrorPage";

function AppRouting() {
    const routes = useRoutes([
        { path: "/", element: <NotesPage pageTitle={"Notes"} /> },
        { path: "/archives", element: <NotesPage pageTitle={"Archives"} /> },
        { path: "/new", element: <NewNotePage /> },
        { path: "/edit/:id", element: <NewNotePage /> },
        { path: "/note/:id", element: <NoteDetail /> },
        { path: "*", element: <UrlErrorPage /> },
    ]);

    return routes;
}

function App() {
    return (
        <Router>
            <Header />
            <AppRouting />
        </Router>
    );
}

export default App;
