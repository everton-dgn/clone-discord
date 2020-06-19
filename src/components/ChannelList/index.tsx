import React from "react";
import {Container, Category, AddCategoryIcon, ArrowDown} from "./styles";
import ChannelButton from "../ChannelButton";

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span><ArrowDown/>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName = "chat-livre"/>
            <ChannelButton channelName = "trabalho"/>
            <ChannelButton channelName = "estudo"/>
            <ChannelButton channelName = "dúvidas"/>
            <ChannelButton channelName = "novidades"/>
        </Container>
    );
};

export default ChannelList;