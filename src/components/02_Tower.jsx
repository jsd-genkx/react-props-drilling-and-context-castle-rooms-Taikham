import Chamber from "./03_Chamber";

export default function Tower({ message1, handleReply }) {
    return (
        <div>
            Tower
            <Chamber messagel1={message1} handleReply={handleReply} />
        </div>
    );
}