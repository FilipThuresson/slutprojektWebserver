import React from 'react';

export default function LoginForm() {
    return (
        <div className='loginWrapper'>
            <form method='post' action='/api/login'>
                <h2>Logga in</h2>
                <label>Admin Namn</label>
                <br />
                <input type="text" name="name" required />
                <br />
                <label>Admin Lösenord</label>
                <br />
                <input type="password" name="pwd" required />
                <br />
                <button type='submit'>Logga in</button>
            </form>
        </div>

    );
}
