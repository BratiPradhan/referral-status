import { candidates } from "./candidates";
import Candidate from "./Components/Candidate";
import Navbar from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <article>
      <Navbar />
      <table className="container">
        <colgroup>
          <col className="candidates"></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Candidate</th>
            <th scope="col">Refered</th>
            <th scope="col">Interviewed</th>
            <th scope="col">Hired</th>
            <th scope="col">Joined</th>
            <th scope="col">Reward</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <Candidate candidate={candidate} key={candidate.id} />
          ))}
        </tbody>
      </table>
    </article>
  );
}
