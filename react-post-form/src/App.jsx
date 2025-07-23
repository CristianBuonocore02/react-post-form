import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    return (
        <div className="container mt-5">
            <h2>Crea un nuovo post</h2>
            <form>
            </form>
        </div>
    );
}

export default App;