import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const SignIn = () => {
    const [text, onChangeText] = useState("");
    const [password, onChangePassword] = useState("");

    return (
        <>
        <View>
            <Text>
                Auth page
            </Text>
        </View>

        <View>
            <TextInput
            placeholder="Username..."
            value={text}
            onChangeText={onChangeText}
            textContentType="username"
            />

            <TextInput
            placeholder="Password..."
            value={password}
            onChangeText={onChangePassword}
            textContentType="password"
            />
        </View>
        </>
    )
}


export default auth;