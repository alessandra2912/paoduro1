import React, { useState } from 'react';
import "./forms.css"

function ContactForm() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    estado: '',
    cidade: '',
    comentario: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className='Mae'>   
    <h1>Caso tenha alguma dúvida, crítica, sugestões ou queira apenas fazer um elogio, escreva aqui</h1>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', class:'forms' }}>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
        <label1>
          Nome:
          <input type="text" name="nome" onChange={handleChange} />
        </label1>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Telefone:
          <input type="tel" name="telefone" onChange={handleChange} />
        </label>
        <div style={{ gridColumn: 'span 2' }}>
          <label>
            Estado:
            <input type="text" name="estado" onChange={handleChange} />
          </label>
          <label>
            Cidade:
            <input type="text" name="cidade" onChange={handleChange} />
          </label>
        </div>
        <label style={{ gridColumn: 'span 2' }}>
          Comentário:
          <textarea name="comentario" onChange={handleChange} style={{ width: '100%', height: '100px' }} />
        </label>
        <button type="submit" className="botao">
        Enviar
      </button>
      </form>
    </div>
    </div>
  );
}

export default ContactForm;