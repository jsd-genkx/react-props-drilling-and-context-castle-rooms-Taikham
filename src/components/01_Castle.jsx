import Tower from "./02_Tower";

export default function Castle({ message1, handleReply }) {
    return (
        <div>
            Castle <p>Message for JSD 8: { message1 }</p>
            <Tower messagel1={message1} handleReply={handleReply} />
        </div>
    );
}