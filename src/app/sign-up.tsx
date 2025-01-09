import { Text, Pressable, TextInput, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (emailAddress: string) => {
        setEmail(emailAddress);
    }

    const handlePasswordChange = (pw: string) => {
        setPassword(pw);
    }

    return (
        <SafeAreaProvider className="form-container">
            <SafeAreaView>
                <View className="form">
                    <TextInput 
                    className="form-email"
                    textContentType='emailAddress'
                    onChangeText={handleEmailChange}
                    />
                    <TextInput 
                    className="form-password"
                    textContentType='newPassword'
                    onChangeText={handlePasswordChange}
                    />

                    <Pressable onPress={() => {console.log("Pressed")}}>
                        <Text>Create Account</Text>
                    </Pressable>
                </View>

                <Text>Already registered? Sign in</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}