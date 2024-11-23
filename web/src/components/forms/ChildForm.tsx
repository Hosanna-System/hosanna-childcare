// Formulaire pour ajouter ou éditer un enfant.
// - Si l'identifiant de l'enfant est fourni, le formulaire est en mode édition.
// - Sinon, le formulaire est en mode ajout.
// ----------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getChildById, createChild, updateChild } from '../../services/childrenEndpoints';
import { IChild } from '../../types/IChild';
import '../../assets/styles/ChildForm.css';
import { Types } from 'mongoose';

const ChildForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [child, setChild] = useState<Partial<IChild>>({
        firstname: '',
        lastname: '',
        gender: '',
        birthdate: new Date(),
        age: 0,
        profilePic: '',
        parentId: new Types.ObjectId(),
        allergies: [],
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            setLoading(true);
            getChildById(id, 'your-token-here')
                .then((data) => setChild(data))
                .catch((err) => setError(err.message))
                .finally(() => setLoading(false));
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setChild((prevChild) => ({ ...prevChild, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (id) {
                await updateChild(id, child, 'your-token-here');
            } else {
                await createChild(child, 'your-token-here');
            }
            navigate('/children');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{id ? 'Edit Child' : 'Add Child'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label htmlFor="firstname">First Name</label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={child.firstname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastname">Last Name</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={child.lastname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <select
                    id="gender"
                    name="gender"
                    value={child.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="birthdate">Birthdate</label>
                <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={child.birthdate?.toISOString().split('T')[0]}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={child.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="profilePic">Profile Picture URL</label>
                <input
                    type="text"
                    id="profilePic"
                    name="profilePic"
                    value={child.profilePic}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="allergies">Allergies</label>
                <input
                    type="text"
                    id="allergies"
                    name="allergies"
                    value={child.allergies?.join(', ')}
                    onChange={(e) => setChild((prevChild) => ({ ...prevChild, allergies: e.target.value.split(', ') }))}
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Saving...' : id ? 'Update Child' : 'Add Child'}
            </button>
        </form>
    );
};

export default ChildForm;