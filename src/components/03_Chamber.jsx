import Room from "./04_Room";

export default function Chamber({ message1, handleReply }) {
    return (
        <div>
            Chamber
            <Room messagel1={message1} handleReply={handleReply} />
        </div>
    );
}