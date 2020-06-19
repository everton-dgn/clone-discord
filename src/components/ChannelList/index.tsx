import React from "react";
import {Container, Category, AddCategoryIcon, ChannelButton} from "./styles";

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>

            {/*<ChannelButton channelName = "chat-livre"/>
            <ChannelButton channelName = "trabalho"/>
            <ChannelButton channelName = "estudo"/>
            <ChannelButton channelName = "dúvidas"/>
            <ChannelButton channelName = "novidades"/>*/}
        </Container>
    );
};

export default ChannelList;