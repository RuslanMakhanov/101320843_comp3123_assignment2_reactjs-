import React, { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
