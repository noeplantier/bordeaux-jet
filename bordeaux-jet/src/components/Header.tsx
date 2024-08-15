import React, { useState } from 'react';
import { AppBar, Toolbar, Button, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import '../styles/Header.scss';

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <AppBar position="static" className="header-appbar">
      <Toolbar className="header-toolbar">
        <h1 className="header-title">Bordeaux Jet</h1>
        
        <form onSubmit={handleSearchSubmit} className="header-search">
          <SearchIcon className="search-icon" />
          <InputBase
            placeholder="Votre recherche..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
            inputProps={{ 'aria-label': 'search' }}
          />
        </form>

        <div className="header-buttons">
          <Button color="inherit" onClick={onLoginClick}>Connexion</Button>
          <Button color="inherit" onClick={onRegisterClick}>Inscription</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
