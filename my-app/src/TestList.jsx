import { useEffect, useState } from "react";

function TestList() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/test")
      .then(res => res.json())
      .then(data => setTests(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>저장된 테스트 데이터</h3>
      <ul>
        {tests.length === 0 && <li>데이터가 없습니다.</li>}
        {tests.map(test => (
          <li key={test.id}>
            ID: {test.id}, Name: {test.name}, Password: {test.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestList;
