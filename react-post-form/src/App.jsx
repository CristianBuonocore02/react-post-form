import React, { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Post inviato!", data);
                setFormData({
                    author: "",
                    title: "",
                    body: "",
                    public: false,
                });
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Crea un nuovo post</h2>
            <form onSubmit={handleSubmit}>
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

                <button type="submit" className="btn btn-primary">
                    Invia Post
                </button>
            </form>
        </div>
    );
}

export default App;
