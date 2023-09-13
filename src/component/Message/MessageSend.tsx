import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo, faPhone, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const MessageSend = ({navigation}:any) => {
    const [messages, setMessages] = useState<any>([]);
    const [isTyping, setIsTyping] = useState<any>(false);
    const [isOnline, setIsOnline] = useState<any>(true);
    const data = useSelector((state: any) => state.doctorReducer.value)
    useEffect(() => {
        const receivedMessage = {
            _id: Math.random(),
            text: 'Why did the developer go broke?',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'John Doe',
                avatar: 'https://placeimg.com/50/50/people',
            },
        };
        const typingTimeout = setTimeout(() => {
            setIsTyping(false);
        }, 2000);

        setMessages((previousMessages: any) =>
            GiftedChat.append(previousMessages, [receivedMessage])
        );

        return () => clearTimeout(typingTimeout);
    }, []);

    const onSend = (newMessages = []) => {
        setMessages((previousMessages: any) => GiftedChat.append(previousMessages, newMessages));
        setIsTyping(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:'5%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('MessageScreen1', { screen: 'Message' })}>
                    <FontAwesomeIcon icon={faChevronLeft} color='#101623' size={30} />
                </TouchableOpacity>
                    <Image
                        source={data.detail.imge}
                        style={{ width: 40, height: 40, borderRadius: 20 , marginLeft:'5%'}}
                    />
                    <Text style={{ fontWeight: 'bold', marginLeft: 20, fontSize:30 }}>{data.detail.name}</Text>
                </View>
                <TouchableOpacity style={{marginTop:'5%'}}>
                    <FontAwesomeIcon icon={faVideo} color='#101623' size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:'5%', marginTop:'5%'}}>
                    <FontAwesomeIcon icon={faPhone} color='#101623' size={25} />
                </TouchableOpacity>
            </View>
            <GiftedChat
                messages={messages}
                onSend={(newMessages: any) => onSend(newMessages)}
                user={{
                    _id: 1,
                }}
                onInputTextChanged={(text) => {
                    setIsTyping(text.length > 0);
                }}
                placeholder={isTyping ? 'Typing...' : isOnline ? 'Online' : 'Offline'}
                renderSend={() => null} 
                renderAvatar={null} 
                renderUsernameOnMessage={true} 
            />
        </View>
    );
};

export default MessageSend;
