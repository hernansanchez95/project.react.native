import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { Alert, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { AntDesign } from '@expo/vector-icons';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const handleLogin = async () => {
        try {
            if (username && password) {
                setLoading(true);
                const { data } = await Axios.post("https://react-advance-backend.herokuapp.com/auth/local", {
                    identifier: username,
                    password,
                });
                await AsyncStorage.setItem('jwt', data.jwt);
                navigation.reset({
                    index: 0,
                    routes: [{ name: "Home" }],
                });
            }
        } catch (error) {
            Alert.alert("Error", error.message)
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <TextInput style={{ margin: 16 }}
                label="Nombre de usuario"
                onChangeText={(text) => setUsername(text)}
                value={username} />
            <TextInput style={{ margin: 16 }}
                label="Contraseña"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry />
            { loading ? (
                <Button style={styles.botonLogin} loading={true} disabled>
                    <Text>Loading...</Text>
                </Button>
            ) : (
                    <Button 
                    onPress={handleLogin} 
                    style={styles.botonLogin} 
                    mode="contained" 
                    icon={()=> <AntDesign name="login" size={24} color="white"/>}>
                        Login
                    </Button> 
                )
            }
        </>
    );
}

export default Login;

const styles = StyleSheet.create({
    botonLogin: {
        backgroundColor: "#6DC7EB",
        height: 40,
        margin: 16
    }
})