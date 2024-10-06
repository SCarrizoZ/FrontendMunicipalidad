import React, { useState } from 'react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todas las categorías');
  const [selectedStatus, setSelectedStatus] = useState('Todos los estados');
  const [selectedCommittee, setSelectedCommittee] = useState('Todas las juntas');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const menuItems = ['Dashboard', 'Publicaciones', 'Anuncios', 'Reportes', 'Mapa', 'Cerrar Sesión'];

  const publications = [
    {
      title: 'Falta de iluminación en calles',
      description: 'En varias calles de la población no funcionan los postes...',
      status: 'Recibido',
      category: 'Seguridad',
      date: '07-10-2024',
      committee: 'FÉLIX HOYOS N° 2638, POBLACIÓN 23 DE MARZO'
    },
    {
      title: 'Baches en la avenida principal',
      description: 'Hay múltiples baches en la avenida que dificultan el tránsito...',
      status: 'Resuelto',
      category: 'Mantención de calles',
      date: '01-09-2024',
      committee: 'JAVIERA CARRERA 2502, VILLA ASCOTÁN'
    },
    {
      title: 'Plazas sin riego',
      description: 'Las áreas verdes de la plaza principal no tienen riego...',
      status: 'En curso',
      category: 'Áreas verdes',
      date: '22-07-2024',
      committee: 'SEDE SOCIAL PUEBLO DE AYQUINA'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.logo}></div>
        {menuItems.map((item, index) => (
          <div key={index} style={styles.menuItem}>{item}</div>
        ))}
      </div>
      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Listado de publicaciones</h1>
        </div>
        <div style={styles.filters}>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Categoría</label>
            <select 
              style={styles.filterSelect}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>Todas las categorías</option>
            </select>
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Estado de la publicación</label>
            <select 
              style={styles.filterSelect}
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option>Todos los estados</option>
            </select>
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Junta vecinal</label>
            <select 
              style={styles.filterSelect}
              value={selectedCommittee}
              onChange={(e) => setSelectedCommittee(e.target.value)}
            >
              <option>Todas las juntas</option>
            </select>
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Fecha inicial</label>
            <input 
              type="date" 
              style={styles.filterInput}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Fecha fin</label>
            <input 
              type="date" 
              style={styles.filterInput}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <button style={{...styles.button, ...styles.buttonOutline}}>Limpiar filtros</button>
            <button style={{...styles.button, ...styles.buttonGreen}}>Aplicar filtros</button>
          </div>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Título</th>
              <th style={styles.tableHeader}>Descripción</th>
              <th style={styles.tableHeader}>Estado</th>
              <th style={styles.tableHeader}>Categoría</th>
              <th style={styles.tableHeader}>Fecha de publicación</th>
              <th style={styles.tableHeader}>Junta vecinal</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((pub, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{pub.title}</td>
                <td style={styles.tableCell}>{pub.description}</td>
                <td style={styles.tableCell}>{pub.status}</td>
                <td style={styles.tableCell}>{pub.category}</td>
                <td style={styles.tableCell}>{pub.date}</td>
                <td style={styles.tableCell}>{pub.committee}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={styles.pagination}>
          <span>1-3 de 50</span>
          <button style={styles.paginationButton}>&lt;</button>
          <button style={styles.paginationButton}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#00855a',
    color: 'white',
    padding: '20px',
  },
  logo: {
    width: '100px',
    height: '100px',
    backgroundColor: 'white',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  menuItem: {
    padding: '10px',
    margin: '5px 0',
    backgroundColor: '#b34700',
    color: 'white',
    cursor: 'pointer',
  },
  mainContent: {
    flexGrow: 1,
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#00855a',
    color: 'white',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  headerTitle: {
    margin: 0,
    marginLeft: '20px',
  },
  filters: {
    backgroundColor: '#00855a',
    padding: '20px',
    marginBottom: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  filterGroup: {
    marginBottom: '10px',
  },
  filterLabel: {
    display: 'block',
    color: 'white',
    marginBottom: '5px',
  },
  filterSelect: {
    width: '200px',
    padding: '5px',
  },
  filterInput: {
    width: '200px',
    padding: '5px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
  },
  buttonGreen: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
  },
  tableHeader: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
  },
  tableCell: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
  paginationButton: {
    marginLeft: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};