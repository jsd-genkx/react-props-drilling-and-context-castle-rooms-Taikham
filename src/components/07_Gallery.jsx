import Nook from "./08_Nook";

export default function Gallery({ message1, handleReply }) {
    return (
        <div>
            Gallery
            <Nook messagel1={message1} handleReply={handleReply} />
        </div>
    );
}