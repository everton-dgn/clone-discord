import React from "react";
import {Container, Role, User, Avatar, Checked} from "./styles";
import MyProfile from "../../assets/User.webp";

interface UserProps {
    nickname: string;
    isBot?: boolean;
    eu?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot, eu}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}>
                {eu &&
                <img src={MyProfile} alt="Éverton Toffanetto"/>}
                {!eu && ''}
            </Avatar>

            <strong>{nickname}</strong>

            {isBot && <span><Checked/> Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível — 1</Role>
            <UserRow nickname="Éverton Toffanetto" eu/>

            <Role>Offline — 22</Role>
            <UserRow nickname="Ciclano Fulano de Tal" isBot/>
            <UserRow nickname="Ciclano Fulano de Tal e Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal e Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal e Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal e Tal" isBot/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal" isBot/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal e Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal e Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>
            <UserRow nickname="Ciclano Fulano de Tal"/>

        </Container>
    );
};

export default UserList;