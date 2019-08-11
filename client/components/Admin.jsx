import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/admin.scss';

const Admin = () => (
  <div className="">
    <h2>ADMIN PAGE</h2>
    <ul className="admin-grid">
      <div className="admin-links">
        <li><Link className="link" to="/admin/products">Manage Products</Link></li>
        <i className="material-icons">perm_identity</i>
      </div>
      <div className="admin-links">
        <li><Link className="link" to="/admin/users">Manage Users</Link></li>
        <i className="material-icons">filter</i>
      </div>
      <div className="admin-links">
        <li><Link className="link" to="/admin/categories">Manage Categories</Link></li>
        <i className="material-icons">list</i>
      </div>
    </ul>
  </div>
);

export default Admin;
