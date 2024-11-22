import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Bienvenue</h1>
            <Button variant="contained" color="primary">
                Commencer
            </Button>
            <Link to="/login">Se connecter</Link>
        </div>
    );
};

export default HomePage;