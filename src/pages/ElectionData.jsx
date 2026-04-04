import React, { useState } from 'react';
import './ElectionData.css';

const ElectionData = () => {
  const [district, setDistrict] = useState('All');
  const [constituency, setConstituency] = useState('All');

  const districts = ["All", "Chennai", "Coimbatore", "Madurai", "Trichy", "Salem"];
  const constituencies = ["All", "Kolathur", "Tondiarpet", "Coimbatore South", "Madurai Central", "Trichy West", "Salem North"];

  // Mock Election Data (Past Results 2021)
  const electionResults = [
    { id: 1, dist: "Chennai", const: "Kolathur", candidate: "Rajaram M", party: "Makkal Katchi", status: "Won", votes: "85,420", margin: "12,300" },
    { id: 2, dist: "Chennai", const: "Tondiarpet", candidate: "Velu S", party: "Makkal Katchi", status: "Runner-Up", votes: "62,100", margin: "-4,500" },
    { id: 3, dist: "Coimbatore", const: "Coimbatore South", candidate: "Kavitha R", party: "Makkal Katchi", status: "Won", votes: "78,200", margin: "8,900" },
    { id: 4, dist: "Madurai", const: "Madurai Central", candidate: "Pandian K", party: "Makkal Katchi", status: "Won", votes: "92,500", margin: "21,000" },
    { id: 5, dist: "Trichy", const: "Trichy West", candidate: "Selvam P", party: "Makkal Katchi", status: "Runner-Up", votes: "65,300", margin: "-2,100" },
    { id: 6, dist: "Salem", const: "Salem North", candidate: "Anbazhagan T", party: "Makkal Katchi", status: "Won", votes: "71,800", margin: "5,400" },
  ];

  const filteredResults = electionResults.filter(item => {
    return (district === 'All' || item.dist === district) && 
           (constituency === 'All' || item.const === constituency);
  });

  return (
    <div className="election-page pb-5">
      <div className="page-header bg-black text-white text-center py-5">
        <h1 className="tamil-text pt-4">தேர்தல் தரவுகள்</h1>
        <h2 className="mb-2">Election Data Center</h2>
        <div className="divider mt-3 mx-auto"></div>
      </div>

      <div className="container mt-5">
        <div className="glass-panel p-4 mb-5">
          <h3 className="mb-4">Filter Results (2021 Assembly Elections)</h3>
          <div className="filters-row">
            <div className="filter-group">
              <label>Select District</label>
              <select value={district} onChange={(e) => setDistrict(e.target.value)}>
                {districts.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label>Select Constituency</label>
              <select value={constituency} onChange={(e) => setConstituency(e.target.value)}>
                {constituencies.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="filter-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button className="btn btn-primary" onClick={() => { setDistrict('All'); setConstituency('All'); }}>Reset Filters</button>
            </div>
          </div>
        </div>

        <div className="table-responsive glass-panel">
          <table className="election-table">
            <thead>
              <tr>
                <th>Constituency</th>
                <th>District</th>
                <th>Candidate</th>
                <th>Votes Secured</th>
                <th>Margin</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.length > 0 ? (
                filteredResults.map(item => (
                  <tr key={item.id}>
                    <td className="fw-bold">{item.const}</td>
                    <td>{item.dist}</td>
                    <td>{item.candidate}</td>
                    <td>{item.votes}</td>
                    <td>{item.margin}</td>
                    <td>
                      <span className={`status-badge ${item.status === 'Won' ? 'status-won' : 'status-lost'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">No data found for selected filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ElectionData;
