import React, { useState } from "react";

function App() {
    // Stato centrale per i dati del form
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false
    });

    // Funzione per aggiornare i campi
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    // Solo struttura form visibile
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Crea un nuovo post</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Autore</label>
                    <input
                        type="text"
                        className="form-control"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Titolo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Contenuto</label>
                    <textarea
                        className="form-control"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        rows={4}
                        required
                    />
                </div>

                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="public"
                        checked={formData.public}
                        onChange={handleChange}
                    />
                    <label className="form-check-label">Rendi pubblico</label>
                </div>
            </form>
        </div>
    );
}

export default App;
