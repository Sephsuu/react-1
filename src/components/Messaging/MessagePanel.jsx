import "./MessagePanel.css";

export default function MessagePanel(props) {
    const conversations = {
        "conversation": [
            {
                senderId: 1,
                receiverId: 2,
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cupiditate est sed expedita numquam architecto cumque, iusto omnis odio ad repellat distinctio ipsum? Sequi, quas ratione reprehenderit molestiae nemo rerum?"
            },
            {
                senderId: 1,
                receiverId: 2,
                message: "World"
            },
            {
                senderId: 2,
                receiverId: 1,
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cupiditate est sed expedita numquam architecto cumque, iusto omnis odio ad repellat distinctio ipsum? Sequi, quas ratione reprehenderit molestiae nemo rerum?"
            },
            {
                senderId: 1,
                receiverId: 3,
                message: "World"
            },
            {
                senderId: 3,
                receiverId: 1,
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cupiditate est sed expedita numquam architecto cumque, iusto omnis odio ad repellat distinctio ipsum? Sequi, quas ratione reprehenderit molestiae nemo rerum?"
            },
            {
                senderId: 1,
                receiverId: 4,
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cupiditate est sed expedita numquam architecto cumque, iusto omnis odio ad repellat distinctio ipsum? Sequi, quas ratione reprehenderit molestiae nemo rerum?"
            },
            {
                senderId: 1,
                receiverId: 4,
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, cupiditate est sed expedita numquam architecto cumque, iusto omnis odio ad repellat distinctio ipsum? Sequi, quas ratione reprehenderit molestiae nemo rerum?"
            },

        ]
    };

    const branch = props.branches.find((e) => e.id === props.branch);

    const messages = conversations.conversation.filter((e) => e.senderId === branch.id && e.receiverId === props.loggedId || e.receiverId === branch.id && e.senderId === props.loggedId);
    
    
    
    return(
        <section className="message_panel overflow-y-auto">
            <div className="branch_header py-2 sticky-top d-flex justify-content-center align-items-center">
                <button onClick={ () => props.setMessageBarStatus(!props.messageBarStatus) } className="btn d-none"><i className="fa-solid fa-bars"></i></button>
                <h5 className="text-center fw-bold font-md mt-2">{ branch.branch }</h5>
            </div>
            <div>
                {
                    messages.map((message, index) => (
                        message.senderId === props.loggedId ? (
                            <div className="msg_cloud text-end my-1 me-2 ms-auto w-50" key={ index }><div className="send rounded-2 w-auto d-inline-block"><p className="font-sm px-2 py-1">{ message.message }</p></div></div>
                        ) : (
                            <div className="msg_cloud my-1 ms-2 w-50" key={ index }><div className="receive rounded-2 w-auto d-inline-block align-items-center"><p className="font-sm px-2 py-1">{ message.message }</p></div></div>
                        )
                    ))
                }
            </div>
        </section>
    );
}