import { useState } from "react";
import { toast } from "react-toastify";

export default function Candidate({ candidate }) {
  const [referred, setReferred] = useState(false);
  const [interviewed, setInterviewed] = useState(false);
  const [hired, setHired] = useState(false);
  const [joined, setJoined] = useState(false);
  return (
    <tr>
      <th scope="row">{candidate.name}</th>
      <td>
        <input
          type="checkbox"
          name="referred"
          value="referred"
          checked={referred}
          onChange={() => setReferred(!referred)}
          className="checkbox"
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="interviewed"
          value="interviewed"
          checked={interviewed}
          onChange={() => setInterviewed(!interviewed)}
          disabled={!referred}
          className="checkbox"
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="hired"
          value="hired"
          checked={hired}
          onChange={() => setHired(!hired)}
          disabled={!referred || !interviewed}
          className="checkbox"
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="joined"
          value="joined"
          checked={joined}
          onChange={() => setJoined(!joined)}
          disabled={!referred || !interviewed || !hired}
          className="checkbox"
        />
      </td>
      <td>
        <button
          onClick={() =>
            toast.success(
              `Congrats! 🎉 ${candidate.name} has recieved $2000 reward points`
            )
          }
          disabled={!referred || !interviewed || !hired || !joined}
        >
          $2000
          <span role="img" aria-label="party-popper">
            🎉
          </span>
        </button>
      </td>
    </tr>
  );
}
