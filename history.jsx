import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HistoryPage() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/get-Questionn')
      .then(res => {
        setHistoryData(res.data.data.Question);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="HistoryPage">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-light nava" />
      <h1>History of Current Task</h1>
      <div className="body container-fluid">
        <div className="row">
          <div className="col-12 text-center text-white mt-5">
            <table className="w-100">
              <tr>
                <th>Date</th>
                <th>Question</th>
                <th>description</th>
                <th> RollNumber</th>
                <th>Duedate</th>
                <th>Status</th>
              </tr>
              {historyData.map(history => (
                <tr key={history._id}>
                  <td>{history.Date}</td>
                  <td>{history.Question}</td>
                  <td>{history.Description}</td>
                  <td>{history.RollNumber}</td>
                  <td>{history.Duedate}</td>
                  <td>{history.Status}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
