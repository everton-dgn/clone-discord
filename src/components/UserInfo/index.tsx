import React from "react";
import {
    Container,
    Profile,
    Avatar,
    UserData,
    Icons,
    MicIcon,
    HeadphoneIcon,
    SettingsIcon
} from "./styles";
import User from "../../assets/User.webp";

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar><img src={User} alt="Éverton Toffanetto"/></Avatar>
                <UserData>
                    <strong>Éverton Toff...</strong>
                    <span>#8479</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon/>
                <HeadphoneIcon/>
                <SettingsIcon/>
            </Icons>
        </Container>
    );
};

export default UserInfo;