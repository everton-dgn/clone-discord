import React from "react";
import {Container, Category, AddCategoryIcon, ArrowDown} from "./styles";
import ChannelButton from "../ChannelButton";

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span><ArrowDown/>Canais de Texto</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName = "chat-livre"/>
            <ChannelButton channelName = "trabalho"/>
            <ChannelButton channelName = "estudo"/>
            <ChannelButton channelName = "dúvidas"/>
            <ChannelButton channelName = "novidades"/>
            <ChannelButton channelName = "jobs"/>

            <br/>

            <Category>
                <span><ArrowDown/>Canais de Estudo</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName = "html"/>
            <ChannelButton channelName = "css"/>
            <ChannelButton channelName = "javascript"/>
            <ChannelButton channelName = "react js"/>
            <ChannelButton channelName = "vue js"/>
            <ChannelButton channelName = "angular"/>
            <ChannelButton channelName = "php"/>
            <ChannelButton channelName = "laravel"/>
            <ChannelButton channelName = "python"/>
            <ChannelButton channelName = "java"/>
            <ChannelButton channelName = "c#"/>
            <ChannelButton channelName = "c++"/>
            <ChannelButton channelName = "wordpress"/>
            <ChannelButton channelName = "woocommerce"/>
            <ChannelButton channelName = "opencart"/>
            <ChannelButton channelName = "magento"/>
            <ChannelButton channelName = "mysql"/>
            <ChannelButton channelName = "vscode"/>
            <ChannelButton channelName = "webstorm"/>
            <ChannelButton channelName = "phpstorm"/>
            <ChannelButton channelName = "atom"/>
            <ChannelButton channelName = "bootstrap"/>
            <ChannelButton channelName = "git e github"/>

            <br/>

            <Category>
                <span><ArrowDown/>Canais de Destaque</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName = "geral"/>
            <ChannelButton channelName = "live-code"/>
            <ChannelButton channelName = "trabalhando"/>
            <ChannelButton channelName = "estudando"/>
        </Container>
    );
};

export default ChannelList;