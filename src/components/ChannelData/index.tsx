import React from "react";
import {Container, Messages, InputWrapper, Input, InputIcon} from "./styles";
import ChannelMessage, {Mention} from "../ChannelMessage";

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>
                <ChannelMessage
                    author="Éverton Toffanetto"
                    date="20/06/2020"
                    content="Vamos estudar React JS, parece muito interessante,
                    mas para não esquecer vou repetir:"
                />

                {Array.from(Array(15).keys()).map(n => (
                    <ChannelMessage
                        key={n}
                        author="Éverton Toffanetto"
                        date="20/06/2020"
                        content="Hoje é dia de programar muito usando React JS!"
                    />
                ))}

                <ChannelMessage
                    author="Ciclano de Tal"
                    date="20/06/2020"
                    content={
                        <>
                            Esse realmente gosta de programar, nunca vi igual
                            kkkkkkkkkkkkkkkkkkk!
                        </>
                    }
                />

                <ChannelMessage
                    author="Fulano de Tal"
                    date="20/06/2020"
                    content={
                        <>
                            <Mention>@Éveton Toffanetto</Mention>, me ensina
                            fazer interfaces como essa do Discord,
                            por favor?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;