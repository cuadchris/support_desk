import { Link } from "react-router-dom";

const TicketItem = ({ ticket }) => {
  return (
    <Link to={`/ticket/${ticket._id}`}>
      <div className="ticket grow">
        <div>{new Date(ticket.createdAt).toLocaleString("en-US")}</div>
        <div>{ticket.product}</div>
        <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      </div>
    </Link>
  );
};
export default TicketItem;
