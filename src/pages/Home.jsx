import React from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from 'react-bootstrap';


function Home()
{
    return (
        <div>
            <NavBar name="Simi" />
            <Button variant="primary">Primary</Button>
            <h1>Home Page</h1>
            <Footer />
        </div>
    );

}
export default Home;