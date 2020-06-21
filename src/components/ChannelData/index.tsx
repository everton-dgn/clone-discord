import React, {useRef, useEffect} from "react";
import {
    Container,
    Messages,
    InputWrapper,
    Input,
    InputIcon,
    InputGift,
    InputEmoticon,
    InputFileGif,
    IconsBox,
    IconsBoxes
} from "./styles";
import ChannelMessage, {Mention} from "../ChannelMessage";

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="Éverton Toffanetto"
                    date="20/06/2020"
                    content=" &#128526; Vamos estudar React JS, parece muito interessante,
                    mas para não esquecer vou repetir:"
                />

                {Array.from(Array(15).keys()).map(n => (
                    <ChannelMessage
                        key={n}
                        author="Éverton Toffanetto"
                        date="20/06/2020"
                        content="Hoje é dia de programar muito usando React JS! &#128521;"
                    />
                ))}

                <ChannelMessage
                    author="MyName de Tal"
                    date="20/06/2020"
                    content={
                        <>
                            <Mention>@Éveton Toffanetto</Mention> quem sabe faz
                            ao vivo! &#128540;
                        </>
                    }
                    isBot
                />

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
                <IconsBox>
                    <InputIcon/>
                </IconsBox>

                <Input type="text" placeholder="Conversar em #chat-livre"/>

                <IconsBoxes>
                    <InputGift/>
                    <InputFileGif/>
                    <InputEmoticon/>
                </IconsBoxes>
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;