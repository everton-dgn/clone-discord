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
    Help,
    ContainerSearch,
    ButtonSearch,
    ContainerIcons
} from "./styles";

const ChannelInfo: React.FC = () => {

    return (
        <Container>
            <Bloco1>
                <HashtagIcon/>
                <Title>chat-livre</Title>
                <Separator/>
                <Description>Canal aberto para conversas</Description>
            </Bloco1>
            <Bloco2>
                <ContainerIcons>
                    <BellNotification/>
                </ContainerIcons>

                <ContainerIcons>
                    <Pin/>
                </ContainerIcons>

                <ContainerIcons>
                    <Members/>
                </ContainerIcons>

                <ContainerSearch>
                    <Input type="text" placeholder="Buscar"/>
                    <ButtonSearch>
                        <Magnifying/>
                    </ButtonSearch>
                </ContainerSearch>

                <ContainerIcons>
                    <InboxNotifications/>
                </ContainerIcons>

                <ContainerIcons>
                    <Help/>
                </ContainerIcons>
            </Bloco2>
        </Container>
    );
};

export default ChannelInfo;