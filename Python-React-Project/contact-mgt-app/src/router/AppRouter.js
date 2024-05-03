import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddContact from '../components/AddContact';
import ContactsList from '../components/ContactsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditContact from '../components/EditContact';


function AppRouter() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
        <Switch>
            <Route
              render={(props) => (
                <ContactsList {...props} contacts={contacts} setContacts={setContacts} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddContact {...props} contacts={contacts} setContacts={setContacts} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditContact {...props} contacts={contacts} setContacts={setContacts} />
              )}
              path="/edit/:id"
            />
              <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;