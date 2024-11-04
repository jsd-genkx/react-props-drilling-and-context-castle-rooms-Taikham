import Corridor from "./06_Corridor";

export default function Hall({ message1, handleReply }) {
    return (
        <div>
            Hall
            <Corridor messagel1={message1} handleReply={handleReply} />
        </div>
    );
}