import styles from '../styles/MyMessage.module.css'


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
            
        </div>
    )
}

export default MyMessage;