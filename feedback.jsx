import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Feedback() {
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
      <h1>Feedback</h1>
      <div className="body container-fluid">
        <div className="row">
          <div className="col-12 text-center text-white mt-5">
            <table className="w-100">
              <tr>
                <th>Date</th>
                <th> RollNumber</th>
                <th>Feedback</th>
              </tr>
              {historyData.map(history => (
                <tr key={history._id}>
                  <td>{history.Date}</td>
                  <td>{history.RollNumber}</td>
                  <td>{history.Feedback}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;