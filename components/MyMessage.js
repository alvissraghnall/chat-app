import styles from '../styles/Message.module.css'


const MyMessage = ({ message }) => {

    if (message?.attachments?.length > 0) {
        return (
            <img 
                src={message.attachments[0].file}
                alt="message attachment"
                className="message-image"
                style={{ float: "right" }}
            />
        )
    }

    return (
        <div className={`message ${styles.cover}`}>
            {message.text}
        </div>
    )
}

export default MyMessage;