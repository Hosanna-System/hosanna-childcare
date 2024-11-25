import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IService } from '../types/IServices.ts';
import Button from '../components/Button.tsx';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import Loader from '../components/Loader.tsx';
import { getAllServices } from '../services/serviceEndpoints.js';
import '../assets/styles/Services.css';

const ServicesPage = () => {
    const [services, setServices] = useState<IService[]>([]);
    const [loading, setLoading] = useState(true);
    const [isService, setIsService] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch services from the API using the getAllServices function
        const fetchServices = async () => {
            try {
                const data = await getAllServices();
                setServices(data);
                if (data.length === 0) {
                    setIsService(false);
                }
            } catch (error) {
                console.error('Error fetching services:', error);
                setIsService(false);
            } finally {
                setLoading(false);
                setIsService(false);
            }
        };

        fetchServices();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="services-container">
            <Header />
            <main className="services-main">
                <section className="services-header">
                    <h1>Nos Services</h1>
                    <p>Découvrez les services que nous proposons pour vous et vos enfants.</p>
                </section>
                <section className="service-list">
                    {isService ? (
                        services.map((service) => (
                            <div key={service.id} className="service-card">
                                <h2>{service.name}</h2>
                                <p>{service.description}</p>
                                <Button text="Voir les détails" onClick={() => navigate(`/services/${service.id}`)} />
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>Aucun service trouvé.</p>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ServicesPage;
