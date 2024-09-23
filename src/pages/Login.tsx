import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useUser } from '../context/UserContext';  

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); 
  const { setUser } = useUser();  

  const provider = new GoogleAuthProvider();


  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuário logado:", user);
      setUser(user);  
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
    }
  };

  const handleEmailLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuário logado:", user);
      setUser(user);  
    } catch (error) {
      setError("Erro ao fazer login. Verifique suas credenciais.");
      console.error("Erro ao fazer login com email e senha:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {/* Formulário de login com email e senha */}
      <form onSubmit={handleEmailLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label>Senha:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit">Login com Email</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <hr />
      <button onClick={handleGoogleLogin}>Login com Google</button>
    </div>
  );
};

export default Login;