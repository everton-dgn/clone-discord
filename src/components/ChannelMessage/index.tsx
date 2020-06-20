import React from "react";
import {Container, Avatar, Message, Header, Content, Checked} from "./styles";
import User from "../../assets/User.webp";

export {Mention} from "./styles";

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
    author,
    date,
    content,
    hasMention,
    isBot
}) => {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}>
                {author === "Éverton Toffanetto" &&
                    <img src={User} alt="Éverton Toffanetto"/>
                }
            </Avatar>

            <Message>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span><Checked/> Bot</span>}

                    <time>{date}</time>
                </Header>
                <Content>{content}</Content>
            </Message>
        </Container>
    );
};

export default ChannelMessage;