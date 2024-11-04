import Hall from "./05_Hall";

export default function Room({ message1, handleReply }) {
    return (
        <div>
            Room
            <Hall messagel1={message1} handleReply={handleReply} />
        </div>
    );
}