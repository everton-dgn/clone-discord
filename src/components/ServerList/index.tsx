import React from "react";
import {Container, Separator} from "./styles";

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome/>

            <Separator/>

            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton mentions={22}/>
            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton/>
        </Container>
    );
};

export default ServerList;