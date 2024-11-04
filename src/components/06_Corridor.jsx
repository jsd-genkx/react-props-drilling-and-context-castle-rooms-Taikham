import Gallery from "./07_Gallery";

export default function Corridor({ message1, handleReply }) {
    return (
        <div>
            Corridor
            <Gallery messagel1={message1} handleReply={handleReply} />
        </div>
    );
}