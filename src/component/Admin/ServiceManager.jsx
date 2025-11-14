import React, { useState, useContext } from "react";
import { AppContext } from "../../context/appContext";

function ServiceManager() {
  const { services, setServices } = useContext(AppContext);
  const [form, setForm] = useState({ title: "", description: "", icon: "" });

  const addService = (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.icon) return;
    setServices([...services, form]);
    setForm({ title: "", description: "", icon: "" });
  };

  const deleteService = (index) => {
    const updated = services.filter((_, i) => i !== index);
    setServices(updated);
  };

  return (
    <div className="service-manager">
      <h2>Manage Services</h2>
      <form onSubmit={addService}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Icon URL"
          value={form.icon}
          onChange={(e) => setForm({ ...form, icon: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button type="submit">Add Service</button>
      </form>

      <div className="service-list">
        {services.map((srv, index) => (
          <div key={index} className="admin-card">
            <img src={srv.icon} alt={srv.title} />
            <h3>{srv.title}</h3>
            <p>{srv.description}</p>
            <button onClick={() => deleteService(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceManager;
