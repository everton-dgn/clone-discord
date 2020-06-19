import React from "react";
import {
    Container,
    HashtagIcon,
    Title,
    Separator,
    Description,
    Bloco1,
    Bloco2,
    BellNotification,
    Pin,
    Members,
    Input,
    Magnifying,
    InboxNotifications,
    Help
} from "./styles";

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <Bloco1>
                <HashtagIcon/>
                <Title>geral</Title>
                <Separator/>
                <Description>Canal aberto para conversas</Description>
            </Bloco1>
            <Bloco2>
                <BellNotification/>
                <Pin/>
                <Members/>
                <Input placeholder="Buscar"/>
                <Magnifying/>
                <InboxNotifications/>
                <Help/>
            </Bloco2>
        </Container>
    );
};

export default ChannelInfo;