import React from "react";
import {Container} from "./styles";

export Interface Props {
author: string;
date: string;
content: string | React.ReactElement | React.ReactNode;
hasMention?: bolean;
isBot?: boolean;
}

const ChannelMessage: React.FC = () => {
    return (
        <Container>
<Avatar/>
<Message>
<Header>
<stong>Éverton Toffanetto</stong>
    {isBot && <span>Bot</span>}
<time>20/06/2020</time>
</Header>
<Content>
Hoje é um grande dia, terminei esse projeto em react js!
</Content>
</Message>
        </Container>
    );
};

export default ChannelMessage;